import { Languages, FlaskConical, Settings2, Clapperboard, Globe2, Share2 } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { NetworkVisual } from "./network-visual";

const AGENTS = [
  { icon: Languages, title: "Translation Agents", body: "Support multilingual Gospel communication, localization, and accessibility." },
  { icon: FlaskConical, title: "Research Agents", body: "Assist Christian researchers, theologians, educators, and institutions with structured knowledge workflows." },
  { icon: Settings2, title: "Ministry Operations Agents", body: "Support churches and ministries with administrative, communications, and organizational workflows." },
  { icon: Clapperboard, title: "Media Production Agents", body: "Assist creators and publishers with content preparation, metadata, formatting, distribution, and archiving." },
  { icon: Globe2, title: "Mission Intelligence Agents", body: "Help mission organizations understand regions, languages, media gaps, and distribution opportunities." },
  { icon: Share2, title: "Knowledge Graph Agents", body: "Structure Christian knowledge, biblical references, teaching resources, archives, and institutional data." },
];

export function AIAgents() {
  return (
    <section className="bg-[#F7F4FF]">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <SectionHeading
            eyebrow="AI and Agents"
            title="AI agents for mission-aligned work."
            body="The Foundation researches and develops agentic systems that help Christian institutions translate, teach, publish, preserve, operate, and distribute Gospel content with theological care and institutional trust."
            className="max-w-none"
          />
          <Reveal delay={120} className="hidden lg:block">
            <NetworkVisual />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AGENTS.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 80}>
              <div className="group h-full rounded-[14px] border border-[#E2E8F0] bg-white p-6 transition-all duration-300 hover:border-[#C7D2FE] hover:shadow-[0_14px_44px_-22px_rgba(109,40,217,0.35)]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-[9px] bg-white text-[#6D28D9] ring-1 ring-[#EDE9FE] transition-colors group-hover:bg-gradient-to-br group-hover:from-[#2563EB] group-hover:to-[#6D28D9] group-hover:text-white group-hover:ring-transparent">
                  <a.icon size={19} strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.01em] text-[#0F172A]">
                  {a.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#64748B]">
                  {a.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
