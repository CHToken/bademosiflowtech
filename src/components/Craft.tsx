import { useState } from 'react'
import Reveal from './Reveal'
import { SparklesIcon } from './Icons'

export default function Craft() {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <section className="section craft" id="craft" aria-labelledby="craft-title">
      <div className="container">
        <div className="craft-inner">
          <Reveal className="craft-text">
            <span className="badge-craftsman">
              <SparklesIcon className="icon-sm" /> Workmanship warranty
            </span>
            <h2 id="craft-title">Why homes and businesses choose Bademosi FlowTech</h2>
            <p>
              We replace corroded, leaking pipes with precision heat-fused PPR and pressure-tested copper
              installations built to last decades, and every job is backed by a workmanship warranty.
            </p>
            <div className="before-after-controls">
              <button
                type="button"
                className={`btn-ba ${!showAfter ? 'active' : ''}`}
                onClick={() => setShowAfter(false)}
              >
                Typical problem (Before)
              </button>
              <button
                type="button"
                className={`btn-ba ${showAfter ? 'active' : ''}`}
                onClick={() => setShowAfter(true)}
              >
                Bademosi standard (After)
              </button>
            </div>
          </Reveal>
          <Reveal className="craft-visual" delay={80}>
            {!showAfter ? (
              <div className="ba-panel ba-before">
                <div className="ba-tag tag-bad">Typical problem: leaking, rusted joint and low pressure</div>
                <img
                  src="/gallery/leak-repair.jpg"
                  alt="Pipe leak repair inspection"
                  className="ba-img grayscale"
                  width="800"
                  height="500"
                />
                <div className="ba-caption">
                  Hidden pinhole leak causing wall dampness and dropping whole-house water pressure.
                </div>
              </div>
            ) : (
              <div className="ba-panel ba-after">
                <div className="ba-tag tag-good">Bademosi standard: precision heat-welded manifold</div>
                <img
                  src="/gallery/master-craftsman.jpg"
                  alt="Plumber calibrating a manifold"
                  className="ba-img"
                  width="800"
                  height="500"
                />
                <div className="ba-caption">
                  Zero-leak calibrated brass valves with dual pressure gauges tested at 6.0 Bar.
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
