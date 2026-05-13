import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PageHero } from "@/components/sections/PageHero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: `Services — ${siteConfig.seo.siteName}`,
  description: siteConfig.services.intro
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={siteConfig.services.eyebrow}
        h1={siteConfig.services.h2}
        subhead={siteConfig.services.intro}
      />
      <Services />
      <Process />
      <CtaSection />
    </>
  );
}
