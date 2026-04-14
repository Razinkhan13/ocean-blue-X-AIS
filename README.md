# OceanBlue Growth OS · Mission Control

This repository is the starter implementation for the OceanBlue Growth OS: a Next.js (App Router) application that follows the blueprint in `docs/`. It ships with a dark, mission-control style UI that highlights the tenant-safe, approval-gated operating model for AI-assisted growth work.

## What’s included

- Next.js 16 + TypeScript + Tailwind (App Router) with custom branding for OceanBlue.
- Linting (`next lint`), formatting (Prettier), type-checking, and Jest + Testing Library unit tests.
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

- Blueprint & decisions: `docs/blueprint.md`, `docs/research-and-decisions.md`
- Roadmap: `docs/implementation-roadmap.md`
- Repo bootstrap guidance: `docs/repo-and-github-bootstrap.md`
