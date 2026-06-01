import { Check, X } from "lucide-react";

export function IntegrityCard({
  text,
  stance = "affirm",
}: {
  text: string;
  stance?: "affirm" | "prohibit";
}) {
  const affirm = stance === "affirm";
  return (
    <div className="card flex items-start gap-3 p-5">
      <span
        className={
          "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full " +
          (affirm
            ? "bg-accent/[0.08] text-accent"
            : "bg-gold/[0.12] text-gold")
        }
      >
        {affirm ? <Check size={14} strokeWidth={2.4} /> : <X size={14} strokeWidth={2.4} />}
      </span>
      <p className="text-[14.5px] leading-relaxed text-subtle">{text}</p>
    </div>
  );
}
