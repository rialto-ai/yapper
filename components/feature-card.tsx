import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon?: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="card h-full p-6">
      <div className="flex items-start gap-3">
        {Icon && (
          <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] bg-accent/[0.06] text-accent">
            <Icon size={18} strokeWidth={1.7} />
          </span>
        )}
        <div>
          <h3 className="text-[16px] font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-subtle">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
