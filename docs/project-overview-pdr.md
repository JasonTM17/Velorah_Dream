# Velorah Dream product requirements

## Overview

Velorah Dream is a complete single-page brand experience for deep thinkers, bold creators, and quiet rebels. A fullscreen film creates the entry point, then a restrained editorial system carries visitors through Studio, About, Journal, and Reach Us. Persistent navigation and a second moving-media moment make the composition operate as a production creative-studio site.

Production: [velorah-dream.vercel.app](https://velorah-dream.vercel.app/)

## Audience

- Creative professionals seeking focused digital work.
- Visitors encountering the Velorah brand for the first time.
- Mobile and desktop users, including keyboard and reduced-motion users.

## Functional requirements

### Experience and content

- Present Home, Studio, About, Journal, and Reach Us in that order with stable native-anchor IDs.
- Display the supplied MP4 as a fullscreen muted, looping, inline hero; reuse it as an asymmetric Studio reel with a separate caption.
- Use optimized local film frames as responsive posters and editorial imagery.
- Present the supplied hero headline, supporting copy, and two shared liquid-glass calls to action.
- Give About a manifesto, three-item Working model definition list, semantic four-step ordered method with a named outcome per step, and closing statement.
- Give Journal a Current thread, three dated entries, a featured entry whose three body paragraphs are visible, two additional native disclosures, and three closing question rows.
- Provide substantive Reach Us content, footer navigation, and a real project-brief action through the repository's enabled Issues channel.
- Declare a local SVG favicon and 1200×630 PNG Open Graph/Twitter asset.

### Interaction and accessibility

- Play visible media and pause it outside the viewport; contain playback rejection.
- Keep the header fixed, mark the current anchor with `aria-current="location"`, and add its navy surface as the hero recedes.
- Present inline navigation from `md`; below it, expose a 44px disclosure that handles initial focus, Escape, selection, and desktop resize.
- Include each additional Journal entry title in its native `summary` accessible name without replacing visible summary text.
- Reveal section content once as it enters the viewport, with fast-scroll and missing-observer fallbacks.
- Preserve visible focus, skip navigation, semantic heading order, real anchors, stable 96px fragment alignment while layout settles, cancellation of current correction on user input, fresh settling alignment after a new hash, and correct active state in short landscape viewports.

## Quality requirements

- Use React, Vite, TypeScript, Tailwind CSS, and a shadcn/ui-compatible Button.
- Preserve the approved HSL tokens, Instrument Serif/Inter pairing, supplied video, and staged hero timing.
- Avoid decorative overlays, blobs, radial gradients, generic cards, fake destinations, and hover-only meaning.
- Prevent horizontal overflow from 320px through desktop widths.
- Disable non-essential CSS entrance, reveal, disclosure, toggle, hover, and smooth-scroll motion under `prefers-reduced-motion`; decorative video remains available.
- Keep content and layout usable when remote fonts or video are unavailable; local posters preserve both media compositions.
- Preconnect public font and media origins without exposing credentials.
- Pass lint, the 24-test/6-file component suite, coverage thresholds, audit, docs validation, production build, animated-asset inspection, and multi-viewport browser QA.

## Constraints and dependencies

- Runtime dependencies: Google Fonts and one public CloudFront MP4.
- Project-brief handoff: [GitHub Issues](https://github.com/JasonTM17/Velorah_Dream/issues/new?title=Project%20inquiry%3A%20).
- Hosting: static Vite output on the verified Vercel origin; no runtime environment variables.
- Repository showcase GIFs and JPEGs document the delivered UI but are not runtime application assets.

## Out of scope

- Backend services, authentication, persistence, analytics, forms, or email delivery infrastructure.
- Routing, standalone Journal pages, or a content management system.
- Theme switching or alternative visual modes.
- Custom-domain purchase or DNS management beyond the verified Vercel origin.

## Acceptance criteria

| Criterion | Current evidence |
|---|---|
| Content and semantic contracts | About and Journal component tests plus production-readiness review |
| Responsive and accessibility behavior | Five-viewport Chromium QA and focused component tests |
| Motion and reduced-motion behavior | Browser QA, CSS inspection, and animated GIF evidence |
| Build and dependency health | Release test report |
| Public release | Verified Vercel production URL and deployment guide |

## Acceptance evidence

- [Automated verification](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/tester-2026-07-19-editorial-refresh.md)
- [Browser QA](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/browser-qa-2026-07-19-editorial-refresh.md)
- [GIF evidence](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/gif-evidence-2026-07-19-editorial-refresh.md)
- [Production-readiness review](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/code-reviewer-2026-07-19-editorial-refresh.md)
- [Deployment guide](./deployment.md)

## Version history

| Date | Change |
|---|---|
| 2026-07-19 | Expanded About and Journal content contracts; refreshed repository motion and still-image showcase. |
| 2026-07-18 | Delivered the full static single-page experience, identity assets, accessibility behavior, verification, and Vercel release. |

## Unresolved questions

- None for the current repository scope.
