"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[88vh] md:h-[92vh] flex items-center overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm tracking-widest text-[--color-muted] uppercase"
          >
            Digital Marketing
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-3 text-5xl md:text-7xl font-bold tracking-tight"
          >
            Lashata Shakya
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-[--color-muted]"
          >
            I craft impactful strategies that connect brands with the right
            audience.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-6 flex gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[--color-border]"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
