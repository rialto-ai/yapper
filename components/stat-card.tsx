interface StatCardProps {
  label: string;
  value: string;
  detail?: string;
  trend?: "up" | "down" | "neutral";
  highlight?: boolean;
}

export function StatCard({ label, value, detail, trend, highlight }: StatCardProps) {
  const detailColor =
    trend === "up"
      ? "text-positive"
      : trend === "down"
      ? "text-negative"
      : "text-muted";

  return (
    <div
      className={`card p-5 card-interactive ${
        highlight
          ? "bg-gradient-to-br from-accent-soft/60 to-white border-accent/15"
          : ""
      }`}
    >
      <p
        className={`text-[12px] font-medium mb-1 ${
          highlight ? "text-accent" : "text-muted"
        }`}
      >
        {label}
      </p>
      <p className="text-[24px] font-semibold tracking-tight">{value}</p>
      {detail && <p className={`text-[12px] mt-1 ${detailColor}`}>{detail}</p>}
    </div>
  );
}
