import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/topbar";
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
import { buildMentionsSeries } from "@/lib/mock";

export default function Page() {
  const mentions = buildMentionsSeries().map((d) => d.v);
  const last = mentions.slice(-12);
  const lastSum = last.reduce((s, v) => s + v, 0);

  return (
    <div className="min-h-screen grid-bg">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 flex flex-col min-w-0">
          <TopBar />

          <div className="flex-1 p-5 space-y-5">
            {/* Top KPI row */}
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <StatTile
                label="MENTIONS / 24H"
                value="62.4K"
                delta={18.2}
                series={mentions}
                color="#22e6ff"
              />
              <StatTile
                label="ACTIVE VOICES"
                value="8,914"
                delta={6.4}
                series={mentions.map((v, i) => Math.round(v * 0.18 + i * 4))}
                color="#a78bfa"
              />
              <StatTile
                label="VIRAL POSTS"
                value="47"
                delta={27.1}
                series={mentions.map((v) => Math.round(v / 1400))}
                color="#34f5b1"
              />
              <StatTile
                label="SIGNAL INDEX"
                value="184.6"
                unit="pts"
                delta={2.1}
                series={mentions.map((v, i) => 160 + Math.round(Math.sin(i / 4) * 12 + v / 600))}
                color="#fbbf24"
              />
            </section>

            {/* Middle row: velocity chart + sentiment + top narratives */}
            <section className="grid grid-cols-1 xl:grid-cols-12 gap-4">
              <Panel
                className="xl:col-span-8"
                eyebrow="48H · STACKED"
                title="Narrative Velocity"
                subtitle="Top 5 conversation clusters, mentions per 30m bucket"
                right={
                  <div className="flex items-center gap-1.5">
                    {["1H", "24H", "48H", "7D", "30D"].map((p, i) => (
                      <button
                        key={p}
                        className={
                          "text-[10.5px] font-mono px-2 py-1 rounded border " +
                          (i === 2
                            ? "border-cyan-neon/40 bg-cyan-neon/10 text-cyan-neon"
                            : "hairline text-ink-400 hover:text-white hover:border-white/10")
                        }
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                }
              >
                <NarrativeVelocityChart />
                <NarrativeLegend />
              </Panel>

              <Panel
                className="xl:col-span-4"
                eyebrow="LIVE"
                title="Ecosystem Sentiment"
                subtitle="Weighted by reach + signal score"
              >
                <SentimentRing />
              </Panel>
            </section>

            {/* Third row: narratives + accounts + heatmap */}
            <section className="grid grid-cols-1 xl:grid-cols-12 gap-4">
              <Panel
                className="xl:col-span-4"
                eyebrow="TRENDING"
                title="Top Narratives"
                subtitle="Velocity-ranked, 24h window"
                right={
                  <span className="text-[10.5px] font-mono text-ink-400">
                    {`${(lastSum / 1000).toFixed(1)}K / hr`}
                  </span>
                }
                bodyClassName="pb-1"
              >
                <TopNarratives />
              </Panel>

              <Panel
                className="xl:col-span-5"
                eyebrow="LEADERBOARD"
                title="Rising Voices"
                subtitle="Highest signal-score acceleration, 24h"
                right={
                  <div className="flex items-center gap-1.5">
                    {["All", "Researchers", "Founders", "Traders"].map((t, i) => (
                      <button
                        key={t}
                        className={
                          "text-[10.5px] font-mono px-2 py-1 rounded border " +
                          (i === 0
                            ? "border-violet-neon/40 bg-violet-neon/10 text-violet-neon"
                            : "hairline text-ink-400 hover:text-white hover:border-white/10")
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
                eyebrow="HEATMAP · UTC"
                title="Engagement Density"
                subtitle="Mentions × engagement, last 7d"
              >
                <EngagementHeatmap />
              </Panel>
            </section>

            {/* Bottom row: live activity feed */}
            <section className="grid grid-cols-1 gap-4">
              <Panel
                eyebrow="STREAMING"
                title="Live Activity"
                subtitle="High-signal posts mentioning the Venice ecosystem"
                right={
                  <div className="flex items-center gap-2 text-[10.5px] font-mono text-emerald-neon">
                    <span className="relative size-1.5 rounded-full bg-emerald-neon glow-dot text-emerald-neon">
                      <span className="absolute inset-0 rounded-full pulse-ring text-emerald-neon" />
                    </span>
                    INGESTING · 1.3K POSTS / MIN
                  </div>
                }
              >
                <ActivityFeed />
              </Panel>
            </section>

            <footer className="flex items-center justify-between text-[10.5px] font-mono text-ink-400 pt-1 pb-3">
              <span>VENICE SIGNAL · ECOSYSTEM OVERVIEW</span>
              <span>DATA · MOCK · 2026</span>
              <span>RENDER · &lt;82ms</span>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
