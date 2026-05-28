"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Heart,
  Users,
  TrendingUp,
  Sparkles,
  Globe2,
  Building2,
  Coffee,
  Plane,
  GraduationCap,
  Wallet,
  HeartPulse,
  HomeIcon,
  CalendarDays,
} from "lucide-react";

type Department =
  | "Engineering"
  | "Product"
  | "Design"
  | "Partnerships"
  | "Customer Success"
  | "Operations"
  | "Finance"
  | "Legal"
  | "Marketing";

type Location =
  | "Sydney"
  | "Singapore"
  | "Tokyo"
  | "Seoul"
  | "Hong Kong"
  | "Manila"
  | "Jakarta"
  | "Mumbai"
  | "Remote";

type Role = {
  title: string;
  department: Department;
  location: Location;
  type: "Full-time" | "Contract";
};

const departments: ("All" | Department)[] = [
  "All",
  "Engineering",
  "Product",
  "Design",
  "Partnerships",
  "Customer Success",
  "Operations",
  "Finance",
  "Legal",
  "Marketing",
];

const locations: ("All" | Location)[] = [
  "All",
  "Sydney",
  "Singapore",
  "Tokyo",
  "Seoul",
  "Hong Kong",
  "Manila",
  "Jakarta",
  "Mumbai",
  "Remote",
];

const roles: Role[] = [
  // Engineering
  { title: "Senior Platform Engineer", department: "Engineering", location: "Sydney", type: "Full-time" },
  { title: "Staff Software Engineer, Distribution", department: "Engineering", location: "Sydney", type: "Full-time" },
  { title: "Senior Software Engineer, Royalty Engine", department: "Engineering", location: "Singapore", type: "Full-time" },
  { title: "Software Engineer, YouTube Services", department: "Engineering", location: "Tokyo", type: "Full-time" },
  { title: "Senior Frontend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Engineering Manager, Catalog", department: "Engineering", location: "Sydney", type: "Full-time" },
  { title: "Site Reliability Engineer", department: "Engineering", location: "Sydney", type: "Full-time" },
  { title: "Data Engineer", department: "Engineering", location: "Mumbai", type: "Full-time" },
  { title: "Mobile Engineer (iOS)", department: "Engineering", location: "Sydney", type: "Full-time" },
  { title: "Mobile Engineer (Android)", department: "Engineering", location: "Sydney", type: "Full-time" },
  { title: "Security Engineer", department: "Engineering", location: "Sydney", type: "Full-time" },
  { title: "Machine Learning Engineer, Church Adoption", department: "Engineering", location: "Singapore", type: "Full-time" },

  // Product
  { title: "Senior Product Manager, Distribution", department: "Product", location: "Sydney", type: "Full-time" },
  { title: "Product Manager, Royalties", department: "Product", location: "Singapore", type: "Full-time" },
  { title: "Product Manager, Christian Channels", department: "Product", location: "Sydney", type: "Full-time" },
  { title: "Senior Product Manager, Publishing", department: "Product", location: "Sydney", type: "Full-time" },

  // Design
  { title: "Senior Product Designer", department: "Design", location: "Sydney", type: "Full-time" },
  { title: "Product Designer", department: "Design", location: "Remote", type: "Full-time" },
  { title: "Brand Designer", department: "Design", location: "Sydney", type: "Full-time" },

  // Partnerships
  { title: "DSP Partnerships Lead, Asia", department: "Partnerships", location: "Singapore", type: "Full-time" },
  { title: "Christian Channel Partnerships", department: "Partnerships", location: "Sydney", type: "Full-time" },
  { title: "Strategic Partnerships, Japan", department: "Partnerships", location: "Tokyo", type: "Full-time" },
  { title: "Strategic Partnerships, Korea", department: "Partnerships", location: "Seoul", type: "Full-time" },
  { title: "Music Industry Relations", department: "Partnerships", location: "Mumbai", type: "Full-time" },

  // Customer Success
  { title: "Customer Success Manager, Label Services", department: "Customer Success", location: "Sydney", type: "Full-time" },
  { title: "Customer Success Manager, APAC", department: "Customer Success", location: "Singapore", type: "Full-time" },
  { title: "Customer Success Manager, Japan", department: "Customer Success", location: "Tokyo", type: "Full-time" },
  { title: "Customer Success Lead, Indonesia", department: "Customer Success", location: "Jakarta", type: "Full-time" },
  { title: "Customer Success Specialist, Philippines", department: "Customer Success", location: "Manila", type: "Full-time" },
  { title: "Onboarding Specialist", department: "Customer Success", location: "Manila", type: "Full-time" },
  { title: "Onboarding Specialist", department: "Customer Success", location: "Mumbai", type: "Full-time" },

  // Operations
  { title: "Rights Operations Manager", department: "Operations", location: "Sydney", type: "Full-time" },
  { title: "Royalty Operations Lead", department: "Operations", location: "Manila", type: "Full-time" },
  { title: "Distribution Operations Specialist", department: "Operations", location: "Sydney", type: "Full-time" },
  { title: "Distribution Operations Specialist, Asia", department: "Operations", location: "Hong Kong", type: "Full-time" },
  { title: "Catalog Operations Analyst", department: "Operations", location: "Mumbai", type: "Full-time" },
  { title: "Compliance Lead, APAC", department: "Operations", location: "Singapore", type: "Full-time" },

  // Finance
  { title: "Senior Financial Analyst", department: "Finance", location: "Sydney", type: "Full-time" },
  { title: "Royalty Accountant", department: "Finance", location: "Manila", type: "Full-time" },
  { title: "Treasury Operations", department: "Finance", location: "Sydney", type: "Full-time" },

  // Legal
  { title: "Senior Counsel, IP & Rights", department: "Legal", location: "Sydney", type: "Full-time" },
  { title: "Legal Counsel, APAC", department: "Legal", location: "Singapore", type: "Full-time" },

  // Marketing
  { title: "Senior Marketing Manager", department: "Marketing", location: "Sydney", type: "Full-time" },
  { title: "Content Lead", department: "Marketing", location: "Sydney", type: "Full-time" },
  { title: "Community Manager, Asia", department: "Marketing", location: "Singapore", type: "Full-time" },
];

const departmentBadgeStyles: Record<Department, string> = {
  Engineering: "bg-accent-soft text-accent border-accent/15",
  Product: "bg-secondary-soft text-secondary border-secondary/15",
  Design: "bg-accent-soft text-accent border-accent/15",
  Partnerships: "bg-secondary-soft text-secondary border-secondary/15",
  "Customer Success": "bg-[rgb(var(--positive-soft))] text-[rgb(var(--positive))] border-[rgb(var(--positive))]/15",
  Operations: "bg-accent-soft text-accent border-accent/15",
  Finance: "bg-secondary-soft text-secondary border-secondary/15",
  Legal: "bg-accent-soft text-accent border-accent/15",
  Marketing: "bg-secondary-soft text-secondary border-secondary/15",
};

const whyCards = [
  {
    icon: Heart,
    title: "Mission",
    body: "We're building infrastructure for a music category that's been underserved by generic distribution tools. Christian music has 2B+ listeners globally. We think it deserves great software.",
    gradient: "from-accent to-accent-hover",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    body: "From day one we've operated across 8 markets. You'll work on problems that span currencies, regulatory regimes, and Christian music traditions across 84 territories.",
    gradient: "from-secondary to-secondary-hover",
  },
  {
    icon: Sparkles,
    title: "Craft",
    body: "We hire people who care about the details. Clean code, sharp design, well-written copy, thoughtful product decisions. Pace matters but so does taste.",
    gradient: "from-accent to-secondary",
  },
];

const benefits = [
  {
    icon: Wallet,
    title: "Competitive salary & equity",
    body: "Top-of-market cash, meaningful equity in every offer.",
  },
  {
    icon: HeartPulse,
    title: "Health & wellness",
    body: "Full medical, dental, and mental health coverage in every office.",
  },
  {
    icon: Coffee,
    title: "Flexible work",
    body: "Hybrid by default. Sydney, Singapore, and Tokyo offices for in-person collaboration.",
  },
  {
    icon: GraduationCap,
    title: "Annual learning stipend",
    body: "A$3,000 per year for courses, books, and conferences.",
  },
  {
    icon: Users,
    title: "Generous parental leave",
    body: "20 weeks for primary caregivers, 12 weeks for secondary.",
  },
  {
    icon: Plane,
    title: "Team gatherings",
    body: "Quarterly in-person team weeks across our offices.",
  },
  {
    icon: CalendarDays,
    title: "Sabbaticals",
    body: "4-week paid sabbatical every 5 years.",
  },
  {
    icon: HomeIcon,
    title: "Home office stipend",
    body: "A$2,000 to set up your remote workspace.",
  },
];

export default function CareersPage() {
  const [activeDepartment, setActiveDepartment] = useState<"All" | Department>("All");
  const [activeLocation, setActiveLocation] = useState<"All" | Location>("All");

  const filteredRoles = useMemo(() => {
    return roles.filter((role) => {
      const deptMatch = activeDepartment === "All" || role.department === activeDepartment;
      const locMatch = activeLocation === "All" || role.location === activeLocation;
      return deptMatch && locMatch;
    });
  }, [activeDepartment, activeLocation]);

  return (
    <div className="bg-background">
      {/* Section 1: Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-soft via-background to-secondary-soft" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-accent to-secondary opacity-10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-secondary to-accent opacity-10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="label-eyebrow mb-6">Careers</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground max-w-3xl">
            Build the infrastructure for Christian music.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-subtle max-w-2xl leading-relaxed">
            We&apos;re hiring across engineering, product, design, partnerships, customer success, and
            operations &mdash; across 8 offices and 7 countries. Join 850+ teammates building the
            modern operational layer for Christian music.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-foreground">850+ team</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-foreground">8 offices</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-foreground">{roles.length} open roles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Selah */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <p className="label-eyebrow-secondary mb-4">Why Selah</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            A team built for the long road.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {whyCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="card card-interactive p-8">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} mb-6`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-sm text-subtle leading-relaxed">{card.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: Benefits */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-12">
            <p className="label-eyebrow mb-4">Benefits</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              How we take care of our team.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              const isAccent = idx % 2 === 0;
              return (
                <div key={benefit.title} className="card p-6">
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg mb-4 ${
                      isAccent
                        ? "bg-accent-soft text-accent"
                        : "bg-secondary-soft text-secondary"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{benefit.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Open roles */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl mb-10">
          <p className="label-eyebrow-secondary mb-4">Open roles</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Find your role.
          </h2>
          <p className="mt-4 text-base text-subtle">
            {filteredRoles.length === roles.length
              ? `Showing all ${roles.length} roles`
              : `Showing ${filteredRoles.length} of ${roles.length} roles`}
          </p>
        </div>

        {/* Filters */}
        <div className="space-y-5 mb-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted mb-3">
              Department
            </p>
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => {
                const isActive = activeDepartment === dept;
                return (
                  <button
                    key={dept}
                    type="button"
                    onClick={() => setActiveDepartment(dept)}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                      isActive
                        ? "bg-accent-soft text-accent border-accent/30"
                        : "bg-card text-subtle border-border hover:border-border-strong hover:text-foreground"
                    }`}
                  >
                    {dept}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted mb-3">
              Location
            </p>
            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => {
                const isActive = activeLocation === loc;
                return (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setActiveLocation(loc)}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                      isActive
                        ? "bg-secondary-soft text-secondary border-secondary/30"
                        : "bg-card text-subtle border-border hover:border-border-strong hover:text-foreground"
                    }`}
                  >
                    {loc === "All" ? "All offices" : loc}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Roles list */}
        <div className="card overflow-hidden">
          {filteredRoles.length === 0 ? (
            <div className="p-12 text-center">
              <Briefcase className="h-10 w-10 text-muted mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No roles match your filters</h3>
              <p className="text-sm text-subtle mb-6">
                Try a different combination, or send us a general application.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveDepartment("All");
                  setActiveLocation("All");
                }}
                className="btn-secondary"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {filteredRoles.map((role, idx) => (
                <li
                  key={`${role.title}-${role.location}-${idx}`}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 hover:bg-surface transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start sm:items-center gap-3 flex-wrap">
                      <h3 className="text-base font-semibold text-foreground">{role.title}</h3>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                          departmentBadgeStyles[role.department]
                        }`}
                      >
                        {role.department}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {role.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" />
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                    >
                      Apply
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Section 5: Don't see your role */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent-soft via-surface to-secondary-soft p-10 md:p-14">
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-gradient-to-br from-accent to-secondary opacity-10 blur-3xl" />
          <div className="relative max-w-2xl">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-secondary mb-6">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Don&apos;t see the role you want?
            </h2>
            <p className="mt-4 text-base text-subtle leading-relaxed">
              We&apos;re always looking for exceptional people who care about the intersection of
              Christian music and great software. Send us your story.
            </p>
            <div className="mt-8">
              <button type="button" className="btn-primary inline-flex items-center gap-2">
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Offices CTA */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-soft text-secondary shrink-0">
                <Globe2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  Discover our global offices.
                </h2>
                <p className="mt-2 text-base text-subtle max-w-xl">
                  From Sydney HQ to Mumbai, see where you might work.
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <Link href="/about" className="btn-secondary inline-flex items-center gap-2">
                Explore offices
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
