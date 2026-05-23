import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export function ClerkNotConfigured({ mode }: { mode: "sign-in" | "sign-up" }) {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="size-9 rounded-full bg-warning/15 text-warning grid place-items-center">
          <AlertTriangle className="size-4" />
        </div>
        <h2 className="text-[15px] font-semibold text-foreground">Auth not configured</h2>
      </div>
      <p className="text-[13.5px] text-muted leading-relaxed">
        Clerk environment variables aren&apos;t set on this deploy yet. Add{" "}
        <code className="text-foreground font-mono text-[12px]">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> and{" "}
        <code className="text-foreground font-mono text-[12px]">CLERK_SECRET_KEY</code> in Vercel and redeploy to enable real {mode === "sign-in" ? "sign-in" : "sign-up"}.
      </p>
      <div className="mt-5 flex items-center gap-2">
        <Link href="/" className="btn-ghost h-9 px-3 text-[13px]">← Back to home</Link>
        <Link href="/app" className="btn-primary h-9 px-3 text-[13px]">Continue to demo</Link>
      </div>
    </div>
  );
}
