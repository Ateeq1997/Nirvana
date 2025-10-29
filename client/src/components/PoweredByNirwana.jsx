"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PoweredByNirwana = () => {
  // 🏠 Room cards on the right side
  const roomTypes = [
    {
      image: "/figmaAssets/rectangle-92.png",
      title: "Living Room",
      description:
        "As one of the most-frequented spots in the home, a living room sets the tone for the rest of the house.",
    },
    {
      image: "/figmaAssets/rectangle-92-1.png",
      title: "Bedroom",
      description:
        "Unleash your creativity to make it not only comfortable but also a pleasant place to start and end your day.",
    },
    {
      image: "/figmaAssets/rectangle-92-3.png",
      title: "Office",
      description:
        "The home office design ideas featured here are maximized for efficiency, optimized for space, and improvised for comfort by Spacejoy designers.",
    },
  ];

  // 🖼️ Images for slideshow
  const images = [
    "/figmaAssets/Rectangle 91.jpg",
    "/figmaAssets/image 106.png",
     "/figmaAssets/image 107.png",
     "/figmaAssets/image 108.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔄 Handlers for buttons
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-[92px] py-16 relative">
      <div className="flex gap-16">
        {/* ✅ Left Side: Main Image and Text */}
        <div className="flex-1">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] tracking-[0.52px] leading-[72.8px] mb-6">
            Powered by Nirwana.ai
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-base tracking-[0] leading-[22.4px] mb-8">
            Nirwana technology allows realistic, real-world previews of all your products without complex setups.
          </p>

          {/* ✅ Animated Image Showcase */}
          <div className="relative rounded-lg overflow-hidden h-[532px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Room Preview"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                whileHover={{ scale: 1.03 }}
              />
            </AnimatePresence>

            {/* ✅ Navigation Buttons */}
            <div className="absolute bottom-[28px] right-[28px] flex gap-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  onClick={handlePrev}
                  variant="outline"
                  className="w-20 h-20 bg-[#ffffffcf] rounded-lg backdrop-blur-[2px] backdrop-brightness-[100%] p-0 border border-[#ccc] transition-all hover:bg-white hover:shadow-lg"
                >
                  <ChevronLeftIcon className="w-10 h-10 text-[#111]" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  onClick={handleNext}
                  variant="outline"
                  className="w-20 h-20 bg-[#ffffffcf] rounded-lg backdrop-blur-[2px] backdrop-brightness-[100%] p-0 border border-[#ccc] transition-all hover:bg-white hover:shadow-lg"
                >
                  <ChevronRightIcon className="w-10 h-10 text-[#111]" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ✅ Right Side Cards */}
        <div className="w-[543px] flex flex-col gap-10">
          {roomTypes.map((room, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0 flex gap-6">
                  <motion.img
                    className="w-[202px] h-[202px] rounded-lg object-cover"
                    alt={room.title}
                    src={room.image}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="flex-1 flex flex-col">
                    <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#4b4b4b] text-2xl tracking-[0.24px] leading-[33.6px] mb-2">
                      {room.title}
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-base tracking-[0] leading-[22.4px] mb-auto">
                      {room.description}
                    </p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 250 }}
                      className="flex items-center gap-4 self-start mt-2"
                    >
                      <span className="[font-family:'Poppins',Helvetica] font-medium text-[#4b4b4b] text-[17px] tracking-[0.17px] leading-[23.8px]">
                        Read More
                      </span>
                      <ChevronRightIcon className="w-5 h-5 text-[#4b4b4b]" />
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Kitchen Section */}
      <div
  className="absolute left-[90px] -bottom-[210px] flex items-start gap-[54px]"
  style={{ zIndex: 5 }}
>
  {/* 🖼️ Animated Image */}
  <motion.img
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05, rotate: 1 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className="w-[600px] h-[260px] rounded-lg object-cover flex-shrink-0 cursor-pointer shadow-md"
    alt="Kitchen"
    src="/figmaAssets/rectangle-92-3.png"
  />

  <div className="flex flex-col justify-between py-1 max-w-[600px]">
    <div className="flex flex-col gap-[18px] w-full">
      <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#4b4b4b] text-[26px] tracking-[0.24px] leading-[33.6px]">
        Kitchen
      </h3>
      <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-base leading-[1.8] w-full">
        The kitchen is the heart of every home — a space where functionality meets style.
        With Nirwana.ai, you can preview how different materials, colors, and finishes will look in your kitchen before making any decision.
      </p>
    </div>

    {/* 🟦 Animated Button */}
    <motion.button
      whileHover={{ x: 5, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="flex items-center gap-4 self-start mt-2"
    >
      <span className="[font-family:'Poppins',Helvetica] font-medium text-[#4b4b4b] text-[17px] tracking-[0.17px] leading-[23.8px]">
        Read More
      </span>
      <ChevronRightIcon className="w-5 h-5 text-[#4b4b4b]" />
    </motion.button>
  </div>
</div>
    </section>
  );
};

export default PoweredByNirwana;
