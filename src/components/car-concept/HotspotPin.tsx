"use client";
import { useState } from "react";
import { Html } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import type { Hotspot } from "./modelConfig";

const bodyPortal =
  typeof document !== "undefined"
    ? ({ current: document.body } as React.RefObject<HTMLElement>)
    : undefined;

export default function HotspotPin({ hotspot }: { hotspot: Hotspot }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Html position={hotspot.position} style={{ pointerEvents: "auto", zIndex: 40 }} zIndexRange={[100, 0]} sprite occlude={false} portal={bodyPortal}>
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered((v) => !v)}
      >
        <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping pointer-events-none" />
        <div className="relative w-5 h-5 rounded-full bg-white border-2 border-primary shadow-[0_0_12px_color-mix(in_srgb,var(--color-primary)_60%,transparent)] z-10 cursor-pointer" />
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-56 bg-black/80 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md pointer-events-none"
            >
              <p className="text-sm text-white/50 font-normal leading-snug">{hotspot.text}</p>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/80 border-r border-b border-white/10 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Html>
  );
}
