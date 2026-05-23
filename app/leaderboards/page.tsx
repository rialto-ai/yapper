import { AppShell } from "@/components/shell";
import { Panel } from "@/components/panel";
import { StatTile } from "@/components/stat-tile";
import { LeaderboardTable } from "@/components/leaderboard-table";
import { Avatar } from "@/components/trending-accounts";
import { getAccounts } from "@/lib/data";

export default async function Page() {
  const accounts = await getAccounts({ limit: 100 });

  const movers  = [...accounts].sort((a, b) => b.delta - a.delta).slice(0, 5);
  const fastest = [...accounts].sort((a, b) => b.growth7d - a.growth7d).slice(0, 5);

  const meanSignal = accounts.reduce((s, a) => s + a.signal, 0) / accounts.length;
  const meanDelta  = accounts.reduce((s, a) => s + a.delta, 0) / accounts.length;
  const median = (arr: number[]) => arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)] ?? 0;

  return (
    <AppShell
      title="Leaderboards"
      description="Ranked accounts by Signal Score, velocity, and audience growth."
      crumbs={[{ label: "Workspace" }, { label: "Leaderboards" }]}
    >
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatTile label="Mean signal"      value={meanSignal.toFixed(1)} delta={meanDelta} series={accounts.map((a) => a.signal)} colorVar="--accent" />
        <StatTile label="Median velocity"  value={median(accounts.map((a) => a.velocity)).toFixed(0)} delta={6.2} series={accounts.map((a) => a.velocity)} colorVar="--chart-2" />
        <StatTile label="Accounts tracked" value={accounts.length.toString()} delta={3.1} series={accounts.map((_, i) => Math.round(15 + Math.sin(i / 2) * 8 + i / 2))} colorVar="--chart-3" />
        <StatTile label="Rank churn · 24h" value="14" delta={9.8} unit="moves" series={accounts.map((a) => Math.round(Math.abs(a.delta) * 4))} colorVar="--chart-4" />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <div className="xl:col-span-9">
          <LeaderboardTable accounts={accounts} />
        </div>

        <div className="xl:col-span-3 space-y-4">
          <Panel eyebrow="LAST 24 HOURS" title="Biggest movers" subtitle="Signal-score delta">
            <ul className="divide-y divide-border">
              {movers.map((a) => (
                <li key={a.handle} className="px-5 py-3 flex items-center gap-2.5">
                  <Avatar name={a.name} size={26} />
                  <div className="min-w-0 flex-1">
                    <div className="text-[12.5px] text-foreground truncate font-medium">{a.name}</div>
                    <div className="text-[11px] text-subtle truncate">{a.handle}</div>
                  </div>
                  <span className="text-[12px] font-medium text-positive">↑ {a.delta.toFixed(1)}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel eyebrow="LAST 7 DAYS" title="Fastest growing" subtitle="Net follower delta, %">
            <ul className="divide-y divide-border">
              {fastest.map((a) => (
                <li key={a.handle} className="px-5 py-3 flex items-center gap-2.5">
                  <Avatar name={a.name} size={26} />
                  <div className="min-w-0 flex-1">
                    <div className="text-[12.5px] text-foreground truncate font-medium">{a.name}</div>
                    <div className="text-[11px] text-subtle truncate">{a.handle}</div>
                  </div>
                  <span className="text-[12px] font-medium text-accent">↑ {a.growth7d.toFixed(1)}%</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>
    </AppShell>
  );
}
