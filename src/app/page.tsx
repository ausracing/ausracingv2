"use client";
import { useRef, useState } from "react";
import Loader from "@/components/hero/Loader";
import HeroVideo from "@/components/hero/HeroVideo";
import SponsorsStrip from "@/components/sponsors/SponsorsStrip";
import AUSParagraph from "@/components/hero/AUSParagraph";
import CarTeaser from "@/components/car-concept/CarTeaser";
import NewsletterHome from "@/components/newsletterinfo/NewsletterHome";
import CompetitionCountdown from "@/components/Countdown_quote/CompetitionCountdown";
import TimelineSection from "@/components/Timeline/TimelineSection";
import QuoteSection from "@/components/Countdown_quote/QuoteSection";
import Spacer from "@/components/ui/spacer";
import ScrollCTA from "@/components/shared/ScrollCTA";

export default function Home() {
  // Keeps track of when the loader is completely finished to unmount it
  const [isLoaderDone, setIsLoaderDone] = useState(false);

  // Set to FALSE so the loader actually waits for the video to buffer
  const [videoReady, setVideoReady] = useState(false);

  // 1. Initialize the reference tracker for the Scroll CTA
  const heroRef = useRef<HTMLElement>(null);
  
  return (
    <main className="bg-[#18181b] text-foreground relative flex flex-col">
      {!isLoaderDone && (
        <Loader
          isReady={videoReady}
          onComplete={() => setIsLoaderDone(true)}
        />
      )}

      {/* 2. Attach the ref to a section wrapping your massive video */}
      <section ref={heroRef} className="relative w-full">
        <HeroVideo 
          onVideoReady={() => setVideoReady(true)}
        />
      </section>

      <SponsorsStrip />
      <AUSParagraph />
      <Spacer height={55} />
      <CompetitionCountdown />
      <Spacer height={55} />
      <TimelineSection />
      <Spacer height={15} />
      <CarTeaser />
      <Spacer height={90} />
      <NewsletterHome />
      <QuoteSection />
      
      {/* 3. Drop the CTA component inside the main container */}
      <ScrollCTA heroRef={heroRef} />
    </main>
  );
}