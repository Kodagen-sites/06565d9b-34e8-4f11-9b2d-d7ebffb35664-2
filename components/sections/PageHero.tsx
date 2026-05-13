import { TextReveal } from "@/components/motion/TextReveal";
import { FadeUp } from "@/components/motion/FadeUp";

export function PageHero({
  eyebrow,
  title,
  body,
  imageSeed
}: {
  eyebrow: string;
  title: string;
  body?: string;
  imageSeed: string;
}) {
  return (
    <section className="relative pt-44 lg:pt-52 pb-24 lg:pb-32 px-6 lg:px-10 bg-white overflow-hidden">
      <div className="absolute right-0 top-0 w-[55%] h-full opacity-90">
        <img
          src={`https://picsum.photos/seed/${imageSeed}/1600/1000`}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
        <div
          className="absolute inset-0 mix-blend-soft-light"
          style={{ background: "radial-gradient(55% 70% at 75% 50%, rgba(199,124,68,0.30), transparent 70%)" }}
        />
      </div>
      <div className="relative mx-auto max-w-[1400px]">
        <FadeUp>
          <p className="h-eyebrow flex items-center gap-3 mb-8">
            <span className="h-rule" />
            {eyebrow}
          </p>
        </FadeUp>
        <TextReveal as="h1" className="h-display text-[clamp(2.5rem,6vw,5.5rem)] text-ink-900 leading-[1.02] tracking-tightest max-w-[22ch]">
          {title}
        </TextReveal>
        {body ? (
          <FadeUp delay={0.2}>
            <p className="mt-8 text-base md:text-lg text-ink-700 leading-relaxed max-w-[58ch]">
              {body}
            </p>
          </FadeUp>
        ) : null}
      </div>
    </section>
  );
}
