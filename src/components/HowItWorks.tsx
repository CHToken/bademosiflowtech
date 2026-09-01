import Section from './Section'
import Reveal from './Reveal'
import { PhoneIcon, CheckIcon, WrenchIcon, ShieldCheckIcon } from './Icons'

interface ProcessStep {
  num: string
  title: string
  desc: string
  pill: string
  icon: typeof PhoneIcon
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'Tell us the problem',
    desc: 'Call or WhatsApp us any time, day or night. Describe the issue and your location — we answer 24/7 with zero call delay.',
    pill: '24/7 Response',
    icon: PhoneIcon,
  },
  {
    num: '02',
    title: 'Get an itemized quote',
    desc: 'Transparent upfront pricing before any work begins. No surprise extra fees and no call-out charges on booked jobs.',
    pill: '0% Hidden Fees',
    icon: CheckIcon,
  },
  {
    num: '03',
    title: 'We fix it fast',
    desc: 'A Bademosi FlowTech master plumber arrives with fully equipped tools — 45-minute average emergency response in Lagos.',
    pill: '45-Min Avg Arrival',
    icon: WrenchIcon,
  },
  {
    num: '04',
    title: 'Sign-off & warranty',
    desc: 'We pressure-test the entire pipework in front of you, walk you through the job, and back every single work with a warranty.',
    pill: '100% Guaranteed',
    icon: ShieldCheckIcon,
  },
]

export default function HowItWorks() {
  return (
    <Section
      id="how"
      titleId="how-title"
      eyebrow="How it works"
      title="From call to fixed in four steps"
      lead="No guesswork and no surprises — just a straight path from your first call to a finished, guaranteed job."
      center
      className="process-redesign-section"
    >
      <div className="process-pipeline-container">
        {/* Animated Hydro Pipeline Connection Beam (Desktop) */}
        <div className="process-pipeline-beam" aria-hidden="true" />

        <div className="process-grid">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal key={step.num} delay={i * 80}>
                <article className="process-card">
                  <span className="process-watermark-num">{step.num}</span>

                  <div className="process-card-header">
                    <div className="process-icon-box">
                      <Icon className="icon-sm text-sky" />
                    </div>
                    <span className="process-pill-badge">{step.pill}</span>
                  </div>

                  <h3 className="process-card-title">{step.title}</h3>
                  <p className="process-card-desc">{step.desc}</p>

                  <div className="process-card-footer">
                    <span className="process-step-indicator">Stage {step.num} of 04</span>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
