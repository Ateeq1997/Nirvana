"use client";
import React from "react";
import { motion } from "framer-motion";

const ExploreVisualization = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-[92px] py-16 mt-[250px]">
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-5xl text-center tracking-[0] leading-[normal] mb-12">
        Explore the Future of Visualization with Nirwana.ai
      </h2>

      {/* ✅ Animated 3 Images with specific rounded corners */}
      <div className="flex justify-center gap-8 items-end">
        {/* Left Image - Top Left Rounded */}
        <motion.img
          src="/figmaAssets/Mask Group (2).png"
          alt="Visualization 1"
          className="w-[360px] h-[472px] object-cover rounded-tl-[40px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />

        {/* Middle Image - Slightly Up */}
        <motion.img
          src="/figmaAssets/Mask Group (1).png"
          alt="Visualization 2"
          className="w-[360px] h-[472px] object-cover relative -top-8 rounded-[20px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />

        {/* Right Image - Bottom Right Rounded */}
        <motion.img
          src="/figmaAssets/Mask Group.png"
          alt="Visualization 3"
          className="w-[360px] h-[472px] object-cover rounded-br-[40px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
};

export default ExploreVisualization;
