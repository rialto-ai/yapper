"use client";

import { useState } from "react";
import {
  Bell, BellOff, ChevronDown, Mail, MessageSquare,
  Send, TrendingUp, Users, Flame, Activity, Plus,
} from "lucide-react";
import { Avatar } from "@/components/trending-accounts";
import { cn } from "@/lib/utils";

type Channel = "email" | "telegram" | "discord" | "push";
type RuleType = "account-spike" | "narrative-acceleration" | "viral-post" | "follower-surge" | "sentiment-shift" | "ecosystem-anomaly";

type Rule = {
  id: string;
  name: string;
  type: RuleType;
  target: string;          // e.g. "@teknium1" or "Private Inference" or "*"
  threshold: string;       // e.g. "+25% in 1h"
  channels: Channel[];
  enabled: boolean;
  triggered24h: number;
};

const SEED_RULES: Rule[] = [
  { id: "r1", name: "Karpathy posts on agents",        type: "account-spike",         target: "@karpathy",          threshold: "engagement > 2x baseline",  channels: ["email", "telegram"], enabled: true,  triggered24h: 1 },
  { id: "r2", name: "Private Inference acceleration",  type: "narrative-acceleration",target: "Private Inference",  threshold: "+25% mentions in 1h",       channels: ["email", "discord"],  enabled: true,  triggered24h: 3 },
  { id: "r3", name: "Any viral post · Rialto eco",     type: "viral-post",            target: "*",                  threshold: "engagement > 10K in 30m",   channels: ["push"],              enabled: true,  triggered24h: 7 },
  { id: "r4", name: "MoonOverlord follower surge",     type: "follower-surge",        target: "@MoonOverlord",      threshold: "+5% followers / week",      channels: ["email"],             enabled: false, triggered24h: 0 },
  { id: "r5", name: "Inference Markets sentiment dip", type: "sentiment-shift",       target: "Inference Markets",  threshold: "net sentiment < +0.2",      channels: ["telegram"],          enabled: true,  triggered24h: 0 },
];

type Event = {
  id: string;
  ruleId: string;
  ruleName: string;
  message: string;
  ago: string;
  channel: Channel;
  severity: "info" | "warning" | "critical";
};

const SEED_EVENTS: Event[] = [
  { id: "e1", ruleId: "r2", ruleName: "Private Inference acceleration", message: "Mentions up 38% over the last hour. 12 accounts driving the spike.",                                ago: "4m",  channel: "discord",  severity: "warning"  },
  { id: "e2", ruleId: "r3", ruleName: "Any viral post · Rialto eco",    message: "@karpathy crossed 21K engagements on a post about agentic loops.",                                  ago: "11m", channel: "push",     severity: "info"     },
  { id: "e3", ruleId: "r3", ruleName: "Any viral post · Rialto eco",    message: "@teknium1 post about private inference at 18K engagements and climbing.",                          ago: "26m", channel: "push",     severity: "info"     },
  { id: "e4", ruleId: "r1", ruleName: "Karpathy posts on agents",       message: "New post detected, classified as Agent Infrastructure with high signal score.",                    ago: "2h",  channel: "email",    severity: "info"     },
  { id: "e5", ruleId: "r2", ruleName: "Private Inference acceleration", message: "Velocity threshold sustained for 3 consecutive cycles. Cluster forming.",                          ago: "3h",  channel: "discord",  severity: "critical" },
];

const TYPE_META: Record<RuleType, { label: string; icon: React.ElementType }> = {
  "account-spike":          { label: "Account engagement spike",   icon: Activity },
  "narrative-acceleration": { label: "Narrative acceleration",     icon: TrendingUp },
  "viral-post":             { label: "Viral post detection",       icon: Flame },
  "follower-surge":         { label: "Follower surge",             icon: Users },
  "sentiment-shift":        { label: "Sentiment shift",            icon: ChevronDown },
  "ecosystem-anomaly":      { label: "Ecosystem anomaly",          icon: Activity },
};

const CHANNEL_META: Record<Channel, { label: string; icon: React.ElementType }> = {
  email:    { label: "Email",    icon: Mail },
  telegram: { label: "Telegram", icon: Send },
  discord:  { label: "Discord",  icon: MessageSquare },
  push:     { label: "Push",     icon: Bell },
};

export function AlertsBoard() {
  const [rules, setRules] = useState<Rule[]>(SEED_RULES);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggle = (id: string) =>
    setRules((rs) => rs.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r)));

  const active = rules.filter((r) => r.enabled).length;
  const fired24h = rules.reduce((s, r) => s + r.triggered24h, 0);

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <KpiTile label="Active rules" value={active.toString()} sub={`${rules.length} total`} icon={Bell} />
        <KpiTile label="Triggered · 24h" value={fired24h.toString()} sub="across all rules" icon={Activity} />
        <KpiTile label="Channels wired" value="4" sub="Email · Telegram · Discord · Push" icon={Send} />
        <KpiTile label="Quiet hours" value="22:00 – 07:00" sub="UTC, push only" icon={BellOff} />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <div className="xl:col-span-8 card overflow-hidden">
          <header className="flex items-center justify-between gap-3 px-5 py-4 border-b border-border">
            <div>
              <div className="text-[11px] font-medium text-muted uppercase tracking-wider mb-1">Configured</div>
              <h2 className="text-[14px] font-semibold text-foreground">Alert rules</h2>
            </div>
            <button
              onClick={() => setDrawerOpen(true)}
              className="btn-primary h-9 px-3.5 text-[13px] flex items-center gap-1.5"
            >
              <Plus className="size-4" /> New rule
            </button>
          </header>

          <div className="grid grid-cols-[44px_minmax(220px,1.4fr)_minmax(150px,1fr)_minmax(180px,1fr)_120px_70px_60px] gap-x-4 px-5 py-2.5 border-b border-border text-[11px] font-medium text-muted uppercase tracking-wider">
            <span>On</span>
            <span>Rule</span>
            <span>Target</span>
            <span>Threshold</span>
            <span>Channels</span>
            <span className="text-right">24h</span>
            <span className="text-right">&nbsp;</span>
          </div>

          <div className="divide-y divide-border">
            {rules.map((r) => {
              const t = TYPE_META[r.type];
              return (
                <div
                  key={r.id}
                  className="grid grid-cols-[44px_minmax(220px,1.4fr)_minmax(150px,1fr)_minmax(180px,1fr)_120px_70px_60px] gap-x-4 px-5 py-3 items-center hover:bg-surface transition-colors"
                >
                  <Toggle on={r.enabled} onClick={() => toggle(r.id)} />
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="size-7 shrink-0 rounded-md bg-surface-2 grid place-items-center border border-border">
                      <t.icon className="size-3.5 text-muted" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[13px] font-medium text-foreground truncate">{r.name}</div>
                      <div className="text-[11.5px] text-subtle truncate">{t.label}</div>
                    </div>
                  </div>
                  <span className="text-[12.5px] text-foreground truncate">{r.target}</span>
                  <span className="text-[12.5px] text-muted truncate">{r.threshold}</span>
                  <div className="flex items-center gap-1">
                    {r.channels.map((c) => {
                      const m = CHANNEL_META[c];
                      return (
                        <span
                          key={c}
                          title={m.label}
                          className="size-6 rounded-md bg-surface-2 border border-border grid place-items-center text-muted"
                        >
                          <m.icon className="size-3" />
                        </span>
                      );
                    })}
                  </div>
                  <span className="text-right text-[12.5px] font-mono text-foreground">{r.triggered24h}</span>
                  <button className="text-right text-[11.5px] text-muted hover:text-foreground transition-colors">Edit</button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="xl:col-span-4 card overflow-hidden">
          <header className="px-5 py-4 border-b border-border">
            <div className="text-[11px] font-medium text-muted uppercase tracking-wider mb-1">Last 24 hours</div>
            <h2 className="text-[14px] font-semibold text-foreground">Recent alerts</h2>
          </header>
          <ul className="divide-y divide-border max-h-[560px] overflow-y-auto scrollbar-thin">
            {SEED_EVENTS.map((e) => {
              const m = CHANNEL_META[e.channel];
              return (
                <li key={e.id} className="px-5 py-3.5 hover:bg-surface transition-colors">
                  <div className="flex items-center gap-2 text-[11.5px] text-muted mb-1">
                    <span
                      className={cn(
                        "size-1.5 rounded-full",
                        e.severity === "critical" ? "bg-negative"
                        : e.severity === "warning" ? "bg-accent"
                        : "bg-chart-2",
                      )}
                    />
                    <span>{e.ruleName}</span>
                    <span className="flex-1" />
                    <m.icon className="size-3 text-subtle" />
                    <span>{e.ago}</span>
                  </div>
                  <p className="text-[13px] text-foreground leading-relaxed">{e.message}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {drawerOpen && <NewRuleDrawer onClose={() => setDrawerOpen(false)} />}
    </>
  );
}

function KpiTile({
  label, value, sub, icon: Icon,
}: { label: string; value: string; sub: string; icon: React.ElementType }) {
  return (
    <div className="card p-5 flex items-center gap-4">
      <div className="size-10 rounded-md bg-accent-soft text-accent grid place-items-center">
        <Icon className="size-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[12px] text-muted">{label}</div>
        <div className="text-[20px] font-semibold text-foreground tracking-tight">{value}</div>
        <div className="text-[11.5px] text-subtle truncate">{sub}</div>
      </div>
    </div>
  );
}

function Toggle({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-5 w-9 rounded-full border transition-colors relative",
        on ? "bg-accent border-accent" : "bg-surface-2 border-border",
      )}
      aria-pressed={on}
    >
      <span
        className={cn(
          "absolute top-0.5 size-3.5 rounded-full bg-card border border-border transition-all shadow-sm",
          on ? "left-[18px] border-accent" : "left-0.5",
        )}
      />
    </button>
  );
}

function NewRuleDrawer({ onClose }: { onClose: () => void }) {
  const [type, setType] = useState<RuleType>("account-spike");
  const [channels, setChannels] = useState<Channel[]>(["email"]);
  const toggleCh = (c: Channel) =>
    setChannels((cs) => (cs.includes(c) ? cs.filter((x) => x !== c) : [...cs, c]));

  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-foreground/15 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-[440px] card border-l rounded-none flex flex-col">
        <header className="px-5 py-4 border-b border-border flex items-center justify-between">
          <div>
            <div className="text-[11px] font-medium text-muted uppercase tracking-wider">New alert rule</div>
            <h2 className="text-[16px] font-semibold text-foreground mt-0.5">Configure trigger</h2>
          </div>
          <button onClick={onClose} className="text-muted hover:text-foreground text-[13px]">Cancel</button>
        </header>

        <div className="flex-1 overflow-y-auto scrollbar-thin px-5 py-5 space-y-5">
          <Field label="Rule name">
            <input className="input" placeholder="e.g. Karpathy viral posts" defaultValue="" />
          </Field>

          <Field label="Trigger type">
            <div className="grid grid-cols-1 gap-1.5">
              {(Object.keys(TYPE_META) as RuleType[]).map((t) => {
                const m = TYPE_META[t];
                return (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-md border text-left transition-colors",
                      type === t
                        ? "border-accent bg-accent-soft text-accent"
                        : "border-border bg-card text-foreground hover:bg-surface",
                    )}
                  >
                    <m.icon className="size-4 shrink-0" />
                    <span className="text-[13px] font-medium">{m.label}</span>
                  </button>
                );
              })}
            </div>
          </Field>

          <Field label="Target">
            <input className="input" placeholder="@handle or narrative or *" defaultValue="@" />
          </Field>

          <Field label="Threshold">
            <input className="input" placeholder="e.g. +25% mentions in 1h" />
          </Field>

          <Field label="Delivery channels">
            <div className="grid grid-cols-2 gap-1.5">
              {(Object.keys(CHANNEL_META) as Channel[]).map((c) => {
                const m = CHANNEL_META[c];
                const on = channels.includes(c);
                return (
                  <button
                    key={c}
                    onClick={() => toggleCh(c)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-md border transition-colors",
                      on
                        ? "border-accent bg-accent-soft text-accent"
                        : "border-border bg-card text-foreground hover:bg-surface",
                    )}
                  >
                    <m.icon className="size-3.5" />
                    <span className="text-[12.5px] font-medium">{m.label}</span>
                  </button>
                );
              })}
            </div>
          </Field>
        </div>

        <footer className="px-5 py-4 border-t border-border flex items-center justify-end gap-2">
          <button onClick={onClose} className="btn-ghost h-9 px-3 text-[13px]">Cancel</button>
          <button onClick={onClose} className="btn-primary h-9 px-4 text-[13px]">Create rule</button>
        </footer>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          height: 36px;
          border-radius: 8px;
          border: 1px solid rgb(var(--border));
          background: rgb(var(--card));
          padding: 0 12px;
          font-size: 13px;
          color: rgb(var(--foreground));
          outline: none;
        }
        .input:focus {
          border-color: rgb(var(--accent));
          box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.12);
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[11.5px] font-medium text-muted mb-1.5">{label}</div>
      {children}
    </div>
  );
}
