import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const LAYERS = [
  {
    no: "01",
    name: "Research",
    body: "Original research, technical analysis, theological reflection, market mapping, institutional studies, and global mission intelligence.",
  },
  {
    no: "02",
    name: "Protocols",
    body: "Standards, frameworks, data systems, rights infrastructure, provenance systems, and knowledge infrastructure for Christian media and Gospel content.",
  },
  {
    no: "03",
    name: "Applications",
    body: "Tools and platforms for churches, ministries, creators, publishers, educators, missionaries, and Christian institutions.",
  },
  {
    no: "04",
    name: "AI Agents",
    body: "Agentic systems that assist with translation, teaching, research, operations, publishing, distribution, and global mission workflows.",
  },
];

export function FoundationStack() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
      <SectionHeading
        eyebrow="Full-Stack Foundation Model"
        title="Operating across the full stack of Gospel technology."
        body="Rejoice Foundation is not only a think tank. It is a research-led infrastructure foundation operating across research, protocols, applications, and AI agents."
      />

      <div className="mt-14 space-y-3">
        {LAYERS.map((layer, i) => (
          <Reveal key={layer.no} delay={i * 80}>
            <div className="group relative grid items-center gap-4 overflow-hidden rounded-[14px] border border-[#E2E8F0] bg-white p-6 transition-all duration-300 hover:border-[#C7D2FE] md:grid-cols-[auto_220px_1fr] md:gap-8 md:p-7">
              {/* gradient edge that intensifies down the stack */}
              <span
                className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#2563EB] to-[#6D28D9]"
                style={{ opacity: 0.35 + i * 0.2 }}
              />
              <span className="text-[13px] font-semibold tracking-[0.12em] text-[#94A3B8]">
                LAYER {layer.no}
              </span>
              <h3 className="text-[22px] font-semibold tracking-[-0.01em] text-[#0F172A]">
                {layer.name}
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#64748B]">
                {layer.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
