import Section from './Section'
import Reveal from './Reveal'
import Counter from './Counter'
import {
  ArrowIcon,
  BathIcon,
  BuildingIcon,
  DrainIcon,
  HomeIcon,
  KitchenIcon,
  PhoneIcon,
  SearchIcon,
  ShieldCheckIcon,
  ToiletIcon,
  WaterDropIcon,
  WrenchIcon,
} from './Icons'
import { PHONE } from '../constants'

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
      eyebrow="Household, residential & commercial plumbing"
      title="Plumbing engineering delivered nationwide &amp; internationally"
      lead="Emergency callouts, household repairs, full installations, water engineering, and commercial building plumbing for homes, estates, multi-story buildings, and commercial developments across Lagos, all 36 states in Nigeria, and international project contracts."
      center
    >
      {/* Asymmetric Bento Grid Layout */}
      <div className="bento-grid">
        {/* Bento Item 1: Large Featured Card - Emergency Plumbing (8 cols) */}
        <Reveal className="bento-col-span-8 bento-row-span-2">
          <article className="bento-card bento-card-featured">
            <div className="bento-featured-bg">
              <img
                src="/gallery/leak-repair.jpg"
                alt="Emergency leak detection and pipe repair by Bademosi FlowTech technician"
                loading="lazy"
                width="1200"
                height="800"
                className="bento-img-cover"
              />
              <div className="bento-featured-overlay" />
            </div>

            <div className="bento-featured-content">
              <div className="bento-badge-emergency">
                <span className="pulse-dot-red" aria-hidden="true" />
                <span>24/7 EMERGENCY RESPONSE</span>
              </div>

              <h3 className="bento-featured-title">Emergency Plumbing &amp; Rapid Pipe Repairs</h3>

              <p className="bento-featured-desc">
                Burst pipes, heavy leaks, and overflowing drains resolved fast. Our motorized equipment and pressure-testing kits locate and repair faults with zero unnecessary damage to your walls or tiles.
              </p>

              <div className="bento-featured-highlights">
                <div className="highlight-pill">
                  <WrenchIcon className="icon-sm text-sky" />
                  <span>Burst Pipe Isolations</span>
                </div>
                <div className="highlight-pill">
                  <SearchIcon className="icon-sm text-sky" />
                  <span>Acoustic &amp; Pressure Leak Detection</span>
                </div>
                <div className="highlight-pill">
                  <DrainIcon className="icon-sm text-sky" />
                  <span>Motorized Drain &amp; WC Unblocking</span>
                </div>
              </div>

              <div className="bento-featured-actions">
                <a className="btn btn-primary-accent" href={`tel:${PHONE}`}>
                  <PhoneIcon className="icon-sm" />
                  <span>Call Emergency Line</span>
                </a>
                <button
                  type="button"
                  className="btn btn-outline-ghost"
                  onClick={() => handleBook('Emergency pipe repair')}
                >
                  <span>Request Callout</span>
                  <ArrowIcon className="icon-sm" />
                </button>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Bento Item 2: Medium Card - Borehole & Water Tank Setup (4 cols) */}
        <Reveal className="bento-col-span-4" delay={100}>
          <article className="bento-card bento-card-medium">
            <div className="bento-card-media">
              <img
                src="/gallery/borehole-tank.jpg"
                alt="Borehole submersible pump and overhead water tank setup"
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="bento-card-media-overlay" />
            </div>
            <div className="bento-card-body">
              <div className="bento-icon-header">
                <WaterDropIcon className="bento-icon text-sky" />
                <span className="bento-tag">Water Engineering</span>
              </div>
              <h3>Borehole &amp; Water Tank Setup</h3>
              <p>Drilling, submersible pump wiring, elevated towers, automatic float switches, and pressure-rated PPR/PVC lines.</p>
              <button
                type="button"
                className="bento-action-btn"
                onClick={() => handleBook('Borehole and water tank setup')}
                aria-label="Request Borehole & Water Tank Setup"
              >
                <span>Request Setup</span>
                <ArrowIcon className="icon-sm" />
              </button>
            </div>
          </article>
        </Reveal>

        {/* Bento Item 3: Small Stat Card - 45-Min Avg Response (4 cols) */}
        <Reveal className="bento-col-span-4" delay={150}>
          <article className="bento-card bento-card-stat">
            <div className="bento-stat-inner">
              <span className="bento-stat-eyebrow">LAGOS DISPATCH SPEED</span>
              <div className="bento-stat-big-number">
                <Counter end={45} suffix=" mins" />
              </div>
              <p className="bento-stat-label">Average arrival time across Ikeja, Lekki, Ikoyi, VI, Surulere &amp; Ajah.</p>
              <div className="bento-stat-footer">
                <span className="live-status-pill">
                  <span className="pulse-dot-green" aria-hidden="true" />
                  <span>Units Active On Road</span>
                </span>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Bento Item 4: Upfront Pricing & Warranty Card (4 cols) */}
        <Reveal className="bento-col-span-4" delay={200}>
          <article className="bento-card bento-card-medium">
            <div className="bento-card-body">
              <div className="bento-icon-header">
                <ShieldCheckIcon className="bento-icon text-sky" />
                <span className="bento-tag bento-tag-accent">0% Hidden Fees</span>
              </div>
              <h3>Upfront Pricing &amp; Warranty</h3>
              <p>Transparent, itemized written quotes before any work begins — backed by our 100% Workmanship Warranty on every single job.</p>
              <div className="bento-mini-tags">
                <span><ShieldCheckIcon className="icon-xs" /> Itemized Quote</span>
                <span><WrenchIcon className="icon-xs" /> 100% Warranty</span>
              </div>
              <button
                type="button"
                className="bento-action-btn"
                onClick={() => handleBook('General Quote')}
                aria-label="Get Transparent Estimate"
              >
                <span>Get Free Estimate</span>
                <ArrowIcon className="icon-sm" />
              </button>
            </div>
          </article>
        </Reveal>

        {/* Bento Item 5: Medium Card - Household Plumbing (4 cols) */}
        <Reveal className="bento-col-span-4" delay={250}>
          <article className="bento-card bento-card-medium">
            <div className="bento-card-media">
              <img
                src="/gallery/bathroom-fitting.jpg"
                alt="Bathroom shower and sanitary pipe fitting"
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="bento-card-media-overlay" />
            </div>
            <div className="bento-card-body">
              <div className="bento-icon-header">
                <HomeIcon className="bento-icon text-sky" />
                <span className="bento-tag">Residential</span>
              </div>
              <h3>Household Plumbing &amp; Fittings</h3>
              <p>Home maintenance, taps, mixers, concealed shower valves, toilet repairs, kitchen traps, and water heater setups.</p>
              <div className="bento-mini-tags">
                <span><KitchenIcon className="icon-xs" /> Kitchens</span>
                <span><BathIcon className="icon-xs" /> Bathrooms</span>
                <span><ToiletIcon className="icon-xs" /> Sanitary WCs</span>
              </div>
              <button
                type="button"
                className="bento-action-btn"
                onClick={() => handleBook('Home plumbing maintenance')}
                aria-label="Request Household Plumbing"
              >
                <span>Book Home Service</span>
                <ArrowIcon className="icon-sm" />
              </button>
            </div>
          </article>
        </Reveal>

        {/* Bento Item 6: Medium Card - Commercial & Building Projects (6 cols) */}
        <Reveal className="bento-col-span-6" delay={300}>
          <article className="bento-card bento-card-medium-wide">
            <div className="bento-card-media">
              <img
                src="/gallery/drain-cleaning.jpg"
                alt="Commercial building plumbing and drain installation project"
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="bento-card-media-overlay" />
            </div>
            <div className="bento-card-body">
              <div className="bento-icon-header">
                <BuildingIcon className="bento-icon text-sky" />
                <span className="bento-tag">Commercial &amp; Civil</span>
              </div>
              <h3>Commercial &amp; Building Plumbing Systems</h3>
              <p>Full plumbing contracts for multi-story residential buildings, commercial properties, condict plumbing, and civil construction sites across Nigeria.</p>
              <div className="bento-mini-tags">
                <span><BuildingIcon className="icon-xs" /> Multi-Story</span>
                <span><WrenchIcon className="icon-xs" /> Condict Piping</span>
                <span><WaterDropIcon className="icon-xs" /> Booster Pumps</span>
              </div>
              <button
                type="button"
                className="bento-action-btn"
                onClick={() => handleBook('Building plumbing systems')}
                aria-label="Request Commercial Plumbing"
              >
                <span>Consult On Project</span>
                <ArrowIcon className="icon-sm" />
              </button>
            </div>
          </article>
        </Reveal>

        {/* Bento Item 7: Medium Card - Motorized Drain Unblocking & Jetting (6 cols) */}
        <Reveal className="bento-col-span-6" delay={350}>
          <article className="bento-card bento-card-medium-wide">
            <div className="bento-card-media">
              <img
                src="/gallery/master-craftsman.jpg"
                alt="Motorized drain cleaning and hydro jetting equipment"
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="bento-card-media-overlay" />
            </div>
            <div className="bento-card-body">
              <div className="bento-icon-header">
                <DrainIcon className="bento-icon text-sky" />
                <span className="bento-tag">Drainage Clearing</span>
              </div>
              <h3>Motorized Drain Unblocking &amp; Jetting</h3>
              <p>Heavy-duty motorized drain snakes and hydro-jetting to clear grease, roots, and stubborn blockages from sinks, toilets, and main drainage lines.</p>
              <div className="bento-mini-tags">
                <span><DrainIcon className="icon-xs" /> Main Drains</span>
                <span><WrenchIcon className="icon-xs" /> Motorized Snake</span>
                <span><SearchIcon className="icon-xs" /> Pipe CCTV Inspection</span>
              </div>
              <button
                type="button"
                className="bento-action-btn"
                onClick={() => handleBook('Drain unblocking')}
                aria-label="Request Drain Unblocking"
              >
                <span>Request Unblocking</span>
                <ArrowIcon className="icon-sm" />
              </button>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  )
}
