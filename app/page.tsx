import Section from "@/components/Section";
import TimelineCard from "@/components/TimelineCard";
import ShowcaseCard from "@/components/ShowcaseCard";
import { education, experiences, sideProjects, skills } from "@/content/site";

export default function Home() {
  return (
    <Section>
      <div id="intro" className="mb-12 md:mb-16">
        <p className="max-w-3xl font-mono text-[14px] leading-[1.8] md:text-[15px]">
          I am an AI-native generalist building innovative solutions to challenging problems
          at the intersection of business and technology. Previously scaled an enterprise
          genAI platform to 7K+ employees globally. Top 1% Fantasy Premier League.
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

      <div id="projects" className="border-t border-foreground/10 pt-10 md:pt-12">
        <h2 className="mb-8 font-serif text-2xl md:text-3xl">Proof of Work</h2>

        <div className="mb-12 md:mb-16">
          <h3 className="mb-5 font-mono text-[12px] uppercase tracking-widest text-muted">
            Side Projects
          </h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {sideProjects.map((project) => (
              <ShowcaseCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-mono text-[12px] uppercase tracking-widest text-muted">
            AI Workflows &amp; Skills
          </h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {skills.map((skill) => (
              <ShowcaseCard key={skill.title} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
