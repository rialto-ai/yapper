"use client";

import { useState } from "react";
import { StatusBadge } from "@/components/status-badge";

const STEPS = [
  "Release Details",
  "Tracks & Assets",
  "Metadata",
  "Christian Metadata",
  "Rights & Splits",
  "Distribution",
  "Campaign",
  "Review",
];

const assets = [
  { name: "Master audio", status: "Approved" },
  { name: "Clean version", status: "Missing" },
  { name: "Instrumental", status: "Missing" },
  { name: "Artwork", status: "Approved" },
  { name: "Lyric file", status: "In Review" },
  { name: "Lyric video", status: "Approved" },
  { name: "Music video", status: "Missing" },
  { name: "Chord chart", status: "Approved" },
  { name: "Lead sheet", status: "Missing" },
  { name: "Press photo", status: "Approved" },
  { name: "Artist bio", status: "Approved" },
  { name: "One-sheet", status: "Missing" },
];

const assetIcons: Record<string, string> = {
  "Master audio": "M9 19V6l12-3v13",
  "Clean version": "M9 19V6l12-3v13",
  Instrumental: "M9 19V6l12-3v13",
  Artwork: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14",
  "Lyric file": "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  "Lyric video": "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  "Music video": "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  "Chord chart": "M9 19V6l12-3v13",
  "Lead sheet": "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  "Press photo": "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14",
  "Artist bio": "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  "One-sheet": "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
};

const splitParticipants = [
  { name: "Primary Artist", master: "40%", publishing: "0%" },
  { name: "Featured Artist", master: "5%", publishing: "0%" },
  { name: "Producer", master: "5%", publishing: "0%" },
  { name: "Songwriter A", master: "0%", publishing: "50%" },
  { name: "Songwriter B", master: "0%", publishing: "25%" },
  { name: "Publishing Administrator", master: "0%", publishing: "15%" },
  { name: "Distribution Platform", master: "0%", publishing: "0%", note: "15% fee" },
  { name: "Marketing Recoupment Pool", master: "-", publishing: "-", note: "Noted separately" },
];

const dspList = [
  { name: "Spotify", checked: true },
  { name: "Apple Music", checked: true },
  { name: "YouTube Music", checked: true },
  { name: "Amazon Music", checked: true },
  { name: "TikTok", checked: true },
  { name: "Deezer", checked: false },
  { name: "Tidal", checked: false },
  { name: "Pandora", checked: false },
  { name: "SoundCloud", checked: false },
  { name: "Audiomack", checked: false },
];

const christianChannels = [
  { name: "Christian playlist network", checked: true },
  { name: "Church worship leader network", checked: true },
  { name: "Christian radio servicing", checked: false },
  { name: "Worship resource partners", checked: false },
  { name: "Church licensing workflow", checked: false },
];

const complianceItems = [
  { label: "Metadata complete", status: "checked" },
  { label: "Assets approved", status: "partial", detail: "7 of 12" },
  { label: "Rights confirmed", status: "checked" },
  { label: "Splits confirmed", status: "pending" },
  { label: "Publishing status reviewed", status: "checked" },
  { label: "YouTube rights reviewed", status: "pending" },
  { label: "Territories selected", status: "checked" },
  { label: "Christian metadata complete", status: "checked" },
  { label: "Campaign plan attached", status: "checked" },
  { label: "Ready for distribution", status: "blocked", detail: "Resolve pending items" },
];

function InputField({ label, defaultValue, type = "text" }: { label: string; defaultValue?: string; type?: string }) {
  return (
    <div>
      <label className="block text-[12px] font-medium text-muted mb-1.5">{label}</label>
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={label}
        className="w-full px-3 py-2 text-[13px] bg-background border border-border rounded-md focus:outline-none focus:border-border-strong"
      />
    </div>
  );
}

function SelectField({ label, options, defaultValue }: { label: string; options: string[]; defaultValue?: string }) {
  return (
    <div>
      <label className="block text-[12px] font-medium text-muted mb-1.5">{label}</label>
      <select
        defaultValue={defaultValue}
        className="w-full px-3 py-2 text-[13px] bg-background border border-border rounded-md focus:outline-none focus:border-border-strong appearance-none"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function TextareaField({ label, defaultValue }: { label: string; defaultValue?: string }) {
  return (
    <div>
      <label className="block text-[12px] font-medium text-muted mb-1.5">{label}</label>
      <textarea
        defaultValue={defaultValue}
        placeholder={label}
        rows={3}
        className="w-full px-3 py-2 text-[13px] bg-background border border-border rounded-md focus:outline-none focus:border-border-strong resize-none"
      />
    </div>
  );
}

function ToggleField({ label, defaultChecked = false }: { label: string; defaultChecked?: boolean }) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-[13px]">{label}</span>
      <button
        type="button"
        onClick={() => setOn(!on)}
        className={`relative w-9 h-5 rounded-full transition-colors ${on ? "bg-foreground" : "bg-[#d4d4d4]"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${on ? "translate-x-4" : ""}`}
        />
      </button>
    </div>
  );
}

function CheckboxField({ label, defaultChecked = false }: { label: string; defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <label className="flex items-center gap-2.5 py-1.5 cursor-pointer text-[13px]">
      <span
        onClick={() => setChecked(!checked)}
        className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
          checked ? "bg-foreground border-foreground" : "border-border-strong bg-background"
        }`}
      >
        {checked && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label}
    </label>
  );
}

function StepReleaseDetails() {
  return (
    <div className="card p-6">
      <h2 className="text-[14px] font-semibold mb-5">Release Details</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        <InputField label="Release title" defaultValue="Light of the World" />
        <InputField label="Primary artist" defaultValue="Elias James" />
        <InputField label="Featured artists" />
        <InputField label="Label" defaultValue="Kingdom House Music" />
        <SelectField label="Release type" options={["Single", "EP", "Album"]} defaultValue="Single" />
        <SelectField label="Primary genre" options={["Christian", "Worship", "Gospel", "CCM"]} defaultValue="Christian" />
        <InputField label="Release date" defaultValue="2026-05-10" type="date" />
        <InputField label="Copyright owner" />
        <SelectField label="Territories" options={["Worldwide", "Selected"]} defaultValue="Worldwide" />
      </div>
    </div>
  );
}

function StepTracksAssets() {
  return (
    <div className="card p-6">
      <h2 className="text-[14px] font-semibold mb-5">Tracks & Assets</h2>
      <div className="grid grid-cols-3 gap-4">
        {assets.map((a) => (
          <div key={a.name} className="border border-border rounded-lg p-4 flex items-start gap-3">
            <div className="w-8 h-8 rounded bg-surface flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                <path d={assetIcons[a.name] || "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"} />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[13px] font-medium">{a.name}</p>
              <div className="mt-1">
                <StatusBadge status={a.status} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepMetadata() {
  return (
    <div className="card p-6">
      <h2 className="text-[14px] font-semibold mb-5">Metadata</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        <InputField label="Track title" />
        <InputField label="Display artist" />
        <InputField label="Featured artist" />
        <InputField label="Contributors" />
        <InputField label="Producer" />
        <InputField label="Mixer" />
        <InputField label="ISRC" />
        <InputField label="UPC" />
        <SelectField label="Genre" options={["Christian", "Worship", "Gospel", "CCM", "Contemporary"]} />
        <InputField label="Subgenre" />
        <SelectField label="Language" options={["English", "Spanish", "Portuguese", "Korean", "Other"]} defaultValue="English" />
      </div>
      <div className="mt-4">
        <TextareaField label="Lyrics" />
      </div>
    </div>
  );
}

function StepChristianMetadata() {
  return (
    <div className="card p-6">
      <h2 className="text-[14px] font-semibold mb-5">Christian Metadata</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        <InputField label="Scripture reference" defaultValue="Psalm 27:1" />
        <SelectField
          label="Primary theme"
          options={["Praise", "Worship", "Prayer", "Salvation", "Resurrection", "Lament", "Hope", "Grace", "Faith"]}
          defaultValue="Praise"
        />
        <InputField label="Secondary theme" />
        <SelectField label="Worship suitability" options={["High", "Medium", "Low"]} defaultValue="High" />
        <SelectField label="CCLI status" options={["Listed", "Pending", "Not Listed"]} defaultValue="Pending" />
        <SelectField
          label="Theological review status"
          options={["Approved", "In Review", "Pending"]}
          defaultValue="In Review"
        />
      </div>
      <div className="mt-4 space-y-1 border-t border-border pt-4">
        <ToggleField label="Congregational use" defaultChecked />
        <ToggleField label="Chord chart available" defaultChecked />
        <ToggleField label="Suitable for Sunday setlists" defaultChecked />
      </div>
      <div className="mt-4">
        <TextareaField label="Ministry focus" />
      </div>
    </div>
  );
}

function StepRightsSplits() {
  return (
    <div className="card p-6">
      <h2 className="text-[14px] font-semibold mb-5">Rights & Splits</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-border text-left text-muted">
              <th className="pb-2 font-medium">Participant</th>
              <th className="pb-2 font-medium text-right">Master Share</th>
              <th className="pb-2 font-medium text-right">Publishing Share</th>
              <th className="pb-2 font-medium">Note</th>
            </tr>
          </thead>
          <tbody>
            {splitParticipants.map((p) => (
              <tr key={p.name} className="border-b border-border last:border-0">
                <td className="py-2.5 font-medium">{p.name}</td>
                <td className="py-2.5 text-right text-muted">{p.master}</td>
                <td className="py-2.5 text-right text-muted">{p.publishing}</td>
                <td className="py-2.5 text-muted text-[12px]">{p.note || ""}</td>
              </tr>
            ))}
            <tr className="border-t-2 border-foreground/20">
              <td className="py-2.5 font-semibold">Total</td>
              <td className="py-2.5 text-right font-semibold">50%</td>
              <td className="py-2.5 text-right font-semibold">90%</td>
              <td className="py-2.5 text-muted text-[12px]">Allocated</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StepDistribution() {
  return (
    <div className="card p-6">
      <h2 className="text-[14px] font-semibold mb-5">Distribution & Territories</h2>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-[13px] font-semibold mb-3">DSP Platforms</h3>
          <div className="space-y-1">
            {dspList.map((d) => (
              <CheckboxField key={d.name} label={d.name} defaultChecked={d.checked} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold mb-3">Christian Channels</h3>
          <div className="space-y-1">
            {christianChannels.map((c) => (
              <CheckboxField key={c.name} label={c.name} defaultChecked={c.checked} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border grid grid-cols-2 gap-6">
        <div>
          <p className="text-[12px] font-medium text-muted mb-1">Territory</p>
          <p className="text-[13px] font-medium">Worldwide</p>
        </div>
        <div>
          <p className="text-[12px] font-medium text-muted mb-1">Delivery status</p>
          <StatusBadge status="Queued" />
        </div>
      </div>
    </div>
  );
}

function StepCampaign() {
  return (
    <div className="card p-6">
      <h2 className="text-[14px] font-semibold mb-5">Campaign</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        <InputField label="Campaign owner" />
        <SelectField
          label="Release objective"
          options={["Awareness", "Streaming Growth", "Church Adoption", "Radio Play", "Sync Placement"]}
        />
        <InputField label="Budget" />
        <InputField label="Priority territories" />
      </div>
      <div className="mt-4 border-t border-border pt-4">
        <ToggleField label="Playlist pitching" defaultChecked />
      </div>
      <div className="mt-4 space-y-4">
        <TextareaField label="Church outreach plan" />
        <TextareaField label="YouTube plan" />
      </div>
    </div>
  );
}

function StepReview() {
  return (
    <div className="card p-6">
      <h2 className="text-[14px] font-semibold mb-5">Review & Submit</h2>
      <div className="space-y-3">
        {complianceItems.map((item) => (
          <div key={item.label} className="flex items-center gap-3 text-[13px]">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                item.status === "checked"
                  ? "bg-foreground"
                  : item.status === "partial"
                  ? "bg-[#b4b4b4]"
                  : item.status === "pending"
                  ? "bg-[#d4d4d4]"
                  : "bg-[#e0e0e0]"
              }`}
            >
              {item.status === "checked" ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 6l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : item.status === "partial" ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 6h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : item.status === "pending" ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="1.5" fill="white" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4 4l4 4M8 4l-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </span>
            <span className={item.status === "blocked" ? "font-medium" : ""}>{item.label}</span>
            {item.detail && <span className="text-muted text-[12px]">({item.detail})</span>}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <button
          disabled
          className="btn-primary opacity-40 cursor-not-allowed"
        >
          Submit Release
        </button>
        <p className="text-[12px] text-muted mt-2">
          Cannot submit: resolve all pending and blocked items before submission.
        </p>
      </div>
    </div>
  );
}

const stepComponents = [
  StepReleaseDetails,
  StepTracksAssets,
  StepMetadata,
  StepChristianMetadata,
  StepRightsSplits,
  StepDistribution,
  StepCampaign,
  StepReview,
];

export default function ReleasesPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const StepContent = stepComponents[currentStep];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page header */}
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">Selah Releases</h1>
        <p className="text-[13px] text-muted mt-1">
          Manage every release from intake to launch. Plan, review, schedule, and track Christian music releases across distribution, rights, campaign, YouTube, and worship workflows.
        </p>
      </div>

      {/* Step indicator */}
      <div className="card p-5">
        <div className="flex items-center justify-between">
          {STEPS.map((step, i) => (
            <div key={step} className="flex items-center">
              <button
                onClick={() => setCurrentStep(i)}
                className="flex flex-col items-center gap-1.5 group"
              >
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-semibold transition-colors ${
                    i === currentStep
                      ? "bg-foreground text-white"
                      : i < currentStep
                      ? "bg-[#e0e0e0] text-foreground"
                      : "bg-surface border border-border text-muted"
                  }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`text-[10px] max-w-[80px] text-center leading-tight ${
                    i === currentStep ? "font-semibold text-foreground" : "text-muted"
                  }`}
                >
                  {step}
                </span>
              </button>
              {i < STEPS.length - 1 && (
                <div
                  className={`w-8 h-px mx-1 mt-[-18px] ${
                    i < currentStep ? "bg-[#e0e0e0]" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step content */}
      <StepContent />

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className={`btn-secondary ${currentStep === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(STEPS.length - 1, currentStep + 1))}
          disabled={currentStep === STEPS.length - 1}
          className={`btn-primary ${currentStep === STEPS.length - 1 ? "opacity-40 cursor-not-allowed" : ""}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
