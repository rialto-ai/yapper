"use client";

import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Self-Service Distribution",
    price: "A$24",
    period: "/ month per artist",
    description: "For independent Christian artists releasing music themselves.",
    cta: "Start free trial",
    highlighted: false,
    features: [
      { label: "Unlimited distribution to all DSPs", included: true },
      { label: "Christian channel network", included: true },
      { label: "Standard rights & splits", included: true },
      { label: "Self-serve royalty accounting", included: true },
      { label: "Quarterly statements", included: true },
      { label: "Basic analytics", included: true },
      { label: "Email support", included: true },
      { label: "Managed campaigns", included: false },
      { label: "Publishing administration", included: false },
      { label: "Sync representation", included: false },
    ],
  },
  {
    name: "Label Services",
    price: "Revenue share",
    period: "starting at 15%",
    description: "For artists, labels, and ministries seeking strategic support.",
    cta: "Apply for Label Services",
    highlighted: true,
    features: [
      { label: "Everything in Self-Service", included: true },
      { label: "Dedicated account manager", included: true },
      { label: "Release strategy & A&R input", included: true },
      { label: "Playlist pitching & church outreach", included: true },
      { label: "Christian radio servicing", included: true },
      { label: "YouTube channel optimization", included: true },
      { label: "Publishing administration included", included: true },
      { label: "Marketing recoupment tracking", included: true },
      { label: "Sync representation", included: true },
      { label: "Brand & ministry partnerships", included: true },
    ],
  },
  {
    name: "Enterprise / Partner Portal",
    price: "Custom",
    period: "tailored to volume",
    description: "For labels, distributors, and church networks operating at scale.",
    cta: "Contact sales",
    highlighted: false,
    features: [
      { label: "Everything in Label Services", included: true },
      { label: "White-label partner portal", included: true },
      { label: "Sub-label & sub-roster management", included: true },
      { label: "Custom branding & domain", included: true },
      { label: "Full API & webhook access", included: true },
      { label: "SLA-backed support", included: true },
      { label: "Custom royalty workflows", included: true },
      { label: "Dedicated solutions engineer", included: true },
      { label: "Quarterly business reviews", included: true },
      { label: "Volume-based pricing", included: true },
    ],
  },
];

const addons = [
  { name: "Publishing Administration", price: "10% admin fee", desc: "Global PRO registration, mechanical licensing, sync collection." },
  { name: "YouTube Services", price: "15% of YouTube revenue", desc: "Channel optimization, Content ID, dispute resolution." },
  { name: "Neighboring Rights Collection", price: "12% admin fee", desc: "Performance royalty collection across 60+ territories." },
  { name: "Sync Representation", price: "20% per placement", desc: "Active pitching for film, TV, advertising, and games." },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/40 via-white to-white pointer-events-none" />
        <div className="relative max-w-[920px] mx-auto px-8 pt-20 pb-12 text-center">
          <p className="label-eyebrow mb-3">Pricing</p>
          <h1 className="text-[44px] font-bold tracking-tight leading-[1.1] mb-5">
            Pick the tier that fits your operation.
          </h1>
          <p className="text-[17px] text-subtle max-w-[600px] mx-auto">
            Transparent pricing across self-service, fully-managed services, and enterprise partner deployments.
          </p>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="max-w-[1180px] mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-7 flex flex-col ${
                tier.highlighted
                  ? "bg-gradient-to-br from-[#0F172A] to-[#1E1B4B] text-white border border-accent/40 shadow-xl shadow-accent/10 relative overflow-hidden"
                  : "card"
              }`}
            >
              {tier.highlighted && (
                <>
                  <div
                    className="absolute inset-0 opacity-[0.08] pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgb(165 180 252) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider bg-accent text-white px-2 py-0.5 rounded-full">
                    Most popular
                  </span>
                </>
              )}
              <div className="relative">
                <h3
                  className={`text-[17px] font-semibold mb-2 ${
                    tier.highlighted ? "text-white" : ""
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-[13px] mb-5 ${
                    tier.highlighted ? "text-white/70" : "text-subtle"
                  }`}
                >
                  {tier.description}
                </p>
                <div className="mb-6">
                  <span
                    className={`text-[36px] font-bold tracking-tight ${
                      tier.highlighted ? "text-white" : ""
                    }`}
                  >
                    {tier.price}
                  </span>{" "}
                  <span
                    className={`text-[13px] ${
                      tier.highlighted ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>
                <Link
                  href="/overview"
                  className={`block text-center font-medium rounded-md px-5 py-2.5 text-[14px] transition-colors ${
                    tier.highlighted
                      ? "bg-white text-foreground hover:bg-white/90"
                      : "btn-primary"
                  }`}
                >
                  {tier.cta}
                </Link>
                <div
                  className={`mt-6 pt-6 border-t space-y-2.5 ${
                    tier.highlighted ? "border-white/15" : "border-border"
                  }`}
                >
                  {tier.features.map((f) => (
                    <div key={f.label} className="flex items-start gap-2.5">
                      {f.included ? (
                        <div
                          className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                            tier.highlighted ? "bg-accent" : "bg-positive-soft"
                          }`}
                        >
                          <Check
                            size={10}
                            strokeWidth={3}
                            className={tier.highlighted ? "text-white" : "text-positive"}
                          />
                        </div>
                      ) : (
                        <div
                          className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                            tier.highlighted ? "bg-white/10" : "bg-surface-2"
                          }`}
                        >
                          <X
                            size={10}
                            strokeWidth={3}
                            className={tier.highlighted ? "text-white/40" : "text-muted"}
                          />
                        </div>
                      )}
                      <span
                        className={`text-[13px] leading-snug ${
                          tier.highlighted
                            ? f.included
                              ? "text-white/90"
                              : "text-white/40"
                            : f.included
                            ? "text-foreground"
                            : "text-muted line-through"
                        }`}
                      >
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Addons */}
      <section className="bg-surface py-20 border-y border-border">
        <div className="max-w-[1040px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="label-eyebrow mb-3">Add-ons</p>
            <h2 className="text-[32px] font-bold tracking-tight mb-3">
              Modular services à la carte.
            </h2>
            <p className="text-subtle max-w-[520px] mx-auto text-[15px]">
              Stack additional services onto any tier as your operation grows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addons.map((a) => (
              <div key={a.name} className="card p-6 card-interactive">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[15px] font-semibold">{a.name}</h3>
                  <span className="text-[12px] font-semibold text-accent bg-accent-soft px-2 py-1 rounded">
                    {a.price}
                  </span>
                </div>
                <p className="text-[13px] text-subtle leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[680px] mx-auto px-8 text-center">
          <h2 className="text-[32px] font-bold tracking-tight mb-4">
            Not sure which tier fits?
          </h2>
          <p className="text-subtle mb-8">
            Book a 30-minute call with our team. We&apos;ll review your catalog, audience, and operations and recommend the right starting point.
          </p>
          <Link
            href="/overview"
            className="btn-primary text-[15px] !px-7 !py-3 inline-flex items-center gap-2"
          >
            Book a tailored walkthrough
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
