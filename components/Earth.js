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
    earthRef.current.rotation.y = elapsedTime / 12;
    cloudRef.current.rotation.y = elapsedTime / 12;
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight color="rgb(255,246,204)" position={[2, 0, 3]} intensity={3} />
      <mesh ref={cloudRef}>
        <sphereGeometry args={[2.255, 100, 100]} />
        <meshPhysicalMaterial
          map={cloudsMap}
          opacity={0.4}
          transparent={true}
          depthWrite={true}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[2.25, 100, 100]} />
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
