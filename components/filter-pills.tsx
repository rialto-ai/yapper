"use client";

const FILTERS = ["All", "Visual Vernacular", "International Sign", "ASL", "Auslan"];

interface FilterPillsProps {
  active: string;
  onChange: (track: string) => void;
}

export default function FilterPills({ active, onChange }: FilterPillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map((filter) => {
        const value = filter === "All" ? "all" : filter.toLowerCase().replace(/\s+/g, "-");
        const isActive = active === value;

        return (
          <button
            key={filter}
            onClick={() => onChange(value)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-fg text-white"
                : "border border-border bg-white text-fg-secondary hover:bg-surface"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
