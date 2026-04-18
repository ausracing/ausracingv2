"use client";

import { useState } from "react";
import { Html } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import type { Department } from "./departmentData";

interface HotspotPinProps {
  dept: Department & { position: [number, number, number] };
}

export default function HotspotPin({ dept }: HotspotPinProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Html position={dept.position} style={{ pointerEvents: "auto" }} zIndexRange={[100, 0]}>
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Ping ring */}
        <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />

        {/* Pin dot */}
        <div className="relative w-5 h-5 rounded-full bg-white border-2 border-primary shadow-[0_0_12px_color-mix(in_srgb,var(--color-primary)_60%,transparent)] z-10" />

        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-52 bg-black/90 border border-white/10 rounded-xl p-3 backdrop-blur-md pointer-events-none"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">{dept.icon}</span>
                <span className="text-xs font-mono uppercase text-primary font-bold tracking-widest">
                  {dept.title}
                </span>
              </div>

              <ul className="space-y-1">
                {dept.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-[11px] text-white/70">
                    <span className="mt-[5px] w-1 h-1 rounded-full bg-primary/70 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tooltip arrow */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/90 border-r border-b border-white/10 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Html>
  );
}