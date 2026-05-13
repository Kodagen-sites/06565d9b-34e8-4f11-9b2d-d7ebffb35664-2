import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import { TextReveal } from "@/components/motion/TextReveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

type Package = { name: string; duration: string; description: string };

export function ServiceDetail({
  eyebrow,
  title,
  intro,
  imageSeed,
  bullets,
  outcomes,
  packages,
  ctaLabel,
  painPoints,
  solution
}: {
  eyebrow: string;
  title: string;
  intro: string;
  imageSeed: string;
  bullets: string[];
  outcomes: string[];
  packages: Package[];
  ctaLabel: string;
  painPoints: string;
  solution: string;
}) {
  return (
    <>
      {/* Pain → Solution */}
      <section className="bg-ink-100 px-6 lg:px-10 py-24 lg:py-32 border-y border-ink-200">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeUp>
            <div>
              <p className="h-eyebrow text-ink-500 mb-5">/ The friction</p>
              <p className="h-display text-3xl md:text-4xl text-ink-900 leading-tight tracking-tight">
                {painPoints}
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="lg:border-l lg:border-ink-300 lg:pl-12">
              <p className="h-eyebrow text-sand-600 mb-5">/ The fix</p>
              <p className="h-display text-3xl md:text-4xl text-ink-900 leading-tight tracking-tight italic">
                {solution}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Services & Outcomes */}
      <section className="bg-white px-6 lg:px-10 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-100 rounded-sm">
              <img
                src={`https://picsum.photos/seed/${imageSeed}/900/1125`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
            </div>
          </div>
          <div>
            <p className="h-eyebrow flex items-center gap-3 mb-5">
              <span className="h-rule" />
              What you get
            </p>
            <TextReveal as="h2" className="h-display text-3xl md:text-4xl text-ink-900 leading-tight tracking-tight mb-10">
              {intro}
            </TextReveal>
            <ul className="space-y-5 mb-14">
              {bullets.map((b, i) => (
                <FadeUp key={b} delay={i * 0.06}>
                  <li className="grid grid-cols-[auto_1fr] gap-5 pb-5 border-b border-ink-200">
                    <span className="font-mono text-xs text-sand-600 tracking-widest pt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base text-ink-800">{b}</p>
                  </li>
                </FadeUp>
              ))}
            </ul>

            <p className="h-eyebrow text-sand-600 mb-5">/ Outcomes</p>
            <StaggerChildren className="grid sm:grid-cols-2 gap-4">
              {outcomes.map((o) => (
                <StaggerItem key={o}>
                  <div className="border border-ink-200 px-5 py-4 rounded-sm">
                    <p className="text-sm text-ink-800 flex gap-3">
                      <span aria-hidden className="text-sand-600">✓</span>
                      {o}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-ink-900 text-white px-6 lg:px-10 py-24 lg:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none mix-blend-soft-light"
          style={{ background: "radial-gradient(60% 60% at 20% 20%, rgba(199,124,68,0.20), transparent 70%)" }}
        />
        <div className="mx-auto max-w-[1400px] relative">
          <FadeUp>
            <p className="h-eyebrow flex items-center gap-3 mb-6 text-white/60">
              <span className="h-rule" style={{ background: "rgba(255,255,255,0.25)" }} />
              Packages
            </p>
          </FadeUp>
          <TextReveal as="h2" className="h-display text-4xl md:text-5xl text-white leading-[1.05] tracking-tight max-w-[28ch] mb-16">
            Three engagement tiers. Each ends with a system your team can run on its own.
          </TextReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p, i) => (
              <FadeUp key={p.name} delay={i * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/15 hover:border-sand-500/60 p-8 rounded-sm h-full flex flex-col transition-colors">
                  <p className="h-eyebrow text-sand-300 mb-4">{`/ Tier ${String(i + 1).padStart(2, "0")}`}</p>
                  <h3 className="h-display text-2xl text-white tracking-tight mb-2">{p.name}</h3>
                  <p className="text-xs text-white/55 mb-6 font-mono tracking-widest">{p.duration}</p>
                  <p className="text-sm text-white/80 leading-relaxed flex-1">{p.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="mt-16">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-3 px-7 py-4 bg-white text-ink-900 rounded-sm hover:bg-sand-100 transition-colors text-sm font-medium"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
