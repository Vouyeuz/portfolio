# Fahrizal Indi Dirgantara: Portfolio

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 3. Static, no backend.

## Run locally

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL to your domain
npm run dev                  # http://localhost:3000
```

## Before deploying

```bash
npm run typecheck && npm run lint && npm run build
```

## Edit content

All text lives in `src/data/site.ts` (about, experience, projects, skills, links). Components only render that data.

## Deploy

Push to GitHub, import the repo in Vercel, and add `NEXT_PUBLIC_SITE_URL`. No other configuration is needed.

## Included

- SEO: metadata, Open Graph, canonical URL, JSON-LD (Person), `sitemap.xml`, `robots.txt`
- Security headers (see `next.config.mjs`)
- Light and dark theme through `prefers-color-scheme`
- Accessibility: skip link, landmarks, visible focus, reduced-motion support
