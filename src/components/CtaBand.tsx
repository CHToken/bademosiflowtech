import Reveal from './Reveal'
import { PhoneIcon } from './Icons'

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
          <a className="btn btn-primary-accent" href="#book">
            <PhoneIcon className="icon" />
            <span>Get Free Project Quote</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
