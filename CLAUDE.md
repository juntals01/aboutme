# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev        # Start dev server at localhost:3000

# Production
npm run build      # Build for production
npm run start      # Start production server

# Code quality
npm run lint       # ESLint check
```

> This project uses **npm** (not bun/yarn/pnpm).

## Architecture

Next.js 14 App Router portfolio site. All pages live under `src/app/`. The homepage (`src/app/page.tsx`) is a single long-scroll page with all major content — it's intentionally large.

**Design system**: `design.json` is the single source of truth for all tokens (colors, spacing, shadows, radii). These are converted to CSS custom properties in `globals.css` and consumed via Tailwind's arbitrary value syntax:
```tsx
// Always use CSS variables — never hardcode colors
className="bg-[var(--card)] text-[var(--text)] rounded-[var(--radiusCard)]"
style={{ boxShadow: 'var(--shadowCard)' }}
```

Key CSS variables: `--bg`, `--card`, `--border`, `--primary`, `--primarySoft`, `--text`, `--textSecondary`, `--textMuted`, `--success`, `--radiusCard`, `--radiusButton`, `--radiusBadge`, `--shadowCard`, `--glowPrimary`, `--gap`, `--container`, `--cardPadding`.

**Blog**: MDX posts in `content/blog/*.mdx` with frontmatter (`title`, `description`, `date`, `tags`). Parsed server-side by `src/lib/blog.ts`. Blog index at `/blog`, posts at `/blog/[slug]` with `generateStaticParams`.

**Key reusable components**:
- `CardShell` (`src/components/ui/card-shell.tsx`) — standard card wrapper with hover lift + glow
- `SiteHeader` (`src/components/layout/SiteHeader.tsx`) — sticky header; hamburger on `< md`, inline nav on `md+`
- `JsonLd` (`src/components/JsonLd.tsx`) — server component for structured data injection
- `Reveal` — Framer Motion wrapper for scroll-triggered fade-in/slide-up animations

## Responsive Design

Mobile-first. Standard patterns used throughout:
- Homepage grid: `grid-cols-1 md:grid-cols-12`, cards use `col-span-1 md:col-span-N`
- Hero padding: `p-5 sm:p-8 lg:p-12`
- Desktop tables paired with mobile card views: `hidden sm:block` / `sm:hidden`
- Always use `flex-wrap` when multiple CTA buttons are in a row

## SEO

- Root `layout.tsx` owns global metadata (OG, Twitter, canonical, `metadataBase`, JSON-LD)
- Sub-routes with `'use client'` pages use a sibling `layout.tsx` wrapper for metadata
- Blog posts use `generateMetadata` per post + `Article` JSON-LD
- `src/app/robots.ts` and `src/app/sitemap.ts` use the Next.js Metadata API
