# PLAN — Full Clean Rebuild: Infinite Leverage Hello James

**Date:** 2026-05-12
**Slug:** rebuild-website-subdir-blueprint
**Status:** Approved (Product Manager instruction)

---

## Objective

Strip the previous incorrect Next.js scaffold (placed at project root with wrong design system) and rebuild entirely from a precise blueprint. The result must be a production-ready single-page site in `website/` subdirectory with the Infinite Leverage design system and 5 exact content sections.

---

## Steps

### STEP 1 — Clean repo root
Remove all Next.js artifacts from project root: `app/`, `components/`, `public/`, `node_modules/`, `.next/`, `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `next.config.ts`, `.npmrc`, `.env.example`, `.nvmrc`, `.vercel/`, `PLAN.md` (old).
Keep: `.git/`, `docs/engineering/`.

### STEP 2 — Create context folder structure
Scaffold all agent, content, docs, email, standup, resources, working_files, and .claude subdirectories.

### STEP 3 — Scaffold Next.js in website/ subdir
Run `create-next-app@latest` with TypeScript, Tailwind, App Router, ESLint, src-dir, import alias. Then init shadcn with defaults.

### STEP 4 — Design system
Replace `website/src/app/globals.css` with Infinite Leverage CSS custom properties (--ink, --ink-soft, --gray-*, --blue, --cream, --paper).

### STEP 5 — Fonts
Load Inter Tight and JetBrains Mono via `next/font/google`. Apply CSS variables on `<html>`. Update `tailwind.config.ts` fontFamily.

### STEP 6 — Build page with 5 sections
- Section 1: Hero ("Hello, James." dark background, CTA)
- Section 2: What You Get (3-column card grid)
- Section 3: The 18 Protocols (5 tracks, grouped cards)
- Section 4: Contact Form (Server Action, useActionState)
- Section 5: Final CTA (dark background repeat)

Also create `website/src/app/actions/contact.ts` Server Action stub.

### STEP 7 — Root .gitignore
Cover website/node_modules, website/.next, .env files, working_files/, etc.

### STEP 8 — Root CLAUDE.md
Document business, operator, stack, folder structure, key rules.

### STEP 9 — docs/brand/style-guide.md
5 design presets: Editorial, Technical, Warm, Minimal, Bold.

### STEP 10 — Verify build
Run `cd website && npm run build`. Must pass zero TypeScript errors.

### STEP 11 — Commit
Stage by name, commit with exact message, push to origin main.

---

## Acceptance Criteria
- [ ] No Next.js files remain at project root
- [ ] `website/` contains a valid Next.js App Router project
- [ ] `npm run build` passes with zero errors
- [ ] All 5 page sections present with exact copy
- [ ] Design tokens match IL spec
- [ ] Contact form uses Server Action / useActionState
- [ ] All data-testid attributes present
- [ ] No lorem ipsum anywhere
- [ ] Root CLAUDE.md, .gitignore, docs/brand/style-guide.md created
- [ ] Context folder structure complete

---

## Deviations
None anticipated. Any deviations will be noted in the final report.
