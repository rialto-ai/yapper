import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/shell";
import { Panel } from "@/components/panel";
import { Sparkline } from "@/components/sparkline";
import { GrowthChart } from "@/components/growth-chart";
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
        { label: "Workspace / Venice" },
        { label: "Accounts", href: "/leaderboards" },
        { label: account.handle },
      ]}
    >
      {/* Header card */}
      <section className="glass rounded-lg p-5 animate-fade-in">
        <div className="flex items-start gap-5">
          <div className="size-16 shrink-0 rounded-xl bg-gradient-to-br from-ink-500 to-ink-700 grid place-items-center text-[18px] font-mono text-ink-400 border hairline">
            {account.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-[20px] font-semibold text-white tracking-tight">{account.name}</h2>
              {account.verified && (
                <span className="text-[10px] font-mono text-cyan-neon bg-cyan-neon/10 border border-cyan-neon/30 px-1.5 py-0.5 rounded">
                  VERIFIED
                </span>
              )}
              <span className="text-[10px] font-mono uppercase text-ink-400 bg-white/[0.04] px-1.5 py-0.5 rounded">
                {account.category}
              </span>
            </div>
            <div className="text-[13px] font-mono text-ink-400 mt-0.5">{account.handle}</div>
            <p className="text-[13px] text-ink-400 mt-2 max-w-[700px] leading-relaxed">{account.bio}</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-3 text-[11.5px] font-mono text-ink-400">
              <span><span className="text-white">{formatCompact(account.followers)}</span> followers</span>
              <span><span className="text-white">{formatCompact(account.following)}</span> following</span>
              <span><span className="text-white">{account.posts30d}</span> posts / 30d</span>
              <span><span className="text-white">{formatCompact(account.engagement)}</span> avg engagement</span>
              <span><span className="text-white">{account.reachEfficiency}%</span> reach efficiency</span>
            </div>
          </div>

          {/* Big signal score */}
          <div className="text-right">
            <div className="label-eyebrow">SIGNAL SCORE</div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-[40px] font-semibold text-white font-mono leading-none">
                {account.signal.toFixed(1)}
              </span>
              <span className={cn("text-[12px] font-mono", positive ? "text-emerald-neon" : "text-rose-neon")}>
                {positive ? "▲" : "▼"} {Math.abs(account.delta).toFixed(1)}
              </span>
            </div>
            <div className="mt-2 flex justify-end">
              <Sparkline
                data={account.sparkline}
                color={positive ? "#34f5b1" : "#fb7185"}
                width={160}
                height={36}
                filled
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <Panel
          className="xl:col-span-8"
          eyebrow="30D"
          title="Audience & Signal Trajectory"
          subtitle="Follower count (cyan) and Venice Signal score (violet) over time"
        >
          <GrowthChart data={account.growthSeries} />
        </Panel>

        <Panel className="xl:col-span-4" eyebrow="ALIGNMENT" title="Narrative Mix" subtitle="Weighted by mentions × engagement">
          <div className="px-4 py-3 space-y-2.5">
            {account.narratives.map((nw) => {
              const meta = narrativeMeta(nw.id);
              return (
                <div key={nw.id}>
                  <div className="flex items-center justify-between text-[11.5px] mb-1">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="size-2 rounded-sm"
                        style={{ background: meta?.color, boxShadow: `0 0 6px ${meta?.color}99` }}
                      />
                      <span className="text-white">{meta?.label}</span>
                    </div>
                    <span className="font-mono text-ink-400">
                      {(nw.weight * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="h-[3px] bg-white/[0.04] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${nw.weight * 100}%`,
                        background: `linear-gradient(90deg, ${meta?.color}55, ${meta?.color})`,
                        boxShadow: `0 0 6px ${meta?.color}`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
            <div className="border-t hairline pt-3 mt-3">
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <Stat label="VELOCITY"      value={account.velocity.toFixed(0)} />
                <Stat label="7D GROWTH"     value={`${account.growth7d.toFixed(1)}%`} color={account.growth7d >= 0 ? "emerald" : "rose"} />
                <Stat label="POSTS / 30D"   value={account.posts30d.toString()} />
                <Stat label="REACH EFF."    value={`${account.reachEfficiency}%`} />
              </div>
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
          <div className="divide-y hairline">
            {posts.map((p) => (
              <article key={p.id} className="px-4 py-3 hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-2 mb-1 text-[10.5px] font-mono text-ink-400">
                  <span>{p.ago} ago</span>
                  <span>·</span>
                  <span className="text-ink-400">{p.narrative}</span>
                  <span className="flex-1" />
                  <span
                    className={cn(
                      "px-1.5 py-0.5 rounded border",
                      p.velocity === "viral"
                        ? "text-rose-neon bg-rose-neon/10 border-rose-neon/30"
                        : p.velocity === "rising"
                        ? "text-cyan-neon bg-cyan-neon/10 border-cyan-neon/30"
                        : "text-ink-400 border-white/10",
                    )}
                  >
                    {p.velocity.toUpperCase()}
                  </span>
                </div>
                <p className="text-[13px] text-white/90 leading-relaxed">{p.text}</p>
                <div className="text-[10.5px] font-mono text-ink-400 mt-1.5">
                  {formatCompact(p.engagement)} engagements
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel className="xl:col-span-4" eyebrow="SIMILARITY" title="Accounts most similar" subtitle="Cosine on narrative alignment">
          <ul className="divide-y hairline">
            {similar.map((s) => (
              <li key={s.handle}>
                <Link
                  href={`/accounts/${s.handle.replace(/^@/, "")}`}
                  className="px-4 py-2.5 flex items-center gap-2.5 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="size-7 rounded-full bg-gradient-to-br from-ink-500 to-ink-700 grid place-items-center text-[10px] font-mono text-ink-400 border hairline shrink-0">
                    {s.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[12.5px] text-white truncate">{s.name}</div>
                    <div className="text-[10.5px] font-mono text-ink-400 truncate">{s.handle}</div>
                  </div>
                  <span className="text-[12px] font-mono text-white">{s.signal.toFixed(1)}</span>
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
  label, value, color,
}: { label: string; value: string; color?: "emerald" | "rose" }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="label-eyebrow">{label}</span>
      <span
        className={cn(
          "text-[13px] font-mono font-medium",
          color === "emerald" ? "text-emerald-neon" : color === "rose" ? "text-rose-neon" : "text-white",
        )}
      >
        {value}
      </span>
    </div>
  );
}
