import { siteConfig } from "@/lib/site-config";
import { FadeUp } from "@/components/motion/FadeUp";
import { TextReveal } from "@/components/motion/TextReveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export function Testimonials() {
  return (
    <section className="bg-ink-100 px-6 lg:px-10 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 mb-16">
          <div>
            <FadeUp>
              <p className="h-eyebrow flex items-center gap-3 mb-6">
                <span className="h-rule" />
                Client Success Stories
              </p>
            </FadeUp>
            <TextReveal as="h2" className="h-display text-4xl md:text-5xl text-ink-900 leading-[1.05] tracking-tight">
              See how we've helped organizations thrive.
            </TextReveal>
          </div>
        </div>

        <StaggerChildren staggerDelay={0.12} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {siteConfig.testimonials.map((t) => (
            <StaggerItem key={t.author + t.org}>
              <figure className="h-full bg-white border border-ink-200 p-8 lg:p-10 rounded-sm flex flex-col">
                <span aria-hidden className="h-display text-6xl text-sand-500 leading-none mb-4">
                  “
                </span>
                <blockquote className="text-base lg:text-lg text-ink-800 leading-relaxed mb-8 flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="pt-6 border-t border-ink-200">
                  <p className="text-sm font-medium text-ink-900">{t.author}</p>
                  <p className="text-xs text-ink-500 mt-1">{t.org}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
