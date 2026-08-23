import Reveal from './Reveal'

const STATS = [
  { num: '2,400', unit: '+', label: 'Jobs completed across Lagos' },
  { num: '45', unit: ' min', label: 'Average emergency response' },
  { num: '8', unit: '+ yrs', label: 'Serving homes and businesses' },
]

export default function Stats() {
  return (
    <section className="stats" aria-label="Bademosi FlowTech track record">
      <div className="container stats-grid">
        {STATS.map((stat) => (
          <Reveal key={stat.label}>
            <div className="stat-num">
              {stat.num}
              <span className="unit">{stat.unit}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
