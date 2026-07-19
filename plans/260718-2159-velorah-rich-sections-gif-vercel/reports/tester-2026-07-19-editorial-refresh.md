# Release Test Report — Editorial Refresh

## Scope

- Revision: `83b899450769b6901b16f30ef5d88b01bb5215f1` on `main`
- Runtime: Node.js, Vitest, ESLint, TypeScript, Vite
- Date: 2026-07-19

## Automated Gates

| Gate | Result |
|---|---|
| `npm test` | Pass: 6 files, 24 tests, 0 failed/skipped |
| `npm run test:coverage` | Pass: 6 files, 24 tests |
| Statements | 98.27% (114/116) |
| Branches | 91.30% (63/69) |
| Functions | 100% (48/48) |
| Lines | 98.19% (109/111) |
| `npm run lint` | Pass: 0 errors/warnings |
| `npm run build` | Pass |
| `npm audit --audit-level=high` | Pass: 0 vulnerabilities |
| `git diff --check` | Pass |
| Docs validator | Pass: 7 files, 15 internal links |

## Production Bundle

- HTML: 2.49 kB (0.78 kB gzip)
- CSS: 33.54 kB (7.22 kB gzip), `index-B34OlyQ3.css`
- JavaScript: 258.85 kB (80.09 kB gzip), `index-BuzDPlOY.js`
- Ten responsive WebP stills remain present in `dist/velorah-stills/`.

## Regression Coverage

- Rich About definition-list and ordered-method semantics.
- Featured Journal copy remains visible; secondary notes retain unique native disclosure names.
- Reduced-motion Journal state remains visibly distinct without a transition.
- Direct fragments re-align after font/body layout settling at the 96px header offset.
- Short landscape viewports retain the direct target as the active navigation item.
- Pending corrective frames are cancelled when user intent changes.
- A new hash receives its own settling alignment instead of snapping back to the original target.
- Existing navigation, focus, viewport-video, responsive-image, and reveal contracts remain covered.

## Browser and Deployment Corroboration

The public production alias served the exact CSS/JavaScript hashes above. Five production viewports returned status 200 with no overflow, all 18 reveals visible after traversal, all 8 images loaded, both videos paused at page end, and no console/page errors.

## Result

All automated and documentation release gates passed for the exact production code revision and final linked report set.

## Unresolved Questions

None.
