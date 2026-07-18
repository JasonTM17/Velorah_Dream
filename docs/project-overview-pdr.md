# Velorah Dream product requirements

## Overview

Velorah Dream is a complete single-page brand experience for deep thinkers, bold creators, and quiet rebels. A fullscreen film creates the entry point, then a restrained editorial system carries visitors through Studio, About, Journal, and Reach Us. Persistent navigation and a second moving-media moment make the composition operate as a production agency site.

## Audience

- Creative professionals seeking focused digital work.
- Visitors encountering the Velorah brand for the first time.
- Mobile and desktop users, including keyboard and reduced-motion users.

## Functional requirements

- Display the supplied MP4 as a fullscreen muted, looping, inline hero.
- Reuse that MP4 as an asymmetric Studio reel with a separate caption.
- Use optimized local film frames as responsive posters and editorial imagery.
- Play visible media and pause it outside the viewport; contain playback rejection.
- Present the Velorah logo, five real anchor labels, and header CTA above the film.
- Keep the header fixed, mark the current anchor with `aria-current="location"`, and add its navy surface as the hero recedes.
- Present inline navigation from `md`; below it, expose a 44px mobile disclosure that handles initial focus, Escape, selection, and desktop resize.
- Present the supplied hero headline, supporting copy, and primary CTA.
- Render both CTAs with the shared liquid-glass button variant.
- Provide substantive Studio, About, Journal, and Reach Us sections plus footer navigation.
- Provide a real project-brief action through the repository's enabled Issues channel.
- Reveal section content once as it enters the viewport, without an animation dependency.
- Declare a local SVG favicon and 1200x630 PNG Open Graph/Twitter asset.

## Quality requirements

- Use React, Vite, TypeScript, Tailwind CSS, and a shadcn/ui-compatible Button.
- Preserve exact HSL tokens, Instrument Serif/Inter pairing, supplied video, and staged hero timing.
- Avoid decorative overlays, blobs, radial gradients, generic cards, and fake destinations.
- Prevent horizontal overflow from 320px through desktop widths.
- Provide visible focus, skip navigation, semantic headings, real anchors, and reduced-motion CSS.
- Keep content and layout usable when remote fonts or video are unavailable; local posters preserve both media compositions.
- Preconnect public font and media origins without exposing credentials.
- Pass lint, 20-test suite, coverage thresholds, audit, docs validation, production build, and multi-viewport browser QA.

## Out of scope

- Backend services, authentication, persistence, analytics, forms, or email delivery infrastructure.
- Routing, standalone Journal pages, or a content management system.
- Theme switching or alternative visual modes.
- Custom-domain purchase or DNS management beyond the verified Vercel origin.

## Acceptance evidence

- [Automated verification](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/tester-2026-07-18-rich-release.md)
- [Browser QA](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/browser-qa-2026-07-18-rich-release.md)
- [GIF evidence](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/gif-evidence-2026-07-18.md)
- [Production-readiness review](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/code-reviewer-2026-07-18-rich-release.md)
- [Deployment guide](./deployment.md)

## Unresolved questions

- None for the current repository scope.
