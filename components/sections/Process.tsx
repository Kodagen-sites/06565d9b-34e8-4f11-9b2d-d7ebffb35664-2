"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { siteConfig } from "@/lib/site-config";
import { FadeUp } from "@/components/motion/FadeUp";
import { TextReveal } from "@/components/motion/TextReveal";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={ref} className="bg-white px-6 lg:px-10 py-24 lg:py-32 border-y border-ink-200">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 mb-16">
          <div>
            <FadeUp>
              <p className="h-eyebrow flex items-center gap-3 mb-6">
                <span className="h-rule" />
                {siteConfig.process.eyebrow}
              </p>
            </FadeUp>
            <TextReveal as="h2" className="h-display text-4xl md:text-5xl text-ink-900 leading-[1.05] tracking-tight">
              {siteConfig.process.h2}
            </TextReveal>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
          {/* Pinned image left */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-100 rounded-sm">
              <motion.img
                src="https://picsum.photos/seed/saharaops-process/900/1125"
                alt=""
                className="absolute inset-0 w-full h-[120%] object-cover"
                style={{ y: imgY }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-white/75 border border-white/80 rounded-sm px-5 py-4">
                <p className="h-eyebrow text-ink-700">/ Engagement Model</p>
                <p className="text-sm text-ink-900 mt-1">Designed for outcomes, not deliverables.</p>
              </div>
            </div>
          </div>

          {/* Steps right */}
          <ol className="space-y-12">
            {siteConfig.process.steps.map((s, i) => (
              <FadeUp key={s.number} delay={i * 0.12}>
                <li className="grid grid-cols-[auto_1fr] gap-6 lg:gap-10 pb-12 border-b border-ink-200 last:border-b-0">
                  <span className="h-display text-5xl lg:text-6xl text-sand-500 tracking-tight leading-none">
                    {s.number}
                  </span>
                  <div>
                    <h3 className="h-display text-2xl lg:text-3xl text-ink-900 tracking-tight mb-3">
                      {s.title}
                    </h3>
                    <p className="text-base text-ink-700 leading-relaxed max-w-[58ch]">{s.body}</p>
                  </div>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
