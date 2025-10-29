import React from "react";

const featureImages = [
  {
    src: "/beautiful-young-african-woman-sports-clothing-running-against-gr.png",
    alt: "Beautiful young",
    description: "Tailored features for marble slabs, tiles, and products.",
  },
  {
    src: "/beautiful-young-african-woman-sports-clothing-running-against-gr-1.png",
    alt: "Beautiful young",
    description: "Easy product uploads with sizes, finishes, and pricing.",
  },
  {
    src: "/beautiful-young-african-woman-sports-clothing-running-against-gr-2.png",
    alt: "Beautiful young",
    description: "Smart categorization designed for stone businesses.",
  },
];

const WhyForMarbleSellers = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-[92px] py-20">
      <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#111111] text-[68px] text-center tracking-[0] leading-[75.5px] mb-16">
        Why for Marble Sellers?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {featureImages.map((feature, index) => (
          <div key={index} className="flex flex-col gap-7">
            <img
              className="w-full h-[223px] rounded-md object-cover"
              alt={feature.alt}
              src={feature.src}
            />
            <p className="[font-family:'Poppins',Helvetica] font-medium text-neutral-800 text-xl tracking-[0] leading-[24.8px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyForMarbleSellers;
