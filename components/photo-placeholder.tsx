import { cn } from "@/lib/utils";

export function PhotoPlaceholder({
  label = "Photo",
  className,
  aspect = "aspect-[4/5]",
}: {
  label?: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-surface-2",
        aspect,
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,rgb(var(--surface-2))_0%,rgb(var(--surface))_50%,rgb(var(--surface-2))_100%)]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-muted">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="1.5" />
            <path d="M21 15l-5-5L6 21" />
          </svg>
          <div className="text-[10.5px] uppercase tracking-[0.18em]">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}
