---
title: "Velorah Cinematic Hero"
description: "Build and verify a production-ready fullscreen video hero for Velorah."
status: pending
priority: P1
effort: 3h
branch: ""
tags: [feature, frontend]
blockedBy: []
blocks: []
created: "2026-07-18T09:08:27.758Z"
createdBy: "ck:plan"
source: skill
---

# Velorah Cinematic Hero

## Overview

Create a new React, Vite, Tailwind CSS, TypeScript, and shadcn/ui single-page site. Match the supplied Velorah composition exactly while adding mobile resilience, keyboard focus, reduced-motion behavior, and a video fallback without introducing extra visual sections.

## Phases

| Phase | Name | Status |
|-------|------|--------|
| 1 | [Project Scaffold](./phase-01-project-scaffold.md) | Pending |
| 2 | [Cinematic Hero](./phase-02-cinematic-hero.md) | Pending |
| 3 | [Verification and Documentation](./phase-03-verification-and-documentation.md) | Pending |

## Dependencies

- Node.js and npm available locally.
- Remote Google Fonts and CloudFront video remain external runtime dependencies.
- No cross-plan dependencies.

## Acceptance Criteria

- Fullscreen muted looping inline video covers the viewport behind all content.
- Navigation, headline, supporting copy, and both CTAs match supplied wording and responsive sizing.
- Instrument Serif and Inter, exact HSL tokens, liquid-glass effect, and staggered fade-rise motion are implemented.
- No decorative blobs, scrims, radial gradients, or visual overlays are added.
- Keyboard focus, reduced motion, mobile navigation behavior, lint, tests, and production build pass.
