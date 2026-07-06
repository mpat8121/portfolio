# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Mick Patterson's personal blog/portfolio at mickpatterson.com.au, built with Next.js (Pages Router), Bulma CSS, and Netlify CMS. Blog posts are markdown files in the repo, not a database — Netlify CMS just commits markdown edits back to this repo via GitHub.

## Commands

```sh
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build (runs `next-sitemap` afterward via postbuild)
npm run start    # serve a production build
npm run export   # alias for `npm run build` (used by Netlify, see netlify.toml)
```

The site is statically exported (`output: "export"` in `next.config.js`). Next.js 14 removed the standalone `next export` CLI command, so `next build` now performs the export inline whenever `output: "export"` is set — there is no separate export step.

There is no test suite and no lint script wired up in package.json (an `.eslintrc.json` exists extending `next/core-web-vitals`, but run it directly with `npx next lint` if needed).

## Architecture

**Content pipeline**: Blog posts live as markdown files with frontmatter in `content/blog/*.md`. `lib/blog.ts` is the single data-access layer — it reads/parses these files with `gray-matter` at build time (`getAllPosts`, `getPostsBySlug`, `getPostsByCategory`, `getNextPost`/`getPreviousPost`). Every page that needs post data calls into this module inside `getStaticProps`/`getStaticPaths`; there is no runtime API/database.

Frontmatter shape (see any file in `content/blog/`): `path`, `date`, `categories` (string array), `title`, `description`, `image`.

**Routing** (`pages/`, Next Pages Router):
- `pages/index.tsx` — all posts, sorted newest first
- `pages/blog/[slug].tsx` — single post; statically generated for every post in `content/blog`, renders markdown via `react-markdown` + `remark-html`, code blocks via `react-syntax-highlighter` (a11yDark theme)
- `pages/category/[category].tsx` — posts filtered by category; static paths are derived by scanning all posts' `categories` at build time
- Categories are also separately declared in `data/blog_categories.yml`, used only by the Netlify CMS `relation` widget config (`public/admin/config.yml`) so the CMS editor can offer a category picker — not read by the Next.js app itself.

**Site metadata**: `config.ts` at the repo root holds site-wide title/description/social/keywords and is imported by `components/seo.tsx` (which branches: full `ArticleJsonLd` schema when rendering a post, plain `<Head>` meta tags otherwise) and various pages for SEO/OG tags.

**Layout & theming**: `components/layout.tsx` wraps every page (nav, footer). `components/themeToggle.tsx` is loaded via `next/dynamic` with `ssr: false` (light/dark theme depends on browser state). Styling is Bulma + custom Sass in `styles/global.scss`, with CSS variables like `var(--text)`, `var(--textLink)` used for theme-aware colors — these are the pattern to follow for any new UI, not hardcoded colors.

**Analytics/monetization**: Google Analytics (`lib/gtag.ts`, gtag script wiring in `pages/_app.tsx`) is gated behind `react-cookie-consent`'s accept/decline in `_app.tsx`; AdSense script also lives in `_app.tsx`. `NEXT_PUBLIC_GA_ID` comes from `.env`.

**Deployment**: Published to both Netlify and Vercel from this GitHub repo. Netlify (`netlify.toml`) runs `npm run export` (= `next build`) via `@netlify/plugin-nextjs`, which auto-detects `output: "export"` and publishes the exported site itself — `netlify.toml` deliberately does not set a `publish` directory (the plugin needs `.next`'s build metadata, not the final `out/` folder, to do this). Vercel auto-detects `output: "export"` and serves the static export natively with no extra config. `next-sitemap` regenerates `sitemap.xml`/`robots.txt` as a postbuild step and writes them straight into `out/` (not `public/`) because `next-sitemap.config.js` also sets `output: 'export'` — that field is read from `next-sitemap.config.js` itself, not from `next.config.js`, so the two files' `output` settings must be kept in sync manually if this ever changes.

## Notes

- `components/categoryList.js` is dead code left over from a prior Gatsby version of this site (imports `graphql`/`StaticQuery` from `gatsby`, which isn't even a dependency). It is not imported anywhere — don't build on it.
- Images are served unoptimized (`next.config.js` sets `images.unoptimized: true`) because the site is a static export (`output: "export"`) — neither Netlify's static hosting nor a plain static export on Vercel runs the Next.js Image Optimization API.
- `lib/blog.ts`'s `getAllPosts` filters `content/blog` entries to filenames ending in `.md` before parsing them, so stray non-post files (e.g. a `.DS_Store`) don't crash the build.
