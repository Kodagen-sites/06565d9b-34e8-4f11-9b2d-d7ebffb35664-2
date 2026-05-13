"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Tag = "h1" | "h2" | "h3" | "p" | "span" | "div";

export function TextReveal({
  children,
  as = "h1",
  className,
  delay = 0
}: {
  children: ReactNode;
  as?: Tag;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const initial = { opacity: 0, y: reduced ? 0 : 28, filter: reduced ? "none" : "blur(8px)" };
  const whileInView = { opacity: 1, y: 0, filter: "blur(0px)" };
  const viewport = { once: true, margin: "0px 0px -10% 0px" };
  const transition = { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const };

  switch (as) {
    case "h1":
      return <motion.h1 initial={initial} whileInView={whileInView} viewport={viewport} transition={transition} className={className}>{children}</motion.h1>;
    case "h2":
      return <motion.h2 initial={initial} whileInView={whileInView} viewport={viewport} transition={transition} className={className}>{children}</motion.h2>;
    case "h3":
      return <motion.h3 initial={initial} whileInView={whileInView} viewport={viewport} transition={transition} className={className}>{children}</motion.h3>;
    case "p":
      return <motion.p initial={initial} whileInView={whileInView} viewport={viewport} transition={transition} className={className}>{children}</motion.p>;
    case "span":
      return <motion.span initial={initial} whileInView={whileInView} viewport={viewport} transition={transition} className={className}>{children}</motion.span>;
    default:
      return <motion.div initial={initial} whileInView={whileInView} viewport={viewport} transition={transition} className={className}>{children}</motion.div>;
  }
}
