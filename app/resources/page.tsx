import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: `Resources — ${siteConfig.seo.siteName}`,
  description:
    "Field notes, frameworks, and operating playbooks from SaharaOps engagements."
};

const resources = [
  {
    kicker: "Playbook",
    title: "The Operational Readiness Checklist",
    body:
      "A 24-point self-assessment we run with founders before raising or scaling into new markets.",
    tag: "For Startups"
  },
  {
    kicker: "Framework",
    title: "From Strategy to Execution: The Seam Audit",
    body:
      "How to identify the exact point where strategy hands off to operations — and why most teams lose it there.",
    tag: "For SMEs"
  },
  {
    kicker: "Case Note",
    title: "Onboarding in 3 Days, Not 6 Weeks",
    body:
      "Inside the redesign of SEMA's therapist onboarding system — what we changed and what it cost.",
    tag: "Case Study"
  },
  {
    kicker: "Guide",
    title: "Donor-Ready Reporting for NGOs",
    body:
      "The reporting cadence, evidence chain, and governance posture donors actually look for.",
    tag: "For NGOs"
  }
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        h1="Field notes from the operating room."
        subhead="Playbooks, frameworks, and case notes drawn from real SaharaOps engagements across four continents."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          {resources.map((r) => (
            <article
              key={r.title}
              className="group border border-ink-200/70 bg-white hover:border-sand-500/60 transition-colors p-8 lg:p-10 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] uppercase tracking-[0.22em] text-sand-500">
                  {r.kicker}
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-ink-500">
                  {r.tag}
                </span>
              </div>
              <h3 className="h-display text-2xl lg:text-[28px] text-ink-900 leading-[1.15] mb-4">
                {r.title}
              </h3>
              <p className="text-ink-600 leading-relaxed mb-8 flex-1">
                {r.body}
              </p>
              <span className="text-sm text-ink-800 inline-flex items-center gap-2 group-hover:text-sand-600 transition-colors">
                Available on request <span aria-hidden>→</span>
              </span>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-[1100px] px-6 lg:px-10 mt-16 text-center">
          <p className="text-ink-600 mb-4">
            We share most of our frameworks one-to-one inside engagements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border border-ink-300 text-ink-900 hover:border-ink-900 transition-colors"
          >
            Request a resource <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
