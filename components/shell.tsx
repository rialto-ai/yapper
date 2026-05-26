import { TopBar, type Crumb } from "./topbar";

export function AppShell({
  title,
  crumbs,
  children,
}: {
  title?: string;
  crumbs?: Crumb[];
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <TopBar title={title} crumbs={crumbs} />
      <div className="flex-1 px-4 sm:px-6 py-6 space-y-6 max-w-6xl">{children}</div>
    </div>
  );
}
