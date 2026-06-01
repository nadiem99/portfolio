import Section from "@/components/Section";
import NoteCard from "@/components/NoteCard";
import { notes, site, type Note } from "@/content/site";

export const revalidate = 3600;

const feedUrl = "https://nadiem99.substack.com/feed";
const personalTitleParts = ["quiet arrival", "weak ties", "faith as an antidote"];

function decodeEntities(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function cleanExcerpt(value: string) {
  return decodeEntities(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 220);
}

function getTagValue(item: string, tag: string) {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? decodeEntities(match[1]).trim() : "";
}

function parseSubstackFeed(xml: string): Note[] {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)]
    .map(([, item]) => {
      const title = getTagValue(item, "title").toLowerCase();
      const href = getTagValue(item, "link");
      const excerpt = cleanExcerpt(
        getTagValue(item, "description") || getTagValue(item, "content:encoded"),
      );

      return {
        title,
        href,
        excerpt,
        date: "",
        readTime: "",
      };
    })
    .filter((note) => note.title && note.href);
}

async function getSubstackNotes() {
  try {
    const response = await fetch(feedUrl, {
      next: { revalidate },
      headers: {
        "User-Agent": "Nadiem Ahmed portfolio",
      },
    });

    if (!response.ok) {
      return notes;
    }

    const xml = await response.text();
    const feedNotes = parseSubstackFeed(xml);
    return feedNotes.length ? feedNotes : notes;
  } catch {
    return notes;
  }
}

export default async function WritingPage() {
  const substackNotes = await getSubstackNotes();
  const personalNotes = substackNotes.filter((note) =>
    personalTitleParts.some((part) => note.title.includes(part)),
  );
  const professionalNotes = substackNotes.filter((note) => !personalNotes.includes(note));

  return (
    <Section>
      <div className="mb-12 md:mb-16">
        <h1 className="mb-3 font-serif text-3xl md:mb-4 md:text-5xl">Writing</h1>
        <p className="max-w-2xl font-mono text-[13px] leading-[1.7] text-muted md:text-[14px]">
          Essays on AI, strategy, countries, companies, and the occasional personal note.
        </p>
      </div>

      <div className="max-w-3xl">
        {professionalNotes.map((note) => (
          <NoteCard
            key={note.href}
            title={note.title}
            excerpt={note.excerpt}
            href={note.href}
          />
        ))}
      </div>

      {personalNotes.length > 0 ? (
        <div className="mt-12 max-w-3xl border-t border-foreground/10 pt-10 md:mt-16">
          <p className="mb-4 max-w-2xl font-mono text-[12px] leading-[1.7] text-muted md:text-[13px]">
            A quieter shelf for faith, luck, relationships, and the things that make the work feel human.
          </p>
          {personalNotes.map((note) => (
            <NoteCard
              key={note.href}
              title={note.title}
              excerpt={note.excerpt}
              href={note.href}
            />
          ))}
        </div>
      ) : null}

      <div className="mt-12 max-w-3xl border-t border-foreground/10 pt-6 md:mt-16 md:pt-8">
        <a
          href={site.writing}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 font-mono text-[13px] transition-all duration-300 hover:translate-x-2 md:text-[14px]"
        >
          <span className="text-muted transition-colors group-hover:text-accent">
            Read more on Substack
          </span>
          <span className="text-accent">→</span>
        </a>
      </div>
    </Section>
  );
}
