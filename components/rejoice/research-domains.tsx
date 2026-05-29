import { Radio, Bot, Boxes, Languages, Building2 } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const DOMAINS = [
  {
    icon: Radio,
    title: "Gospel Media Infrastructure",
    body: "Research into the systems required to create, finance, distribute, localize, archive, and preserve Christian media globally.",
    topics: [
      "Christian content distribution",
      "Media rights and licensing",
      "Creator infrastructure",
      "Publishing systems",
      "Music, video, and education platforms",
      "Global Christian media networks",
      "Content provenance and attribution",
      "Long-term archival systems",
    ],
  },
  {
    icon: Bot,
    title: "Artificial Intelligence and Agents",
    body: "Research into faithful, trusted, and mission-aligned AI systems for Christian institutions, ministries, churches, educators, and creators.",
    topics: [
      "Christian AI agents",
      "Bible and theology assistants",
      "Translation and localization agents",
      "Ministry workflow agents",
      "Content production agents",
      "Mission research agents",
      "Church operations agents",
      "Trusted Christian knowledge systems",
    ],
  },
  {
    icon: Boxes,
    title: "Protocol and Platform Infrastructure",
    body: "Research into open and interoperable infrastructure for Gospel content, Christian knowledge, distribution, identity, provenance, and trust.",
    topics: [
      "Christian media protocols",
      "Content identity systems",
      "Rights infrastructure",
      "Licensing standards",
      "Trusted knowledge graphs",
      "Institutional data infrastructure",
      "Theological metadata systems",
      "Gospel content discovery systems",
    ],
  },
  {
    icon: Languages,
    title: "Global Mission and Translation",
    body: "Research into how Christian content can reach more people, in more languages, with greater fidelity and lower cost.",
    topics: [
      "Bible teaching localization",
      "Multilingual content systems",
      "Accessibility infrastructure",
      "Mobile-first ministry tools",
      "Low-bandwidth distribution",
      "Emerging market infrastructure",
      "Diaspora communities",
      "Mission field communication systems",
    ],
  },
  {
    icon: Building2,
    title: "Christian Institutions and Technology",
    body: "Research into how churches, seminaries, schools, publishers, labels, ministries, and mission organizations can responsibly adopt modern technology.",
    topics: [
      "AI adoption frameworks",
      "Digital transformation for ministries",
      "Christian education infrastructure",
      "Media strategy",
      "Institutional archives",
      "Data stewardship",
      "Privacy and security",
      "Long-term technology governance",
    ],
  },
];

export function ResearchDomains() {
  return (
    <section id="research" className="bg-[#F5F8FF]">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Research Domains"
          title="Research domains shaping the future of Gospel communication."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {DOMAINS.map((d, i) => (
            <Reveal
              key={d.title}
              delay={(i % 2) * 90}
              className={i === DOMAINS.length - 1 ? "md:col-span-2" : undefined}
            >
              <div className="group relative h-full overflow-hidden rounded-[14px] border border-[#E2E8F0] bg-white p-7 transition-all duration-300 hover:border-[#C7D2FE] hover:shadow-[0_16px_50px_-22px_rgba(37,99,235,0.35)]">
                {/* hover accent line */}
                <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#2563EB] to-[#6D28D9] transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#F5F8FF] text-[#2563EB] transition-colors group-hover:bg-gradient-to-br group-hover:from-[#2563EB] group-hover:to-[#6D28D9] group-hover:text-white">
                    <d.icon size={20} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="text-[19px] font-semibold tracking-[-0.01em] text-[#0F172A]">
                      {d.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-[1.6] text-[#64748B]">
                      {d.body}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-[#EEF2F7] pt-5">
                  {d.topics.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-[#F8FAFC] px-2.5 py-1 text-[12.5px] text-[#475569]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
