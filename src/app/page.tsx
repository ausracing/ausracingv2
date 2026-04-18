feature/home-sections
"use client";

import { useState } from "react";
import Loader from "@/components/hero/Loader";
import HeroVideo from "@/components/hero/HeroVideo";
import SponsorsSlider from "@/components/sponsors/SponsorSlider";
import AUSParagraph from "@/components/hero/AUSParagraph";


// feature/header
// main
export default function Home() {
  // Keeps track of when the loader is completely finished to unmount it
  const [isLoaderDone, setIsLoaderDone] = useState(false);
  
  // Set to FALSE so the loader actually waits for the video to buffer
  const [videoReady, setVideoReady] = useState(false);

  return (
feature/home-sections
    <main className="bg-[#18181b] text-foreground relative flex flex-col">
      
      {/* THE LOADER */}
      {!isLoaderDone && (
        <Loader 
          isReady={videoReady} 
          onComplete={() => setIsLoaderDone(true)}
        />
      )}
    </main>
      {/* HERO CONTENT */}
      <HeroVideo onVideoReady={() => setVideoReady(true)} />
      <SponsorsSlider />
      <AUSParagraph />
    <main className="min-h-screen bg-background text-foreground">
      {/* Your dark canvas is now clean and ready for the Hero video */}
    </main>

import type { Metadata } from "next";
import CarTeaser from "@/components/car-concept/CarTeaser";

export const metadata: Metadata = {
  title: "AUS Racing",
  description: "AUS Racing — Formula Student team at the American University of Sharjah.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <CarTeaser />
    </main>
  );
};