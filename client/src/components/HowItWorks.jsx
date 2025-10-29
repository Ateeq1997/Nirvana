"use client";
import React from "react";
import { motion } from "framer-motion";

const howItWorksSteps = [
  {
    image: "/figmaAssets/Purchase Securely.jpg",
    title: "Choose Your Product",
    description:
      "Select what you sell (Marble, Wood, or Furniture) from the home page.",
  },
  {
    image: "/figmaAssets/Ships From Warehouse.jpg",
    title: "Explore Your Dashboard",
    description:
      "Get instant access to a personalized dashboard with Submissions, Reports, and Invoicing.",
  },
  {
    image: "/figmaAssets/Style Your Room.jpg",
    title: "Manage & Grow",
    description:
      "Easily handle your tasks, track progress, and grow your business with powerful insights.",
  },
];

const HowItWorks = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-[92px] py-16">
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] tracking-[0] leading-[normal] text-center mb-16">
        How It Works
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
