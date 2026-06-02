"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Optional delay in ms for simple staggering. */
  delay?: number;
}

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: reveal right after mount, with no animation
    // (the `motion-reduce:transition-none` class removes the transition).
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      // Trigger a little before the section is fully in view, and only once
      // it's meaningfully on screen.
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: shown ? `${delay}ms` : "0ms",
        willChange: "opacity, transform",
      }}
      className={`transform-gpu transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        shown ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-6 scale-[0.985] opacity-0 blur-[3px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
