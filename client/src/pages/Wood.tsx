import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/WoodHero";
import WhyForWoodSeller from "../components/WhyForWoodSeller"
import DashboardAndFeatures from "../components/DashboardAndFeatures"
import HowItWorks from "../components/HowItWorks";
import WoodCTA from "../components/WoodCTA"
import Footer from "../components/Footer";

export default function Wood(): JSX.Element {
  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyForWoodSeller />
      <DashboardAndFeatures />
      <HowItWorks />
      <WoodCTA />
      <Footer />
    </div>
  );
}
