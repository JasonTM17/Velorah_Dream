---
title: Velorah Professional Web Polish
description: >-
  Turn the completed Velorah single page into a production-grade agency website
  without changing its approved cinematic identity.
status: in-progress
priority: P1
branch: main
tags:
  - feature
  - frontend
  - accessibility
blockedBy: []
blocks: []
created: '2026-07-18T13:01:14.683Z'
createdBy: 'ck:plan'
source: skill
---

# Velorah Professional Web Polish

## Overview

Preserve the exact hero, copy, video, typography, navy palette, and restrained editorial language. Add the missing behavior and identity details that separate a polished composition from a real website: persistent section-aware navigation, an accessible mobile disclosure, a purposeful viewport-aware moving reel, favicon/social metadata, complete verification, and GitHub delivery.

## Phases

| Phase | Name | Status |
|-------|------|--------|
| 1 | [Production Navigation](./phase-01-production-navigation.md) | Completed |
| 2 | [Animated Studio Reel and Identity](./phase-02-animated-studio-reel-and-identity.md) | Completed |
| 3 | [Verification Documentation and Release](./phase-03-verification-documentation-and-release.md) | In Progress |

## Dependencies

- Existing completed plan `260718-1608-velorah-cinematic-hero` is the visual and behavioral baseline, not a blocker.
- Existing CloudFront MP4 and Google Fonts remain public runtime dependencies.
- GitHub authentication must permit pushing `main` to `origin`.

## Acceptance Criteria

- Header stays reachable, shows the current section, and preserves exact brand/nav/CTA wording.
- Mobile users receive a keyboard-safe disclosure menu; Escape, selection, and breakpoint change close it predictably.
- A second moving-media moment uses the supplied film, pauses outside the viewport, and adds no new media dependency.
- Favicon plus Open Graph/Twitter metadata render from local production assets.
- No new dependency, backend, router, CMS, legal placeholder, dead link, decorative overlay, blob, or radial gradient.
- Tests, coverage, lint, build, audit, browser QA, docs, review, focused commits, and push to `origin/main` pass.
