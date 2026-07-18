---
phase: 2
title: Animated Studio Reel and Identity
status: completed
effort: 1.5h
priority: P1
dependencies:
  - 1
---

# Phase 2: Animated Studio Reel and Identity

## Overview

Add a second, editorial moving-media moment to the Studio section and production identity assets. Reuse the supplied film while ensuring only visible video consumes playback work.

## Requirements

- Functional: moving reel autoplays muted/inline in view, pauses offscreen, resumes safely, and falls back when observer/playback APIs fail.
- Non-functional: no overlay copy, no duplicate download source, no layout shift, local favicon/OG asset, exact hero media contract retained.

## Architecture

Centralize the CloudFront URL in `site-media.ts`. A reusable `ViewportVideo` component renders native video attributes and applies an IntersectionObserver playback policy. Hero and Studio reel share the source; only the visible instance should remain playing after observers settle.

## Related Code Files

- Create: `src/content/site-media.ts`
- Create: `src/components/viewport-video.tsx`
- Create: `public/velorah-mark.svg`
- Create: `public/velorah-social-card.svg`
- Modify: `src/app.tsx`
- Modify: `src/components/sections/studio-section.tsx`
- Modify: `index.html`
- Modify: `src/app.test.tsx`

## Implementation Steps

1. Move the supplied MP4 URL to shared typed content.
2. Implement observer-driven play/pause with ignored autoplay rejection and observer cleanup.
3. Replace the hero video with the reusable component without changing its DOM/media attributes or layout.
4. Add an asymmetric full-width Studio reel figure with separate caption, `aspect-video`, metadata preload, and no text overlay.
5. Create a minimal local V mark and social card matching the navy/white identity.
6. Add favicon, theme, canonical-safe OG/Twitter title/description/type/image tags without inventing a production domain.
7. Test video count, attributes, observer playback, failure fallback, and metadata paths.

## Success Criteria

- [ ] Hero and reel use one shared source and preserve silent inline looping behavior.
- [ ] Offscreen videos pause; visible videos attempt playback; rejections do not become unhandled errors.
- [ ] Reel remains responsive and adds no horizontal overflow or decorative overlay.
- [ ] Browser tab/share identity points only to existing local assets.

## Risk Assessment

- Two video nodes can increase decode cost. Observer pausing and `preload="metadata"` on the reel limit work.
- SVG social cards are not supported by every social crawler. The local SVG is still a valid site asset; deployment may later rasterize it without changing page code.

## Security Considerations

No user input or new origin. Metadata contains only public brand copy and relative asset paths.
