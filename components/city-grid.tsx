import { Reveal } from "@/components/reveal";

export function CityGrid({ cities }: { cities: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {cities.map((city, i) => (
        <Reveal key={city} delay={Math.min(i * 0.03, 0.3)}>
          <div className="card flex items-center gap-3 px-5 py-4">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span className="text-[15px] font-medium tracking-tight">{city}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
