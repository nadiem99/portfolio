import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Amiri } from "next/font/google";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import WorldMap from "@/components/WorldMap";
import PhotoCarousel from "@/components/PhotoCarousel";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import { site } from "@/content/site";
import { personal, teams, quranVerses, hadith, type Scripture } from "@/content/personal";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Personal | Nadiem Ahmed",
  description:
    "The personal side of Nadiem Ahmed — origins, travel, photography, sports, music, and faith.",
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 font-mono text-[12px] uppercase tracking-widest text-muted">
      {children}
    </p>
  );
}

function ScriptureBlock({ item }: { item: Scripture }) {
  return (
    <figure className="border-l-2 border-accent/40 pl-5 md:pl-6">
      <p
        dir="rtl"
        lang="ar"
        className={`${amiri.className} text-[26px] leading-[1.9] text-foreground md:text-[34px] md:leading-[1.9]`}
      >
        {item.arabic}
      </p>
      <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-foreground/80 md:text-xl">
        {item.english}
      </p>
      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted">
        {item.source}
      </figcaption>
    </figure>
  );
}

export default function PersonalPage() {
  return (
    <Section>
      {/* Hero */}
      <header className="mb-20 md:mb-28">
        <h1 className="max-w-4xl font-serif text-[34px] leading-[1.1] md:text-[58px] md:leading-[1.05]">
          Born in Calgary, raised in Saudi Arabia, Harari by blood — and still
          moving.
        </h1>
        <p className="mt-7 max-w-2xl font-serif text-lg leading-relaxed text-foreground/80 md:text-2xl">
          The professional version of me lives on the other tabs. This one is
          everything else — the places, pictures, teams, songs, and faith that
          actually shape how I see the world.
        </p>
      </header>

      {/* Origins */}
      <Reveal>
        <section className="mb-20 md:mb-28">
          <Eyebrow>Origins</Eyebrow>
          <h2 className="mb-6 max-w-3xl font-serif text-2xl leading-snug md:text-4xl">
            I&apos;ve never had a clean answer to &ldquo;where are you
            from?&rdquo;
          </h2>
          <p className="mb-10 max-w-2xl font-serif text-lg leading-relaxed text-foreground/80 md:text-xl">
            I was born in Calgary. My family is Harari — a small ethnic group from
            the old walled city of Harar in eastern Ethiopia. I grew up in Saudi
            Arabia, moved back to Canada, and now I&apos;m in New York. Four
            countries before I was old enough to have an accent that matched any
            of them.
          </p>
          <WorldMap />
        </section>
      </Reveal>

      {/* Travel & Photography */}
      <Reveal>
        <section className="mb-20 md:mb-28">
          <Eyebrow>Travel &amp; Photography</Eyebrow>
          <h2 className="mb-6 max-w-3xl font-serif text-2xl leading-snug md:text-4xl">
            I travel to collect angles, not stamps.
          </h2>
          <p className="mb-10 max-w-2xl font-serif text-lg leading-relaxed text-foreground/80 md:text-xl">
            Somewhere along the way I started carrying a camera everywhere. I shoot
            the in-between moments — light, streets, people, the texture of a
            place — and post the ones I love at {personal.instagramHandle}.
          </p>
          <PhotoCarousel />
        </section>
      </Reveal>

      {/* Sports */}
      <Reveal>
        <section className="mb-20 md:mb-28">
          <Eyebrow>Sports</Eyebrow>
          <h2 className="mb-6 max-w-3xl font-serif text-2xl leading-snug md:text-4xl">
            I grew up playing, and never stopped watching.
          </h2>
          <p className="mb-10 max-w-2xl font-serif text-lg leading-relaxed text-foreground/80 md:text-xl">
            Sports are where I first learned about teams, pressure, and the long
            game. My allegiances, for better and (often) worse:
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {teams.map((team) => (
              <div
                key={team.name}
                className="flex items-center gap-4 border border-foreground/10 bg-foreground/[0.015] p-4 transition-colors hover:border-accent/40"
              >
                <div className="relative h-12 w-12 flex-none">
                  <Image
                    src={team.logo}
                    alt={team.name}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[13px] leading-tight text-foreground">
                    {team.name}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-muted">{team.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Music */}
      <Reveal>
        <section className="mb-20 md:mb-28">
          <Eyebrow>Music</Eyebrow>
          <h2 className="mb-6 max-w-3xl font-serif text-2xl leading-snug md:text-4xl">
            There&apos;s a soundtrack running under all of it.
          </h2>
          <p className="mb-10 max-w-2xl font-serif text-lg leading-relaxed text-foreground/80 md:text-xl">
            Here&apos;s what&apos;s on rotation right now.
          </p>
          <SpotifyEmbed />
        </section>
      </Reveal>

      {/* Faith */}
      <Reveal>
        <section className="mb-20 md:mb-24">
          <Eyebrow>Faith</Eyebrow>
          <h2 className="mb-6 max-w-3xl font-serif text-2xl leading-snug md:text-4xl">
            I&apos;m Muslim, and it&apos;s the quiet center of all of this.
          </h2>
          <p className="mb-12 max-w-2xl font-serif text-lg leading-relaxed text-foreground/80 md:text-xl">
            My faith shapes how I think about time, work, risk, and what actually
            counts as success. It&apos;s what steadies me when optimization stops
            being enough — and the lens behind a lot of what I write. A few lines
            I keep coming back to:
          </p>

          <div className="space-y-12">
            <div className="space-y-10">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted/80">
                From the Qur&apos;an
              </p>
              {quranVerses.map((v) => (
                <ScriptureBlock key={v.source} item={v} />
              ))}
            </div>
            <div className="space-y-10">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted/80">
                From the Prophet ﷺ
              </p>
              {hadith.map((h) => (
                <ScriptureBlock key={h.source} item={h} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Closing */}
      <Reveal>
        <footer className="border-t border-foreground/10 pt-8">
          <p className="mb-4 font-serif text-xl text-foreground/80 md:text-2xl">
            Want the professional version?
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[13px]">
            <Link href="/" className="text-foreground transition-colors hover:text-accent">
              Home
            </Link>
            <Link href="/writing" className="text-foreground transition-colors hover:text-accent">
              Writing
            </Link>
            <Link href="/reading" className="text-foreground transition-colors hover:text-accent">
              Reading
            </Link>
            <a
              href={site.email}
              className="text-foreground transition-colors hover:text-accent"
            >
              Or just say hi →
            </a>
          </div>
        </footer>
      </Reveal>
    </Section>
  );
}
