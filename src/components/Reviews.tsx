import Section from './Section'
import Reveal from './Reveal'
import { StarIcon, ShieldCheckIcon } from './Icons'

interface Review {
  quote: string
  name: string
  area: string
  initial: string
  service: string
}

const REVIEWS: Review[] = [
  {
    quote:
      'Our kitchen main pipe burst at 2am and water was flooding the compound. Bademosi picked up immediately, arrived in 35 minutes, and welded the replacement himself. Dealing directly with the master plumber makes all the difference.',
    name: 'Adaeze O.',
    area: 'Lekki Phase 1',
    initial: 'A',
    service: 'Emergency Burst Pipe Fix',
  },
  {
    quote:
      'He personally installed our dual borehole overhead tanks and booster pump in one day. Neat Schedule 80 piping, zero leaks, upfront honest quote with no hidden extras. Best plumber in Lagos.',
    name: 'Engr. Tunde A.',
    area: 'Surulere',
    initial: 'T',
    service: 'Borehole & Tank Setup',
  },
  {
    quote:
      'Our estate drain had been backing up for weeks. Other handymen tried and failed. Bademosi arrived with his motorized snake machine, unblocked the line in 40 minutes, and left the cleanout spotless.',
    name: 'Mrs. Bello',
    area: 'Ikeja GRA',
    initial: 'B',
    service: 'Heavy-Duty Drain Clearing',
  },
]

export default function Reviews() {
  return (
    <Section
      id="reviews"
      titleId="reviews-title"
      eyebrow="Direct Client Feedback"
      title="Trusted by Lagos Homeowners & Landlords"
      lead="Direct personal accountability on every callout. Honest pricing, master execution, and lasting reliability."
      center
    >
      <div className="reviews-grid">
        {REVIEWS.map((review) => (
          <Reveal key={review.name}>
            <article className="review-card">
              <div className="review-card-top">
                <div className="stars" aria-label="Rated 5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} className="icon-sm" />
                  ))}
                </div>
                <span className="verified-badge">
                  <ShieldCheckIcon className="icon-xs" /> Verified Customer
                </span>
              </div>
              <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
              <div className="review-service-tag">{review.service}</div>
              <div className="review-who">
                <span className="avatar" aria-hidden="true">
                  {review.initial}
                </span>
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.area}</span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
