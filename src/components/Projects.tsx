import Reveal from './Reveal'

interface Project {
  title: string
  area: string
  alt: string
  art: JSX.Element
}

const PROJECTS: Project[] = [
  {
    title: 'Borehole + overhead tank install',
    area: 'Ajah',
    alt: 'Borehole pump and overhead tank installation completed in Ajah',
    art: (
      <>
        <rect width="400" height="280" fill="#F1F5F9" />
        <circle cx="330" cy="56" r="30" fill="#38BDF8" />
        <rect x="60" y="196" width="280" height="10" rx="5" fill="#CBD5E1" />
        <path d="M100 196v-26M300 196v-26" stroke="#94A3B8" strokeWidth="8" strokeLinecap="round" />
        <rect x="82" y="78" width="236" height="74" rx="14" fill="#1E293B" />
        <rect x="82" y="78" width="236" height="18" rx="9" fill="#334155" />
        <path d="M118 130v40M282 130v40" stroke="#94A3B8" strokeWidth="7" strokeLinecap="round" />
        <path d="M196 152c-40 0-52 16-52 44" stroke="#38BDF8" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M196 152c40 0 52 16 52 44" stroke="#38BDF8" strokeWidth="8" fill="none" strokeLinecap="round" />
        <rect x="176" y="238" width="48" height="30" rx="6" fill="#075985" />
        <circle cx="200" cy="240" r="12" fill="#1E293B" />
      </>
    ),
  },
  {
    title: 'Full bathroom pipe re-fit',
    area: 'Lekki Phase 1',
    alt: 'Full bathroom pipe re-fitting completed in Lekki Phase 1',
    art: (
      <>
        <rect width="400" height="280" fill="#F1F5F9" />
        <rect x="40" y="36" width="150" height="208" rx="10" fill="#E2E8F0" />
        <path d="M52 72h126M52 108h126M52 144h126M52 180h126M52 216h126" stroke="#CBD5E1" strokeWidth="3" />
        <path d="M92 76h96v88h-96z" fill="#FFFFFF" />
        <path d="M116 164v36h48v-36" fill="#FFFFFF" />
        <path d="M128 168a12 12 0 1 0 24 0 12 12 0 1 0-24 0" fill="#38BDF8" />
        <path d="M240 36v208" stroke="#0EA5E9" strokeWidth="14" strokeLinecap="round" />
        <path d="M240 118h96" stroke="#0EA5E9" strokeWidth="14" strokeLinecap="round" />
        <rect x="234" y="84" width="12" height="16" rx="3" fill="#334155" />
        <rect x="234" y="190" width="12" height="16" rx="3" fill="#334155" />
        <rect x="330" y="111" width="12" height="16" rx="3" fill="#334155" />
        <circle cx="336" cy="160" r="7" fill="#38BDF8" />
        <circle cx="356" cy="176" r="5" fill="#38BDF8" />
      </>
    ),
  },
  {
    title: 'Estate drain unblocking',
    area: 'Surulere',
    alt: 'Estate drain unblocking completed in Surulere',
    art: (
      <>
        <rect width="400" height="280" fill="#F1F5F9" />
        <circle cx="70" cy="60" r="26" fill="#38BDF8" />
        <rect x="70" y="200" width="260" height="12" rx="6" fill="#CBD5E1" />
        <rect x="90" y="150" width="220" height="56" rx="8" fill="#1E293B" />
        <rect x="90" y="150" width="220" height="14" rx="7" fill="#334155" />
        <circle cx="150" cy="178" r="10" fill="#475569" />
        <circle cx="200" cy="178" r="10" fill="#475569" />
        <circle cx="250" cy="178" r="10" fill="#475569" />
        <path d="M200 130c-52 0-64 14-64 40" stroke="#38BDF8" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M200 130c52 0 64 14 64 40" stroke="#38BDF8" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M212 92v40" stroke="#075985" strokeWidth="8" strokeLinecap="round" />
        <path d="M196 96h32l10 16h-52l10-16z" fill="#075985" />
        <circle cx="320" cy="110" r="6" fill="#38BDF8" />
        <circle cx="334" cy="126" r="5" fill="#38BDF8" />
      </>
    ),
  },
  {
    title: 'Leak detection & wall repair',
    area: 'Ikeja GRA',
    alt: 'Leak detection and wall pipe repair completed in Ikeja GRA',
    art: (
      <>
        <rect width="400" height="280" fill="#F1F5F9" />
        <path d="M0 0h400v280" stroke="#CBD5E1" strokeWidth="2" />
        <rect x="150" y="150" width="100" height="70" rx="8" fill="#E2E8F0" />
        <path d="M60 96h280" stroke="#0EA5E9" strokeWidth="14" strokeLinecap="round" />
        <path d="M100 96v52M300 96v52" stroke="#0EA5E9" strokeWidth="14" strokeLinecap="round" />
        <path d="M200 104v18" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" />
        <circle cx="206" cy="134" r="5" fill="#38BDF8" />
        <circle cx="194" cy="146" r="4" fill="#38BDF8" />
        <g stroke="#075985" strokeWidth="7" strokeLinecap="round">
          <path d="M120 230h-44v44" />
          <circle cx="96" cy="264" r="18" fill="none" />
        </g>
        <circle cx="292" cy="46" r="22" fill="#38BDF8" />
      </>
    ),
  },
]

export default function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Recent projects</p>
          <h2 id="projects-title">Work we finished this month</h2>
          <p className="section-lead">Real jobs, real streets. We leave the site clean and the job guaranteed.</p>
        </Reveal>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <Reveal key={project.title}>
              <figure className="project-card">
                <svg viewBox="0 0 400 280" role="img" aria-label={project.alt}>
                  {project.art}
                </svg>
                <figcaption className="project-meta">
                  <strong>{project.title}</strong>
                  <span className="area">{project.area}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
