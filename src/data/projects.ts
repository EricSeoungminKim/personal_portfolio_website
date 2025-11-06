export type Project = {
  title: string;
  date: string;
  position: string;
  status: string;
  description: string;
  highlights: string[];
  link: string;
  stack: string[];
  website?: string;
};

export const projects: Project[] = [
  {
    title: "AI Circuit Optimizer",
    date: "Nov 2025 - Present",
    position: "Creator and Full-Stack/AI Developer",
    status: "In Progress",
    description:
      "AI Circuit Optimizer is a hybrid C++ + Python system that simplifies and optimizes digital logic circuits using both symbolic logic and machine learning. It can analyze messy circuit diagrams, convert them into Boolean expressions, and automatically rebuild the most efficient version using only available components (e.g., NAND, NOR, MUX, or Decoder structures).",
    highlights: [
      "Planned to build a hybrid C++ and Python system that leverages symbolic logic and machine learning to optimize digital logic circuits.",
      "Designed a modular architecture to allow easy integration of new optimization algorithms and component libraries.",
    ],
    link: "https://github.com/EricSeoungminKim/ai-circuit-optimizer",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Canvas/SVG",
      "PyTorch",
      "FastAPI",
      "OpenCV",
      "C++",
    ],
  },
  {
    title: "What's My ATS",
    date: "Oct 2025 - Present",
    position: "Creator and Full-Stack Developer",
    status: "In Progress (Beta Released)",
    description:
      "Resume intelligence platform that scores applications with FastAPI-powered NLP and a React-based experience for candidates.",
    highlights: [
      "Developed full-stack AI workflows using FastAPI, spaCy NLP, Redis queues, and PostgreSQL.",
      "Implemented the client with Next.js 16 (App Router) and Tailwind CSS, integrating the Gemini API.",
      "Released a beta with 50+ users to guide the feature roadmap for 2026.",
    ],
    link: "https://github.com/EricSeoungminKim/whats_my_ats?tab=readme-ov-file",
    website: "https://whats-my-ats.vercel.app",
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
    title: "Oink",
    date: "Oct 2025 - Present",
    position: "Internal Tools Developer",
    status: "In Progress",
    description:
      "Oink is the new content management system (CMS) and website for the Daily Bruin, UCLA's student newspaper.",
    highlights: [
      "Developed full-stack Django application with mongoDB and SQL database to manage articles, users, and media assets.",
      "Dockerized services for local development and streamlined deployment workflows.",
      "Collaborated with a team of developers and editors to iteratively improve the platform based on user feedback.",
    ],
    link: "https://github.com/dailybruin/oink-new",
    stack: ["Django", "MongoDB", "SQL", "Docker", "Python", "JavaScript"],
  },
  {
    title: "Bruin Bites",
    date: "Sep 2025 - Present",
    position: "Full-Stack Developer",
    status: "In Progress",
    description:
      "Campus-focused food discovery app helping UCLA students locate budget-friendly options in real time.",
    highlights: [
      "Integrating custom APIs, web scraping, and a pre-prompted Gemini API for curated recommendations.",
      "Combining Grok API and Google Maps data for location-aware menu insights.",
      "Delivering a MERN backend that returns fast, personalized restaurant search results.",
    ],
    link: "https://github.com/Bruin-Bites/frontend",
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
    title: "Personal Portfolio Website",
    date: "In Progress",
    position: "",
    status: "Up to Date",
    description:
      "My personal portfolio website showcasing my projects, skills, and experience as a developer and student.",
    highlights: [
      "Built with Next.js 16 (App Router) and Tailwind Postcss for a modern, responsive design.",
      "Implemented interactive components and modals using React hooks and TypeScript.",
      "Deployed on Vercel with optimized performance and SEO best practices.",
    ],
    link: "https://github.com/EricSeoungminKim/personal_portfolio_website",
    website: "https://seoungmin-portfolio.vercel.app/",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    title: "NetChill - HackSC 2023 (1st Place, Global Connections Vertical)",
    date: "Feb 2023",
    position: "Frontend Developer",
    status: "Completed",
    description:
      "Cross-platform social planning experience built at HackSC 2023 to connect global communities.",
    highlights: [
      "Built responsive Flutter (Dart) interfaces supported by Prisma-powered data models.",
      "Collaborated within an Agile team to deliver a functional MVP that placed 1st among 200+ competitors.",
      "Packaged learnings into post-hackathon documentation for future release planning.",
    ],
    link: "https://github.com/terrytwk/hacksc23-netchill",
    website: "https://devpost.com/software/netchill",
    stack: ["Flutter", "Dart", "Prisma", "TypeScript", "REST APIs"],
  },
  {
    title: "Hang - LA Hacks 2023",
    date: "Apr 2023",
    position: "Full-Stack Developer",
    status: "Completed",
    description:
      "Travel companion mobile app recommending meetup spots using live routing intelligence.",
    highlights: [
      "Delivered an end-to-end React Native experience backed by NestJS services.",
      "Integrated Google Maps Platform for dynamic, proximity-aware recommendations.",
      "Deployed a working prototype during LA Hacks 2023 to validate the product concept.",
    ],
    link: "https://github.com/jlee0810/Hang",
    website: "https://devpost.com/software/hang-h8mecf",
    stack: [
      "React Native",
      "NestJS",
      "TypeScript",
      "Google Maps API",
      "Node.js",
    ],
  },
  {
    title: "Bamboo Forest",
    date: "Jan 2023 - March 2023",
    position: "Full-Stack Developer",
    status: "Completed",
    description:
      "The UCLA Bamboo Forest is named after the Korean tale, 'The King Has Donkey Ears' which tells the story of a royal crown maker who discovered the king's unusually large ears and blurted out the secret in a Bamboo Forest. Inspired by this tale, the UCLA Bamboo Forest aims to create a platform where UCLA students can share their thoughts and secrets with one another.",
    highlights: [
      "Our group plans to make a web application for UCLA students to post announcements, memes, or anything related to life at UCLA public or anonymously (much like piazza).",
      "Unlike other similar services such as Facebook group or Reddit that are open to public, our team aim to create a more private and secured platform only for UCLA students.",
    ],
    link: "https://github.com/Didier-Lucu/Bamboo-Forest?tab=readme-ov-file",
    stack: ["React", "Node.js", "Firebase"],
  },
];
