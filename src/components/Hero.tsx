import { PHONE, PHONE_DISPLAY, WA_LINK, TIKTOK_URL, INSTAGRAM_URL } from '../constants'
import { CheckIcon, PhoneIcon, WhatsAppIcon, ShieldCheckIcon, CalendarIcon, TikTokIcon, InstagramIcon } from './Icons'
import Reveal from './Reveal'

const TRUST_POINTS = [
  'Licensed, insured plumbing contractor',
  '45-minute average emergency response in Lagos',
  'Itemized quotes before work begins',
  'Workmanship warranty on every job',
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Plumbing contractor · Lagos · 24/7 emergency response</p>

          <h1>
            Pipe burst? Blocked drain? <span className="accent">We fix it right the first time.</span>
          </h1>

          <p className="lede">
            <strong>Bademosi FlowTech</strong> is a licensed plumbing contractor serving homes and businesses across
            Lagos, Abuja, Ogun, Ibadan, Ondo and Asaba–Onitsha. We handle emergency repairs, household plumbing,
            borehole and water system installations, and full plumbing works for buildings, condict and modern
            developments, with clean workmanship and guaranteed results on every job.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-emergency" href={`tel:${PHONE}`} aria-label={`Call Bademosi FlowTech on ${PHONE_DISPLAY}`}>
              <PhoneIcon className="icon" />
              Call now ({PHONE_DISPLAY})
            </a>
            <a className="btn btn-wa" href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="icon" />
              WhatsApp us
            </a>
            <a className="btn btn-ghost" href="#book">
              <CalendarIcon className="icon" />
              Book a service
            </a>
          </div>

          <div className="hero-socials">
            <span>Follow our work:</span>
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Bademosi FlowTech on TikTok">
              <TikTokIcon className="icon-sm" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Bademosi FlowTech on Instagram">
              <InstagramIcon className="icon-sm" />
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
                alt="Bademosi FlowTech plumber inspecting a water manifold installation"
                className="craftsman-img"
                width="960"
                height="640"
              />
              <div className="craftsman-gradient-overlay" />

              <div className="craftsman-floating-badge top-badge">
                <ShieldCheckIcon className="icon-sm text-sky" />
                <div>
                  <strong>Licensed &amp; insured</strong>
                  <span>Workmanship warranty on every job</span>
                </div>
              </div>

              <div className="craftsman-floating-badge bottom-badge">
                <span className="pulse" aria-hidden="true" />
                <div>
                  <strong>Average response: 45 minutes</strong>
                  <span>Ikeja · Lekki · Ikoyi · Surulere · VI · Ajah</span>
                </div>
              </div>
            </div>

            <div className="craftsman-card-footer">
              <div className="craftsman-stat">
                <span className="stat-value">8+</span>
                <span className="stat-label">Years in business</span>
              </div>
              <div className="stat-divider" />
              <div className="craftsman-stat">
                <span className="stat-value">2,400+</span>
                <span className="stat-label">Jobs completed</span>
              </div>
              <div className="stat-divider" />
              <div className="craftsman-stat">
                <span className="stat-value">100%</span>
                <span className="stat-label">Workmanship warranty</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
