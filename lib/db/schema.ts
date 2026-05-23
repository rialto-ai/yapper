import {
  bigint,
  boolean,
  index,
  integer,
  jsonb,
  pgTable,
  real,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const narratives = pgTable("narratives", {
  id:        varchar("id",        { length: 64 }).primaryKey(),
  label:     varchar("label",     { length: 128 }).notNull(),
  color:     varchar("color",     { length: 16 }).notNull(),
  keywords:  jsonb("keywords").$type<string[]>().notNull().default([]),
  active:    boolean("active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const accounts = pgTable(
  "accounts",
  {
    id:               serial("id").primaryKey(),
    xUserId:          varchar("x_user_id",  { length: 32 }).notNull(),
    handle:           varchar("handle",     { length: 32 }).notNull(),
    name:             varchar("name",       { length: 128 }).notNull(),
    bio:              text("bio").notNull().default(""),
    verified:         boolean("verified").notNull().default(false),
    followers:        integer("followers").notNull().default(0),
    following:        integer("following").notNull().default(0),
    postsCount:       integer("posts_count").notNull().default(0),
    category:         varchar("category",   { length: 32 }).notNull().default("researcher"),
    primaryNarrative: varchar("primary_narrative", { length: 64 }),
    tracked:          boolean("tracked").notNull().default(true),
    firstSeenAt:      timestamp("first_seen_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt:        timestamp("updated_at",    { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    xUserIdIdx: uniqueIndex("accounts_x_user_id_idx").on(t.xUserId),
    handleIdx:  uniqueIndex("accounts_handle_idx").on(t.handle),
  }),
);

export const posts = pgTable(
  "posts",
  {
    id:           serial("id").primaryKey(),
    xPostId:      varchar("x_post_id", { length: 32 }).notNull(),
    accountId:    integer("account_id").notNull().references(() => accounts.id, { onDelete: "cascade" }),
    text:         text("text").notNull(),
    lang:         varchar("lang", { length: 8 }).notNull().default("en"),
    replyCount:   integer("reply_count").notNull().default(0),
    repostCount:  integer("repost_count").notNull().default(0),
    likeCount:    integer("like_count").notNull().default(0),
    quoteCount:   integer("quote_count").notNull().default(0),
    impressions:  integer("impressions").notNull().default(0),
    narrativeId:  varchar("narrative_id", { length: 64 }).references(() => narratives.id, { onDelete: "set null" }),
    sentiment:    varchar("sentiment", { length: 16 }), // bullish / bearish / neutral / technical / speculative
    velocity:     varchar("velocity",  { length: 16 }), // viral / rising / normal
    postedAt:     timestamp("posted_at",   { withTimezone: true }).notNull(),
    ingestedAt:   timestamp("ingested_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    xPostIdIdx:     uniqueIndex("posts_x_post_id_idx").on(t.xPostId),
    accountIdx:     index("posts_account_idx").on(t.accountId, t.postedAt),
    narrativeIdx:   index("posts_narrative_idx").on(t.narrativeId, t.postedAt),
    postedAtIdx:    index("posts_posted_at_idx").on(t.postedAt),
  }),
);

export const accountSnapshots = pgTable(
  "account_snapshots",
  {
    id:          serial("id").primaryKey(),
    accountId:   integer("account_id").notNull().references(() => accounts.id, { onDelete: "cascade" }),
    capturedAt:  timestamp("captured_at", { withTimezone: true }).notNull().defaultNow(),
    followers:   integer("followers").notNull(),
    signal:      real("signal").notNull(),
    velocity:    real("velocity").notNull(),
    delta24h:    real("delta_24h").notNull().default(0),
    growth7d:    real("growth_7d").notNull().default(0),
    engagement:  real("engagement").notNull().default(0),
    reachEff:    real("reach_eff").notNull().default(0),
  },
  (t) => ({ accountTimeIdx: index("snapshots_account_time_idx").on(t.accountId, t.capturedAt) }),
);

// One row per (narrative, hour) for fast leaderboards.
export const narrativeBuckets = pgTable(
  "narrative_buckets",
  {
    id:            serial("id").primaryKey(),
    narrativeId:   varchar("narrative_id", { length: 64 }).notNull().references(() => narratives.id, { onDelete: "cascade" }),
    bucketStart:   timestamp("bucket_start", { withTimezone: true }).notNull(),
    mentions:      integer("mentions").notNull().default(0),
    engagement:    bigint("engagement", { mode: "number" }).notNull().default(0),
    uniqueAuthors: integer("unique_authors").notNull().default(0),
  },
  (t) => ({
    bucketIdx: uniqueIndex("narrative_buckets_unique_idx").on(t.narrativeId, t.bucketStart),
  }),
);

export const ingestionRuns = pgTable("ingestion_runs", {
  id:               serial("id").primaryKey(),
  startedAt:        timestamp("started_at",  { withTimezone: true }).notNull().defaultNow(),
  finishedAt:       timestamp("finished_at", { withTimezone: true }),
  source:           varchar("source", { length: 32 }).notNull().default("x-v2"),
  query:            text("query"),
  postsFetched:     integer("posts_fetched").notNull().default(0),
  postsInserted:    integer("posts_inserted").notNull().default(0),
  postsClassified:  integer("posts_classified").notNull().default(0),
  accountsTouched:  integer("accounts_touched").notNull().default(0),
  errors:           jsonb("errors").$type<string[]>().notNull().default([]),
});

export type Account = typeof accounts.$inferSelect;
export type NewAccount = typeof accounts.$inferInsert;
export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
export type Narrative = typeof narratives.$inferSelect;
export type NewNarrative = typeof narratives.$inferInsert;
export type AccountSnapshot = typeof accountSnapshots.$inferSelect;
