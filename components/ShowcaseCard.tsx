"use client";

import Image from "next/image";
import { useState } from "react";
import type { Showcase } from "@/content/site";

export default function ShowcaseCard({ title, blurb, tags, media, links }: Showcase) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-foreground/10 bg-background transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/[0.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      {media && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-foreground/10 bg-foreground/5">
          {media.kind === "image" ? (
            <a
              href={media.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full"
              aria-label={`Open ${title}`}
            >
              <Image
                src={media.src}
                alt={`${title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </a>
          ) : playing ? (
            media.kind === "loom" ? (
              <iframe
                src={`https://www.loom.com/embed/${media.embedId}?autoplay=1&hide_owner=true&hide_title=true&hideEmbedTopBar=true`}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                title={`${title} demo`}
              />
            ) : (
              <video
                src={media.src}
                poster={media.poster}
                controls
                autoPlay
                playsInline
                className="absolute inset-0 h-full w-full bg-black object-contain"
              />
            )
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play ${title} demo`}
              className="group/play absolute inset-0 h-full w-full"
            >
              <Image
                src={media.poster}
                alt={`${title} demo`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
              />
              <span className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover/play:bg-black/25" />
              <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover/play:scale-110">
                <span className="ml-1 h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-accent" />
              </span>
              <span className="absolute bottom-3 left-3 bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted backdrop-blur-sm">
                Demo
              </span>
            </button>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-serif text-[19px] leading-tight transition-colors duration-300 group-hover:text-accent md:text-[22px]">
          {title}
        </h3>
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase tracking-wider text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="mt-3 flex-1 font-mono text-[13px] leading-[1.7] text-muted">
          {blurb}
        </p>
        {links.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-[12px] text-foreground transition-colors hover:text-accent"
              >
                <span>{link.label}</span>
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
