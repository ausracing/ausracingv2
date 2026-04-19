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

      {/* 2. OVERLAY LAYER (Dark gradient added for perfect contrast) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10"></div>

      {/* 3. FOREGROUND CONTENT LAYER (Top layer: z-20) */}
      <div className="relative z-20 text-center flex flex-col items-center gap-6 px-4 select-none">
        
        {/* TITLE BLOCK */}
        <h1 className="flex flex-wrap justify-center items-center gap-3 lg:gap-4 text-6xl md:text-7xl lg:text-7xl font-extrabold font-orbitron tracking-[0.1em] text-white uppercase">
          <span>AUS</span>
          <span className="text-primary">RACING</span>
        </h1>
        
        {/* SUBTITLE BLOCK (Widened to max-w-4xl so it fits on one line) */}
        <div className="flex flex-col items-center gap-2 max-w-4xl text-center">
          <p className="text-white/80 text-lg md:text-xl font-medium capitalize tracking-wide">
            Pushing the limits of engineering and performance.
          </p>
          <p className="text-sm md:text-base font-medium text-white/60 tracking-wide">
            The Official Formula Student Team of The American University of Sharjah. <br></br> Join us on this exciting journey as we redefine what it means to be an engineering student in UAE.
          </p>
        </div>

        {/* BUTTON GROUP */}
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <a 
            href="/sponsors" 
            className="px-8 py-3 bg-primary/90 text-background text-sm tracking-[0.1em] uppercase font-bold rounded-[4px] hover:bg-primary hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            View Sponsorship Specs
          </a>
          <a 
            href="/car-concept" 
            className="px-8 py-3 bg-black/85 border-[1.5px] border-white/20 text-white text-sm tracking-[0.1em] uppercase font-bold rounded-[4px] hover:bg-black hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            See the Car &rarr;
          </a>
        </div>
      </div>

    </section>
  );
}