# Release Test Report

## Scope

- Revision: `811c75a` on `main`
- Runtime: Node.js, Vitest, ESLint, TypeScript, Vite
- Date: 2026-07-18

## Automated Gates

| Gate | Result |
|---|---|
| `npm test` | Pass: 6 files, 20 tests, 0 failed/skipped |
| `npm run test:coverage` | Pass: 6 files, 20 tests |
| Statements | 98.24% (112/114) |
| Branches | 91.54% (65/71) |
| Functions | 100% (45/45) |
| Lines | 98.16% (107/109) |
| `npm run lint` | Pass: 0 errors/warnings |
| `npm run build` | Pass |
| `npm audit --audit-level=high` | Pass: 0 vulnerabilities |
| Docs validator | Pass: 6 files, 8 internal links |

## Production Bundle

- HTML: 2.12 kB (0.72 kB gzip)
- CSS: 34.93 kB (7.34 kB gzip)
- JavaScript: 253.57 kB (78.90 kB gzip)
- Ten responsive WebP stills present in `dist/velorah-stills/`.

## Added Regression Coverage

- Direct hash alignment after React mount.
- Fast-scroll reveal recovery and active-section recovery.
- Unique Journal disclosure labels and real project-brief destinations.
- Responsive image dimensions/srcsets and viewport video lifecycle.

## Result

All local automated release gates passed. Production-host guarantees are covered
separately by the Phase 4 deployment verification.

## Unresolved Questions

None.
