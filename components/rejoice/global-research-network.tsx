import { Reveal } from "./reveal";

const REGIONS: { region: string; cities: string[] }[] = [
  { region: "North America", cities: ["New York", "San Francisco", "Los Angeles", "Toronto"] },
  { region: "Europe", cities: ["London", "Berlin", "Geneva"] },
  { region: "Asia-Pacific", cities: ["Sydney", "Singapore", "Seoul", "Tokyo", "Hong Kong", "Manila", "Jakarta"] },
  { region: "Middle East", cities: ["Dubai", "Jerusalem"] },
  { region: "Africa", cities: ["Nairobi", "Lagos", "Cape Town"] },
  { region: "Latin America", cities: ["São Paulo", "Mexico City"] },
  { region: "South Asia", cities: ["Mumbai"] },
];

export function GlobalResearchNetwork() {
  return (
    <section id="network" className="relative overflow-hidden border-y border-[#E2E8F0] bg-[#07111F]">
      {/* atmospheric glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-[#2563EB]/20 blur-[120px]" />
        <div className="absolute right-[8%] bottom-0 h-72 w-72 rounded-full bg-[#6D28D9]/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-[760px]">
          <p className="rf-eyebrow mb-4">Global Research Network</p>
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] leading-[1.12] text-white md:text-[32px] lg:text-[40px]">
            Designed for global reach.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.65] text-[#94A3B8] md:text-[18px]">
            Rejoice Foundation is structured as a distributed research initiative
            across major cultural, technological, financial, and missionary centers.
            The Foundation&rsquo;s global network enables research, partnerships, pilots,
            and infrastructure initiatives across North America, Europe, Asia-Pacific,
            Africa, Latin America, and the Middle East.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#60A5FA]">
            Global research locations include
          </p>
          <div className="mt-7 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((r) => (
              <div key={r.region}>
                <h3 className="mb-3.5 flex items-center gap-2 text-[13px] font-semibold text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rf-node-pulse" />
                  {r.region}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {r.cities.map((city) => (
                    <span
                      key={city}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] text-[#CBD5E1] transition-colors hover:border-[#3B82F6]/40 hover:text-white"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
