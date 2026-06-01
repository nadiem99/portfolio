import Link from "next/link";
import Image from "next/image";
import ProjectTag from "./ProjectTag";

interface TimelineCardProps {
  title: string;
  company: string;
  description: string;
  date?: string;
  location?: string;
  href?: string;
  highlighted?: boolean;
  isLast?: boolean;
  tags?: string[];
  logo?: string;
  logoText?: string;
}

export default function TimelineCard({
  title,
  company,
  description,
  date,
  location,
  href,
  highlighted = false,
  isLast = false,
  tags = [],
  logo,
  logoText,
}: TimelineCardProps) {
  const content = (
    <article className="relative pl-0 group cursor-pointer">
      {/* Timeline line (extends from top to bottom of card) */}
      {!isLast && (
        <div className="absolute left-[5.5px] top-0 bottom-0 w-[1px] bg-foreground/15 transition-colors duration-300 group-hover:bg-gradient-to-b group-hover:from-accent/50 group-hover:to-foreground/20" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-[6px]">
        <div className="w-3 h-3 bg-foreground rounded-full relative z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(139,69,19,0.4)]" />
      </div>

      {/* Content */}
      <div className={`transition-all duration-300 ${
        highlighted 
          ? 'ml-8 md:ml-12 border-l-4 border-accent/40 pl-3 md:pl-5 pr-3 md:pr-5 py-3 md:py-4 pb-8 md:pb-10 mb-6 bg-accent/[0.02] group-hover:border-accent/70 group-hover:bg-accent/[0.04] group-hover:shadow-[4px_0_12px_rgba(139,69,19,0.08)]' 
          : 'ml-8 md:ml-11 pb-8 md:pb-10 group-hover:translate-x-1'
      }`}>
        <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
          {logo && (
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0 overflow-hidden">
              <Image
                src={logo}
                alt={company}
                fill
                className="object-contain"
              />
            </div>
          )}
          {!logo && logoText && (
            <div className="grid h-8 w-8 flex-shrink-0 place-items-center border border-foreground/10 bg-foreground/[0.03] font-mono text-[10px] font-semibold text-foreground/70 transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent md:h-10 md:w-10 md:text-[11px]">
              {logoText}
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 md:gap-4 mb-1">
              <h3 className="text-[15px] md:text-[16px] font-bold font-mono leading-snug group-hover:opacity-70 transition-opacity">
                {title}
              </h3>
              {date && (
                <time className="text-[11px] md:text-[13px] text-muted whitespace-nowrap font-mono transition-colors duration-300 group-hover:text-foreground flex-shrink-0">
                  {date}
                </time>
              )}
            </div>
            <p className="text-[12px] md:text-[13px] text-muted font-mono mb-1">{company}</p>
            {location && (
              <p className="text-[11px] md:text-[12px] text-muted/70 font-mono mb-2">{location}</p>
            )}
          </div>
        </div>
        <p className="text-[12px] md:text-[13px] text-muted leading-[1.6] font-mono transition-colors duration-300 group-hover:text-foreground/80">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tags.map((tag) => (
              <ProjectTag key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </article>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
