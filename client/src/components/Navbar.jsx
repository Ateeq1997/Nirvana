"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter"; // ✅ correct for Wouter

import { ChevronDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language.toUpperCase());

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const navigationItems = [
    { label: t("navbar.home"), href: "/" },
    {
      label: t("navbar.products"),
      dropdown: [
        t("navbar.marbles"),
        t("navbar.retailers"),
        t("navbar.architects"),
        t("navbar.contractors"),
      ],
    },
    {
      label: t("navbar.crazy"),
      dropdown: [
        t("navbar.clicSoftware"),
        t("navbar.marbleWeb"),
        t("navbar.woodWeb"),
        t("navbar.marbleSeo"),
        t("navbar.marbleMarketing"),
        t("navbar.woodSeo"),
        t("navbar.woodMarketing"),
      ],
    },
    { label: t("navbar.about"), href: "/about" },
    { label: t("navbar.contact"), href: "/contact" },
  ];

  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-w-[1440px] relative">
      <header className="relative z-10 bg-white">
       <div className="max-w-[1440px] mx-auto px-[92px] py-7 flex items-center justify-between">
  {/* Logo with Text */}
  <div className="flex items-center">
    <img
      src="/figmaAssets/logo.png"
      alt="ClicProduct Logo"
      className="w-[45px] h-[45px] object-contain"
    />
    <span className="[font-family:'Montserrat',Helvetica] font-bold text-[#111111] text-[31px] tracking-[0] leading-[65px]">
      ClicProduct
    </span>
  </div>

          {/* Navigation */}
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
                      <ChevronDownIcon className="w-4 h-4 transition-transform duration-300" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="bg-white shadow-lg border border-gray-200"
                    >
               {item.dropdown.map((subItem, i) => {
  const isManufacturers = subItem === t("navbar.marbles"); 
  const isRetailers = subItem === t("navbar.retailers");
  const isArchitects = subItem === t("navbar.architects");

  return (
    <DropdownMenuItem
      key={i}
      className="[font-family:'Poppins',Helvetica] font-medium text-[#333333] text-base cursor-pointer hover:bg-[#f2f2f2] transition-colors"
    >
      {isManufacturers ? (
        <Link href="/Manufacturers">{subItem}</Link>
      ) : isRetailers ? (
        <Link href="/Retailers">{subItem}</Link>
      ) : isArchitects ? (
        <Link href="/Architects">{subItem}</Link>
      ) : (
        subItem
      )}
    </DropdownMenuItem>
  );
})}

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
            {/* 🔒 Login Button */}
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
              <Button className="h-[40px] px-10 bg-[#111111] rounded-[200px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[normal] transition-all duration-300">
                {t("navbar.login")}
              </Button>
            </motion.div>

            {/* 🌍 Language Dropdown */}
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
                  <Button className="h-[40px] px-10 bg-[#111111] rounded-[200px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[normal] flex items-center gap-2 min-w-[140px] justify-between">
                    <span className="flex items-center gap-2">
                      {language === "EN" ? "🇬🇧" : "🇫🇷"}
                      {language === "EN" ? "English" : "Français"}
                    </span>
                    <ChevronDownIcon className="w-4 h-4" />
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-white shadow-lg border border-gray-200 mt-2 rounded-lg">
                <DropdownMenuItem
                  onClick={() => changeLanguage("EN")}
                  className="cursor-pointer hover:bg-[#f2f2f2] [font-family:'Poppins',Helvetica] text-[#333] text-base flex items-center gap-2 px-4 py-2"
                >
                  🇬🇧 English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => changeLanguage("FR")}
                  className="cursor-pointer hover:bg-[#f2f2f2] [font-family:'Poppins',Helvetica] text-[#333] text-base flex items-center gap-2 px-4 py-2"
                >
                  🇫🇷 Français
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
