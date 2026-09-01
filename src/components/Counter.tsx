import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export default function Counter({
  end,
  prefix = '',
  suffix = '',
  duration = 1500,
  className = '',
}: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            let startTimestamp: number | null = null

            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp
              const progress = Math.min((timestamp - startTimestamp) / duration, 1)
              // Ease out quad
              const easeOut = 1 - (1 - progress) * (1 - progress)
              setCount(Math.floor(easeOut * end))

              if (progress < 1) {
                window.requestAnimationFrame(step)
              } else {
                setCount(end)
              }
            }

            window.requestAnimationFrame(step)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
