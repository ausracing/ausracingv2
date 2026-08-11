"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

// --- DATA ---
const HIGHLIGHT_IMAGES = [
  "/images/silverstone/mihir-pitch.webp",
  "/images/silverstone/team-photo.webp",
  "/images/silverstone/team-discussion.webp",
];

const timeline = [
  { date: "SEPTEMBER 2023", title: "Team Formation" },
  { date: "AUGUST 2024", title: "Car Design & Team Formation" },
  { date: "OCTOBER 2024", title: "Car Mechanics & Engineering" },
  { date: "JANUARY 2025", title: "Car Build Initiation" },
  { date: "MAY 2025", title: "Dynamic Testing & Shakedown" },
  { date: "JULY 2026", title: "Formula Student UK, Silverstone" },
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.5, ease: "easeOut" } },
};

export default function SilverstoneJourney() {
  return (
    <section className="w-full bg-black flex flex-col relative z-10">
      
      {/* =========================================
          PART 1: HIGHLIGHTS WIDGET
      ========================================= */}
      {/* ✨ FIX 1: Removed min-h to let the content dictate the height naturally */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full border-t border-white/10 relative z-10">
        
        {/* LEFT COLUMN: Typography & CTAs */}
        <div className="flex flex-col justify-center p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10 bg-black">
          <div className="flex items-center gap-4 mb-7">
            <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-white/50">
              Silverstone 2026 Recap
            </span>
            <div className="h-px bg-white/10 flex-1 max-w-25"></div>
          </div>

          <h2 className="text-3xl lg:text-[40px] font-semibold font-orbitron text-white leading-[1.1] tracking-[-0.01em] mb-2 uppercase">
            Silverstone<br />
            2026
          </h2>
          
          <h3 className="text-xl lg:text-[22px] font-semibold font-orbitron text-primary leading-[1.2] uppercase mb-4">
            FSUK Concept Class Highlights
          </h3>

          <p className="text-[14px] text-white/70 leading-[1.75] mb-8 max-w-lg">
            Watch the highlights of our first ever competition and the team that got us there.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/credits" 
              className="px-6 py-3 bg-primary/90 text-background text-[12px] tracking-[0.1em] uppercase font-bold rounded-[4px] hover:bg-primary transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              Highlights & Credits &rarr;
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: The Motion Grid */}
        <div className="relative flex items-center justify-center bg-black overflow-hidden p-8 lg:p-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 gap-3 w-full h-full max-h-[500px]"
          >
            <motion.div variants={itemVariants} className="col-span-1 row-span-2 relative rounded-[4px] overflow-hidden">
               <Image 
                src={HIGHLIGHT_IMAGES[0]} 
                alt="Track Action" 
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="relative rounded-[4px] overflow-hidden min-h-[200px]">
               <Image 
                src={HIGHLIGHT_IMAGES[1]} 
                alt="Team Garage" 
                fill 
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="relative rounded-[4px] overflow-hidden min-h-[200px]">
               <Image 
                src={HIGHLIGHT_IMAGES[2]} 
                alt="Car Close up" 
                fill 
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          THE BRIDGE (Connects the two sections)
      ========================================= */}
      {/* ✨ FIX 2: Reduced the height of the line (h-10) and removed negative margins */}
      <div className="w-full flex justify-center mt-4 mb-2 relative z-20 pointer-events-none">
        <div className="w-px h-10 bg-gradient-to-b from-white/20 via-[#fbb03a]/50 to-transparent" />
      </div>

      {/* =========================================
          PART 2: TIMELINE WIDGET
      ========================================= */}
      {/* ✨ FIX 3: Removed the heavy top padding (pt-0 instead of pt-6) */}
      <div id="our-car" className="w-full pb-20 pt-0 text-white">
        <div className="mx-auto max-w-6xl px-6">
     
          <h2 className="text-center text-3xl font-bold md:text-5xl font-orbitron uppercase">
            Build <span className="text-[#fbb03a]">Timeline</span>
          </h2>

          {/* DESKTOP TIMELINE */}
          <div className="relative mt-16 hidden md:block">
            <div className="absolute left-0 top-3 h-[1px] w-full bg-white/10" />
            <div className="flex justify-between">
              {timeline.map((item, index) => (
                <div
                  key={item.title}
                  className="relative flex w-full flex-col items-center text-center"
                >
                  <div
                    className={`relative z-10 h-4 w-4 rounded-full border ${
                      index < timeline.length
                        ? "border-[#fbb03a] bg-[#fbb03a] shadow-[0_0_12px_rgba(251,176,58,0.8)]"
                        : "border-white/30 bg-black"
                    }`}
                  />
                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                    {item.date}
                  </p>
                  <p className="mt-1 max-w-[140px] text-xs font-medium text-white/70 md:text-sm">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE TIMELINE */}
          <div className="relative mt-12 md:hidden">
            <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-white/10" />
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0
                return (
                  <div
                    key={item.title}
                    className={`relative flex ${
                      isLeft ? "justify-start pr-8" : "justify-end pl-8"
                    }`}
                  >
                    <div className="absolute left-1/2 top-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full border border-[#fbb03a] bg-[#fbb03a] shadow-[0_0_12px_rgba(251,176,58,0.8)]" />
                    <div className="w-[44%] rounded-[20px] border border-[#fbb03a]/25 bg-[#0f1115] p-4 text-left transition hover:border-[#fbb03a]/60 hover:shadow-[0_0_20px_rgba(251,176,58,0.15)]">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#fbb03a]">
                        {item.date}
                      </p>
                      <h3 className="mt-2 text-base font-bold leading-6 text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}