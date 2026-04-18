"use client";

import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import type { OrbitControls } from "three-stdlib";
import * as THREE from "three";

interface CameraRigProps {
  target: THREE.Object3D;
}

export default function CameraRig({ target }: CameraRigProps) {
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
      const orbit = controls as unknown as OrbitControls;
      orbit.target.set(0, 0, 0);
      orbit.update();
    }
  }, [target, camera, controls]);

  return null;
}