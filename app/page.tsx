import {
  Music4,
  Mic,
  BookOpen,
  UserSquare2,
  CalendarHeart,
  Home as HomeIcon,
  Search,
  Sparkles,
  HeartHandshake,
  Shuffle,
  Network,
  ScrollText,
  Layers,
  ArrowRight,
  ShieldCheck,
  Quote,
} from "lucide-react";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SectionContainer } from "@/components/section-container";
import { ProductCard } from "@/components/product-card";
import { FeatureCard } from "@/components/feature-card";
import { AppMockup } from "@/components/app-mockup";
import { ArtistPageMockup } from "@/components/artist-page-mockup";
import { CityGrid } from "@/components/city-grid";
import { ResearchCard } from "@/components/research-card";
import { IntegrityCard } from "@/components/integrity-card";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

/* ---------------------------------- data --------------------------------- */

const products = [
  {
    icon: Music4,
    title: "Music & Worship",
    description:
      "Discover Christian music and worship through a platform designed around trust, formation, and human artistry.",
  },
  {
    icon: Mic,
    title: "Podcasts & Teaching",
    description:
      "Listen across theology, culture, discipleship, sermons, conversations, and ministry.",
  },
  {
    icon: BookOpen,
    title: "Audiobooks & Scripture",
    description:
      "Bring Christian books, Bible audio, devotionals, and teaching libraries into one accessible audio experience.",
  },
  {
    icon: UserSquare2,
    title: "Artist Pages",
    description:
      "Give artists, churches, ministries, writers, podcasters, and publishers a beautiful home for their work.",
  },
  {
    icon: CalendarHeart,
    title: "Worship Nights & Events",
    description:
      "Connect listening with gathering through worship nights, concerts, church events, and local moments of praise.",
  },
  {
    icon: HomeIcon,
    title: "Family Listening",
    description:
      "A calmer, safer audio environment for households, children, and churches.",
  },
];

const appFeatures = [
  "Search Christian audio by theme, Scripture, artist, topic, mood, tradition, or format.",
  "Follow artists, ministries, churches, podcasts, authors, and publishers.",
  "Create family profiles and listening spaces.",
  "Discover worship nights and events connected to the audio you love.",
  "Support artists and ministries directly.",
  "Explore songs, sermons, books, podcasts, and Scripture through connected recommendations.",
  "Understand whether works are human-created, AI-assisted, translated, sampled, or synthetic.",
];

const discoveryCards = [
  {
    icon: ScrollText,
    title: "Scripture-aware recommendations",
    description:
      "Connect songs, sermons, podcasts, audiobooks, and Bible passages through biblical themes and theological context.",
  },
  {
    icon: Layers,
    title: "Theological metadata",
    description:
      "Develop richer metadata around doctrine, tradition, Scripture, worship context, genre, and pastoral theme.",
  },
  {
    icon: Search,
    title: "Semantic audio search",
    description:
      "Search by meaning, not just keywords: lament, hope, Advent, prayer, suffering, mission, adoption in Christ, or joy.",
  },
  {
    icon: Shuffle,
    title: "Cross-format discovery",
    description:
      "Move from a worship song to a Psalm, from a sermon to an audiobook, from a podcast to a local worship night.",
  },
];

const artistFeatures = [
  "Music and albums",
  "Podcasts and sermons",
  "Audiobooks and teaching",
  "Tour dates and worship nights",
  "Support links",
  "Newsletter and socials",
  "Booking and contact",
  "Church or ministry affiliation",
  "Human-artistry and AI-use disclosure",
  "Related Scripture, themes, and recommendations",
];

const samplePages = ["The Psalms Project", "Grace & Harp", "Kingdom Choir", "City Light Worship"];

const integrityAffirm = [
  "Human-created music is welcomed and elevated.",
  "AI-assisted work should be clearly disclosed.",
  "Synthetic vocals and synthetic personas must be labelled.",
];

const integrityProhibit = [
  "No deceptive artist biographies, testimonies, church affiliations, or identities.",
  "No synthetic worship leaders presented as human worshippers.",
  "No fake spiritual authority.",
];

const researchPillars = [
  "Theology of music and Christian sound",
  "Scripture knowledge graphs",
  "Christian audio metadata",
  "Recommendation systems for formation, not addiction",
  "Human-artistry and AI-use disclosure standards",
  "Accessibility and disability inclusion",
  "Translation and multilingual discovery",
  "Low-bandwidth global audio access",
  "Family-safe media environments",
  "First Nations and local-language audio partnerships",
];

const cities = [
  "Sydney",
  "Nashville",
  "London",
  "New York",
  "Los Angeles",
  "São Paulo",
  "Lagos",
  "Nairobi",
  "Singapore",
  "Seoul",
  "Manila",
  "Jakarta",
  "Cape Town",
  "Mexico City",
];

const accessTiers = [
  {
    icon: Sparkles,
    title: "Free Access",
    description:
      "A trusted entry point for Christian audio, supported by carefully governed sponsorships and philanthropy.",
  },
  {
    icon: HomeIcon,
    title: "Family Membership",
    description:
      "Ad-free listening, household profiles, kids mode, offline access, and deeper support for creators.",
  },
  {
    icon: HeartHandshake,
    title: "Creator Support",
    description:
      "Future user-centric support can help a member's contribution flow toward the artists, ministries, publishers, and creators they actually listen to, follow, save, or intentionally support.",
  },
];

/* ---------------------------------- page --------------------------------- */

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* 2. Product Snapshot */}
        <SectionContainer
          id="platform"
          tone="stone"
          eyebrow="The platform"
          heading="One place for faithful Christian audio."
          intro="Rejoice brings together the formats Christians already love and the infrastructure they increasingly need."
        >
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.title} delay={Math.min(i * 0.05, 0.25)}>
                <ProductCard {...p} />
              </Reveal>
            ))}
          </div>
        </SectionContainer>

        {/* 3. The App */}
        <SectionContainer
          id="app"
          eyebrow="The app"
          heading="Built for listening, discovery, and support."
          intro="Rejoice is designed as a simple, beautiful audio app with deep infrastructure beneath the surface."
        >
          <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <ul className="space-y-3.5">
              {appFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/[0.08] text-accent">
                    <ArrowRight size={12} strokeWidth={2.4} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-subtle">{f}</span>
                </li>
              ))}
            </ul>
            <Reveal>
              <AppMockup />
            </Reveal>
          </div>
        </SectionContainer>

        {/* 4. Redemptive Discovery */}
        <SectionContainer
          id="discovery"
          tone="stone"
          eyebrow="Redemptive discovery"
          heading="Discovery shaped by Scripture, theology, and context."
          intro="Most audio platforms understand genre, popularity, and engagement. Rejoice is building discovery infrastructure that can understand biblical themes, theological context, pastoral use, human artistry, family suitability, and the relationships between songs, sermons, books, podcasts, Scripture, and events."
        >
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {discoveryCards.map((c, i) => (
              <Reveal key={c.title} delay={Math.min(i * 0.05, 0.2)}>
                <FeatureCard {...c} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-8 flex items-center gap-4 rounded-xl border border-gold/30 bg-gold/[0.06] px-6 py-5">
              <ShieldCheck size={22} className="shrink-0 text-gold" strokeWidth={1.8} />
              <p className="font-serif text-[18px] italic leading-snug text-foreground sm:text-[20px]">
                AI is the infrastructure layer, not the spiritual authority.
              </p>
            </div>
          </Reveal>
        </SectionContainer>

        {/* 5. Artist & Ministry Infrastructure */}
        <SectionContainer
          id="artists"
          eyebrow="For creators"
          heading="A better home for Christian artists, ministries, and publishers."
          intro="Rejoice Pages help artists, worship leaders, churches, ministries, podcasters, authors, narrators, and publishers organise their work, tell their story, share events, and connect directly with listeners."
        >
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <Reveal>
              <ArtistPageMockup />
            </Reveal>
            <div>
              <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {artistFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span className="text-[14.5px] leading-snug text-subtle">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a href="#waitlist" className="btn-primary">
                  Create your Rejoice Page
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-muted">
                  Sample pages
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {samplePages.map((n) => (
                    <span key={n} className="chip">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* 6. Human Artistry & Integrity */}
        <SectionContainer
          id="integrity"
          tone="stone"
          eyebrow="Integrity"
          heading="Human artistry matters. Disclosure matters. Trust matters."
          intro="Christian listeners deserve clarity. Rejoice is building standards that help distinguish human-created work, AI-assisted human work, synthetic vocals, synthetic personas, translations, samples, and public-domain recordings."
        >
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {integrityAffirm.map((t, i) => (
              <Reveal key={t} delay={Math.min(i * 0.05, 0.2)}>
                <IntegrityCard text={t} stance="affirm" />
              </Reveal>
            ))}
            {integrityProhibit.map((t, i) => (
              <Reveal key={t} delay={Math.min(i * 0.05, 0.2)}>
                <IntegrityCard text={t} stance="prohibit" />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-10 max-w-3xl text-center font-serif text-[19px] italic leading-relaxed text-foreground sm:text-[22px]">
              Worship and Christian music are not merely sonic outputs. They are
              acts of praise, lament, confession, memory, doctrine, longing, and
              testimony before God.
            </p>
          </Reveal>
        </SectionContainer>

        {/* 7. Theology of Sound */}
        <section className="scroll-mt-20 bg-ink px-6 py-24 text-[#E8E6E1] sm:px-8 sm:py-32">
          <div className="mx-auto max-w-prose text-center">
            <Reveal>
              <p className="eyebrow mb-3">Theology of sound</p>
              <h2 className="text-balance text-[30px] font-semibold leading-[1.12] tracking-tightest text-white sm:text-[40px]">
                Sound forms the people of God.
              </h2>
              <div className="mt-7 space-y-5 text-[16px] leading-relaxed text-[#B9B6AF] sm:text-[17px]">
                <p>
                  David played the harp before Saul. Israel sang the Psalms. The
                  temple appointed musicians. Jesus and His disciples sang a
                  hymn. Paul commanded the Church to sing psalms, hymns, and
                  spiritual songs. Revelation gives us the sound of worship
                  before the Lamb.
                </p>
                <p>
                  Christian audio carries prayer, teaching, Scripture,
                  testimony, comfort, lament, and praise across generations and
                  nations. Rejoice exists to steward this category with
                  excellence.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <figure className="mx-auto mt-12 max-w-2xl">
                <Quote size={26} className="mx-auto text-gold" />
                <blockquote className="mt-4 font-serif text-[21px] italic leading-snug text-white sm:text-[26px]">
                  Christian audio is one way the Church remembers, worships,
                  teaches, comforts, gathers, and proclaims.
                </blockquote>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* 8. Research & Development */}
        <section
          id="research"
          className="scroll-mt-20 bg-ink px-6 pb-28 pt-4 text-[#E8E6E1] sm:px-8"
        >
          <div className="mx-auto max-w-content">
            <Reveal>
              <div className="max-w-prose">
                <p className="eyebrow mb-3">Research &amp; development</p>
                <h2 className="text-balance text-[28px] font-semibold leading-[1.12] tracking-tightest text-white sm:text-[38px]">
                  Serious R&amp;D for Christian media infrastructure.
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-[#B9B6AF] sm:text-[17px]">
                  Rejoice is building more than an app. Our research and
                  development work spans theological metadata, Scripture
                  knowledge graphs, semantic audio search, human-artistry
                  disclosure, recommendation systems, accessibility,
                  translation, and global Christian media infrastructure.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {researchPillars.map((p, i) => (
                <Reveal key={p} delay={Math.min(i * 0.03, 0.25)}>
                  <ResearchCard index={i + 1} title={p} />
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-8 flex items-start gap-3 rounded-xl border border-gold/25 bg-gold/[0.05] p-5">
                <Network size={20} className="mt-0.5 shrink-0 text-gold-soft" strokeWidth={1.7} />
                <p className="text-[14.5px] leading-relaxed text-[#CFCBC3]">
                  Any First Nations audio, language, worship, testimony, or
                  oral-history work must be Indigenous-led, locally governed,
                  permission-based, and culturally safe.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 9. Global by Nature */}
        <SectionContainer
          id="global"
          eyebrow="Global"
          heading="Built for the worldwide Church."
          intro="Rejoice is international by design, with a long-term vision for representation, research, ministry partnerships, artist relationships, and local audio infrastructure across major global cities and regions."
        >
          <div className="mt-12">
            <CityGrid cities={cities} />
            <Reveal>
              <p className="mt-8 text-center font-serif text-[18px] italic text-subtle sm:text-[20px]">
                The Church is global. Christian audio infrastructure should be
                global too.
              </p>
            </Reveal>
            <p className="mt-6 text-center text-[13px] text-muted">
              Reflects future representation, regional partners, and a global
              network — not existing offices.
            </p>
          </div>
        </SectionContainer>

        {/* 10. Access & Sponsorship */}
        <SectionContainer
          id="access"
          tone="stone"
          eyebrow="Access & sponsorship"
          heading="Free access, family-safe sponsorship, and memberships."
          intro="Rejoice is designed to be accessible. A free tier can be supported by carefully governed family-safe sponsorships and donor underwriting, while paid memberships can support ad-free listening, family features, offline access, and direct creator support."
        >
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {accessTiers.map((t, i) => (
              <Reveal key={t.title} delay={Math.min(i * 0.06, 0.2)}>
                <div className="card flex h-full flex-col p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] bg-accent text-accent-foreground">
                    <t.icon size={20} strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 text-[18px] font-semibold tracking-tight">{t.title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-subtle">
                    {t.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionContainer>

        {/* 11. Launch CTA + Partners */}
        <CTASection />

        {/* About */}
        <SectionContainer
          id="about"
          eyebrow="About Rejoice"
          heading="A Christian audio institution for the global Church."
        >
          <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="card p-7">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={22} className="text-accent" strokeWidth={1.7} />
                  <p className="text-[13px] font-semibold uppercase tracking-wider text-muted">
                    Stewardship
                  </p>
                </div>
                <ul className="mt-5 space-y-4 text-[14.5px] leading-relaxed text-subtle">
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    Mission-governed media infrastructure initiative.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    Nonprofit / noncommercial basis, surplus reinvested into the
                    mission.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    Transparent governance and theological accountability.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    Clear separation between mission infrastructure and
                    commercial rights activity.
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="space-y-5 text-[16px] leading-relaxed text-subtle">
                <p>
                  Rejoice is being developed as a mission-governed Christian
                  media infrastructure initiative. Our aim is to build durable,
                  trusted infrastructure for Christian audio, theological
                  discovery, artist support, family-safe listening, and global
                  access.
                </p>
                <p>
                  Rejoice is intended to operate on a nonprofit / noncommercial
                  basis, with surplus reinvested into the mission rather than
                  distributed to shareholders. This structure allows the
                  platform to prioritise theological trust, human artistry,
                  family safety, global access, research, and long-term
                  stewardship.
                </p>
                <p>
                  Rejoice is committed to transparent governance, theological
                  accountability, disclosure standards, careful stewardship, and
                  a clear separation between mission infrastructure and
                  commercial music or rights activity.
                </p>
              </div>
            </Reveal>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </>
  );
}
