import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { TextureLoader, Mesh } from 'three';
import * as THREE from 'three';
import EarthNormalMap from '../assets/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../assets/textures/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../assets/textures/8k_earth_clouds.jpg';
import EarthNightMap from '../assets/textures/8k_earth_nightmap.jpg';

const Earth: React.FC = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthNightMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap],
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (earthRef != null) {
      if (earthRef.current != null) {
        if (elapsedTime > 1) {
          (earthRef.current! as Mesh).rotation.y -= 0.00005;
          (cloudsRef.current! as Mesh).rotation.y -= 0.00005;
        }
      }
    }
  });

  useEffect(() => {
    if (earthRef != null) {
      if (earthRef.current != null) {
        (earthRef.current! as Mesh).rotateY(3);
        (earthRef.current! as Mesh).rotateX(-0.1);
        (earthRef.current! as Mesh).rotateZ(-0.2);
        (cloudsRef.current! as Mesh).rotateY(3);
        (cloudsRef.current! as Mesh).rotateX(-0.1);
        (cloudsRef.current! as Mesh).rotateZ(-0.2);
      }
    }
  });

  let ambientColor = '#fffbe3';
  return (
    <>
      <ambientLight color={ambientColor} intensity={6} />
      <pointLight
        color="#f6f3ea"
        position={[2, 0, 7]}
        intensity={1.5}
        decay={2}
      />
      <Stars
        radius={300}
        depth={60}
        count={2000}
        factor={7}
        saturation={0}
        fade={true}
      />

      <mesh ref={cloudsRef} scale={[2.5, 2.5, 2.5]}>
        <sphereGeometry args={[1.007, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.03}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} scale={[2.5, 2.5, 2.5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          roughness={0.7}
          bumpScale={1}
        />
      </mesh>
    </>
  );
};

export default Earth;
