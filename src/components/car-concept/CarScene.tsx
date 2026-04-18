"use client";

import { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import * as THREE from "three";
import { hotspots } from "./departmentData";
import CameraRig from "./CameraRig";
import HotspotPin from "./HotspotPin";

const DRACO_DECODER_URL = "https://www.gstatic.com/draco/versioned/decoders/1.5.7/";

interface CarSceneProps {
  url: string;
  /** Ref-callback pattern — avoids setState-during-render warnings */
  onLoadedRef: React.MutableRefObject<(() => void) | null>;
}

export default function CarScene({ url, onLoadedRef }: CarSceneProps) {
  const gltf = useLoader(GLTFLoader, url, (loader) => {
    const draco = new DRACOLoader();
    draco.setDecoderPath(DRACO_DECODER_URL);
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

    // Defer to avoid setState-in-render; only fire once
    if (!notified.current && onLoadedRef.current) {
      notified.current = true;
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
      {hotspots.map((dept) => (
        <HotspotPin key={dept.id} dept={dept} />
      ))}
    </group>
  );
}