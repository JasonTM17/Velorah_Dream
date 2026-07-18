---
phase: 2
title: Motion and Media Implementation
status: completed
effort: medium
---

# Phase 2: Motion and Media Implementation

## Overview

Unify the added editorial media with restrained, GPU-safe motion and preserve the
approved hero animation and viewport-video lifecycle.

## Files

- `src/index.css`
- `src/components/section-reveal.tsx`
- `src/components/section-reveal.test.tsx`
- `src/components/cinematic-image.tsx`
- `src/components/sections/*.tsx`
- `src/app.test.tsx`

## Implementation Steps

1. Add optional reveal sequencing so image/copy groups enter in a deliberate order
   using opacity and transform only; keep one-shot IntersectionObserver behavior.
2. Add subtle media settle/hover states that never carry essential information and
   do not animate layout, blur scrolling containers, or create page overlays.
3. Preserve exact hero `fade-rise` duration/delays and the liquid-glass formula.
4. Extend reduced-motion handling to every new reveal and media interaction.
5. Keep video autoplay muted/inline and viewport-aware; no extra video instance may
   play off-screen.
6. Add focused tests for new props, semantic rendering, stable anchors, media
   attributes, and reduced-motion-independent content visibility contracts.

## Success Criteria

- [x] Motion uses only transform/opacity and feels consistent across all sections.
- [x] Hero entrance timings remain `0s`, `0.2s`, and `0.4s`.
- [x] Reduced-motion users receive all content without authored motion.
- [x] New and existing focused tests pass before broader release gates.
- [x] No new dependency is required for motion or media behavior.
