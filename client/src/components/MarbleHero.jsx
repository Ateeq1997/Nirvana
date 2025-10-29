"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const MarbleHero = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <img
        className="w-full h-[641px] object-cover"
        alt="Marble background"
        src="/2150659027-1.png"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="relative w-full max-w-[980px] rounded-[30px] border-none backdrop-blur-[22.85px] backdrop-brightness-[100%] bg-[linear-gradient(139deg,rgba(51,51,51,0.08)_0%,rgba(51,51,51,0.08)_100%)] p-12 flex flex-col items-center gap-6 before:content-[''] before:absolute before:inset-0 before:p-[5px] before:rounded-[30px] before:[background:linear-gradient(140deg,rgba(17,17,17,0.35)_0%,rgba(0,3,26,0)_51%,rgba(75,75,75,0.35)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <h2 className="w-full max-w-[899px] [-webkit-text-stroke:2px_#111111bf] [font-family:'Poppins',Helvetica] font-bold text-white text-[79px] text-center tracking-[0] leading-[87.7px]">
            Transform the Way You Sell Marble
          </h2>

          <p className="w-full max-w-[875px] [font-family:'Poppins',Helvetica] font-medium text-white text-[22px] text-center tracking-[0] leading-[26.4px]">
            Streamline Your Marble Business With An Intelligent Dashboard.
            Effortlessly Manage Submissions, Reports, And Invoicing — All In One
            Place, Built Exclusively For Marble Sellers.
          </p>

          <Button className="h-auto px-8 py-[15px] bg-white rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-[22px]">
            Book Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarbleHero;

