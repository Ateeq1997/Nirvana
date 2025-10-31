import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/Navbar";
import RetailersHero from "../components/RetailerHero";
import ShowcaseProducts from "../components/ShowcaseProducts"
import OperationsSection from "../components/OperationsSection"
import CustomerJourneySection from "../components/CustomerJourneySection"
import RetailsCTA from "../components/RetailsCTA"
import Footer from "../components/Footer";


export const Retailers = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-w-[1440px] min-h-screen relative">
    <Navbar />
    <RetailersHero /> 
<ShowcaseProducts />
 <OperationsSection />
<CustomerJourneySection />
<RetailsCTA />
<Footer />
    </div>
  );
};
