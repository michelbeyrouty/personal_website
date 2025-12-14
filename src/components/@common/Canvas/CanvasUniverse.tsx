"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import SpaceUniverse from "@common/3D/SpaceUniverse";
import { useScrollProgress } from "@hooks/useScrollProgress";

export default function CanvasUniverse() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{
          position: [0, 0, 30],
          fov: 75,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <SpaceUniverse
            scrollProgress={scrollProgress}
            isMobile={typeof window !== "undefined" && window.innerWidth < 768}
          />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
}
