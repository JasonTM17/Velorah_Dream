# System architecture

## Overview

Velorah Dream is a static client-rendered React application built by Vite. It has no server runtime, router, application data layer, or user-data storage.

## Layers

| Layer | Implementation | Contract |
|---|---|---|
| Document | `index.html`, `public/` | Metadata, resource hints, local identity, viewport, mount point |
| Application | `src/app.tsx` | Page shell, hero media, section composition, footer |
| Navigation state | `use-page-navigation.ts`, `use-initial-hash-anchor.ts`, `site-navigation.ts` | Typed anchors, direct-fragment alignment, active section, hero state |
| Media | `site-media.ts`, `viewport-video.tsx`, `cinematic-image.tsx` | Public video, local responsive stills, visibility playback policy |
| Components | `src/components/` | Fixed header, mobile disclosure, sections, reveals, footer, Button |
| Design system | `src/index.css` | Semantic tokens, glass, motion, reduced-motion rules |
| Verification | Vitest + Testing Library + Chromium QA | DOM, anchors, focus, media, motion, responsive behavior |
| Build | Vite + TypeScript + Tailwind | Typed optimized static assets in `dist/` |

## Network boundaries

| Origin | Resource | Failure behavior |
|---|---|---|
| `fonts.googleapis.com` / `fonts.gstatic.com` | Instrument Serif and Inter | Browser fallbacks preserve semantic content |
| `d8j0ntlcm91z4.cloudfront.net` | One MP4 shared by hero and reel | Local film posters preserve the composition |
| `github.com/JasonTM17/Velorah_Dream` | Enabled Issues project-brief channel | Site remains readable if unavailable |

Preconnects carry no credentials. Favicon and share images are local SVG/PNG files.

## Interaction flow

1. Native fragment links target five existing IDs; 96px `scroll-margin` clears the fixed header. A post-mount hook corrects direct-load fragment timing without animating across the document.
2. A section observer maps the narrow viewport band to one typed navigation ID and exposes `aria-current="location"`. A throttled scroll fallback recovers state after large jumps; missing observer support stays at Home.
3. A separate hero observer changes the header from transparent to navy when the hero intersection drops below 55%.
4. The mobile disclosure owns only open/focus state: focus Home on open; close on selection, Escape, or `md` resize; restore button focus on Escape.
5. Hero and Studio render the same media component. At 25% intersection it requests playback and catches rejection; outside view it pauses; cleanup disconnects the observer.
6. Section reveal wrappers become visible once. Fast-scroll and missing-observer fallbacks prevent opacity-hidden content.
7. Reduced-motion CSS removes non-essential UI motion and smooth scrolling; video playback remains unchanged.
8. Project-brief links open the repository's enabled Issues channel in a new tab.

## Verification boundary

Vitest collects coverage from app, component, and library modules; hook contracts also have focused tests. Current evidence is recorded in the [automated report](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/tester-2026-07-18-rich-release.md) and [browser QA](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/browser-qa-2026-07-18-rich-release.md).

## Deployment model

Vercel builds with `npm run build` and serves `dist/` at `https://velorah-dream.vercel.app/`. No environment variables are required. The browser must reach the font and CloudFront origins; canonical, `og:url`, and raster social metadata use the verified production origin. See [deployment](./deployment.md).
