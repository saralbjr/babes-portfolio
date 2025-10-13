type Variants = Record<string, unknown>;

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -24 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
