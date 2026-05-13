import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: `Book a Consultation — ${siteConfig.seo.siteName}`,
  description:
    "Book a one-hour consultation with SaharaOps to assess your operational readiness."
};

const expect = [
  "A working diagnosis of where your operations sit today",
  "Two or three concrete intervention points",
  "A clear view of what a SaharaOps engagement would look like",
  "No slides. No pitch. A working session."
];

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Consultation"
        h1="One hour. A working diagnosis."
        subhead="We'll spend an hour understanding what's actually happening inside your organization — and what would change if it ran differently."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-sand-500 mb-4">
              What to expect
            </p>
            <ul className="space-y-4">
              {expect.map((e) => (
                <li
                  key={e}
                  className="flex gap-4 text-ink-700 leading-relaxed border-b border-ink-200/60 pb-4"
                >
                  <span className="text-sand-500">→</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 space-y-2 text-ink-600 text-sm">
              <p>
                <span className="text-ink-500">Email · </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-ink-900 hover:text-sand-600"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <span className="text-ink-500">Locations · </span>
                {siteConfig.contact.location}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="bg-ink-50 border border-ink-200/70 p-8 lg:p-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white border border-ink-200 px-4 py-3 text-ink-900 focus:outline-none focus:border-ink-900"
                  />
                </label>
                <label className="block">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">
                    Organization
                  </span>
                  <input
                    type="text"
                    name="org"
                    className="w-full bg-white border border-ink-200 px-4 py-3 text-ink-900 focus:outline-none focus:border-ink-900"
                  />
                </label>
              </div>
              <label className="block">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white border border-ink-200 px-4 py-3 text-ink-900 focus:outline-none focus:border-ink-900"
                />
              </label>
              <label className="block">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">
                  You are
                </span>
                <select
                  name="segment"
                  className="w-full bg-white border border-ink-200 px-4 py-3 text-ink-900 focus:outline-none focus:border-ink-900"
                >
                  <option>A startup preparing to scale</option>
                  <option>An SME streamlining operations</option>
                  <option>An NGO strengthening accountability</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2">
                  What would you like us to understand?
                </span>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full bg-white border border-ink-200 px-4 py-3 text-ink-900 focus:outline-none focus:border-ink-900"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full bg-ink-900 text-white hover:bg-ink-800 transition-colors"
              >
                Request Consultation <span aria-hidden>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
