"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type PopProps = {
  children: ReactNode;
  /** Per-item stagger in seconds. */
  delay?: number;
  className?: string;
};

/** Chip-style entrance: scale up with a small spring overshoot. */
export function Pop({ children, delay = 0, className }: PopProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      className={className}
      data-reveal=""
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {children}
    </motion.span>
  );
}
