import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  {
    link: "/#about",
    title: "About",
  },
  {
    link: "/#experience",
    title: "Experience",
  },
  {
    link: "/#projects",
    title: "Projects",
  },
  {
    link: "/#contact",
    title: "Contact",
  },
  {
    link: "https://github.com/michelbeyrouty",
    title: <FaGithub />,
  },
  {
    link: "https://linkedin.com/in/michelbeyrouty",
    title: <FaLinkedin />,
  },
  {
    link: "https://drive.google.com/file/d/1KUEhL7KTxjHwM0h_fMtunx-1Jdo-DEp0/view?usp=sharing",
    title: "Resume",
  },
];
