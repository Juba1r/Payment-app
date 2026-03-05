"use client";

import CylindricalNavbar from "@/components/CylindricalNavbar";
import HeroSection from "@/components/HeroSection";
import dynamic from "next/dynamic";

// Deep lazy-load all below-the-fold components
// This prevents the browser from choking on gigantic JS hydration bundles
// and allows the Hero section to immediately paint and become completely smooth
import LogoMarquee from "@/components/LogoMarquee";
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), {
  ssr: false,
});
const ShowcaseSection = dynamic(
  () =>
    import("@/components/ShowcaseSection").then((mod) => mod.ShowcaseSection),
  { ssr: false, loading: () => <div style={{ minHeight: "100vh" }} /> },
);
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  ssr: false,
});
const ProductShowcase = dynamic(() => import("@/components/ProductShowcase"), {
  ssr: false,
});
const BenefitsSection = dynamic(() => import("@/components/BenefitsSection"), {
  ssr: false,
});
const MetricsSection = dynamic(() => import("@/components/MetricsSection"), {
  ssr: false,
});
const CTASection = dynamic(() => import("@/components/CTASection"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main className="relative">
      <CylindricalNavbar />
      <HeroSection />
      <LogoMarquee />
      <FeaturesSection />
      <ShowcaseSection />
      <HowItWorks />
      <ProductShowcase />
      <BenefitsSection />
      <MetricsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
