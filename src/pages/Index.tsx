import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import NetworkCanvas from "@/components/NetworkCanvas";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyYomtalSection from "@/components/WhyYomtalSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import PartnersSection from "@/components/PartnersSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import IntroScreen from "@/components/IntroScreen";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>
      <NetworkCanvas />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyYomtalSection />
      <MissionVisionSection />
      <PartnersSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
