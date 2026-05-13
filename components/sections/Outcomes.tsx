import { siteConfig } from "@/lib/site-config";
import { FadeUp } from "@/components/motion/FadeUp";
import { TextReveal } from "@/components/motion/TextReveal";
import { NumberCounter } from "@/components/motion/NumberCounter";
import { Marquee } from "@/components/motion/Marquee";

export function Outcomes() {
  const { outcomes, trustedBy } = siteConfig;
  return (
    <section className="bg-ink-900 text-white px-6 lg:px-10 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 mix-blend-soft-light pointer-events-none"
        style={{ background: "radial-gradient(70% 60% at 80% 20%, rgba(199,124,68,0.28), transparent 70%)" }} />

      <div className="mx-auto max-w-[1400px] relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 mb-20">
          <div>
            <FadeUp>
              <p className="h-eyebrow flex items-center gap-3 mb-6 text-white/60">
                <span className="h-rule" style={{ background: "rgba(255,255,255,0.25)" }} />
                {outcomes.eyebrow}
              </p>
            </FadeUp>
            <TextReveal as="h2" className="h-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
              {outcomes.h2}
            </TextReveal>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-20">
          {outcomes.items.map((item, i) => {
            const valueItem = item as { value?: string; before?: string; after?: string };
            return (
              <FadeUp key={item.label} delay={i * 0.08}>
                <div className="border-t border-white/15 pt-6">
                  <p className="h-eyebrow text-white/50 mb-3">{`/ ${String(i + 1).padStart(2, "0")}`}</p>
                  {valueItem.value ? (
                    <p className="h-display text-5xl lg:text-6xl text-white tracking-tight mb-3">
                      {/^\d+/.test(valueItem.value) ? (
                        <>
                          <NumberCounter to={parseInt(valueItem.value, 10)} />
                          {valueItem.value.replace(/^\d+/, "")}
                        </>
                      ) : (
                        valueItem.value
                      )}
                    </p>
                  ) : (
                    <p className="h-display text-4xl lg:text-5xl text-white tracking-tight mb-3">
                      <span className="text-white/40 line-through decoration-sand-500 mr-2">{valueItem.before}</span>
                      <span className="text-sand-300">{valueItem.after}</span>
                    </p>
                  )}
                  <p className="text-sm text-white/70 font-medium mb-1">{item.label}</p>
                  <p className="text-xs text-white/45">{item.note}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp>
          <p className="h-eyebrow text-white/40 mb-6">{`/ Selected clients`}</p>
        </FadeUp>
        <Marquee speed={45}>
          {trustedBy.map((t) => (
            <span key={t} className="h-display text-2xl lg:text-3xl text-white/75 px-6">
              {t}
              <span aria-hidden className="mx-6 text-sand-500">◆</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
