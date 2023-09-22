'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Earth from './Earth';
export default function EarthCanvas() {
  return (
    <div className="col-span-full lg:col-auto row-[2/4] lg:row-auto w-full opacity-40 lg:opacity-100">
      <Canvas camera={{ fov: 20, position: [5, 5, 5] }}>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}
