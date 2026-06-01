// src/components/shared/ScrollCTA.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollCTA({ heroRef }: { heroRef: React.RefObject<HTMLElement | null> }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      setVisible(heroBottom > window.innerHeight * 0.2);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroRef]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-50"
        >
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
          />
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            className="relative text-[11px] font-mono tracking-[0.35em] uppercase text-primary"
            style={{ textShadow: "0 0 12px rgba(245,176,65,0.6), 0 0 30px rgba(245,176,65,0.3)" }}
          >
            Scroll for details
          </motion.span>
          <motion.div
            animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut", delay: 0.2 }}
            style={{ transformOrigin: "top" }}
            className="w-px h-6 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}