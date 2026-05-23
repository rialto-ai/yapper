"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

  const { simNodes, simLinks } = useMemo(() => {
    const ns: NodeDatum[] = nodes.map((n) => {
      if (n.type === "narrative") {
        return {
          id: n.id,
          type: "narrative",
          label: n.data.label,
          color: n.data.color,
          size: 18 + n.data.velocity * 0.18,
          data: n.data,
        };
      }
      return {
        id: n.id,
        type: "account",
        label: n.data.name,
        color: "#9aa3b5",
        size: 4 + Math.log10(n.data.followers + 10) * 1.6,
        data: n.data,
      };
    });
    const ls: LinkDatum[] = edges.map((e) => ({
      source: e.source,
      target: e.target,
      weight: e.weight,
      kind: e.kind,
    }));
    return { simNodes: ns, simLinks: ls };
  }, [nodes, edges]);

  // Resize
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

  // Simulation
  useEffect(() => {
    const sim = forceSimulation<NodeDatum>(simNodes)
      .force(
        "link",
        forceLink<NodeDatum, LinkDatum>(simLinks)
          .id((d) => d.id)
          .distance((l) => (l.kind === "narrative-narrative" ? 180 : l.kind === "account-narrative" ? 90 : 70))
          .strength((l) => l.weight * (l.kind === "narrative-narrative" ? 0.25 : 0.5)),
      )
      .force("charge", forceManyBody<NodeDatum>().strength((d) => (d.type === "narrative" ? -320 : -60)))
      .force("collide", forceCollide<NodeDatum>().radius((d) => d.size + 4))
      .force("center", forceCenter(size.w / 2, size.h / 2))
      .alpha(0.9)
      .alphaDecay(0.025);

    simRef.current = sim;

    let raf = 0;
    const tick = () => {
      if (!svgRef.current) return;
      // Mutate SVG via refs map. Use querySelectorAll keyed by data-id.
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
        <defs>
          <radialGradient id="bg-glow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="rgba(124,58,237,0.10)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x={0} y={0} width={size.w} height={size.h} fill="url(#bg-glow)" />

        {/* Edges */}
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
                : "#3a4150";
            return (
              <line
                key={i}
                data-link={i}
                stroke={colorBase}
                strokeOpacity={dim ? 0.04 : 0.18 + l.weight * 0.35}
                strokeWidth={Math.max(0.6, l.weight * 1.6)}
                style={{ transition: "stroke-opacity 200ms ease" }}
              />
            );
          })}
        </g>

        {/* Nodes */}
        <g>
          {simNodes.map((n) => {
            const dim = focusedIds && !focusedIds.has(n.id);
            return (
              <g
                key={n.id}
                data-node={n.id}
                style={{ cursor: "pointer", transition: "opacity 200ms ease", opacity: dim ? 0.18 : 1 }}
                onMouseEnter={() => setHover(n)}
                onMouseLeave={() => setHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(n);
                }}
              >
                {n.type === "narrative" ? (
                  <>
                    <circle
                      r={n.size + 6}
                      fill={n.color}
                      opacity={0.15}
                      filter="url(#node-glow)"
                    />
                    <circle r={n.size} fill={n.color} fillOpacity={0.85} stroke={n.color} strokeWidth={1.2} />
                    <text
                      y={n.size + 14}
                      textAnchor="middle"
                      className="fill-white font-mono"
                      fontSize={11}
                    >
                      {n.label}
                    </text>
                  </>
                ) : (
                  <>
                    <circle
                      r={n.size + 1}
                      fill="#0a0d14"
                      stroke={(n.data as any).narrative ? (focused?.id === n.id ? "#22e6ff" : "#5b6478") : "#5b6478"}
                      strokeWidth={focused?.id === n.id ? 1.6 : 0.8}
                    />
                    <circle r={n.size - 1.5} fill="#11151f" />
                  </>
                )}
              </g>
            );
          })}
        </g>
      </svg>

      {/* Hover/select panel */}
      {(focused) && (
        <div className="absolute bottom-3 left-3 max-w-[320px] glass rounded-lg px-3 py-2.5 text-[12px] pointer-events-none">
          {focused.type === "narrative" ? (
            <>
              <div className="label-eyebrow mb-0.5">NARRATIVE</div>
              <div className="font-semibold text-white text-[13px]">{focused.label}</div>
              <div className="font-mono text-[11px] text-ink-400 mt-1">
                velocity {(focused.data as any).velocity} ·{" "}
                {(focused.data as any).mentions24h.toLocaleString()} mentions / 24h
              </div>
            </>
          ) : (
            <>
              <div className="label-eyebrow mb-0.5">ACCOUNT</div>
              <div className="font-semibold text-white text-[13px]">{focused.label}</div>
              <div className="font-mono text-[11px] text-ink-400">{(focused.data as any).handle}</div>
              <div className="font-mono text-[11px] text-ink-400 mt-1">
                signal {(focused.data as any).signal.toFixed(1)} ·{" "}
                {(focused.data as any).followers.toLocaleString()} followers
              </div>
            </>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="absolute top-3 right-3 glass rounded-md px-3 py-2 text-[10.5px] font-mono space-y-1">
        <div className="label-eyebrow mb-1">LEGEND</div>
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-cyan-neon glow-dot text-cyan-neon" />
          <span className="text-ink-400">Narrative node</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full border hairline bg-ink-900" />
          <span className="text-ink-400">Account</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-px bg-violet-neon" />
          <span className="text-ink-400">Co-occurrence</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-px bg-ink-500" />
          <span className="text-ink-400">Interaction</span>
        </div>
      </div>
    </div>
  );
}
