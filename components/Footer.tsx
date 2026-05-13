import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white relative overflow-hidden">
      {/* Closing CTA strip */}
      <section className="border-b border-white/10 px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <div>
            <p className="h-eyebrow text-white/60 mb-6">{`/ Next step`}</p>
            <h2 className="h-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
              {siteConfig.footer.ctaHeadline}
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href={siteConfig.cta.primaryCta.href}
              className="inline-flex items-center justify-between gap-3 px-6 py-4 bg-white text-ink-900 rounded-sm hover:bg-sand-100 transition-colors group"
            >
              <span className="text-sm font-medium">{siteConfig.cta.primaryCta.label}</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href={`mailto:${siteConfig.footer.contactEmail}`}
              className="inline-flex items-center gap-3 px-6 py-4 border border-white/20 text-white rounded-sm hover:bg-white/5 transition-colors"
            >
              <span className="text-sm">{siteConfig.footer.contactEmail}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Multi-block institutional */}
      <section className="px-6 lg:px-10 py-16">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1.4fr_repeat(3,1fr)] gap-12">
          <div>
            <Link href="/" className="inline-flex items-baseline gap-2">
              <span className="h-display text-2xl text-white">{siteConfig.brand.name}</span>
            </Link>
            <p className="mt-6 text-sm text-white/65 max-w-[36ch] leading-relaxed">
              {siteConfig.footer.brandStatement}
            </p>
            <p className="mt-6 h-eyebrow text-white/40">{siteConfig.contact.location}</p>
          </div>

          {siteConfig.footer.columns.map((col) => (
            <div key={col.heading}>
              <p className="h-eyebrow text-white/50 mb-5">{col.heading}</p>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.brand.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {siteConfig.footer.footnotes.map((f) => (
              <Link
                key={f.label}
                href={f.href}
                className="text-xs text-white/50 hover:text-white/80"
              >
                {f.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
