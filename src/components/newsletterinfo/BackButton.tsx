"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
  group -ml-6 w-12 h-12 
  flex items-center justify-center flex-shrink-0 
  rounded-full 
  bg-black text-white 
  border border-white/60
  shadow-md
  hover:bg-zinc-800
  active:scale-90
  active:bg-zinc-700
  transition-all duration-200
"
      aria-label="Go back"
    >
      <svg
        className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}