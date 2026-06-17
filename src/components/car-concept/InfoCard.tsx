"use client";

import { motion } from "framer-motion";
import { MODELS } from "./modelConfig";

// ── Shared card shell ─────────────────────────────────────────────────────────
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-white/10 rounded-2xl p-4 md:p-8 bg-black/60 backdrop-blur-md w-full max-w-[min(theme(maxWidth.md),calc(100vw-3rem))]">
      {children}
    </div>
  );
}

// ── Hero card (index 0) ───────────────────────────────────────────────────────
export function HeroCard({ visible }: { visible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      // Mobile: centered horizontally, near the top.
      // Desktop: pinned to the left as before.
      className="pointer-events-auto fixed top-[10vh] md:top-[15vh] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-12 lg:left-20 z-20 w-[min(theme(maxWidth.md),calc(100vw-3rem))] md:w-auto"
    >
      <Card>
        <p
          className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-primary mb-3 md:mb-4"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          AUS Racing · Formula Student
        </p>
        <h1
          className="text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[0.92] tracking-tight mb-4 md:mb-5 text-foreground"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          Built by<br />
          <span className="text-primary">students.</span><br />
          Engineered<br />
          to race.
        </h1>
        {/* Body copy: hidden on small phones to save vertical space */}
        <p
          className="hidden sm:block text-white/60 text-sm md:text-base leading-relaxed mb-5 md:mb-6"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          AUS Racing is the American University of Sharjah's Formula Student
          team. Every component — from the spaceframe steel chassis to the
          custom accumulator — is designed, analysed, manufactured, and
          tested by our students. We compete at Formula Student UK.
        </p>
        {/* Compact stats row */}
        <div className="flex gap-6 md:gap-8 pt-3 md:pt-4 border-t border-white/10">
          {[
            { value: "EV",   label: "Powertrain" },
            { value: "7",    label: "Departments" },
            { value: "FSUK", label: "Competition" },
          ].map((s) => (
            <div key={s.label}>
              <p
                className="text-lg md:text-xl font-black text-primary"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                {s.value}
              </p>
              <p
                className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/35 mt-0.5"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

// ── Section info card (index > 0) ─────────────────────────────────────────────
export function InfoCard({ activeIndex }: { activeIndex: number }) {
  const model = MODELS[activeIndex];
  const hs = model?.hotspots[0];
  if (!hs || activeIndex === 0) return null;

  return (
    <motion.div
      key={activeIndex}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        fixed z-20
        ${
          // Mobile: always centered horizontally, pinned to the bottom.
          // Desktop: vertically centred, left or right depending on model config.
          model.infoSide === "left"
            ? "bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-12 lg:left-20"
            : "bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-12 md:left-auto lg:right-20"
        }
        w-[min(theme(maxWidth.md),calc(100vw-3rem))] md:w-auto
      `}
      // Respect iOS home bar
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <Card>
        <p
          className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-primary mb-2 md:mb-4"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {hs.text}
        </p>
        <h2
          className="text-xl md:text-3xl font-black uppercase text-foreground leading-tight mb-3 md:mb-5"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          {model.label}
        </h2>
       
      </Card>
    </motion.div>
  );
}