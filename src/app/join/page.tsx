"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import { CATEGORIES, OPENINGS } from "@/data/openings";
import Image from "next/image";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.3, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export default function JoinPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // ✨ TOGGLE THIS VARIABLE: Set to false to close recruitment
  const isHiringOpen = true;

  const filteredOpenings = OPENINGS.filter(
    (opening) =>
      activeCategory === "All" || opening.category === activeCategory,
  );

  // =========================================
  // CLOSED STATE UI
  // =========================================
  if (!isHiringOpen) {
    return (
      <main className="min-h-[calc(100vh-80px)] bg-[#0a0a0a] text-white pt-20 pb-24 relative z-10 flex flex-col items-center justify-start">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-20 flex flex-col items-center">
          {/* Lock Icon */}
          <div className="w-14 h-14 mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron uppercase tracking-tight text-white mb-6 flex flex-row items-center justify-center gap-3 whitespace-nowrap">
            <span>Recruitment</span>
            <span className="text-primary">Closed</span>
          </h1>

          {/* Text Content */}
          <div className="text-white/60 text-sm md:text-base leading-relaxed mb-6 max-w-xl space-y-4">
            <p>
              Our 2027 FSUK recruitment window has officially closed. We are
              currently reviewing applications and finalizing our roster. Thank
              you to everyone who applied!
            </p>
            <p className="font-semibold text-white/80">
              Follow our socials for the latest hiring updates.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center space-x-6 mb-10">
            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/company/ausracing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>

            {/* Instagram */}
            <Link
              href="https://instagram.com/ausracing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </Link>
          </div>

          {/* Back Button */}
          <Link
            href="/"
            className="px-8 py-3 bg-white/5 border border-white/10 rounded-lg text-xs font-mono uppercase tracking-widest text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
          >
            &larr; Back to Home
          </Link>
        </div>
      </main>
    );
  }

  // =========================================
  // OPEN STATE UI
  // =========================================
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-4 pb-24 relative z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-20">
        <div className="flex flex-col items-center text-center mb-3 space-y-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron uppercase tracking-tight text-white leading-[1.1] max-w-4xl">
            Join the <span className="text-primary">2027 AUSRacing</span> FSUK
            Team
          </h1>

          {/* ✨ NEW: AUS Student Requirement Badge */}
          <div className="flex items-center gap-2 text-white/60 text-[11px] md:text-xs font-mono tracking-wide bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <svg
              className="w-3.5 h-3.5 text-primary shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              Exclusive to current AUS students. Please apply using your
              @aus.edu email.
            </span>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <div className="flex gap-1 p-1 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm overflow-x-auto hide-scrollbar max-w-full">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-md text-[11px] md:text-xs font-mono tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-primary text-black font-bold shadow-[0_0_15px_rgba(255,170,0,0.4)]"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {category.id}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredOpenings.map((opening) => {
              const categoryImage = CATEGORIES.find(
                (c) => c.id === opening.category,
              )?.image;

              return (
                <motion.div
                  key={opening.name}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="group relative flex flex-col p-6 rounded-xl bg-[#111] border border-primary/20 hover:border-primary hover:shadow-[0_0_20px_rgba(255,170,0,0.2)] transition-all duration-500 overflow-hidden"
                >
                  {/* Category image background — behind title/category, fades left + bottom into the card */}
                  {categoryImage && (
                    <div
                      className="absolute inset-x-0 top-0 h-[132px] pointer-events-none"
                      aria-hidden="true"
                    >
                      <Image
                        src={categoryImage}
                        alt=""
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover object-right opacity-90"
                      />
                      {/* Dark scrim: mutes the subject to a faint silhouette */}
                      <div className="absolute inset-0 bg-black/40" />
                      {/* Left fade: card bg opaque at left edge -> transparent by ~65%, subject stays visible on the right */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/70 via-30% to-transparent to-65%" />
                      {/* Bottom fade: melts the image into the card bg below the title area */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-[#111]" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex flex-1 flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-primary font-bold">
                          {opening.category}
                        </span>

                        {opening.subcategory && (
                          <>
                            <span className="text-white/20 text-[9px]">•</span>
                            <span
                              className={`text-[9px] font-mono uppercase tracking-[0.2em] font-bold ${
                                opening.subcategory === "Software"
                                  ? "text-blue-400"
                                  : "text-orange-400"
                              }`}
                            >
                              {opening.subcategory}
                            </span>
                          </>
                        )}
                      </div>

                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors duration-500" />
                    </div>

                    <h3 className="max-w-[55%] text-lg md:text-xl font-bold font-orbitron uppercase text-white mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {opening.name}
                    </h3>

                    <p className="text-[13px] text-white/60 leading-relaxed mb-5 line-clamp-3">
                      {opening.desc}
                    </p>

                    {/* Button href now pulls directly from opening.formLink */}
                    <Link
                      href={opening.formLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 mt-auto w-full py-2.5 px-4 flex items-center justify-center gap-2 border border-white/20 rounded-lg text-[11px] font-mono uppercase tracking-widest text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                    >
                      Apply Now
                      <svg
                        className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center border-t border-white/10 pt-8"
        >
          <p className="text-white/50 text-xs">
            Don&apos;t see your perfect fit but still want to contribute?{" "}
            <br className="hidden sm:block" />
            Reach out to our executive team at ausracing@aus.edu.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
