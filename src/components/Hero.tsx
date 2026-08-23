import { PHONE, PHONE_DISPLAY, WA_LINK } from '../constants'
import { CheckIcon, PhoneIcon, WhatsAppIcon, ShieldCheckIcon, SparklesIcon } from './Icons'
import Reveal from './Reveal'

const TRUST_POINTS = [
  'Direct Master Plumber — No Middlemen or Subcontractors',
  '45-Minute Emergency Direct Response in Lagos',
  'Upfront Transparent Pricing — Zero Call-out Charge for Booked Jobs',
  '100% Clean Site Promise & Workmanship Guarantee',
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow-badge">
            <span className="live-status-dot" aria-hidden="true" />
            <span className="eyebrow-text">Independent Master Plumber · Lagos · 24/7 Direct Callouts</span>
          </div>

          <h1>
            Pipe burst? Blocked drain? <br />
            <span className="accent">I&apos;ll fix it right the first time.</span>
          </h1>

          <p className="lede">
            You deal directly with <strong>Bademosi FlowTech</strong> — an independent, owner-operated master plumbing
            service in Lagos. No middleman agencies, no call-center delays, and no subcontracting to random handymen.
            From urgent midnight leak detection and drain unblocking to full borehole setups, water heaters, and luxury
            bathroom pipe refitting — you get personal master craftsmanship and clean, guaranteed results on every job.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-emergency" href={`tel:${PHONE}`} aria-label={`Call Bademosi on ${PHONE_DISPLAY}`}>
              <PhoneIcon className="icon" />
              Call Master Plumber ({PHONE_DISPLAY})
            </a>
            <a className="btn btn-wa" href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="icon" />
              WhatsApp Direct
            </a>
            <a className="btn btn-ghost" href="#gallery">
              <SparklesIcon className="icon" />
              View Work Gallery
            </a>
          </div>

          <ul className="trust-row">
            {TRUST_POINTS.map((point) => (
              <li key={point}>
                <CheckIcon className="icon-sm text-sky" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="hero-art">
          <div className="craftsman-hero-card">
            <div className="craftsman-img-container">
              <img
                src="/gallery/master-craftsman.jpg"
                alt="Master plumber Bademosi inspecting water manifold valves"
                className="craftsman-img"
              />
              <div className="craftsman-gradient-overlay" />

              <div className="craftsman-floating-badge top-badge">
                <ShieldCheckIcon className="icon-sm text-sky" />
                <div>
                  <strong>Owner-Operated &amp; Insured</strong>
                  <span>Direct Personal Accountability</span>
                </div>
              </div>

              <div className="craftsman-floating-badge bottom-badge">
                <span className="pulse" aria-hidden="true" />
                <div>
                  <strong>Average Response: 45 Minutes</strong>
                  <span>Ikeja · Lekki · Ikoyi · Surulere · VI · Ajah</span>
                </div>
              </div>
            </div>

            <div className="craftsman-card-footer">
              <div className="craftsman-stat">
                <span className="stat-value">12+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider" />
              <div className="craftsman-stat">
                <span className="stat-value">2,400+</span>
                <span className="stat-label">Direct Fixes</span>
              </div>
              <div className="stat-divider" />
              <div className="craftsman-stat">
                <span className="stat-value">100%</span>
                <span className="stat-label">Master Guarantee</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
