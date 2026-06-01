import { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  description: string | ReactNode;
  href?: string;
  highlighted?: boolean;
  tags?: string[];
  index?: number;
  techStack?: string[];
  githubUrl?: string;
  comingSoon?: boolean;
}

export default function ProjectCard({
  title,
  description,
  href,
  tags = [],
  index = 0,
  techStack = [],
  githubUrl,
  comingSoon = false,
}: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-foreground/10 bg-background p-4 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/[0.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:p-8">
      <div className="absolute right-0 top-0 h-16 w-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute right-0 top-0 h-px w-full bg-gradient-to-l from-accent to-transparent" />
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-accent to-transparent" />
      </div>

      <div className="mb-5 font-mono text-[11px] tracking-widest text-accent/50">
        {comingSoon ? "SOON" : String(index + 1).padStart(2, "0")}
      </div>

      <div className="mb-4">
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="flex-1 font-serif text-[19px] leading-tight transition-colors duration-300 group-hover:text-accent md:text-[24px]">
            {title}
          </h3>
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="font-mono text-[10px] uppercase tracking-wider text-muted">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <p className="mb-4 flex-1 font-mono text-[13px] leading-[1.7] text-muted md:text-[14px]">
        {description}
      </p>

      {techStack.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1.5 pt-3 md:gap-2 md:pt-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-foreground/5 px-2 py-1 font-mono text-[10px] text-foreground/70 transition-colors hover:bg-foreground/10 md:px-3 md:text-[11px]"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {(href || githubUrl) && (
        <div className="mt-4 flex items-center gap-4">
          {href && <ProjectLink href={href} label="Open" />}
          {githubUrl && <ProjectLink href={githubUrl} label="Github" />}
        </div>
      )}
    </article>
  );
}

function ProjectLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 font-mono text-[12px] text-foreground transition-colors hover:text-accent"
    >
      <span>{label}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}
