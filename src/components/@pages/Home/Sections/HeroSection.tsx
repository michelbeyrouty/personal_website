"use client";

import { useScrollProgress } from "@hooks/useScrollProgress";
import { motion } from "framer-motion";
import Button from "@common/Buttons/Button";

export default function HeroSection() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="relative h-[150vh] bg-transparent text-white overflow-hidden z-10">
      <motion.div
        className="fixed inset-0 z-20 flex items-start justify-center pt-40"
        animate={{
          opacity: scrollProgress > 0.1 ? 0 : 1,
          y: -scrollProgress * 60,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl lg:text-7xl font-bold drop-shadow-2xl">
            Hi, I'm <span className="text-blue-400">Michel Beyrouty</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-xl">
            Full Stack Developer exploring the infinite possibilities of code
            and creating stellar user experiences across the digital universe.
          </p>
          <div className="flex gap-4 justify-center">
            <Button href="#about" variant="primary">
              Explore More
            </Button>
            <Button href="#experience" variant="secondary">
              View Experience
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
