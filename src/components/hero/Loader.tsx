"use client";

import { useEffect, useState } from "react";

export default function Loader({ isReady, onComplete }: { isReady: boolean; onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  const [telemetry, setTelemetry] = useState(0);
  const [skipLoader, setSkipLoader] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("aus_loader_played");

    // Fix: Bypasse es lint error, the feature is intentional    
    if (hasPlayed) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSkipLoader(true);
      onComplete(); 
    }
  }, [onComplete]);

  useEffect(() => {
    if (skipLoader) return; 

    const t1 = setTimeout(() => setPhase(1), 100); 
    const t2 = setTimeout(() => setPhase(2), 600); 
    const t3 = setTimeout(() => setPhase(3), 2200); 

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [skipLoader]);

  useEffect(() => {
    if (skipLoader || telemetry >= 100) return; 

    let delay = 35; 

    if (telemetry === 99 && phase < 3) return;

    if (!isReady && telemetry >= 85) {
      if (telemetry === 99) return; 
      delay = 500; 
    } else if (isReady && telemetry >= 85) {
      delay = 15; 
    }

    const timer = setTimeout(() => {
      setTelemetry((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [telemetry, isReady, skipLoader, phase]);

  useEffect(() => {
    if (skipLoader) return;

    if (telemetry === 100) {
      sessionStorage.setItem("aus_loader_played", "true");
      
      const exitTimer = setTimeout(() => {
        setPhase(4); 
        setTimeout(onComplete, 1200); 
      }, 400);
      
      return () => clearTimeout(exitTimer);
    }
  }, [telemetry, onComplete, skipLoader]);

  if (skipLoader) return null;

  return (
    // FIX: Removed bg-[#0a0a0a] and global opacity so the sliding panels actually show the video underneath!
    <div className={`fixed inset-0 z-[120] ${phase === 4 ? "pointer-events-none" : ""}`}>
      
      {/* THE 4 CADILLAC SLIDING PANELS */}
      <div className="absolute inset-0 flex z-0 overflow-hidden">
        {[0, 75, 150, 225].map((delay, index) => (
          <div
            key={index}
            className={`h-full w-1/4 bg-[#0a0a0a] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
              phase === 4 ? "-translate-y-full" : "translate-y-0"
            }`}
            style={{ transitionDelay: `${phase === 4 ? delay : 0}ms` }}
          />
        ))}
      </div>

      {/* THE CONTENT WRAPPER - Text fades out while panels slide */}
      <div className={`relative z-10 w-full h-full flex flex-col items-center justify-center px-4 transition-opacity duration-300 ${phase === 4 ? "opacity-0" : "opacity-100"}`}>

        {/* THE SLOGAN - Now uses CSS animation for instant FCP */}
        <div className="mb-6 md:mb-10 animate-fade-in-up">
          <p className="font-mono text-[10px] md:text-[13px] tracking-[0.3em] md:tracking-[0.5em] text-white/50 uppercase font-medium text-center">
            Racing Towards Electric Excellence
          </p>
        </div>

        {/* THE LOGO BLOCK - Now uses CSS animation */}
        <div className="flex items-center justify-center gap-3 md:gap-6 mb-12 md:mb-16 animate-fade-in-up [animation-delay:200ms]">
          <span className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter text-white">
            AUS
          </span>

          <div className="overflow-visible flex items-center">
            <svg viewBox="0 0 260 80" className="w-[180px] sm:w-[220px] md:w-[320px] h-auto overflow-visible">
              <text y="62" fontSize="72" fontWeight="900" letterSpacing="-0.02em" className="font-sans italic">
                {"Racing".split("").map((char, index) => (
                  <tspan
                    key={index}
                    fill={phase >= 3 ? "#D4AF37" : "transparent"} 
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeDasharray="400"
                    strokeDashoffset={phase >= 2 ? "0" : "400"}
                    style={{
                      transition: `stroke-dashoffset 1.2s cubic-bezier(0.65, 0, 0.35, 1) ${index * 0.15}s, fill 0.6s ease-in ${1.5 + (index * 0.05)}s`
                    }}
                  >
                    {char}
                  </tspan>
                ))}
              </text>
            </svg>
          </div>
        </div>

        {/* THE UNIVERSITY SUBTITLE - Fades in slightly later with a simple delay */}
        <div className="mb-12 md:mb-16 animate-fade-in-up [animation-delay:600ms]">
          <p className="font-sans text-[10px] md:text-[14px] text-white/30 tracking-[0.1em] text-center uppercase px-4">
            The Official Formula Student Team of The American University of Sharjah
          </p>
        </div>

        {/* TELEMETRY */}
        <div className="flex flex-col items-center gap-4 w-full max-w-[200px] md:max-w-[300px]">
          <div className="w-full h-[2px] bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-75 bg-primary" 
              style={{ width: `${telemetry}%` }}
            />
          </div>
          <span className="font-mono text-xs md:text-sm font-bold tracking-[0.3em] text-white/60">
            {telemetry}%
          </span>
        </div>
        
      </div>
    </div>
  );
}