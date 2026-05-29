import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-[760px]",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <p className="rf-eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold tracking-[-0.02em] leading-[1.12] text-[#0F172A]">
        {title}
      </h2>
      {body && (
        <p className="mt-5 text-[16px] md:text-[18px] leading-[1.65] text-[#64748B]">
          {body}
        </p>
      )}
    </Reveal>
  );
}
