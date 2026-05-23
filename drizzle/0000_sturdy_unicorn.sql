CREATE TABLE "account_snapshots" (
	"id" serial PRIMARY KEY NOT NULL,
	"account_id" integer NOT NULL,
	"captured_at" timestamp with time zone DEFAULT now() NOT NULL,
	"followers" integer NOT NULL,
	"signal" real NOT NULL,
	"velocity" real NOT NULL,
	"delta_24h" real DEFAULT 0 NOT NULL,
	"growth_7d" real DEFAULT 0 NOT NULL,
	"engagement" real DEFAULT 0 NOT NULL,
	"reach_eff" real DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "accounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"x_user_id" varchar(32) NOT NULL,
	"handle" varchar(32) NOT NULL,
	"name" varchar(128) NOT NULL,
	"bio" text DEFAULT '' NOT NULL,
	"verified" boolean DEFAULT false NOT NULL,
	"followers" integer DEFAULT 0 NOT NULL,
	"following" integer DEFAULT 0 NOT NULL,
	"posts_count" integer DEFAULT 0 NOT NULL,
	"category" varchar(32) DEFAULT 'researcher' NOT NULL,
	"primary_narrative" varchar(64),
	"tracked" boolean DEFAULT true NOT NULL,
	"first_seen_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ingestion_runs" (
	"id" serial PRIMARY KEY NOT NULL,
	"started_at" timestamp with time zone DEFAULT now() NOT NULL,
	"finished_at" timestamp with time zone,
	"source" varchar(32) DEFAULT 'x-v2' NOT NULL,
	"query" text,
	"posts_fetched" integer DEFAULT 0 NOT NULL,
	"posts_inserted" integer DEFAULT 0 NOT NULL,
	"posts_classified" integer DEFAULT 0 NOT NULL,
	"accounts_touched" integer DEFAULT 0 NOT NULL,
	"errors" jsonb DEFAULT '[]'::jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "narrative_buckets" (
	"id" serial PRIMARY KEY NOT NULL,
	"narrative_id" varchar(64) NOT NULL,
	"bucket_start" timestamp with time zone NOT NULL,
	"mentions" integer DEFAULT 0 NOT NULL,
	"engagement" bigint DEFAULT 0 NOT NULL,
	"unique_authors" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "narratives" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"label" varchar(128) NOT NULL,
	"color" varchar(16) NOT NULL,
	"keywords" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"x_post_id" varchar(32) NOT NULL,
	"account_id" integer NOT NULL,
	"text" text NOT NULL,
	"lang" varchar(8) DEFAULT 'en' NOT NULL,
	"reply_count" integer DEFAULT 0 NOT NULL,
	"repost_count" integer DEFAULT 0 NOT NULL,
	"like_count" integer DEFAULT 0 NOT NULL,
	"quote_count" integer DEFAULT 0 NOT NULL,
	"impressions" integer DEFAULT 0 NOT NULL,
	"narrative_id" varchar(64),
	"sentiment" varchar(16),
	"velocity" varchar(16),
	"posted_at" timestamp with time zone NOT NULL,
	"ingested_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "account_snapshots" ADD CONSTRAINT "account_snapshots_account_id_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "narrative_buckets" ADD CONSTRAINT "narrative_buckets_narrative_id_narratives_id_fk" FOREIGN KEY ("narrative_id") REFERENCES "public"."narratives"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_account_id_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_narrative_id_narratives_id_fk" FOREIGN KEY ("narrative_id") REFERENCES "public"."narratives"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "snapshots_account_time_idx" ON "account_snapshots" USING btree ("account_id","captured_at");--> statement-breakpoint
CREATE UNIQUE INDEX "accounts_x_user_id_idx" ON "accounts" USING btree ("x_user_id");--> statement-breakpoint
CREATE UNIQUE INDEX "accounts_handle_idx" ON "accounts" USING btree ("handle");--> statement-breakpoint
CREATE UNIQUE INDEX "narrative_buckets_unique_idx" ON "narrative_buckets" USING btree ("narrative_id","bucket_start");--> statement-breakpoint
CREATE UNIQUE INDEX "posts_x_post_id_idx" ON "posts" USING btree ("x_post_id");--> statement-breakpoint
CREATE INDEX "posts_account_idx" ON "posts" USING btree ("account_id","posted_at");--> statement-breakpoint
CREATE INDEX "posts_narrative_idx" ON "posts" USING btree ("narrative_id","posted_at");--> statement-breakpoint
CREATE INDEX "posts_posted_at_idx" ON "posts" USING btree ("posted_at");