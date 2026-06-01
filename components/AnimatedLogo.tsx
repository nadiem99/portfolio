"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";

export default function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/"
      className="group relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="font-serif text-[22px] leading-tight transition-all duration-300 md:text-[2.5rem]">
        <span className="relative inline-block">
          {site.name}
          <span
            className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-500 ${
              isHovered ? "w-full" : "w-0"
            }`}
          />
        </span>
      </h1>
      <div
        className={`hidden absolute -bottom-6 left-0 font-mono text-[10px] uppercase tracking-widest text-accent transition-all duration-300 md:block ${
          isHovered ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
      >
        AI operator · product · strategy · GTM
      </div>
    </Link>
  );
}
