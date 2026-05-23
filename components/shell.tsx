import { Sidebar } from "./sidebar";
import { TopBar, type Crumb } from "./topbar";

export function AppShell({
  title,
  eyebrow,
  crumbs,
  children,
}: {
  title?: string;
  eyebrow?: string;
  crumbs?: Crumb[];
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid-bg">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 flex flex-col min-w-0">
          <TopBar title={title} eyebrow={eyebrow} crumbs={crumbs} />
          <div className="flex-1 p-5 space-y-5">{children}</div>
        </main>
      </div>
    </div>
  );
}
