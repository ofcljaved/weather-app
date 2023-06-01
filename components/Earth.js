import { OrbitControls } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

export default function Earth() {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [
      "/image/earth_daymap_2k.jpg",
      "/image/earth_normal_map_2k.jpg",
      "/image/earth_specular_map_2k.jpg",
      "/image/earth_clouds_2k.png",
    ]
  );

  const earthRef = useRef();
  const cloudRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 24;
    cloudRef.current.rotation.y = elapsedTime / 18;
  });

  return (
    <>
      <ambientLight color="rgb(103,108,134)" />
      <pointLight
        color="rgb(255,238,204)"
        position={[-2, 0, 2]}
        intensity={3}
      />
      <mesh ref={cloudRef}>
        <sphereGeometry args={[2.51, 100, 100]} />
        <meshPhysicalMaterial
          map={cloudsMap}
          opacity={0.4}
          transparent={true}
          depthWrite={true}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[2.5, 100, 100]} />
        <meshPhysicalMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
    </>
  );
}
