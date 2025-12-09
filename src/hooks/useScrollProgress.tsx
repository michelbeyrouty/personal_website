"use client";

import { useEffect, useState, useCallback } from "react";

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (scrollHeight > 0) {
      const progress = Math.min(scrollTop / scrollHeight, 1);
      setScrollProgress(progress);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scrollProgress;
};
