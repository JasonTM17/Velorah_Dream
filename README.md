# Velorah Dream

A production-polished cinematic single-page site for Velorah. A fullscreen film opens into an editorial Studio, About manifesto, Journal, direct contact invitation, and responsive footer. A fixed section-aware header, keyboard-safe mobile disclosure, and viewport-managed Studio reel make the experience behave like a complete agency website.

Production: [velorah-dream.vercel.app](https://velorah-dream.vercel.app/)

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
- Ten responsive local WebP frames provide posters and image-led editorial depth.
- Each video plays only after entering its viewport threshold and pauses outside it; rejected autoplay promises are contained.
- The fixed header derives its active anchor from section visibility and gains a restrained navy surface as the hero recedes.
- Below `md`, a 44px menu control opens native anchor navigation, focuses the first link, and closes on selection, Escape, or desktop resize.
- Instrument Serif display typography pairs with Inter body copy; font and video origins receive early connection hints.
- HSL semantic color tokens, liquid-glass CTAs, staggered hero motion, and one-shot section reveals preserve the approved cinematic direction.
- Direct hashes align below the fixed header; fast scrollbar jumps recover both reveal and current-section state.
- Reduced-motion mode removes CSS entrance, disclosure, reveal, and smooth-scroll motion. Decorative video remains enabled.
- The contact action opens the repository's enabled project-brief channel; no fake mailbox or form is presented.
- No decorative overlays, blobs, radial gradients, backend, router, CMS, or fake article links.
- Local SVG favicon plus a 1200x630 PNG provide repository-owned tab/share identity.

## Project structure

```text
public/
|-- velorah-stills/
|-- velorah-mark.svg
|-- velorah-social-card.svg
`-- velorah-social-card.png
src/
|-- components/
|   |-- sections/
|   |   |-- about-section.tsx
|   |   |-- contact-section.tsx
|   |   |-- journal-section.tsx
|   |   `-- studio-section.tsx
|   |-- site-header.tsx
|   |-- site-footer.tsx
|   |-- cinematic-image.tsx
|   |-- viewport-video.tsx
|   `-- ui/button.tsx
|-- content/
|   |-- site-contact.ts
|   |-- site-media.ts
|   `-- site-navigation.ts
|-- hooks/
|   |-- use-initial-hash-anchor.ts
|   `-- use-page-navigation.ts
|-- app.tsx
|-- index.css
`-- main.tsx
```

## Verification

The current release passes 20 tests across 6 focused files, coverage gates, lint, production build, `npm audit`, docs validation, and Chromium QA at 1440, 768, 375, 320, and 812 landscape widths.

- [Automated verification](./plans/260718-2159-velorah-rich-sections-gif-vercel/reports/tester-2026-07-18-rich-release.md)
- [Browser QA and screenshots](./plans/260718-2159-velorah-rich-sections-gif-vercel/reports/browser-qa-2026-07-18-rich-release.md)
- [Animated GIF evidence](./plans/260718-2159-velorah-rich-sections-gif-vercel/reports/gif-evidence-2026-07-18.md)
- [Production-readiness review](./plans/260718-2159-velorah-rich-sections-gif-vercel/reports/code-reviewer-2026-07-18-rich-release.md)
- [Deployment guide](./docs/deployment.md)

## External media

Hero and Studio use one CloudFront MP4 supplied in the project brief. Google Fonts supplies Instrument Serif and Inter. Local poster frames preserve both media surfaces when video is delayed or unavailable. Canonical and social metadata use the verified Vercel origin and local PNG share card.
