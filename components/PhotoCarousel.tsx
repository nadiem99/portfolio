"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gallery, personal } from "@/content/personal";

export default function PhotoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Scroll-linked auto-scroll: as the carousel passes through the viewport
  // vertically, drive its horizontal scroll position. Cheap (rAF + passive),
  // and disabled for reduced-motion users (who keep manual control).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const max = track.scrollWidth - track.clientWidth;
      if (max <= 0) return;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // 0 as the strip enters from the bottom, 1 as it exits the top.
      const raw = (vh - rect.top) / (vh + rect.height);
      // Remap so the pan happens across the middle of the pass, finishing a
      // little before it leaves the screen.
      const p = Math.min(1, Math.max(0, (raw - 0.15) / 0.7));
      track.scrollLeft = p * max;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

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
        className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {gallery.map((photo, i) => (
          <a
            key={photo.src}
            href={personal.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[3/2] w-[82%] flex-none overflow-hidden border border-foreground/10 bg-foreground/5 sm:w-[56%] md:w-[42%] lg:w-[33%]"
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
