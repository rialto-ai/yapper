import { AppShell } from "@/components/shell";
import { Panel } from "@/components/panel";
import { StatTile } from "@/components/stat-tile";
import {
  NarrativeVelocityChart,
  NarrativeLegend,
} from "@/components/narrative-velocity";
import { TopNarratives } from "@/components/top-narratives";
import { TrendingAccounts } from "@/components/trending-accounts";
import { EngagementHeatmap } from "@/components/heatmap";
import { SentimentRing } from "@/components/sentiment-ring";
import { ActivityFeed } from "@/components/activity-feed";
import { getMentionsSeries } from "@/lib/data";

export default async function Page() {
  const mentions = (await getMentionsSeries()).map((d) => d.v);

  return (
    <AppShell
      title="Ecosystem Overview"
      description="Real-time intelligence across the open AI ecosystem."
      crumbs={[{ label: "Workspace" }, { label: "Overview" }]}
    >
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatTile label="Mentions / 24h"   value="62.4K" delta={18.2} series={mentions} colorVar="--accent" />
        <StatTile label="Active voices"    value="8,914" delta={6.4}  series={mentions.map((v, i) => Math.round(v * 0.18 + i * 4))} colorVar="--chart-2" />
        <StatTile label="Viral posts"      value="47"    delta={27.1} series={mentions.map((v) => Math.round(v / 1400))} colorVar="--chart-3" />
        <StatTile label="Signal index"     value="184.6" unit="pts" delta={2.1} series={mentions.map((v, i) => 160 + Math.round(Math.sin(i / 4) * 12 + v / 600))} colorVar="--chart-4" />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <Panel
          className="xl:col-span-8"
          eyebrow="LAST 48 HOURS"
          title="Narrative velocity"
          subtitle="Top 5 conversation clusters, mentions per 30m bucket"
          right={<RangeTabs />}
        >
          <NarrativeVelocityChart />
          <NarrativeLegend />
        </Panel>

        <Panel
          className="xl:col-span-4"
          eyebrow="WEIGHTED BY REACH"
          title="Ecosystem sentiment"
          subtitle="Bullish, technical, neutral, bearish"
        >
          <SentimentRing />
        </Panel>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <Panel
          className="xl:col-span-4"
          eyebrow="TRENDING"
          title="Top narratives"
          subtitle="Velocity-ranked, 24h window"
          bodyClassName="pb-1"
        >
          <TopNarratives />
        </Panel>

        <Panel
          className="xl:col-span-5"
          eyebrow="LEADERBOARD"
          title="Rising voices"
          subtitle="Highest signal-score acceleration, 24h"
          right={
            <div className="flex items-center gap-1.5">
              {["All", "Researchers", "Founders", "Traders"].map((t, i) => (
                <button
                  key={t}
                  className={
                    "text-[11.5px] font-medium px-2.5 py-1 rounded-md transition-colors " +
                    (i === 0
                      ? "bg-accent-soft text-accent"
                      : "text-muted hover:text-foreground hover:bg-surface")
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          }
        >
          <TrendingAccounts />
        </Panel>

        <Panel
          className="xl:col-span-3"
          eyebrow="LAST 7 DAYS"
          title="Engagement density"
          subtitle="Mentions × engagement, UTC"
        >
          <EngagementHeatmap />
        </Panel>
      </section>

      <section className="grid grid-cols-1 gap-4">
        <Panel
          eyebrow="STREAMING"
          title="Live activity"
          subtitle="High-signal posts mentioning the Rialto ecosystem"
          right={
            <div className="flex items-center gap-2 text-[11.5px] text-muted">
              <span className="size-1.5 rounded-full bg-positive" />
              Ingesting 1.3K posts / min
            </div>
          }
        >
          <ActivityFeed />
        </Panel>
      </section>
    </AppShell>
  );
}

function RangeTabs() {
  return (
    <div className="flex items-center gap-1 p-0.5 rounded-md bg-surface border border-border">
      {["1h", "24h", "48h", "7d", "30d"].map((p, i) => (
        <button
          key={p}
          className={
            "text-[11.5px] font-medium px-2 py-1 rounded transition-colors " +
            (i === 2
              ? "bg-card text-foreground shadow-sm"
              : "text-muted hover:text-foreground")
          }
        >
          {p}
        </button>
      ))}
    </div>
  );
}
