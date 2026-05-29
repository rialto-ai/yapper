import { cn } from "@/lib/utils";

type Node = { x: number; y: number; r?: number; pulse?: boolean };

const NODES: Node[] = [
  { x: 120, y: 90, r: 3 },
  { x: 250, y: 60, r: 4, pulse: true },
  { x: 360, y: 140, r: 3 },
  { x: 200, y: 200, r: 5, pulse: true },
  { x: 320, y: 250, r: 3 },
  { x: 90, y: 250, r: 4, pulse: true },
  { x: 430, y: 80, r: 3 },
  { x: 460, y: 220, r: 4, pulse: true },
  { x: 160, y: 330, r: 3 },
  { x: 300, y: 350, r: 4 },
  { x: 410, y: 320, r: 3, pulse: true },
  { x: 60, y: 150, r: 3 },
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [1, 3], [3, 4], [3, 5], [2, 6], [6, 7],
  [4, 7], [5, 8], [8, 9], [9, 10], [10, 7], [0, 11], [11, 5],
  [3, 9], [2, 4], [6, 1], [8, 5],
];

export function NetworkVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)} aria-hidden="true">
      {/* atmospheric glows */}
      <div className="pointer-events-none absolute -inset-10">
        <div className="absolute left-[20%] top-[10%] h-48 w-48 rounded-full bg-[#3B82F6]/20 blur-3xl" />
        <div className="absolute right-[10%] bottom-[12%] h-56 w-56 rounded-full bg-[#8B5CF6]/20 blur-3xl" />
      </div>

      <svg
        viewBox="0 0 520 420"
        className="relative w-full h-auto"
        fill="none"
      >
        <defs>
          <linearGradient id="rf-edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
          <radialGradient id="rf-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#6D28D9" />
          </radialGradient>
        </defs>

        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            stroke="url(#rf-edge)"
            strokeWidth={1}
            strokeOpacity={0.35}
          />
        ))}

        {NODES.map((n, i) => (
          <g key={i} className={n.pulse ? "rf-node-pulse" : undefined}>
            {n.pulse && (
              <circle cx={n.x} cy={n.y} r={(n.r ?? 3) + 6} fill="url(#rf-node)" opacity={0.18} />
            )}
            <circle cx={n.x} cy={n.y} r={n.r ?? 3} fill="url(#rf-node)" />
          </g>
        ))}
      </svg>
    </div>
  );
}
