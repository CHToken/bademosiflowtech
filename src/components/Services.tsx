import { ComponentType } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import { ArrowIcon, BathIcon, BuildingIcon, DrainIcon, HeaterIcon, HomeIcon, KitchenIcon, SearchIcon, ToiletIcon, WaterDropIcon, WrenchIcon, IconProps } from './Icons'

interface Service {
  name: string
  description: string
  icon: ComponentType<IconProps>
}

const EMERGENCY_SERVICES: Service[] = [
  { name: 'Emergency pipe repair', description: 'Burst or leaking lines isolated, repaired and pressure-tested, fast.', icon: WrenchIcon },
  { name: 'Leak detection & repair', description: 'Hidden leaks located with pressure testing and fixed at the source.', icon: SearchIcon },
  { name: 'Drain unblocking', description: 'Motorized clearing for blocked sinks, toilets and drainage lines.', icon: DrainIcon },
]

const HOUSEHOLD_SERVICES: Service[] = [
  { name: 'Home plumbing maintenance', description: 'Full-house checks, taps, mixers and general fittings for homes.', icon: HomeIcon },
  { name: 'Kitchen plumbing', description: 'Sinks, mixers, water filters and gas lines done to standard.', icon: KitchenIcon },
  { name: 'Toilet repair & replacement', description: 'Running, leaking or cracked WCs repaired or replaced.', icon: ToiletIcon },
  { name: 'Bathroom pipe fitting', description: 'Showers, WCs and washbasins with concealed or surface piping.', icon: BathIcon },
]

const INSTALLATION_SERVICES: Service[] = [
  { name: 'Borehole & water tank setup', description: 'Drilling, submersible pumps, overhead tanks and distribution lines.', icon: WaterDropIcon },
  { name: 'Water heater installation', description: 'Electric and gas heaters fitted safely, with warranty.', icon: HeaterIcon },
]

const COMMERCIAL_SERVICES: Service[] = [
  { name: 'Building plumbing systems', description: 'Supply, drainage and waste systems for residential buildings and commercial properties.', icon: BuildingIcon },
  { name: 'Condict & civil plumbing', description: 'Site and structural pipework coordination for construction projects.', icon: WrenchIcon },
  { name: 'Water systems & modern plumbing', description: 'Booster pumps, water treatment, smart heaters and modern fixture systems.', icon: WaterDropIcon },
]

function handleBook(service: string) {
  const select = document.getElementById('service') as HTMLSelectElement | null
  if (select) select.value = service
  document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <article className="service-card">
      <div className="service-icon" aria-hidden="true">
        <Icon className="icon" />
      </div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <button type="button" className="service-link" onClick={() => handleBook(service.name)}>
        Request this service
        <ArrowIcon className="icon-sm" />
      </button>
    </article>
  )
}

export default function Services() {
  return (
    <Section
      id="services"
      titleId="services-title"
      eyebrow="Household, residential & commercial plumbing"
      title="Plumbing services for homes and businesses"
      lead="Emergency callouts, household repairs, full installations, and complete water systems for homes, buildings, commercial properties and modern developments across Lagos, Abuja, Ogun, Ibadan, Ondo, and Asaba–Onitsha."
      center
    >
      <Reveal className="services-block">
        <h3 className="services-group-title">Emergency &amp; repair</h3>
        <p className="services-group-lead">Callouts answered 24/7, with a 45-minute average response across Lagos.</p>
        <div className="services-grid">
          {EMERGENCY_SERVICES.map((service) => (
            <ServiceCard service={service} key={service.name} />
          ))}
        </div>
      </Reveal>

      <Reveal className="services-block">
        <h3 className="services-group-title">Household plumbing</h3>
        <p className="services-group-lead">Everyday plumbing for homes, handled cleanly and fixed right the first time.</p>
        <div className="services-grid">
          {HOUSEHOLD_SERVICES.map((service) => (
            <ServiceCard service={service} key={service.name} />
          ))}
        </div>
      </Reveal>

      <Reveal className="services-block">
        <h3 className="services-group-title">Installations</h3>
        <p className="services-group-lead">Planned work quoted upfront and completed to standard, with warranty.</p>
        <div className="services-grid">
          {INSTALLATION_SERVICES.map((service) => (
            <ServiceCard service={service} key={service.name} />
          ))}
        </div>
      </Reveal>

      <Reveal className="services-block">
        <h3 className="services-group-title">Commercial &amp; building projects</h3>
        <p className="services-group-lead">Contracts for buildings, construction sites and modern developments.</p>
        <div className="services-grid">
          {COMMERCIAL_SERVICES.map((service) => (
            <ServiceCard service={service} key={service.name} />
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
