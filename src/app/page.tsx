"use client";

import { useState } from "react";
import Loader from "@/components/hero/Loader";

export default function Home() {
  // Keeps track of when the loader is completely finished to unmount it
  const [isLoaderDone, setIsLoaderDone] = useState(false);
  
  // Ready for your <video onCanPlayThrough={() => setVideoReady(true)} />
  // Defaulting to true for now so the branch doesn't stall if someone else pulls it
  const [videoReady, setVideoReady] = useState(true);

  return (
    <main className="min-h-screen bg-[#18181b] text-foreground relative flex flex-col items-center justify-center overflow-hidden">
      
      {/* THE LOADER */}
      {!isLoaderDone && (
        <Loader 
          isReady={videoReady} 
          onComplete={() => setIsLoaderDone(true)} 
        />
      )}

      {/* HERO CONTENT PLACEHOLDER */}
      <div className="relative z-10 text-center mt-20">
        <h1 className="text-4xl font-mono text-white mb-4 uppercase tracking-[0.1em]">AUS Racing</h1>
        <p className="text-white/50 italic">[ Hero Video Goes Here ]</p>
      </div>
      
    </main>
  );
}
