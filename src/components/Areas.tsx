import Reveal from './Reveal'
import { CheckIcon } from './Icons'

const AREAS = [
  'Ikeja',
  'Lekki',
  'Victoria Island',
  'Ikoyi',
  'Surulere',
  'Yaba',
  'Gbagada',
  'Ajah',
  'Festac',
  'Ikorodu',
  'Agege',
]

export default function Areas() {
  return (
    <section className="section areas" id="areas" aria-labelledby="areas-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Coverage areas</p>
          <h2 id="areas-title">Where we work</h2>
          <p className="areas-note">
            Emergency response across <strong>Lagos mainland and island</strong>, with plumbing projects and
            contracts delivered in <strong>Abuja</strong> and <strong>Port Harcourt</strong>.
          </p>
        </Reveal>
        <Reveal>
          <ul className="chip-list">
            {AREAS.map((area) => (
              <li className="chip" key={area}>
                <CheckIcon className="icon-sm" />
                {area}
              </li>
            ))}
            <li className="chip chip-wide">24/7 across all areas</li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
