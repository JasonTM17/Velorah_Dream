# System architecture

## Overview

Velorah Dream is a static client-rendered React application built by Vite. It has no server runtime and no application data layer.

## Layers

| Layer | Implementation | Contract |
|---|---|---|
| Document | `index.html` | Metadata, viewport, mount point |
| Application | `src/app.tsx` | Page shell, hero media, and section composition |
| Content | `src/content/site-navigation.ts` | Shared in-page navigation contract |
| Components | `src/components/` | Header, footer, sections, reveal, and Button primitive |
| Design system | `src/index.css` | Semantic tokens, fonts, glass, and motion |
| Verification | Vitest + Testing Library | DOM, anchors, media, motion, and accessibility contracts |
| Build | Vite + TypeScript + Tailwind | Typed optimized static assets in `dist/` |

## Network boundaries

| Origin | Resource | Failure behavior |
|---|---|---|
| `fonts.googleapis.com` / `fonts.gstatic.com` | Instrument Serif and Inter | Browser font fallbacks preserve content |
| `d8j0ntlcm91z4.cloudfront.net` | Decorative MP4 | Deep-navy background preserves layout and legibility |

No request contains credentials or user data.

## Interaction flow

1. Header and hero links use native fragment navigation to existing section IDs.
2. Section content is present in the DOM from initial render.
3. The section reveal component observes each wrapper and permanently marks it visible on first intersection.
4. Browsers without the observer API and reduced-motion users receive immediately visible content.
5. Contact links delegate to the visitor's configured email client; no form data crosses an application boundary.

## Deployment model

Run `npm run build` and deploy the generated `dist/` directory to a static host. The host must allow outbound browser access to the font and video origins.
