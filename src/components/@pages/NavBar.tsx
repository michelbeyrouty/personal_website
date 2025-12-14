"use client";

import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import LogoButton from "@common/Buttons/LogoButton";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroBottom);
      } else {
        // Fallback if hero section not found
        setIsScrolled(window.scrollY > 100);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex flex-row justify-between px-6 py-5 w-full items-center fixed top-0 z-1000 transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <Link href="/">
        <LogoButton text="Michel_Beyrouty" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 items-center">
        {NAV_LINKS.map((nav) => (
          <li key={nav.link}>
            <a
              href={nav.link}
              className="group relative text-lg font-medium text-white/60 transition-all duration-300 hover:drop-shadow-[0_0_10px_#60a5fa] inline-block"
              target={nav.link.startsWith("http") ? "_blank" : undefined}
              rel={
                nav.link.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              <span>{nav.title}</span>
              <span
                aria-hidden="true"
                className="absolute text-blue-400 w-0 inset-0 overflow-hidden transition-all duration-500 group-hover:w-full "
              >
                {nav.title}
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
        className={`md:hidden text-white/60 transition-colors duration-300 z-1000 ${
          isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Toggle mobile menu"
      >
        <HiMenu className="w-6 h-6" />
      </button>

      {/* Mobile Navigation Menu - Fullscreen Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md md:hidden z-40 transition-all duration-500 ease-in-out"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center justify-center h-full relative">
            {/* Close button in top right */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white/60 transition-colors duration-300"
              aria-label="Close mobile menu"
            >
              <HiX className="w-8 h-8" />
            </button>

            {/* Navigation Links */}
            <ul className="flex flex-col items-center space-y-8">
              {NAV_LINKS.map((nav, index) => (
                <li key={nav.link} className="animate-fadeInUp">
                  <a
                    href={nav.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-2xl font-medium text-white/80 transition-colors duration-300 py-3 px-6 rounded-lg"
                    target={nav.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      nav.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
