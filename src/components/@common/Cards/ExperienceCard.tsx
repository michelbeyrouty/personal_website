"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WorkExperience } from "@/types";

interface ExperienceCardProps {
  experience: WorkExperience;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-black/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-white text-xl font-bold mb-1">
            {experience.title}
          </h3>
          <p className="text-blue-400 font-semibold">
            {experience.company_name}
          </p>
        </div>
        <div className="text-right">
          <div className="w-12 h-12 mb-2 ml-auto">
            <Image
              src={experience.logo}
              alt={`${experience.company_name} logo`}
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm">{experience.date}</p>
        </div>
      </div>

      <ul className="space-y-2">
        {experience.points.map((point, pointIndex) => (
          <li key={pointIndex} className="text-gray-300 text-sm flex gap-2">
            <span className="text-blue-400 mt-1">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
