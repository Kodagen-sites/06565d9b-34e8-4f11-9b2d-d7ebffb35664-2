"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function StaggerChildren({
  children,
  staggerDelay = 0.08,
  className
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: reduced ? 0 : staggerDelay }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : y },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
      }}
    >
      {children}
    </motion.div>
  );
}
