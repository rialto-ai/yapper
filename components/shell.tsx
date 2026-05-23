import { Sidebar } from "./sidebar";
import { TopBar, type Crumb } from "./topbar";
import { Footer } from "./footer";

export function AppShell({
  title,
  description,
  crumbs,
  children,
}: {
  title?: string;
  description?: string;
  crumbs?: Crumb[];
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 flex flex-col min-w-0">
          <TopBar title={title} description={description} crumbs={crumbs} />
          <div className="flex-1 px-6 py-6 space-y-6">{children}</div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
