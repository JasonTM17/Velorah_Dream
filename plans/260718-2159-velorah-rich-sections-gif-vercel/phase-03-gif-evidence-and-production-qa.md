---
phase: 3
title: "GIF Evidence and Production QA"
status: pending
effort: "large"
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
4. Record source WebM clips with deterministic browser actions for hero load,
   full-page section scrolling, and mobile menu navigation.
5. Convert recordings through an FFmpeg palette pipeline to looping, legible GIFs;
   balance frame rate, dimensions, duration, and repository size.
6. Inspect GIF frames/contact sheets and report dimensions, duration, frame count,
   loop behavior, and file size.
7. Perform adversarial code review against all acceptance criteria and save the
   test, browser-QA, and review reports in this plan's reports directory.

## Success Criteria

- [ ] All automated release gates pass with no hidden/skipped failures.
- [ ] No page error or horizontal overflow occurs at any target viewport.
- [ ] All three required GIFs are valid, optimized, inspectable, and committed.
- [ ] Review finds no unresolved blocker, regression, broken contract, or dead link.
- [ ] Reports distinguish local measurements from production guarantees.
