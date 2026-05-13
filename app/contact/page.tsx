import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.seo.siteName}`,
  description: `Get in touch with ${siteConfig.brand.name}.`
};

export default function ContactPage() {
  const { contact } = siteConfig;

  const channels = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, "")}` },
    { label: "LinkedIn", value: "linkedin.com/company/saharaops", href: contact.socials.linkedin },
    { label: "Locations", value: contact.location, href: null }
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        h1="Tell us where it's catching."
        subhead="Whether you're scaling, restructuring, or preparing for investors — start the conversation. We'll respond within two business days."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-sand-500 mb-6">
              Channels
            </p>
            <ul className="divide-y divide-ink-200/70 border-y border-ink-200/70">
              {channels.map((c) => (
                <li key={c.label} className="py-5 flex items-baseline justify-between gap-6">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-ink-500 shrink-0">
                    {c.label}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-ink-900 hover:text-sand-600 text-right break-all"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-ink-900 text-right">{c.value}</span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full bg-ink-900 text-white hover:bg-ink-800 transition-colors"
              >
                Book a consultation instead <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="bg-ink-50 border border-ink-200/70 p-8 lg:p-10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-sand-500 mb-4">
              Send a note
            </p>
            <form className="space-y-5">
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
                  Message
                </span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-white border border-ink-200 px-4 py-3 text-ink-900 focus:outline-none focus:border-ink-900"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full bg-ink-900 text-white hover:bg-ink-800 transition-colors"
              >
                Send <span aria-hidden>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
