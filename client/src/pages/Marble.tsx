import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/MarbleHero";
import WhyForMarbleSeller from "../components/WhyForMarbleSeller"
import DashboardAndFeatures from "../components/DashboardAndFeatures"
import HowItWorks from "../components/HowItWorks";
import MarbleCTA from "../components/MarbleCTA"
import Footer from "../components/Footer";

export default function Marble(): JSX.Element {
  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyForMarbleSeller />
      <DashboardAndFeatures />
      <HowItWorks />
      <MarbleCTA />
      <Footer />
    </div>
  );
}
