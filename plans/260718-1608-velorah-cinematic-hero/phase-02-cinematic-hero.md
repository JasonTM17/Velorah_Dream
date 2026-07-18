---
phase: 2
title: Cinematic Hero
status: completed
priority: P1
effort: 75m
dependencies:
  - 1
---

# Phase 2: Cinematic Hero

## Overview

Implement the supplied fullscreen video composition with responsive navigation, exact typography, liquid-glass controls, and staged entrance motion.

## Requirements

- Functional: exact video URL/attributes, nav copy, hero copy, CTAs, responsive hidden desktop links.
- Non-functional: semantic elements, accessible links/buttons, reduced-motion fallback, mobile-safe viewport sizing.

## Architecture

`App` owns the full-viewport composition. `SiteHeader` owns navigation data and CTA. Global CSS owns theme tokens, Google Fonts, glass rendering, motion, and fallback behavior.

## Related Code Files

- Create: `src/app.tsx`, `src/components/site-header.tsx`, `src/index.css`.
- Modify: `src/main.tsx` only if integration requires it.

## Implementation Steps

1. Define exact HSL theme variables, font imports, base styles, glass class, and keyframes.
2. Build semantic header/navigation with active link and shadcn Button CTA.
3. Build fullscreen video and centered hero copy with specified emphasis and responsive type.
4. Add focus-visible, active, video-failure fallback, and reduced-motion behavior.

## Success Criteria

- [x] Desktop layout matches all supplied spacing, copy, type, and color requirements.
- [x] Mobile layout has no overflow; logo and CTA remain usable while nav links hide.
- [x] Video is decorative, muted, loops inline, and does not block content interaction.
- [x] Only transform/opacity animate; reduced-motion users receive static content.

## Risk Assessment

External video/font failure can reduce atmosphere. Deep-navy background and system fallbacks preserve legibility and layout.
