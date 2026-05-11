# PLAN: Infinite Leverage — Initial Site Scaffold

**Date:** 2026-05-11  
**Project:** infiniteleverage-1-hello-james  
**Slug:** initial-site-scaffold  
**Status:** Approved (all 5 epics approved by PM)

## Objective

Build James Murray's personal operator landing page as a single-page Next.js 15 App Router marketing site. No Lorem Ipsum — real copy throughout.

## Epics

| Epic | Goal | Status |
|------|------|--------|
| 1 | Next.js 15 scaffold, design tokens, pnpm build passes, zero TS errors | Approved |
| 2 | Hero section: h1, tagline, Book a Strategy Call CTA | Approved |
| 3 | "What You Get": 3-column grid, 3 outcomes, real copy | Approved |
| 4 | "How It Works": 6 numbered protocols, client language | Approved |
| 5 | Final CTA section: repeat CTA + trust statement | Approved |

## Technical Decisions

- **Framework:** Next.js 15, App Router, TypeScript strict
- **Styling:** Plain CSS modules (no Tailwind to avoid v4 complexity) + global CSS variables
- **Fonts:** next/font/google — Lora (serif) + Inter (sans)
- **Package manager:** pnpm

## File Structure

```
infiniteleverage-1-hello-james/
  app/
    layout.tsx          — root layout, font loading, global CSS, metadata
    page.tsx            — single-page composition
    globals.css         — design tokens (:root), base resets
  components/
    Nav.tsx + Nav.module.css
    Hero.tsx + Hero.module.css
    WhatYouGet.tsx + WhatYouGet.module.css
    HowItWorks.tsx + HowItWorks.module.css
    FinalCta.tsx + FinalCta.module.css
    Footer.tsx + Footer.module.css
  public/
    (no static assets needed for v1)
  .env.example
  next.config.ts
  tsconfig.json
  package.json
```

## Wave Plan

1. Scaffold: `pnpm create next-app` equivalent — package.json, tsconfig, next.config, globals.css with design tokens
2. Layout + Nav
3. Hero (Epic 2)
4. What You Get (Epic 3)
5. How It Works (Epic 4)
6. Final CTA + Footer (Epic 5)
7. `pnpm build` → verify zero errors

## Acceptance Criteria Checklist

- [ ] `pnpm build` passes, zero TS errors
- [ ] Design tokens (--lc-*) available globally
- [ ] h1 renders "Infinite Leverage" at text-5xl equivalent
- [ ] One-line tagline visible below heading
- [ ] CTA "Book a Strategy Call" present, links to https://cal.com placeholder
- [ ] Exactly 3 columns on desktop, 1 column on mobile for What You Get
- [ ] Section heading "What You Get" present
- [ ] 6 numbered How It Works items
- [ ] Section heading "How It Works" present
- [ ] Final CTA section repeats primary CTA button
- [ ] Trust statement "Every deliverable reviewed by a human before it reaches you." present
- [ ] Renders at 375px, 768px, 1280px breakpoints (CSS verified)
- [ ] data-accent="teal" on root element
- [ ] No Lorem Ipsum copy anywhere
