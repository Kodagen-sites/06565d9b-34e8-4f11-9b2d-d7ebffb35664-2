import { siteConfig } from "@/lib/site-config";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { TextReveal } from "@/components/motion/TextReveal";

export function WhyUs() {
  const { whyUs } = siteConfig;
  return (
    <section className="bg-ink-100 px-6 lg:px-10 py-24 lg:py-32 border-y border-ink-200">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1fr_1.4fr] gap-16">
        <div>
          <FadeUp>
            <p className="h-eyebrow flex items-center gap-3 mb-6">
              <span className="h-rule" />
              {whyUs.eyebrow}
            </p>
          </FadeUp>
          <TextReveal as="h2" className="h-display text-4xl md:text-5xl text-ink-900 leading-[1.05] tracking-tight">
            {whyUs.h2}
          </TextReveal>
        </div>
        <div>
          <FadeUp delay={0.2}>
            <p className="text-base md:text-lg text-ink-700 leading-relaxed max-w-[60ch]">
              {whyUs.body}
            </p>
          </FadeUp>

          <StaggerChildren className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-10" staggerDelay={0.1}>
            {whyUs.pillars.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="flex gap-5">
                  <span className="font-mono text-xs text-sand-600 tracking-widest pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="h-display text-xl text-ink-900 tracking-tight mb-2">{p.title}</h3>
                    <p className="text-sm text-ink-600 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
