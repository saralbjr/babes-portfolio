"use client";

import { Github } from "lucide-react";
import { motion } from "framer-motion";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="card p-6"
    >
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="mt-2 text-sm text-[--color-muted]">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 rounded border border-[--color-border] text-xs text-[--color-muted]"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3 text-sm">
        {project.github ? (
          <a
            className="inline-flex items-center gap-2 underline"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> Code
          </a>
        ) : null}
        {project.demo ? (
          <a
            className="inline-flex items-center gap-2 underline"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            <span>Live</span>
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
