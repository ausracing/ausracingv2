"use client";

import Image from "next/image";
import { useState } from "react";

const media = [
  "/ausracinglogo.jpg",
  "/ausracinglogo.jpg",
  "/ausracinglogo.jpg",
  "/ausracinglogo.jpg",
  "/ausracinglogo.jpg",
  "/ausracinglogo.jpg",
  "/ausracinglogo.jpg",
];

const thumbs = [
  "/ausracinglogo.jpg",
  "/ausracinglogo.jpg",
  "/ausracinglogo.jpg",
  "/ausracinglogo.jpg",
  "/ausracinglogo.jpg",
  "/ausracinglogo.jpg",

];

export default function MediaGallery() {
  const [active, setActive] = useState(media[0]);
  const [featured, setFeatured] = useState(media[0]);
  const [secondary, setSecondary] = useState(media[1]);

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-10">

    
      {/* HERO ROW (BIG + MEDIUM) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        {/* BIG FEATURE */}
        <div className="md:col-span-2 relative h-[420px] rounded-2xl overflow-hidden bg-zinc-900 group cursor-pointer"
             onClick={() => setActive(featured)}>

          <Image
            src={featured}
            alt="featured"
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* MEDIUM FEATURE */}
        <div
          className="relative h-[420px] rounded-2xl overflow-hidden bg-zinc-900 group cursor-pointer"
          onClick={() => setActive(secondary)}
        >
          <Image
            src={secondary}
            alt="secondary"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* SMALL GRID SECTION */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {media.slice(2).map((img, i) => (
          <div
            key={i}
            onClick={() => setActive(img)}
            className="relative h-[180px] rounded-xl overflow-hidden bg-zinc-900 cursor-pointer group"
          >
            <Image
              src={img}
              alt={`media-${i}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
          </div>
        ))}
      </div>

      {/* THUMBNAIL STRIP */}
      <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-3">

        {thumbs.map((thumb, i) => {
          const isActive = media[i] === active;

          return (
            <button
              key={i}
              onClick={() => setActive(media[i])}
              className={`relative h-20 md:h-24 rounded-lg overflow-hidden border transition-all duration-200
                ${isActive
                  ? "border-white scale-105"
                  : "border-white/10 opacity-70 hover:opacity-100"
                }
              `}
            >
              <Image
                src={thumb}
                alt={`thumb-${i}`}
                fill
                sizes="120px"
                className="object-cover"
              />

              {isActive && (
                <div className="absolute inset-0 bg-white/10" />
              )}
            </button>
          );
        })}
      </div>

    
    </div>
  );
}