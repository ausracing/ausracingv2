"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface LoadingOverlayProps {
  onFinished: () => void;
  canvasReady: boolean;
}

export default function LoadingOverlay({ onFinished, canvasReady }: LoadingOverlayProps) {
  const [speed, setSpeed] = useState(0);
  const hasFinished = useRef(false);
  const startTime = useRef(Date.now());

  useEffect(() => {
    let raf: number;
    const MIN_DURATION = 1200;

    const tick = () => {
      const elapsed = Date.now() - startTime.current;
      const timeT = Math.min(elapsed / MIN_DURATION, 1);
      // only reach 100 when BOTH min time passed AND canvas ready
      const canProceed = canvasReady && timeT >= 1;
      const t = canProceed ? 1 : Math.min(timeT, 0.95);
      const displaySpeed = Math.round(Math.pow(t, 2) * 100);
      setSpeed(displaySpeed);

      if (!canProceed) {
        raf = requestAnimationFrame(tick);
      } else if (!hasFinished.current) {
        hasFinished.current = true;
        setSpeed(100);
        setTimeout(() => onFinished(), 200);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [canvasReady, onFinished]);

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
          <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-white/5" strokeWidth="1" strokeDasharray="75 100" strokeLinecap="round" />
          <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-primary transition-all duration-75" strokeWidth="2.5" strokeDasharray={`${strokeDash} 100`} strokeLinecap="round" style={{ filter: "drop-shadow(0 0 8px color-mix(in srgb, var(--color-primary) 40%, transparent))" }} />
        </svg>
        <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-7xl font-black text-white italic tracking-tighter tabular-nums leading-none">{speed}</span>
          <span className="text-primary font-mono text-xs block uppercase tracking-[0.4em] mt-1 font-bold">km/h</span>
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
