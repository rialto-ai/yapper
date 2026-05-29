import { Microscope, Network, AppWindow } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const CARDS = [
  {
    icon: Microscope,
    title: "Research",
    body: "Original research into Christian media, artificial intelligence, global mission, translation, distribution, and institutional technology.",
  },
  {
    icon: Network,
    title: "Infrastructure",
    body: "Protocol systems, rights infrastructure, content provenance, knowledge graphs, AI-ready archives, and trusted distribution rails.",
  },
  {
    icon: AppWindow,
    title: "Applications",
    body: "Practical tools and platforms for churches, ministries, missionaries, educators, creators, publishers, and Christian institutions.",
  },
];

export function InstitutionalOverview() {
  return (
    <section id="mission" className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
      <SectionHeading
        eyebrow="Institutional Overview"
        title="A research foundation for Gospel infrastructure."
        body="Rejoice Foundation exists to study, design, and build the systems required for the Gospel of Jesus Christ to be created, translated, distributed, preserved, discovered, and understood across every language, nation, platform, and medium."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {CARDS.map((card, i) => (
          <Reveal key={card.title} delay={i * 90}>
            <div className="group h-full rounded-[14px] border border-[#E2E8F0] bg-white p-7 transition-all duration-300 hover:border-[#C7D2FE] hover:shadow-[0_12px_40px_-18px_rgba(37,99,235,0.35)]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#F5F8FF] text-[#2563EB] transition-colors group-hover:bg-gradient-to-br group-hover:from-[#2563EB] group-hover:to-[#6D28D9] group-hover:text-white">
                <card.icon size={20} strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.01em] text-[#0F172A]">
                {card.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#64748B]">
                {card.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
