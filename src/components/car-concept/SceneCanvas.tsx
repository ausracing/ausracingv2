"use client";
import { Component, Suspense, useState, useEffect, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { MODEL_URLS } from "./modelConfig";
import AllModels from "./AllModel";
import { useGLTF } from "@react-three/drei";

// Preload at module level — runs once, survives navigation
MODEL_URLS.forEach((url) => useGLTF.preload(url));

class R3FErrorBoundary extends Component<
  { children: ReactNode },
  { error: boolean }
> {
  state = { error: false };
  static getDerivedStateFromError() {
    return { error: true };
  }
  render() {
    if (this.state.error) return null;
    return this.props.children;
  }
}

interface SceneCanvasProps {
  scrollProgress: number;
  onReady: () => void;
}

export default function SceneCanvas({ scrollProgress, onReady }: SceneCanvasProps) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        // Wider FOV on mobile compensates for the narrow viewport,
        // keeping the model visually prominent without scaling geometry
        camera={{
          position: isMobile ? [0, 1.2, 5] : [0, 1.5, 7],
          fov: isMobile ? 60 : 50,
        }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          powerPreference: "high-performance",
        }}
        // Cap DPR at 1.5 — full 3× on high-end phones tanks frame rate
        // with no meaningful visual benefit at this canvas size
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
        frameloop="always"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} color="#f5b041" intensity={0.5} />
        <Suspense fallback={null}>
          <R3FErrorBoundary>
            <AllModels scrollProgress={scrollProgress} onReady={onReady} />
          </R3FErrorBoundary>
          <Environment preset="city" />
          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.35}
            // Smaller shadow scale on mobile — shadows bleed at narrow widths
            scale={isMobile ? 8 : 15}
            blur={1.5}
            far={0.8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}