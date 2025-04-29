import Image from "next/image";
import { HeroBanner } from "@/components/layout/HeroBanner";
import { AboutSection } from "@/components/layout/AboutSection";
import { Differentials } from "@/components/layout/LandingDifferentials";
import { LandingProcess } from "@/components/layout/LandingProcess";
import { LandingProductShowcase } from "@/components/layout/LandingProductShowcase";
import { LandingTestimonials } from "@/components/layout/LandingTestimonials";
import { LandingFinalCta } from "@/components/layout/LandingFinalCta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full" style={{ background: 'rgba(92, 141, 137, 0.07)' }}>
      <main className="flex flex-col items-center w-full flex-1 p-0 sm:p-0">
        <HeroBanner />
        <AboutSection />
        <Differentials />
        <LandingProcess />
        <LandingProductShowcase />
        <LandingTestimonials />
        <LandingFinalCta />
      </main>
    </div>
  );
}
