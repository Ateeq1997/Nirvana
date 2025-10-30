"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // ✅ Import i18n hook

const HowItWorks = () => {
  const { t } = useTranslation(); // ✅ Initialize translation

  // ✅ Translated steps
  const howItWorksSteps = [
    {
      image: "/figmaAssets/Purchase Securely.jpg",
      title: t("how_step1_title"),
      description: t("how_step1_desc"),
    },
    {
      image: "/figmaAssets/Ships From Warehouse.jpg",
      title: t("how_step2_title"),
      description: t("how_step2_desc"),
    },
    {
      image: "/figmaAssets/Style Your Room.jpg",
      title: t("how_step3_title"),
      description: t("how_step3_desc"),
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-[92px] py-16">
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] tracking-[0] leading-[normal] text-center mb-16">
        {t("how_heading")}
      </h2>

      {/* ✅ Animated Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {howItWorksSteps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={step.image}
              alt={step.title}
              className="w-[381px] h-[445px] mb-6 rounded-lg object-cover"
              whileHover={{
                scale: 1.07,
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-2xl tracking-[0] leading-[normal] mb-4 text-center">
              {step.title}
            </h3>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-lg text-center tracking-[0] leading-7">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
