"use client";
import { useState } from "react";
import Loader from "@/components/hero/Loader";
import HeroVideo from "@/components/hero/HeroVideo";
// import SponsorsSlider from "@/components/sponsors/SponsorSlider";
import AUSParagraph from "@/components/hero/AUSParagraph";
import CarTeaser from "@/components/car-concept/CarTeaser";
import NewsletterHome from "@/components/newsletterinfo/NewsletterHome";
import CompetitionCountdown from "@/components/Countdown_quote/CompetitionCountdown";
import { Quote } from "lucide-react";
import QuoteSection from "@/components/Countdown_quote/QuoteSection";

export default function Home() {
  // Keeps track of when the loader is completely finished to unmount it
  const [isLoaderDone, setIsLoaderDone] = useState(false);

  // Set to FALSE so the loader actually waits for the video to buffer
  const [videoReady, setVideoReady] = useState(false);

  return (
    <main className="bg-[#18181b] text-foreground relative flex flex-col">
      {/* THE LOADER */}
      {!isLoaderDone && (
        <Loader
          isReady={videoReady}
          onComplete={() => setIsLoaderDone(true)}
        />
      )}

      {/* HERO CONTENT */}
      <HeroVideo onVideoReady={() => setVideoReady(true)} />
      {/* <SponsorsSlider /> */}
      <AUSParagraph />
      <CompetitionCountdown />
      <QuoteSection />
      <CarTeaser />
      <NewsletterHome />

      
    </main>
  );
}