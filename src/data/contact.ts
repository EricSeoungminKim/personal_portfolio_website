export type ContactMethod = {
  label: string;
  href: string;
  description: string;
  cta: string;
};

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    href: "mailto:seoungmincs@gmail.com",
    description: "Drop me a note and I'll respond promptly.",
    cta: "Compose Email",
  },
  {
    label: "GitHub",
    href: "https://github.com/EricSeoungminKim",
    description: "Explore repositories, contributions, and open source work.",
    cta: "Visit Profile",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/seoungmin-kim-400597222/",
    description: "Connect for professional updates and collaborations.",
    cta: "Connect on LinkedIn",
  },
  {
    label: "Portfolio",
    href: "https://seoungminkimcs.netlify.app",
    description: "Browse a polished snapshot of my work and achievements.",
    cta: "Open Portfolio",
  },
];
