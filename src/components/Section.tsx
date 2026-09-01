import { ReactNode } from 'react'

interface SectionProps {
  id: string
  titleId: string
  eyebrow: string
  title: string
  lead?: string
  center?: boolean
  className?: string
  children: ReactNode
}

export default function Section({ id, titleId, eyebrow, title, lead, center, className, children }: SectionProps) {
  return (
    <section className={`section${className ? ` ${className}` : ''}`} id={id} aria-labelledby={titleId}>
      <div className="container">
        <div className={center ? 'section-head center' : 'section-head'}>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={titleId}>{title}</h2>
          {lead ? <p className="section-lead">{lead}</p> : null}
        </div>
        {children}
      </div>
    </section>
  )
}
