"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 h-[2px] bg-sand-500 origin-left z-[60]"
    />
  );
}

export function ScrollProgress() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <ScrollBar />;
}
