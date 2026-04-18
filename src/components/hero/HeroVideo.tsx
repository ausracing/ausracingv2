// HeroVideo.tsx
// OWNER: Hashir
// Client component — looping muted background video with overlay text and CTA button.
// Uses: <video> tag with autoPlay loop muted playsInline
// CTA button: gold "Sponsor Us" button
// src/components/hero/HeroVideo.tsx
// src/components/hero/HeroVideo.tsx
"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  onVideoReady: () => void;
}

export default function HeroVideo({ onVideoReady }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      onVideoReady();
    }
  }, [onVideoReady]);

  return (
    <section className="relative w-full h-[calc(100vh-68px)] flex items-center justify-center overflow-hidden">
      
      {/* 1. BACKGROUND VIDEO LAYER (Base layer: z-0) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onCanPlayThrough={onVideoReady}
        onLoadedData={onVideoReady}
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/media/hero.mp4" type="video/mp4" />
        <source src="/media/hero.webm" type="video/webm" />
      </video>

      {/* 2. OVERLAY LAYER (Middle layer: z-10) */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* 3. FOREGROUND CONTENT LAYER (Top layer: z-20) */}
      <div className="relative z-20 text-center flex flex-col items-center gap-6 px-4 select-none">
        <h1 className="text-5xl md:text-7xl font-bold tracking-[0.1em] text-white uppercase font-mono">
          AUS Racing
        </h1>
        
        <p className="text-white/80 text-lg md:text-xl max-w-2xl font-mono tracking-wide">
          Pushing the limits of engineering and performance.
        </p>

        {/* BUTTON GROUP */}
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <a 
            href="/sponsors" 
            className="px-8 py-3 bg-primary/90 text-background font-mono text-sm tracking-[0.1em] uppercase font-bold rounded-[4px] hover:bg-primary hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            View Sponsorship Specs
          </a>
          <a 
            href="/car-concept" 
            className="px-8 py-3 bg-black/85 border-[1.5px] border-white/20 text-white font-mono text-sm tracking-[0.1em] uppercase font-bold rounded-[4px] hover:bg-black hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            See the Car &rarr;
          </a>
        </div>
      </div>

    </section>
  );
}