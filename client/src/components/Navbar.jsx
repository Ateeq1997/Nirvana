"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    dropdown: [
      "Marbles Manufacturers",
      "Retailers and Distributors",
      "Architects and Designers",
      "Renovation Contractors",
    ],
  },
  {
    label: "Crazy Pineapple",
    dropdown: [
      "ClicProduct Software",
      "Website Development for Marble Suppliers",
      "Website Development for Wood Suppliers",
      "SEO for Marble Businesses",
      "Digital Marketing for Marble Businesses",
      "SEO for Wood Businesses",
      "Digital Marketing for Wood Businesses",
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [language, setLanguage] = useState("EN");

  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-w-[1440px] relative">
      <header className="relative z-10 bg-white">
        <div className="max-w-[1440px] mx-auto px-[92px] py-7 flex items-center justify-between">
          {/* Logo */}
          <div className="[font-family:'Montserrat',Helvetica] font-bold text-[#111111] text-[31px] tracking-[0] leading-[65px]">
            ClicProduct
          </div>

          {/* Navigation Menu */}
          <nav className="flex items-center gap-[42px]">
            {navigationItems.map((item, index) => {
              if (item.dropdown) {
                return (
                  <DropdownMenu
                    key={index}
                    open={openDropdown === item.label}
                    onOpenChange={(open) =>
                      setOpenDropdown(open ? item.label : null)
                    }
                  >
                    <DropdownMenuTrigger
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="flex items-center gap-1 [font-family:'Poppins',Helvetica] font-medium text-[#333333] text-lg tracking-[0] leading-[normal] outline-none cursor-pointer"
                    >
                      {item.label}
                      <ChevronDownIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="bg-white shadow-lg border border-gray-200"
                    >
                      {item.dropdown.map((subItem, i) => (
                        <DropdownMenuItem
                          key={i}
                          className="[font-family:'Poppins',Helvetica] font-medium text-[#333333] text-base cursor-pointer hover:bg-[#f2f2f2] transition-colors"
                        >
                          {subItem}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <a
                  key={index}
                  href={item.href}
                  className="[font-family:'Poppins',Helvetica] font-medium text-[#333333] text-lg tracking-[0] leading-[normal] hover:text-[#111111] transition-colors"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Buttons Section */}
          <div className="flex items-center gap-4">
            {/* 🔥 Animated Login Button */}
            <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: "#333333",
                boxShadow: "0 0 20px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-[200px]"
            >
              <Button className="h-auto px-8 py-[15px] bg-[#111111] rounded-[200px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal] transition-all duration-300">
                Log In
              </Button>
            </motion.div>

            {/* 🌍 Language Dropdown Button */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-[200px]"
                >
                  <Button className="h-auto px-6 py-[13px] bg-white border border-[#00000033] rounded-[200px] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-[20px] tracking-[0] leading-[normal] transition-all duration-300 flex items-center gap-2">
                    {language}
                    <ChevronDownIcon className="w-4 h-4" />
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-white shadow-lg border border-gray-200 mt-2">
                <DropdownMenuItem
                  onClick={() => setLanguage("EN")}
                  className="cursor-pointer hover:bg-[#f2f2f2] [font-family:'Poppins',Helvetica] text-[#333] text-base"
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("FR")}
                  className="cursor-pointer hover:bg-[#f2f2f2] [font-family:'Poppins',Helvetica] text-[#333] text-base"
                >
                  French
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
