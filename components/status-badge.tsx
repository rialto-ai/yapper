type Tone = "positive" | "warning" | "negative" | "neutral" | "info";

const POSITIVE = "bg-positive-soft text-positive border border-positive/15";
const WARNING = "bg-warning-soft text-warning border border-warning/15";
const NEGATIVE = "bg-negative-soft text-negative border border-negative/15";
const NEUTRAL = "bg-surface-2 text-subtle border border-border";
const INFO = "bg-accent-soft text-accent border border-accent/15";

const tones: Record<Tone, string> = {
  positive: POSITIVE,
  warning: WARNING,
  negative: NEGATIVE,
  neutral: NEUTRAL,
  info: INFO,
};

const statusTone: Record<string, Tone> = {
  // Positive (green) - things that are done, healthy, paid
  Complete: "positive",
  Completed: "positive",
  Active: "positive",
  Clear: "positive",
  Confirmed: "positive",
  Ready: "positive",
  Delivered: "positive",
  Registered: "positive",
  Claimed: "positive",
  Monetised: "positive",
  Current: "positive",
  Licensed: "positive",
  "CCLI Listed": "positive",
  Listed: "positive",
  Approved: "positive",
  Finalised: "positive",
  "Fully Recouped": "positive",
  "Registered (ASCAP)": "positive",
  "Registered (BMI)": "positive",
  "Registered (SESAC)": "positive",
  "Registered (APRA)": "positive",
  None: "positive",
  Signed: "positive",

  // Info (indigo) - in motion, scheduled, on-track
  "In Progress": "info",
  "In Review": "info",
  "Under review": "info",
  "Under Review": "info",
  Review: "info",
  Processing: "info",
  Scheduled: "info",
  Received: "info",
  Queued: "info",
  Upcoming: "info",
  Managed: "info",
  Submitted: "info",
  "Strategy call required": "info",

  // Warning (amber) - needs attention but not urgent
  Pending: "warning",
  "Assets Pending": "warning",
  "Metadata Review": "warning",
  "Rights Pending": "warning",
  "Needs signature": "warning",
  Held: "warning",
  "Information Needed": "warning",

  // Negative (red) - broken, blocked, urgent
  High: "negative",
  Conflict: "negative",
  Disputed: "negative",
  Blocked: "negative",
  "Ownership Dispute": "negative",
  "Publishing Conflict": "negative",
  "Action required": "negative",
  "Missing tax info": "negative",

  // Neutral (grey) - absence, draft, off
  Draft: "neutral",
  "Not delivered": "neutral",
  Unclaimed: "neutral",
  "Not Monetised": "neutral",
  Unregistered: "neutral",
  Unlicensed: "neutral",
  "Not Listed": "neutral",
  Missing: "neutral",
  Unassigned: "neutral",
  "Not selected": "neutral",
  Deferred: "neutral",
  Inactive: "neutral",
  Medium: "neutral",
  Low: "neutral",
  "Not Started": "neutral",
  "Not Applicable": "neutral",
};

export function StatusBadge({ status }: { status: string }) {
  const tone = statusTone[status] ?? "neutral";
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium ${tones[tone]}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          tone === "positive"
            ? "bg-positive"
            : tone === "warning"
            ? "bg-warning"
            : tone === "negative"
            ? "bg-negative"
            : tone === "info"
            ? "bg-accent"
            : "bg-muted"
        }`}
      />
      {status}
    </span>
  );
}
