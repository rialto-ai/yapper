import { ArrowRight } from "lucide-react";
import { NetworkVisual } from "./network-visual";

const METRICS = [
  "Global Research Network",
  "AI and Agent Systems",
  "Gospel Media Infrastructure",
  "Protocol and Platform Layer",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* atmospheric background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F8FF] via-white to-white" />
        <div className="absolute -top-32 left-1/2 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-[#3B82F6]/10 blur-[120px]" />
        <div className="absolute right-0 top-24 h-[360px] w-[420px] rounded-full bg-[#8B5CF6]/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="rf-reveal is-visible">
          <p className="rf-eyebrow mb-6">Global Christian Research Foundation</p>
          <h1 className="text-[34px] font-semibold tracking-[-0.025em] leading-[1.06] text-[#0F172A] md:text-[44px] lg:text-[64px]">
            Researching and building the infrastructure of the{" "}
            <span className="rf-gradient-text">Great Commission.</span>
          </h1>
          <p className="mt-7 max-w-[560px] text-[17px] leading-[1.6] text-[#475569] md:text-[18px]">
            Rejoice Foundation is a global Christian research foundation developing
            Gospel media systems, AI agents, protocol infrastructure, and digital
            platforms for churches, ministries, creators, researchers, and Christian
            institutions worldwide.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#mission"
              className="inline-flex items-center justify-center gap-2 rounded-[9px] bg-[#0F172A] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#1E293B]"
            >
              Explore the Mission
              <ArrowRight size={16} />
            </a>
            <a
              href="#research"
              className="inline-flex items-center justify-center gap-2 rounded-[9px] border border-[#E2E8F0] bg-white px-6 py-3 text-[15px] font-medium text-[#0F172A] transition-colors hover:border-[#CBD5E1] hover:bg-[#F8FAFC]"
            >
              View Research Areas
            </a>
          </div>
        </div>

        <div className="rf-reveal is-visible">
          <NetworkVisual />
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="rf-animated-line" />
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-none border-y border-[#E2E8F0] bg-[#E2E8F0] lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m} className="bg-white px-5 py-6">
              <p className="text-[13px] font-medium leading-snug text-[#334155]">
                {m}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
