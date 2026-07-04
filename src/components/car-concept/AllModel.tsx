"use client";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { MODELS } from "./modelConfig";
import { HOTSPOTS } from "./modelConfig";
import HotspotPin from "./HotspotPin";
import ModelErrorBoundary from "./ModelErrorBoundary";

const SLOT_GAP_X_DESKTOP = 20;
const SLOT_GAP_X_MOBILE  = 12;
const LERP_DESKTOP = 0.06;
const LERP_MOBILE  = 0.10;

const isMobileInit = typeof window !== "undefined" && window.innerWidth < 768;

const sceneCache = new Map<number, THREE.Group>();

interface AllModelsProps {
  activeIndex: number;
  onReady: () => void;
}

function ModelSlot({ index, isMobile, slotGapX, activeIndex }: { index: number; isMobile: boolean; slotGapX: number; activeIndex: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const scene = sceneCache.get(index);
  const positionedRef = useRef(false);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.4;
  });

  useEffect(() => {
    if (!groupRef.current || !scene) {
      console.log(`[CAR-MODEL] Slot ${index}: waiting for scene (hasRef=${!!groupRef.current}, hasScene=${!!scene})`);
      return;
    }

    // Already has a child model — skip re-positioning
    // Prevents scale/position glitches from resize/rerender
    if (positionedRef.current) {
      console.log(`[CAR-MODEL] Slot ${index}: already positioned, skipping`);
      return;
    }

    const clone = scene.clone(true);

    const mobileMult  = isMobile ? 0.35 : 1;
    const defaultScale = index === 0 ? 6 : 4;
    const modelScale = MODELS[index]?.scale ?? defaultScale;
    const scaleFactor = modelScale * mobileMult;
    const box         = new THREE.Box3().setFromObject(clone);
    const centre      = box.getCenter(new THREE.Vector3());
    const size        = box.getSize(new THREE.Vector3());

    // Guard against empty geometry (Draco decode not ready yet)
    if (size.x === 0 && size.y === 0 && size.z === 0) {
      console.log(`[CAR-MODEL] Slot ${index}: empty geometry, skipping`);
      return;
    }

    const scale       = scaleFactor / Math.max(size.x, size.y, size.z);
    const baseX       = index * slotGapX;

    groupRef.current.clear();
    groupRef.current.add(clone);
    groupRef.current.position.set(
      baseX - centre.x * scale,
      -centre.y * scale,
      -centre.z * scale,
    );
    groupRef.current.scale.setScalar(scale);
    positionedRef.current = true;
  }, [scene, index, isMobile, slotGapX]);

  // Always render the group so the scene graph is stable from mount
  return (
    <ModelErrorBoundary index={index}>
      <group ref={groupRef}>
        {scene && index === activeIndex && (HOTSPOTS[index] ?? []).map((hotspot, i) => (
          <HotspotPin key={i} hotspot={hotspot} />
        ))}
      </group>
    </ModelErrorBoundary>
  );
}

export default function AllModels({ activeIndex, onReady }: AllModelsProps) {
  const [isMobile, setIsMobile] = useState(isMobileInit);
  const stripRef = useRef<THREE.Group>(null);
  const currentX = useRef(0);
  const [, forceUpdate] = useState(0);
  const [initialLoaded, setInitialLoaded] = useState(
    sceneCache.has(0) || !MODELS[0]?.url
  );
  const frameRef = useRef(0);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const slotGapX = isMobile ? SLOT_GAP_X_MOBILE : SLOT_GAP_X_DESKTOP;
  const lerp    = isMobile ? LERP_MOBILE : LERP_DESKTOP;

  const loadModel = (index: number) => {
    if (sceneCache.has(index)) return;
    const url = MODELS[index]?.url;
    if (!url) return;
    
    console.log(`[CAR-MODEL] 🟡 Starting load model ${index}: ${url}`);

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    loader.setDRACOLoader(dracoLoader);
    loader.load(
      url,
      (gltf) => {
        console.log(`[CAR-MODEL] 🟢 Model ${index} loaded successfully`, {
          url,
          children: gltf.scene.children.length,
        });

        const clone = gltf.scene.clone(true);

        clone.traverse((child) => {
          const mesh = child as THREE.Mesh;
          if (mesh.isMesh) {
            if (mesh.material)
              (mesh.material as THREE.MeshStandardMaterial).envMapIntensity = 1.4;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });

        if (index === 4) {
          clone.rotation.set(Math.PI, 0, 0);
          clone.updateMatrixWorld(true);
        }
        if (index === 5) {
          clone.rotation.set(Math.PI / 2, 0, 0);
          clone.updateMatrixWorld(true);
        }

        sceneCache.set(index, clone);
        console.log(`[CAR-MODEL] Model ${index} added to cache. Cache size: ${sceneCache.size}, keys: [${Array.from(sceneCache.keys()).join(',')}]`);
        
        if (index === 0) setInitialLoaded(true);
        forceUpdate((n) => n + 1);
      },
      undefined,
      (err) => console.error(`[Model ${index}] Failed to load ${url}:`, err),
    );
  };

  // Load all models immediately on mount — no waiting for scroll
  useEffect(() => {
    console.log(`[CAR-MODEL] 📦 Loading all ${MODELS.length} models upfront`);
    for (let i = 0; i < MODELS.length; i++) {
      loadModel(i);
    }
  }, []);

  // Log when activeIndex changes
  useEffect(() => {
    console.log(`[CAR-MODEL] 📍 activeIndex changed to ${activeIndex}`);
  }, [activeIndex]);

  // Signal ready only after the first model is loaded
  useEffect(() => {
    if (initialLoaded) {
      console.log(`[CAR-MODEL] ✅ initialLoaded=true, calling onReady()`);
      onReady();
    }
  }, [initialLoaded, onReady]);

  useFrame(() => {
    const targetX = activeIndex * slotGapX;
    currentX.current = THREE.MathUtils.lerp(currentX.current, targetX, lerp);
    if (stripRef.current) stripRef.current.position.x = -currentX.current;
    
    frameRef.current++;
    if (frameRef.current % 30 === 0) {
      console.log(`[CAR-MODEL] Frame: strip.x=${stripRef.current?.position.x.toFixed(2)}, targetX=${targetX}, current=${currentX.current.toFixed(2)}, activeIndex=${activeIndex}`);
    }
  });

  return (
    <group ref={stripRef}>
      {MODELS.map((_, i) => {
        const config = MODELS[i];
        if (!config.url) {
          return <group key={i} position={[i * slotGapX, 0, 0]} />;
        }
        return <ModelSlot key={i} index={i} isMobile={isMobile} slotGapX={slotGapX} activeIndex={activeIndex} />;
      })}
    </group>
  );
}
