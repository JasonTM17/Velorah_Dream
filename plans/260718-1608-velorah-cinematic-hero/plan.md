---
title: Velorah Cinematic Hero
description: Build and verify a production-ready cinematic single-page site for Velorah.
status: in-progress
priority: P1
effort: 6h
branch: main
tags:
  - feature
  - frontend
blockedBy: []
blocks: []
created: '2026-07-18T09:08:27.758Z'
createdBy: 'ck:plan'
source: skill
---

# Velorah Cinematic Experience

## Overview

Create a complete React, Vite, Tailwind CSS, TypeScript, and shadcn/ui single-page site. Preserve the supplied Velorah hero exactly, then extend its quiet cinematic language through Studio, About, Journal, Reach Us, and footer content with responsive behavior, accessible navigation, and restrained motion.

## Progress

- Phases: 3/6 completed (50%).
- Hero success criteria: 11/11 verified.
- Full-page criteria: pending phases 4-6.

## Phases

| Phase | Name | Status |
|-------|------|--------|
| 1 | [Project Scaffold](./phase-01-project-scaffold.md) | Completed |
| 2 | [Cinematic Hero](./phase-02-cinematic-hero.md) | Completed |
| 3 | [Verification and Documentation](./phase-03-verification-and-documentation.md) | Completed |
| 4 | [Studio About and Motion](./phase-04-studio-about-and-motion.md) | Completed |
| 5 | [Journal Contact and Footer](./phase-05-journal-contact-and-footer.md) | Completed |
| 6 | [Full Page Verification](./phase-06-full-page-verification.md) | In Progress |

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
- Studio, About, Journal, and Reach Us are substantive sections with working anchor targets.
- The footer provides mobile-accessible navigation and a real email contact action.
- Section reveals remain lightweight, one-shot, and disabled for reduced-motion users.
