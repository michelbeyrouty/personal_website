import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

export default function RocketOrbitingMoonCanvas() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      className="z-100"
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <RocketOrbitingMoon />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}

function RocketOrbitingMoon() {
  const rocketOrbitingMoon = useGLTF("./assets/rocketOrbitingMoon/scene.gltf");

  return (
    <primitive
      object={rocketOrbitingMoon.scene}
      scale={0.013}
      position-y={0.5}
      rotation-y={0}
    />
  );
}
