"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";

import EarthDayMap from "../public/image/earth_daymap_2k.jpg";
import EarthNormalMap from "../public/image/earth_normal_map_2k.jpg";
import EarthSpecularMap from "../public/image/earth_specular_map_2k.jpg";
import EarthCloudsMap from "../public/image/earth_clouds_2k.jpg";
import { TextureLoader } from "three";
import { useTexture } from "@react-three/drei";

export default function Earth() {
  const [colorMap, normalMap, specularMap, cloudsMap] = useTexture([
    EarthDayMap,
    EarthNormalMap,
    EarthSpecularMap,
    EarthCloudsMap,
  ]);

  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhongMaterial color="red" />
            <meshStandardMaterial />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
