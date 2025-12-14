"use client";

import SectionTitle from "@common/SectionTitle";
import ProjectCard from "@common/Cards/ProjectCard";
import Button from "@common/Buttons/Button";
import { PROJECTS } from "@/constants";
import { useState } from "react";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = PROJECTS.filter((project) => project.featured);
  const otherProjects = PROJECTS.filter((project) => !project.featured);
  const displayedProjects = showAll
    ? [...featuredProjects, ...otherProjects]
    : featuredProjects;

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={
            <>
              My <span className="text-blue-400">Projects</span>
            </>
          }
          icon="🚀"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="text-center">
            <Button
              variant="primary"
              onClick={() => {
                console.log("Button clicked, showAll:", showAll);
                setShowAll(!showAll);
              }}
              className="relative z-10"
            >
              {showAll
                ? "Show Less"
                : `Show ${otherProjects.length} More Projects`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
