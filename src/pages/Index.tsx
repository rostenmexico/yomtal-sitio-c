import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import NetworkCanvas from "@/components/NetworkCanvas";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyYomtalSection from "@/components/WhyYomtalSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import IntroScreen from "@/components/IntroScreen";
import SectionDotNav from "@/components/SectionDotNav";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>
      <NetworkCanvas />
      <Header />
      <SectionDotNav />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyYomtalSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
