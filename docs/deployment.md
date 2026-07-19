# Deployment

## Production

- URL: [https://velorah-dream.vercel.app/](https://velorah-dream.vercel.app/)
- Repository: [github.com/JasonTM17/Velorah_Dream](https://github.com/JasonTM17/Velorah_Dream)
- Platform: Vercel
- Project: `velorah-dream`
- Framework preset: Vite

## Build contract

| Setting | Value |
|---|---|
| Install | `npm ci` |
| Build | `npm run build` |
| Output | `dist/` |
| Runtime environment variables | None |
| Minimum Node.js | `^20.19.0` or `>=22.12.0` |

Vercel project metadata lives in `.vercel/`, which is ignored and must never be committed. The site has no dotenv file, credential, server function, database, CMS, or runtime secret.

## Release

Install dependencies and pass the repository gates before deployment:

```bash
npm ci
npm run lint
npm run test:coverage
npm run build
npm audit --audit-level=high
vercel --prod --yes
```

The first workstation setup requires an authenticated Vercel CLI and a project link:

```bash
vercel link --yes --project velorah-dream
```

Use the stable production alias, not a generated deployment URL, in canonical and social metadata.

## External runtime dependencies

- Google Fonts serves Instrument Serif and Inter. Browser fallbacks preserve text.
- CloudFront serves the approved looping MP4. Local WebP posters preserve both media compositions if the video is delayed or unavailable.
- GitHub Issues receives project briefs at the [repository channel](https://github.com/JasonTM17/Velorah_Dream/issues/new?title=Project%20inquiry%3A%20). The site stores no submitted data.

Repository GIFs and showcase JPEGs under `assets/` document the release; they are not runtime application dependencies. The 1200×630 `public/velorah-social-card.png` is deployed with the static site.

## Verification

After every production release:

1. Open `/`, `/#studio`, `/#about`, `/#journal`, and `/#reach-us` at mobile and desktop widths.
2. Confirm canonical, `og:url`, `og:image`, and Twitter image use the stable alias.
3. Confirm hero/reel play only in view, internal anchors resolve below the fixed header, and the project brief opens the expected repository channel.
4. Confirm the mobile menu focus/dismissal contract, both Journal disclosures, visible featured copy, and reduced-motion behavior.
5. Check browser console/page errors and horizontal overflow.
6. Confirm `/velorah-social-card.png` returns the 1200×630 PNG.

## Rollback

List deployments, choose the last known-good production deployment, then roll back:

```bash
vercel ls velorah-dream
vercel rollback <deployment-url-or-id> --yes
```

Verify the stable alias again after rollback. Do not force-push or remove the failed deployment until the cause is understood.

## Related documentation

- [System architecture](./system-architecture.md)
- [Project requirements](./project-overview-pdr.md)
- [Automated release report](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/tester-2026-07-19-editorial-refresh.md)
- [Verified Vercel deployment report](../plans/260718-2159-velorah-rich-sections-gif-vercel/reports/deployment-2026-07-19-vercel-production.md)
