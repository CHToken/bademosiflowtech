import { useEffect, useRef, useState, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const style = delay > 0 && !inView ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <div
      ref={ref}
      className={`reveal${inView ? ' is-in' : ''}${className ? ` ${className}` : ''}`}
      style={style}
    >
      {children}
    </div>
  )
}
