"use client";

import { useState } from "react";

const recommendedActions = [
  "Finalize chord chart",
  "Confirm songwriter splits",
  "Prepare worship leader one-sheet",
  "Submit DSP pitch",
  "Prepare YouTube premiere",
  "Create 10 short-form clips",
  "Send to church network",
  "Review publishing registration",
];

const riskFlags = [
  "Producer points not yet finalized",
  "YouTube Content ID rights unconfirmed",
  "Limited audience data for NZ market",
];

export default function AIStrategistPage() {
  const [songTitle, setSongTitle] = useState("Light of the World");
  const [artist, setArtist] = useState("Elias James");
  const [scriptureRef, setScriptureRef] = useState("Psalm 27:1");
  const [releaseDate, setReleaseDate] = useState("2026-05-10");
  const [budget, setBudget] = useState("A$3,500");
  const [artistStage, setArtistStage] = useState("Emerging");
  const [serviceTier, setServiceTier] = useState("Self-Service");
  const [primaryObjective, setPrimaryObjective] = useState("Streaming growth");
  const [targetAudience, setTargetAudience] = useState("Young adult worship, church planters");
  const [priorityTerritories, setPriorityTerritories] = useState("AU, US, NZ");
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const handleGenerate = () => {
    setLoading(true);
    setGenerated(false);
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
      setCheckedItems({});
    }, 1500);
  };

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const inputClass =
    "w-full px-3 py-2 text-[13px] border border-border rounded-lg bg-white focus:outline-none focus:border-[rgb(var(--border-strong))] transition-colors";
  const selectClass =
    "w-full px-3 py-2 text-[13px] border border-border rounded-lg bg-white focus:outline-none focus:border-[rgb(var(--border-strong))] transition-colors appearance-none";
  const labelClass = "block text-[12px] font-medium text-muted mb-1.5";

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">AI Release Strategist</h1>
        <p className="text-[13px] text-muted mt-1">
          Data-informed release planning and campaign recommendations.
        </p>
      </div>

      <div className="flex gap-6 items-start">
        {/* Input Section */}
        <div className="w-[60%]">
          <div className="card p-5">
            <h2 className="text-[14px] font-semibold mb-4">Release Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Song title</label>
                <input
                  type="text"
                  value={songTitle}
                  onChange={(e) => setSongTitle(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Artist</label>
                <input
                  type="text"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Scripture reference</label>
                <input
                  type="text"
                  value={scriptureRef}
                  onChange={(e) => setScriptureRef(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Release date</label>
                <input
                  type="text"
                  value={releaseDate}
                  onChange={(e) => setReleaseDate(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Budget</label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Artist stage</label>
                <select
                  value={artistStage}
                  onChange={(e) => setArtistStage(e.target.value)}
                  className={selectClass}
                >
                  <option>Emerging</option>
                  <option>Growing</option>
                  <option>Established</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Service tier</label>
                <select
                  value={serviceTier}
                  onChange={(e) => setServiceTier(e.target.value)}
                  className={selectClass}
                >
                  <option>Self-Service</option>
                  <option>Managed</option>
                  <option>Label Services</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Primary objective</label>
                <select
                  value={primaryObjective}
                  onChange={(e) => setPrimaryObjective(e.target.value)}
                  className={selectClass}
                >
                  <option>Streaming growth</option>
                  <option>Worship adoption</option>
                  <option>Church network growth</option>
                  <option>Christian radio</option>
                  <option>YouTube growth</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className={labelClass}>Target audience</label>
                <input
                  type="text"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="col-span-2">
                <label className={labelClass}>Priority territories</label>
                <input
                  type="text"
                  value={priorityTerritories}
                  onChange={(e) => setPriorityTerritories(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
            <div className="mt-5">
              <button onClick={handleGenerate} disabled={loading} className="btn-primary">
                {loading ? "Generating..." : "Generate Strategy"}
              </button>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="w-[40%]">
          {!generated && !loading && (
            <div className="card p-5">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-[rgb(var(--surface))] flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p className="text-[14px] font-medium mb-1">No strategy generated</p>
                <p className="text-[12px] text-muted">Fill in the release details and click Generate Strategy to receive data-informed recommendations.</p>
              </div>
            </div>
          )}

          {loading && (
            <div className="card p-5">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-8 h-8 border-2 border-[rgb(var(--border))] border-t-[rgb(var(--foreground))] rounded-full animate-spin mb-4" />
                <p className="text-[13px] text-muted">Analyzing release data and generating strategy...</p>
              </div>
            </div>
          )}

          {generated && !loading && (
            <div className="card p-5 space-y-5">
              <h2 className="text-[14px] font-semibold">Generated Strategy</h2>

              <div>
                <h3 className="text-[13px] font-semibold mb-1.5">Positioning</h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  This release should be positioned as a Scripture-rooted worship single for churches seeking accessible songs around renewal, surrender, and hope.
                </p>
              </div>

              <div>
                <h3 className="text-[13px] font-semibold mb-1.5">Priority Strategy</h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  Lead with worship leader outreach, lyric video distribution, acoustic content, playlist pitching, and church resource preparation before broader advertising spend.
                </p>
              </div>

              <div>
                <h3 className="text-[13px] font-semibold mb-1.5">Audience Profile</h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  Primary: Worship leaders and music directors (25-45). Secondary: Young adult congregants, church planters, and independent worship communities across Australia and New Zealand.
                </p>
              </div>

              <div>
                <h3 className="text-[13px] font-semibold mb-1.5">DSP Strategy</h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  Submit to Spotify editorial 4 weeks before release. Target New Music Friday Christian, Worship Now, and Fresh Worship playlists. Prepare Apple Music pitch for worship and Christian categories.
                </p>
              </div>

              <div>
                <h3 className="text-[13px] font-semibold mb-1.5">Church Outreach Plan</h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  Distribute chord chart and lead sheet to 200+ churches via worship leader network. Prepare devotional content pack with Scripture references. Target church planning platforms for Sunday setlist inclusion.
                </p>
              </div>

              <div>
                <h3 className="text-[13px] font-semibold mb-1.5">Recommended Actions</h3>
                <div className="space-y-2">
                  {recommendedActions.map((action, i) => (
                    <label key={i} className="flex items-center gap-2.5 text-[13px] cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={!!checkedItems[i]}
                        onChange={() => toggleCheck(i)}
                        className="w-4 h-4 rounded border-border accent-[rgb(var(--foreground))]"
                      />
                      <span className={checkedItems[i] ? "line-through text-muted" : ""}>{action}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[13px] font-semibold mb-1.5">Risk Flags</h3>
                <div className="space-y-1.5">
                  {riskFlags.map((flag, i) => (
                    <div key={i} className="flex items-start gap-2 text-[13px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1] mt-1.5 shrink-0" />
                      <span className="text-muted">{flag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
