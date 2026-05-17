"use client";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { MODELS } from "./modelConfig";
import { HOTSPOTS } from "./modelConfig";
import HotspotPin from "./HotspotPin";

const MODEL_STOPS = MODELS.map((_, i) => i / (MODELS.length + 1));
const FOOTER_STOP = MODELS.length / (MODELS.length + 1);

const SLOT_GAP_X_DESKTOP = 20;
const SLOT_GAP_X_MOBILE  = 12;
const FOOTER_OVERSHOOT_DESKTOP = 22;
const FOOTER_OVERSHOOT_MOBILE  = 14;
const LERP_DESKTOP = 0.06;
const LERP_MOBILE  = 0.10;

const isMobileInit = typeof window !== "undefined" && window.innerWidth < 768;

interface AllModelsProps {
  scrollProgress: number;
  onReady: () => void;
}

function ModelSlot({ index, isMobile, slotGapX }: { index: number; isMobile: boolean; slotGapX: number }) {
  const { url } = MODELS[index];
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);
  const [ready, setReady] = useState(false);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.4;
  });

  useEffect(() => {
    if (!groupRef.current) return;
    const clone = scene.clone(true);

    clone.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (mesh.isMesh) {
        if (mesh.material)
          (mesh.material as THREE.MeshStandardMaterial).envMapIntensity = 1.4;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });

    if (index === 0) {
      clone.rotation.set(Math.PI / 2, 0, 0);
      clone.updateMatrixWorld(true);
    }

    const mobileMult  = isMobile ? 0.5 : 1;
    const scaleFactor = (index === 0 ? 6 : 4) * mobileMult;
    const box         = new THREE.Box3().setFromObject(clone);
    const centre      = box.getCenter(new THREE.Vector3());
    const size        = box.getSize(new THREE.Vector3());
    const scale       = scaleFactor / Math.max(size.x, size.y, size.z);
    const baseX       = index * slotGapX;

    groupRef.current.clear();
    groupRef.current.add(clone);
    groupRef.current.position.set(baseX - centre.x * scale, -centre.y * scale, -centre.z * scale);
    groupRef.current.scale.setScalar(scale);
    setReady(true);
  }, [scene, index, isMobile, slotGapX]);

  return (
    <group ref={groupRef}>
      {ready && (HOTSPOTS[index] ?? []).map((hotspot, i) => (
        <HotspotPin key={i} hotspot={hotspot} />
      ))}
    </group>
  );
}

export default function AllModels({ scrollProgress, onReady }: AllModelsProps) {
  const [isMobile, setIsMobile] = useState(isMobileInit);
  const stripRef = useRef<THREE.Group>(null);
  const currentX = useRef(0);
  const notified = useRef(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const slotGapX        = isMobile ? SLOT_GAP_X_MOBILE : SLOT_GAP_X_DESKTOP;
  const footerOvershoot = isMobile ? FOOTER_OVERSHOOT_MOBILE : FOOTER_OVERSHOOT_DESKTOP;
  const lerp            = isMobile ? LERP_MOBILE : LERP_DESKTOP;

  useFrame(() => {
    let targetX: number;

    if (scrollProgress >= FOOTER_STOP) {
      const lastModelX = (MODELS.length - 1) * slotGapX;
      const footerT = (scrollProgress - FOOTER_STOP) / (1 - FOOTER_STOP);
      targetX = lastModelX + footerT * footerOvershoot;
    } else {
      let loIdx = 0;
      for (let i = MODEL_STOPS.length - 1; i >= 0; i--) {
        if (scrollProgress >= MODEL_STOPS[i]) { loIdx = i; break; }
      }
      const hiIdx = Math.min(loIdx + 1, MODEL_STOPS.length - 1);
      const lo = MODEL_STOPS[loIdx];
      const hi = MODEL_STOPS[hiIdx];
      const t = hi > lo ? (scrollProgress - lo) / (hi - lo) : 0;
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      targetX = (loIdx + eased * (hiIdx - loIdx)) * slotGapX;
    }

    currentX.current = THREE.MathUtils.lerp(currentX.current, targetX, lerp);
    if (stripRef.current) stripRef.current.position.x = -currentX.current;

    if (!notified.current) {
      notified.current = true;
      setTimeout(() => onReady(), 0);
    }
  });

  return (
    <group ref={stripRef}>
      {MODELS.map((_, i) => (
        <ModelSlot key={i} index={i} isMobile={isMobile} slotGapX={slotGapX} />
      ))}
    </group>
  );
}
