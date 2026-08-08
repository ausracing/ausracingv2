"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";


const HIGHLIGHT_IMAGES = [
  "/images/silverstone/mihir-pitch.webp",
  "/images/silverstone/team-photo.webp",
  "/images/silverstone/team-discussion.webp",
];

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

export default function SilverstoneHighlights() {
  return (
    // Matches the exact border-t border-white/10 and z-index logic from AUSParagraph
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-120 w-full border-t border-white/10 relative z-10">
      
      {/* LEFT COLUMN: Typography & CTAs (Matches AUSParagraph padding & borders) */}
      <div className="flex flex-col justify-center p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10 bg-black">
        
        {/* Section Label (Exact match to "Who We Are") */}
        <div className="flex items-center gap-4 mb-7">
          <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-white/50">
            Silverstone 2026 Recap
          </span>
          <div className="h-px bg-white/10 flex-1 max-w-25"></div>
        </div>

        {/* Heading (Exact match to AUSParagraph H2 styling) */}
        <h2 className="text-3xl lg:text-[40px] font-semibold font-orbitron text-white leading-[1.1] tracking-[-0.01em] mb-2 uppercase">
          Silverstone<br />
          2026
        </h2>
        
        {/* Sub-heading (Using your primary color for emphasis) */}
        <h3 className="text-xl lg:text-[22px] font-semibold font-orbitron text-primary leading-[1.2] uppercase mb-4">
          FSUK Concept Class Highlights
        </h3>

        {/* Body Paragraph (Exact match to AUSParagraph text sizing) */}
        <p className="text-[14px] text-white/70 leading-[1.75] mb-8 max-w-lg">
          Watch the highlights of our first ever competition and the team that got us there.
        </p>

        {/* BUTTON GROUP (Exact structural match to HeroVideo buttons) */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/credits" 
            className="px-6 py-3 bg-primary/90 text-background text-[12px] tracking-[0.1em] uppercase font-bold rounded-[4px] hover:bg-primary transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            Highlights & Credits &rarr;
          </Link>
        </div>
      </div>

      {/* RIGHT COLUMN: The Motion Grid (Floating Layout) */}
      <div className="relative flex items-center justify-center min-h-100 lg:min-h-auto bg-black overflow-hidden p-8 lg:p-12">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-3 w-full h-full max-h-[500px]"
        >
          {/* Main Large Image */}
          <motion.div variants={itemVariants} className="col-span-1 row-span-2 relative rounded-[4px] overflow-hidden">
             <Image 
              src={HIGHLIGHT_IMAGES[0]} 
              alt="Track Action" 
              fill 
              className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>

          {/* Top Right Image */}
          <motion.div variants={itemVariants} className="relative rounded-[4px] overflow-hidden min-h-[200px]">
             <Image 
              src={HIGHLIGHT_IMAGES[1]} 
              alt="Team Garage" 
              fill 
              className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>

          {/* Bottom Right Image */}
          <motion.div variants={itemVariants} className="relative rounded-[4px] overflow-hidden min-h-[200px]">
             <Image 
              src={HIGHLIGHT_IMAGES[2]} 
              alt="Car Close up" 
              fill 
              className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}