"use client";

import Image from "next/image";
import { useState } from "react";

const media = [
  "/images/team/placeholder.webp",
  "/images/team/placeholder.webp",
  "/images/team/placeholder.webp",
  "/images/team/placeholder.webp",
  "/images/team/placeholder.webp",
  "/images/team/placeholder.webp",
  "/images/team/placeholder.webp",
  "/images/team/placeholder.webp",
  "/images/team/placeholder.webp",
];

const thumbs = [
  "/images/team/placeholder.webp",
  "/images/team/placeholder.webp",
  "/images/team/placeholder.webp",
  "/images/team/placeholder.webp",
  "/images/team/placeholder.webp",
  "/images/team/placeholder.webp",

];

export default function MediaGallery() {
  const [active, setActive] = useState(media[0]);

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-10">

      {/* HERO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="md:col-span-3 relative h-[420px] rounded-2xl overflow-hidden bg-zinc-900">
          <Image
            src={active}
            alt="active"
            fill
            sizes="200rem"
            className="object-cover transition duration-500"
            priority
          />
        </div>

      </div>

      {/* SMALL GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {media.map((img, i) => (
          <div
            key={i}
            onClick={() => setActive(img)}
            className="relative h-[180px] rounded-xl overflow-hidden bg-zinc-900 cursor-pointer group"
          >
            <Image
              src={img}
              alt={`media-${i}`}
              fill
            sizes="200rem"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* THUMB STRIP */}
      <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-3">

        {thumbs.map((thumb, i) => {
          const isActive = active === media[i];

          return (
            <button
              key={i}
              onClick={() => setActive(media[i])}
              className={`relative h-20 md:h-24 rounded-lg overflow-hidden border transition
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
            sizes="200rem"
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