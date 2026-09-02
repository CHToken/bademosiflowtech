import { useState, useEffect, useRef } from 'react'
import Section from './Section'
import AdminUploadModal from './AdminUploadModal'
import {
  CloseIcon,
  PlayIcon,
  PauseIcon,
  VideoIcon,
  ImageIcon,
  ExpandIcon,
  WhatsAppIcon,
  ShieldCheckIcon,
  VolumeIcon,
  VolumeMuteIcon,
  CloudIcon,
} from './Icons'
import { WHATSAPP_NUMBER } from '../constants'
import {
  getCloudinaryImageUrl,
  getCloudinaryVideoUrl,
  getCloudinaryVideoPoster,
  isCloudinaryUrl,
} from '../utils/cloudinary'

export interface GalleryItem {
  id: string
  title: string
  category: 'Borehole & Tanks' | 'Leak & Burst Pipe' | 'Bathroom & Sanitary' | 'Water Heaters' | 'Drainage & Sewer'
  mediaType: 'photo' | 'video'
  image: string // Local path or Cloudinary Image URL
  videoUrl?: string // Cloudinary Video URL or local MP4/WebM URL
  poster?: string // Optional custom poster (defaults to image or Cloudinary auto-poster)
  duration?: string
  location: string
  description: string
  highlights: string[]
  videoSteps?: string[]
  specs?: { label: string; value: string }[]
}

/**
 * Gallery Items List
 *
 * NOTE: Both `image` and `videoUrl` fully support Cloudinary URLs!
 * Example Cloudinary Image: https://res.cloudinary.com/your-cloud-name/image/upload/v1234/project.jpg
 * Example Cloudinary Video: https://res.cloudinary.com/your-cloud-name/video/upload/v1234/leak_fix_demo.mp4
 */
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
    // Supports direct Cloudinary video streams
    videoUrl: 'https://res.cloudinary.com/demo/video/upload/f_auto:video,q_auto/samples/cld-sample-video.mp4',
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
    videoUrl: 'https://res.cloudinary.com/demo/video/upload/f_auto:video,q_auto/samples/sea-turtle.mp4',
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
    videoUrl: 'https://res.cloudinary.com/demo/video/upload/f_auto:video,q_auto/samples/elephants.mp4',
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
  const [customItems, setCustomItems] = useState<GalleryItem[]>(() => {
    if (typeof window === 'undefined') return []
    try {
      const saved = localStorage.getItem('bademosi_custom_gallery')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false)

  const allItems = [...customItems, ...GALLERY_ITEMS]

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All')
  const [activeMedia, setActiveMedia] = useState<MediaFilter>('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [lastFocusedElement, setLastFocusedElement] = useState<HTMLElement | null>(null)

  // Carousel State & Touch Gestures
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [touchStartPos, setTouchStartPos] = useState<number | null>(null)

  // Real / simulated video playback state
  const [isPlayingVideo, setIsPlayingVideo] = useState(false)
  const [videoProgress, setVideoProgress] = useState(0)
  const [currentTimeSec, setCurrentTimeSec] = useState(0)
  const [durationSec, setDurationSec] = useState(0)
  const [isMuted, setIsMuted] = useState(false)

  const videoElementRef = useRef<HTMLVideoElement | null>(null)
  const simulatedTimerRef = useRef<number | null>(null)
  const modalCloseRef = useRef<HTMLButtonElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const filteredItems = allItems.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory
    const matchesMedia = activeMedia === 'all' || item.mediaType === activeMedia
    return matchesCat && matchesMedia
  })

  // Listen for /admin pathname route, #admin hash, or ?admin=true search param
  useEffect(() => {
    function checkAdminTrigger() {
      if (typeof window === 'undefined') return
      const path = window.location.pathname.toLowerCase()
      const hash = window.location.hash.toLowerCase()
      const search = window.location.search.toLowerCase()

      if (path.includes('/admin') || hash.includes('admin') || search.includes('admin=true')) {
        setIsAdminModalOpen(true)
      }
    }
    checkAdminTrigger()
    window.addEventListener('popstate', checkAdminTrigger)
    window.addEventListener('hashchange', checkAdminTrigger)
    return () => {
      window.removeEventListener('popstate', checkAdminTrigger)
      window.removeEventListener('hashchange', checkAdminTrigger)
    }
  }, [])

  // Reset carousel index when filters change
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeCategory, activeMedia])

  // Carousel Autoplay Timer
  useEffect(() => {
    if (!isAutoplay || selectedItem || filteredItems.length <= 1) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredItems.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [isAutoplay, selectedItem, filteredItems.length])

  const handleNextSlide = () => {
    if (filteredItems.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const handlePrevSlide = () => {
    if (filteredItems.length === 0) return
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartPos(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartPos === null) return
    const touchEndPos = e.changedTouches[0].clientX
    const diff = touchStartPos - touchEndPos
    if (diff > 40) {
      handleNextSlide()
    } else if (diff < -40) {
      handlePrevSlide()
    }
    setTouchStartPos(null)
  }

  // Keyboard navigation for modal: Escape closes, Tab stays inside
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!selectedItem) return
      if (e.key === 'Escape') {
        closeModal()
        return
      }
      if (e.key === 'Tab') {
        const modal = modalRef.current
        if (!modal) return
        const focusables = modal.querySelectorAll<HTMLElement>(
          'button, a[href], video, [role="slider"], [tabindex]:not([tabindex="-1"])',
        )
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
      // Move focus into the modal
      const focusTarget = modalCloseRef.current || modalRef.current
      focusTarget?.focus()
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedItem])

  // Reset video state on item selection
  function openModal(item: GalleryItem, trigger?: HTMLElement | null) {
    setLastFocusedElement(trigger ?? (document.activeElement as HTMLElement | null))
    setSelectedItem(item)
    setVideoProgress(0)
    setCurrentTimeSec(0)
    setDurationSec(0)
    setIsPlayingVideo(item.mediaType === 'video')
  }

  function closeModal() {
    if (videoElementRef.current) {
      videoElementRef.current.pause()
    }
    if (simulatedTimerRef.current) {
      clearInterval(simulatedTimerRef.current)
    }
    setSelectedItem(null)
    setIsPlayingVideo(false)
    setVideoProgress(0)
    // Return focus to the card that opened the modal
    lastFocusedElement?.focus()
  }

  // Handle Play/Pause toggle (Native HTML5 or Simulated)
  function togglePlayVideo() {
    if (selectedItem?.videoUrl && videoElementRef.current) {
      if (videoElementRef.current.paused) {
        videoElementRef.current.play().catch(() => {
          // In case browser autoplay policy prevents audio play
          if (videoElementRef.current) {
            videoElementRef.current.muted = true
            setIsMuted(true)
            videoElementRef.current.play()
          }
        })
        setIsPlayingVideo(true)
      } else {
        videoElementRef.current.pause()
        setIsPlayingVideo(false)
      }
    } else {
      // Simulated video engine fallback
      if (videoProgress >= 100) {
        setVideoProgress(0)
        setIsPlayingVideo(true)
      } else {
        setIsPlayingVideo((prev) => !prev)
      }
    }
  }

  // Simulated timer when no native video element is used
  useEffect(() => {
    if (isPlayingVideo && (!selectedItem?.videoUrl || !videoElementRef.current)) {
      simulatedTimerRef.current = window.setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingVideo(false)
            return 100
          }
          return prev + 1.2
        })
      }, 150)
    } else if (simulatedTimerRef.current) {
      clearInterval(simulatedTimerRef.current)
    }
    return () => {
      if (simulatedTimerRef.current) clearInterval(simulatedTimerRef.current)
    }
  }, [isPlayingVideo, selectedItem])

  // Native video events
  function handleNativeTimeUpdate() {
    const v = videoElementRef.current
    if (!v) return
    const cur = v.currentTime
    const dur = v.duration || 1
    setCurrentTimeSec(cur)
    setDurationSec(dur)
    setVideoProgress((cur / dur) * 100)
  }

  function handleNativeLoadedMetadata() {
    const v = videoElementRef.current
    if (!v) return
    setDurationSec(v.duration)
    if (isPlayingVideo) {
      v.play().catch(() => {
        v.muted = true
        setIsMuted(true)
        v.play()
      })
    }
  }

  function handleNativeEnded() {
    setIsPlayingVideo(false)
    setVideoProgress(100)
  }

  function handleScrub(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickPos = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1)
    const newProgress = clickPos * 100
    setVideoProgress(newProgress)

    if (videoElementRef.current && videoElementRef.current.duration) {
      videoElementRef.current.currentTime = clickPos * videoElementRef.current.duration
    }
  }

  function toggleMute() {
    if (videoElementRef.current) {
      videoElementRef.current.muted = !videoElementRef.current.muted
      setIsMuted(videoElementRef.current.muted)
    } else {
      setIsMuted((prev) => !prev)
    }
  }

  function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  function getWhatsAppQuoteLink(item: GalleryItem) {
    const text = `Hello Bademosi FlowTech! I saw your gallery project "${item.title}" in ${item.location} and would like a quote for a similar job at my property.`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  }

  return (
    <Section
      id="gallery"
      titleId="gallery-title"
      eyebrow="Recent projects"
      title="Completed work across Lagos and beyond"
      lead="Real on-site jobs for homes and commercial properties. Tap any project for photos, videos and full technical details."
      center
      className="gallery-dark-section bg-grain"
    >
      {/* Media Type & Category Filters + Client Upload Action */}
      <div className="gallery-controls">
        <div className="media-tabs" role="tablist" aria-label="Filter by media type">
          <button
            type="button"
            className={`media-tab ${activeMedia === 'all' ? 'active' : ''}`}
            onClick={() => setActiveMedia('all')}
          >
            All Media ({allItems.length})
          </button>
          <button
            type="button"
            className={`media-tab ${activeMedia === 'photo' ? 'active' : ''}`}
            onClick={() => setActiveMedia('photo')}
          >
            <ImageIcon className="icon-sm" />
            Photos ({allItems.filter((i) => i.mediaType === 'photo').length})
          </button>
          <button
            type="button"
            className={`media-tab ${activeMedia === 'video' ? 'active' : ''}`}
            onClick={() => setActiveMedia('video')}
          >
            <VideoIcon className="icon-sm" />
            Videos ({allItems.filter((i) => i.mediaType === 'video').length})
          </button>
        </div>

        <div className="gallery-top-actions">
          {/* Carousel Arrows & Play/Pause */}
          <div className="carousel-nav-buttons">
            <button
              type="button"
              className="carousel-btn"
              onClick={handlePrevSlide}
              aria-label="Previous project"
            >
              ‹
            </button>
            <button
              type="button"
              className={`carousel-btn carousel-play-btn ${isAutoplay ? 'active' : ''}`}
              onClick={() => setIsAutoplay(!isAutoplay)}
              aria-label={isAutoplay ? 'Pause carousel autoplay' : 'Start carousel autoplay'}
              title={isAutoplay ? 'Autoplay active (click to pause)' : 'Autoplay paused (click to play)'}
            >
              {isAutoplay ? <PauseIcon className="icon-xs" /> : <PlayIcon className="icon-xs" />}
            </button>
            <button
              type="button"
              className="carousel-btn"
              onClick={handleNextSlide}
              aria-label="Next project"
            >
              ›
            </button>
          </div>
        </div>
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

      {/* Gallery Touch Carousel */}
      <div
        className="gallery-carousel-viewport"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="gallery-carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {filteredItems.map((item) => {
            const displayImage = getCloudinaryImageUrl(item.image, {
              width: 800,
              quality: 'auto',
              format: 'auto',
            })
            const isCloudinary = isCloudinaryUrl(item.image) || (item.videoUrl && isCloudinaryUrl(item.videoUrl))

            return (
              <div key={item.id} className="carousel-slide-item">
                <article className={`gallery-card ${item.mediaType === 'video' ? 'gallery-card-video' : ''}`}>
                  <button
                    type="button"
                    className="gallery-card-button"
                    onClick={(e) => openModal(item, e.currentTarget)}
                    aria-label={`View project: ${item.title}, ${item.location}`}
                  >
                    <div className="gallery-media-wrapper">
                      <img
                        src={displayImage}
                        alt=""
                        loading="lazy"
                        width="800"
                        height="500"
                        className="gallery-thumb"
                      />
                      <div className="gallery-overlay">
                        <span className="gallery-action-badge">
                          {item.mediaType === 'video' ? (
                            <>
                              <PlayIcon className="icon-sm" /> Watch video walkthrough
                            </>
                          ) : (
                            <>
                              <ExpandIcon className="icon-sm" /> View photo details
                            </>
                          )}
                        </span>
                      </div>

                      {/* Top Badges */}
                      <div className="gallery-top-tags">
                        <span className={`media-badge ${item.mediaType}`}>
                          {item.mediaType === 'video' ? (
                            <>
                              <VideoIcon className="icon-xs" /> Video {item.duration && `· ${item.duration}`}
                            </>
                          ) : (
                            <>
                              <ImageIcon className="icon-xs" /> Photo
                            </>
                          )}
                        </span>
                        <div className="tag-cluster">
                          {isCloudinary && (
                            <span className="cld-badge" title="HD quality">
                              <CloudIcon className="icon-xs" /> HD
                            </span>
                          )}
                          <span className="location-badge">{item.location}</span>
                        </div>
                      </div>

                      {item.mediaType === 'video' && (
                        <div className="video-card-play-btn" aria-hidden="true">
                          <span className="play-pulse" />
                          <PlayIcon className="icon-play" />
                        </div>
                      )}
                    </div>
                  </button>
                </article>
              </div>
            )
          })}
        </div>
      </div>

      {/* Carousel Pagination Indicator Dots */}
      {filteredItems.length > 1 && (
        <div className="carousel-pagination-dots" role="tablist" aria-label="Gallery slides">
          {filteredItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className={`pagination-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}: ${item.title}`}
            />
          ))}
        </div>
      )}

      {/* Client Admin Upload Modal */}
      <AdminUploadModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onAddItem={(item) => {
          const updated = [item, ...customItems]
          setCustomItems(updated)
          localStorage.setItem('bademosi_custom_gallery', JSON.stringify(updated))
        }}
        customItems={customItems}
        onDeleteItem={(id) => {
          const updated = customItems.filter((i) => i.id !== id)
          setCustomItems(updated)
          localStorage.setItem('bademosi_custom_gallery', JSON.stringify(updated))
        }}
      />

      {/* Modal: Fullscreen Lightbox & Cloudinary Video Player */}
      {selectedItem && (
        <div className="modal-backdrop" onClick={closeModal} role="dialog" aria-modal="true" aria-label={selectedItem.title} ref={modalRef}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close project details"
              ref={modalCloseRef}
            >
              <CloseIcon className="icon" />
            </button>

            <div className="modal-grid">
              {/* Media Section */}
              <div className="modal-media-col">
                <div className="modal-media-viewport">
                  {selectedItem.mediaType === 'video' && selectedItem.videoUrl ? (
                    <>
                      {/* Native HTML5 Video Stream (Fully supports Cloudinary URLs) */}
                      <video
                        ref={videoElementRef}
                        src={getCloudinaryVideoUrl(selectedItem.videoUrl)}
                        poster={getCloudinaryVideoPoster(selectedItem.videoUrl) || selectedItem.image}
                        className="modal-main-video"
                        playsInline
                        preload="metadata"
                        onTimeUpdate={handleNativeTimeUpdate}
                        onLoadedMetadata={handleNativeLoadedMetadata}
                        onEnded={handleNativeEnded}
                        onClick={togglePlayVideo}
                      />

                      {/* Custom Video Controls Overlay */}
                      <div className="video-player-overlay">
                        <div className="video-header-bar">
                          <span className="live-demo-pill">
                            <span className="pulse-dot" /> Video walkthrough
                          </span>
                          <span className="video-time">
                            {formatTime(currentTimeSec || (videoProgress / 100) * 75)} /{' '}
                            {durationSec ? formatTime(durationSec) : selectedItem.duration}
                          </span>
                        </div>

                        {!isPlayingVideo && (
                          <div className="video-center-action" onClick={togglePlayVideo}>
                            <button
                              type="button"
                              className="video-big-play"
                              aria-label="Play video demonstration"
                            >
                              <PlayIcon className="icon" />
                            </button>
                          </div>
                        )}

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
                            onClick={handleScrub}
                            role="slider"
                            aria-valuenow={Math.round(videoProgress)}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div className="progress-fill" style={{ width: `${videoProgress}%` }} />
                            <div className="progress-handle" style={{ left: `${videoProgress}%` }} />
                          </div>

                          <button
                            type="button"
                            className="ctrl-btn"
                            onClick={toggleMute}
                            aria-label={isMuted ? 'Unmute' : 'Mute'}
                          >
                            {isMuted ? <VolumeMuteIcon className="icon-sm" /> : <VolumeIcon className="icon-sm" />}
                          </button>

                          <div className="audio-badge" title="HD video">
                            <CloudIcon className="icon-xs" />
                            <span>1080p HD</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Photo or Simulated Walkthrough */}
                      <img
                        src={getCloudinaryImageUrl(selectedItem.image, {
                          width: 1200,
                          quality: 'auto',
                          format: 'auto',
                        })}
                        alt={selectedItem.title}
                        className="modal-main-img"
                        width="1200"
                        height="750"
                      />

                      {selectedItem.mediaType === 'video' && (
                        <div className="video-player-overlay">
                          <div className="video-header-bar">
                            <span className="live-demo-pill">
                              <span className="pulse-dot" /> Video walkthrough
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

                            <div className="audio-badge" title="HD video">
                              <VolumeIcon className="icon-xs" />
                              <span>HD 1080p</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Details & Action Column */}
              <div className="modal-info-col">
                <div className="modal-tags">
                  <span className="pill-cat">{selectedItem.category}</span>
                  <span className="pill-loc">{selectedItem.location}</span>
                  {isCloudinaryUrl(selectedItem.image) && (
                    <span className="pill-cld">
                      <CloudIcon className="icon-xs" /> HD
                    </span>
                  )}
                </div>

                <h2 className="modal-title">{selectedItem.title}</h2>
                <p className="modal-desc">{selectedItem.description}</p>

                {/* Technical highlights */}
                <div className="modal-section-title">Key project details</div>
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
                    <div className="modal-section-title">Process steps</div>
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

                {/* Warranty Callout */}
                <div className="modal-owner-badge">
                  <div className="owner-avatar">B</div>
                  <div>
                    <strong>Workmanship warranty</strong>
                    <span>Every project is inspected and backed by Bademosi FlowTech.</span>
                  </div>
                </div>

                {/* Direct CTA Button */}
                <div className="modal-actions">
                  <a
                    className="btn btn-primary-accent btn-block"
                    href={getWhatsAppQuoteLink(selectedItem)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="icon" />
                    Request Quote for Similar Project
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
