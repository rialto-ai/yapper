import type { Metadata } from "next";
import { UnlockForm } from "./unlock-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Preview access",
  robots: { index: false, follow: false },
};

export default async function UnlockPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const params = await searchParams;
  const nextRaw = params.next ?? "/";
  const next =
    nextRaw.startsWith("/") && !nextRaw.startsWith("//") ? nextRaw : "/";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <div className="eyebrow">{site.short} · Sydney</div>
          <h1 className="mt-3 text-3xl font-medium tracking-tight">
            {site.name}
          </h1>
          <p className="mt-3 text-[14px] text-subtle">
            Preview access — enter password to continue.
          </p>
        </div>
        <UnlockForm next={next} />
        <p className="mt-10 text-center text-[12px] text-muted">
          {site.tagline}
        </p>
      </div>
    </div>
  );
}
