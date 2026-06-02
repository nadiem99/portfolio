"use client";

import Image from "next/image";
import { useRef } from "react";
import { gallery, personal } from "@/content/personal";

export default function PhotoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <div className="mb-3 flex items-center justify-between">
        <a
          href={personal.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 font-mono text-[12px] text-foreground transition-colors hover:text-accent md:text-[13px]"
        >
          <span>Shot by Nad — {personal.instagramHandle}</span>
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>
        <div className="hidden gap-2 md:flex">
          <CarouselButton dir={-1} onClick={() => scrollByCards(-1)} />
          <CarouselButton dir={1} onClick={() => scrollByCards(1)} />
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {gallery.map((photo, i) => (
          <a
            key={photo.src}
            href={personal.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[3/2] w-[82%] flex-none snap-center overflow-hidden border border-foreground/10 bg-foreground/5 sm:w-[56%] md:w-[42%] lg:w-[33%]"
            aria-label={`${photo.alt} — open Instagram`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 82vw, (max-width: 1024px) 42vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              priority={i === 0}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

function CarouselButton({ dir, onClick }: { dir: 1 | -1; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 1 ? "Next photos" : "Previous photos"}
      className="grid h-8 w-8 place-items-center border border-foreground/15 font-mono text-[13px] text-muted transition-colors hover:border-accent/40 hover:text-accent"
    >
      {dir === 1 ? "→" : "←"}
    </button>
  );
}
