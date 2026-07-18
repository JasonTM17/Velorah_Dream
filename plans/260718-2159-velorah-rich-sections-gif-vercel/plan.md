---
title: 'Velorah Rich Sections, Motion Evidence and Vercel Release'
description: >-
  Enrich every below-fold section with cinematic editorial depth, preserve the
  approved hero contract, capture motion GIF evidence, and release the verified
  site to Vercel.
status: pending
priority: P1
branch: main
tags:
  - frontend
  - design
  - motion
  - qa
  - vercel
blockedBy: []
blocks: []
created: '2026-07-18T15:00:13.043Z'
createdBy: 'ck:plan'
source: skill
---

# Velorah Rich Sections, Motion Evidence and Vercel Release

## Overview

Transform the current strong-hero / sparse-body composition into a complete
single-page creative-studio website. Studio, About, Journal, Reach Us, and the
footer will reuse the hero's quiet cinematic language through real film frames,
asymmetric editorial layouts, specific copy, and restrained scroll motion.

The approved hero remains the visual contract: exact CloudFront film, headline,
copy, HSL tokens, Instrument Serif + Inter pairing, glass formula, and
`0 / .2 / .4s` entrance sequence. No router, backend, contact form, stock media,
fake clients, decorative blobs, radial gradients, generic card grids, or page
overlay will be introduced.

## Deliverables

- Rich responsive Studio, About, Journal, Reach Us, and footer experiences.
- Optimized local WebP frames derived from the approved Velorah film.
- Motion behavior that uses transform/opacity and respects reduced motion.
- Desktop hero, full-page, and mobile-navigation GIF evidence.
- Passing tests, coverage, lint, build, browser QA, review, and docs validation.
- Verified Vercel production URL, deployment guide, focused commits, and GitHub push.

## Phases

| Phase | Name | Status |
|-------|------|--------|
| 1 | [Rich Cinematic Section Design](./phase-01-rich-cinematic-section-design.md) | Completed |
| 2 | [Motion and Media Implementation](./phase-02-motion-and-media-implementation.md) | Completed |
| 3 | [GIF Evidence and Production QA](./phase-03-gif-evidence-and-production-qa.md) | Pending |
| 4 | [Vercel Release and Documentation](./phase-04-vercel-release-and-documentation.md) | Pending |

## Dependencies

- Builds on the completed `260718-2001-velorah-professional-web-polish` plan.
- Phase 2 depends on Phase 1's content and media composition.
- Phase 3 depends on a locally passing production build.
- Phase 4 depends on all Phase 3 release gates and review findings being resolved.

## Acceptance Criteria

- Each lower section has a distinct visual job and materially more content/media
  depth without becoming a generic card catalogue.
- The one-page navigation IDs and existing keyboard/mobile behavior remain stable.
- Below-fold images are local, optimized, dimensioned, meaningful, and lazy-loaded.
- No horizontal overflow at 320, 375, 768, 812 landscape, or 1440 pixels.
- Hero copy, media source, token values, and entrance timings remain exact.
- Reduced-motion mode removes authored reveal/hover motion without hiding content.
- Three inspectable GIFs prove hero motion, full-page section motion, and mobile nav.
- The final Vercel production URL loads without browser errors and matches the
  locally verified build.
