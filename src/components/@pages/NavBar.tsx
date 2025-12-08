"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import LogoButton from "@common/Buttons/LogoButton";

export default function Navbar() {
  const navLinks = [
    {
      link: "/#about",
      title: "About",
    },
    {
      link: "/#work",
      title: "Work",
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

  return (
    <nav className="flex flex-row justify-between px-6 py-5 w-full items-center fixed top-0 z-20 bg-brand-black">
      <Link href="/">
        <LogoButton text="Michel_Beyrouty" />
      </Link>

      <ul className="flex space-x-8 items-center">
        {navLinks.map((nav) => (
          <li key={nav.link}>
            <a
              href={nav.link}
              className="text-lg font-medium text-white/60 hover:text-brand-red transition-colors duration-300"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
