import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

export default function RocketCanvas() {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <RocketScene />

        <Preload all />
      </Suspense>
    </Canvas>
  );
}

function RocketScene() {
  const earth = useGLTF("./assets/rocketOrbitingMoon/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={0.01}
      position-y={0.5}
      rotation-y={0}
    />
  );
}
