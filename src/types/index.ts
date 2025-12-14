import { ReactNode } from "react";

export interface WorkExperience {
  title: string;
  company_name: string;
  logo: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface Service {
  title: string;
  icon: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface NavLink {
  link: string;
  title: string | ReactNode;
}
