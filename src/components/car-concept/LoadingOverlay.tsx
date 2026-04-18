"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface LoadingOverlayProps {
  onFinished: () => void;
}

export default function LoadingOverlay({ onFinished }: LoadingOverlayProps) {
  const [speed, setSpeed] = useState(0);
  const hasFinished = useRef(false);

  useEffect(() => {
    const DURATION = 2800;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / DURATION, 1);
      const displaySpeed = Math.round(Math.pow(t, 3) * 100);
      setSpeed(displaySpeed);

      if (t < 1) {
        requestAnimationFrame(tick);
      } else if (!hasFinished.current) {
        hasFinished.current = true;
        setSpeed(100);
        setTimeout(() => onFinished(), 250);
      }
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [onFinished]);

  const strokeDash = (speed * 75) / 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-20"
    >
      <div className="relative size-60">
        <svg className="rotate-[135deg] size-full" viewBox="0 0 36 36">
          {/* Track */}
          <circle
            cx="18" cy="18" r="16"
            fill="none"
            className="stroke-current text-white/5"
            strokeWidth="1"
            strokeDasharray="75 100"
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <circle
            cx="18" cy="18" r="16"
            fill="none"
            className="stroke-current text-primary transition-all duration-75"
            strokeWidth="2.5"
            strokeDasharray={`${strokeDash} 100`}
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 8px color-mix(in srgb, var(--color-primary) 40%, transparent))" }}
          />
        </svg>

        <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-7xl font-black text-white italic tracking-tighter tabular-nums leading-none">
            {speed}
          </span>
          <span className="text-primary font-mono text-xs block uppercase tracking-[0.4em] mt-1 font-bold">
            km/h
          </span>
        </div>
      </div>

      <div className="mt-4">
        <span className="text-[10px] text-white/30 font-mono tracking-[0.5em] uppercase">
          {speed < 100 ? "Warming up tires..." : "Ignition clear"}
        </span>
      </div>
    </motion.div>
  );
}