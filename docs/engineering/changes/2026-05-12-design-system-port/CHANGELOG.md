# Changelog: Design System Port — longevity-coach-wha → hello-james
Date: 2026-05-12
Epic: Epic 1 (scaffold + design system)

## What was built
Ported the full longevity-coach-wha design system to the hello-james landing page.
All four page sections now render with the correct fonts, colour tokens, and component classes.

## What changed

### Wave 1 — Design system foundation
- `website/src/app/layout.tsx` — replaced Inter Tight with Newsreader (serif), Instrument Sans
  (sans), and JetBrains Mono; mapped to `--font-lc-serif`, `--font-lc-sans`, `--font-lc-mono`;
  added `data-accent="teal"` on `<html>`
- `website/src/app/globals.css` — full rewrite: `--lc-*` custom property system, `[data-accent="teal"]`
  override, `.hj-page` scoped component styles (nav, hero, wyg, hiw, final-cta, buttons)
- `docs/engineering/changes/2026-05-12-design-system-port/PLAN.md` — created

### Wave 2 — Page restyling
- `website/src/app/page.tsx` — `className="hj-page"` on `<main>`; all inline `var(--ink/blue/cream/paper/rule/gray-*)` replaced with `--lc-*` equivalents; section-level CSS classes applied; button styles replaced with `.btn .btn-accent .btn-lg`; "The 18 Protocols" heading renamed "How It Works"; `track.full` boolean added for Mindset full-width span

## Migrations applied
None (static marketing page, no database).

## Deviations from plan
None. Both waves delivered exactly as specified in PLAN.md.

## Known gaps / deferred items
- Nav component not yet built (not in Epic 1 scope)
- ContactForm colour tokens updated inline; no dedicated CSS class (low priority)
- Vercel deployment triggered via git push — live URL to be confirmed by James
