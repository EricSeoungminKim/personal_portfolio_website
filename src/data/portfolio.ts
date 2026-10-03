export type Project = {
  number: string;
  slug: string;
  title: string;
  eyebrow: string;
  period: string;
  summary: string;
  details: string[];
  stack: string[];
  github: string;
  live?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "quant",
    title: "Quant Trading Platform",
    eyebrow: "Systems engineering / trading infrastructure",
    period: "2026 — Present",
    summary:
      "A 24/7 paper-trading platform for Korean and US equities, built around reliable market data, risk controls, and replayable decisions.",
    details: [
      "Connected WebSocket and REST market adapters to a paper-trading engine with explicit risk controls.",
      "Separated data collection, strategy, execution, and reporting with import-graph tests.",
      "Added 7,000+ regression tests and one-minute-bar trade replay to inspect exits and cost assumptions.",
    ],
    stack: ["Python", "AWS EC2", "Redis", "MySQL"],
    github: "https://github.com/EricSeoungminKim/Quant_Trading",
    live: "https://quant-portfolio-eta.vercel.app/",
  },
  {
    number: "02",
    slug: "rift",
    title: "RIFT.GG",
    eyebrow: "Full-stack product / gaming data",
    period: "2026 — Present",
    summary:
      "League of Legends stats, live scouting, and AI match analysis across 11 regions, designed for a fast search-to-insight flow.",
    details: [
      "Built summoner search, live rank, and match-history experiences using Riot APIs.",
      "Introduced PostgreSQL caching with stale-while-revalidate and an hourly tier-list crawl.",
      "Added streaming match analysis and ten-player live scouting with usage limits.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Gemini"],
    github: "https://github.com/EricSeoungminKim/opgg_demo",
    live: "https://opgg-demo.vercel.app/",
  },
  {
    number: "03",
    slug: "ats",
    title: "What’s My ATS?",
    eyebrow: "Product engineering / career tools",
    period: "2025 — 2026",
    summary:
      "A resume analysis tool that turns a job description into a clear keyword-coverage score and focused revision advice.",
    details: [
      "Built a Next.js frontend and FastAPI backend to compare resumes with target job descriptions.",
      "Created a 0–100 coverage score and surfaced up to eight missing terms.",
      "Integrated Gemini feedback and stored resumes, job targets, and analyses through SQLAlchemy APIs.",
    ],
    stack: ["Next.js", "FastAPI", "SQLAlchemy", "Gemini"],
    github: "https://github.com/EricSeoungminKim/whats_my_ats",
    live: "https://whats-my-ats.vercel.app/",
  },
];

export const experience = [
  {
    role: "Software Engineering Intern",
    company: "Hanwha Life Insurance Co.",
    location: "Seoul, South Korea",
    period: "Jun — Aug 2026",
    description:
      "Built a Java gift-tax calculation kernel and Swift flows for the PLUS Pi iOS app. Reduced out-of-window calendar requests 81-fold.",
  },
  {
    role: "Staff Software Engineer",
    company: "Daily Bruin",
    location: "Los Angeles, CA",
    period: "Sep 2025 — Present",
    description:
      "Maintain Django APIs and data services for a publication serving 60K+ weekly users, with Docker, Kubernetes, and CI/CD workflows.",
  },
  {
    role: "Founder / CTO",
    company: "Hoopsterz Corp.",
    location: "Seoul, South Korea",
    period: "May — Dec 2023",
    description:
      "Founded a pickup basketball platform and shipped its MERN app on Vercel with AWS S3 assets.",
  },
];

export const email = "seoungmincs@gmail.com";
export const github = "https://github.com/EricSeoungminKim";
export const linkedin = "https://www.linkedin.com/in/seoungmin-kim-400597222/";
