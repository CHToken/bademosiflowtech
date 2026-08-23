import { PHONE, PHONE_DISPLAY, WA_LINK } from '../constants'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="brand" href="#top">
              <img src="/logo.svg" alt="Bademosi FlowTech" width="200" height="45" />
            </a>
            <p className="footer-blurb">
              Independent master plumbing specialist serving Lagos, with direct project contracts across Abuja and Port
              Harcourt. Personal master craftsmanship, transparent pricing, and 100% guaranteed work on every visit.
            </p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Emergency repairs</a>
              </li>
              <li>
                <a href="#services">Borehole &amp; tanks</a>
              </li>
              <li>
                <a href="#services">Drain unblocking</a>
              </li>
              <li>
                <a href="#services">Bathroom &amp; kitchen fitting</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Work &amp; Trust</h4>
            <ul>
              <li>
                <a href="#gallery">Recent work gallery</a>
              </li>
              <li>
                <a href="#reviews">Client reviews</a>
              </li>
              <li>
                <a href="#areas">Coverage areas</a>
              </li>
              <li>
                <a href="#book">Request a quote</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Direct Contact</h4>
            <ul>
              <li>
                <a href={`tel:${PHONE}`}>Call: {PHONE_DISPLAY}</a>
              </li>
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  WhatsApp direct
                </a>
              </li>
              <li>24/7 emergency response</li>
              <li>No middleman fees</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Bademosi FlowTech — Plumbing Solutions. All rights reserved.</span>
          <span>Independent Master Plumber · Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  )
}
