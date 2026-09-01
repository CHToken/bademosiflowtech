import Reveal from './Reveal'
import { PhoneIcon, WrenchIcon, SearchIcon, DrainIcon } from './Icons'

const EMERGENCY_ITEMS = [
  { name: 'Emergency pipe repair', desc: 'Burst or leaking lines isolated, repaired and pressure-tested, fast.', icon: WrenchIcon },
  { name: 'Leak detection & repair', desc: 'Hidden leaks located with pressure testing and fixed at the source.', icon: SearchIcon },
  { name: 'Drain unblocking', desc: 'Motorized clearing for blocked sinks, toilets and drainage lines.', icon: DrainIcon },
]

export default function EmergencyBand() {
  return (
    <section className="emergency-band" aria-labelledby="emergency-title">
      <div className="container">
        <div className="emergency-head">
          <h2 className="eyebrow eyebrow-red" id="emergency-title">
            <span className="pulse-dot-red" aria-hidden="true" />
            Emergency &amp; repair
          </h2>
          <a className="btn btn-emergency btn-emergency-flat" href="#book">
            <PhoneIcon className="icon" />
            24/7 Emergency Dispatch
          </a>
        </div>
        <div className="emergency-grid">
          {EMERGENCY_ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.name} delay={i * 60}>
                <div className="emergency-item">
                  <Icon className="icon emergency-icon" aria-hidden="true" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
