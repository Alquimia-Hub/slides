# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Web-based fullscreen slide deck (Next.js App Router + React 19 + Tailwind v4 + Framer Motion + Paper Shaders). Sample content is in **Spanish (es-AR)** about opBNB / agentic payments in Argentina; the deck mechanics are reusable for other topics. `memo.md` is the source narrative for the current sample slides.

## Commands

Package manager is **pnpm** (see `pnpm-workspace.yaml`).

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Next dev server on `http://localhost:3000` |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint (flat config in `eslint.config.mjs`, extends `next/core-web-vitals` + `next/typescript`) |
| `pnpm contrast` | Runs `scripts/check-contrast.mjs` — WCAG 2.1 contrast check for the theme tokens in `lib/theme.ts` |

There is no test runner configured.

## Architecture

### Single-page deck with route-level code splitting
- `app/page.tsx` renders `<MeshBackground><Deck/></MeshBackground>` — the entire deck lives on one route. Slide changes are state, not navigation.
- `components/Deck.tsx` owns the current-slide index, keyboard handling (`←/→`, space, Home, End, digits 1–9), and renders the current slide inside `<AnimatePresence>` with `slidePageVariants`. A live region announces "Diapositiva N de M" for screen readers.
- `slides/index.ts` is the **deck order**. Slide 1 (cover) is statically imported for stable LCP; slides 2–12 use `next/dynamic` with `SlideLoading` as the fallback. `preloadAdjacentSlides(index, total)` triggers the prev/next chunk imports on each slide change so transitions feel instant.
- To reorder/add/remove slides: edit `lazySlideSpecs` in `slides/index.ts` and add the corresponding module under `slides/`.

### Slide authoring contract
- Each `slides/NN-*.tsx` is a default-exported component that renders `<Slide>` from `components/Slide.tsx` with `eyebrow`, `title`, optional `subtitle`, optional `children`, and `align`.
- Accessibility rule baked into `Slide`: **only the cover uses `titleAs="h1"`**; all other slides default to `h2`. Don't add additional `h1`s.
- Reusable building blocks live in `components/ui/`: `Bullet`, `GlassCard`, `StatBig`, `SlideNav`. Prefer these over ad-hoc markup so spacing/typography stay consistent.

### Motion + reduced-motion
- All Framer Motion variants come from `lib/motion.ts` via the `useMotionVariants()` hook. It reads `useReducedMotion()` and returns zero-duration variants when the user prefers reduced motion.
- `MeshBackground` also pauses the shader when `prefers-reduced-motion` is set or when the tab is hidden (`visibilitychange`). Respect this pattern for any new ambient animation.
- Standard ease is `easeOutSmooth` (`[0.22, 1, 0.36, 1]`).

### Theme tokens
- `lib/theme.ts` is the **single source of truth** for colors (Binance dark / graphite / yellow + foreground). Tokens are mirrored in:
  - `tailwind.config.ts` (as `binance-*` utility classes used everywhere, e.g. `text-binance-yellow`, `bg-binance-dark`)
  - `app/globals.css` `:root`
  - `scripts/check-contrast.mjs`
  When changing a color, update all four locations and run `pnpm contrast`.
- `meshGradientColors` feeds `<MeshGradient>` in `MeshBackground`.

### Other conventions
- TS path alias: `@/*` maps to repo root (e.g. `@/components/Slide`, `@/lib/motion`).
- `app/layout.tsx` sets `lang="es"`, locks the body to `overflow-hidden` (deck owns the viewport), and renders `<SkipToContent>` before children — keep these.
- Class composition: use the `cn` helper from `lib/cn.ts`.
- Tailwind v4 is wired via `@tailwindcss/postcss` (see `postcss.config.mjs`); the `binance-*` color extensions live in `tailwind.config.ts`.
