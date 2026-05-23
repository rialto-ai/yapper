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
      description="Conversation clusters and influence flow across the ecosystem."
      crumbs={[{ label: "Workspace" }, { label: "Narratives" }]}
    >
      <section className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <Panel
          className="xl:col-span-9"
          eyebrow="FORCE-DIRECTED · ACCOUNTS × NARRATIVES"
          title="Conversation graph"
          subtitle="Hover to isolate, click to pin. Edge weight ∝ co-occurrence."
          right={
            <div className="flex items-center gap-1 p-0.5 rounded-md bg-surface border border-border">
              {["All", "Narratives", "Accounts"].map((t, i) => (
                <button
                  key={t}
                  className={
                    "text-[11.5px] font-medium px-2.5 py-1 rounded transition-colors " +
                    (i === 0
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted hover:text-foreground")
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
          <Panel
            eyebrow="VELOCITY-RANKED"
            title="Active narratives"
            subtitle={`${narratives.length} tracked clusters`}
          >
            <TopNarratives />
          </Panel>

          <Panel eyebrow="LEGEND" title="How to read this">
            <div className="px-5 py-4 space-y-2.5 text-[13px] text-muted leading-relaxed">
              <p>
                Large colored nodes are <span className="text-foreground font-medium">narratives</span>.
                Smaller dots are <span className="text-foreground font-medium">accounts</span>, sized by audience.
              </p>
              <p>
                Edges show <span className="text-foreground font-medium">narrative alignment</span> and
                <span className="text-foreground font-medium"> interaction</span> over the last 7 days. Thicker = stronger.
              </p>
              <p>
                Click any node to <span className="text-foreground font-medium">isolate its 1-hop neighborhood</span>.
              </p>
            </div>
          </Panel>
        </div>
      </section>
    </AppShell>
  );
}
