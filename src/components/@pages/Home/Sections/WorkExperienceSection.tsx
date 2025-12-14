"use client";

import { WORK_EXPERIENCES } from "@/constants";
import SectionTitle from "@common/SectionTitle";
import ExperienceCard from "@common/Cards/ExperienceCard";

export default function WorkExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title={
            <>
              Work <span className="text-blue-400">Experience</span>
            </>
          }
          icon="💼"
          className="mb-16"
        />

        <div className="space-y-8">
          {WORK_EXPERIENCES.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
