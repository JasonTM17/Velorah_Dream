---
phase: 3
title: GIF Evidence and Production QA
status: completed
effort: large
---

# Phase 3: GIF Evidence and Production QA

## Overview

Prove the redesigned site and its authored motion through automated gates,
responsive browser inspection, screenshots, and optimized GIF recordings.

## Artifacts

- `assets/generated/velorah-hero-motion.gif`
- `assets/generated/velorah-full-site-motion.gif`
- `assets/generated/velorah-mobile-navigation.gif`
- `plans/260718-2159-velorah-rich-sections-gif-vercel/reports/*`

## Implementation Steps

1. Run focused tests, full tests, coverage, lint, TypeScript/Vite build, npm audit,
   and project documentation validation; fix failures rather than weakening gates.
2. Serve the production build and run browser QA at 320, 375, 768, 812 landscape,
   and 1440 widths for navigation, overflow, focus, anchors, video, and reveals.
3. Verify reduced motion, missing-IntersectionObserver fallback, page errors, console
   errors, heading hierarchy, image dimensions/loading, and touch targets.
4. Capture deterministic Chromium frame sequences for hero load, full-page section
   scrolling, and mobile menu navigation; use WebM only when policy permits.
5. Convert frame sequences through an FFmpeg palette pipeline to looping, legible
   GIFs; balance frame rate, dimensions, duration, and repository size.
6. Inspect GIF frames/contact sheets and report dimensions, duration, frame count,
   loop behavior, and file size.
7. Perform adversarial code review against all acceptance criteria and save the
   test, browser-QA, and review reports in this plan's reports directory.

## Success Criteria

- [x] All automated release gates pass with no hidden/skipped failures.
- [x] No page error or horizontal overflow occurs at any target viewport.
- [x] All three required GIFs are valid, optimized, inspectable, and committed.
- [x] Review finds no unresolved blocker, regression, broken contract, or dead link.
- [x] Reports distinguish local measurements from production guarantees.
