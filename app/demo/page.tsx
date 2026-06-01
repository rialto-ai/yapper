import type { Metadata } from "next";
import { DemoApp } from "@/components/demo/demo-app";

export const metadata: Metadata = {
  title: "Demo — Experience Rejoice",
  description:
    "A preview of the Christian audio platform we are building for followers of Jesus. Explore music, podcasts, audiobooks, Scripture, artist pages, events, and redemptive discovery. Demo only — launching Q4 2026.",
};

export default function DemoPage() {
  return <DemoApp />;
}
