"use client";

import { useRef } from "react";
import SponsorHero from "./SponsorHero";
import ScrollCTA from "@/components/shared/ScrollCTA";

export default function SponsorHeroWithCTA() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SponsorHero />
      <div
        ref={heroRef}
        className="w-full h-px pointer-events-none invisible"
      />
      <ScrollCTA heroRef={heroRef} />
    </>
  );
}