"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "next-themes";
import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  type Simulation,
  type SimulationNodeDatum,
  type SimulationLinkDatum,
} from "d3-force";
import type { GraphEdge, GraphNode } from "@/lib/mock";

type NodeDatum = SimulationNodeDatum & {
  id: string;
  type: "account" | "narrative";
  label: string;
  color: string;
  size: number;
  data: GraphNode["data"];
};

type LinkDatum = SimulationLinkDatum<NodeDatum> & {
  weight: number;
  kind: GraphEdge["kind"];
};

export function NarrativeGraph({
  nodes,
  edges,
}: {
  nodes: GraphNode[];
  edges: GraphEdge[];
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const simRef = useRef<Simulation<NodeDatum, LinkDatum> | null>(null);
  const [size, setSize] = useState({ w: 800, h: 560 });
  const [hover, setHover] = useState<NodeDatum | null>(null);
  const [selected, setSelected] = useState<NodeDatum | null>(null);
  const colors = useGraphColors();

  const { simNodes, simLinks } = useMemo(() => {
    const ns: NodeDatum[] = nodes.map((n) => {
      if (n.type === "narrative") {
        return {
          id: n.id, type: "narrative", label: n.data.label, color: n.data.color,
          size: 16 + n.data.velocity * 0.16, data: n.data,
        };
      }
      return {
        id: n.id, type: "account", label: n.data.name, color: colors.account,
        size: 4 + Math.log10(n.data.followers + 10) * 1.6, data: n.data,
      };
    });
    const ls: LinkDatum[] = edges.map((e) => ({
      source: e.source, target: e.target, weight: e.weight, kind: e.kind,
    }));
    return { simNodes: ns, simLinks: ls };
  }, [nodes, edges, colors.account]);

  useEffect(() => {
    const el = svgRef.current?.parentElement;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      setSize({ w: Math.floor(r.width), h: Math.max(480, Math.floor(r.height)) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const sim = forceSimulation<NodeDatum>(simNodes)
      .force(
        "link",
        forceLink<NodeDatum, LinkDatum>(simLinks)
          .id((d) => d.id)
          .distance((l) => (l.kind === "narrative-narrative" ? 180 : l.kind === "account-narrative" ? 95 : 75))
          .strength((l) => l.weight * (l.kind === "narrative-narrative" ? 0.25 : 0.5)),
      )
      .force("charge", forceManyBody<NodeDatum>().strength((d) => (d.type === "narrative" ? -340 : -65)))
      .force("collide", forceCollide<NodeDatum>().radius((d) => d.size + 4))
      .force("center", forceCenter(size.w / 2, size.h / 2))
      .alpha(0.9)
      .alphaDecay(0.025);

    simRef.current = sim;

    let raf = 0;
    const tick = () => {
      if (!svgRef.current) return;
      const ngEls = svgRef.current.querySelectorAll<SVGGElement>("[data-node]");
      ngEls.forEach((el) => {
        const id = el.getAttribute("data-node");
        const n = simNodes.find((x) => x.id === id);
        if (!n || n.x == null || n.y == null) return;
        el.setAttribute("transform", `translate(${n.x.toFixed(2)},${n.y.toFixed(2)})`);
      });
      const lEls = svgRef.current.querySelectorAll<SVGLineElement>("[data-link]");
      lEls.forEach((el) => {
        const idx = +(el.getAttribute("data-link") ?? "-1");
        const l = simLinks[idx];
        if (!l) return;
        const s = l.source as NodeDatum;
        const t = l.target as NodeDatum;
        if (s.x == null || s.y == null || t.x == null || t.y == null) return;
        el.setAttribute("x1", s.x.toFixed(2));
        el.setAttribute("y1", s.y.toFixed(2));
        el.setAttribute("x2", t.x.toFixed(2));
        el.setAttribute("y2", t.y.toFixed(2));
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      sim.stop();
    };
  }, [simNodes, simLinks, size.w, size.h]);

  const focused = selected ?? hover;
  const focusedIds = useMemo(() => {
    if (!focused) return null;
    const set = new Set<string>([focused.id]);
    simLinks.forEach((l) => {
      const s = (l.source as NodeDatum).id;
      const t = (l.target as NodeDatum).id;
      if (s === focused.id) set.add(t);
      if (t === focused.id) set.add(s);
    });
    return set;
  }, [focused, simLinks]);

  return (
    <div className="relative h-[640px] w-full">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${size.w} ${size.h}`}
        className="absolute inset-0 w-full h-full"
        onClick={() => setSelected(null)}
      >
        <g>
          {simLinks.map((l, i) => {
            const s = l.source as NodeDatum;
            const t = l.target as NodeDatum;
            const dim = focusedIds && !(focusedIds.has(s.id) && focusedIds.has(t.id));
            const colorBase =
              l.kind === "narrative-narrative"
                ? s.color
                : l.kind === "account-narrative"
                ? (t.type === "narrative" ? t.color : s.color)
                : colors.edgeMuted;
            return (
              <line
                key={i}
                data-link={i}
                stroke={colorBase}
                strokeOpacity={dim ? 0.04 : 0.14 + l.weight * 0.25}
                strokeWidth={Math.max(0.6, l.weight * 1.4)}
                style={{ transition: "stroke-opacity 200ms ease" }}
              />
            );
          })}
        </g>

        <g>
          {simNodes.map((n) => {
            const dim = focusedIds && !focusedIds.has(n.id);
            const isFocus = focused?.id === n.id;
            return (
              <g
                key={n.id}
                data-node={n.id}
                style={{ cursor: "pointer", transition: "opacity 200ms ease", opacity: dim ? 0.22 : 1 }}
                onMouseEnter={() => setHover(n)}
                onMouseLeave={() => setHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(n);
                }}
              >
                {n.type === "narrative" ? (
                  <>
                    <circle r={n.size + 8} fill={n.color} opacity={0.08} />
                    <circle r={n.size} fill={n.color} fillOpacity={0.95} stroke={colors.card} strokeWidth={2} />
                    <text
                      y={n.size + 16}
                      textAnchor="middle"
                      fill={colors.fg}
                      fontSize={11.5}
                      fontWeight={500}
                      fontFamily="var(--font-sans)"
                    >
                      {n.label}
                    </text>
                  </>
                ) : (
                  <>
                    <circle
                      r={n.size + 1}
                      fill={colors.card}
                      stroke={isFocus ? colors.accent : colors.account}
                      strokeWidth={isFocus ? 2 : 1}
                    />
                    <circle r={n.size - 1.5} fill={colors.accountInner} />
                  </>
                )}
              </g>
            );
          })}
        </g>
      </svg>

      {focused && (
        <div className="absolute bottom-4 left-4 max-w-[340px] card px-4 py-3 pointer-events-none shadow">
          {focused.type === "narrative" ? (
            <>
              <div className="label-eyebrow mb-1">Narrative</div>
              <div className="font-semibold text-foreground text-[14px]">{focused.label}</div>
              <div className="text-[12px] text-muted mt-1">
                Velocity {(focused.data as any).velocity} ·{" "}
                {(focused.data as any).mentions24h.toLocaleString()} mentions / 24h
              </div>
            </>
          ) : (
            <>
              <div className="label-eyebrow mb-1">Account</div>
              <div className="font-semibold text-foreground text-[14px]">{focused.label}</div>
              <div className="text-[12px] text-subtle">{(focused.data as any).handle}</div>
              <div className="text-[12px] text-muted mt-1">
                Signal {(focused.data as any).signal.toFixed(1)} ·{" "}
                {(focused.data as any).followers.toLocaleString()} followers
              </div>
            </>
          )}
        </div>
      )}

      <div className="absolute top-4 right-4 card px-3.5 py-2.5 text-[11.5px] space-y-1.5">
        <div className="text-[10.5px] font-medium text-muted uppercase tracking-wider mb-1">Legend</div>
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-accent" />
          <span className="text-muted">Narrative</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full border border-border bg-card" />
          <span className="text-muted">Account</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-px bg-accent/40" />
          <span className="text-muted">Co-occurrence</span>
        </div>
      </div>
    </div>
  );
}

function useGraphColors() {
  const { resolvedTheme } = useTheme();
  const [c, setC] = useState({
    fg: "#11151c", card: "#ffffff", account: "#a0a6b0", accountInner: "#f4f5f7",
    accent: "#ea580c", edgeMuted: "#d4d7de",
  });
  useEffect(() => {
    const r = getComputedStyle(document.documentElement);
    const rgb = (v: string) => `rgb(${r.getPropertyValue(v).trim()})`;
    setC({
      fg: rgb("--foreground"),
      card: rgb("--card"),
      account: rgb("--border-strong"),
      accountInner: rgb("--surface-2"),
      accent: rgb("--accent"),
      edgeMuted: rgb("--border-strong"),
    });
  }, [resolvedTheme]);
  return c;
}
