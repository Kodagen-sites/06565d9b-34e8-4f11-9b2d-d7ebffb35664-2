"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/lib/site-config";
import { TextReveal } from "@/components/motion/TextReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { FadeUp } from "@/components/motion/FadeUp";

export function CtaSection() {
  return (
    <section className="bg-ink-100 px-6 lg:px-10 py-28 lg:py-40 relative overflow-hidden">
      {/* Parallax-ish background */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-90"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(50% 60% at 20% 30%, rgba(199,124,68,0.18), transparent 60%), radial-gradient(40% 50% at 80% 70%, rgba(26,26,26,0.06), transparent 70%)",
          backgroundSize: "200% 200%"
        }}
      />
      <div className="mx-auto max-w-[1400px] relative">
        <div className="max-w-[60ch]">
          <FadeUp>
            <p className="h-eyebrow flex items-center gap-3 mb-8">
              <span className="h-rule" />
              {siteConfig.cta.eyebrow}
            </p>
          </FadeUp>
          <TextReveal as="h2" className="h-display text-5xl md:text-6xl lg:text-7xl text-ink-900 leading-[1.02] tracking-tight">
            {siteConfig.cta.h2}
          </TextReveal>
          <FadeUp delay={0.2}>
            <p className="mt-8 text-base md:text-lg text-ink-700 leading-relaxed">
              {siteConfig.cta.body}
            </p>
          </FadeUp>
          <FadeUp delay={0.35}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton href={siteConfig.cta.primaryCta.href}>
                {siteConfig.cta.primaryCta.label}
              </MagneticButton>
              <MagneticButton href={siteConfig.cta.secondaryCta.href} variant="secondary">
                {siteConfig.cta.secondaryCta.label}
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
