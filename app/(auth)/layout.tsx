import Link from "next/link";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background grid grid-cols-1 lg:grid-cols-[1fr_minmax(420px,_520px)]">
      {/* Left brand pane (desktop only) */}
      <div className="hidden lg:flex flex-col justify-between p-10 border-r border-border bg-surface relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(234, 88, 12, 0.12), transparent 60%)",
          }}
        />
        <Link href="/" className="relative inline-flex items-center gap-2.5">
          <Logo size={22} />
        </Link>

        <div className="relative max-w-[420px]">
          <blockquote className="text-[20px] font-medium leading-snug text-foreground">
            “Rialto is the first dashboard that actually changes how I think
            about who matters in this ecosystem. The leaderboard is
            uncomfortably accurate.”
          </blockquote>
          <div className="mt-5 flex items-center gap-3">
            <div className="size-9 rounded-full bg-surface-2 border border-border grid place-items-center text-[11px] font-medium text-muted">
              EV
            </div>
            <div>
              <div className="text-[13px] font-medium text-foreground">Erik Voorhees</div>
              <div className="text-[12px] text-muted">Founder, ShapeShift</div>
            </div>
          </div>
        </div>

        <div className="relative text-[11.5px] text-muted">
          © 2026 Rialto AI, Inc. SOC 2 Type II in progress.
        </div>
      </div>

      {/* Right form pane */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between p-5">
          <Link href="/" className="text-[12.5px] text-muted hover:text-foreground transition-colors">
            ← Back to home
          </Link>
          <ThemeToggle />
        </div>
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-[400px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
