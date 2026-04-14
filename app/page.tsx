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
    success: "bg-emerald-400/10 text-emerald-200 border-emerald-400/40",
    warning: "bg-amber-400/10 text-amber-200 border-amber-400/40",
    info: "bg-[var(--accent-soft)] text-[color:var(--accent)] border-[var(--accent)]",
    neutral: "bg-white/5 text-white/70 border-white/20",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[var(--tracking-wide)] ${toneStyles[tone]}`}
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
    <section className="card-surface group rounded-3xl border border-white/10 p-6 transition duration-300 ease-out motion-safe:hover:border-white/30">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-[var(--tracking-wide)] text-white/70">
          {title}
        </h2>
        {action}
      </div>
      <div className="mt-5 space-y-4 text-sm text-white/80">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(60%_50%_at_50%_25%,_black,_transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(202,255,61,0.18),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.08),transparent_34%)]" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 pb-16 pt-12 lg:px-10">
        <header className="fade-up fade-up-1 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/60">
              OceanBlue Growth OS
            </p>
            <h1
              className="text-4xl uppercase tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-[color:var(--accent)]">OceanBlue</span> mission control
            </h1>
            <p className="max-w-2xl text-base text-white/70">
              AI-assisted operating system for client growth teams. Tenant-safe by design,
              approval-gated before spend or posting, with automation traces for every decision.
            </p>
            <div className="flex flex-wrap gap-2">
              <StatusPill label="Authorization Gate A · Infrastructure" tone="info" />
              <StatusPill label="Phase 0 ready for approval" tone="success" />
              <StatusPill label="Phase 1 building" tone="warning" />
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full border border-white/20 bg-transparent px-5 py-3 text-xs font-semibold uppercase tracking-[var(--tracking-wide)] text-white/70 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-white hover:text-white">
              View runbook
            </button>
            <button className="rounded-full bg-[color:var(--accent)] px-5 py-3 text-xs font-semibold uppercase tracking-[var(--tracking-wide)] text-black shadow-[var(--accent-shadow)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white">
              Review gate A
            </button>
          </div>
        </header>

        <div className="fade-up fade-up-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="card-surface rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 ease-out motion-safe:hover:border-white/30"
            >
              <p className="text-xs uppercase tracking-[var(--tracking-wide)] text-white/60">
                {metric.label}
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-white">{metric.value}</span>
                <span className="text-xs text-[color:var(--accent)]">{metric.delta}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up fade-up-3 grid gap-6 lg:grid-cols-2">
          <Panel title="This week's focus" action={<StatusPill label="Execution" tone="info" />}>
            <div className="space-y-4">
              {weekFocus.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{section.title}</p>
                      <p className="text-xs text-white/60">{section.state}</p>
                    </div>
                    <StatusPill
                      label={section.state}
                      tone={section.state.includes("Ready") ? "success" : "warning"}
                    />
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
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
                  className="flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{gate.name}</p>
                    <p className="text-xs text-white/60">{gate.owner}</p>
                  </div>
                  <StatusPill label={gate.status} tone={gate.tone} />
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="fade-up fade-up-4 grid gap-6 lg:grid-cols-3">
          <Panel
            title="Client workspaces"
            action={<StatusPill label="Tenant safe" tone="success" />}
          >
            <div className="space-y-3">
              {workspaces.map((workspace) => (
                <div
                  key={workspace.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">{workspace.name}</p>
                      <p className="text-xs text-white/60">
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
                  <p className="mt-2 text-sm text-white/80">{workspace.notes}</p>
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
                  className="flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-white/60">
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
                <div key={flow.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">{flow.name}</p>
                      <p className="text-xs text-white/60">
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

        <div className="fade-up fade-up-5 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <Panel
            title="AI Strategy Studio"
            action={<StatusPill label="Guardrails on" tone="success" />}
          >
            <div className="space-y-3">
              {strategyPrompts.map((prompt) => (
                <div
                  key={prompt.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">{prompt.name}</p>
                    <StatusPill label={prompt.lastRun} tone="neutral" />
                  </div>
                  <p className="mt-2 text-sm text-white/80">{prompt.detail}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Performance snapshot" action={<StatusPill label="Telemetry" tone="info" />}>
            <div className="space-y-3">
              {performance.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white/80">{stat.label}</p>
                    <span className="text-xs text-[color:var(--accent)]">{stat.trend}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[color:var(--accent)] to-white"
                      style={{ width: stat.progress }}
                    />
                  </div>
                  <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
