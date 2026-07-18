---
phase: 4
title: Studio About and Motion
status: completed
effort: 1.5h
---

# Phase 4: Studio About and Motion

## Overview

Extend the completed hero into a continuous editorial page. Add substantive Studio and About narratives plus a reusable, accessible reveal primitive that never blocks content when browser APIs are unavailable.

## Implementation Steps

1. Refactor the app shell so the header overlays the hero while main content can continue below it.
2. Add reusable section heading and one-shot reveal components.
3. Build Studio as an editorial service index rather than a generic card grid.
4. Build About as a manifesto with a compact principles list.
5. Preserve the exact hero media, copy, typography, and glass treatment.

## Success Criteria

- [x] Studio and About are semantic, responsive sections with real anchor targets.
- [x] Reveal motion uses only opacity and transform, with a no-API fallback.
- [x] Reduced-motion mode makes all section content immediately visible.
- [x] Hero composition and supplied content remain intact.
