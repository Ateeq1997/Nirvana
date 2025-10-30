import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const features = [
  "Track real-time inventory and slab availability",
  "Manage production schedules and quality checks",
  "Create instant quotes and invoices",
  "Monitor deliveries and client projects",
  "Reduce human errors and save time",
];

const visualizerFeatures = [
  {
    icon: "/vector.svg",
    text: "True-to-scale textures and natural veining",
  },
  {
    icon: "/vector-2.svg",
    text: "Accurate color, light, and surface reflection",
  },
  {
    icon: "/vector-1.svg",
    text: "Instant floor, wall, and countertop mapping",
  },
];

const Retailers = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-w-[1440px] relative">
      <header className="w-full h-[124px] bg-white relative z-10">
        <div className="flex items-center justify-between px-[92px] h-full">
          <h1 className="[font-family:'Montserrat',Helvetica] font-bold text-[#111111] text-[31px] tracking-[0] leading-[65px]">
            ClicProduct
          </h1>
          <Button className="w-[214px] h-auto px-8 py-[15px] bg-[#111111] rounded-[200px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[22px] hover:bg-[#111111]/90">
            Log In
          </Button>
        </div>
      </header>

      <section className="relative w-full h-[641px]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Mask group"
          src="/mask-group.png"
        />

        <div className="absolute top-[82px] left-1/2 -translate-x-1/2 w-[1297px] h-[469px]">
          <Card className="w-full h-full rounded-[30px] border-[5px] border-transparent backdrop-blur-[22.85px] bg-[linear-gradient(139deg,rgba(51,51,51,0.12)_0%,rgba(51,51,51,0.12)_100%)] [background-clip:padding-box] relative before:content-[''] before:absolute before:inset-0 before:p-[5px] before:rounded-[30px] before:[background:linear-gradient(140deg,rgba(17,17,17,0.24)_0%,rgba(0,3,26,0)_51%,rgba(75,75,75,0.24)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[-1] before:pointer-events-none">
            <CardContent className="flex flex-col items-center justify-center h-full gap-6 p-0">
              <h2 className="w-[1123px] [-webkit-text-stroke:2px_#a38062] [font-family:'Poppins',Helvetica] font-bold text-white text-[79px] text-center tracking-[0] leading-[87.7px]">
                From Workshop to World Simplify Every Step.
              </h2>
              <p className="w-[993px] [font-family:'Poppins',Helvetica] font-medium text-white text-2xl text-center tracking-[0] leading-[28.8px]">
                Clicproduct Is Built Specifically For Marble Manufacturers Who
                Want To Manage Their Entire Operation From One Intelligent
                Platform.
              </p>
              <Button className="w-[280px] h-auto px-8 py-[15px] bg-white rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-[22px] hover:bg-white/90">
                Book Demo
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="relative w-full py-[92px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] text-center tracking-[0.52px] leading-[72.8px] mb-[84px]">
          Built for Real Marble Operations
        </h2>

        <div className="flex gap-[21px] px-[102px]">
          <div className="flex flex-col gap-[84px]">
            <div className="w-[305px] h-[421px] bg-white rounded-md overflow-hidden relative">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="Getty images"
                src="/getty-images-7v1eetscsu0-unsplash.png"
              />
              <img
                className="absolute top-0 left-0 w-full h-full"
                alt="Image overlay"
                src="/image-100.png"
              />
            </div>
            <div className="w-[305px] h-[375px] bg-white">
              <img className="w-full h-full" alt="Image" src="/image-102.png" />
            </div>
          </div>

          <div className="flex-1 pt-[85px]">
            <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#4b4b4b] text-[26px] tracking-[0.26px] leading-[36.4px] mb-[57px]">
              Forget spreadsheets and manual updates
              <br />
              ClicProduct helps you:
            </h3>

            <ul className="flex flex-col gap-[44px]">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-[29px]">
                  <div className="w-[19px] h-[19px] rounded-full border-[5px] border-solid border-black flex-shrink-0 mt-[6px]" />
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] tracking-[0] leading-[30.8px]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[580px] bg-[#a3806214] backdrop-blur-[2px]">
        <div className="flex flex-col items-center justify-center h-full gap-[9px]">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] text-center tracking-[0.52px] leading-[72.8px]">
            Visualize Your Marble in 3D
          </h2>
          <p className="w-[967px] [font-family:'Poppins',Helvetica] font-medium text-neutral-800 text-xl text-center tracking-[0] leading-[24.8px] mb-[67px]">
            Let your customers explore your marble slabs in realistic 3D
            directly from your catalog.
            <br /> Our built-in visualizer shows:
          </p>

          <div className="flex flex-col gap-[30px]">
            {visualizerFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-[25px]">
                <div className="w-[54px] h-14 bg-ba-9e-76 flex items-center justify-center">
                  <img
                    className="w-[47px] h-[47px]"
                    alt="Feature icon"
                    src={feature.icon}
                  />
                </div>
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] tracking-[0] leading-[30.8px]">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full py-[92px] px-[111px]">
        <div className="flex gap-[32px] items-start">
          <img
            className="w-[545px] h-[328px] rounded-md object-cover"
            alt="Video"
            src="/video.png"
          />

          <div className="flex-1 pt-0">
            <h2 className="w-[634px] [font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] tracking-[0.52px] leading-[54.1px] mb-[40px]">
              A Platform That Grows With You
            </h2>
            <p className="w-[604px] [font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] tracking-[0] leading-[30.8px]">
              Whether you produce 100 slabs a week or 10,000,
              <br /> ClicProduct scales effortlessly with your business —
              integrating smoothly with your existing systems and workflows.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-[177px]">
          <Button className="w-[280px] h-auto px-8 py-[15px] bg-[#111111] rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-white text-[22px] hover:bg-[#111111]/90">
            Book Demo
          </Button>
        </div>
      </section>

      <section className="relative w-full px-[151px] pb-[673px]">
        <Card className="w-full h-[242px] bg-[#1b1b1b] rounded-2xl border border-solid border-[#4c4c4c]">
          <CardContent className="flex flex-col items-center justify-center h-full gap-[21px] p-0">
            <h2 className="w-[934px] [font-family:'Poppins',Helvetica] font-bold text-white text-[45px] text-center tracking-[0] leading-[normal]">
              Ready to Simplify Your Marble Business?
            </h2>
            <Button className="w-[341px] h-[63px] px-8 py-[15px] bg-white rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-[22px] hover:bg-white/90">
              Get Started with Nirwana
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
export default Retailers;