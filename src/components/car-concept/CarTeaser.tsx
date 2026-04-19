"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

export default function CarTeaser() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="our-car" className="relative w-full h-[30vh] min-h-[200px] max-h-[280px] overflow-hidden">
      {/* Background car image */}
      <Image
        src="/images/car/car.webp"
        alt="AUS Racing Formula Student Car"
        fill
        priority
        className="object-cover "
        style={{ objectPosition: "center 30%" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      {/* Scanline texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 3px)",
          backgroundSize: "100% 3px",
        }}
      />

      {/* Centred content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        {/* Ghost heading */}
        <p className="text-[clamp(2rem,6vw,5rem)] font-black uppercase tracking-[0.3em] text-white/[0.05] select-none pointer-events-none absolute">
          THE CAR
        </p>

        {/* Animated CTA */}
        <Link href="/car-concept" aria-label="Explore the car concept">
          <motion.button
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileTap={{ scale: 0.95 }}
            className="
              relative
              flex items-center justify-center
              px-10 py-3
              border border-primary/60 hover:border-primary
              bg-background/30 hover:bg-primary/10
              backdrop-blur-sm
              rounded-full cursor-pointer select-none
              transition-colors duration-300
            "
          >
            {/* Glow ring */}
            <motion.span
              className="absolute inset-0 rounded-full pointer-events-none"
              animate={
                hovered
                  ? { boxShadow: "0 0 32px 4px rgba(245,176,65,0.25)" }
                  : { boxShadow: "0 0 0px 0px rgba(245,176,65,0)" }
              }
              transition={{ duration: 0.3 }}
            />

            {/* Label container — no overflow-hidden, use opacity+y instead */}
            <span className="relative flex items-center justify-center w-28 h-5">
              <motion.span
                className="absolute text-sm font-mono tracking-[0.2em] uppercase text-white font-semibold whitespace-nowrap"
                animate={{ y: hovered ? -10 : 0, opacity: hovered ? 0 : 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                See More
              </motion.span>
              <motion.span
                className="absolute text-sm font-mono tracking-[0.2em] uppercase text-primary font-semibold whitespace-nowrap"
                animate={{ y: hovered ? 0 : 10, opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                Explore →
              </motion.span>
            </span>
          </motion.button>
        </Link>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}