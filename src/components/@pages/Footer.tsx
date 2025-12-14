"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-white/60 text-sm">
          © {currentYear} Michel Beyrouty. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center space-x-6">
          <a
            href="mailto:your.email@example.com"
            className="text-white/60 hover:text-blue-400 transition-colors duration-300"
            aria-label="Email"
          >
            <HiMail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-blue-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
