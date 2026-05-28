"use client";

import { useState } from "react";

interface TabsProps {
  tabs: string[];
  children: (activeTab: string) => React.ReactNode;
}

export function Tabs({ tabs, children }: TabsProps) {
  const [active, setActive] = useState(tabs[0]);

  return (
    <div>
      <div className="flex gap-0 border-b border-border mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2.5 text-[13px] font-medium border-b-2 -mb-px transition-colors ${
              active === tab
                ? "border-accent text-accent"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {children(active)}
    </div>
  );
}
