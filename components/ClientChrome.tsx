"use client";

import { useEffect, useState } from "react";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { FilmGrain } from "@/components/motion/FilmGrain";

export function ClientChrome() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <>
      <ScrollProgress />
      <FilmGrain opacity={0.04} />
    </>
  );
}
