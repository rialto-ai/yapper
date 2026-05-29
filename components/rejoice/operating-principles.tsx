import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const PRINCIPLES = [
  { no: "01", title: "Theological Seriousness", body: "Technology for Gospel work must be developed with reverence for Scripture, Christian orthodoxy, and the mission of the Church." },
  { no: "02", title: "Technical Excellence", body: "Mission infrastructure should be built with the same quality, rigor, and seriousness as the world's leading technology systems." },
  { no: "03", title: "Global Ambition", body: "The Gospel is for every nation, language, and people. The infrastructure must be global from the beginning." },
  { no: "04", title: "Institutional Trust", body: "Christian organizations need systems that are reliable, secure, transparent, and built for long-term stewardship." },
  { no: "05", title: "Open-Handed Partnership", body: "The Foundation exists to serve churches, ministries, researchers, creators, and Christian institutions, not replace them." },
  { no: "06", title: "Long-Term Stewardship", body: "The work is not a campaign. It is infrastructure for decades of Gospel communication." },
];

export function OperatingPrinciples() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
      <SectionHeading
        eyebrow="Operating Principles"
        title="Built with conviction and care."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-[#E2E8F0] md:grid-cols-2 lg:grid-cols-3">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.no} delay={(i % 3) * 70}>
            <div className="h-full bg-white p-7">
              <span className="text-[13px] font-semibold tracking-[0.12em] text-[#2563EB]">
                {p.no}
              </span>
              <h3 className="mt-3 text-[17px] font-semibold tracking-[-0.01em] text-[#0F172A]">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[#64748B]">
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
