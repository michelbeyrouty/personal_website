import type { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, interactive portfolio website built with Next.js featuring 3D space animations, responsive design, and smooth scrolling effects. Showcases my work experience, skills, and ProjectImages with a stellar theme.",
    image: "/assets/ProjectImages/personal_website.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "Framer Motion",
      "Tailwind CSS",
    ],
    github: "https://github.com/michelbeyrouty/personal_website",
    demo: "https://michelbeyrouty.com",
    featured: true,
  },
  {
    title: "Nexus Landing Page",
    description:
      "Dive into the future of cloud computing with Hexagon's Nexus Cloud platform designed to showcase cutting-edge features and empower businesses with seamless innovation.",
    image: "/assets/ProjectImages/nexus_landing_page.png",
    technologies: ["React", "Sanity", "Tailwind CSS", "Docker", "Azure"],
    demo: "https://nexus.hexagon.com/",
    featured: true,
  },
  {
    title: "Nexus Cloud Platform",
    description: `Nexus is Hexagon’s new Digital Reality Platform for manufacturers that connects people, technologies and data to accelerate innovation and bring ideas to life faster than ever before.`,
    image: "/assets/ProjectImages/nexus.png",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Thales Licensing",
      "Salesforce",
      "Azure",
    ],
    demo: "https://nexus.hexagon.com/home",
    featured: true,
  },
  {
    title: "Simple Work Order Management System",
    description:
      "A simple work order management system featuring status updates, simple search and productivity analytics. Clean architecture, testing and thoughtful UX design.",
    image: "/assets/ProjectImages/full_stack_take_home_26.png",
    technologies: ["React", "Vanilla CSS", "SQLite", "Express", "JavaScript"],
    github: "https://github.com/michelbeyrouty/fullstack_take_home_2025",
    demo: "https://fullstacktakehome.michelbeyrouty.com/",
    featured: false,
  },
];
