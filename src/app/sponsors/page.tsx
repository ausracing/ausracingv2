// page.tsx — /sponsors route
// OWNER: Yasmeen
// Server component — full sponsors page.
// Contains: headline, benefit bullets, SponsorTiers grid, contact form, Calendly link, social proof logos.
"use client"

import { useRef } from "react";
import ScrollCTA from "@/components/shared/ScrollCTA";
import SponsorHero from "../../components/sponsors/SponsorHero"
import PartnersSection from "../../components/sponsors/PartnersSection"
import WhyPartnerSection from "../../components/sponsors/WhyPartnerSection"
import SponsorshipBenefitsSection from "../../components/sponsors/SponsorshipBenefitsSection"
import SponsorApplySection from "@/components/sponsors/SponsorApplySection"

export default function SponsorsPage() {

  // Initialize the tracker
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <SponsorHero />

      <div ref={heroRef} className="w-full h-px pointer-events-none invisible" />

      <PartnersSection />
      <WhyPartnerSection />
      <SponsorshipBenefitsSection />
      
      <ScrollCTA heroRef={heroRef} />
      <SponsorApplySection />
    </main>
  )
}