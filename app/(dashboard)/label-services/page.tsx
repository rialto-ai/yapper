"use client";

import { useState } from "react";

const services = [
  { title: "Managed Distribution", description: "Full-service distribution to all major DSPs with priority delivery and metadata management." },
  { title: "Release Strategy", description: "Data-informed release planning, timeline coordination, and market positioning." },
  { title: "Campaign Management", description: "End-to-end campaign execution from pre-release through post-launch analysis." },
  { title: "Playlist Pitching", description: "Editorial and algorithmic playlist strategy across Spotify, Apple Music, and Amazon." },
  { title: "Christian Radio", description: "Radio servicing, tracking, and promotion across Christian and worship formats." },
  { title: "Church Outreach", description: "Worship leader engagement, chord chart distribution, and church planning platform integration." },
  { title: "YouTube Strategy", description: "Channel optimization, Content ID management, and video monetization strategy." },
  { title: "Content Production", description: "Lyric videos, visualizers, acoustic sessions, and short-form content creation." },
  { title: "Publishing Administration", description: "Worldwide publishing administration, registration, and royalty collection." },
  { title: "Royalty Accounting", description: "Transparent royalty processing, statement generation, and payment administration." },
  { title: "Neighboring Rights", description: "International neighboring rights registration and collection." },
  { title: "Sync Representation", description: "Sync licensing representation for film, TV, advertising, and media placements." },
  { title: "Brand and Ministry Partnerships", description: "Strategic partnership development with Christian brands, churches, and ministries." },
  { title: "Financing Review", description: "Catalog valuation, advance structuring, and financing options assessment." },
  { title: "Catalog Strategy", description: "Long-term catalog management, reissue planning, and back-catalog optimization." },
];

const applicationSteps = [
  { label: "Received", description: "Application submitted" },
  { label: "Under Review", description: "Team evaluation" },
  { label: "Strategy Call Required", description: "Interview scheduled" },
  { label: "Approved", description: "Onboarding begins" },
];

export default function LabelServicesPage() {
  const [currentStep] = useState(0);
  const [formData, setFormData] = useState({
    applicantName: "",
    entityType: "Artist",
    entityName: "",
    monthlyListeners: "",
    catalogSize: "",
    upcomingReleases: "",
    currentDistributor: "",
    publishingStatus: "Self-administered",
    youtubePresence: "",
    managementTeam: "",
    primaryObjective: "",
    whyFits: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const inputClass =
    "w-full px-3 py-2 text-[13px] border border-border rounded-lg bg-white focus:outline-none focus:border-[rgb(var(--border-strong))] transition-colors";
  const selectClass =
    "w-full px-3 py-2 text-[13px] border border-border rounded-lg bg-white focus:outline-none focus:border-[rgb(var(--border-strong))] transition-colors appearance-none";
  const labelClass = "block text-[12px] font-medium text-muted mb-1.5";

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">Label Services</h1>
        <p className="text-[13px] text-muted mt-1">
          Managed services for selected Christian artists, worship projects, labels, and rights holders.
        </p>
      </div>

      {/* Hero Section */}
      <div className="card p-8 text-center">
        <h2 className="text-[20px] font-semibold tracking-tight mb-2">Apply for CMG Label Services</h2>
        <p className="text-[14px] text-muted max-w-2xl mx-auto leading-relaxed">
          For selected Christian artists, worship projects, labels, and rights holders seeking strategic support across distribution, marketing, rights, publishing, video, campaign management, and royalty administration.
        </p>
      </div>

      {/* Services Grid */}
      <div>
        <h2 className="text-[14px] font-semibold mb-4">Available Services</h2>
        <div className="grid grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="card p-4">
              <h3 className="text-[13px] font-semibold mb-1">{s.title}</h3>
              <p className="text-[12px] text-muted leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <div className="card p-5">
        <h2 className="text-[14px] font-semibold mb-4">Application Form</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Applicant name</label>
            <input
              type="text"
              value={formData.applicantName}
              onChange={(e) => handleChange("applicantName", e.target.value)}
              className={inputClass}
              placeholder="Full name"
            />
          </div>
          <div>
            <label className={labelClass}>Entity type</label>
            <select
              value={formData.entityType}
              onChange={(e) => handleChange("entityType", e.target.value)}
              className={selectClass}
            >
              <option>Artist</option>
              <option>Label</option>
              <option>Publisher</option>
              <option>Church/Ministry</option>
              <option>Management Company</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Artist / label / ministry name</label>
            <input
              type="text"
              value={formData.entityName}
              onChange={(e) => handleChange("entityName", e.target.value)}
              className={inputClass}
              placeholder="Name"
            />
          </div>
          <div>
            <label className={labelClass}>Monthly listeners</label>
            <input
              type="text"
              value={formData.monthlyListeners}
              onChange={(e) => handleChange("monthlyListeners", e.target.value)}
              className={inputClass}
              placeholder="e.g. 50,000"
            />
          </div>
          <div>
            <label className={labelClass}>Catalog size</label>
            <input
              type="text"
              value={formData.catalogSize}
              onChange={(e) => handleChange("catalogSize", e.target.value)}
              className={inputClass}
              placeholder="Number of releases"
            />
          </div>
          <div>
            <label className={labelClass}>Upcoming releases</label>
            <input
              type="text"
              value={formData.upcomingReleases}
              onChange={(e) => handleChange("upcomingReleases", e.target.value)}
              className={inputClass}
              placeholder="Number planned in next 12 months"
            />
          </div>
          <div>
            <label className={labelClass}>Current distributor</label>
            <input
              type="text"
              value={formData.currentDistributor}
              onChange={(e) => handleChange("currentDistributor", e.target.value)}
              className={inputClass}
              placeholder="If applicable"
            />
          </div>
          <div>
            <label className={labelClass}>Publishing status</label>
            <select
              value={formData.publishingStatus}
              onChange={(e) => handleChange("publishingStatus", e.target.value)}
              className={selectClass}
            >
              <option>Self-administered</option>
              <option>Publisher</option>
              <option>None</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>YouTube presence</label>
            <input
              type="text"
              value={formData.youtubePresence}
              onChange={(e) => handleChange("youtubePresence", e.target.value)}
              className={inputClass}
              placeholder="Channel URL or subscriber count"
            />
          </div>
          <div>
            <label className={labelClass}>Management team</label>
            <input
              type="text"
              value={formData.managementTeam}
              onChange={(e) => handleChange("managementTeam", e.target.value)}
              className={inputClass}
              placeholder="Manager or management company"
            />
          </div>
          <div className="col-span-2">
            <label className={labelClass}>Primary objective</label>
            <textarea
              value={formData.primaryObjective}
              onChange={(e) => handleChange("primaryObjective", e.target.value)}
              className={`${inputClass} resize-none h-20`}
              placeholder="What are you hoping to achieve with CMG Label Services?"
            />
          </div>
          <div className="col-span-2">
            <label className={labelClass}>Why this project fits Christian Music Group</label>
            <textarea
              value={formData.whyFits}
              onChange={(e) => handleChange("whyFits", e.target.value)}
              className={`${inputClass} resize-none h-20`}
              placeholder="Tell us about your ministry, vision, and why CMG is the right partner."
            />
          </div>
        </div>
        <div className="mt-5">
          <button className="btn-primary">Submit Application</button>
        </div>
      </div>

      {/* Application Status Tracker */}
      <div className="card p-5">
        <h2 className="text-[14px] font-semibold mb-6">Application Status</h2>
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {applicationSteps.map((step, i) => (
            <div key={step.label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-semibold ${
                    i <= currentStep
                      ? "bg-[rgb(var(--foreground))] text-white"
                      : "bg-[rgb(var(--surface))] text-muted border border-border"
                  }`}
                >
                  {i + 1}
                </div>
                <p className="text-[12px] font-medium mt-2 text-center whitespace-nowrap">{step.label}</p>
                <p className="text-[11px] text-muted mt-0.5 text-center">{step.description}</p>
              </div>
              {i < applicationSteps.length - 1 && (
                <div
                  className={`flex-1 h-px mx-3 mt-[-24px] ${
                    i < currentStep ? "bg-[rgb(var(--foreground))]" : "bg-[rgb(var(--border))]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
