# System architecture

## Overview

Velorah Dream is a static client-rendered React application built by Vite. It has no server runtime, router, application data layer, or user-data storage.

## Layers

| Layer | Implementation | Contract |
|---|---|---|
| Document | `index.html`, `public/` | Metadata, resource hints, local identity, viewport, mount point |
| Application | `src/app.tsx` | Page shell, hero media, section composition, footer |
| Navigation state | `use-page-navigation.ts`, `site-navigation.ts` | Typed anchors, active section, hero surface state |
| Media | `site-media.ts`, `viewport-video.tsx` | One public source, native media attributes, visibility playback policy |
| Components | `src/components/` | Fixed header, mobile disclosure, sections, reveals, footer, Button |
| Design system | `src/index.css` | Semantic tokens, glass, motion, reduced-motion rules |
| Verification | Vitest + Testing Library + Chromium QA | DOM, anchors, focus, media, motion, responsive behavior |
| Build | Vite + TypeScript + Tailwind | Typed optimized static assets in `dist/` |

## Network boundaries

| Origin | Resource | Failure behavior |
|---|---|---|
| `fonts.googleapis.com` / `fonts.gstatic.com` | Instrument Serif and Inter | Browser fallbacks preserve semantic content |
| `d8j0ntlcm91z4.cloudfront.net` | One MP4 shared by hero and reel | Deep-navy layout remains; no poster or alternate source |

Preconnects carry no credentials. Favicon and share images come from root-relative local SVG files.

## Interaction flow

1. Native fragment links target five existing section IDs; CSS `scroll-margin` clears the fixed header.
2. A section observer maps the narrow viewport band to one typed navigation ID and exposes `aria-current="location"`. Missing observer support stays at Home.
3. A separate hero observer changes the header from transparent to navy when the hero intersection drops below 55%.
4. The mobile disclosure owns only open/focus state: focus Home on open; close on selection, Escape, or `md` resize; restore button focus on Escape.
5. Hero and Studio render the same media component. At 25% intersection it requests playback and catches rejection; outside view it pauses; cleanup disconnects the observer.
6. Section reveal wrappers become visible once. Missing observer support shows content immediately.
7. Reduced-motion CSS removes non-essential UI motion and smooth scrolling; video playback remains unchanged.
8. Contact links delegate to the visitor's configured email client.

## Verification boundary

Vitest collects coverage from app, component, and library modules; hooks/content are exercised by component behavior but are outside the configured collection glob. Current evidence is recorded in the [automated report](../plans/260718-2001-velorah-professional-web-polish/reports/tester-2026-07-18-professional-polish.md) and [browser QA](../plans/260718-2001-velorah-professional-web-polish/reports/browser-qa-2026-07-18-professional-polish.md).

## Deployment model

Run `npm run build` and deploy `dist/` to a static host. The browser must reach the font and CloudFront origins. After a production domain is selected, add canonical/`og:url` values, absolute social-image URLs, and a raster share-card fallback if the target crawlers require it.
