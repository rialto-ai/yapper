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
    <section className={cn("card card-interactive overflow-hidden flex flex-col animate-fade-in", className)}>
      {(title || eyebrow || right) && (
        <header className="flex items-start justify-between gap-3 px-5 pt-4 pb-3 border-b border-border">
          <div className="min-w-0">
            {eyebrow && <div className="label-eyebrow mb-1">{eyebrow}</div>}
            {title && (
              <h2 className="text-[14px] font-semibold tracking-tight text-foreground truncate">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-[12.5px] text-muted mt-0.5 truncate">{subtitle}</p>
            )}
          </div>
          {right && <div className="shrink-0">{right}</div>}
        </header>
      )}
      <div className={cn("flex-1 min-h-0", bodyClassName)}>{children}</div>
    </section>
  );
}
