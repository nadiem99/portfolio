"use client";

import Image from "next/image";
import { useState } from "react";

interface BookCardProps {
  title: string;
  author: string;
  description: string;
  amazonUrl: string;
  coverUrl: string;
  color: string;
  rotation?: number;
  scale?: number;
  priority?: boolean;
}

export default function BookCard({
  title,
  author,
  description,
  amazonUrl,
  coverUrl,
  color,
  rotation = 0,
  scale = 1,
  priority = false,
}: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <a
      href={amazonUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block cursor-pointer"
      aria-label={`${title} by ${author}`}
    >
      <div
        className="relative mx-auto w-full max-w-[150px] transition-all duration-300 ease-out md:max-w-[170px]"
        style={{
          transform: `rotate(${isHovered ? rotation * 0.4 : rotation}deg) scale(${
            isHovered ? 1.04 : scale
          })`,
          transformOrigin: "center center",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[2/3] overflow-hidden rounded-[2px] bg-foreground/5 shadow-[4px_8px_16px_rgba(0,0,0,0.15),8px_16px_32px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:shadow-[6px_12px_24px_rgba(0,0,0,0.18),12px_24px_48px_rgba(0,0,0,0.12)]">
          {!imageFailed ? (
            <Image
              src={coverUrl}
              alt={`${title} cover`}
              fill
              sizes="(max-width: 768px) 45vw, 170px"
              className="object-cover"
              priority={priority}
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="flex h-full flex-col justify-between p-4 text-white" style={{ backgroundColor: color }}>
              <span className="font-mono text-[9px] uppercase tracking-widest opacity-70">Book</span>
              <div>
                <h3 className="font-serif text-lg leading-tight">{title}</h3>
                <p className="mt-3 font-mono text-[10px] opacity-75">{author}</p>
              </div>
            </div>
          )}
          <div className="absolute top-[3px] right-[-2px] bottom-[3px] w-[2px] bg-white/90 rounded-r-[1px]" />
          <div className="absolute top-[4px] right-[-3px] bottom-[4px] w-[1px] bg-gray-100/80" />
          <div className="absolute bottom-[-2px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-black/10 to-transparent blur-[1px]" />
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3 className="font-serif text-base font-normal leading-tight text-foreground md:text-lg">
          {title}
        </h3>
        <p className="mt-1 font-mono text-[11px] text-muted">{author}</p>
        <p className="mx-auto mt-2 hidden max-w-[220px] font-mono text-[10px] leading-relaxed text-muted/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
          {description}
        </p>
      </div>
    </a>
  );
}
