import { AppShell } from "@/components/shell";
import { AlertsBoard } from "@/components/alerts-board";

export const metadata = { title: "Alerts" };

export default function Page() {
  return (
    <AppShell
      title="Alerts"
      description="Get notified when accounts, narratives, or the ecosystem move."
      crumbs={[{ label: "Workspace" }, { label: "Alerts" }]}
    >
      <AlertsBoard />
    </AppShell>
  );
}
