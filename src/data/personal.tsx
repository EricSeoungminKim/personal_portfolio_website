import { ReactNode } from "react";

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: ReactNode[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type CourseworkGroup = {
  category: string;
  courses: { code: string; title: string }[];
};

export type TimelineEntry = {
  year: string;
  badge: string;
  description: ReactNode;
};

export const heroIntroText =
  "Backend and DevOps-oriented Software Engineering undergraduate at UCLA. Skilled in building scalable APIs, distributed systems, and automation pipelines with modern DevOps practices.";

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "seoungmincs@gmail.com",
    href: "mailto:seoungmincs@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/seoungmin-kim-400597222",
    href: "https://www.linkedin.com/in/seoungmin-kim-400597222/",
  },
  {
    label: "GitHub",
    value: "github.com/EricSeoungminKim",
    href: "https://github.com/EricSeoungminKim",
  },
];

export const careerObjective =
  "Seeking Software Engineer or DevOps Engineer roles to apply cloud infrastructure, CI/CD, and containerization expertise in real-world production systems while delivering reliable developer experiences for cross-functional teams.";

export const experiences: Experience[] = [
  {
    company: "Daily Bruin",
    role: "Software Engineering Intern (Part-Time)",
    location: "Los Angeles, CA",
    period: "Sep 2025 - Present",
    bullets: [
      <>
        Maintained and scaled backend systems supporting{" "}
        <span className="font-semibold text-white">60K+ weekly users</span> at
        UCLA.
      </>,
      <>
        Deployed <span className="font-semibold text-white">Docker</span> and{" "}
        <span className="font-semibold text-white">Kubernetes</span> containers
        for automated deployment and recovery.
      </>,
      <>
        Built optimized{" "}
        <span className="font-semibold text-white">Django REST APIs</span> with{" "}
        <span className="font-semibold text-white">SQL</span> and{" "}
        <span className="font-semibold text-white">MongoDB</span> plus{" "}
        <span className="font-semibold text-white">CI/CD pipelines</span> for
        internal tools.
      </>,
    ],
  },
  {
    company: "Hoopsterz Corp.",
    role: "Lead Full Stack Developer / Project Manager (Full-Time)",
    location: "Seoul, South Korea",
    period: "May 2023 - Dec 2023",
    bullets: [
      <>
        Built a production web app with the{" "}
        <span className="font-semibold text-white">MERN</span> stack deployed on{" "}
        <span className="font-semibold text-white">Vercel</span> and{" "}
        <span className="font-semibold text-white">AWS S3</span>.
      </>,
      <>
        Improved API latency by{" "}
        <span className="font-semibold text-white">25 percent</span> and boosted
        engagement by{" "}
        <span className="font-semibold text-white">30 percent</span> through
        performance tuning.
      </>,
      <>
        Managed full-cycle development across architecture, deployment, and
        optimization with{" "}
        <span className="font-semibold text-white">
          cross-functional leadership
        </span>
        .
      </>,
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Cloud and DevOps",
    items: [
      "AWS (S3)",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Vercel",
      "CI/CD",
      "Linux",
    ],
  },
  {
    category: "Programming Languages",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C/C++",
      "Dart",
      "SQL",
      "Bash",
    ],
  },
  {
    category: "Frameworks and Libraries",
    items: [
      "FastAPI",
      "Django",
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "Express",
      "Flutter",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "Postman",
      "VS Code",
      "Google Cloud Console",
      "Agile Collaboration",
    ],
  },
];

export const skillCardGradients = [
  "bg-gradient-to-br from-[#5bc0be]/30 via-transparent to-[#6fffe9]/20",
  "bg-gradient-to-br from-[#3a506b]/35 via-transparent to-[#5bc0be]/25",
  "bg-gradient-to-br from-[#6fffe9]/30 via-transparent to-[#3a506b]/25",
  "bg-gradient-to-br from-[#5bc0be]/25 via-transparent to-[#1c2541]/20",
  "bg-gradient-to-br from-[#6fffe9]/25 via-transparent to-[#5bc0be]/20",
];

export const courseworkGroups: CourseworkGroup[] = [
  {
    category: "Algorithms & Software Engineering",
    courses: [
      { code: "COM SCI 180", title: "Algorithm and Complexity" },
      { code: "COM SCI 35L", title: "Software Construction" },
    ],
  },
  {
    category: "Systems & Hardware Foundations",
    courses: [
      { code: "COM SCI 33", title: "Computer Organization" },
      { code: "COM SCI M51A", title: "Logic Design of Digital Systems" },
      { code: "EC ENGR 102", title: "Systems and Signals" },
    ],
  },
  {
    category: "Data & Intelligence",
    courses: [
      { code: "EC ENGR M148", title: "Data Science" },
      { code: "EC ENGR 131A", title: "Probability and Statistics" },
    ],
  },
  {
    category: "Mathematical Foundations",
    courses: [{ code: "MATH 61", title: "Discrete Structures" }],
  },
];

export const whoAmIIntro: ReactNode[] = [
  <>
    Hello! I&apos;m{" "}
    <span className="font-semibold text-[#6fffe9]">Seoungmin Kim</span>, an
    international student at the University of California, Los Angeles (UCLA),
    majoring in{" "}
    <span className="font-semibold text-[#6fffe9]">Electrical Engineering</span>{" "}
    with a{" "}
    <span className="font-semibold text-[#6fffe9]">
      Tech Breadth in Computer Science
    </span>
    .
  </>,
  <>
    I&apos;m passionate about the intersection of software and hardware, and I
    love exploring new technologies through hackathons, side projects, and
    collaborative work.
  </>,
];

export const whoAmITimeline: TimelineEntry[] = [
  {
    year: "Jun 2021",
    badge: "GRAD",
    description: (
      <>
        Completed high school at{" "}
        <strong>Korea Christian International School (KCIS)</strong>.
      </>
    ),
  },
  {
    year: "Sep 2021",
    badge: "UCLA",
    description: (
      <>
        Began studies at <strong>UCLA</strong> in Electrical Engineering with a
        Computer Science breadth.
      </>
    ),
  },
  {
    year: "Dec 2023 - Sep 2025",
    badge: "ROKAF",
    description: (
      <>
        Served in the <strong>Republic of Korea Air Force</strong> (Civil
        Engineering Squadron) as part of national duty.
      </>
    ),
  },
  {
    year: "Sep 2025",
    badge: "REBOOT",
    description: (
      <>
        Returned to UCLA, reigniting hackathon, research, and product-building
        momentum.
      </>
    ),
  },
  {
    year: "Jun 2027",
    badge: "GRAD",
    description: (
      <>
        Expected to graduate from UCLA with a Bachelor of Science in Electrical
        Engineering.
      </>
    ),
  },
];

export const whoAmIHighlights: ReactNode[] = [
  <>
    I enjoy working end-to-end, from <strong>front-end interfaces</strong> to{" "}
    <strong>backend systems</strong> and even <strong>hardware design</strong>.
    My goal is to champion products that challenge me technically while
    encouraging collaborative growth.
  </>,
  <>
    I&apos;m always ready for new challenges, especially{" "}
    <strong>hackathons, startups, and research opportunities</strong>.
    Let&apos;s build something outstanding together.
  </>,
];
