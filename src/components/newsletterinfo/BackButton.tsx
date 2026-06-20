"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-8 px-5 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition shadow-md"
    >
      ← Back to Newsletter
    </button>
  );
}