# Research and Architecture Decisions for OceanBlue

This document summarizes current best-practice guidance (as of April 14, 2026) and translates it into architecture decisions for OceanBlue.

## 1) Web App Framework Decision

### Research summary

- Next.js App Router is mature for modern full-stack React apps with server components and production deployment on Vercel.

### Decision

- Use **Next.js + TypeScript** as the core application framework for fast iteration, SEO-friendly marketing pages, and secure server-side logic.

## 2) Data, Auth, and Tenant Security

### Research summary

- Supabase provides Postgres, auth, storage, and policy-based access controls.
- Row Level Security (RLS) in Postgres is the right base for multi-tenant isolation.

### Decision

- Use **Supabase Postgres + RLS** for tenant-safe data boundaries.
- Use org-scoped tables keyed by `tenant_id`.

## 3) Automation Layer

### Research summary

- n8n is a mature workflow orchestrator with broad integration support and deployment flexibility.

### Decision

- Use **n8n** as the automation runtime:
  - social publishing pipelines
  - lead routing
  - reporting jobs
  - failure retries + human review queues

## 4) AI Layer

### Research summary

- OpenAI API can power strategy, content ideation, summarization, and quality checks.
- Production usage requires robust prompt controls, moderation checks, and traceability.

### Decision

- Use **OpenAI API** for bounded AI tasks (not autonomous posting).
- Require human approval for publish actions in MVP.

## 5) Billing and Commercial Operations

### Research summary

- Stripe remains the standard for SaaS billing subscriptions and invoicing.

### Decision

- Use **Stripe** for plan management and recurring subscriptions.

## 6) Product Quality and Observability

### Research summary

- Professional teams combine product analytics (event instrumentation) with database-level KPI tracking.

### Decision

- Track events with **PostHog** and maintain KPI snapshots in Postgres.
- Add structured logging for automation execution history.

## Final Architecture (MVP)

- **Web App**: Next.js (TypeScript)
- **DB/Auth/Storage**: Supabase
- **Automation**: n8n
- **AI**: OpenAI API
- **Billing**: Stripe
- **Analytics**: PostHog + custom KPI marts
- **Hosting**: Vercel + managed data services

## Reference Links (Primary Docs)

- Next.js docs: https://nextjs.org/docs
- Supabase docs: https://supabase.com/docs
- Supabase RLS guide: https://supabase.com/docs/guides/database/postgres/row-level-security
- n8n docs: https://docs.n8n.io
- OpenAI API docs: https://platform.openai.com/docs
- Stripe docs: https://docs.stripe.com
- PostHog docs: https://posthog.com/docs
