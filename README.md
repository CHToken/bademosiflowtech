# Bademosi FlowTech — Plumbing Solutions

Marketing website for **Bademosi FlowTech**, a 24/7 plumbing company serving Lagos, Abuja and Port Harcourt, Nigeria. Mobile-first, WhatsApp-first booking flow, built for fast loads on variable connectivity.

Built with **React 18 + TypeScript + Vite**, styled with plain CSS (no framework), and ready for **Vercel** deployment.

## Quick start

```bash
npm install --include=dev   # dev flag needed if npm config omit=dev is set
npm run dev                 # local dev server
npm run build               # type-check + production build to dist/
npm run preview             # preview the production build
```

## Deploy to Vercel

Import this repo at [vercel.com/new](https://vercel.com/new). Vite is auto-detected and `vercel.json` pins the build command, output directory, SPA rewrites, security headers and asset caching. No environment variables needed.

## Project structure

```
index.html              SEO head: meta, Open Graph, Twitter, JSON-LD (Plumber + FAQPage)
public/
  logo.svg              Brand logo (replace with the real logo file, keep the path)
  og-image.svg          Social share image
  gallery/              Recent project photos used by the Gallery section
  favicon.svg, site.webmanifest, sitemap.xml, robots.txt
src/
  constants.ts          Phone number, WhatsApp number, site URL — single source of truth
  components/           Header, Hero, Services, Stats, Gallery, Reviews, Areas, Booking, Footer, StickyCta
  styles/               tokens.css (design tokens) · base.css · components.css
vercel.json             Build, rewrites, headers, caching
```

## Customizing

**Contact details** — edit `src/constants.ts`:

```ts
export const PHONE = '+2348100013728'
export const WHATSAPP_NUMBER = '2348100013728'
export const SITE_URL = 'https://bademosiflowtech.com'
```

Every `tel:` / `wa.me` link and the booking form reads from these constants.

**Domain** — if the production domain differs from `bademosiflowtech.com`, update `SITE_URL` plus the `canonical` and `og:url`/`og:image`/`twitter:image` URLs in `index.html` and `public/sitemap.xml`.

**Logo** — replace `public/logo.svg` with the real logo (keep the `/logo.svg` path; the header, footer, favicon and OG image reference it).

**Gallery** — the Gallery component uses photos in `public/gallery/`. Swap in real job photos and update the items in `src/components/Gallery.tsx`.

**Brand colors** — all colors are CSS custom properties in `src/styles/tokens.css` (sky blue `--sky-*`, slate neutrals, WhatsApp green).

## SEO

- Meta description/keywords, canonical URL, robots directives
- Open Graph + Twitter card tags
- JSON-LD: `Plumber` schema (services, coverage, rating, hours) + `FAQPage`
- `sitemap.xml` and `robots.txt` in `public/`

## Design system

- Palette: deep slate (`#1E293B`) + white surfaces, sky blue CTAs (`#0284C7`), WhatsApp green (`#128C7E`)
- Typography: Inter/Public Sans via system font stack — no font downloads, zero external requests
- Mobile-first: sticky bottom WhatsApp + Call bar under 1024px, hidden on desktop
- Accessibility: skip link, focus-visible rings, labeled form fields, 48px+ tap targets, `prefers-reduced-motion` support

## License

Private. © 2026 Bademosi FlowTech — Plumbing Solutions.
