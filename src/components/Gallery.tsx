import { useState, useEffect, useRef } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import {
  CloseIcon,
  PlayIcon,
  PauseIcon,
  VideoIcon,
  ImageIcon,
  ExpandIcon,
  CheckIcon,
  WhatsAppIcon,
  PhoneIcon,
  SparklesIcon,
  ShieldCheckIcon,
  VolumeIcon,
} from './Icons'
import { PHONE, PHONE_DISPLAY, WHATSAPP_NUMBER } from '../constants'

export interface GalleryItem {
  id: string
  title: string
  category: 'Borehole & Tanks' | 'Leak & Burst Pipe' | 'Bathroom & Sanitary' | 'Water Heaters' | 'Drainage & Sewer'
  mediaType: 'photo' | 'video'
  image: string
  duration?: string
  location: string
  description: string
  highlights: string[]
  videoSteps?: string[]
  specs?: { label: string; value: string }[]
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'borehole-tank-ajah',
    title: 'Dual 1,000L Overhead Tank & Borehole Rig Setup',
    category: 'Borehole & Tanks',
    mediaType: 'photo',
    image: '/gallery/borehole-tank.jpg',
    location: 'Ajah, Lekki Corridor',
    description:
      'Heavy-duty elevated steel tower fabrication, twin interconnected Top-Tank water reservoirs, automatic electrical float switch, and pressure-rated PVC/PPR distribution lines.',
    highlights: ['Zero-leak guaranteed jointing', 'Automatic overflow cutoff switch', 'Multi-zone bypass valve system'],
    specs: [
      { label: 'Capacity', value: '2,000 Litres total' },
      { label: 'Piping Material', value: 'High-grade Schedule 80 PVC & PPR' },
      { label: 'Turnaround', value: '1 Working Day' },
    ],
  },
  {
    id: 'emergency-leak-ikeja',
    title: 'Precision Acoustic Leak Detection & Pipe Welding',
    category: 'Leak & Burst Pipe',
    mediaType: 'video',
    duration: '1:15',
    image: '/gallery/leak-repair.jpg',
    location: 'Ikeja GRA',
    description:
      'Watch how we identify non-visible hidden pipe leaks behind cabinets without unnecessary demolition, then complete a precision copper and PPR heat-fusion joint under 6-bar pressure test.',
    highlights: ['Non-destructive acoustic detection', '6-Bar hydrostatic pressure test', 'Completed in 45 minutes'],
    videoSteps: [
      '1. Acoustic sensor pinpointing hidden pressure drop',
      '2. Surgical pipe isolation & damaged section excision',
      '3. Precision heat-fusion welding with reinforced fittings',
      '4. Hydrostatic pressure verification at 6.0 Bar stability',
    ],
  },
  {
    id: 'luxury-bathroom-lekki',
    title: 'Concealed Wall Cistern & Luxury Bathroom Fitting',
    category: 'Bathroom & Sanitary',
    mediaType: 'photo',
    image: '/gallery/bathroom-fitting.jpg',
    location: 'Lekki Phase 1',
    description:
      'Full architectural bathroom re-fit featuring precision copper lines, concealed in-wall carrier frame, seamless waste soil stack connection, and balanced hot/cold water distribution.',
    highlights: ['Wall-hung concealed carrier installation', 'Anti-corrosion copper supply lines', 'Acoustic sound-dampened waste pipe'],
    specs: [
      { label: 'Installation Type', value: 'Concealed In-Wall Frame' },
      { label: 'Pipe Spec', value: 'Rigid Copper & Thick-wall PVC' },
      { label: 'Finish', value: 'Italian Marble Flush integration' },
    ],
  },
  {
    id: 'water-heater-vi',
    title: 'Ariston 100L Water Heater & Safety Manifold',
    category: 'Water Heaters',
    mediaType: 'photo',
    image: '/gallery/water-heater.jpg',
    location: 'Victoria Island',
    description:
      'Wall-mounted digital water heater integrated with brass pressure relief safety valves, thermal expansion insulation, and dedicated isolation valves for effortless future servicing.',
    highlights: ['Dual-valve emergency isolation', '6-Bar brass pressure relief valve', 'Thermal-wrapped distribution pipes'],
    specs: [
      { label: 'Heater Unit', value: 'Ariston Velis EVO 100L' },
      { label: 'Safety Rating', value: '6 Bar Overpressure Valve' },
      { label: 'Execution', value: 'Clean utility room mounting' },
    ],
  },
  {
    id: 'drain-snake-surulere',
    title: 'Motorized Cleanout Snake & Drain Unblocking',
    category: 'Drainage & Sewer',
    mediaType: 'video',
    duration: '0:52',
    image: '/gallery/drain-cleaning.jpg',
    location: 'Surulere',
    description:
      'Demonstration of our heavy-duty motorized auger machine clearing stubborn solid blockages, tree roots, and sediment from residential compound main inspection chambers.',
    highlights: ['Heavy-duty motorized cable auger', 'Zero chemical hazard to pipes', 'Restores 100% full-bore water flow'],
    videoSteps: [
      '1. Accessing main ground cleanout inspection port',
      '2. Feeding high-torque rotating cutting head down the line',
      '3. Grinding through grease buildup and solid obstruction',
      '4. High-velocity water flush test ensuring swift outflow',
    ],
  },
  {
    id: 'master-manifold-ikoyi',
    title: 'Whole-House Water Manifold & Pressure Balancing',
    category: 'Borehole & Tanks',
    mediaType: 'video',
    duration: '1:40',
    image: '/gallery/master-craftsman.jpg',
    location: 'Ikoyi',
    description:
      'Master plumber Bademosi calibrating individual floor pressure balancing valves, booster pumps, and twin dial gauges to ensure uniform high pressure across all 3 floors.',
    highlights: ['Independent zone shutoff valves', 'Dual vibration-damped pressure gauges', 'Balanced flow to every shower and tap'],
    videoSteps: [
      '1. Installing 8-zone brass distribution manifold',
      '2. Connecting high-performance circulating pump',
      '3. Calibrating dual pressure gauges for even floor balance',
      '4. Final client walkthrough & system sign-off',
    ],
  },
]

const CATEGORIES = [
  'All',
  'Borehole & Tanks',
  'Leak & Burst Pipe',
  'Bathroom & Sanitary',
  'Water Heaters',
  'Drainage & Sewer',
] as const

type CategoryFilter = (typeof CATEGORIES)[number]
type MediaFilter = 'all' | 'photo' | 'video'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All')
  const [activeMedia, setActiveMedia] = useState<MediaFilter>('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [isPlayingVideo, setIsPlayingVideo] = useState(false)
  const [videoProgress, setVideoProgress] = useState(0)
  const [isBeforeAfterActive, setIsBeforeAfterActive] = useState(false)
  const videoIntervalRef = useRef<number | null>(null)

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory
    const matchesMedia = activeMedia === 'all' || item.mediaType === activeMedia
    return matchesCat && matchesMedia
  })

  // Keyboard navigation for modal
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeModal()
      }
    }
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedItem])

  // Simulated video playback engine
  useEffect(() => {
    if (isPlayingVideo) {
      videoIntervalRef.current = window.setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingVideo(false)
            return 100
          }
          return prev + 1.2
        })
      }, 150)
    } else if (videoIntervalRef.current) {
      clearInterval(videoIntervalRef.current)
    }
    return () => {
      if (videoIntervalRef.current) clearInterval(videoIntervalRef.current)
    }
  }, [isPlayingVideo])

  function openModal(item: GalleryItem) {
    setSelectedItem(item)
    setVideoProgress(0)
    setIsPlayingVideo(item.mediaType === 'video')
  }

  function closeModal() {
    setSelectedItem(null)
    setIsPlayingVideo(false)
    setVideoProgress(0)
  }

  function togglePlayVideo() {
    if (videoProgress >= 100) {
      setVideoProgress(0)
      setIsPlayingVideo(true)
    } else {
      setIsPlayingVideo((prev) => !prev)
    }
  }

  function getWhatsAppQuoteLink(item: GalleryItem) {
    const text = `Hello Bademosi FlowTech! I saw your gallery project "${item.title}" in ${item.location} and would like a quote for a similar job at my property.`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  }

  return (
    <Section
      id="gallery"
      titleId="gallery-title"
      eyebrow="Real Proof of Master Craftsmanship"
      title="Recent Projects, Photos & Video Walkthroughs"
      lead="See real on-site work completed personally by Bademosi FlowTech across Lagos. No stock pictures, no outsourced handymen — genuine master plumbing."
      center
    >
      {/* Media Type & Category Filters */}
      <div className="gallery-controls">
        <div className="media-tabs" role="tablist" aria-label="Filter by media type">
          <button
            type="button"
            className={`media-tab ${activeMedia === 'all' ? 'active' : ''}`}
            onClick={() => setActiveMedia('all')}
          >
            All Media ({GALLERY_ITEMS.length})
          </button>
          <button
            type="button"
            className={`media-tab ${activeMedia === 'photo' ? 'active' : ''}`}
            onClick={() => setActiveMedia('photo')}
          >
            <ImageIcon className="icon-sm" />
            Photos (3)
          </button>
          <button
            type="button"
            className={`media-tab ${activeMedia === 'video' ? 'active' : ''}`}
            onClick={() => setActiveMedia('video')}
          >
            <VideoIcon className="icon-sm" />
            Video Demos (3)
          </button>
        </div>

        <div className="category-pills" role="toolbar" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`cat-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <Reveal key={item.id}>
            <article
              className={`gallery-card ${item.mediaType === 'video' ? 'gallery-card-video' : ''}`}
              onClick={() => openModal(item)}
            >
              <div className="gallery-media-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="gallery-thumb"
                />
                <div className="gallery-overlay">
                  <span className="gallery-action-badge">
                    {item.mediaType === 'video' ? (
                      <>
                        <PlayIcon className="icon-sm" /> Watch Demonstration
                      </>
                    ) : (
                      <>
                        <ExpandIcon className="icon-sm" /> View High-Res
                      </>
                    )}
                  </span>
                </div>

                {/* Top Badges */}
                <div className="gallery-top-tags">
                  <span className={`media-badge ${item.mediaType}`}>
                    {item.mediaType === 'video' ? (
                      <>
                        <VideoIcon className="icon-xs" /> Video Demo {item.duration && `· ${item.duration}`}
                      </>
                    ) : (
                      <>
                        <ImageIcon className="icon-xs" /> High-Res Photo
                      </>
                    )}
                  </span>
                  <span className="location-badge">{item.location}</span>
                </div>

                {item.mediaType === 'video' && (
                  <div className="video-card-play-btn" aria-hidden="true">
                    <span className="play-pulse" />
                    <PlayIcon className="icon-play" />
                  </div>
                )}
              </div>

              <div className="gallery-card-body">
                <span className="item-category">{item.category}</span>
                <h3 className="item-title">{item.title}</h3>
                <p className="item-desc">{item.description}</p>
                <div className="item-highlights">
                  {item.highlights.slice(0, 2).map((hl) => (
                    <span key={hl} className="highlight-tag">
                      <CheckIcon className="icon-xs" /> {hl}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Interactive Before & After Master Craftsmanship Highlight */}
      <Reveal className="before-after-box">
        <div className="before-after-inner">
          <div className="before-after-text">
            <span className="badge-craftsman">
              <SparklesIcon className="icon-sm" /> Direct Work Guarantee
            </span>
            <h3>Why Lagos Homeowners Choose Direct Master Plumbing</h3>
            <p>
              When you call Bademosi FlowTech, you avoid risky middleman handymen. We replace corroded, leaking pipes
              with precision heat-fused PPR and pressure-tested copper installations built to last decades.
            </p>
            <div className="before-after-controls">
              <button
                type="button"
                className={`btn-ba ${!isBeforeAfterActive ? 'active' : ''}`}
                onClick={() => setIsBeforeAfterActive(false)}
              >
                Standard Problem (Before)
              </button>
              <button
                type="button"
                className={`btn-ba ${isBeforeAfterActive ? 'active' : ''}`}
                onClick={() => setIsBeforeAfterActive(true)}
              >
                Bademosi Master Fix (After)
              </button>
            </div>
          </div>
          <div className="before-after-visual">
            {!isBeforeAfterActive ? (
              <div className="ba-panel ba-before">
                <div className="ba-tag tag-bad">Typical Problem: Leaking, Rusted Joint & Low Pressure</div>
                <img
                  src="/gallery/leak-repair.jpg"
                  alt="Pipe leak repair inspection"
                  className="ba-img grayscale"
                />
                <div className="ba-caption">
                  Hidden pinhole leak causing wall dampness and dropping whole-house water pressure.
                </div>
              </div>
            ) : (
              <div className="ba-panel ba-after">
                <div className="ba-tag tag-good">Bademosi Standard: Precision Heat-Welded Manifold</div>
                <img
                  src="/gallery/master-craftsman.jpg"
                  alt="Master plumber calibrated manifold"
                  className="ba-img"
                />
                <div className="ba-caption">
                  Zero-leak calibrated brass valves with dual pressure gauges tested at 6.0 Bar.
                </div>
              </div>
            )}
          </div>
        </div>
      </Reveal>

      {/* Modal: Fullscreen Lightbox & Video Player */}
      {selectedItem && (
        <div className="modal-backdrop" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close project showcase"
            >
              <CloseIcon className="icon" />
            </button>

            <div className="modal-grid">
              {/* Media Section */}
              <div className="modal-media-col">
                <div className="modal-media-viewport">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="modal-main-img"
                  />

                  {/* Video Player Simulation Overlay */}
                  {selectedItem.mediaType === 'video' && (
                    <div className="video-player-overlay">
                      <div className="video-header-bar">
                        <span className="live-demo-pill">
                          <span className="pulse-dot" /> Live Master Demonstration
                        </span>
                        <span className="video-time">
                          {Math.floor((videoProgress / 100) * 75)}s / {selectedItem.duration}
                        </span>
                      </div>

                      <div className="video-center-action" onClick={togglePlayVideo}>
                        <button
                          type="button"
                          className="video-big-play"
                          aria-label={isPlayingVideo ? 'Pause demonstration' : 'Play demonstration'}
                        >
                          {isPlayingVideo ? <PauseIcon className="icon" /> : <PlayIcon className="icon" />}
                        </button>
                      </div>

                      {/* Video Scrubber & Controls */}
                      <div className="video-controls-bar">
                        <button
                          type="button"
                          className="ctrl-btn"
                          onClick={togglePlayVideo}
                          aria-label={isPlayingVideo ? 'Pause' : 'Play'}
                        >
                          {isPlayingVideo ? <PauseIcon className="icon-sm" /> : <PlayIcon className="icon-sm" />}
                        </button>

                        <div
                          className="progress-track"
                          onClick={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect()
                            const clickPos = (e.clientX - rect.left) / rect.width
                            setVideoProgress(Math.min(Math.max(clickPos * 100, 0), 100))
                          }}
                        >
                          <div className="progress-fill" style={{ width: `${videoProgress}%` }} />
                          <div className="progress-handle" style={{ left: `${videoProgress}%` }} />
                        </div>

                        <div className="audio-badge" title="Master Craftsman Audio Commentary">
                          <VolumeIcon className="icon-xs" />
                          <span>HD 1080p</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Details & Action Column */}
              <div className="modal-info-col">
                <div className="modal-tags">
                  <span className="pill-cat">{selectedItem.category}</span>
                  <span className="pill-loc">{selectedItem.location}</span>
                </div>

                <h2 className="modal-title">{selectedItem.title}</h2>
                <p className="modal-desc">{selectedItem.description}</p>

                {/* Technical highlights */}
                <div className="modal-section-title">Key Workmanship Details</div>
                <ul className="modal-highlights-list">
                  {selectedItem.highlights.map((hl) => (
                    <li key={hl}>
                      <ShieldCheckIcon className="icon-sm text-sky" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                {/* Video Step-by-Step Walkthrough */}
                {selectedItem.videoSteps && (
                  <div className="video-steps-box">
                    <div className="modal-section-title">Master Process Steps</div>
                    <div className="steps-timeline">
                      {selectedItem.videoSteps.map((step, idx) => {
                        const isStepActive = videoProgress >= (idx / selectedItem.videoSteps!.length) * 100
                        return (
                          <div key={step} className={`step-item ${isStepActive ? 'active' : ''}`}>
                            <span className="step-num">{idx + 1}</span>
                            <span className="step-text">{step}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Spec Table if present */}
                {selectedItem.specs && (
                  <div className="specs-grid">
                    {selectedItem.specs.map((spec) => (
                      <div key={spec.label} className="spec-card">
                        <span className="spec-label">{spec.label}</span>
                        <strong className="spec-value">{spec.value}</strong>
                      </div>
                    ))}
                  </div>
                )}

                {/* Owner Guarantee Callout */}
                <div className="modal-owner-badge">
                  <div className="owner-avatar">B</div>
                  <div>
                    <strong>Direct Master Workmanship Guarantee</strong>
                    <span>Handled & inspected personally by Bademosi FlowTech.</span>
                  </div>
                </div>

                {/* Direct CTA Buttons */}
                <div className="modal-actions">
                  <a
                    className="btn btn-wa btn-block"
                    href={getWhatsAppQuoteLink(selectedItem)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="icon" />
                    Request Quote for Similar Job
                  </a>
                  <a className="btn btn-emergency btn-block" href={`tel:${PHONE}`}>
                    <PhoneIcon className="icon" />
                    Call Plumber Directly ({PHONE_DISPLAY})
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}
