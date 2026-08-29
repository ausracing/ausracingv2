"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FILTERS, TEAM_MEMBERS, TEAM_DESCRIPTIONS } from "@/data/credits";
import { SIDEBAR_MEMORIES } from "@/data/highlights";

export default function TeamCreditsPage() {
  // Right Column State
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Left Column State (Independent Slideshow)
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isImageCycling, setIsImageCycling] = useState(true);
  const [direction, setDirection] = useState(1);

  // 1. INDEPENDENT IMAGE SLIDESHOW (1.5 seconds)
  useEffect(() => {
    if (!isImageCycling) return;

    const cycleInterval = setInterval(() => {
      setDirection(1);
      setActiveImageIndex((prev) => (prev + 1) % SIDEBAR_MEMORIES.length);
    }, 2200);

    return () => clearInterval(cycleInterval);
  }, [isImageCycling]);

  // Slideshow Manual Controls
  const handleNextImage = () => {
    setIsImageCycling(false);
    setDirection(1);
    setActiveImageIndex((prev) => (prev + 1) % SIDEBAR_MEMORIES.length);
  };

  const handlePrevImage = () => {
    setIsImageCycling(false);
    setDirection(-1);
    setActiveImageIndex(
      (prev) => (prev - 1 + SIDEBAR_MEMORIES.length) % SIDEBAR_MEMORIES.length,
    );
  };

  // 2. CINEMATIC CREDITS AUTO-SCROLL
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    let animationFrameId: number;
    let frameCount = 0; 

    const scroll = () => {
      if (!isAutoScrolling) return;

      frameCount++;

      if (frameCount % 2 === 0) {
        window.scrollBy({ top: 1, left: 0, behavior: "auto" });
      }

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
      ) {
        setIsAutoScrolling(false);
        return;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(scroll);
    }, 2500);

    const stopAutoScroll = () => setIsAutoScrolling(false);

    window.addEventListener("wheel", stopAutoScroll, { passive: true });
    window.addEventListener("touchstart", stopAutoScroll, { passive: true });
    window.addEventListener("keydown", stopAutoScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("wheel", stopAutoScroll);
      window.removeEventListener("touchstart", stopAutoScroll);
      window.removeEventListener("keydown", stopAutoScroll);
    };
  }, [isAutoScrolling]);

  const activeMemory =
    SIDEBAR_MEMORIES[activeImageIndex] || SIDEBAR_MEMORIES[0];

  return (
    <main className="min-h-screen bg-[#18181b] text-white relative">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row min-h-screen">
        
        {/* LEFT COLUMN: Fixed Header & Independent Slideshow Image */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-[68px] lg:h-[calc(100vh-68px)] px-8 lg:px-12 pt-6 pb-4 flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 bg-black z-20 overflow-hidden">
          
          <div className="space-y-3 shrink-0">
            <h1 className="text-3xl lg:text-4xl font-bold font-orbitron uppercase tracking-tight text-white leading-[1.1]">
              The Team Behind <br />
              <span className="text-primary">Silverstone.</span>
            </h1>

            <div className="flex flex-row items-end justify-between gap-3 w-full">
              <p className="text-white/60 text-xs lg:text-[13px] leading-relaxed flex-1 pr-2">
                To the engineers and visionaries who pushed our limits. Your
                relentless dedication in the garage built more than a machine, you
                built a legacy.
                <span className="block mt-1.5 italic opacity-80 text-[10px] lg:text-[11px]">
                  Note: This is our archived pre-competition roster.
                </span>
              </p>
              
              <Link 
                href="/team" 
                className="shrink-0 inline-flex items-center justify-center px-3 py-1.5 border border-primary/50 text-primary text-[9px] lg:text-[10px] font-mono tracking-widest uppercase rounded hover:bg-primary hover:text-black transition-all mb-0.5"
              >
                Current Team &rarr;
              </Link>
            </div>
          </div>

          <div className="mt-3 mb-2 flex-1 flex flex-col min-h-0">
            <div className="flex-1 relative w-full rounded-[4px] border border-white/10 bg-[#1c1c1a] overflow-hidden min-h-[150px] group">
              <div className="absolute inset-0 z-10 flex items-center justify-between p-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button
                  onClick={handlePrevImage}
                  className="pointer-events-auto p-2 rounded-full bg-black/50 hover:bg-primary hover:text-black text-white/80 backdrop-blur-sm transition-all border border-white/10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNextImage}
                  className="pointer-events-auto p-2 rounded-full bg-black/50 hover:bg-primary hover:text-black text-white/80 backdrop-blur-sm transition-all border border-white/10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                <motion.div
                  key={activeMemory.src}
                  custom={direction}
                  variants={{
                    initial: (dir) => ({ x: dir * 100, opacity: 0 }),
                    animate: { x: 0, opacity: 1 },
                    exit: (dir) => ({ x: dir * -100, opacity: 0 }),
                  }}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeMemory.src}
                    alt={activeMemory.alt || "AUS Racing Memory"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="shrink-0 mt-3 h-[50px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMemory.caption}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-primary line-clamp-1">
                    {activeMemory.caption}
                  </p>
                  <p className="text-[11px] text-white/50 leading-relaxed mt-1 line-clamp-2">
                    {activeMemory.names}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 shrink-0">
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/40">
              AUS Racing • Silverstone 2026
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Roster Credits */}
        {/* ✨ FIX: Toned down container padding */}
        <div className="w-full lg:w-7/12 p-6 lg:p-12 py-10 lg:py-16 bg-[#1c1c1a]">
          {/* ✨ FIX: Changed gap-16 to gap-10 for much tighter sections */}
          <div className="flex flex-col gap-10 max-w-2xl mx-auto">
            
            <div className="flex flex-col items-center text-center">
              {/* ✨ FIX: Shrunk text to text-2xl */}
              <h2 className="text-2xl font-orbitron font-bold uppercase tracking-[0.15em] text-white">
                <span className="text-primary">2026</span> Roster
              </h2>
              {/* ✨ FIX: Reduced bottom spacing and line length */}
              <div className="w-12 h-[2px] bg-primary/70 mt-4"></div>
            </div>

            {FILTERS.map((department) => {
              const membersInDept = TEAM_MEMBERS.filter(
                (member) => member.category === department,
              );

              if (membersInDept.length === 0) return null;

              return (
                // ✨ FIX: gap-8 changed to gap-4 between section header and members
                <div key={department} className="flex flex-col gap-4">
                  <div className="border-b border-white/10 pb-2">
                    {/* ✨ FIX: Shrunk department title to text-lg */}
                    <h2 className="text-lg font-orbitron uppercase tracking-widest text-primary mb-1">
                      {department}
                    </h2>
                    {/* ✨ FIX: Shrunk description text slightly */}
                    <p className="text-[10px] font-mono text-white/40 tracking-wider">
                      {TEAM_DESCRIPTIONS[department]}
                    </p>
                  </div>

                  {/* ✨ FIX: Shrunk vertical gap to gap-y-3 and horizontal to gap-x-8 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                    {membersInDept.map((member, idx) => (
                      <div key={idx} className="flex flex-col">
                        {/* ✨ FIX: Shrunk names to text-sm */}
                        <span
                          className={`text-sm tracking-wide ${
                            member.isLeader
                              ? "font-bold text-white"
                              : "font-medium text-white/90"
                          }`}
                        >
                          {member.name}
                        </span>

                        {/* ✨ FIX: Shrunk role to text-[9px] and pulled closer with mt-0.5 */}
                        <span
                          className={`text-[9px] font-mono uppercase tracking-[0.1em] mt-0.5 ${
                            member.isLeader
                              ? "text-primary font-semibold"
                              : "text-white/50"
                          }`}
                        >
                          {member.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="pt-10 pb-8 flex flex-col items-center justify-center text-center w-full">
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/30 mb-3">
                End of 2026 Roster
              </span>
              <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}