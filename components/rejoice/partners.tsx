import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const CATEGORIES = [
  "Churches and Ministries",
  "Mission Organizations",
  "Christian Media and Publishing",
  "Seminaries and Schools",
  "Technology Builders",
  "Researchers and Theologians",
  "Philanthropists and Institutions",
];

export function Partners() {
  return (
    <section id="partner" className="bg-[#F7F4FF]">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Institutional Partners"
          title="Serving the global Christian ecosystem."
          body="Rejoice Foundation is designed to partner with churches, ministries, publishers, seminaries, schools, media organizations, mission agencies, technologists, researchers, and philanthropists committed to advancing the Gospel through faithful infrastructure."
        />

        <Reveal delay={120} className="mt-12">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((c) => (
              <span
                key={c}
                className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2.5 text-[14px] font-medium text-[#334155] transition-colors hover:border-[#C7D2FE] hover:text-[#0F172A]"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[9px] bg-gradient-to-r from-[#2563EB] to-[#6D28D9] px-6 py-3 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Partner With Rejoice Foundation
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
