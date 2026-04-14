import type { ReactNode } from "react";

type StatusTone = "success" | "warning" | "info" | "neutral";

const metrics = [
  { label: "Active tenants", value: "3", delta: "+2 this week" },
  { label: "Approval gates live", value: "5", delta: "Publish + billing locked" },
  { label: "Automation reliability", value: "98.4%", delta: "SLA on recurring jobs" },
  { label: "Content ready", value: "12", delta: "Across 4 channels" },
];

const weekFocus = [
  {
    title: "Phase 0 · Foundation",
    state: "Ready for review",
    items: [
      "Next.js + Tailwind scaffold with lint/test/format gates",
      "CI workflow for lint, typecheck, and unit tests",
      "Env contract for Supabase, OpenAI, n8n, Stripe, PostHog",
    ],
  },
  {
    title: "Phase 1 · Access core",
    state: "In flight",
    items: [
      "Tenant + membership model drafted",
      "Role guardrails aligned with RLS plan",
      "Onboarding flow outlined for invites",
    ],
  },
];

const approvals = [
  {
    name: "Automation publish",
    owner: "Manual approval by strategist + manager",
    status: "Gate on",
    tone: "warning" as StatusTone,
  },
  {
    name: "External posting",
    owner: "Client approver required before posting",
    status: "Gate on",
    tone: "warning" as StatusTone,
  },
  {
    name: "Payments",
    owner: "Stripe billing activation paused",
    status: "Locked",
    tone: "info" as StatusTone,
  },
  {
    name: "Data access",
    owner: "RLS policies staged for tenants",
    status: "Enabled",
    tone: "success" as StatusTone,
  },
];

const workspaces = [
  {
    name: "Lumen Bikes",
    owner: "Avery Lee",
    stage: "Onboarding",
    health: "Stable",
    notes: "Brand kit + channels connected",
  },
  {
    name: "Nova HR",
    owner: "Carmen Wu",
    stage: "Live",
    health: "Green",
    notes: "Content calendar synced with n8n jobs",
  },
  {
    name: "Harbor Analytics",
    owner: "Diego Ramos",
    stage: "Pilot",
    health: "Review",
    notes: "Waiting on client approvals for automation",
  },
];

const contentPipeline = [
  {
    title: "AI-assisted launch teaser",
    channel: "LinkedIn",
    status: "Needs review",
    eta: "Apr 15",
  },
  {
    title: "Competitor pulse snapshot",
    channel: "Research pack",
    status: "In progress",
    eta: "Apr 16",
  },
  {
    title: "Email nurture series",
    channel: "Email",
    status: "Scheduled",
    eta: "Apr 18",
  },
];

const automations = [
  {
    name: "Weekly LinkedIn recap",
    status: "Queued",
    window: "08:00 UTC",
    gate: "Manual approval",
  },
  {
    name: "Daily performance sync",
    status: "Running",
    window: "00:00 UTC",
    gate: "Auto with audit log",
  },
  {
    name: "Content to CMS",
    status: "Pending",
    window: "On demand",
    gate: "Client sign-off",
  },
];

const performance = [
  { label: "Engagement rate", value: "4.3%", trend: "+0.6%", progress: "64%" },
  { label: "Lead captures", value: "128", trend: "+18 this week", progress: "78%" },
  { label: "Publish success", value: "98%", trend: "Retries enabled", progress: "92%" },
];

const strategyPrompts = [
  {
    name: "Audience personas",
    detail: "Summarize personas from CRM + call notes, redact PII.",
    lastRun: "Today · Reviewed by strategist",
  },
  {
    name: "Campaign briefs",
    detail: "Generate 3-option brief with guardrails for tone and claims.",
    lastRun: "Yesterday · Draft accepted",
  },
];

function StatusPill({ label, tone = "neutral" }: { label: string; tone?: StatusTone }) {
  const toneStyles: Record<StatusTone, string> = {
    success: "bg-emerald-500/10 text-emerald-200 border-emerald-500/30",
    warning: "bg-amber-500/10 text-amber-200 border-amber-500/40",
    info: "bg-sky-500/10 text-sky-200 border-sky-500/30",
    neutral: "bg-slate-700/40 text-slate-200 border-slate-600/60",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${toneStyles[tone]}`}
    >
      {label}
    </span>
  );
}

function Panel({
  title,
  action,
  children,
}: {
  title: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="card-surface rounded-2xl p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-slate-50">{title}</h2>
        {action}
      </div>
      <div className="mt-4 space-y-4 text-sm text-slate-200">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-80 [mask-image:radial-gradient(60%_50%_at_50%_25%,_black,_transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_70%_10%,rgba(79,70,229,0.15),transparent_30%),radial-gradient(circle_at_80%_60%,rgba(16,185,129,0.14),transparent_30%)]" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-12 lg:px-8">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200">
              OceanBlue Growth OS
            </p>
            <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              OceanBlue mission control
            </h1>
            <p className="max-w-2xl text-base text-slate-200">
              AI-assisted operating system for client growth teams. Tenant-safe by design,
              approval-gated before spend or posting, with automation traces for every decision.
            </p>
            <div className="flex flex-wrap gap-2">
              <StatusPill label="Authorization Gate A · Infrastructure" tone="info" />
              <StatusPill label="Phase 0 ready for approval" tone="success" />
              <StatusPill label="Phase 1 building" tone="warning" />
            </div>
          </div>
          <div className="flex gap-3">
            <button className="rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-sm font-semibold text-slate-50 shadow-lg shadow-slate-900/40 transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-900">
              View runbook
            </button>
            <button className="rounded-xl bg-sky-500 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:-translate-y-0.5 hover:bg-sky-400">
              Review gate A
            </button>
          </div>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="card-surface rounded-2xl border border-white/5 bg-white/5 p-4 shadow-inner shadow-slate-900/50"
            >
              <p className="text-sm text-slate-300">{metric.label}</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-slate-50">{metric.value}</span>
                <span className="text-xs text-emerald-300">{metric.delta}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="This week's focus" action={<StatusPill label="Execution" tone="info" />}>
            <div className="space-y-4">
              {weekFocus.map((section) => (
                <div
                  key={section.title}
                  className="rounded-xl border border-white/10 bg-slate-900/50 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-50">{section.title}</p>
                      <p className="text-xs text-slate-300">{section.state}</p>
                    </div>
                    <StatusPill
                      label={section.state}
                      tone={section.state.includes("Ready") ? "success" : "warning"}
                    />
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Panel>

          <Panel
            title="Authorization & safety"
            action={<StatusPill label="Gates" tone="warning" />}
          >
            <div className="space-y-3">
              {approvals.map((gate) => (
                <div
                  key={gate.name}
                  className="flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-slate-900/40 p-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-50">{gate.name}</p>
                    <p className="text-xs text-slate-300">{gate.owner}</p>
                  </div>
                  <StatusPill label={gate.status} tone={gate.tone} />
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Panel
            title="Client workspaces"
            action={<StatusPill label="Tenant safe" tone="success" />}
          >
            <div className="space-y-3">
              {workspaces.map((workspace) => (
                <div
                  key={workspace.name}
                  className="rounded-xl border border-white/10 bg-slate-900/40 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-50">{workspace.name}</p>
                      <p className="text-xs text-slate-300">
                        Owner {workspace.owner} · {workspace.stage}
                      </p>
                    </div>
                    <StatusPill
                      label={workspace.health}
                      tone={
                        workspace.health === "Green"
                          ? "success"
                          : workspace.health === "Stable"
                            ? "info"
                            : "warning"
                      }
                    />
                  </div>
                  <p className="mt-2 text-sm text-slate-200">{workspace.notes}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel
            title="Content pipeline"
            action={<StatusPill label="Human-in-loop" tone="warning" />}
          >
            <div className="space-y-3">
              {contentPipeline.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-slate-900/40 p-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-50">{item.title}</p>
                    <p className="text-xs text-slate-300">
                      {item.channel} · ETA {item.eta}
                    </p>
                  </div>
                  <StatusPill label={item.status} tone="info" />
                </div>
              ))}
            </div>
          </Panel>

          <Panel
            title="Automation hub"
            action={<StatusPill label="n8n orchestration" tone="info" />}
          >
            <div className="space-y-3">
              {automations.map((flow) => (
                <div
                  key={flow.name}
                  className="rounded-xl border border-white/10 bg-slate-900/40 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-50">{flow.name}</p>
                      <p className="text-xs text-slate-300">
                        {flow.window} · {flow.gate}
                      </p>
                    </div>
                    <StatusPill label={flow.status} tone="info" />
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <Panel
            title="AI Strategy Studio"
            action={<StatusPill label="Guardrails on" tone="success" />}
          >
            <div className="space-y-3">
              {strategyPrompts.map((prompt) => (
                <div
                  key={prompt.name}
                  className="rounded-xl border border-white/10 bg-slate-900/40 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-50">{prompt.name}</p>
                    <StatusPill label={prompt.lastRun} tone="neutral" />
                  </div>
                  <p className="mt-2 text-sm text-slate-200">{prompt.detail}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Performance snapshot" action={<StatusPill label="Telemetry" tone="info" />}>
            <div className="space-y-3">
              {performance.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-slate-900/40 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-200">{stat.label}</p>
                    <span className="text-xs text-emerald-300">{stat.trend}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 to-emerald-300"
                      style={{ width: stat.progress }}
                    />
                  </div>
                  <p className="mt-2 text-lg font-semibold text-slate-50">{stat.value}</p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
