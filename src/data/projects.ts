export type Project = {
  title: string;
  date: string;
  position: string;
  status: "In Progress" | "Completed";
  description: string;
  highlights: string[];
  link: string;
  stack: string[];
  website?: string;
};

export const projects: Project[] = [
  {
    title: "What's My ATS",
    date: "Oct 2025 - Present",
    position: "Creator and Full-Stack Engineer",
    status: "In Progress",
    description:
      "Resume intelligence platform that scores applications with FastAPI-powered NLP and a React-based experience for candidates.",
    highlights: [
      "Developed full-stack AI workflows using FastAPI, spaCy NLP, Redis queues, and PostgreSQL.",
      "Implemented the client with Next.js 16 (App Router) and Tailwind CSS, integrating the Gemini API.",
      "Released a beta with 50+ users to guide the feature roadmap for 2026.",
    ],
    link: "https://github.com/EricSeoungminKim/whats-my-ats",
    website: "https://your-whats-my-ats-url.com",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "spaCy",
      "Redis",
      "PostgreSQL",
      "Gemini API",
    ],
  },
  {
    title: "Bruin Bites",
    date: "Sep 2025 - Present",
    position: "Backend and Mobile Engineer",
    status: "In Progress",
    description:
      "Campus-focused food discovery app helping UCLA students locate budget-friendly options in real time.",
    highlights: [
      "Integrating custom APIs, web scraping, and a pre-prompted Gemini API for curated recommendations.",
      "Combining Grok API and Google Maps data for location-aware menu insights.",
      "Delivering a MERN backend that returns fast, personalized restaurant search results.",
    ],
    link: "https://github.com/EricSeoungminKim/bruin-bites",
    website: "https://your-bruin-bites-url.com",
    stack: [
      "MongoDB",
      "Express",
      "React Native",
      "Node.js",
      "Gemini API",
      "Grok API",
      "Google Maps API",
    ],
  },
  {
    title: "NetChill - HackSC 2023 (1st Place, Global Connections Vertical)",
    date: "Feb 2023",
    position: "Flutter Engineer and Product Collaborator",
    status: "Completed",
    description:
      "Cross-platform social planning experience built at HackSC 2023 to connect global communities.",
    highlights: [
      "Built responsive Flutter (Dart) interfaces supported by Prisma-powered data models.",
      "Collaborated within an Agile team to deliver a functional MVP that placed 1st among 200+ competitors.",
      "Packaged learnings into post-hackathon documentation for future release planning.",
    ],
    link: "https://github.com/EricSeoungminKim/netchill",
    website: "https://your-netchill-demo.com",
    stack: ["Flutter", "Dart", "Prisma", "TypeScript", "REST APIs"],
  },
  {
    title: "Hang - LA Hacks 2023",
    date: "Apr 2023",
    position: "Full-Stack Engineer",
    status: "Completed",
    description:
      "Travel companion mobile app recommending meetup spots using live routing intelligence.",
    highlights: [
      "Delivered an end-to-end React Native experience backed by NestJS services.",
      "Integrated Google Maps Platform for dynamic, proximity-aware recommendations.",
      "Deployed a working prototype during LA Hacks 2023 to validate the product concept.",
    ],
    link: "https://github.com/EricSeoungminKim/hang-la-hacks",
    website: "https://your-hang-demo.com",
    stack: ["React Native", "NestJS", "TypeScript", "Google Maps API", "Node.js"],
  },
];
