import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <div className="ml-[240px]">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
