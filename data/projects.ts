export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "This website. Built with Next.js App Router and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/yourname/portfolio",
    demo: "https://example.com",
  },
  {
    title: "Dashboard UI",
    description: "Responsive dashboard with charts and dark mode.",
    tech: ["React", "Framer Motion", "Tailwind"],
    github: "https://github.com/yourname/dashboard",
  },
];
