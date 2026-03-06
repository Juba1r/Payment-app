"use client";

import CylindricalNavbar from "@/components/CylindricalNavbar";
import HeroSection from "@/components/HeroSection";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

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

const sectionVariants = [
  { hidden: { opacity: 0, y: 150 }, visible: { opacity: 1, y: 0 } }, // From bottom
  { hidden: { opacity: 0, x: -150 }, visible: { opacity: 1, x: 0 } }, // From left
  { hidden: { opacity: 0, y: -150 }, visible: { opacity: 1, y: 0 } }, // From top
  { hidden: { opacity: 0, x: 150 }, visible: { opacity: 1, x: 0 } }, // From right
];

function AnimatedSection({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const variant = sectionVariants[index % sectionVariants.length];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
      variants={variant}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main
      className="relative"
      style={{ position: "relative", overflowX: "hidden" }}
    >
      <CylindricalNavbar />
      <HeroSection />

      <AnimatedSection index={0}>
        <LogoMarquee />
      </AnimatedSection>

      <AnimatedSection index={1}>
        <FeaturesSection />
      </AnimatedSection>

      <AnimatedSection index={2}>
        <ShowcaseSection />
      </AnimatedSection>

      <AnimatedSection index={3}>
        <HowItWorks />
      </AnimatedSection>

      <AnimatedSection index={0}>
        <ProductShowcase />
      </AnimatedSection>

      <AnimatedSection index={1}>
        <BenefitsSection />
      </AnimatedSection>

      <AnimatedSection index={2}>
        <MetricsSection />
      </AnimatedSection>

      <AnimatedSection index={3}>
        <CTASection />
      </AnimatedSection>

      <AnimatedSection index={0}>
        <Footer />
      </AnimatedSection>
    </main>
  );
}
