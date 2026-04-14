# OceanBlue Growth OS · Mission Control

This repository is the starter implementation for the OceanBlue Growth OS: a Next.js (App Router) application that follows the blueprint in `docs/`. It ships with a dark, mission-control style UI that highlights the tenant-safe, approval-gated operating model for AI-assisted growth work.

## What’s included

- Next.js 16 + TypeScript + Tailwind (App Router) with custom branding for OceanBlue.
- Linting (`eslint .`), formatting (Prettier), type-checking, and Jest + Testing Library unit tests.
- CI workflow (GitHub Actions) that runs lint, typecheck, tests, and Prettier check.
- Environment contract for Supabase, OpenAI, n8n, Stripe, and PostHog secrets (`.env.example`).
- Documentation from the blueprint preserved in `docs/` (roadmap, research, bootstrap steps).

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy and fill environment variables:
   ```bash
   cp .env.example .env.local
   # add Supabase, OpenAI, n8n, Stripe, PostHog keys
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 to view the mission control shell.

## Scripts

- `npm run dev` – start the local dev server.
- `npm run lint` – ESLint with Next.js core web vitals.
- `npm run typecheck` – TypeScript type checking.
- `npm run test` – Jest + Testing Library unit tests.
- `npm run format` / `npm run format:fix` – Prettier check or write.

## CI

The workflow at `.github/workflows/ci.yml` runs lint, typecheck, tests, and Prettier on pushes and pull requests.

## Additional references

- **Client Workspace**: clients, brands, channels, access control.
- **AI Strategy Studio**: audience/persona, competitor snapshots, campaign briefs.
- **Content Pipeline**: idea backlog, drafts, approval workflow, scheduling metadata.
- **Automation Hub**: triggers, actions, audit logs, retry/review queues.
- **Performance Dashboard**: reach, engagement, lead, conversion trendlines.

## Customer Proof Pack

Use `docs/customer-proof.md` to show stakeholders a fast, convincing story:
- Real-world metrics (cycle time, engagement, on-time publishes).
- An anonymized retail case study with before/after numbers.
- Ready-to-embed visuals (dashboard, pipeline, automation audit) and a storyboard that walks from Plan -> Produce -> Protect -> Prove.
- Deployment justification centered on safety, speed, and observable value.

## Security and Compliance Baseline

- Tenant isolation via Postgres Row Level Security.
- RBAC roles: owner, manager, strategist, creator, analyst, client-view.
- Approval workflow for any external posting action.
- Audit log for AI-generated decisions and automation executions.

## How to start implementation

1. Read `docs/implementation-roadmap.md`.
2. Execute the “Week 1 Foundation” tasks.
3. Set up environments using `docs/repo-and-github-bootstrap.md`.
4. Build MVP modules in phase order.

## Authorization Gate (your requested control)

As requested, execution should pause before high-impact actions (production deploys, live channel posting, payment activation). The recommended approval gates are defined in `docs/implementation-roadmap.md`.

## Suggested immediate next step

Authorize Phase 0 + Phase 1 only:
- Repo setup + infrastructure
- Authentication + tenant model
- Basic client onboarding + dashboard shell

After your authorization, development can proceed to AI strategy and automation flows.
- Blueprint & decisions: `docs/blueprint.md`, `docs/research-and-decisions.md`
- Roadmap: `docs/implementation-roadmap.md`
- Repo bootstrap guidance: `docs/repo-and-github-bootstrap.md`
