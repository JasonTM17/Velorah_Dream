# Vercel Production Deployment — Editorial Refresh

## Release

- Code revision: `83b899450769b6901b16f30ef5d88b01bb5215f1`
- Stable alias: [https://velorah-dream.vercel.app/](https://velorah-dream.vercel.app/)
- Immutable deployment: [https://velorah-dream-7uuwjkrr9-nguyensonbmt06-6377s-projects.vercel.app/](https://velorah-dream-7uuwjkrr9-nguyensonbmt06-6377s-projects.vercel.app/)
- Platform/framework: Vercel / Vite
- Date: 2026-07-19

## Build Evidence

Vercel completed `npm run build` and aliased the immutable deployment to the stable origin. The public alias serves:

| Asset | Public result |
|---|---|
| HTML | 2.49 kB, 0.78 kB gzip at build time |
| App CSS | `index-B34OlyQ3.css`, status 200, 33,540 bytes over HTTP |
| App JavaScript | `index-BuzDPlOY.js`, status 200 |
| Social card | `image/png`, status 200, 26,131 bytes |

No runtime environment variables, dotenv files, server functions, database, or deployment secret are required.

## Public Runtime Verification

| Check | Result |
|---|---|
| Viewports | 320x568, 375x812, 768x1024, 812x375, 1440x900 |
| HTTP status | 200 at all five widths |
| Horizontal overflow | 0 at all five widths |
| Direct `#about` | 96px top and active About at all five widths |
| Early About → Journal navigation | `#journal`, 96px top, active Journal after settling |
| Reveals and images | 18/18 visible, 8/8 loaded after traversal |
| Editorial structure | 3 Working model rows, 4 method steps, 3 articles, 2 disclosures, 3 questions |
| Video lifecycle | Hero plays at Home; both videos pause at page end |
| Mobile menu | Home focus, five 44px rows, Escape focus restoration |
| Reduced motion | `0s` disclosure transitions, immediate distinct open state, auto scroll behavior |
| Console/page errors | 0 / 0 |

## Metadata Verification

- Title: `Velorah® — Where dreams rise`
- Canonical and `og:url`: `https://velorah-dream.vercel.app/`
- Open Graph and Twitter image: `https://velorah-dream.vercel.app/velorah-social-card.png`
- Project brief: enabled GitHub Issues route for `JasonTM17/Velorah_Dream`

## Repository Metadata

GitHub About now exposes the production homepage, a concise cinematic React/TypeScript description, and ten relevant topics covering React, TypeScript, Vite, Tailwind CSS, accessibility, responsive design, web design/animation, creative studio, and Vercel.

## Rollback

Use `vercel rollback <deployment-url-or-id> --yes`, then repeat the stable-alias metadata and responsive smoke checks. No force-push or deletion is required.

## Unresolved Questions

None.
