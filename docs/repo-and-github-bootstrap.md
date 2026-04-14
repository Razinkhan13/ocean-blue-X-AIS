# Repo and GitHub Bootstrap (Authorization-Friendly)

You asked to create a GitHub repo and proceed only after authorization.

## What can be done immediately

- Finalize local project blueprint (done in this repository).
- Prepare standard repo settings and branch protections.
- Prepare initial issue and milestone templates.

## What requires your authorization/token

Creating a remote repository on GitHub requires account authorization (GitHub login/token/CLI auth).

## CLI workflow once authorized

```bash
git init
git add .
git commit -m "chore: initialize OceanBlue Growth OS blueprint"
gh repo create oceanblue-growth-os --private --source=. --remote=origin --push
```

## Recommended GitHub defaults

- Default branch: `main`
- Protected branches: `main`, `staging`
- Required checks: lint, typecheck, tests
- Require PR review: 1 minimum
- Enforce signed commits for core team
- CODEOWNERS for critical paths (`db/`, `automation/`, `billing/`)

## Branching model

- `main`: production-ready
- `staging`: integration testing
- `feature/*`: feature development
- `hotfix/*`: urgent fixes

## Required secrets (GitHub + host)

- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `OPENAI_API_KEY`
- `N8N_WEBHOOK_SECRET`
- `STRIPE_SECRET_KEY`
- `POSTHOG_API_KEY`

## Suggested first issues

1. Scaffold Next.js TypeScript app with auth shell.
2. Implement tenant schema and RLS policies.
3. Build onboarding wizard and role invites.
4. Create campaign + content calendar entities.
5. Add AI strategy brief generator with review workflow.
6. Integrate n8n workflows with audit logs.
