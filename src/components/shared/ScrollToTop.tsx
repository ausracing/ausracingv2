// src/components/shared/ScrollToTop.tsx
"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 80px is about the height of your header. 
      // Change this number if you want it to trigger later.
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    // Clean up the event listener so it doesn't cause memory leaks
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // 1. Scroll the physical pixels smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // 2. Wipe the hash from the URL silently
    // This tells the Header "we are no longer at #contact" without causing a page reload
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[50] p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/70 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      {/* Simple, clean UP arrow */}
      <svg 
        className="w-5 h-5 md:w-6 md:h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 15l7-7 7 7" 
        />
      </svg>
    </button>
  );
}