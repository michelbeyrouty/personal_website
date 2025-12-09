"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import LogoButton from "@common/Buttons/LogoButton";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroBottom - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`flex flex-row justify-between px-6 py-5 w-full items-center fixed top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/25"
          : "bg-transparent"
      }`}
    >
      <Link href="/">
        <LogoButton text="Michel_Beyrouty" />
      </Link>

      <ul className="flex space-x-8 items-center">
        {navLinks.map((nav) => (
          <li key={nav.link}>
            <a
              href={nav.link}
              className="text-lg font-medium text-white/60 hover:text-blue-400 transition-colors duration-300"
              target={nav.link.startsWith("http") ? "_blank" : undefined}
              rel={
                nav.link.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
