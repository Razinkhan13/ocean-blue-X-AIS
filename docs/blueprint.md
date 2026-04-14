# OceanBlue Growth OS (Professional Web Application Blueprint)

This repository is a professional starter blueprint for **OceanBlue**, a marketing and growth agency that uses AI and automation to run client growth operations end-to-end.

## What this project includes

- A production-oriented architecture recommendation.
- A concrete implementation roadmap.
- A GitHub bootstrap process (with your authorization gate).
- AI + automation system design for social media growth operations.

## Product Vision

OceanBlue should become a unified platform where your team can:

1. Onboard clients and store brand context.
2. Build strategy from AI-assisted research.
3. Plan and produce content.
4. Orchestrate posting workflows and approvals.
5. Track performance dashboards and growth KPIs.
6. Run AI automations safely with human approval checkpoints.

## Recommended Technical Stack

- **Frontend + Backend app**: Next.js (App Router), TypeScript.
- **Database + Auth + Storage**: Supabase (Postgres, Auth, Storage).
- **Automation Orchestration**: n8n (self-hosted or cloud).
- **AI Layer**: OpenAI API (content ideation, analysis, summarization).
- **Payments**: Stripe subscriptions.
- **Hosting**: Vercel (web), Supabase managed, n8n host.
- **Analytics**: PostHog + custom KPI tables in Postgres.

See detailed rationale in `docs/research-and-decisions.md`.

## System Modules (MVP)

- **Client Workspace**: clients, brands, channels, access control.
- **AI Strategy Studio**: audience/persona, competitor snapshots, campaign briefs.
- **Content Pipeline**: idea backlog, drafts, approval workflow, scheduling metadata.
- **Automation Hub**: triggers, actions, audit logs, retry/review queues.
- **Performance Dashboard**: reach, engagement, lead, conversion trendlines.

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
