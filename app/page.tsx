"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Section } from "@/app/components/Section";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import AboutTimeline from "@/app/components/AboutTimeline";
import ProjectsInteractive from "@/app/components/ProjectsInteractive";
import ContactAnimated from "@/app/components/ContactAnimated";

// Using imported Navbar component

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Section id="about" title="About">
        <AboutTimeline />
      </Section>

      <Section id="projects" title="Projects">
        <ProjectsInteractive />
      </Section>

      <Section id="contact" title="Contact">
        <ContactAnimated />
        <Footer />
      </Section>
    </div>
  );
}

// moved projects list to data and card component
function Footer() {
  return (
    <footer className="mt-12 flex items-center gap-4 text-sm">
      <a
        className="inline-flex items-center gap-2 hover:underline"
        href="mailto:you@example.com"
      >
        <Mail size={16} /> Email
      </a>
      <a
        className="inline-flex items-center gap-2 hover:underline"
        href="https://github.com/yourname"
        target="_blank"
        rel="noreferrer"
      >
        <Github size={16} /> GitHub
      </a>
      <a
        className="inline-flex items-center gap-2 hover:underline"
        href="https://linkedin.com/in/yourname"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin size={16} /> LinkedIn
      </a>
      <a
        className="inline-flex items-center gap-2 hover:underline"
        href="https://twitter.com/yourname"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter size={16} /> Twitter
      </a>
      <span className="ml-auto text-[--color-muted]">
        © {new Date().getFullYear()} Lashata Shakya
      </span>
    </footer>
  );
}
