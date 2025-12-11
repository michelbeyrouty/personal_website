"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types";
import { FaGithub, FaLink } from "react-icons/fa6";
import Button from "@common/Buttons/Button";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-black/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl overflow-hidden hover:border-blue-400 transition-all duration-300 z-100"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

        {project.featured && (
          <div className="absolute top-4 right-4 bg-blue-500/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-white text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 relative z-20">
          {project.github && (
            <Button
              variant="text"
              onClick={() => {
                window.open(project.github, "_blank", "noopener,noreferrer");
              }}
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm cursor-pointer"
            >
              <FaGithub className="w-4 h-4" />
              Code
            </Button>
          )}
          {project.demo && (
            <Button
              variant="text"
              onClick={() => {
                window.open(project.demo, "_blank", "noopener,noreferrer");
              }}
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm cursor-pointer"
            >
              <FaLink className="w-4 h-4" />
              Live
            </Button>
          )}
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-400/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}
