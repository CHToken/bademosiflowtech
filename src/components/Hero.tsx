import { PHONE, PHONE_DISPLAY, WA_LINK, TIKTOK_URL, INSTAGRAM_URL } from '../constants'
import { CheckIcon, PhoneIcon, WhatsAppIcon, ShieldCheckIcon, CalendarIcon, TikTokIcon, InstagramIcon } from './Icons'
import Reveal from './Reveal'
import Counter from './Counter'

const HERO_TRUST_BADGES = [
  {
    title: 'Licensed & Insured',
    desc: '100% Workmanship Warranty',
  },
  {
    title: '45-Min Emergency Response',
    desc: '24/7 Rapid Dispatch Team',
  },
  {
    title: 'Nationwide & International',
    desc: 'All 36 States in Nigeria & Global Contracts',
  },
]

export default function Hero() {
  return (
    <section className="hero bg-grain" id="top">
      <div className="hero-mesh-overlay" aria-hidden="true" />

      {/* Morphing Water Shapes Layer */}
      <div className="hero-water-shapes" aria-hidden="true">
        <div className="water-shape water-shape-1" />
        <div className="water-shape water-shape-2" />
        <div className="water-shape water-shape-3" />
      </div>

      {/* Dynamic Water Drops Stream (14 Teardrop Water Drops Facing Upright) */}
      <div className="hero-water-bubbles" aria-hidden="true">
        <div className="water-bubble water-bubble-1" />
        <div className="water-bubble water-bubble-2" />
        <div className="water-bubble water-bubble-3" />
        <div className="water-bubble water-bubble-4" />
        <div className="water-bubble water-bubble-5" />
        <div className="water-bubble water-bubble-6" />
        <div className="water-bubble water-bubble-7" />
        <div className="water-bubble water-bubble-8" />
        <div className="water-bubble water-bubble-9" />
        <div className="water-bubble water-bubble-10" />
        <div className="water-bubble water-bubble-11" />
        <div className="water-bubble water-bubble-12" />
        <div className="water-bubble water-bubble-13" />
        <div className="water-bubble water-bubble-14" />
      </div>

      <div className="container hero-grid-split">
        {/* Left Side: Copy, Headline, CTA, Trust Badges */}
        <div className="hero-left-copy">
          <div className="hero-eyebrow-chip">
            <span className="live-pulse-dot" aria-hidden="true" />
            <span>LICENSED PLUMBING CONTRACTOR · NATIONWIDE &amp; INTERNATIONAL</span>
          </div>

          <h1 className="hero-oversized-title">
            Pipe burst? Blocked drain?{' '}
            <span className="accent-text-glow">We fix it right the first time.</span>
          </h1>

          <p className="hero-lead-text">
            <strong>Bademosi FlowTech</strong> is a licensed plumbing contractor serving homes, commercial projects, and estate developments{' '}
            <span className="highlight-area">nationwide across all 36 states in Nigeria</span> and on{' '}
            <span className="highlight-area">international project contracts</span>. From 24/7 Lagos emergency callouts to borehole engineering, water treatment, and full civil plumbing works for multi-story buildings, we deliver guaranteed workmanship on every job.
          </p>

          {/* Primary CTA Buttons - Bright Accent #FF6B00 for Primary Call Button */}
          <div className="hero-cta-group">
            <a
              className="btn btn-primary-accent"
              href={`tel:${PHONE}`}
              aria-label={`Call Bademosi FlowTech directly on ${PHONE_DISPLAY}`}
            >
              <PhoneIcon className="icon" />
              <span>Call Now ({PHONE_DISPLAY})</span>
            </a>
            <a
              className="btn btn-wa-secondary"
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="icon" />
              <span>WhatsApp Us</span>
            </a>
            <a className="btn btn-outline-ghost" href="#book">
              <CalendarIcon className="icon" />
              <span>Book Service</span>
            </a>
          </div>

          {/* 2-3 Trust Badges Grid */}
          <div className="hero-trust-badges">
            {HERO_TRUST_BADGES.map((badge, i) => (
              <div key={i} className="trust-badge-card">
                <ShieldCheckIcon className="trust-badge-icon text-sky" />
                <div className="trust-badge-text">
                  <strong>{badge.title}</strong>
                  <span>{badge.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Links */}
          <div className="hero-social-strip">
            <span className="social-label">Follow live project videos:</span>
            <div className="social-links-row">
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Bademosi FlowTech on TikTok">
                <TikTokIcon className="icon-sm" />
                <span>TikTok</span>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Bademosi FlowTech on Instagram">
                <InstagramIcon className="icon-sm" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Full-bleed Real Photo with Ken Burns Zoom Effect */}
        <Reveal className="hero-right-media">
          <div className="hero-media-wrapper">
            <div className="kenburns-container">
              <img
                src="/hero-work.jpg"
                alt="Bademosi FlowTech plumbing engineering team executing on-site plumbing work"
                className="kenburns-img"
                width="1200"
                height="900"
              />
            </div>
            <div className="media-gradient-vignette" />

            {/* Live Floating Glassmorphic Chips */}
            <div className="glass-chip floating-top">
              <span className="pulse-dot-green" aria-hidden="true" />
              <div>
                <strong>24/7 Emergency Dispatch</strong>
                <span>Avg response: 45 mins in Lagos · Deployed Nationwide &amp; Globally</span>
              </div>
            </div>

            <div className="glass-chip floating-bottom">
              <div className="glass-stat-row">
                <div className="glass-stat-item">
                  <span className="glass-stat-num">
                    <Counter end={10} suffix="+" />
                  </span>
                  <span className="glass-stat-lbl">Years Active</span>
                </div>
                <div className="glass-stat-divider" />
                <div className="glass-stat-item">
                  <span className="glass-stat-num">
                    <Counter end={2400} suffix="+" />
                  </span>
                  <span className="glass-stat-lbl">Jobs Fixed</span>
                </div>
                <div className="glass-stat-divider" />
                <div className="glass-stat-item">
                  <span className="glass-stat-num">
                    <Counter end={100} suffix="%" />
                  </span>
                  <span className="glass-stat-lbl">Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Trust points bar */}
      <div className="container hero-proof-bar">
        <div className="proof-pills-row">
          <div className="proof-pill">
            <CheckIcon className="icon-sm text-sky" />
            <span>Licensed &amp; Insured Contractor</span>
          </div>
          <div className="proof-pill">
            <CheckIcon className="icon-sm text-sky" />
            <span>45-Minute Lagos Emergency Response</span>
          </div>
          <div className="proof-pill">
            <CheckIcon className="icon-sm text-sky" />
            <span>Itemized Upfront Estimates</span>
          </div>
          <div className="proof-pill">
            <CheckIcon className="icon-sm text-sky" />
            <span>Coverage: All 36 States in Nigeria &amp; International Project Contracts</span>
          </div>
        </div>
      </div>
    </section>
  )
}
