import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  Search,
  Send,
  Sparkles,
  Music2,
  Church,
  DollarSign,
  TrendingUp,
  Heart,
  Globe2,
  BookOpen,
  Tag,
  BarChart3,
  Mic2,
  PieChart,
  FileText,
  Compass,
  Layers,
} from "lucide-react";

// ============================================================
// Types
// ============================================================

type Author = {
  name: string;
  role: string;
  initials: string;
  gradient: string;
};

type Category =
  | "Industry Analysis"
  | "Distribution"
  | "Product Updates"
  | "Theology"
  | "Strategy"
  | "Customer Story"
  | "Asia-Pacific";

type Post = {
  date: string;
  readTime: string;
  category: Category;
  title: string;
  excerpt: string;
  author: Author;
  gradient: string;
  icon: typeof Sparkles;
};

// ============================================================
// Authors
// ============================================================

const authors: Record<string, Author> = {
  bennett: {
    name: "A. Bennett",
    role: "Co-founder & CEO",
    initials: "AB",
    gradient: "from-accent to-accent-hover",
  },
  chen: {
    name: "L. Chen",
    role: "Co-founder & CTO",
    initials: "LC",
    gradient: "from-secondary to-secondary-hover",
  },
  okafor: {
    name: "M. Okafor",
    role: "Chief Operating Officer",
    initials: "MO",
    gradient: "from-accent to-accent-hover",
  },
  tanaka: {
    name: "S. Tanaka",
    role: "VP, Asia-Pacific",
    initials: "ST",
    gradient: "from-secondary to-secondary-hover",
  },
  mwangi: {
    name: "R. Mwangi",
    role: "Music Industry Editor",
    initials: "RM",
    gradient: "from-accent to-accent-hover",
  },
  park: {
    name: "J. Park",
    role: "Christian Music Researcher",
    initials: "JP",
    gradient: "from-secondary to-secondary-hover",
  },
};

// ============================================================
// Category styling
// ============================================================

const categoryStyles: Record<
  Category,
  { chip: string; dot: string }
> = {
  "Industry Analysis": {
    chip: "bg-accent-soft text-accent border-accent/15",
    dot: "bg-accent",
  },
  Distribution: {
    chip: "bg-secondary-soft text-secondary border-secondary/15",
    dot: "bg-secondary",
  },
  "Product Updates": {
    chip: "bg-positive-soft text-positive border-positive/20",
    dot: "bg-positive",
  },
  Theology: {
    chip: "bg-accent-soft text-accent border-accent/15",
    dot: "bg-accent",
  },
  Strategy: {
    chip: "bg-secondary-soft text-secondary border-secondary/15",
    dot: "bg-secondary",
  },
  "Customer Story": {
    chip: "bg-positive-soft text-positive border-positive/20",
    dot: "bg-positive",
  },
  "Asia-Pacific": {
    chip: "bg-accent-soft text-accent border-accent/15",
    dot: "bg-accent",
  },
};

// ============================================================
// Featured post
// ============================================================

const featured: Post = {
  date: "May 28, 2026",
  readTime: "8 min read",
  category: "Industry Analysis",
  title: "Why distribution-first matters for Christian music in 2026",
  excerpt:
    "Christian music has unique distribution requirements that generic platforms can't meet. From CCLI workflows to congregational suitability metadata, here's why a purpose-built distribution layer is the foundation everything else depends on.",
  author: authors.bennett,
  gradient: "from-accent/20 to-secondary/20",
  icon: Sparkles,
};

// ============================================================
// Recent posts
// ============================================================

const posts: Post[] = [
  {
    date: "May 22, 2026",
    readTime: "6 min read",
    category: "Industry Analysis",
    title: "How worship leaders discover new music in 2026",
    excerpt:
      "Inside the data: 4,200 worship leaders share how they find songs for their setlists, and what it means for release planning.",
    author: authors.mwangi,
    gradient: "from-accent/25 to-accent/5",
    icon: Mic2,
  },
  {
    date: "May 15, 2026",
    readTime: "5 min read",
    category: "Distribution",
    title: "The hidden value of Christian channel distribution",
    excerpt:
      "Why CCLI SongSelect, PraiseCharts, and Planning Center matter as much as Spotify when measuring real reach in worship music.",
    author: authors.okafor,
    gradient: "from-secondary/25 to-secondary/5",
    icon: Send,
  },
  {
    date: "May 8, 2026",
    readTime: "7 min read",
    category: "Asia-Pacific",
    title: "Asia-Pacific is the fastest-growing Christian music market",
    excerpt:
      "A look at growth rates across Japan, Korea, the Philippines, and Indonesia, and what's driving streaming adoption in worship.",
    author: authors.tanaka,
    gradient: "from-accent/25 to-secondary/15",
    icon: Globe2,
  },
  {
    date: "April 30, 2026",
    readTime: "4 min read",
    category: "Product Updates",
    title: "Inside Selah's release builder: a guided tour",
    excerpt:
      "How we designed an 8-step release workflow that captures the metadata Christian distribution needs without getting in the way.",
    author: authors.chen,
    gradient: "from-secondary/25 to-accent/15",
    icon: Layers,
  },
  {
    date: "April 22, 2026",
    readTime: "5 min read",
    category: "Product Updates",
    title: "Announcing Church Adoption Score 2.0",
    excerpt:
      "What changed, why we redesigned the scoring, and what worship leaders told us about predicting congregational fit.",
    author: authors.chen,
    gradient: "from-accent/25 to-secondary/15",
    icon: BarChart3,
  },
  {
    date: "April 14, 2026",
    readTime: "6 min read",
    category: "Product Updates",
    title: "Building the AI Release Strategist",
    excerpt:
      "Lessons from shipping a recommendation engine purpose-built for Christian release planning, positioning, and DSP strategy.",
    author: authors.chen,
    gradient: "from-secondary/25 to-accent/10",
    icon: Compass,
  },
  {
    date: "April 5, 2026",
    readTime: "9 min read",
    category: "Theology",
    title: "Theological review isn't censorship - it's care",
    excerpt:
      "Why we built tools for theological review status on every song, and how labels are using them to support their writers.",
    author: authors.park,
    gradient: "from-accent/25 to-accent/5",
    icon: BookOpen,
  },
  {
    date: "March 28, 2026",
    readTime: "6 min read",
    category: "Theology",
    title: "Scripture in songs: a metadata field worth more than you think",
    excerpt:
      "How tagging biblical references on each release changes discovery for worship leaders and search results across Christian channels.",
    author: authors.park,
    gradient: "from-secondary/25 to-secondary/5",
    icon: FileText,
  },
  {
    date: "March 20, 2026",
    readTime: "7 min read",
    category: "Strategy",
    title: "Royalty splits in collaborative worship: a practical guide",
    excerpt:
      "Five common splits scenarios in modern worship co-writes and how to handle them well from the start.",
    author: authors.okafor,
    gradient: "from-secondary/25 to-accent/10",
    icon: PieChart,
  },
  {
    date: "March 12, 2026",
    readTime: "5 min read",
    category: "Industry Analysis",
    title: "What we learned from 4,800 royalty statements",
    excerpt:
      "The patterns nobody else sees because nobody else looks - earnings shape, leakage points, and where statements drift from truth.",
    author: authors.mwangi,
    gradient: "from-accent/25 to-secondary/10",
    icon: DollarSign,
  },
  {
    date: "March 1, 2026",
    readTime: "8 min read",
    category: "Asia-Pacific",
    title: "Songs that travel: the economics of cross-territory Christian music",
    excerpt:
      "Why some worship songs cross borders effortlessly while others stall - and what release strategy can do about it.",
    author: authors.tanaka,
    gradient: "from-accent/25 to-secondary/15",
    icon: TrendingUp,
  },
  {
    date: "February 22, 2026",
    readTime: "6 min read",
    category: "Customer Story",
    title: "The CCLI integration story",
    excerpt:
      "How a year of work unlocked church revenue for our artists - and the partnerships that made it possible.",
    author: authors.bennett,
    gradient: "from-secondary/25 to-accent/15",
    icon: Church,
  },
];

// ============================================================
// Categories
// ============================================================

const categories = [
  { label: "All posts", count: 47, active: true, tone: "accent" as const },
  { label: "Industry Analysis", count: 12, tone: "accent" as const },
  { label: "Product Updates", count: 9, tone: "secondary" as const },
  { label: "Distribution Insights", count: 8, tone: "secondary" as const },
  { label: "Asia-Pacific Markets", count: 6, tone: "accent" as const },
  { label: "Customer Stories", count: 5, tone: "secondary" as const },
  { label: "Theology & Music", count: 4, tone: "accent" as const },
  { label: "Royalties & Rights", count: 3, tone: "secondary" as const },
];

// ============================================================
// Topics we cover
// ============================================================

const topics = [
  {
    icon: Send,
    title: "Distribution Strategy",
    desc: "Inside the distribution layer for Christian music - channels, metadata, and reach.",
    tone: "accent" as const,
  },
  {
    icon: Church,
    title: "Church Network Insights",
    desc: "How worship leaders, CCLI, and congregations adopt new songs across the global church.",
    tone: "secondary" as const,
  },
  {
    icon: DollarSign,
    title: "Royalty Operations",
    desc: "Splits, statements, and the operational work of getting paid right at scale.",
    tone: "accent" as const,
  },
  {
    icon: TrendingUp,
    title: "Industry Trends",
    desc: "What's moving in Christian music globally - formats, platforms, and audience behavior.",
    tone: "secondary" as const,
  },
  {
    icon: Heart,
    title: "Customer Stories",
    desc: "How artists, labels, ministries, and publishers build with Selah every day.",
    tone: "accent" as const,
  },
  {
    icon: Globe2,
    title: "Asia-Pacific Markets",
    desc: "Christian music's fastest-growth region, told from offices on the ground.",
    tone: "secondary" as const,
  },
];

// ============================================================
// Helpers
// ============================================================

function CategoryChip({ category }: { category: Category }) {
  const style = categoryStyles[category];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium uppercase tracking-[0.08em] ${style.chip}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      {category}
    </span>
  );
}

function AuthorBlock({
  author,
  size = "sm",
}: {
  author: Author;
  size?: "sm" | "md";
}) {
  const dim = size === "md" ? "w-10 h-10 text-[13px]" : "w-7 h-7 text-[11px]";
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`${dim} rounded-full bg-gradient-to-br ${author.gradient} flex items-center justify-center text-white font-semibold shadow-sm`}
      >
        {author.initials}
      </div>
      <div className="leading-tight">
        <p className="text-[13px] font-medium text-foreground">{author.name}</p>
        {size === "md" && (
          <p className="text-[12px] text-muted">{author.role}</p>
        )}
      </div>
    </div>
  );
}

// ============================================================
// Page
// ============================================================

export default function BlogPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/40 via-white to-white pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgb(67 56 202) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-[15%] left-[8%] w-[420px] h-[420px] bg-secondary/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-[10%] right-[8%] w-[420px] h-[420px] bg-accent/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-[1000px] mx-auto px-8 pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-accent/15 shadow-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[12px] font-medium text-accent uppercase tracking-[0.08em]">
              Selah Blog
            </span>
          </div>
          <h1 className="text-[54px] font-bold tracking-tight leading-[1.05] mb-6">
            Insights from the{" "}
            <span className="bg-gradient-to-r from-accent via-accent-hover to-secondary bg-clip-text text-transparent">
              Christian music economy.
            </span>
          </h1>
          <p className="text-[18px] text-subtle max-w-[760px] mx-auto leading-relaxed">
            Industry analysis, product stories, distribution insights, and
            worship music trends - from the team building modern infrastructure
            for Christian music.
          </p>

          {/* Search bar */}
          <div className="mt-10 max-w-[520px] mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                placeholder="Search articles, topics, authors…"
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-border shadow-sm text-[14px] placeholder:text-muted focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Featured post */}
      <section className="relative pb-20">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="flex items-center justify-between mb-6">
            <span className="label-eyebrow-secondary">Featured</span>
            <Link
              href="#recent"
              className="text-[13px] font-medium text-accent inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              View all posts <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <article className="card overflow-hidden p-0 grid grid-cols-1 lg:grid-cols-2">
            {/* Image area */}
            <div
              className={`relative bg-gradient-to-br ${featured.gradient} min-h-[320px] lg:min-h-[440px] flex items-center justify-center overflow-hidden`}
            >
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgb(67 56 202) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="absolute top-[20%] left-[15%] w-[260px] h-[260px] bg-accent/20 blur-[100px] rounded-full" />
              <div className="absolute bottom-[15%] right-[10%] w-[260px] h-[260px] bg-secondary/20 blur-[100px] rounded-full" />
              <div className="relative w-24 h-24 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-xl">
                <featured.icon
                  className="w-12 h-12 text-accent"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-10 lg:p-12 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <CategoryChip category={featured.category} />
              </div>
              <h2 className="text-[34px] font-bold tracking-tight leading-[1.15] mb-4 text-foreground">
                {featured.title}
              </h2>
              <p className="text-[15px] text-subtle leading-relaxed mb-6">
                {featured.excerpt}
              </p>

              <div className="flex items-center gap-4 text-[13px] text-muted mb-8">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
                <AuthorBlock author={featured.author} size="md" />
                <button className="btn-primary inline-flex items-center gap-1.5 text-[14px]">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Section 3: Categories filter */}
      <section className="border-y border-border bg-surface/40">
        <div className="max-w-[1180px] mx-auto px-8 py-8">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-muted mr-1" />
            {categories.map((cat) => (
              <button
                key={cat.label}
                className={
                  cat.active
                    ? "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent text-white border border-accent text-[13px] font-medium shadow-sm hover:bg-accent-hover transition-colors"
                    : cat.tone === "accent"
                      ? "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border text-[13px] font-medium text-foreground hover:border-accent/30 hover:text-accent transition-colors"
                      : "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border text-[13px] font-medium text-foreground hover:border-secondary/30 hover:text-secondary transition-colors"
                }
              >
                {cat.label}
                <span
                  className={
                    cat.active
                      ? "text-[11px] font-medium text-white/80"
                      : "text-[11px] font-medium text-muted"
                  }
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Recent posts grid */}
      <section id="recent" className="py-20">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="label-eyebrow">Recent posts</span>
              <h2 className="mt-3 text-[36px] font-bold tracking-tight text-foreground">
                Fresh from the team
              </h2>
            </div>
            <p className="text-[14px] text-muted hidden md:block max-w-[360px] text-right">
              New analysis, product stories, and reporting on the Christian
              music industry every week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
              const Icon = post.icon;
              return (
                <article
                  key={post.title}
                  className="card-interactive p-0 overflow-hidden flex flex-col group"
                >
                  {/* Image area */}
                  <div
                    className={`relative h-[180px] bg-gradient-to-br ${post.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.05]"
                      style={{
                        backgroundImage:
                          "radial-gradient(rgb(67 56 202) 1px, transparent 1px)",
                        backgroundSize: "18px 18px",
                      }}
                    />
                    <div className="relative w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Icon
                        className={
                          categoryStyles[post.category].dot === "bg-secondary"
                            ? "w-7 h-7 text-secondary"
                            : categoryStyles[post.category].dot ===
                                "bg-positive"
                              ? "w-7 h-7 text-positive"
                              : "w-7 h-7 text-accent"
                        }
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <CategoryChip category={post.category} />
                    </div>

                    <h3 className="text-[18px] font-semibold tracking-tight leading-snug text-foreground mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[14px] text-subtle leading-relaxed line-clamp-2 mb-5">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-5 border-t border-border flex items-center justify-between">
                      <AuthorBlock author={post.author} />
                      <div className="flex items-center gap-3 text-[12px] text-muted">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <p className="text-[12px] text-muted mt-3 inline-flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-border text-[14px] font-medium text-foreground hover:border-accent/30 hover:text-accent transition-colors">
              Load more articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Newsletter CTA */}
      <section className="pb-20">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-accent-hover to-secondary p-12 md:p-16 shadow-xl">
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "radial-gradient(rgb(255 255 255) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="absolute -top-20 -right-20 w-[360px] h-[360px] bg-secondary/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[360px] h-[360px] bg-accent/30 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-white">
                    Selah Dispatch
                  </span>
                </div>
                <h2 className="text-[40px] font-bold tracking-tight leading-[1.1] mb-4">
                  Get insights in your inbox.
                </h2>
                <p className="text-[16px] text-white/85 leading-relaxed max-w-[480px]">
                  Industry analysis, product updates, and stories from the
                  Christian music economy. Twice a month. No spam, ever.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <label
                  htmlFor="newsletter-email"
                  className="text-[12px] font-medium text-muted uppercase tracking-[0.08em] mb-2 block"
                >
                  Work email
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="you@yourlabel.com"
                    className="flex-1 px-4 py-3 rounded-lg bg-surface border border-border text-[14px] placeholder:text-muted focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10"
                  />
                  <button className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap">
                    <Send className="w-4 h-4" />
                    Subscribe
                  </button>
                </div>
                <p className="text-[12px] text-muted mt-3 leading-relaxed">
                  Read by 6,800+ artists, label managers, worship pastors, and
                  publishers across 48 countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Topics we cover */}
      <section className="pb-24">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center mb-12">
            <span className="label-eyebrow-secondary">Topics we cover</span>
            <h2 className="mt-3 text-[40px] font-bold tracking-tight text-foreground">
              The Christian music industry,{" "}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                in depth.
              </span>
            </h2>
            <p className="mt-4 text-[16px] text-subtle max-w-[640px] mx-auto leading-relaxed">
              Six recurring themes that shape our reporting, our product, and
              the conversations we have with partners every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic) => {
              const Icon = topic.icon;
              const isAccent = topic.tone === "accent";
              return (
                <div
                  key={topic.title}
                  className={`group relative overflow-hidden rounded-2xl border bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                    isAccent
                      ? "border-border hover:border-accent/30"
                      : "border-border hover:border-secondary/30"
                  }`}
                >
                  <div
                    className={`absolute -top-12 -right-12 w-[180px] h-[180px] rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity ${
                      isAccent ? "bg-accent/15" : "bg-secondary/15"
                    }`}
                  />
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                        isAccent
                          ? "bg-accent-soft border border-accent/15"
                          : "bg-secondary-soft border border-secondary/15"
                      }`}
                    >
                      <Icon
                        className={
                          isAccent
                            ? "w-6 h-6 text-accent"
                            : "w-6 h-6 text-secondary"
                        }
                        strokeWidth={1.75}
                      />
                    </div>
                    <h3 className="text-[17px] font-semibold tracking-tight text-foreground mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-[14px] text-subtle leading-relaxed">
                      {topic.desc}
                    </p>
                    <div
                      className={`mt-5 inline-flex items-center gap-1 text-[13px] font-medium opacity-0 group-hover:opacity-100 transition-opacity ${
                        isAccent ? "text-accent" : "text-secondary"
                      }`}
                    >
                      Explore topic
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 7: Closing CTA */}
      <section className="pb-24">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="card flex flex-col md:flex-row items-center justify-between gap-6 p-10">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-md">
                <Music2 className="w-7 h-7 text-white" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-[22px] font-semibold tracking-tight text-foreground">
                  Have a story we should cover?
                </h3>
                <p className="text-[14px] text-subtle mt-1">
                  Pitches from labels, artists, and worship leaders are always
                  welcome.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              Pitch the editors
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
