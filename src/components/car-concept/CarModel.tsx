"use client";

import { Suspense, useCallback, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import GLBErrorBoundary from "./GLBErrorBoundary";
import LoadingOverlay from "./LoadingOverlay";
import CarScene from "./CarScene";

export interface CarModelProps {
  modelUrl: string;
  className?: string;
}

export default function CarModel({ modelUrl, className = "" }: CarModelProps) {
  const [phase, setPhase] = useState<"loading" | "ready">("loading");

  // Both gates must be true before the scene is revealed
  const animDoneRef  = useRef(false);
  const modelDoneRef = useRef(false);

  const tryReveal = useCallback(() => {
    if (animDoneRef.current && modelDoneRef.current) setPhase("ready");
  }, []); // refs are stable — empty deps is intentional

  const handleSpeedometerDone = useCallback(() => {
    animDoneRef.current = true;
    tryReveal();
  }, [tryReveal]);

  // Passed via ref so CarScene always reads the latest version without re-renders
  const onLoadedRef = useRef<(() => void) | null>(null);
  onLoadedRef.current = () => {
    modelDoneRef.current = true;
    tryReveal();
  };

  return (
    <GLBErrorBoundary>
      <div className={`relative w-full h-full ${className}`}>

        {/* Speedometer overlay — DOM layer, NOT inside Canvas */}
        <AnimatePresence>
          {phase === "loading" && (
            <LoadingOverlay key="loader" onFinished={handleSpeedometerDone} />
          )}
        </AnimatePresence>

        {/* Canvas fades in once both gates are clear */}
        <motion.div
          className="w-full h-full"
          animate={{ opacity: phase === "ready" ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Canvas
            shadows
            camera={{ position: [0, 5, 10], fov: 45 }}
            gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
            style={{ background: "transparent" }}
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} color="var(--color-primary)" intensity={0.5} />

            <Suspense fallback={null}>
              <CarScene url={modelUrl} onLoadedRef={onLoadedRef} />
              <Environment preset="city" />
              <ContactShadows position={[0, -0.8, 0]} opacity={0.4} scale={15} blur={1.5} far={0.8} />
            </Suspense>

            <OrbitControls
              makeDefault
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </motion.div>

        {/* Hint text */}
        <AnimatePresence>
          {phase === "ready" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-white/30 font-mono tracking-[0.3em] uppercase z-10 whitespace-nowrap"
            >
              Rotate to Explore · Hover for Specs
            </motion.p>
          )}
        </AnimatePresence>

      </div>
    </GLBErrorBoundary>
  );
}