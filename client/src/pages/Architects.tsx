import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const bulletPoints = [
  "Preview materials directly on floors, walls, or countertops",
  "Compare finishes and patterns instantly",
  "Create multiple design versions in minutes",
  "Export visuals for client presentations",
];

export const Architects = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-w-[1440px] relative">
      <header className="w-full bg-white relative z-10">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-[92px] py-7">
          <h1 className="[font-family:'Montserrat',Helvetica] font-bold text-[#111111] text-[31px] tracking-[0] leading-[65px] whitespace-nowrap">
            ClicProduct
          </h1>
          <Button className="h-auto px-8 py-[15px] bg-[#111111] rounded-[200px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal] hover:bg-[#333333]">
            Log In
          </Button>
        </div>
      </header>

      <section className="relative w-full h-[720px]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Mask group"
          src="/mask-group.png"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <Card className="w-[1297px] rounded-[30px] border-[none] backdrop-blur-[22.85px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.85px)_brightness(100%)] bg-[linear-gradient(139deg,rgba(51,51,51,0.12)_0%,rgba(51,51,51,0.12)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[5px] before:rounded-[30px] before:[background:linear-gradient(140deg,rgba(17,17,17,0.24)_0%,rgba(0,3,26,0)_51%,rgba(75,75,75,0.24)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <CardContent className="flex flex-col items-center justify-center gap-6 p-[74px]">
              <h2 className="w-[1188px] [-webkit-text-stroke:2px_#a38062] [font-family:'Poppins',Helvetica] font-bold text-white text-[79px] text-center tracking-[0] leading-[87.7px]">
                Bring Ideas to Life. Visualize Every Detail with Confidence.
              </h2>

              <p className="w-[1088px] [font-family:'Poppins',Helvetica] font-medium text-white text-2xl text-center tracking-[0] leading-[28.8px]">
                Clicproduct Empowers Architects And Interior Designers To Turn
                Creative Concepts Into Realistic Visual Experiences.
                <br /> From Material Selection To Client Presentation,
                Everything Happens In One Elegant And Intelligent Platform —
                Built To Inspire Collaboration And Speed Up Decision-making.
              </p>

              <Button className="h-auto px-8 py-[15px] bg-white rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-[22px] tracking-[0] leading-[normal] hover:bg-gray-100">
                Book Demo
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-[92px] py-[110px]">
        <div className="flex items-start gap-[30px]">
          <div className="flex-1">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] tracking-[0.52px] leading-[72.8px] whitespace-nowrap mb-[83px]">
              Visualize with Realism
            </h2>

            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] tracking-[0] leading-[30.8px] mb-[93px]">
              No more guessing how a design will look once it&apos;s built.
              <br />
              With ClicProduct, you can instantly visualize marble, tiles, and
              surfaces in lifelike 3D environments.
              <br />
              Every texture, reflection, and color behaves naturally — just like
              it would in the real world.
            </p>

            <ul className="space-y-[39px]">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-[26px]">
                  <div className="w-[19px] h-[19px] rounded-[9.5px] border-[5px] border-solid border-black flex-shrink-0 mt-[6px]" />
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] tracking-[0] leading-[30.8px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-[305px] h-[375px] flex-shrink-0">
            <div className="absolute top-0 left-0 w-[305px] h-[375px] bg-white">
              <img
                className="w-full h-full object-cover"
                alt="Image"
                src="/image-102.png"
              />
            </div>
            <img
              className="absolute top-[110px] left-[143px] w-[305px] h-[365px] object-cover"
              alt="Image"
              src="/image-100.png"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#a3806214] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] py-[89px]">
        <div className="max-w-[1440px] mx-auto px-[92px]">
          <div className="flex items-center gap-[58px]">
            <div className="relative w-[486px] h-[337px] flex-shrink-0">
              <img
                className="w-full h-full rounded-md object-cover"
                alt="Video"
                src="/video.png"
              />
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[63px] h-[63px]"
                alt="Div absolute"
                src="/div-absolute.svg"
              />
            </div>

            <div className="flex-1">
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] tracking-[0.52px] leading-[54.1px] mb-[25px]">
                Simplify Project Management
              </h2>

              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] tracking-[0] leading-[30.8px]">
                Stay organized from concept to completion.
                <br /> ClicProduct keeps your materials, quotes, and client
                preferences synced in one place, so you can move faster and
                avoid costly mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-[92px] py-[128px]">
        <div className="flex flex-col items-center">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-5xl text-center tracking-[0] leading-[normal] mb-[72px]">
            Collaborate with Clients and Suppliers
          </h2>

          <p className="w-[882px] [font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-[22px] text-center tracking-[0] leading-[30.8px] mb-[125px]">
            Seamless communication is key to successful renovations.
            <br /> With ClicProduct, clients, designers, and suppliers can all
            collaborate visually — reviewing designs, materials, and changes in
            real time.
          </p>

          <div className="flex gap-[51px]">
            <div className="w-[470px] h-[359px] bg-[url(/image-12.png)] bg-cover bg-[50%_50%]" />
            <img
              className="w-[471px] h-[360px] object-cover"
              alt="Image"
              src="/image-15.png"
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-[92px] pb-[128px]">
        <Card className="bg-[#1b1b1b] rounded-2xl border border-solid border-[#4c4c4c]">
          <CardContent className="flex flex-col items-center gap-[21px] py-[45px] px-8">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[45px] text-center tracking-[0] leading-[normal]">
              Designed for Professionals Who Build
            </h2>

            <Button className="h-auto px-8 py-[15px] bg-white rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-[22px] tracking-[0] leading-[normal] hover:bg-gray-100">
              Get Started with Nirwana
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
