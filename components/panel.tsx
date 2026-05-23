import { cn } from "@/lib/utils";

export function Panel({
  title,
  subtitle,
  eyebrow,
  right,
  className,
  bodyClassName,
  children,
}: {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  right?: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "glass rounded-lg overflow-hidden flex flex-col",
        "transition-colors animate-fade-in",
        className,
      )}
    >
      {(title || eyebrow || right) && (
        <header className="flex items-start justify-between gap-3 px-4 pt-3 pb-2.5 border-b hairline">
          <div className="min-w-0">
            {eyebrow && <div className="label-eyebrow mb-0.5">{eyebrow}</div>}
            {title && (
              <h2 className="text-[13px] font-semibold tracking-tight text-white truncate">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-[11.5px] text-ink-400 mt-0.5 truncate">{subtitle}</p>
            )}
          </div>
          {right && <div className="shrink-0">{right}</div>}
        </header>
      )}
      <div className={cn("flex-1 min-h-0", bodyClassName)}>{children}</div>
    </section>
  );
}
