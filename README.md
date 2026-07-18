# Velorah Dream

A production-polished cinematic single-page site for Velorah. A fullscreen film opens into an editorial Studio, About manifesto, Journal, direct contact invitation, and responsive footer. A fixed section-aware header, keyboard-safe mobile disclosure, and viewport-managed Studio reel make the experience behave like a complete agency website.

## Quick start

Prerequisite: Node.js `^20.19.0` or `>=22.12.0`.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create the production bundle |
| `npm run preview` | Serve the production bundle locally |
| `npm run lint` | Run ESLint across project TypeScript |
| `npm test` | Run the Vitest component suite once |
| `npm run test:coverage` | Run tests with enforced coverage thresholds |

## Stack

- React 19 and TypeScript 6
- Vite 8
- Tailwind CSS 4 through the Vite plugin
- shadcn/ui-compatible local `Button` primitive
- Vitest and Testing Library

## Experience contract

- Full-viewport hero and asymmetric Studio reel share the supplied muted inline MP4.
- Each video plays only after entering its viewport threshold and pauses outside it; rejected autoplay promises are contained.
- The fixed header derives its active anchor from section visibility and gains a restrained navy surface as the hero recedes.
- Below `md`, a 44px menu control opens native anchor navigation, focuses the first link, and closes on selection, Escape, or desktop resize.
- Instrument Serif display typography pairs with Inter body copy; font and video origins receive early connection hints.
- HSL semantic color tokens, liquid-glass CTAs, staggered hero motion, and one-shot section reveals preserve the approved cinematic direction.
- Reduced-motion mode removes CSS entrance, disclosure, reveal, and smooth-scroll motion. Decorative video remains enabled.
- No decorative overlays, blobs, radial gradients, backend, router, CMS, or fake article links.
- Local SVG favicon plus Open Graph/Twitter assets provide repository-owned tab/share identity.

## Project structure

```text
public/
|-- velorah-mark.svg
`-- velorah-social-card.svg
src/
|-- components/
|   |-- sections/
|   |   |-- about-section.tsx
|   |   |-- contact-section.tsx
|   |   |-- journal-section.tsx
|   |   `-- studio-section.tsx
|   |-- site-header.tsx
|   |-- site-footer.tsx
|   |-- viewport-video.tsx
|   `-- ui/button.tsx
|-- content/
|   |-- site-media.ts
|   `-- site-navigation.ts
|-- hooks/use-page-navigation.ts
|-- app.tsx
|-- index.css
`-- main.tsx
```

## Verification

The current professional-polish milestone passes 14 tests across 5 focused files, coverage gates, lint, production build, `npm audit`, docs validation, and Chromium QA at 1440, 768, 375, 320, and 812 landscape widths.

- [Automated verification](./plans/260718-2001-velorah-professional-web-polish/reports/tester-2026-07-18-professional-polish.md)
- [Browser QA and screenshots](./plans/260718-2001-velorah-professional-web-polish/reports/browser-qa-2026-07-18-professional-polish.md)
- [Production-readiness review](./plans/260718-2001-velorah-professional-web-polish/reports/code-reviewer-2026-07-18-professional-polish.md)

## External media

Hero and Studio use one CloudFront MP4 supplied in the project brief. Google Fonts supplies Instrument Serif and Inter. The deep-navy layout and semantic content remain usable if remote media or fonts fail, but the project does not ship a video poster or alternate media source. Metadata images are local root-relative SVGs; absolute social URLs and a raster share-card fallback should be added once the production domain and hosting pipeline are known.
