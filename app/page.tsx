import Section from "@/components/Section";
import TimelineCard from "@/components/TimelineCard";
import { education, experiences } from "@/content/site";

export default function Home() {
  return (
    <Section>
      <div id="intro" className="mb-12 md:mb-16">
        <p className="max-w-3xl font-mono text-[14px] leading-[1.8] md:text-[15px]">
          I am an AI-native generalist building innovative solutions to challenging problems
          at the intersection of business and technology. Previously scaled an enterprise
          genAI platform to 7K+ consultants globally. Top 1% Fantasy Premier League.
        </p>
      </div>

      <div className="mb-14 md:mb-16">
        <h2 className="mb-8 font-serif text-2xl md:text-3xl">Experience</h2>
        {experiences.map((experience, index) => (
          <TimelineCard
            key={`${experience.title}-${experience.company}`}
            title={experience.title}
            company={experience.company}
            description={experience.description}
            date={experience.date}
            location={experience.location}
            highlighted={experience.highlighted}
            tags={experience.tags}
            logo={experience.logo}
            logoText={experience.logoText}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>

      <div className="mb-16 md:mb-20">
        <h2 className="mb-8 font-serif text-2xl md:text-3xl">Education</h2>
        {education.map((item, index) => (
          <TimelineCard
            key={`${item.title}-${item.company}`}
            title={item.title}
            company={item.company}
            description={item.description}
            date={item.date}
            location={item.location}
            tags={item.tags}
            logo={item.logo}
            logoText={item.logoText}
            isLast={index === education.length - 1}
          />
        ))}
      </div>

      <div id="projects" className="border-t border-foreground/10 pt-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mb-2 font-serif text-xl md:text-3xl">Proof in progress</h2>
            <p className="font-mono text-[12px] text-muted md:text-[13px]">
              Coming soon.
            </p>
          </div>
          <span className="w-fit border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
            Coming soon
          </span>
        </div>
      </div>
    </Section>
  );
}
