---
phase: 1
title: Production Navigation
status: in-progress
effort: 1.5h
priority: P1
dependencies: []
---

# Phase 1: Production Navigation

## Overview

Turn the static hero header into persistent, section-aware navigation with a compact mobile disclosure. Preserve existing copy, glass CTA, anchor targets, and content order.

## Requirements

- Functional: fixed header, live active-section state, mobile open/close, Escape handling, focus return, link selection close.
- Non-functional: 44px targets, no scroll listener, no layout shift, reduced-motion safe, no new package.

## Architecture

`use-page-navigation.ts` owns IntersectionObserver state for the active section and header surface. `SiteHeader` owns only disclosure state and focus behavior. Shared `navigationItems` loses its hard-coded `active` flag; active state derives from section IDs.

## Related Code Files

- Create: `src/hooks/use-page-navigation.ts`
- Modify: `src/components/site-header.tsx`
- Modify: `src/content/site-navigation.ts`
- Modify: `src/app.test.tsx`
- Modify: `src/index.css` only if a shared disclosure/motion rule is required

## Implementation Steps

1. Add an observer hook for `home`, `studio`, `about`, `journal`, and `reach-us`; expose active ID and whether the hero has mostly left view.
2. Make the header fixed with a restrained navy glass surface after leaving the hero.
3. Render desktop active state with `aria-current="location"`.
4. Add a custom SVG menu button and mobile navigation disclosure; focus first link on open, return focus on Escape, close on selection and `md` breakpoint.
5. Add tests for observer state, active semantics, menu lifecycle, keyboard behavior, and existing anchor/CTA regression.

## Success Criteria

- [ ] Header remains reachable and legible from every section.
- [ ] Active navigation follows observer events and never stays hard-coded to Home.
- [ ] Mobile menu is operable by touch and keyboard, with no dead state after resize.
- [ ] Existing hero and footer contracts remain unchanged.

## Risk Assessment

- Observer ordering can flicker between large sections. Use deterministic root margins and the last intersecting entry.
- Focus effects can race during close. Keep focus return explicit only for Escape/menu-button flows.

## Security Considerations

No external input or HTML injection. All destinations come from the typed local navigation constant.
