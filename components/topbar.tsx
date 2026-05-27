"use client";

import { Search, Plus } from "lucide-react";

export function Topbar() {
  return (
    <header className="h-[56px] border-b border-border bg-white flex items-center justify-between px-6 sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search catalog, artists, releases..."
            className="w-[320px] h-[34px] pl-9 pr-3 rounded-md border border-border bg-surface text-[13px] placeholder:text-muted focus:outline-none focus:border-border-strong"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-[11px] font-medium text-muted bg-surface px-2.5 py-1 rounded-full border border-border">
          Demo Environment
        </span>
        <button className="btn-primary flex items-center gap-1.5 !py-[7px] !px-3 text-[13px]">
          <Plus size={14} />
          Create
        </button>
        <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-[11px] font-medium text-white">
          CM
        </div>
      </div>
    </header>
  );
}
