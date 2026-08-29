"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MODELS } from "./modelConfig";
import LoadingOverlay from "./LoadingOverlay";
import type { Swiper as SwiperClass } from "swiper";

const SceneCanvas = dynamic(() => import("./SceneCanvas"), { ssr: false });

const BG_LABELS = [
  "THE CAR",
  "BRAKES",
  "ELECTRONICS",
  "AERO",
  "SUSPENSION",
  "AERO",
  "DRIVETRAIN",
];
const SECTIONS = MODELS.length;

export default function CarConceptClient() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canvasReady, setCanvasReady] = useState(false);
  const [loaderDone, setLoaderDone] = useState(false);
  const [forceShow, setForceShow] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);

  // Track if we are currently forcing release to the footer
  const [isReleased, setIsReleased] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setForceShow(true), 5000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        if (isReleased) {
          setIsReleased(false);
          e.preventDefault();
          return;
        }
        e.preventDefault();
        swiperRef.current?.slidePrev();
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        if (activeIndex === SECTIONS - 1) {
          setIsReleased(true);
          return;
        }
        e.preventDefault();
        if (activeIndex < SECTIONS - 1) {
          swiperRef.current?.slideNext();
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, isReleased]);

  const showContent = (canvasReady && loaderDone) || forceShow;

  return (
    <section 
      className="relative w-full h-[calc(100dvh-68px)] bg-black overflow-hidden"
      onWheel={(e) => {
        // If we are on the final slide and trying to scroll down further
        if (activeIndex === SECTIONS - 1 && e.deltaY > 0) {
          if (!isReleased) {
            // Block the first scroll edge-case so it doesn't auto-skip, 
            // and flag that the next scroll will release.
            setIsReleased(true);
            e.stopPropagation();
          }
        } else if (activeIndex === SECTIONS - 1 && e.deltaY < 0 && isReleased) {
          // If scrolling back up from the edge, re-lock the swiper
          setIsReleased(false);
        }
      }}
    >
      <AnimatePresence>
        {!loaderDone && !forceShow && (
          <motion.div
            className="absolute inset-0 z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingOverlay
              onFinished={() => setLoaderDone(true)}
              canvasReady={canvasReady}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 z-0">
        <SceneCanvas
          activeIndex={activeIndex}
          onReady={() => setCanvasReady(true)}
        />
      </div>

      <AnimatePresence mode="wait">
        {showContent && activeIndex < MODELS.length && (
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none"
          >
            <span
              className="text-[clamp(3rem,10vw,10rem)] font-black uppercase tracking-widest text-white/[0.08]"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              {BG_LABELS[activeIndex] ?? ""}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <Swiper
        modules={[Mousewheel, Pagination]}
        speed={1100}
        direction="vertical"
        mousewheel={{ 
          releaseOnEdges: isReleased 
        }}
        pagination={{ clickable: true }}
        onSwiper={(s) => {
          swiperRef.current = s;
        }}
        onSlideChange={(s) => {
          setActiveIndex(s.activeIndex);
          if (s.activeIndex < SECTIONS - 1) {
            setIsReleased(false);
          }
        }}
        className="car-swiper absolute inset-0 z-20 h-full w-full"
      >
        {Array.from({ length: SECTIONS }).map((_, i) => (
          <SwiperSlide key={i} className="h-full w-full" />
        ))}
      </Swiper>

      <AnimatePresence>
        {showContent && activeIndex === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
          >
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2.4 }}
              className="text-[10px] tracking-[0.35em] uppercase text-primary"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Scroll to explore
            </motion.span>
            <motion.div
              animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2.4, delay: 0.2 }}
              style={{ transformOrigin: "top" }}
              className="w-px h-6 bg-gradient-to-b from-primary to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}