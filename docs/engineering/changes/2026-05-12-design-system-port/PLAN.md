# Plan: Design system port — longevity-coach-wha → hello-james
Date: 2026-05-12
Epic: Epic 1 (scaffold + design system) + Epic 2–4 (sections styling)
Status: Approved — all epics PM-approved

## Objective
Replace the existing ad-hoc token set (`--ink`, `--blue`, `--cream`, `--paper`) and Inter Tight
font with the full longevity-coach-wha design system: `--lc-*` CSS custom properties, Newsreader
(serif) + Instrument Sans (sans) + JetBrains Mono fonts, `data-accent="teal"` accent variant.
The page content (4 sections) is already correct — this change is purely presentational.

## Scope
- In scope: layout.tsx (fonts), globals.css (tokens + button classes), page.tsx (colour references + heading rename)
- Out of scope: page content/copy, routing, new components, Supabase, Stripe, auth

## Colour mapping (old → new)
| Old token | New token |
|-----------|-----------|
| `var(--ink)` | `var(--lc-ink)` |
| `var(--ink-soft)` | `var(--lc-ink-soft)` |
| `var(--gray-1)` | `var(--lc-grey-soft)` |
| `var(--gray-2)` | `var(--lc-grey)` |
| `var(--gray-3)` | `var(--lc-grey-soft)` |
| `var(--rule)` | `var(--lc-line)` |
| `var(--blue)` | `var(--lc-primary)` |
| `var(--blue-soft)` | `var(--lc-primary-50)` |
| `var(--cream)` | `var(--lc-bg)` |
| `var(--paper)` | `var(--lc-surface)` |

## Waves

### Wave 1 — Design system foundation (layout.tsx + globals.css)
**What the product owner can see after this wave merges:** Site renders with Newsreader
serif headings, Instrument Sans body text, and the teal-accented --lc-* colour palette.

#### Task 1.1 — Update layout.tsx fonts
Files: `website/src/app/layout.tsx`
- Replace `Inter_Tight` with `Newsreader` (variable: `--font-lc-serif`) and `Instrument_Sans` (variable: `--font-lc-sans`)
- Keep `JetBrains_Mono` but rename variable to `--font-lc-mono`
- Add `data-accent="teal"` to `<html>` element
- Update className to use the three new font variables

#### Task 1.2 — Replace globals.css tokens
Files: `website/src/app/globals.css`
- Keep Tailwind v4 imports (`@import "tailwindcss"`, `@import "tw-animate-css"`, `@import "shadcn/tailwind.css"`)
- Keep `@custom-variant dark` line
- Replace `@theme inline` font vars to match new --font-lc-* names
- Replace `:root` token block with full --lc-* set from longevity-coach-wha (including accent variants)
- Add `[data-accent="teal"]` and `[data-accent="plum"]` overrides
- Add `.hj-page` scoped button classes (.btn, .btn-primary, .btn-accent, .btn-ghost, .btn-lg)
- Add `.hj-page .wrap`, `.hj-page .eyebrow` utilities
- Keep `body` colour/background pointing to new tokens

### Wave 2 — Page restyling (page.tsx)
**What the product owner can see after this wave merges:** All 4 sections render with the
--lc-* colours, serif headings, proper button classes, and "How It Works" heading.

#### Task 2.1 — Update page.tsx colour references and structure
Files: `website/src/app/page.tsx`
- Add `className="hj-page"` to `<main>` and `data-accent="teal"` (already on html, belt-and-suspenders)
- Replace all `var(--ink)` → `var(--lc-ink)` etc. per mapping table
- Hero section: apply Newsreader serif h1 (font-family via className using --lc-serif), teal accent for CTA button using `.btn .btn-accent .btn-lg` classes
- "What You Get" cards: use `var(--lc-surface)` bg, `var(--lc-line)` border
- Rename "The 18 Protocols" heading → "How It Works" (matches Epic 4 acceptance criteria)
- Final CTA: use `.btn .btn-accent .btn-lg` classes
- `npm run build` must pass with zero TypeScript errors
