import { PHONE, WA_LINK } from '../constants'
import { PhoneIcon, WhatsAppIcon } from './Icons'

export default function StickyCta() {
  return (
    <div className="sticky-cta" role="region" aria-label="Quick contact options">
      <a className="btn btn-wa" href={WA_LINK} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="icon" />
        WhatsApp us
      </a>
      <a className="btn btn-emergency" href={`tel:${PHONE}`}>
        <PhoneIcon className="icon" />
        Call now
      </a>
    </div>
  )
}
