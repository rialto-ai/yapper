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
      <div className="hidden lg:flex flex-col justify-between p-10 border-r border-border bg-surface relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 20%, rgb(var(--accent) / 0.10), transparent 60%)",
          }}
        />
        <Link href="/" className="relative inline-flex items-center gap-2.5">
          <Logo size={22} />
        </Link>

        <div className="relative max-w-[420px]">
          <blockquote className="text-[20px] font-medium leading-snug text-foreground">
            &ldquo;Train up a child in the way he should go; even when he is old
            he will not depart from it.&rdquo;
          </blockquote>
          <div className="mt-5 text-[14px] text-muted">
            Proverbs 22:6 (ESV)
          </div>
        </div>

        <div className="relative text-[11.5px] text-muted">
          &copy; 2025 Paideia. Soli Deo Gloria.
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-between p-5">
          <Link
            href="/"
            className="text-[12.5px] text-muted hover:text-foreground transition-colors"
          >
            &larr; Back to home
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
