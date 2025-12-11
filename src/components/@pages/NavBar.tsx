"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import LogoButton from "@common/Buttons/LogoButton";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("click", handleClickOutside);
        document.body.style.overflow = "unset";
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
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

  return (
    <>
      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>

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

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((nav) => (
            <li key={nav.link}>
              <a
                href={nav.link}
                className="text-lg font-medium text-white/60 hover:text-blue-400 transition-colors duration-300"
                target={nav.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  nav.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {nav.title}
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
          className={`md:hidden text-white/60 hover:text-blue-400 transition-colors duration-300 z-60 ${
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
                onClick={handleLinkClick}
                className="absolute top-6 right-6 text-white/60 hover:text-blue-400 transition-colors duration-300"
                aria-label="Close mobile menu"
              >
                <HiX className="w-8 h-8" />
              </button>

              {/* Navigation Links */}
              <ul className="flex flex-col items-center space-y-8">
                {navLinks.map((nav, index) => (
                  <li key={nav.link} className="animate-fadeInUp">
                    <a
                      href={nav.link}
                      onClick={handleLinkClick}
                      className="block text-2xl md:text-3xl font-medium text-white/80 hover:text-blue-400 transition-all duration-300 py-3 px-6 rounded-lg hover:bg-blue-500/10"
                      target={
                        nav.link.startsWith("http") ? "_blank" : undefined
                      }
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

              {/* Decorative elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
