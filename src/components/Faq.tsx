import { useState } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import { ArrowIcon, PhoneIcon, WhatsAppIcon, ShieldCheckIcon } from './Icons'
import { PHONE, PHONE_DISPLAY, WA_LINK } from '../constants'

interface FaqItem {
  num: string
  q: string
  a: string
  tag?: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    num: '01',
    q: 'How quickly can you reach my property?',
    a: 'For emergency plumbing calls in Lagos, our average arrival time is 45 minutes. Across Abuja, Ogun, Ibadan, Ondo, and Asaba–Onitsha, we schedule rapid dispatch for the earliest available slot — usually same-day or next-day.',
    tag: 'Emergency Response',
  },
  {
    num: '02',
    q: 'Is there a call-out charge?',
    a: 'No hidden call-out charges for booked jobs in our covered areas. You receive an itemized, transparent price quote before any work begins, so you know the exact cost upfront.',
    tag: 'Upfront Quotes',
  },
  {
    num: '03',
    q: 'Do you cover my area?',
    a: 'We operate nationwide across all 36 states in Nigeria (Lagos, Abuja, Ogun, Oyo/Ibadan, Ondo, Delta/Anambra, Rivers/Port Harcourt, and beyond) and execute international plumbing project contracts. Within Lagos, we maintain 24/7 rapid emergency dispatch units covering Ikeja, Lekki, Victoria Island, Ikoyi, Surulere, Yaba, Gbagada, Ajah, Festac, Ikorodu, Agege, and all local council areas.',
    tag: 'Service Coverage',
  },
  {
    num: '04',
    q: 'Is your work guaranteed?',
    a: 'Yes! Every job is backed by a 100% Workmanship Warranty. All newly fitted pipework, valves, and water systems are pressure-tested in front of you before handover.',
    tag: '100% Warranty',
  },
  {
    num: '05',
    q: 'Can you handle boreholes and complete water systems?',
    a: 'Absolutely. We deliver end-to-end water engineering: borehole drilling, submersible pumps, overhead elevated tanks, automatic float switches, booster pumps, and pressure-rated PPR/PVC distribution lines.',
    tag: 'Water Engineering',
  },
  {
    num: '06',
    q: 'Do you take on commercial and building projects?',
    a: 'Yes. We deliver full plumbing works for multi-story residential buildings, commercial properties, factories, condict plumbing, and civil construction developments across Nigeria.',
    tag: 'Commercial Projects',
  },
]

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].q)

  return (
    <Section
      id="faq"
      titleId="faq-title"
      eyebrow="Common questions"
      title="Answers before you even ask"
      lead="Everything homeowners, estate managers, and businesses ask us most — answered clearly up front."
      center
      className="faq-redesign-section"
    >
      <div className="faq-layout-grid">
        {/* Left Sticky Sidebar Card */}
        <Reveal className="faq-sidebar-col">
          <div className="faq-sticky-card">
            <div className="faq-sidebar-badge">
              <span className="pulse-dot-green" aria-hidden="true" />
              <span>24/7 SUPPORT &amp; DISPATCH</span>
            </div>

            <h3 className="faq-sidebar-title">Have an urgent plumbing question?</h3>

            <p className="faq-sidebar-desc">
              Our licensed master plumbers are on standby day and night. Speak directly with a technician for instant guidance or emergency dispatch.
            </p>

            <div className="faq-sidebar-actions">
              <a
                className="btn btn-primary-accent btn-block"
                href={`tel:${PHONE}`}
                aria-label={`Call Bademosi FlowTech directly on ${PHONE_DISPLAY}`}
              >
                <PhoneIcon className="icon-sm" />
                <span>Call {PHONE_DISPLAY}</span>
              </a>
              <a
                className="btn btn-wa-secondary btn-block"
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="icon-sm" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="faq-sidebar-trust">
              <ShieldCheckIcon className="icon-sm text-sky" />
              <span>100% Workmanship Warranty on Every Job</span>
            </div>
          </div>
        </Reveal>

        {/* Right Accordion Column */}
        <div className="faq-accordion-col">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.q
            const panelId = `faq-panel-${item.num}`
            return (
              <Reveal key={item.q}>
                <div className={`faq-card-item${isOpen ? ' is-open' : ''}`}>
                  <h3 className="faq-card-heading">
                    <button
                      type="button"
                      className="faq-card-trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? null : item.q)}
                    >
                      <div className="faq-card-head-left">
                        <span className="faq-item-num">{item.num}</span>
                        <span className="faq-item-question">{item.q}</span>
                      </div>
                      <div className="faq-card-head-right">
                        {item.tag ? <span className="faq-item-tag">{item.tag}</span> : null}
                        <span className="faq-chevron-badge">
                          <ArrowIcon className="icon-sm faq-chevron-icon" />
                        </span>
                      </div>
                    </button>
                  </h3>
                  <div className="faq-card-panel" id={panelId} role="region" aria-hidden={!isOpen}>
                    <div className="faq-card-panel-inner">
                      <p className="faq-card-answer">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
