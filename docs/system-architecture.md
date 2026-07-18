# System architecture

## Overview

Velorah Dream is a static client-rendered React application built by Vite. It has no server runtime and no application data layer.

## Layers

| Layer | Implementation | Contract |
|---|---|---|
| Document | `index.html` | Metadata, viewport, mount point |
| Application | `src/app.tsx` | Full hero composition and media attributes |
| Components | `src/components/` | Navigation and reusable Button primitive |
| Design system | `src/index.css` | Semantic tokens, fonts, glass, animation |
| Verification | Vitest + Testing Library | DOM, media, CTA, and accessibility contracts |
| Build | Vite + TypeScript + Tailwind | Typed optimized static assets in `dist/` |

## Network boundaries

| Origin | Resource | Failure behavior |
|---|---|---|
| `fonts.googleapis.com` / `fonts.gstatic.com` | Instrument Serif and Inter | Browser font fallbacks preserve content |
| `d8j0ntlcm91z4.cloudfront.net` | Decorative MP4 | Deep-navy background preserves layout and legibility |

No request contains credentials or user data.

## Deployment model

Run `npm run build` and deploy the generated `dist/` directory to a static host. The host must allow outbound browser access to the font and video origins.
