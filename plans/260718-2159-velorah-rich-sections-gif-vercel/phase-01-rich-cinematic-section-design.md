---
phase: 1
title: Rich Cinematic Section Design
status: completed
effort: large
---

# Phase 1: Rich Cinematic Section Design

## Overview

Build a richer content and composition system for every lower section while
preserving the existing single-page architecture and exact hero contract.

## Files

- `public/velorah-stills/*.webp`
- `src/content/site-media.ts`
- `src/components/cinematic-image.tsx`
- `src/components/sections/studio-section.tsx`
- `src/components/sections/about-section.tsx`
- `src/components/sections/journal-section.tsx`
- `src/components/sections/contact-section.tsx`
- `src/components/site-footer.tsx`

## Implementation Steps

1. Extract 4-5 visually distinct frames from the approved 12-second MP4 and
   encode them as dimensioned WebP assets; do not add stock or generated imagery.
2. Add a reusable semantic cinematic-image primitive with descriptive alt text,
   intrinsic dimensions, lazy loading, and stable aspect-ratio containers.
3. Enrich Studio with disciplines, image-led self-initiated explorations, and the
   existing in-motion reel; label studies honestly so they cannot imply clients.
4. Enrich About with a strong image composition, studio point of view, principles,
   and a sequential four-step method.
5. Turn Journal into an image-led editorial index with distinct dates, categories,
   titles, excerpts, and useful reading metadata; do not add dead links.
6. Expand Reach Us with project-start guidance, a real project-brief action, and
   clear collaboration expectations without a fake form, guarantee, or office.
7. Refine the footer hierarchy using only real navigation and contact destinations.
8. Verify semantic heading order, alt text, touch targets, readable measures, and
   single-column mobile fallbacks before committing this slice.

## Success Criteria

- [x] Every lower section is visually substantial and distinct from its neighbors.
- [x] All new imagery comes from the approved film and has stable dimensions.
- [x] No fake client, metric, testimonial, location, or unavailable route is present.
- [x] Existing anchors `studio`, `about`, `journal`, and `reach-us` remain unchanged.
- [x] Component boundaries remain readable and no code file grows past 200 lines
      without a documented reason.
