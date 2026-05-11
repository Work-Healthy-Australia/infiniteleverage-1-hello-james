# Infinite Leverage — Project CLAUDE.md

## Business
**Infinite Leverage** — an AI-powered marketing and development team service. Full strategy,
copy, design, publishing, and dev work handled by AI agents orchestrated by James Murray.

## Operator
James Murray (james.murray@workhealthyaus.com.au)

## Stack
- **Framework:** Next.js App Router (TypeScript) — located in `website/` subdirectory
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Database:** Supabase (data, auth, subscribers)
- **Hosting:** Vercel — Root Directory set to `website/`
- **Email:** Resend
- **AI:** Claude (Anthropic)

## Folder Structure
```
agents/         — 8 fixed agent roles, each with context/ and skills/
content/        — topics and content-calendar
docs/           — brand, engineering, product, qa, features, archive, plans, architecture
emails/         — email drafts
resources/      — shared reference material
standup/        — individual and briefing standup files
website/        — Next.js app (the ONLY deployable artifact)
working_files/  — scratch space (gitignored)
.claude/        — Claude Code agent config, rules, skills
```

## Key Rules

### website/ is the only deployable artifact
Vercel Root Directory = `website/`. Never deploy from the project root.

### Engineering rules
- No force-push. No `--no-verify`. No `git add .` or `git add -A`.
- Never commit directly to `main` — feature branch → PR only.
- Never commit `.env`, `.env.local`, or any credentials file.
- All deployments via `git push` → GitHub → Vercel CI/CD. Never run `vercel deploy` directly.
- Read `git log --oneline -10` before starting any task.
- Write `docs/engineering/changes/{slug}/PLAN.md` before writing any code.

### Agent rules
- 8 fixed roles: product-manager, developer, qa, devops, writer, designer, web-publisher, email-marketer.
- No improvising new roles.
- Blocked agents write to `agents/{role}/output/pending-actions.md` and stop.
- PM runs standup before every briefing.
