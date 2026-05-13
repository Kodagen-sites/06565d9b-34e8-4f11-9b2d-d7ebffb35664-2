"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { siteConfig } from "@/lib/site-config";
import { FadeUp } from "@/components/motion/FadeUp";
import { TextReveal } from "@/components/motion/TextReveal";

const seedFor = (slug: string) => `saharaops-service-${slug}`;

function ServiceCard({ item, index }: { item: (typeof siteConfig.services.items)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col bg-white border border-ink-200 hover:border-ink-700 transition-colors rounded-sm overflow-hidden"
    >
      {/* CV4-ish Liquid glass thumbnail with parallax image */}
      <Link href={item.href} className="block relative aspect-[4/3] overflow-hidden bg-ink-100">
        <motion.img
          src={`https://picsum.photos/seed/${seedFor(item.slug)}/900/720`}
          alt=""
          className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ y }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/65 group-hover:to-white/40 transition-all duration-500" />
        <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-ink-700/90">
          <span className="font-mono text-xs tracking-widest">{item.number}</span>
          <span className="font-mono text-[10px] tracking-widest uppercase">{item.kicker}</span>
        </div>
        <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-white/70 border border-white/80 rounded-sm px-4 py-3 flex items-center justify-between">
          <span className="text-xs font-medium text-ink-900">{item.ctaLabel}</span>
          <span aria-hidden className="text-ink-900 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </Link>

      <div className="p-7 lg:p-8 flex flex-col flex-1">
        <h3 className="h-display text-2xl md:text-[28px] text-ink-900 tracking-tight leading-snug mb-4">
          {item.name}
        </h3>
        <p className="text-sm text-ink-600 leading-relaxed mb-6">{item.body}</p>

        <ul className="space-y-2 mb-6">
          {item.bullets.slice(0, 4).map((b) => (
            <li key={b} className="text-sm text-ink-800 flex gap-3">
              <span aria-hidden className="text-sand-600">▸</span>
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5 border-t border-ink-200 flex flex-wrap gap-2">
          {item.outcomes.slice(0, 3).map((o) => (
            <span
              key={o}
              className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-ink-100 text-ink-700 rounded-sm"
            >
              {o}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Services() {
  const { services } = siteConfig;
  return (
    <section id="services" className="bg-white px-6 lg:px-10 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 mb-16">
          <div>
            <FadeUp>
              <p className="h-eyebrow flex items-center gap-3 mb-6">
                <span className="h-rule" />
                {services.eyebrow}
              </p>
            </FadeUp>
            <TextReveal as="h2" className="h-display text-4xl md:text-5xl text-ink-900 leading-[1.05] tracking-tight">
              {services.h2}
            </TextReveal>
          </div>
          <FadeUp delay={0.2}>
            <p className="text-base md:text-lg text-ink-700 leading-relaxed max-w-[58ch] self-end mt-2">
              {services.intro}
            </p>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.items.map((item, i) => (
            <ServiceCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
