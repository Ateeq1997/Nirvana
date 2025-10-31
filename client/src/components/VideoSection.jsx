"use client";
import React from "react";
import { Play } from "lucide-react"; // Play icon
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="relative w-full py-[92px] px-[111px]">
      <div className="flex gap-[60px] items-center">
        {/* ===== Left Image with Play Icon ===== */}
        <div className="relative w-[545px] h-[328px]">
          <img
            src="/video.png"
            alt="Video"
            className="w-full h-full rounded-md object-cover"
          />
          {/* Play Icon Centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-[80px] h-[80px] bg-white/80 rounded-full flex items-center justify-center cursor-pointer shadow-md"
            >
              <Play className="w-[36px] h-[36px] text-black" />
            </motion.div>
          </div>
        </div>

        {/* ===== Right Text Section ===== */}
        <div className="flex flex-col justify-center flex-1">
          <h2 className="w-[634px] [font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] tracking-[0.52px] leading-[64px] mb-[24px]">
            A Platform That Grows With You
          </h2>
          <p className="w-[604px] [font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] leading-[30.8px] mb-[40px]">
            Whether you produce 100 slabs a week or 10,000, <br />
            ClicProduct scales effortlessly with your business — integrating
            smoothly with your existing systems and workflows.
          </p>

          {/* Button (left-aligned) */}
          <motion.div
  whileHover={{
    scale: 1.05,
    backgroundColor: "#f5f5f5",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="rounded-[200px] inline-block"
>
  <Button className="h-auto px-8 py-[15px] bg-white rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-[22px] tracking-[0] leading-[normal] transition-all duration-300">
    {("hero2.button")}
  </Button>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
