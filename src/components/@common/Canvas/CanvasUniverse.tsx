"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import SpaceUniverse from "../3D/SpaceUniverse";
import { useScrollProgress } from "../../../hooks/useScrollProgress";

export default function CanvasUniverse() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        style={{ width: "100%", height: "100%" }}
      >
        <SpaceUniverse scrollProgress={scrollProgress} />
        <Preload all />
      </Canvas>
    </div>
  );
}
