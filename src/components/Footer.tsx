import { PHONE, PHONE_DISPLAY, WA_LINK, TIKTOK_URL, INSTAGRAM_URL } from '../constants'
import { TikTokIcon, InstagramIcon } from './Icons'

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
              Licensed plumbing contractor for homes and businesses. Emergency repairs, household plumbing, borehole
              and water system installations, and building plumbing across Lagos, Abuja, Ogun, Ibadan, Ondo and
              Asaba–Onitsha, with a workmanship warranty on every job.
            </p>
            <div className="footer-socials">
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Bademosi FlowTech on TikTok"
              >
                <TikTokIcon className="icon" />
                TikTok
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Bademosi FlowTech on Instagram"
              >
                <InstagramIcon className="icon" />
                Instagram
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Emergency repairs</a>
              </li>
              <li>
                <a href="#services">Household plumbing</a>
              </li>
              <li>
                <a href="#services">Borehole &amp; water systems</a>
              </li>
              <li>
                <a href="#services">Building &amp; condict plumbing</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Work &amp; trust</h4>
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
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`tel:${PHONE}`}>Call: {PHONE_DISPLAY}</a>
              </li>
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  WhatsApp us
                </a>
              </li>
              <li>24/7 emergency response</li>
              <li>Lagos · Abuja · Ogun · Ibadan · Ondo · Asaba–Onitsha</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Bademosi FlowTech — Plumbing Solutions. All rights reserved.</span>
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  )
}
