import type { LucideIcon } from "lucide-react";

export function ProductCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="card group h-full p-6 transition-colors duration-200 hover:border-border-strong">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] bg-surface text-accent ring-1 ring-border">
        <Icon size={20} strokeWidth={1.6} />
      </span>
      <h3 className="mt-5 text-[17px] font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-subtle">{description}</p>
    </div>
  );
}
