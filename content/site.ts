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
    title: "Consultant, Digital & AI Transformation",
    company: "Oliver Wyman",
    description:
      "Helped clients evaluate and develop digital and AI transformation strategies; scaled an enterprise genAI platform to 7K+ consultants globally.",
    date: "2022 - 2025",
    location: "Toronto / New York",
    highlighted: true,
    logoText: "OW",
    logo: "https://logo.clearbit.com/oliverwyman.com",
    tags: ["AI strategy", "Digital transformation", "Consulting"],
  },
  {
    title: "External Affairs Chair",
    company: "Cornell Tech",
    description:
      "Organized an agentic AI hackathon with 150+ participants and helped bring together student builders, operators, partners, and sponsors.",
    date: "2025 - 2026",
    location: "New York, NY",
    logoText: "CT",
    logo: "https://logo.clearbit.com/tech.cornell.edu",
    tags: ["AI", "Partnerships", "Events"],
  },
  {
    title: "Writer",
    company: "Long-term positioning in a changing world",
    description:
      "Writes about how people, companies, and countries can position themselves for durable advantage as technology, markets, and institutions shift.",
    date: "Ongoing",
    logoText: "WR",
    tags: ["Writing", "Strategy", "Systems"],
  },
];

export const education: Experience[] = [
  {
    title: "MBA Candidate",
    company: "Cornell Tech / Cornell Johnson",
    description:
      "Cornell Tech MBA '26. Cañizares Center for Emerging Markets fellow; focused on AI, technology, strategy, and emerging markets.",
    date: "2025 - 2026",
    location: "New York, NY",
    logoText: "CU",
    logo: "https://logo.clearbit.com/cornell.edu",
  },
  {
    title: "Commerce / Management",
    company: "University of Toronto - Rotman School of Management",
    description:
      "Bregman Scholar and Andrew Alexander Kinghorn Scholarship recipient; active across consulting, finance, engineering, and sports business student groups.",
    date: "2020 - 2022",
    location: "Toronto, Canada",
    logoText: "UT",
    logo: "https://logo.clearbit.com/utoronto.ca",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  techStack: string[];
  href?: string;
  githubUrl?: string;
  highlighted?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI operator toolkit",
    description:
      "A growing set of AI-assisted workflows for research synthesis, memo drafting, market mapping, and decision support. Notes and artifacts coming soon.",
    tags: ["AI", "Strategy", "Operations"],
    techStack: ["Claude", "ChatGPT", "Perplexity", "Notion"],
    highlighted: true,
  },
  {
    title: "Fantasy Premier League edge",
    description:
      "Competitive decision system for a global game with millions of players. Currently Top 1%, using pattern recognition, constraints, and calculated risk.",
    tags: ["Decision systems", "Sports analytics"],
    techStack: ["FPL", "Data", "Portfolio thinking"],
    href: "https://fantasy.premierleague.com/entry/1247497/history",
  },
  {
    title: "Personal gallery archive",
    description:
      "Earlier portfolio experiment built as a virtual gallery with rooms for work, ventures, reading, writing, photography, and leisure.",
    tags: ["Portfolio", "Storytelling"],
    techStack: ["React", "TypeScript", "Tailwind", "Supabase"],
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

const cover = (title: string) =>
  `https://covers.openlibrary.org/b/title/${encodeURIComponent(title)}-L.jpg`;

export const readingShelves: ReadShelf[] = [
  {
    title: "Currently Reading",
    books: [
      {
        title: "How Asia Works",
        author: "Joe Studwell",
        color: "#8B4513",
        description:
          "How Japan, South Korea, Taiwan, and China achieved rapid economic growth through strategic industrial policies.",
        amazonUrl: "https://www.amazon.com/s?k=How+Asia+Works+Joe+Studwell",
        coverUrl: cover("How Asia Works"),
      },
      {
        title: "The Secret of Secrets",
        author: "Dan Brown",
        color: "#2F4F4F",
        description:
          "A mystery that weaves together ancient secrets and modern-day intrigue in Dan Brown's signature style.",
        amazonUrl: "https://www.amazon.com/s?k=The+Secret+of+Secrets+Dan+Brown",
        coverUrl: cover("The Secret of Secrets Dan Brown"),
      },
      {
        title: "Destiny Disrupted",
        author: "Tamim Ansary",
        color: "#800020",
        description:
          "World history told from an Islamic perspective, offering an alternative narrative of human civilization.",
        amazonUrl: "https://www.amazon.com/s?k=Destiny+Disrupted+Tamim+Ansary",
        coverUrl: cover("Destiny Disrupted"),
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
        coverUrl: cover("The Alchemist Paulo Coelho"),
      },
      {
        title: "Dune",
        author: "Frank Herbert",
        color: "#C2B280",
        description:
          "An epic tale of politics, religion, ecology, and power on a desert planet.",
        amazonUrl: "https://www.amazon.com/s?k=Dune+Frank+Herbert",
        coverUrl: cover("Dune Frank Herbert"),
      },
      {
        title: "Robert Langdon Series",
        author: "Dan Brown",
        color: "#1C1C1C",
        description:
          "Thrilling adventures featuring symbologist Robert Langdon.",
        amazonUrl: "https://www.amazon.com/s?k=Robert+Langdon+Series+Dan+Brown",
        coverUrl: cover("The Da Vinci Code Dan Brown"),
      },
      {
        title: "Range",
        author: "David Epstein",
        color: "#4169E1",
        description:
          "Why generalists triumph in a specialized world.",
        amazonUrl: "https://www.amazon.com/s?k=Range+David+Epstein",
        coverUrl: cover("Range David Epstein"),
      },
      {
        title: "The Courage to be Disliked",
        author: "Kishimi & Koga",
        color: "#FF6B6B",
        description:
          "A dialogue on Adlerian psychology and living freely.",
        amazonUrl: "https://www.amazon.com/s?k=The+Courage+to+be+Disliked",
        coverUrl: cover("The Courage to be Disliked"),
      },
      {
        title: "Principles",
        author: "Ray Dalio",
        color: "#DC143C",
        description:
          "A blueprint for decision-making and personal growth.",
        amazonUrl: "https://www.amazon.com/s?k=Principles+Ray+Dalio",
        coverUrl: cover("Principles Ray Dalio"),
      },
      {
        title: "Decoded",
        author: "Jay-Z",
        color: "#1A1A1A",
        description:
          "A memoir exploring lyrics, life, hip-hop, creativity, and success.",
        amazonUrl: "https://www.amazon.com/s?k=Decoded+Jay-Z",
        coverUrl: cover("Decoded Jay-Z"),
      },
      {
        title: "Shoe Dog",
        author: "Phil Knight",
        color: "#FF4500",
        description:
          "The memoir of Nike's founder, full of risk, obsession, and company building.",
        amazonUrl: "https://www.amazon.com/s?k=Shoe+Dog+Phil+Knight",
        coverUrl: cover("Shoe Dog Phil Knight"),
      },
      {
        title: "The Black Swan",
        author: "Nassim Taleb",
        color: "#000000",
        description:
          "On uncertainty, randomness, and the impact of highly improbable events.",
        amazonUrl: "https://www.amazon.com/s?k=The+Black+Swan+Nassim+Taleb",
        coverUrl: cover("The Black Swan Nassim Taleb"),
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
        coverUrl: cover("Ghosts of Hiroshima Charles Pellegrino"),
      },
      {
        title: "The Creative Act",
        author: "Rick Rubin",
        color: "#F5F5DC",
        description:
          "A meditation on creativity and the artist's way of being.",
        amazonUrl: "https://www.amazon.com/s?k=The+Creative+Act+Rick+Rubin",
        coverUrl: cover("The Creative Act Rick Rubin"),
      },
      {
        title: "Chip War",
        author: "Chris Miller",
        color: "#2E5090",
        description:
          "How semiconductors shape global power and competition.",
        amazonUrl: "https://www.amazon.com/s?k=Chip+War+Chris+Miller",
        coverUrl: cover("Chip War Chris Miller"),
      },
      {
        title: "The Quiet Coup",
        author: "Mehrsa Baradaran",
        color: "#6B4423",
        description:
          "How corporate power has reshaped American democracy.",
        amazonUrl: "https://www.amazon.com/s?k=The+Quiet+Coup+Mehrsa+Baradaran",
        coverUrl: cover("The Quiet Coup Mehrsa Baradaran"),
      },
      {
        title: "Thinking in Systems",
        author: "Donella Meadows",
        color: "#228B22",
        description:
          "A primer on systems thinking and complex behavior.",
        amazonUrl: "https://www.amazon.com/s?k=Thinking+in+Systems+Donella+Meadows",
        coverUrl: cover("Thinking in Systems Donella Meadows"),
      },
      {
        title: "Made in America",
        author: "Sam Walton",
        color: "#1E90FF",
        description:
          "The story of Walmart's founder and the building of a retail giant.",
        amazonUrl: "https://www.amazon.com/s?k=Sam+Walton+Made+in+America",
        coverUrl: cover("Sam Walton Made in America"),
      },
      {
        title: "The Hitchhiker's Guide",
        author: "Douglas Adams",
        color: "#32CD32",
        description:
          "The sci-fi comedy classic about life, the universe, and everything.",
        amazonUrl: "https://www.amazon.com/s?k=Hitchhiker%27s+Guide+to+the+Galaxy",
        coverUrl: cover("The Hitchhiker's Guide to the Galaxy"),
      },
      {
        title: "Norwegian Wood",
        author: "Haruki Murakami",
        color: "#556B2F",
        description:
          "A nostalgic story about love, loss, and memory in 1960s Tokyo.",
        amazonUrl: "https://www.amazon.com/s?k=Norwegian+Wood+Murakami",
        coverUrl: cover("Norwegian Wood Haruki Murakami"),
      },
      {
        title: "Yield",
        author: "Ari Paparo",
        color: "#708090",
        description:
          "Insights from advertising technology and the digital media ecosystem.",
        amazonUrl: "https://www.amazon.com/s?k=Yield+Ari+Paparo",
        coverUrl: cover("Yield Ari Paparo"),
      },
      {
        title: "The Thinking Game",
        author: "Steven Witt",
        color: "#8B4513",
        description:
          "An exploration of how we think, reason, and make decisions.",
        amazonUrl: "https://www.amazon.com/s?k=The+Thinking+Game+Steven+Witt",
        coverUrl: cover("The Thinking Game Steven Witt"),
      },
      {
        title: "How Countries Go Broke",
        author: "Ray Dalio",
        color: "#B22222",
        description:
          "An analysis of economic cycles, debt crises, and national financial collapse.",
        amazonUrl: "https://www.amazon.com/s?k=How+Countries+Go+Broke+Ray+Dalio",
        coverUrl: cover("How Countries Go Broke Ray Dalio"),
      },
    ],
  },
];
