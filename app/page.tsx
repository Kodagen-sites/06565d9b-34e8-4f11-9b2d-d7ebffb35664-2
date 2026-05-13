import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { Manifesto } from "@/components/sections/Manifesto";
import { Outcomes } from "@/components/sections/Outcomes";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Services />
      <Manifesto />
      <Outcomes />
      <Process />
      <Testimonials />
      <CtaSection />
    </>
  );
}
