import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import WhatDoYouSell from "../components/WhatDoYouSell";
import PoweredByNirwana from "../components/PoweredByNirwana";
import ExploreVisualization from "../components/ExploreVisualization";
import HowItWorks from "../components/HowItWorks";
import FAQsSection from "../components/FAQsSection";
import Footer from "../components/Footer";

import React from "react";

const navigationItems = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#" },
  { label: "Crazy Pineapple", href: "#" },
  { label: "Contact Us", href: "#" },
];


export const Home = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-w-[1440px] relative">
      <Navbar />
<HeroSection />
<WhatDoYouSell />
     <PoweredByNirwana />
<ExploreVisualization />
<HowItWorks />
<FAQsSection />
    <Footer /> 

    </div>
  );
};
