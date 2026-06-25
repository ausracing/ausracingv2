"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        group 
        flex items-center justify-center gap-2
        
        /* Mobile: Rectangular, full width */
        w-full h-12 px-4 py-2 rounded-lg 
        
        /* Desktop: Pill-shaped, auto-width to fit text perfectly */
        md:w-auto md:px-5 md:py-2.5 md:rounded-full
        
        bg-black/50 text-white
        border border-white/20
        backdrop-blur-md
        hover:bg-zinc-800 hover:border-white/40
        active:scale-95
        transition-all duration-200
      "
      aria-label="Go back"
    >
      <svg 
        className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" 
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
      </svg>
      
      {/* whitespace-nowrap prevents the text from ever stacking vertically again */}
      <span className="text-sm font-medium whitespace-nowrap">Go Back</span>
    </button>
  );
}