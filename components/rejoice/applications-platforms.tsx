import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const USERS = [
  { title: "Churches", body: "Tools to organize, distribute, and preserve teaching and worship content for their congregations." },
  { title: "Ministries", body: "Operational, communications, and content systems that scale outreach without scaling overhead." },
  { title: "Mission Organizations", body: "Localization, distribution, and field-intelligence infrastructure for global mission work." },
  { title: "Christian Publishers", body: "Rights, metadata, provenance, and distribution rails built for long-term catalog stewardship." },
  { title: "Christian Music Companies", body: "Licensing, royalty, and discovery infrastructure purpose-built for Gospel media." },
  { title: "Seminaries", body: "Knowledge graphs, archives, and research agents that support theological scholarship." },
  { title: "Schools and Bible Colleges", body: "Education infrastructure and AI tools that extend faithful teaching at scale." },
  { title: "Creators and Educators", body: "Production, formatting, and distribution agents that free creators to focus on the message." },
  { title: "Developers and Researchers", body: "Open protocols, datasets, and interfaces to build trusted Gospel applications." },
  { title: "Philanthropists and Institutions", body: "Durable, transparent infrastructure worthy of long-term, mission-aligned investment." },
];

export function ApplicationsPlatforms() {
  return (
    <section className="bg-[#F5F8FF]">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Applications and Platforms"
          title="From research to usable systems."
          body="The Foundation turns deep research and infrastructure into practical tools for the people and institutions doing Gospel work every day."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {USERS.map((u, i) => (
            <Reveal key={u.title} delay={(i % 4) * 60}>
              <div className="group h-full rounded-[12px] border border-[#E2E8F0] bg-white p-5 transition-all duration-300 hover:border-[#C7D2FE] hover:shadow-[0_12px_36px_-20px_rgba(37,99,235,0.3)]">
                <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#0F172A]">
                  {u.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-[#64748B]">
                  {u.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
