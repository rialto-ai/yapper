import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/shell";
import { Panel } from "@/components/panel";
import { Sparkline } from "@/components/sparkline";
import { GrowthChart } from "@/components/growth-chart";
import { Avatar } from "@/components/trending-accounts";
import { cn, formatCompact } from "@/lib/utils";
import {
  getAccount,
  getSimilarAccounts,
  getTopPosts,
  getNarratives,
} from "@/lib/data";

export default async function Page({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const account = await getAccount(handle);
  if (!account) notFound();

  const [similar, posts, narratives] = await Promise.all([
    getSimilarAccounts(account.handle),
    getTopPosts(account.handle),
    getNarratives(),
  ]);

  const narrativeMeta = (id: string) => narratives.find((n) => n.id === id);
  const positive = account.delta >= 0;

  return (
    <AppShell
      title={account.name}
      crumbs={[
        { label: "Workspace" },
        { label: "Accounts", href: "/leaderboards" },
        { label: account.handle },
      ]}
    >
      <section className="card p-6 animate-fade-in">
        <div className="flex items-start gap-5">
          <div className="size-16 shrink-0 rounded-full bg-surface-2 grid place-items-center text-[18px] font-medium text-muted border border-border">
            {account.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-[22px] font-semibold text-foreground tracking-tight">{account.name}</h2>
              {account.verified && <span className="chip chip-accent">Verified</span>}
              <span className="chip capitalize">{account.category}</span>
            </div>
            <div className="text-[13.5px] text-subtle mt-0.5">{account.handle}</div>
            <p className="text-[14px] text-muted mt-3 max-w-[680px] leading-relaxed">{account.bio}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 mt-4 text-[12.5px] text-muted">
              <span><span className="text-foreground font-medium">{formatCompact(account.followers)}</span> followers</span>
              <span><span className="text-foreground font-medium">{formatCompact(account.following)}</span> following</span>
              <span><span className="text-foreground font-medium">{account.posts30d}</span> posts / 30d</span>
              <span><span className="text-foreground font-medium">{formatCompact(account.engagement)}</span> avg engagement</span>
              <span><span className="text-foreground font-medium">{account.reachEfficiency}%</span> reach efficiency</span>
            </div>
          </div>

          <div className="text-right">
            <div className="text-[11px] font-medium text-muted uppercase tracking-wider">Signal Score</div>
            <div className="flex items-baseline gap-2 mt-1 justify-end">
              <span className="text-[40px] font-semibold text-foreground tracking-tight leading-none">
                {account.signal.toFixed(1)}
              </span>
              <span className={cn("text-[13px] font-medium", positive ? "text-positive" : "text-negative")}>
                {positive ? "↑" : "↓"} {Math.abs(account.delta).toFixed(1)}
              </span>
            </div>
            <div className="mt-3 flex justify-end">
              <Sparkline
                data={account.sparkline}
                color="rgb(var(--accent))"
                width={180}
                height={40}
                filled
              />
            </div>
            <div className="flex justify-end gap-2 mt-3">
              <button className="btn-ghost h-8 px-3 text-[12.5px]">Follow</button>
              <button className="btn-primary h-8 px-3 text-[12.5px]">Add to list</button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <Panel
          className="xl:col-span-8"
          eyebrow="LAST 30 DAYS"
          title="Audience & signal trajectory"
          subtitle="Follower count (orange) and Signal Score (violet)"
        >
          <GrowthChart data={account.growthSeries} />
        </Panel>

        <Panel
          className="xl:col-span-4"
          eyebrow="ALIGNMENT"
          title="Narrative mix"
          subtitle="Weighted by mentions × engagement"
        >
          <div className="px-5 py-4 space-y-3">
            {account.narratives.map((nw) => {
              const meta = narrativeMeta(nw.id);
              return (
                <div key={nw.id}>
                  <div className="flex items-center justify-between text-[12.5px] mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full" style={{ background: meta?.color }} />
                      <span className="text-foreground">{meta?.label}</span>
                    </div>
                    <span className="font-mono text-muted">{(nw.weight * 100).toFixed(0)}%</span>
                  </div>
                  <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${nw.weight * 100}%`, background: meta?.color }}
                    />
                  </div>
                </div>
              );
            })}
            <div className="border-t border-border pt-4 mt-4 grid grid-cols-2 gap-3">
              <Stat label="Velocity"     value={account.velocity.toFixed(0)} />
              <Stat label="7d growth"    value={`${account.growth7d.toFixed(1)}%`} positive={account.growth7d >= 0} />
              <Stat label="Posts / 30d"  value={account.posts30d.toString()} />
              <Stat label="Reach eff."   value={`${account.reachEfficiency}%`} />
            </div>
          </div>
        </Panel>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <Panel
          className="xl:col-span-8"
          eyebrow="TOP POSTS"
          title="Highest-signal posts"
          subtitle="Ranked by engagement × narrative weight"
        >
          <div className="divide-y divide-border">
            {posts.map((p) => (
              <article key={p.id} className="px-5 py-4 hover:bg-surface transition-colors">
                <div className="flex items-center gap-2 mb-2 text-[11.5px] text-muted">
                  <span>{p.ago} ago</span>
                  <span className="text-subtle">·</span>
                  <span>{p.narrative}</span>
                  <span className="flex-1" />
                  <span
                    className={cn(
                      "text-[10.5px] font-medium px-2 py-0.5 rounded-full",
                      p.velocity === "viral"
                        ? "text-accent bg-accent-soft"
                        : p.velocity === "rising"
                        ? "text-chart-2 bg-chart-2/10"
                        : "text-muted bg-surface-2",
                    )}
                  >
                    {p.velocity}
                  </span>
                </div>
                <p className="text-[14px] text-foreground leading-relaxed">{p.text}</p>
                <div className="text-[12px] text-muted mt-2">
                  {formatCompact(p.engagement)} engagements
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel
          className="xl:col-span-4"
          eyebrow="SIMILARITY"
          title="Similar accounts"
          subtitle="Cosine on narrative alignment"
        >
          <ul className="divide-y divide-border">
            {similar.map((s) => (
              <li key={s.handle}>
                <Link
                  href={`/accounts/${s.handle.replace(/^@/, "")}`}
                  className="px-5 py-3 flex items-center gap-3 hover:bg-surface transition-colors"
                >
                  <Avatar name={s.name} />
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] font-medium text-foreground truncate">{s.name}</div>
                    <div className="text-[11.5px] text-subtle truncate">{s.handle}</div>
                  </div>
                  <span className="text-[13px] font-mono text-foreground">{s.signal.toFixed(1)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      </section>
    </AppShell>
  );
}

function Stat({
  label, value, positive,
}: { label: string; value: string; positive?: boolean }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[11px] font-medium text-muted uppercase tracking-wider">{label}</span>
      <span
        className={cn(
          "text-[14px] font-semibold",
          positive === true ? "text-positive" : positive === false ? "text-negative" : "text-foreground",
        )}
      >
        {value}
      </span>
    </div>
  );
}
