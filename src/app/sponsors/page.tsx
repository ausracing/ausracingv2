// page.tsx — /sponsors route
// OWNER: Yasmeen
// Server component — full sponsors page.
// Contains: headline, benefit bullets, SponsorTiers grid, contact form, Calendly link, social proof logos.
import SponsorHero from "../../components/sponsors/SponsorHero"
import PartnersSection from "../../components/sponsors/PartnersSection"
import WhyPartnerSection from "../../components/sponsors/WhyPartnerSection"
import SponsorshipBenefitsSection from "../../components/sponsors/SponsorshipBenefitsSection"

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <SponsorHero />
      <PartnersSection />
      <WhyPartnerSection />
      <SponsorshipBenefitsSection />
      
    </main>
  )
}

