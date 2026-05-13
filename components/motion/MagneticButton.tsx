"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className = ""
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduced) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    setPos({ x: dx * 0.18, y: dy * 0.28 });
  };
  const onLeave = () => setPos({ x: 0, y: 0 });

  const base =
    variant === "primary"
      ? "bg-ink-900 text-white hover:bg-ink-800 border border-ink-900"
      : "bg-transparent text-ink-900 border border-ink-300 hover:border-ink-900";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className={`inline-flex items-center gap-3 px-7 py-4 rounded-sm text-sm font-medium tracking-wide transition-colors ${base} ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden className="text-base">→</span>
    </motion.a>
  );
}
