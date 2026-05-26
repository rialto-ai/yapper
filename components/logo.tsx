import { cn } from "@/lib/utils";

export function Logo({
  size = 24,
  withWordmark = true,
  className,
}: {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Mark size={size} />
      {withWordmark && (
        <span className="font-semibold text-[15px] tracking-tight text-foreground">
          Paideia
        </span>
      )}
    </div>
  );
}

export function Mark({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Paideia"
      role="img"
    >
      <rect
        x="3"
        y="6"
        width="26"
        height="20"
        rx="2"
        fill="rgb(var(--accent))"
      />
      <path
        d="M10 12h12M10 16h8M10 20h10"
        stroke="rgb(var(--accent-foreground))"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
