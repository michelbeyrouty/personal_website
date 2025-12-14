"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function SpaceUniverse({
  scrollProgress,
  isMobile = false,
}: {
  scrollProgress: number;
  isMobile?: boolean;
}) {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors, sizes] = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    // Define vibrant star color palettes
    const starTypes = [
      { r: 1.0, g: 1.0, b: 1.0 }, // White
      { r: 1.0, g: 0.9, b: 0.7 }, // Warm white
      { r: 0.9, g: 0.9, b: 1.0 }, // Blue-white
      { r: 1.0, g: 0.8, b: 0.6 }, // Yellow-orange
      { r: 0.8, g: 0.8, b: 1.0 }, // Blue
      { r: 1.0, g: 0.6, b: 0.4 }, // Orange-red
      { r: 1.0, g: 0.2, b: 0.8 }, // Magenta
      { r: 0.2, g: 1.0, b: 0.8 }, // Cyan
      { r: 0.8, g: 1.0, b: 0.2 }, // Lime
      { r: 1.0, g: 0.4, b: 0.2 }, // Red-orange
      { r: 0.6, g: 0.2, b: 1.0 }, // Purple
      { r: 0.2, g: 0.8, b: 1.0 }, // Light blue
    ];

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 30 + 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Random star type and intensity with more vibrant colors
      const starType = starTypes[Math.floor(Math.random() * starTypes.length)];
      const intensity = Math.random() * 0.8 + 0.7; // Higher intensity for more vibrant colors
      const brightness = Math.random() * 0.5 + 0.8; // Higher brightness

      colors[i * 3] = starType.r * intensity * brightness;
      colors[i * 3 + 1] = starType.g * intensity * brightness;
      colors[i * 3 + 2] = starType.b * intensity * brightness;

      // Smaller star sizes
      sizes[i] = Math.random() * 0.8 + 0.1;
    }

    return [positions, colors, sizes];
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    // Gentle rotation for subtle movement
    ref.current.rotation.x += 0.0003;
    ref.current.rotation.y += 0.0005;

    // Twinkling effect by modifying the material opacity
    const time = clock.getElapsedTime();
    if (ref.current.material && !Array.isArray(ref.current.material)) {
      // Subtle pulsing opacity for twinkling effect
      (ref.current.material as THREE.PointsMaterial).opacity =
        0.8 + Math.sin(time * 2) * 0.2;
    }

    // Smooth expansion that slows down as it approaches the limit
    const maxScale = 15;
    const expansionLimit = 0.35; // Expansion slows down and stops around here

    let scale;
    if (scrollProgress >= expansionLimit) {
      scale = maxScale;
    } else {
      // Use eased scaling that smoothly approaches maxScale
      const progress = scrollProgress / expansionLimit;
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
      scale = 0.3 + easedProgress * (maxScale - 0.3);
    }

    ref.current.scale.setScalar(scale);

    // Continue moving the universe position based on scroll
    const maxZPosition = 100;
    const zPosition =
      scrollProgress >= 1
        ? maxZPosition
        : -50 + scrollProgress * (maxZPosition + 50);

    // Position universe below text initially, then move based on scroll
    // On mobile, start lower to account for the different layout
    const baseYPosition = isMobile ? -35 : -15; // Start further below on mobile
    const yPosition = baseYPosition + scrollProgress * 10; // Move up slightly as user scrolls

    ref.current.position.set(0, yPosition, zPosition);
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.8}
        sizeAttenuation
        depthWrite={false}
        alphaTest={0.01}
        blending={THREE.AdditiveBlending}
        toneMapped={false}
      />
      <bufferAttribute attach="geometry-attributes-color" args={[colors, 3]} />
      <bufferAttribute attach="geometry-attributes-size" args={[sizes, 1]} />
    </Points>
  );
}
