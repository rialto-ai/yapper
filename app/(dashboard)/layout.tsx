import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";
import { AuthGate } from "@/components/auth-gate";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGate>
      <div className="min-h-screen bg-surface text-[14px]">
        <Sidebar />
        <div className="ml-[240px]">
          <Topbar />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </AuthGate>
  );
}
