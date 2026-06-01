import Section from "@/components/Section";
import BookCard from "@/components/BookCard";
import { readingShelves } from "@/content/site";

const rotations = [-2.5, 1.5, -1, 2.25, -1.75, 1, -1.2, 2.8, -2.1, 1.1, -0.8];
const visibleShelves = readingShelves.filter((shelf) => shelf.title !== "Want to Read");

export default function ReadingPage() {
  return (
    <Section>
      <div className="mb-10 md:mb-12">
        <h1 className="mb-4 font-serif text-3xl md:text-5xl">Reading</h1>
        <p className="max-w-2xl font-mono text-[13px] leading-[1.7] text-muted md:text-[14px]">
          Books I am reading, books I return to, and articles worth saving.
        </p>
      </div>

      <div className="space-y-20 md:space-y-24">
        {visibleShelves.map((shelf, shelfIndex) => (
          <section key={shelf.title}>
            <div className="mb-8 flex items-end justify-between border-b border-foreground/10 pb-3">
              <h2 className="font-serif text-2xl md:text-3xl">{shelf.title}</h2>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                {shelf.books.length} books
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-7 gap-y-12 overflow-visible md:grid-cols-3 md:gap-x-10 lg:grid-cols-4 xl:grid-cols-5">
              {shelf.books.map((book, index) => (
                <div
                  key={`${shelf.title}-${book.title}`}
                  className="relative overflow-visible"
                  style={{
                    marginTop:
                      index % 5 === 1
                        ? "2rem"
                        : index % 5 === 2
                          ? "0.75rem"
                          : index % 5 === 3
                            ? "2.5rem"
                            : index % 5 === 4
                              ? "0.25rem"
                              : "0",
                  }}
                >
                  <BookCard
                    title={book.title}
                    author={book.author}
                    description={book.description}
                    amazonUrl={book.amazonUrl}
                    coverUrl={book.coverUrl}
                    color={book.color}
                    rotation={rotations[index % rotations.length]}
                    scale={index % 3 === 1 ? 0.98 : 1}
                    priority={shelfIndex === 0 && index === 0}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="border-t border-foreground/10 pt-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Favorite Articles</h2>
              <p className="mt-2 max-w-2xl font-mono text-[12px] leading-[1.7] text-muted md:text-[13px]">
                A separate article shelf is coming soon.
              </p>
            </div>
            <span className="w-fit border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
              To update
            </span>
          </div>
        </section>
      </div>
    </Section>
  );
}
