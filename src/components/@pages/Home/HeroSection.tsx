"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { motion } from "framer-motion";
import SpaceUniverse from "../../@common/3D/SpaceUniverse";

export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 1.5;
      const progress = Math.min(window.pageYOffset / heroHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contentOpacity =
    scrollProgress > 0.3
      ? 0
      : scrollProgress > 0.2
      ? (0.3 - scrollProgress) / 0.1
      : 1;

  return (
    <>
      {/* Fixed Space Background for entire page */}
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 30], fov: 75 }}
          style={{ width: "100%", height: "100%" }}
        >
          <SpaceUniverse scrollProgress={scrollProgress} />
          <Preload all />
        </Canvas>
      </div>

      <section
        id="hero"
        className="relative h-[150vh] bg-transparent text-white overflow-hidden z-10"
      >
        {/* Content */}
        <motion.div
          className="fixed inset-0 z-20 flex items-start justify-center pt-40"
          animate={{ opacity: contentOpacity }}
        >
          <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
            <motion.h1
              className="text-5xl lg:text-7xl font-bold drop-shadow-2xl"
              animate={{ y: -scrollProgress * 100 }}
            >
              Hi, I'm <span className="text-blue-400">Michel Beyrouty</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-xl"
              animate={{ y: -scrollProgress * 80 }}
            >
              Full Stack Developer exploring the infinite possibilities of code
              and creating stellar user experiences across the digital universe.
            </motion.p>
            <motion.div
              className="flex gap-4 justify-center"
              animate={{ y: -scrollProgress * 60 }}
            >
              <a
                href="#about"
                className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors backdrop-blur-sm"
              >
                Explore More
              </a>
              <a
                href="#work"
                className="border border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-400/20 transition-colors backdrop-blur-sm"
              >
                View Galaxy
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
