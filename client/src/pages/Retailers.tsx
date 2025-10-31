import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/Navbar";
import RetailerHero from "../components/RetailerHero"
import BuildForMarble from "../components/BuiltforMarble"
import VisualizerSection from "../components/VisualizerSection"
import VideoSection from "../components/VideoSection"




const Retailers = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-w-[1440px] relative">
 <Navbar />
<RetailerHero />
<BuildForMarble />
<VisualizerSection />
<VideoSection />




      <section className="relative w-full px-[151px] pb-[673px]">
        <Card className="w-full h-[242px] bg-[#1b1b1b] rounded-2xl border border-solid border-[#4c4c4c]">
          <CardContent className="flex flex-col items-center justify-center h-full gap-[21px] p-0">
            <h2 className="w-[934px] [font-family:'Poppins',Helvetica] font-bold text-white text-[45px] text-center tracking-[0] leading-[normal]">
              Ready to Simplify Your Marble Business?
            </h2>
            <Button className="w-[341px] h-[63px] px-8 py-[15px] bg-white rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-[22px] hover:bg-white/90">
              Get Started with Nirwana
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
export default Retailers;