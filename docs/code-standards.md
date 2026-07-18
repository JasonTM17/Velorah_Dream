# Code standards

## Principles

Apply YAGNI, KISS, then DRY. Preserve the visual contract before adding abstractions. Keep public behavior typed and testable.

## TypeScript and React

- Strict TypeScript; no `any` escapes.
- Function components with named exports.
- Keep rendering declarative; add state only for real interaction behavior.
- Validate required DOM roots before mounting.
- Use `@/*` imports for project modules.
- Keep implementation/test files below 200 lines when a real concern boundary exists.

## Components and state

- Place reusable primitives under `src/components/ui/`.
- Place page sections under `src/components/sections/` and shared page components directly under `src/components/`.
- Keep shared static navigation/media data in `src/content/` so consumers cannot drift.
- Put reusable browser state in focused hooks under `src/hooks/`; avoid scroll listeners when observer state is sufficient.
- Use the local shadcn Button and class utility instead of duplicating CTA logic.
- Interactive elements require semantic HTML, visible focus, meaningful accessible names, and at least 44px mobile targets.
- Disclosure controls expose `aria-controls`/`aria-expanded`, have deterministic Escape/selection/resize behavior, and must not leave hidden focusable links.
- Do not add hover affordances to non-interactive editorial content.

## Media and document head

- Centralize public media sources and reuse a typed media component.
- Decorative video stays muted, inline, looping, `aria-hidden`, and outside the tab order.
- Handle rejected native playback promises and disconnect observers on cleanup.
- Use `preload="metadata"` for secondary media unless it is critical above the fold.
- Keep favicon/share assets local. Do not invent canonical origins or absolute metadata URLs.
- Add preconnect only for origins used by initial document resources; never attach credentials.

## Styling

- Use Tailwind utilities for layout and component composition.
- Keep semantic colors and font families in `src/index.css`.
- Reserve custom CSS for tokens, the liquid-glass effect, and shared motion behavior.
- Animate entrance UI with `transform` and `opacity`; never animate layout geometry.
- Add a `prefers-reduced-motion` override for every non-essential CSS animation.
- Intersection reveals are one-shot and expose content immediately when the API is unavailable.

## Testing

- Co-locate Vitest files as `src/**/*.test.tsx` near the contracts they verify.
- Explicit cleanup keeps tests isolated.
- Cover supplied copy, anchors, section semantics, active state, disclosure focus/dismissal, media attributes/playback errors, CTAs, reveal fallbacks, and accessibility.
- Browser QA covers native scrolling, media state, breakpoints, reduced motion, overflow, console errors, and metadata assets.
- Run `npm run lint`, `npm run test:coverage`, `npm run build`, `npm audit`, and docs validation before completion.

## Git

- Use focused conventional commits without AI attribution.
- Never commit `.env` files, secrets, `node_modules`, `dist/`, or coverage output.
- Fetch and compare remote history before pushing; never force `main`.
