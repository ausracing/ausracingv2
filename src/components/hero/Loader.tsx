"use client";

import { useEffect, useState } from "react";

// ✨ THE MAGIC FIX: Resets on refresh, but stays true during client navigation
let hasPlayedThisReload = false;

export default function Loader({ isReady, onComplete }: { isReady: boolean; onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  const [telemetry, setTelemetry] = useState(0);
  
  // Initializes based on the variable outside the component
  const [isAlreadyLoaded] = useState(hasPlayedThisReload);

  // 0. INITIAL CHECK
  useEffect(() => {
    if (isAlreadyLoaded) {
      onComplete(); 
    }
  }, [isAlreadyLoaded, onComplete]);

  // 1. THE CINEMATIC TIMELINE
  useEffect(() => {
    if (isAlreadyLoaded) return; 

    const t1 = setTimeout(() => setPhase(1), 100); 
    const t2 = setTimeout(() => setPhase(2), 600); 
    const t3 = setTimeout(() => setPhase(3), 2800); 

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isAlreadyLoaded]);

  // 2. THE DYNAMIC GEARBOX
  useEffect(() => {
    if (isAlreadyLoaded || telemetry >= 100) return; 

    let delay = 35; 

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
  }, [telemetry, isReady, isAlreadyLoaded]);

  // 3. THE EXIT TRIGGER
  useEffect(() => {
    if (isAlreadyLoaded) return;

    if (telemetry === 100) {
      // Mark as played right before exit so page changes ignore the loader
      hasPlayedThisReload = true;
      
      const exitTimer = setTimeout(() => {
        setPhase(4); 
        setTimeout(onComplete, 1200); 
      }, 400);
      
      return () => clearTimeout(exitTimer);
    }
  }, [telemetry, onComplete, isAlreadyLoaded]);

  // Instantly skip rendering if loaded
  if (isAlreadyLoaded) return null;
  if (phase === 4 && telemetry === 101) return null;

  return (
    <div className={`fixed inset-0 z-[100] ${phase === 4 ? "pointer-events-none" : ""}`}>
      
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

      {/* THE CONTENT WRAPPER */}
      <div className={`relative z-10 w-full h-full transition-opacity duration-300 ${phase === 4 ? "opacity-0" : "opacity-100"}`}>
        
        {/* THE SLOGAN */}
        <div className="absolute top-[calc(50%-85px)] left-1/2 -translate-x-1/2 w-full text-center">
          <div className={`transition-all duration-1000 ease-out ${phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="font-mono text-base md:text-lg tracking-[0.2em] md:tracking-[0.3em] text-white/90 uppercase font-medium">
              Racing Towards Electric Excellence
            </p>
          </div>
        </div>

        {/* THE LOGO BLOCK */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
          <span
            className={`text-6xl md:text-7xl font-bold tracking-wider text-white transition-all duration-1000 ease-out ${
              phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            AUS
          </span>

          <div className="overflow-visible">
            <svg width="260" height="80" viewBox="0 0 260 80" className="overflow-visible">
              <text y="62" className="text-6xl md:text-7xl font-bold tracking-wider">
                {"Racing".split("").map((char, index) => (
                  <tspan
                    key={index}
                    fill={phase >= 3 ? "#D4AF37" : "transparent"} 
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeDasharray="400"
                    strokeDashoffset={phase >= 2 ? "0" : "400"}
                    style={{
                      transition: `stroke-dashoffset 1.5s cubic-bezier(0.65, 0, 0.35, 1) ${index * 0.15}s, fill 0.5s ease-in`
                    }}
                  >
                    {char}
                  </tspan>
                ))}
              </text>
            </svg>
          </div>
        </div>

        {/* TELEMETRY */}
        <div className="absolute bottom-10 right-12 font-mono flex items-center gap-4 text-primary opacity-80">
          <span className="text-xl md:text-2xl font-bold tracking-widest w-[70px] text-right text-white">
            {telemetry}%
          </span>
          <div className="w-24 h-[3px] bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-75 bg-primary" 
              style={{ width: `${telemetry}%` }}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}