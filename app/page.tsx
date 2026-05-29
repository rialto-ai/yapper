import { Header } from "@/components/rejoice/header";
import { Hero } from "@/components/rejoice/hero";
import { InstitutionalOverview } from "@/components/rejoice/institutional-overview";
import { GlobalResearchNetwork } from "@/components/rejoice/global-research-network";
import { ResearchDomains } from "@/components/rejoice/research-domains";
import { FoundationStack } from "@/components/rejoice/foundation-stack";
import { AIAgents } from "@/components/rejoice/ai-agents";
import { ProtocolInfrastructure } from "@/components/rejoice/protocol-infrastructure";
import { ApplicationsPlatforms } from "@/components/rejoice/applications-platforms";
import { OperatingPrinciples } from "@/components/rejoice/operating-principles";
import { Partners } from "@/components/rejoice/partners";
import { FinalCTA } from "@/components/rejoice/final-cta";
import { Footer } from "@/components/rejoice/footer";

export default function RejoiceFoundationPage() {
  return (
    <div className="rejoice scroll-smooth">
      <Header />
      <main>
        <Hero />
        <InstitutionalOverview />
        <GlobalResearchNetwork />
        <ResearchDomains />
        <FoundationStack />
        <AIAgents />
        <ProtocolInfrastructure />
        <ApplicationsPlatforms />
        <OperatingPrinciples />
        <Partners />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
