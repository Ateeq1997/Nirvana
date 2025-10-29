"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-16 px-[92px]">
      <div className="max-w-[1440px] mx-auto flex justify-between gap-12">
        {/* --- Column 1 --- */}
        <div className="flex-1 max-w-[320px]">
          <h2 className="text-white font-bold text-[26px] leading-[36px] mb-4 [font-family:'Poppins',Helvetica]">
            ClicProduct
          </h2>
          <p className="text-[#DADADA] text-[15px] leading-[26px] mb-6 [font-family:'Poppins',Helvetica]">
            Clic Produit is a complete platform for the marble industry, helping
            manufacturers, retailers, and professionals manage projects, orders,
            and materials in one place.
          </p>

          {/* Combined Input + Button */}
          <div className="flex mb-8 overflow-hidden rounded-full border border-[#ffffff40]">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-[#111111] h-[48px] border-none rounded-none text-sm px-5 flex-1 [font-family:'Poppins',Helvetica] focus:outline-none"
            />
            <Button className="h-[48px] bg-white text-[#111111] font-semibold text-sm px-6 rounded-none border-l border-[#0000001A] hover:bg-[#f5f5f5] transition">
              Join Newsletter
            </Button>
          </div>

          {/* Social Icons */}
          {/* ✅ Social Icons */}
<div className="flex gap-4 mt-4">
  <a
    href="#"
    className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-110 transition"
  >
    <i className="fab fa-facebook-f text-black"></i>
  </a>
  <a
    href="#"
    className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-110 transition"
  >
    <i className="fab fa-instagram text-black"></i>
  </a>
  <a
    href="#"
    className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-110 transition"
  >
    <i className="fab fa-linkedin-in text-black"></i>
  </a>
  <a
    href="#"
    className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-110 transition"
  >
    <i className="fab fa-youtube text-black"></i>
  </a>
  <a
    href="#"
    className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-110 transition"
  >
    <i className="fab fa-vimeo-v text-black"></i>
  </a>
</div>

        </div>

        {/* Vertical Line */}
        <div className="w-[1px] bg-[#FFFFFF33]"></div>

        {/* --- Column 2: Links --- */}
        <div className="flex flex-col min-w-[180px]">
          <h3 className="font-semibold text-white text-[18px] mb-5 [font-family:'Poppins',Helvetica]">
            Links
          </h3>
          <ul className="flex flex-col gap-3 text-[#DADADA] text-[15px] [font-family:'Poppins',Helvetica]">
            <li>Marble Manufacturers</li>
            <li>Retailers and Distributors</li>
            <li>Architects and Designers</li>
            <li>Renovation Contractors</li>
          </ul>
        </div>

        {/* --- Column 3: Services --- */}
        <div className="flex flex-col min-w-[180px]">
          <h3 className="font-semibold text-white text-[18px] mb-5 [font-family:'Poppins',Helvetica]">
            Services
          </h3>
          <ul className="flex flex-col gap-3 text-[#DADADA] text-[15px] [font-family:'Poppins',Helvetica]">
            <li>ClicProduct Software</li>
            <li>Web Development</li>
            <li>Wood Suppliers</li>
            <li>Marble Suppliers</li>
            <li>SEO</li>
          </ul>
        </div>

        {/* Vertical Line */}
        <div className="w-[1px] bg-[#FFFFFF33]"></div>

        {/* --- Column 4: Address --- */}
        <div className="flex flex-col justify-start">
          <h3 className="font-semibold text-white text-[18px] mb-5 [font-family:'Poppins',Helvetica]">
            Address
          </h3>
          <div className="flex flex-col gap-3 text-[#DADADA] text-[15px] [font-family:'Poppins',Helvetica]">
            <p>info@clicproduit.com</p>
            <p>+1 123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
