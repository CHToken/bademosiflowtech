import { PHONE, PHONE_DISPLAY } from '../constants'
import { PhoneIcon } from './Icons'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Bademosi FlowTech Master Plumbing, Lagos — back to top">
          <img src="/logo.svg" alt="Bademosi FlowTech Plumbing Solutions" width="200" height="45" />
        </a>
        <nav className="site-nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#gallery">Work &amp; Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#areas">Coverage</a>
          <a href="#book">Get a quote</a>
        </nav>
        <a className="header-call" href={`tel:${PHONE}`} aria-label={`Call Bademosi FlowTech directly on ${PHONE_DISPLAY}`}>
          <PhoneIcon className="icon-sm" />
          <span className="label">{PHONE_DISPLAY}</span>
        </a>
      </div>
    </header>
  )
}
