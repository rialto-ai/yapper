import { AppShell } from "@/components/shell";
import { Panel } from "@/components/panel";
import { TopNarratives } from "@/components/top-narratives";
import { NarrativeGraph } from "@/components/narrative-graph";
import { getGraph, getNarratives } from "@/lib/data";

export default async function Page() {
  const { nodes, edges } = await getGraph();
  const narratives = await getNarratives();

  return (
    <AppShell
      title="Narrative Intelligence"
      crumbs={[{ label: "Workspace / Venice" }, { label: "Narratives" }]}
    >
      <section className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <Panel
          className="xl:col-span-9"
          eyebrow="FORCE-DIRECTED · ACCOUNTS × NARRATIVES"
          title="Conversation Graph"
          subtitle="Hover to isolate, click to pin. Edge weight ∝ co-occurrence."
          right={
            <div className="flex items-center gap-1.5">
              {["All", "Narratives", "Accounts", "Interactions"].map((t, i) => (
                <button
                  key={t}
                  className={
                    "text-[10.5px] font-mono px-2 py-1 rounded border " +
                    (i === 0
                      ? "border-cyan-neon/40 bg-cyan-neon/10 text-cyan-neon"
                      : "hairline text-ink-400 hover:text-white hover:border-white/10")
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          }
          bodyClassName="p-0"
        >
          <NarrativeGraph nodes={nodes} edges={edges} />
        </Panel>

        <div className="xl:col-span-3 space-y-4">
          <Panel eyebrow="VELOCITY-RANKED" title="Active Narratives" subtitle={`${narratives.length} tracked clusters`}>
            <TopNarratives />
          </Panel>

          <Panel eyebrow="LEGEND · NODES" title="What you're looking at">
            <div className="px-4 py-3 space-y-2.5 text-[12px] text-ink-400 leading-relaxed">
              <p>
                Larger glowing nodes are <span className="text-white">narratives</span>. Smaller dots are
                <span className="text-white"> accounts</span>, sized by audience.
              </p>
              <p>
                Edges show <span className="text-white">narrative alignment</span> and{" "}
                <span className="text-white">interaction</span> over the last 7d. Thicker = stronger.
              </p>
              <p>
                Click any node to <span className="text-white">isolate its 1-hop neighborhood</span>.
              </p>
            </div>
          </Panel>
        </div>
      </section>
    </AppShell>
  );
}
