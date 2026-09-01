import Reveal from './Reveal'
import { CheckIcon, BuildingIcon, ShieldCheckIcon } from './Icons'

const REGIONS = [
  'Lagos State',
  'Abuja (FCT)',
  'Ogun State',
  'Oyo State (Ibadan)',
  'Ondo State',
  'Delta & Anambra (Asaba–Onitsha)',
  'Rivers State (Port Harcourt)',
  'All 36 States in Nigeria',
  'International Project Contracts',
]

const LAGOS_AREAS = [
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
  'Epe',
  'Badagry',
]

export default function Areas() {
  return (
    <section className="section areas" id="areas" aria-labelledby="areas-title">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow">Service Coverage</p>
          <h2 id="areas-title">Available Anywhere in Nigeria &amp; Internationally</h2>
          <p className="areas-note">
            While we maintain 24/7 rapid emergency dispatch units across <strong>Lagos mainland &amp; island</strong>, our mobile engineering teams and contract units execute projects <strong>nationwide in all 36 states across Nigeria and on international plumbing contracts</strong>.
          </p>
        </Reveal>

        <Reveal>
          <ul className="chip-list">
            {REGIONS.map((region) => (
              <li className="chip chip-wide" key={region}>
                <CheckIcon className="icon-sm text-sky" />
                {region}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <div className="areas-lagos-box">
            <p className="areas-sub">
              <strong><BuildingIcon className="icon-xs text-sky" /> 24/7 Rapid Emergency Response Areas within Lagos:</strong>{' '}
              {LAGOS_AREAS.join(' · ')}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="areas-global-badge">
            <ShieldCheckIcon className="icon-sm text-sky" />
            <span>Need a plumbing team for a project outside Lagos or overseas? We deploy specialized contract crews anywhere nationwide and internationally.</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
