import { PHONE, PHONE_DISPLAY, TIKTOK_URL, INSTAGRAM_URL } from '../constants'
import { PhoneIcon, TikTokIcon, InstagramIcon } from './Icons'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Bademosi FlowTech Plumbing Solutions, Lagos — back to top">
          <img src="/logo.svg" alt="Bademosi FlowTech Plumbing Solutions" width="200" height="45" />
        </a>
        <nav className="site-nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#gallery">Our work</a>
          <a href="#reviews">Reviews</a>
          <a href="#areas">Coverage</a>
          <a href="#book">Get a quote</a>
        </nav>
        <div className="header-actions">
          <a className="header-social" href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Bademosi FlowTech on TikTok">
            <TikTokIcon className="icon-sm" />
          </a>
          <a className="header-social" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Bademosi FlowTech on Instagram">
            <InstagramIcon className="icon-sm" />
          </a>
          <a className="header-call" href={`tel:${PHONE}`} aria-label={`Call Bademosi FlowTech directly on ${PHONE_DISPLAY}`}>
            <PhoneIcon className="icon-sm" />
            <span className="label">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
