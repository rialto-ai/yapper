import { AppShell } from "@/components/shell";
import { Panel } from "@/components/panel";
import { StatTile } from "@/components/stat-tile";
import { LeaderboardTable } from "@/components/leaderboard-table";
import { getAccounts } from "@/lib/data";

export default async function Page() {
  const accounts = await getAccounts({ limit: 100 });

  const movers = [...accounts].sort((a, b) => b.delta - a.delta).slice(0, 5);
  const fastest = [...accounts].sort((a, b) => b.growth7d - a.growth7d).slice(0, 5);

  const meanSignal = accounts.reduce((s, a) => s + a.signal, 0) / accounts.length;
  const meanDelta = accounts.reduce((s, a) => s + a.delta, 0) / accounts.length;
  const median = (arr: number[]) => arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)] ?? 0;

  return (
    <AppShell
      title="Signal Leaderboards"
      crumbs={[{ label: "Workspace / Venice" }, { label: "Leaderboards" }]}
    >
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatTile
          label="MEAN SIGNAL"
          value={meanSignal.toFixed(1)}
          delta={meanDelta}
          series={accounts.map((a) => a.signal)}
          color="#22e6ff"
        />
        <StatTile
          label="MEDIAN VELOCITY"
          value={median(accounts.map((a) => a.velocity)).toFixed(0)}
          delta={6.2}
          series={accounts.map((a) => a.velocity)}
          color="#a78bfa"
        />
        <StatTile
          label="ACCOUNTS TRACKED"
          value={accounts.length.toString()}
          delta={3.1}
          series={accounts.map((_, i) => Math.round(15 + Math.sin(i / 2) * 8 + i / 2))}
          color="#34f5b1"
        />
        <StatTile
          label="RANK CHURN · 24H"
          value="14"
          delta={9.8}
          unit="moves"
          series={accounts.map((a) => Math.round(Math.abs(a.delta) * 4))}
          color="#fbbf24"
        />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <div className="xl:col-span-9">
          <LeaderboardTable accounts={accounts} />
        </div>

        <div className="xl:col-span-3 space-y-4">
          <Panel eyebrow="LAST 24H" title="Biggest Movers" subtitle="Signal score delta">
            <ul className="divide-y hairline">
              {movers.map((a) => (
                <li key={a.handle} className="px-4 py-2 flex items-center gap-2">
                  <div className="size-6 rounded-full bg-gradient-to-br from-ink-500 to-ink-700 grid place-items-center text-[9px] font-mono text-ink-400 border hairline shrink-0">
                    {a.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[12px] text-white truncate">{a.name}</div>
                    <div className="text-[10px] font-mono text-ink-400 truncate">{a.handle}</div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-neon">▲ {a.delta.toFixed(1)}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel eyebrow="LAST 7D" title="Fastest Follower Growth" subtitle="Net follower delta, %">
            <ul className="divide-y hairline">
              {fastest.map((a) => (
                <li key={a.handle} className="px-4 py-2 flex items-center gap-2">
                  <div className="size-6 rounded-full bg-gradient-to-br from-ink-500 to-ink-700 grid place-items-center text-[9px] font-mono text-ink-400 border hairline shrink-0">
                    {a.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[12px] text-white truncate">{a.name}</div>
                    <div className="text-[10px] font-mono text-ink-400 truncate">{a.handle}</div>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-neon">▲ {a.growth7d.toFixed(1)}%</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>
    </AppShell>
  );
}
