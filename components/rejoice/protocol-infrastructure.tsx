import { Fingerprint, GitBranch, ScrollText, Languages, Search, Archive } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const PRIMITIVES = [
  { icon: Fingerprint, title: "Identity", body: "Trusted identifiers for institutions, creators, works, collections, and content." },
  { icon: GitBranch, title: "Provenance", body: "Systems for attribution, source integrity, authorship, history, and content lineage." },
  { icon: ScrollText, title: "Rights", body: "Infrastructure for licensing, permissions, royalties, publishing, and institutional media stewardship." },
  { icon: Languages, title: "Translation", body: "Rails for multilingual content, localization workflows, accessibility, and regional distribution." },
  { icon: Search, title: "Discovery", body: "Search, recommendation, metadata, knowledge graphs, and distribution infrastructure for Gospel content." },
  { icon: Archive, title: "Archives", body: "Long-term preservation systems for Christian media, teaching, research, and institutional knowledge." },
];

export function ProtocolInfrastructure() {
  return (
    <section id="infrastructure" className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
      <SectionHeading
        eyebrow="Protocol Infrastructure"
        title="Infrastructure beneath the interface."
        body="Rejoice Foundation researches protocol and platform systems that can support Christian media, trusted knowledge, rights management, content provenance, translation, and global discovery."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-[#E2E8F0] sm:grid-cols-2 lg:grid-cols-3">
        {PRIMITIVES.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 70}>
            <div className="group h-full bg-white p-7 transition-colors hover:bg-[#F5F8FF]">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] bg-gradient-to-br from-[#2563EB] to-[#6D28D9] text-white">
                  <p.icon size={17} strokeWidth={1.7} />
                </span>
                <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-[#0F172A]">
                  {p.title}
                </h3>
              </div>
              <p className="mt-3.5 text-[14px] leading-[1.6] text-[#64748B]">
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
