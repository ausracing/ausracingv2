"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { MODELS } from "./modelConfig";
import LoadingOverlay from "./LoadingOverlay";

const SceneCanvas = dynamic(() => import("./SceneCanvas"), { ssr: false });

const BG_LABELS = ["THE CAR", "BRAKES", "BODYWORK", "ELECTRONICS", "AERO", "STEERING"];
const CARD_SHIFT = 0.07;
const MODEL_STOPS = MODELS.map((_, i) => i / (MODELS.length + 1));
const CARD_STOPS  = MODEL_STOPS.map((s) => Math.max(0, s - CARD_SHIFT));
const FOOTER_STOP = MODELS.length / (MODELS.length + 1);
const TOTAL_SCROLL_VH = 800;

function ProgressDots({ active, total }: { active: number; total: number }) {
  if (active < 0) return null;
  return (
    <div className="fixed right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-1.5 md:gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`rounded-full transition-all duration-300 ${i === active ? "w-1 h-3 md:w-1.5 md:h-4 bg-primary" : "w-1 h-1 md:w-1.5 md:h-1.5 bg-white/20"}`} />
      ))}
    </div>
  );
}

export default function CarConceptClient() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [canvasReady, setCanvasReady] = useState(false);
  const [loaderDone, setLoaderDone] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const raw = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollProgress(raw);
      if (raw >= FOOTER_STOP - CARD_SHIFT) { setActiveIndex(-1); return; }
      let idx = 0;
      for (let i = CARD_STOPS.length - 1; i >= 0; i--) {
        if (raw >= CARD_STOPS[i]) { idx = i; break; }
      }
      setActiveIndex(idx);
      setBgIndex(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showContent = canvasReady && loaderDone;

  return (
    <>
      <AnimatePresence>
        {!loaderDone && (
          <motion.div className="fixed inset-0 z-50" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <LoadingOverlay onFinished={() => setLoaderDone(true)} canvasReady={canvasReady} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 z-0">
        <SceneCanvas scrollProgress={scrollProgress} onReady={() => setCanvasReady(true)} />
      </div>

      <AnimatePresence mode="wait">
        {showContent && activeIndex >= 0 && (
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none select-none"
          >
            <span className="text-[clamp(4rem,18vw,16rem)] font-black uppercase tracking-widest text-white/[0.08]" style={{ fontFamily: "var(--font-geist-sans)" }}>
              {BG_LABELS[bgIndex] ?? ""}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <ProgressDots active={activeIndex} total={MODELS.length} />
      <div className="relative z-10 pointer-events-none" style={{ height: `${TOTAL_SCROLL_VH}vh` }} />

      <AnimatePresence>
        {showContent && activeIndex === 0 && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
            style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
          >
            <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2.4 }} className="text-[10px] tracking-[0.35em] uppercase text-primary" style={{ fontFamily: "var(--font-geist-mono)" }}>
              Scroll to explore
            </motion.span>
            <motion.div animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2.4, delay: 0.2 }} style={{ transformOrigin: "top" }} className="w-px h-6 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
