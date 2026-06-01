import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function ContentPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        {/* Page header band */}
        <section className="border-b border-border bg-surface px-6 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20">
          <div className="mx-auto max-w-prose">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft size={14} />
              Back to home
            </a>
            <p className="eyebrow mt-6 mb-3">{eyebrow}</p>
            <h1 className="text-balance text-[32px] font-semibold leading-[1.1] tracking-tightest sm:text-[42px]">
              {title}
            </h1>
            {intro && (
              <p className="mt-5 text-[16px] leading-relaxed text-subtle sm:text-[17px]">
                {intro}
              </p>
            )}
            {updated && (
              <p className="mt-5 text-[13px] text-muted">Last updated {updated}</p>
            )}
          </div>
        </section>

        {/* Body */}
        <section className="px-6 py-16 sm:px-8 sm:py-20">
          <div className="prose-content mx-auto max-w-prose">{children}</div>
        </section>

        <DraftNotice />
      </main>
      <Footer />
    </>
  );
}

export function Section({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-10 first:mt-0">
      <h2 className="text-[20px] font-semibold tracking-tight">{heading}</h2>
      <div className="mt-3 space-y-4 text-[15.5px] leading-relaxed text-subtle">
        {children}
      </div>
    </div>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2.5">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function DraftNotice() {
  return (
    <div className="px-6 pb-16 sm:px-8">
      <div className="mx-auto max-w-prose rounded-xl border border-border bg-surface px-5 py-4">
        <p className="text-[13.5px] leading-relaxed text-muted">
          This page describes Rejoice&rsquo;s intended approach ahead of our Q4
          2026 launch. It is a working draft and not yet a binding legal
          agreement. Questions?{" "}
          <a
            href="mailto:hello@rejoice.org"
            className="font-medium text-accent hover:underline"
          >
            hello@rejoice.org
          </a>
        </p>
      </div>
    </div>
  );
}
