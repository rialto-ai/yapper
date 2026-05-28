import { MarketingNav } from "@/components/marketing-nav";
import { Footer } from "@/components/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <MarketingNav />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
