import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: `About — ${siteConfig.seo.siteName}`,
  description: siteConfig.about.body
};

export default function AboutPage() {
  const { about } = siteConfig;

  return (
    <>
      <PageHero eyebrow={about.eyebrow} h1={about.h1} subhead={about.body} />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-sand-500 mb-4">
              Our Mission
            </p>
            <h2 className="h-display text-3xl lg:text-4xl text-ink-900 leading-[1.1]">
              {about.mission}
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-sand-500">
              What sets us apart
            </p>
            <ul className="space-y-4">
              {about.differentiators.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 text-ink-700 text-base lg:text-lg leading-relaxed border-b border-ink-200/60 pb-4"
                >
                  <span className="text-sand-500 font-medium">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-sand-500 mb-4">
              Founder
            </p>
            <h2 className="h-display text-3xl lg:text-4xl text-ink-900 leading-[1.1] mb-2">
              {about.founder.name}
            </h2>
            <p className="text-ink-600 text-sm uppercase tracking-[0.18em]">
              {about.founder.role}
            </p>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <p className="text-ink-700 text-base lg:text-lg leading-relaxed">
              {about.founder.bio}
            </p>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-sand-500 mb-3">
                Credentials
              </p>
              <ul className="space-y-2">
                {about.founder.credentials.map((c) => (
                  <li key={c} className="text-ink-700">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full bg-ink-900 text-white hover:bg-ink-800 transition-colors"
            >
              Work with us <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
