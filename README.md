# Velorah Dream

A complete cinematic single-page site for Velorah. A fullscreen looping film opens into an editorial Studio, About manifesto, Journal, direct contact invitation, and responsive footer.

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

- React 19 and TypeScript
- Vite 8
- Tailwind CSS 4 through the Vite plugin
- shadcn/ui-compatible local `Button` primitive
- Vitest and Testing Library

## Design contract

- Full-viewport decorative video with muted inline autoplay and a deep-navy fallback.
- Instrument Serif display typography paired with Inter body copy.
- HSL semantic color tokens and a reusable liquid-glass button variant.
- Staggered hero motion and one-shot section reveals using only transform and opacity.
- No decorative overlays, blobs, or radial gradients.
- Mobile-safe viewport sizing, visible keyboard focus, skip navigation, and reduced-motion support.
- Working anchors for every navigation item, plus a direct email action at `hello@velorah.com`.

## Project structure

```text
src/
├── components/
│   ├── sections/
│   │   ├── about-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── journal-section.tsx
│   │   └── studio-section.tsx
│   ├── section-heading.tsx
│   ├── section-reveal.tsx
│   ├── site-footer.tsx
│   ├── site-header.tsx
│   └── ui/button.tsx
├── content/site-navigation.ts
├── lib/utils.ts
├── test/setup.ts
├── app.test.tsx
├── app.tsx
├── index.css
└── main.tsx
```

## External media

The hero film is loaded from the CloudFront URL supplied in the project brief. Google Fonts supplies Instrument Serif and Inter. If either remote resource is unavailable, the page keeps its layout and semantic content while browser font fallbacks and the deep-navy background take over. The contact address is static site content and should be changed in both the contact section and footer if the production inbox differs.
