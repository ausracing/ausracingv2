"use client";

import { Component, Suspense, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Html,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

// --- Types ---
export interface Hotspot {
  id: string;
  position: [number, number, number];
  icon: string;
  title: string;
  summary: string;
  detail: string;
  bullets: string[];
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "powertrain",
    position: [-1.4, -0.3, 0],
    icon: "🔧",
    title: "Powertrain",
    summary: "Custom 600cc engine · Turbocharged intake · Sequential gearbox",
    detail: "The powertrain team manages the engine, exhaust, cooling, and fuel system.",
    bullets: ["Custom 600cc inline-4 engine", "Turbocharged intake system", "Sequential 6-speed gearbox", "Dry-sump lubrication"],
  },
  {
    id: "aerodynamics",
    position: [2, -0.5, 0.0],
    icon: "🌬️",
    title: "Aerodynamics",
    summary: "CFD-validated wings · Carbon composite bodywork · Downforce optimisation",
    detail: "Our aero team uses CFD simulation and wind-tunnel correlation to develop wings, undertray, and body panels.",
    bullets: ["CFD-validated front and rear wing packages", "Carbon fibre composite monocoque panels", "Undertray and diffuser development", "Drag/downforce balance optimisation"],
  },
  {
    id: "suspension",
    position: [0.4, -0.4, 0.5],
    icon: "⚙️",
    title: "Suspension",
    summary: "Double wishbone · Bespoke dampers · Kinematics simulation",
    detail: "From push-rod double wishbone geometry to bespoke damper tuning, the VD team ensures predictable, fast handling.",
    bullets: ["Double wishbone front and rear", "Bespoke damper specification and tuning", "OptimumKinematics simulation", "Tyre model integration for lap-sim"],
  },
   {
    id: "chassis",
    position: [-0.2, -0.6, 0.6],
    icon: "🏗️",
    title: "Chassis",
    summary: "FEA-driven spaceframe · Torsional stiffness · FSG compliant",
    detail: "Our chassis engineers design the primary structure to meet both stiffness targets and FSG/FSAE safety requirements.",
    bullets: ["FEA-driven structural design", "Torsional and bending stiffness targets", "Rollhoop and impact attenuator compliance", "Weight optimisation via material selection"],
  },
  {
    id: "electrical",
    position: [0.2, 0, 0],
    icon: "⚡",
    title: "Electrical Systems",
    summary: "Custom harness · ECU integration · Real-time telemetry",
    detail: "The electronics team designs the full wiring harness, data acquisition system, and ECU integration.",
    bullets: ["Custom wiring harness design", "ECU integration and tuning interface", "Sensor suite: IMU, wheel speed, temps", "Real-time telemetry and data logging"],

  }
];

// --- Speedometer Loading Overlay (DOM layer, outside Canvas) ---
function LoadingOverlay({ onFinished }: { onFinished: () => void }) {
  const [speed, setSpeed] = useState(0);
  const hasFinished = useRef(false);

  useEffect(() => {
    const duration = 2800;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
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
          <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-white/5" strokeWidth="1" strokeDasharray="75 100" strokeLinecap="round" />
          <circle
            cx="18" cy="18" r="16" fill="none"
            className="stroke-current text-[#F5B041] transition-all duration-75"
            strokeWidth="2.5"
            strokeDasharray={`${strokeDash} 100`}
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 8px rgba(245, 176, 65, 0.4))" }}
          />
        </svg>
        <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-7xl font-black text-white italic tracking-tighter tabular-nums leading-none">
            {speed}
          </span>
          <span className="text-[#F5B041] font-mono text-xs block uppercase tracking-[0.4em] mt-1 font-bold">
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

// --- Hotspot Pin Component ---
function HotspotPin({ hotspot }: { hotspot: Hotspot }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Html position={hotspot.position} style={{ pointerEvents: "auto" }} zIndexRange={[100, 0]}>
      <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <span className="absolute inset-0 rounded-full bg-[#F5B041]/40 animate-ping" />
        <div className="relative w-5 h-5 rounded-full bg-white border-2 border-[#F5B041] shadow-[0_0_12px_rgba(245,176,65,0.6)] z-10" />
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-52 bg-black/90 border border-white/10 rounded-xl p-3 backdrop-blur-md pointer-events-none"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">{hotspot.icon}</span>
                <span className="text-xs font-mono uppercase text-[#F5B041] font-bold tracking-widest">{hotspot.title}</span>
              </div>
              <ul className="space-y-1">
                {hotspot.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-[11px] text-white/70">
                    <span className="mt-[5px] w-1 h-1 rounded-full bg-[#F5B041]/70 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/90 border-r border-b border-white/10 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Html>
  );
}

// --- Camera Rig ---
function CameraRig({ target }: { target: THREE.Object3D }) {
  const { camera, controls } = useThree();
  const fitted = useRef(false);

  useEffect(() => {
    if (fitted.current) return;
    fitted.current = true;
    const box = new THREE.Box3().setFromObject(target);
    const centre = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 4 / maxDim;

    target.position.set(-centre.x * scale, -centre.y * scale, -centre.z * scale);
    target.scale.setScalar(scale);

    camera.position.set(5, 2, 5);
    camera.lookAt(0, 0, 0);
    if (controls) {
      // @ts-ignore
      controls.target.set(0, 0, 0);
      // @ts-ignore
      controls.update();
    }
  }, [target, camera, controls]);

  return null;
}

// --- Car Scene ---
// NOTE: onLoaded is called via a ref-callback pattern to avoid setState-during-render.
function CarScene({ url, onLoadedRef }: { url: string; onLoadedRef: React.MutableRefObject<(() => void) | null> }) {
  const gltf = useLoader(GLTFLoader, url, (loader) => {
    const draco = new DRACOLoader();
    draco.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/");
    (loader as GLTFLoader).setDRACOLoader(draco);
  });

  const groupRef = useRef<THREE.Group>(null);
  const notified = useRef(false);

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        (mesh.material as THREE.MeshStandardMaterial).envMapIntensity = 1.4;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });

    // Notify parent that the model is ready — deferred to avoid setState-in-render
    if (!notified.current && onLoadedRef.current) {
      notified.current = true;
      // Use setTimeout(0) to push the state update outside the current render cycle
      setTimeout(() => onLoadedRef.current?.(), 0);
    }
  }, [gltf.scene, onLoadedRef]);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.1;
  });

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} rotation={[Math.PI / 2, 0, 0]} />
      <CameraRig target={gltf.scene} />
      {HOTSPOTS.map((h) => (
        <HotspotPin key={h.id} hotspot={h} />
      ))}
    </group>
  );
}

// --- Error Boundary ---
class GLBErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null };
  static getDerivedStateFromError(e: Error) { return { error: e }; }
  render() {
    if (this.state.error) return <div className="flex h-full items-center justify-center text-red-500 font-mono text-xs">Model Load Error</div>;
    return this.props.children;
  }
}

// --- Main Export ---
export interface CarModelProps {
  modelUrl: string;
  className?: string;
}

export default function CarModel({ modelUrl, className = "" }: CarModelProps) {
  const [phase, setPhase] = useState<"loading" | "ready">("loading");

  // Two independent gates — BOTH must be true before we reveal the scene
  const animDoneRef  = useRef(false);
  const modelDoneRef = useRef(false);

  const tryReveal = () => {
    if (animDoneRef.current && modelDoneRef.current) {
      setPhase("ready");
    }
  };

  // Called by LoadingOverlay when its speedometer animation reaches 100
  const handleSpeedometerDone = useCallback(() => {
    animDoneRef.current = true;
    tryReveal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Passed to CarScene via ref; called (deferred) when the GLB finishes loading
  const onLoadedRef = useRef<(() => void) | null>(null);
  onLoadedRef.current = () => {
    modelDoneRef.current = true;
    tryReveal();
  };

  return (
    <GLBErrorBoundary>
      <div className={`relative w-full h-full ${className}`}>

        {/* Speedometer overlay — lives in DOM, NOT inside Canvas */}
        <AnimatePresence>
          {phase === "loading" && (
            <LoadingOverlay key="loader" onFinished={handleSpeedometerDone} />
          )}
        </AnimatePresence>

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
            <pointLight position={[-10, -10, -10]} color="#F5B041" intensity={0.5} />

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