import Reveal from './Reveal'
import { PHONE, PHONE_DISPLAY, WA_LINK } from '../constants'
import { PhoneIcon, WhatsAppIcon } from './Icons'

export default function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band-inner">
        <Reveal>
          <h2 id="cta-title">Plumbing problem? Let's fix it now.</h2>
          <p>
            Burst pipe, blocked drain or a full installation — call or WhatsApp us and get a quote within minutes,
            any time of day or night.
          </p>
        </Reveal>
        <Reveal className="cta-band-actions" delay={80}>
          <a className="btn btn-emergency" href={`tel:${PHONE}`}>
            <PhoneIcon className="icon" />
            Call {PHONE_DISPLAY}
          </a>
          <a className="btn btn-ghost" href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="icon" />
            WhatsApp us
          </a>
        </Reveal>
      </div>
    </section>
  )
}
