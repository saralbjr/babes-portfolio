"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const items = [
  {
    title: "Bachelor of Information Management",
    time: "2018 – 2022",
    desc: "Studied business, analytics, and information systems.",
  },
  {
    title: "Digital Marketing Specialist",
    time: "2022 – Present",
    desc: "Driving growth through content, SEO, and paid media.",
  },
];

export default function AboutTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-[--color-border] md:left-1/2" />
      <motion.ul
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-8"
      >
        {items.map((it, idx) => (
          <motion.li
            key={it.title}
            variants={fadeInUp}
            className={`card p-6 md:w-1/2 ${idx % 2 ? "md:ml-auto" : ""}`}
          >
            <p className="text-xs uppercase tracking-widest text-[--color-muted]">
              {it.time}
            </p>
            <h3 className="mt-1 font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-[--color-muted]">{it.desc}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
