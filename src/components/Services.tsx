import { ComponentType } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import { ArrowIcon, BathIcon, DrainIcon, HeaterIcon, KitchenIcon, SearchIcon, ToiletIcon, WaterDropIcon, WrenchIcon, IconProps } from './Icons'

interface Service {
  name: string
  description: string
  icon: ComponentType<IconProps>
}

const SERVICES: Service[] = [
  { name: 'Borehole & water tank setup', description: 'Drilling, pumps and overhead tanks, installed and serviced.', icon: WaterDropIcon },
  { name: 'Leak detection & repair', description: 'Find hidden leaks fast with pressure testing, then fix them for good.', icon: SearchIcon },
  { name: 'Bathroom pipe fitting', description: 'Showers, WCs, washbasins and full bathroom re-piping.', icon: BathIcon },
  { name: 'Drain unblocking', description: 'Clearing blocked sinks, toilets and drainage lines with the right tools.', icon: DrainIcon },
  { name: 'Water heater installation', description: 'Electric and gas heaters fitted safely, with warranty.', icon: HeaterIcon },
  { name: 'Toilet repair & replacement', description: 'Fix running, leaking or cracked WCs, or install a brand new one.', icon: ToiletIcon },
  { name: 'Kitchen plumbing', description: 'Sinks, mixers, water filters and gas lines done right.', icon: KitchenIcon },
  { name: 'Emergency pipe repair', description: 'Burst pipe? We isolate, repair and restore your water, fast.', icon: WrenchIcon },
]

function handleBook(service: string) {
  const select = document.getElementById('service') as HTMLSelectElement | null
  if (select) select.value = service
  document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Services() {
  return (
    <Section
      id="services"
      titleId="services-title"
      eyebrow="Master Plumbing Services"
      title="Every Plumbing Job Handled Personally"
      lead="From midnight emergency pipe bursts to complete borehole and luxury bathroom setups, I arrive with industrial-grade tools and handle the work directly to the highest standard."
      center
    >
      <div className="services-grid">
        {SERVICES.map((service) => {
          const Icon = service.icon
          return (
            <Reveal key={service.name}>
              <article className="service-card">
                <div className="service-icon" aria-hidden="true">
                  <Icon className="icon" />
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <button type="button" className="service-link" onClick={() => handleBook(service.name)}>
                  Book this
                  <ArrowIcon className="icon-sm" />
                </button>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
