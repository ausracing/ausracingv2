// src/components/shared/ScrollToTop.tsx
"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`group fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[50] 
        flex flex-col items-center justify-end
        w-12 h-12 hover:h-60 rounded-full hover:rounded-2xl
        bg-black/60 backdrop-blur-md border border-white/10 
        text-white/70 hover:text-primary hover:border-primary/40 
        transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
        }`}
    >
      {/* 1. UPRIGHT TEXT STACK: Extended heights to fit all 11 characters cleanly */}
      <div className="max-h-0 opacity-0 group-hover:max-h-52 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex flex-col items-center justify-center font-mono text-[12px] font-bold select-none text-primary leading-none pb-2">
        {"BACK TO TOP".split("").map((char, index) => (
          <span key={index} className={char === " " ? "h-2" : "py-[1.5px]"}>
            {char}
          </span>
        ))}
      </div>

      {/* 2. STATIONARY ARROW: Locked safely in the bottom 48px square */}
      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
        <svg 
          className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M5 15l7-7 7 7" 
          />
        </svg>
      </div>
    </button>
  );
}