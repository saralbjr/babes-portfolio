"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function ProjectsInteractive() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-10% 0%" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((p, i) => (
          <motion.button
            key={p.title}
            variants={fadeInUp}
            onClick={() => setActive(i)}
            className="card p-5 text-left group will-change-transform"
            style={{ transformStyle: "preserve-3d" }}
            whileHover={{ y: -4 }}
          >
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-[--color-muted]">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded border border-[--color-border] text-xs text-[--color-muted]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 text-xs text-[--color-muted]">
              Click to see more
            </div>
          </motion.button>
        ))}
      </motion.div>

      {active !== null ? (
        <Modal onClose={() => setActive(null)}>
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            className="card p-6 max-w-2xl w-full"
          >
            <h3 className="text-xl font-semibold">{projects[active].title}</h3>
            <p className="mt-2 text-sm text-[--color-muted]">
              {projects[active].description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {projects[active].tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded border border-[--color-border] text-xs text-[--color-muted]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              {projects[active].github ? (
                <a
                  className="underline"
                  href={projects[active].github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              ) : null}
              {projects[active].demo ? (
                <a
                  className="underline"
                  href={projects[active].demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              ) : null}
            </div>
            <div className="mt-6 text-right">
              <button className="btn-primary" onClick={() => setActive(null)}>
                Close
              </button>
            </div>
          </motion.div>
        </Modal>
      ) : null}
    </div>
  );
}

function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />
      {children}
    </div>
  );
}
