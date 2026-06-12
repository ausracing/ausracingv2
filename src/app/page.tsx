"use client";

import { useState } from "react";
import Loader from "@/components/hero/Loader";
import HeroVideo from "@/components/hero/HeroVideo";
import SponsorsSlider from "@/components/sponsors/SponsorSlider";
import AUSParagraph from "@/components/hero/AUSParagraph";
import CarTeaser from "@/components/car-concept/CarTeaser";

export default function Home() {
  const [isLoaderDone, setIsLoaderDone] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <main className="bg-[#18181b] text-foreground relative flex flex-col">
      {!isLoaderDone && (
        <Loader
          isReady={videoReady}
          onComplete={() => setIsLoaderDone(true)}
        />
      )}

      <HeroVideo onVideoReady={() => setVideoReady(true)} />
      <SponsorsSlider />
      <AUSParagraph />
      <CarTeaser />
    </main>
  );
}