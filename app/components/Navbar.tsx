"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? "");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0% -55% 0%", threshold: [0, 0.5, 1] }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds]);
  return active;
}

export default function Navbar() {
  const active = useActiveSection(sections.map((s) => s.id));
  const { resolvedTheme, setTheme } = useTheme();
  const [isRippling, setIsRippling] = useState(false);
  const toggleTheme = () => {
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 400);
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return (
    <header className="sticky top-0 z-50 border-b border-[--color-border] bg-[--color-background]/70 backdrop-blur supports-[backdrop-filter]:bg-[--color-background]/70">
      <nav className="container mx-auto flex items-center justify-between h-14">
        <a href="#home" className="font-semibold tracking-tight">
          Lashata Shakya
        </a>
        <ul className="hidden md:flex gap-6 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`transition-colors ${
                  active === s.id
                    ? "text-[--color-accent]"
                    : "text-[--color-foreground]/80 hover:text-[--color-foreground]"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="h-9 w-9 grid place-items-center rounded-md border border-[--color-border] hover:bg-white/5 active:scale-95 transition-transform duration-150 hover:cursor-pointer"
          >
            <span className="relative inline-flex h-5 w-5 items-center justify-center">
              {isRippling && (
                <span className="absolute inset-0 rounded-full bg-[--color-accent]/30 animate-ping" />
              )}
              <span
                className={`relative block transition-transform duration-500 ${
                  resolvedTheme === "dark" ? "rotate-180" : "rotate-0"
                }`}
              >
                <span className="relative block h-5 w-5">
                  <span
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      resolvedTheme === "dark" ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Sun size={18} />
                  </span>
                  <span
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      resolvedTheme === "dark" ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <Moon size={18} />
                  </span>
                </span>
              </span>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
