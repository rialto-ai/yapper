interface StatCardProps {
  label: string;
  value: string;
  detail?: string;
}

export function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <div className="card p-5">
      <p className="text-[12px] font-medium text-muted mb-1">{label}</p>
      <p className="text-[22px] font-semibold tracking-tight">{value}</p>
      {detail && <p className="text-[12px] text-muted mt-1">{detail}</p>}
    </div>
  );
}
