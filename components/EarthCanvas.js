"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "./Earth";
export default function EarthCanvas() {
  return (
    <div>
      <Canvas camera={{ fov: 20, position: [5, 5, 5] }}>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}
