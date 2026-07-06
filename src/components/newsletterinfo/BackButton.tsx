// src/components/newsletterinfo/BackButton.tsx

"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        group 
        flex items-center justify-center gap-1.5 sm:gap-2
        w-full h-10 sm:h-12 px-2 sm:px-4 py-2 rounded-lg 
        md:w-auto md:px-5 md:py-2.5 md:rounded-full
        bg-black text-white
        border border-zinc-800
        hover:bg-zinc-900 hover:border-amber-500/50 hover:text-amber-500
        active:scale-95
        transition-all duration-200
      "
      aria-label="Go back"
    >
      <svg 
        className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-0.5" 
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
      </svg>
      {/* Scaled down to text-xs on mobile for 320px support */}
      <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Go Back</span>
    </button>
  );
}