// page.tsx — /sponsors route
// OWNER: Yasmeen
// Server component — full sponsors page.
// Contains: headline, benefit bullets, SponsorTiers grid, resend contact form, social proof logos.
import SponsorHeroWithCTA from "@/components/sponsors/SponsorHeroWithCTA";
import PartnersSection from "@/components/sponsors/PartnersSection";
import WhyPartnerSection from "@/components/sponsors/WhyPartnerSection";
import SponsorshipProposalCTA from "@/components/sponsors/SponsorshipProposalCTA";

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <SponsorHeroWithCTA />
      <PartnersSection />
      <WhyPartnerSection />
      <SponsorshipProposalCTA />
    </main>
  );
}