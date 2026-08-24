import Reveal from './Reveal'
import { CheckIcon } from './Icons'

const AREAS = [
  'Lagos',
  'Abuja',
  'Ogun State',
  'Ibadan',
  'Ondo',
  'Asaba – Onitsha',
]

const LAGOS_AREAS = ['Ikeja', 'Lekki', 'Victoria Island', 'Ikoyi', 'Surulere', 'Yaba', 'Gbagada', 'Ajah', 'Festac', 'Ikorodu', 'Agege']

export default function Areas() {
  return (
    <section className="section areas" id="areas" aria-labelledby="areas-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Coverage areas</p>
          <h2 id="areas-title">Where we work</h2>
          <p className="areas-note">
            Household and commercial plumbing delivered across <strong>six states and regions</strong>, with 24/7
            emergency response across <strong>Lagos mainland and island</strong>.
          </p>
        </Reveal>
        <Reveal>
          <ul className="chip-list">
            {AREAS.map((area) => (
              <li className="chip chip-wide" key={area}>
                <CheckIcon className="icon-sm" />
                {area}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <p className="areas-sub">
            <strong>Within Lagos:</strong>{' '}
            {LAGOS_AREAS.join(' · ')}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
