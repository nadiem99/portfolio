export const site = {
  name: "Nadiem Ahmed",
  title: "Nadiem Ahmed | AI Operator",
  description:
    "AI-native operator working at the intersection of business, technology, product, strategy, and GTM.",
  url: "https://nadiemahmed.com",
  location: "Toronto, Canada",
  email: "mailto:nadiemahmed@gmail.com",
  linkedin: "https://www.linkedin.com/in/nadiemahmed/",
  github: "https://github.com/nadiem99",
  source: "https://github.com/nadiem99/portfolio",
  writing: "https://substack.com/@nadiem99",
};

export type Experience = {
  title: string;
  company: string;
  description: string;
  date: string;
  location?: string;
  highlighted?: boolean;
  tags?: string[];
  logoText?: string;
  logo?: string;
};

export const experiences: Experience[] = [
  {
    title: "Senior Consultant, Digital & AI Transformation",
    company: "Oliver Wyman",
    description:
      "Led development and rollout of an internal enterprise genAI platform that scaled to 7K+ employees. Ran a PMO across 80+ technology projects and supported M&A, market, and data-driven strategy work.",
    date: "2023 - 2025",
    location: "Montreal, Canada",
    highlighted: true,
    logoText: "OW",
    logo: "/logos/oliver-wyman.svg",
    tags: ["AI strategy", "Digital transformation", "Consulting"],
  },
  {
    title: "Strategy Analyst",
    company: "Accenture Strategy",
    description:
      "Built a consolidated global relocation policy for a rail solutions provider, standardizing the process worldwide and unlocking $3M in potential savings.",
    date: "Summer 2021",
    location: "Toronto, Canada",
    logoText: "AC",
    logo: "/logos/accenture.png",
    tags: ["Strategy", "Operations"],
  },
  {
    title: "Business Analyst",
    company: "Capital One",
    description:
      "Built a dashboard automating credit-bureau insights for the SVP, saving roughly 50 hours of manual work each month.",
    date: "Summer 2020",
    location: "Toronto, Canada",
    logoText: "C1",
    logo: "/logos/capital-one.png",
    tags: ["Analytics", "Dashboards"],
  },
  {
    title: "Programs Analyst",
    company: "Bombardier",
    description:
      "Streamlined the supplier invoice-approval process and reduced delays by 20%.",
    date: "Summer 2019",
    location: "Montreal, Canada",
    logoText: "BB",
    logo: "/logos/bombardier.png",
    tags: ["Process", "Operations"],
  },
];

export const education: Experience[] = [
  {
    title: "Master of Business Administration (MBA)",
    company: "Johnson Cornell Tech (Cornell University)",
    description:
      "STEM-designated MBA. External Affairs Chair and Emerging Markets Institute Fellow; focused on AI, technology, strategy, and emerging markets.",
    date: "2025 - 2026",
    location: "New York, NY",
    logoText: "CU",
    logo: "/logos/cornell.svg",
  },
  {
    title: "Bachelor of Engineering (B.Eng)",
    company: "McGill University",
    description:
      "Recipient of the SURE research scholarship, awarded to fewer than 100 engineering students for a funded summer research project.",
    date: "2018 - 2022",
    location: "Montreal, Canada",
    logoText: "MG",
    logo: "/logos/mcgill.svg",
  },
];

export type ShowcaseLink = { label: string; href: string };

export type ShowcaseMedia =
  | { kind: "loom"; embedId: string; poster: string }
  | { kind: "video"; src: string; poster: string }
  | { kind: "image"; src: string; href: string };

export type Showcase = {
  title: string;
  blurb: string;
  tags: string[];
  media?: ShowcaseMedia;
  links: ShowcaseLink[];
};

export const sideProjects: Showcase[] = [
  {
    title: "FPL Edge",
    blurb:
      "A decision-support tool for Fantasy Premier League. It turns squad and fixture data into a weekly command center — transfer plans, expected-value estimates, and risk-rated recommendations. (Demo: the live tool is paused now that the season is over.)",
    tags: ["Decision tool", "Sports analytics"],
    media: {
      kind: "loom",
      embedId: "698b677f2f7f431d9143acae587b135e",
      poster: "/projects/fpl-edge-poster.jpg",
    },
    links: [
      {
        label: "Watch demo",
        href: "https://www.loom.com/share/698b677f2f7f431d9143acae587b135e",
      },
    ],
  },
  {
    title: "Career EV Analyzer",
    blurb:
      "An interactive dashboard that estimates the expected value of different generalist career paths — weighting comp by the odds you stay, adding fallback value, and discounting to today's dollars. Every assumption is editable.",
    tags: ["Dashboard", "Decision systems"],
    media: {
      kind: "image",
      src: "/projects/career-ev-analyzer.png",
      href: "https://nadiem99.github.io/career-ev-analyzer",
    },
    links: [
      { label: "Open dashboard", href: "https://nadiem99.github.io/career-ev-analyzer" },
    ],
  },
  {
    title: "Music Twin",
    blurb:
      "A simple tool that reads your Spotify listening history and surfaces the people whose music taste is most compatible with yours — matched across artists, genres, and audio features. (Demo: gated by Spotify API limits.)",
    tags: ["Spotify API", "Music"],
    media: {
      kind: "video",
      src: "/projects/music-twin-demo.mp4",
      poster: "/projects/music-twin-poster.jpg",
    },
    links: [],
  },
];

export const skills: Showcase[] = [
  {
    title: "Claude Writing Skills",
    blurb:
      "A library of Claude Code skills that run an entire editorial pipeline — interview, research, outline, draft, coach, edit, source-check, top-edit, and repurpose — built to write my Substack in my own voice without auto-generating it.",
    tags: ["Claude Code", "Skills", "Writing"],
    links: [
      { label: "View on GitHub", href: "https://github.com/nadiem99/claude-writing-skills" },
    ],
  },
];

export type CaseStudy = {
  title: string;
  eyebrow: string;
  summary: string;
  context: string;
  problem: string;
  actions: string[];
  outcome: string;
  artifacts: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Scaling enterprise genAI adoption to 7K+ consultants",
    eyebrow: "AI platform rollout",
    summary:
      "Converted an ambiguous enterprise genAI opportunity into a repeatable adoption engine across thousands of consultants.",
    context:
      "A large consulting environment needed genAI to become useful in daily work, not just impressive in demos.",
    problem:
      "The hard part was not access to models. It was trust, workflows, enablement, governance, and repeatable behavior change at scale.",
    actions: [
      "Translated user needs and leadership priorities into practical rollout motions.",
      "Built feedback loops between consultants, enablement teams, and platform stakeholders.",
      "Helped shape adoption systems that made genAI easier to discover, understand, and use responsibly.",
    ],
    outcome:
      "The platform scaled to more than 7K consultants globally and became a stronger foundation for AI-native ways of working.",
    artifacts: ["Rollout plan", "Enablement loops", "Usage/adoption narrative"],
  },
  {
    title: "AI-native research and strategy workflows",
    eyebrow: "Operator system",
    summary:
      "A practical workflow stack for moving from fuzzy market questions to structured memos, options, and decisions.",
    context:
      "Fast-moving AI markets reward people who can learn quickly without confusing more information for more judgment.",
    problem:
      "Research often gets stuck as scattered notes, tabs, and takes. The value is in synthesis and decision framing.",
    actions: [
      "Use AI tools to compress discovery, extract patterns, and pressure-test assumptions.",
      "Convert research into memos, market maps, GTM hypotheses, and next-step recommendations.",
      "Keep human judgment explicit: what is known, what is assumed, and what would change the decision.",
    ],
    outcome:
      "A reusable operating style for strategy, PM, and GTM work in ambiguous AI categories.",
    artifacts: ["Market map", "Decision memo", "Customer-discovery synthesis"],
  },
  {
    title: "Writing as strategic positioning",
    eyebrow: "Notes and essays",
    summary:
      "A public thinking practice around how people, companies, and countries can position themselves for long-term success.",
    context:
      "Writing is a way to clarify judgment before a role, market, or product category fully settles.",
    problem:
      "Most career sites show credentials. Fewer show how someone thinks through change, incentives, and advantage.",
    actions: [
      "Frame notes around positioning, adaptation, technology, and long-term success.",
      "Use writing to make taste and strategy visible.",
      "Connect personal curiosity to the type of business problems AI startups face.",
    ],
    outcome:
      "A sharper public surface for roles that depend on judgment, communication, and structured ambiguity.",
    artifacts: ["Essays", "Reading notes", "Strategic prompts"],
  },
];

export type Note = {
  title: string;
  date: string;
  excerpt: string;
  href: string;
  readTime: string;
};

export const notes: Note[] = [
  {
    title: "the future belongs to the global ai-native generalist",
    date: "AI",
    excerpt:
      "A thesis on the kind of generalist who can compound across borders, tools, markets, and disciplines.",
    href: "https://nadiem99.substack.com/p/the-future-belongs-to-the-global",
    readTime: "Substack",
  },
  {
    title: "will ai kill consulting",
    date: "AI",
    excerpt:
      "A look at what AI changes, what it commoditizes, and what consulting still has to prove.",
    href: "https://nadiem99.substack.com/p/will-ai-kill-consulting-or-usher",
    readTime: "Substack",
  },
  {
    title: "ethiopia's potential future as a physical ai hub",
    date: "Strategy",
    excerpt:
      "On energy, geography, infrastructure, and what it would take to compete in the physical layer of AI.",
    href: "https://nadiem99.substack.com/p/ethiopias-potential-future-as-a-physical",
    readTime: "Substack",
  },
  {
    title: "ethiopia has the playbook",
    date: "Strategy",
    excerpt:
      "A note on national development, execution capacity, and the patterns countries can adapt from prior success stories.",
    href: "https://nadiem99.substack.com/p/ethiopia-has-the-playbook-will-it",
    readTime: "Substack",
  },
  {
    title: "the quiet arrival",
    date: "Personal",
    excerpt:
      "A more personal reflection on arriving somewhere slowly, then realizing the change already happened.",
    href: "https://nadiem99.substack.com/p/the-quiet-arrival",
    readTime: "Substack",
  },
  {
    title: "weak ties, luck surface area...",
    date: "Personal",
    excerpt:
      "On relationships, serendipity, and why the edges of your network often carry surprising opportunity.",
    href: "https://nadiem99.substack.com/p/weak-ties-luck-surface-area-and-why",
    readTime: "Substack",
  },
  {
    title: "faith as an antidote to anxiety",
    date: "Personal",
    excerpt:
      "A reflection on faith, uncertainty, and what steadies you when optimization stops being enough.",
    href: "https://nadiem99.substack.com/p/faith-as-an-antidote-to-anxiey",
    readTime: "Substack",
  },
];

export type Essay = {
  title: string;
  author: string;
  description: string;
  href: string;
};

export const essays: Essay[] = [
  {
    title: "How to Do Great Work",
    author: "Paul Graham",
    description:
      "A field guide to choosing the right problems, following curiosity, and compounding effort into work that matters.",
    href: "https://www.paulgraham.com/greatwork.html?viewfullsite=1",
  },
  {
    title: "On Bullshit",
    author: "Harry Frankfurt",
    description:
      "A short philosophical classic on the difference between lying and bullshit, and why indifference to truth is its own danger.",
    href: "https://www.math.mcgill.ca/rags/JAC/124/bs.html",
  },
  {
    title: "Machines of Loving Grace",
    author: "Dario Amodei",
    description:
      "Anthropic's CEO on how powerful AI could radically improve health, the economy, and human freedom if we get it right.",
    href: "https://darioamodei.com/essay/machines-of-loving-grace#basic-assumptions-and-framework",
  },
];

export type Read = {
  title: string;
  author: string;
  color: string;
  description: string;
  amazonUrl: string;
  coverUrl: string;
};

export type ReadShelf = {
  title: string;
  books: Read[];
};

export const readingShelves: ReadShelf[] = [
  {
    title: "Currently Reading",
    books: [
      {
        title: "How Africa Works",
        author: "Joe Studwell",
        color: "#8B4513",
        description:
          "Studwell's follow-up to How Asia Works: success and failure on the world's last developmental frontier, and what it takes for African economies to grow.",
        amazonUrl: "https://www.amazon.com/s?k=How+Africa+Works+Joe+Studwell",
        coverUrl: "/covers/how-africa-works.jpg",
      },
      {
        title: "The Secret of Secrets",
        author: "Dan Brown",
        color: "#2F4F4F",
        description:
          "A mystery that weaves together ancient secrets and modern-day intrigue in Dan Brown's signature style.",
        amazonUrl: "https://www.amazon.com/s?k=The+Secret+of+Secrets+Dan+Brown",
        coverUrl: "/covers/the-secret-of-secrets.jpg",
      },
      {
        title: "Destiny Disrupted",
        author: "Tamim Ansary",
        color: "#800020",
        description:
          "World history told from an Islamic perspective, offering an alternative narrative of human civilization.",
        amazonUrl: "https://www.amazon.com/s?k=Destiny+Disrupted+Tamim+Ansary",
        coverUrl: "/covers/destiny-disrupted.jpg",
      },
    ],
  },
  {
    title: "Favorite Books",
    books: [
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        color: "#DAA520",
        description:
          "A fable about following your dreams and listening to your heart.",
        amazonUrl: "https://www.amazon.com/s?k=The+Alchemist+Paulo+Coelho",
        coverUrl: "/covers/the-alchemist.jpg",
      },
      {
        title: "Dune",
        author: "Frank Herbert",
        color: "#C2B280",
        description:
          "An epic tale of politics, religion, ecology, and power on a desert planet.",
        amazonUrl: "https://www.amazon.com/s?k=Dune+Frank+Herbert",
        coverUrl: "/covers/dune.jpg",
      },
      {
        title: "Robert Langdon Series",
        author: "Dan Brown",
        color: "#1C1C1C",
        description:
          "Thrilling adventures featuring symbologist Robert Langdon.",
        amazonUrl: "https://www.amazon.com/s?k=Robert+Langdon+Series+Dan+Brown",
        coverUrl: "/covers/robert-langdon-series.jpg",
      },
      {
        title: "Range",
        author: "David Epstein",
        color: "#4169E1",
        description:
          "Why generalists triumph in a specialized world.",
        amazonUrl: "https://www.amazon.com/s?k=Range+David+Epstein",
        coverUrl: "/covers/range.jpg",
      },
      {
        title: "The Courage to be Disliked",
        author: "Kishimi & Koga",
        color: "#FF6B6B",
        description:
          "A dialogue on Adlerian psychology and living freely.",
        amazonUrl: "https://www.amazon.com/s?k=The+Courage+to+be+Disliked",
        coverUrl: "/covers/the-courage-to-be-disliked.jpg",
      },
      {
        title: "Principles",
        author: "Ray Dalio",
        color: "#DC143C",
        description:
          "A blueprint for decision-making and personal growth.",
        amazonUrl: "https://www.amazon.com/s?k=Principles+Ray+Dalio",
        coverUrl: "/covers/principles.jpg",
      },
      {
        title: "Decoded",
        author: "Jay-Z",
        color: "#1A1A1A",
        description:
          "A memoir exploring lyrics, life, hip-hop, creativity, and success.",
        amazonUrl: "https://www.amazon.com/s?k=Decoded+Jay-Z",
        coverUrl: "/covers/decoded.jpg",
      },
      {
        title: "Shoe Dog",
        author: "Phil Knight",
        color: "#FF4500",
        description:
          "The memoir of Nike's founder, full of risk, obsession, and company building.",
        amazonUrl: "https://www.amazon.com/s?k=Shoe+Dog+Phil+Knight",
        coverUrl: "/covers/shoe-dog.jpg",
      },
      {
        title: "The Black Swan",
        author: "Nassim Taleb",
        color: "#000000",
        description:
          "On uncertainty, randomness, and the impact of highly improbable events.",
        amazonUrl: "https://www.amazon.com/s?k=The+Black+Swan+Nassim+Taleb",
        coverUrl: "/covers/the-black-swan.jpg",
      },
    ],
  },
  {
    title: "Want to Read",
    books: [
      {
        title: "Ghosts of Hiroshima",
        author: "Charles Pellegrino",
        color: "#4A4A4A",
        description:
          "An account of the atomic bombing and its aftermath through survivor stories.",
        amazonUrl: "https://www.amazon.com/s?k=Ghosts+of+Hiroshima",
        coverUrl: "/covers/ghosts-of-hiroshima.jpg",
      },
      {
        title: "The Creative Act",
        author: "Rick Rubin",
        color: "#F5F5DC",
        description:
          "A meditation on creativity and the artist's way of being.",
        amazonUrl: "https://www.amazon.com/s?k=The+Creative+Act+Rick+Rubin",
        coverUrl: "/covers/the-creative-act.jpg",
      },
      {
        title: "Chip War",
        author: "Chris Miller",
        color: "#2E5090",
        description:
          "How semiconductors shape global power and competition.",
        amazonUrl: "https://www.amazon.com/s?k=Chip+War+Chris+Miller",
        coverUrl: "/covers/chip-war.jpg",
      },
      {
        title: "The Quiet Coup",
        author: "Mehrsa Baradaran",
        color: "#6B4423",
        description:
          "How corporate power has reshaped American democracy.",
        amazonUrl: "https://www.amazon.com/s?k=The+Quiet+Coup+Mehrsa+Baradaran",
        coverUrl: "/covers/the-quiet-coup.jpg",
      },
      {
        title: "Thinking in Systems",
        author: "Donella Meadows",
        color: "#228B22",
        description:
          "A primer on systems thinking and complex behavior.",
        amazonUrl: "https://www.amazon.com/s?k=Thinking+in+Systems+Donella+Meadows",
        coverUrl: "/covers/thinking-in-systems.jpg",
      },
      {
        title: "Made in America",
        author: "Sam Walton",
        color: "#1E90FF",
        description:
          "The story of Walmart's founder and the building of a retail giant.",
        amazonUrl: "https://www.amazon.com/s?k=Sam+Walton+Made+in+America",
        coverUrl: "/covers/made-in-america.jpg",
      },
      {
        title: "The Hitchhiker's Guide",
        author: "Douglas Adams",
        color: "#32CD32",
        description:
          "The sci-fi comedy classic about life, the universe, and everything.",
        amazonUrl: "https://www.amazon.com/s?k=Hitchhiker%27s+Guide+to+the+Galaxy",
        coverUrl: "/covers/the-hitchhiker-s-guide.jpg",
      },
      {
        title: "Norwegian Wood",
        author: "Haruki Murakami",
        color: "#556B2F",
        description:
          "A nostalgic story about love, loss, and memory in 1960s Tokyo.",
        amazonUrl: "https://www.amazon.com/s?k=Norwegian+Wood+Murakami",
        coverUrl: "/covers/norwegian-wood.jpg",
      },
      {
        title: "Yield",
        author: "Ari Paparo",
        color: "#708090",
        description:
          "Insights from advertising technology and the digital media ecosystem.",
        amazonUrl: "https://www.amazon.com/s?k=Yield+Ari+Paparo",
        coverUrl: "/covers/yield.jpg",
      },
      {
        title: "The Thinking Game",
        author: "Steven Witt",
        color: "#8B4513",
        description:
          "An exploration of how we think, reason, and make decisions.",
        amazonUrl: "https://www.amazon.com/s?k=The+Thinking+Game+Steven+Witt",
        coverUrl: "/covers/the-thinking-game.jpg",
      },
      {
        title: "How Countries Go Broke",
        author: "Ray Dalio",
        color: "#B22222",
        description:
          "An analysis of economic cycles, debt crises, and national financial collapse.",
        amazonUrl: "https://www.amazon.com/s?k=How+Countries+Go+Broke+Ray+Dalio",
        coverUrl: "/covers/how-countries-go-broke.jpg",
      },
    ],
  },
];
