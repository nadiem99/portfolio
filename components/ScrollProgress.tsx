"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-foreground/5 z-50">
      <div
        className="h-full bg-gradient-to-r from-accent to-accent-light transition-all duration-150 ease-out shadow-[0_0_8px_rgba(139,69,19,0.3)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

