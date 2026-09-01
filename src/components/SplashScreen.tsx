import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [phase, setPhase] = useState<'loading' | 'leaving' | 'done'>('loading')

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const MIN_MS = reduceMotion ? 400 : 1400
    const CAP_MS = 3000
    const started = Date.now()
    let minTimer = 0
    let capTimer = 0

    const finish = () => {
      if (phase !== 'loading') return
      const wait = Math.max(0, MIN_MS - (Date.now() - started))
      minTimer = window.setTimeout(() => setPhase('leaving'), wait)
    }

    if (document.readyState === 'complete') {
      finish()
    } else {
      window.addEventListener('load', finish, { once: true })
      capTimer = window.setTimeout(finish, CAP_MS)
    }

    return () => {
      window.clearTimeout(minTimer)
      window.clearTimeout(capTimer)
      window.removeEventListener('load', finish)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (phase === 'leaving') {
      const t = window.setTimeout(() => setPhase('done'), 450)
      return () => window.clearTimeout(t)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'done') return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [phase])

  if (phase === 'done') return null

  return (
    <div
      className={`splash${phase === 'leaving' ? ' leaving' : ''}`}
      role="status"
      aria-label="Bademosi FlowTech is loading"
    >
      <div className="splash-inner">
        <div className="splash-drop" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <defs>
              <clipPath id="splash-drop-clip">
                <path d="M12 3c3 4.5 5.5 7.2 5.5 10a5.5 5.5 0 1 1-11 0C6.5 10.2 9 7.5 12 3z" />
              </clipPath>
            </defs>
            <path
              className="splash-drop-outline"
              d="M12 3c3 4.5 5.5 7.2 5.5 10a5.5 5.5 0 1 1-11 0C6.5 10.2 9 7.5 12 3z"
            />
            <g clipPath="url(#splash-drop-clip)">
              <rect className="splash-drop-fill" x="0" y="24" width="24" height="24" />
            </g>
          </svg>
        </div>
        <p className="splash-name">Bademosi FlowTech</p>
        <p className="splash-tagline">Plumbing Solutions · 24/7 emergency response</p>
        <div className="splash-progress" aria-hidden="true">
          <div className="splash-progress-bar" />
        </div>
        <p className="sr-only">Loading Bademosi FlowTech plumbing services</p>
      </div>
    </div>
  )
}
