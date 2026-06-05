// src/app/template.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isRevealing, setIsRevealing] = useState(true);
  const [skipTemplate, setSkipTemplate] = useState(false);

  useEffect(() => {
    // Check our existing memory bank
    const hasPlayed = sessionStorage.getItem("aus_loader_played");
    
    // THE LOGIC GATE: 
    // If we are on the Home page ("/") AND the cinematic loader hasn't played yet,
    // we disable this template. The cinematic loader is at z-[120] and will handle the screen.

    // Fix: Bypasse es lint error, the feature is intentional
    if (pathname === "/" && !hasPlayed) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSkipTemplate(true);
      return;
    }

    // For all other scenarios (page switching, or returning home later), 
    // run the normal snappy cascade.
    const timer = setTimeout(() => {
      setIsRevealing(false);
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  // If the logic gate flipped true, just render the page without the template panels
  if (skipTemplate) {
    return <>{children}</>;
  }

  return (
    <>
      {/* THE NAVIGATION CASCADE */}
      <div className="fixed inset-0 z-[110] flex pointer-events-none overflow-hidden">
        {[0, 50, 100, 150].map((delay, index) => (
          <div
            key={index}
            // Kept the w-[25.5%] to ensure no sub-pixel gaps
            className={`h-full w-[25.5%] bg-[#0a0a0a] transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
              isRevealing ? "translate-y-0" : "-translate-y-full"
            }`}
            style={{ transitionDelay: `${delay}ms` }}
          />
        ))}
      </div>

      {/* THE PAGE CONTENT */}
      <div className={`transition-opacity duration-500 delay-100 ${isRevealing ? "opacity-0" : "opacity-100"}`}>
        {children}
      </div>
    </>
  );
}