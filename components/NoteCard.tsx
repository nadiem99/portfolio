import Link from "next/link";

interface NoteCardProps {
  title: string;
  excerpt: string;
  href?: string;
}

export default function NoteCard({
  title,
  excerpt,
  href,
}: NoteCardProps) {
  const content = (
    <article className="py-6 md:py-8 border-b border-foreground/10 last:border-b-0 
      transition-all duration-300 hover:translate-x-2 cursor-pointer group">
      <h2 className="text-xl md:text-3xl font-serif mb-2 md:mb-3 transition-colors duration-300 
        group-hover:text-accent">
        {title}
      </h2>
      <p className="text-[13px] md:text-[15px] leading-[1.7] text-muted font-mono">
        {excerpt}
      </p>
    </article>
  );

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }

    return <Link href={href}>{content}</Link>;
  }

  return content;
}
