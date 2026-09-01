import { PHONE, PHONE_DISPLAY, WA_LINK } from '../constants'
import { PhoneIcon, WhatsAppIcon } from './Icons'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <p className="topbar-emergency">
          <span className="pulse-dot-red" aria-hidden="true" />
          <span>24/7 emergency plumbing · 45-min response in Lagos</span>
        </p>
        <div className="topbar-actions">
          <a href={`tel:${PHONE}`}>
            <PhoneIcon className="icon-xs" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="icon-xs" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}
