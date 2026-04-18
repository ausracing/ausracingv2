"use client";

<!-- <<<<<<< feature/newsletter -->
import Image from "next/image";
import Link from "next/link";
import { newsletterArticles } from "./newsletter/data";
import Footer from "@/components/shared/Footer";

function parseDate(dateStr: string) {
  const [day, month, year] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).getTime();
}

export default function Home() {
  const sorted = [...newsletterArticles].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  const latest = sorted[0];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      
      {/* MAIN LATEST NEWS CARD */}
      <div className="w-full max-w-2xl border border-white/10 rounded-xl overflow-hidden bg-white/5">
        
        <div className="relative w-full h-64">
          <Image
            src={latest.image}
            alt={latest.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <h1 className="text-2xl font-bold">{latest.title}</h1>

          <p className="text-white/60 mt-2 text-sm leading-relaxed">
            {latest.shortDescription}
          </p>

          <p className="text-xs text-white/40 mt-2">{latest.date}</p>

          <Link
            href={`/newsletter/${latest.slug}`}
            className="inline-block mt-4 underline text-sm"
          >
            Read full article →
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <p className="text-white/70 text-sm">
          Interested? Check out our newsletter for more updates.
        </p>

        <Link
          href="/newsletter"
          className="mt-3 inline-block px-5 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition text-sm"
        >
          Go to Newsletter
        </Link>
      </div>

      <Footer />
    </div>
// =======
import { useState } from "react";
import Loader from "@/components/hero/Loader";
import HeroVideo from "@/components/hero/HeroVideo";
import SponsorsSlider from "@/components/sponsors/SponsorSlider";
import AUSParagraph from "@/components/hero/AUSParagraph";
import CarTeaser from "@/components/car-concept/CarTeaser";

export default function Home() {
  // Keeps track of when the loader is completely finished to unmount it
  const [isLoaderDone, setIsLoaderDone] = useState(false);

  // Set to FALSE so the loader actually waits for the video to buffer
  const [videoReady, setVideoReady] = useState(false);

  return (
    <main className="bg-[#18181b] text-foreground relative flex flex-col">
      {/* THE LOADER */}
      {!isLoaderDone && (
        <Loader
          isReady={videoReady}
          onComplete={() => setIsLoaderDone(true)}
        />
      )}

      {/* HERO CONTENT */}
      <HeroVideo onVideoReady={() => setVideoReady(true)} />
      <SponsorsSlider />
      <AUSParagraph />
      <CarTeaser />
    </main>
// >>>>>>> main
  );
}