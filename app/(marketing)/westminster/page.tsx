import { Metadata } from "next";
import { WestminsterBubbleMap } from "@/components/westminster-bubble-map";

export const metadata: Metadata = {
  title: "Westminster Confession of Faith — Bubble Map",
  description:
    "An interactive visual map of the Westminster Confession of Faith, broken down by doctrine in plain English.",
};

export default function WestminsterPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Westminster Confession of Faith
        </h1>
        <p className="text-sm text-[rgb(var(--muted))] mt-2 max-w-md mx-auto">
          Click a doctrine category to focus it. Click a numbered bubble to read
          the plain-English summary.
        </p>
      </div>
      <WestminsterBubbleMap />
    </main>
  );
}
