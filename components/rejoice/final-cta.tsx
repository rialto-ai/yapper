import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#07111F]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-[#2563EB]/20 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#6D28D9]/25 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[820px] px-6 py-28 text-center lg:py-36">
        <Reveal>
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] leading-[1.12] text-white md:text-[36px] lg:text-[44px]">
            The next century of Gospel work will be shaped by infrastructure.
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-[17px] leading-[1.65] text-[#94A3B8] md:text-[18px]">
            Rejoice Foundation exists to research and build that infrastructure with
            theological seriousness, technical excellence, and global ambition.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:contact@rejoice.foundation"
              className="inline-flex items-center justify-center gap-2 rounded-[9px] bg-white px-6 py-3 text-[15px] font-medium text-[#07111F] transition-colors hover:bg-[#F1F5F9]"
            >
              Begin a Partnership
              <ArrowRight size={16} />
            </a>
            <a
              href="mailto:contact@rejoice.foundation"
              className="inline-flex items-center justify-center gap-2 rounded-[9px] border border-white/20 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-white/5"
            >
              Contact the Foundation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
