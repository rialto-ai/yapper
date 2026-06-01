import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type Tone = "default" | "stone" | "ink";

const toneClasses: Record<Tone, string> = {
  default: "bg-background text-foreground",
  stone: "bg-surface text-foreground",
  ink: "bg-ink text-[#E8E6E1]",
};

export function SectionContainer({
  id,
  eyebrow,
  heading,
  intro,
  tone = "default",
  align = "left",
  children,
  className,
  innerClassName,
}: {
  id?: string;
  eyebrow?: string;
  heading?: ReactNode;
  intro?: ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  const isInk = tone === "ink";
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 px-6 py-20 sm:px-8 sm:py-28",
        toneClasses[tone],
        isInk ? "border-y border-white/10" : "",
        className
      )}
    >
      <div className={cn("mx-auto max-w-content", innerClassName)}>
        {(eyebrow || heading || intro) && (
          <Reveal>
            <div
              className={cn(
                "max-w-prose",
                align === "center" && "mx-auto text-center"
              )}
            >
              {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
              {heading && (
                <h2 className="text-balance text-[28px] font-semibold leading-[1.12] tracking-tightest sm:text-[38px]">
                  {heading}
                </h2>
              )}
              {intro && (
                <p
                  className={cn(
                    "mt-5 text-[16px] leading-relaxed sm:text-[17px]",
                    isInk ? "text-[#B9B6AF]" : "text-subtle"
                  )}
                >
                  {intro}
                </p>
              )}
            </div>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
