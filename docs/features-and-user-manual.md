# Mission Control Features and User Manual

This guide summarizes the OceanBlue Growth OS mission-control experience shipped in this repository and explains how to use it during reviews or demos.

## Feature Highlights

- **Mission control header**: Brand-forward banner with quick actions for the runbook and Authorization Gate A.
- **Key metrics**: Snapshot of active tenants, approval gates, automation reliability, and content readiness.
- **Week focus lanes**: Phase tracker showing current execution state and the checklist for each phase.
- **Authorization & safety**: Gate status cards for publishing, external posting, payments, and data access.
- **Client workspaces**: Tenant-safe roster with owner, stage, health, and operational notes.
- **Content pipeline**: Human-in-the-loop queue by channel with status and ETA.
- **Automation hub**: Orchestration windows and approval gates for recurring jobs.
- **AI Strategy Studio**: Prompt catalog with last-run context and guardrail reminders.
- **Performance snapshot**: KPI tiles with trend indicators and progress toward targets.

## User Manual

### Getting set up

1) Install dependencies: `npm install`.
2) Copy env vars: `cp .env.example .env.local` (fill in keys as needed for Supabase/OpenAI/etc).
3) Run the experience locally: `npm run dev` and open http://localhost:3000.

### Navigating the mission control view

1) **Header actions**: Use “View runbook” to open process docs and “Review Gate A” to start the infrastructure authorization review.
2) **Scan key metrics**: Confirm tenant counts, approval coverage, automation reliability, and content readiness at a glance.
3) **Review the week’s focus**: Check each phase card for state (“Ready for review” vs “In flight”) and its checklist items to align on execution.
4) **Validate authorization & safety**: Ensure gates for publishing, external posting, payments, and data access are in the expected state before triggering automations.
5) **Check client workspaces**: Read owner, stage, and health signals to prioritize follow-ups; use notes for quick status context.
6) **Inspect the content pipeline**: For each item, verify channel, ETA, and whether it needs review before scheduling or posting.
7) **Monitor automation hub**: Confirm run windows and whether flows are queued, running, or pending; note the approval gate on each.
8) **Use AI Strategy Studio**: Open prompts like audience personas or campaign briefs; verify last-run status and guardrails before reuse.
9) **Track performance snapshot**: Compare KPIs to their trend notes and progress bars to spot early shifts.

### Updating data for demos

The current data lives in the arrays inside `app/page.tsx` (metrics, focus areas, gates, workspaces, pipeline items, automations, strategy prompts, and performance stats). Edit those lists to reflect the scenario you want to demo; the UI will update automatically.
