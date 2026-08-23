import { FormEvent, useState } from 'react'
import Reveal from './Reveal'
import { CheckIcon, PhoneIcon, WhatsAppIcon } from './Icons'
import { PHONE, PHONE_DISPLAY, WA_LINK, WHATSAPP_NUMBER } from '../constants'

const SERVICES = [
  'Borehole & water tank setup',
  'Leak detection & repair',
  'Bathroom pipe fitting',
  'Drain unblocking',
  'Water heater installation',
  'Toilet repair & replacement',
  'Kitchen plumbing',
  'Emergency pipe repair',
  'Emergency, not sure what\u2019s wrong',
]

export default function Booking() {
  const [waUrl, setWaUrl] = useState(`${WA_LINK}?text=${encodeURIComponent('Hello Bademosi FlowTech! I need a plumber.')}`)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    const data = new FormData(form)
    const text =
      'Hello Bademosi FlowTech! I would like a quick quote.\n\n' +
      `Name: ${data.get('name')}\n` +
      `Phone: ${data.get('phone')}\n` +
      `Location: ${data.get('location')}\n` +
      `Service: ${data.get('service')}`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    setWaUrl(url)
    setSubmitted(true)
    window.open(url, '_blank', 'noopener')
  }

  return (
    <section className="section" id="book" aria-labelledby="book-title">
      <div className="container book-grid">
        <div>
          <Reveal className="section-head">
            <p className="eyebrow">Get a quote</p>
            <h2 id="book-title">Quick quote in minutes</h2>
            <p className="section-lead">
              Tell us what you need. We reply on WhatsApp with a price, usually within 10 minutes.
            </p>
          </Reveal>
          <Reveal>
            <form className="quote-form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" autoComplete="name" placeholder="e.g. Chinedu Okoro" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 0803 123 4567" required />
              </div>
              <div className="field">
                <label htmlFor="location">Location / address</label>
                <input id="location" name="location" type="text" autoComplete="street-address" placeholder="e.g. 14 Allen Avenue, Ikeja" required />
              </div>
              <div className="field">
                <label htmlFor="service">Service needed</label>
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled>
                    Choose a service
                  </option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              {submitted ? (
                <div className="form-success field-full" role="status">
                  <p>
                    <strong>Almost done.</strong> WhatsApp has opened with your request details. If it did not
                    open,{' '}
                    <a href={waUrl} target="_blank" rel="noopener noreferrer">
                      tap here
                    </a>{' '}
                    or call us on <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.
                  </p>
                </div>
              ) : null}
              <button className="btn btn-wa btn-block" type="submit">
                <WhatsAppIcon className="icon" />
                Request quick quote on WhatsApp
              </button>
              <p className="form-fine">
                <CheckIcon className="icon-sm" />
                No call-out charge for booked jobs in covered areas
              </p>
            </form>
          </Reveal>
        </div>

        <aside className="book-aside">
          <Reveal>
            <div className="contact-card">
              <h3>Prefer to talk?</h3>
              <p>For emergencies, calling is always fastest. We answer 24 hours a day, 7 days a week.</p>
              <a className="btn btn-emergency btn-block" href={`tel:${PHONE}`}>
                <PhoneIcon className="icon" />
                Call {PHONE_DISPLAY}
              </a>
              <a className="btn btn-ghost btn-block" href={waUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="icon" />
                WhatsApp us
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className="contact-card">
              <h3>Working hours</h3>
              <p>
                <strong className="white">24/7</strong> for emergencies.
                <br />
                Installations: Mon to Sat, 8am to 6pm.
              </p>
            </div>
          </Reveal>
        </aside>
      </div>
    </section>
  )
}
