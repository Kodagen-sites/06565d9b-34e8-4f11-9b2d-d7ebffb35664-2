"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Marquee({
  children,
  speed = 30,
  className
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <motion.div
        className="inline-flex gap-12 will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
