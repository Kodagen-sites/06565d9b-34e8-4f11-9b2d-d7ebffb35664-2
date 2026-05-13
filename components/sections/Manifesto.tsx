import { TextReveal } from "@/components/motion/TextReveal";

export function Manifesto() {
  return (
    <section className="bg-white px-6 lg:px-10 py-28 lg:py-40 border-y border-ink-200">
      <div className="mx-auto max-w-[1400px]">
        <TextReveal
          as="p"
          className="h-display text-4xl md:text-6xl lg:text-7xl text-ink-900 leading-[1.05] tracking-tight max-w-[26ch]"
        >
          We don't sell slide decks.{" "}
          <span className="italic text-sand-600">We install operating systems</span>{" "}
          — and stay until your team runs them.
        </TextReveal>
      </div>
    </section>
  );
}
