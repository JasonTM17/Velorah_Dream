# Code standards

## Principles

Apply YAGNI, KISS, then DRY. Preserve the visual contract before adding abstractions. Keep public behavior typed and testable.

## TypeScript and React

- Strict TypeScript; no `any` escapes.
- Function components with named exports.
- Keep rendering declarative; add state only for real interaction behavior.
- Validate required DOM roots before mounting.
- Use `@/*` imports for project modules.
- Keep files below 200 lines unless configuration or documentation warrants otherwise.

## Components

- Place reusable primitives under `src/components/ui/`.
- Place page-specific components directly under `src/components/`.
- Use the local shadcn button primitive and class utility instead of duplicating CTA class logic.
- Interactive elements require semantic HTML, visible focus, and meaningful accessible names.

## Styling

- Use Tailwind utilities for layout and component composition.
- Keep semantic colors and font families in `src/index.css`.
- Reserve custom CSS for theme tokens, the liquid-glass effect, and shared animation behavior.
- Animate only `transform` and `opacity` for entrance motion.
- Add a `prefers-reduced-motion` override for every non-essential animation.

## Testing

- Component contracts live beside the app in `src/*.test.tsx`.
- Explicit cleanup keeps tests isolated.
- Test supplied copy, navigation semantics, media attributes, CTA variants, and accessibility contracts.
- Run `npm run lint`, `npm run test:coverage`, and `npm run build` before completion.

## Git

- Use focused conventional commits without AI attribution.
- Never commit `.env` files, secrets, `node_modules`, build output, or coverage output.
