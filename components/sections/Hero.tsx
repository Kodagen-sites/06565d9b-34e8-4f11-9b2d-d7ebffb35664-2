"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { siteConfig } from "@/lib/site-config";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  const heroParts = siteConfig.hero.h1;

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* Hero image — right two-thirds, HO2 left-split overlay */}
      <div className="absolute inset-0 lg:left-[35%]">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="https://picsum.photos/seed/saharaops-hero-architectural/1920/1200"
            alt=""
            className="absolute inset-0 w-full h-[120%] object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent"
            style={{ opacity: overlayOpacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40" />
          {/* Subtle amber wash */}
          <div className="absolute inset-0 mix-blend-soft-light"
            style={{ background: "radial-gradient(60% 80% at 75% 60%, rgba(199,124,68,0.35), transparent 70%)" }} />
        </motion.div>
      </div>

      {/* Content — left third */}
      <div className="relative pt-44 lg:pt-48 pb-24 lg:pb-32 px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1.05fr_1fr] gap-12 items-end">
          <div>
            <motion.p
              className="h-eyebrow flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="h-rule" />
              {siteConfig.hero.eyebrow}
            </motion.p>

            <h1 className="h-display text-[clamp(2.5rem,6vw,5.25rem)] text-ink-900 leading-[1.02] tracking-tightest">
              {heroParts.map((part, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={part.italic ? "italic text-sand-600" : ""}
                >
                  {part.text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-8 text-base md:text-lg text-ink-600 max-w-[52ch] leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              {siteConfig.hero.subhead}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticButton href={siteConfig.hero.primaryCta.href}>
                {siteConfig.hero.primaryCta.label}
              </MagneticButton>
              <MagneticButton href={siteConfig.hero.secondaryCta.href} variant="secondary">
                {siteConfig.hero.secondaryCta.label}
              </MagneticButton>
            </motion.div>
          </div>

          {/* Trusted-by metadata in right-bottom of hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="hidden lg:block self-end justify-self-end"
          >
            <p className="h-eyebrow text-ink-700/80 mb-4">{`/ Trusted by`}</p>
            <ul className="space-y-2 text-right">
              {siteConfig.trustedBy.slice(0, 3).map((org) => (
                <li key={org} className="text-sm text-ink-800/85">
                  {org}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          aria-hidden
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="h-eyebrow text-ink-500">Scroll</span>
          <span className="block w-px h-8 bg-ink-400" />
        </motion.div>
      </div>
    </section>
  );
}
