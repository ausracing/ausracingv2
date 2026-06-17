"use client";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { MODELS } from "./modelConfig";
import { HOTSPOTS } from "./modelConfig";
import HotspotPin from "./HotspotPin";

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

function ModelSlot({ index, isMobile, slotGapX }: { index: number; isMobile: boolean; slotGapX: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const scene = sceneCache.get(index);
  const [ready, setReady] = useState(false);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.4;
  });

  useEffect(() => {
    if (!groupRef.current || !scene) return;
    const clone = scene.clone(true);

    const mobileMult  = isMobile ? 0.5 : 1;
    const defaultScale = index === 0 ? 6 : 4;
    const modelScale = MODELS[index]?.scale ?? defaultScale;
    const scaleFactor = modelScale * mobileMult;
    const box         = new THREE.Box3().setFromObject(clone);
    const centre      = box.getCenter(new THREE.Vector3());
    const size        = box.getSize(new THREE.Vector3());
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
    setReady(true);
  }, [scene, index, isMobile, slotGapX]);

  if (!scene) return null;

  return (
    <group ref={groupRef}>
      {ready && (HOTSPOTS[index] ?? []).map((hotspot, i) => (
        <HotspotPin key={i} hotspot={hotspot} />
      ))}
    </group>
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

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    loader.setDRACOLoader(dracoLoader);
    loader.load(
      url,
      (gltf) => {
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

        if (index === 5) {
          clone.rotation.set(Math.PI / 2, 0, 0);
          clone.updateMatrixWorld(true);
        }

        sceneCache.set(index, clone);
        if (index === 0) setInitialLoaded(true);
        forceUpdate((n) => n + 1);
      },
      undefined,
      (err) => console.error(`Failed to load model ${url}:`, err),
    );
  };

  useEffect(() => {
    loadModel(0);
  }, []);

  useEffect(() => {
    const nextIdx = activeIndex + 1;
    if (nextIdx < MODELS.length) {
      loadModel(nextIdx);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (initialLoaded) {
      onReady();
    }
  }, [initialLoaded, onReady]);

  useFrame(() => {
    const targetX = activeIndex * slotGapX;
    currentX.current = THREE.MathUtils.lerp(currentX.current, targetX, lerp);
    if (stripRef.current) stripRef.current.position.x = -currentX.current;
  });

  return (
    <group ref={stripRef}>
      {MODELS.map((_, i) => {
        const config = MODELS[i];
        if (!config.url) {
          return <group key={i} position={[i * slotGapX, 0, 0]} />;
        }
        return <ModelSlot key={i} index={i} isMobile={isMobile} slotGapX={slotGapX} />;
      })}
    </group>
  );
}
