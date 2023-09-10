'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Earth from './Earth';
export default function EarthCanvas() {
  return (
    <div className="col-span-full lg:col-auto">
      <Canvas camera={{ fov: 20, position: [5, 5, 5] }}>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}
