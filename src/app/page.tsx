import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import ProductShowcase from "@/components/ProductShowcase";
import BenefitsSection from "@/components/BenefitsSection";
import MetricsSection from "@/components/MetricsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <LogoMarquee />
      <FeaturesSection />
      <HowItWorks />
      <ProductShowcase />
      <BenefitsSection />
      <MetricsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
