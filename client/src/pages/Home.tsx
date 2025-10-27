import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TrendingDownIcon,
  ChevronDownIcon,
} from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigationItems = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#" },
  { label: "Crazy Pineapple", href: "#" },
  { label: "Contact Us", href: "#" },
];

const dashboardCards = [
  {
    title: "Submissions",
    value: "Total Sales",
    bgColor: "bg-[#111111]",
    textColor: "text-white",
    valueColor: "text-white",
    labelOpacity: "opacity-70",
  },
  {
    title: "Reports",
    value: "Total Reports",
    bgColor: "bg-white",
    textColor: "text-[#111111]",
    valueColor: "text-[#111111]",
    labelOpacity: "opacity-70",
  },
  {
    title: "Invoicing",
    value: "Total Invoicing",
    bgColor: "bg-white",
    textColor: "text-[#111111]",
    valueColor: "text-[#111111]",
    labelOpacity: "opacity-70",
  },
];

const roomTypes = [
  {
    image: "/figmaAssets/rectangle-92.png",
    title: "Living Room",
    description:
      "As one of the most-frequented spots in the home a living room sets the tone for the rest of the house.",
  },
  {
    image: "/figmaAssets/rectangle-92-1.png",
    title: "Bedroom",
    description:
      "Unleash your creativity to make not only comfortable but also a pleasant place to start and end your day.",
  },
  {
    image: "/figmaAssets/rectangle-92-3.png",
    title: "Office",
    description:
      "The home office design ideas featured here are maximized for efficiency, optimized for space, and improvised for comfort by Spacejoy designers.",
  },
];

const howItWorksSteps = [
  {
    image: "/figmaAssets/purchase-securely.png",
    title: "Choose Your Product",
    description:
      "Select what you sell (Marble, Wood, or Furniture) from the home page.",
  },
  {
    image: "/figmaAssets/ships-from-warehouse.png",
    title: "Explore Your Dashboard",
    description:
      "Get instant access to a personalized dashboard with Submissions, Reports, and Invoicing.",
  },
  {
    image: "/figmaAssets/style-your-room.png",
    title: "Manage & Grow",
    description:
      "Easily handle your tasks, track progress, and grow your business with powerful insights.",
  },
];

const faqItems = [
  { question: "What is ClickProducts?" },
  { question: "Can I customize the dashboard for my product type?" },
  { question: "Do I need technical skills to use ClickProducts?" },
  { question: "Is there a free trial available?" },
];

const footerQuickMenu = [
  { label: "About", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "#" },
];

const footerResources = [
  { label: "Newsletter", href: "#" },
  { label: "Community", href: "#" },
  { label: "WhatsApp", href: "#" },
  { label: "Member", href: "#" },
];

export const Home = (): JSX.Element => {
  return (
    <div className="bg-[#fcfcfc] overflow-hidden w-full min-w-[1440px] relative">
      <header className="relative z-10 bg-white">
        <div className="max-w-[1440px] mx-auto px-[92px] py-7 flex items-center justify-between">
          <div className="[font-family:'Montserrat',Helvetica] font-bold text-[#111111] text-[31px] tracking-[0] leading-[65px]">
            ClicProduct
          </div>

          <nav className="flex items-center gap-[42px]">
            {navigationItems.map((item, index) => {
              if (item.label === "Products") {
                return (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger className="flex items-center gap-1 [font-family:'Poppins',Helvetica] font-medium text-[#333333] text-lg tracking-[0] leading-[normal] outline-none">
                      {item.label}
                      <ChevronDownIcon className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white">
                      <DropdownMenuItem className="[font-family:'Poppins',Helvetica] font-medium text-[#333333] text-base cursor-pointer">
                        Product 1
                      </DropdownMenuItem>
                      <DropdownMenuItem className="[font-family:'Poppins',Helvetica] font-medium text-[#333333] text-base cursor-pointer">
                        Product 2
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <a
                  key={index}
                  href={item.href}
                  className="[font-family:'Poppins',Helvetica] font-medium text-[#333333] text-lg tracking-[0] leading-[normal]"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <Button className="h-auto px-8 py-[15px] bg-[#111111] rounded-[200px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal]">
            Log In
          </Button>
        </div>
      </header>

      <section className="relative h-[641px] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <img
            className="w-full h-full object-cover"
            alt="Background"
            src="/figmaAssets/2056-1.png"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center px-4">
          <div className="w-[917px] rounded-[30px] border-[none] backdrop-blur-[22.85px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.85px)_brightness(100%)] bg-[linear-gradient(139deg,rgba(51,51,51,0.12)_0%,rgba(51,51,51,0.12)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[5px] before:rounded-[30px] before:[background:linear-gradient(140deg,rgba(17,17,17,0.24)_0%,rgba(0,3,26,0)_51%,rgba(75,75,75,0.24)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none p-12">
            <h1 className="[-webkit-text-stroke:2px_#a38062] [font-family:'Poppins',Helvetica] font-bold text-white text-[85px] text-center tracking-[0] leading-[94.4px] mb-6">
              Transform Slabs Into Sales
            </h1>

            <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-2xl text-center tracking-[0] leading-[28.8px] max-w-[728px] mx-auto mb-6">
              Clickproducts Allows Customers To Preview Products In Real-world
              Environments Before Buying, Making Visualization Simple And
              Realistic.
            </p>

            <div className="flex justify-center">
              <Button className="h-auto px-8 py-[15px] bg-white rounded-[200px] border border-solid border-[#00000061] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-[22px] tracking-[0] leading-[normal]">
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-[92px] py-16">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#111111] text-[68px] text-center tracking-[0] leading-[75.5px] mb-12">
          What do you sell?
        </h2>

        <div className="flex justify-center mb-16">
          <div className="bg-[#a380620a] rounded-[51px] p-[35px] inline-flex gap-[58px]">
            <Button className="h-auto w-[432px] px-8 py-[15px] bg-[#111111] rounded-[200px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal]">
              Marble Manufacturers
            </Button>
            <Button
              variant="outline"
              className="h-auto w-[432px] px-8 py-[15px] bg-white rounded-[200px] border border-solid border-[#00000033] [font-family:'Poppins',Helvetica] font-semibold text-[#111111] text-[22px] tracking-[0] leading-[normal]"
            >
              Wood
            </Button>
          </div>
        </div>

        <div className="relative">
          <Card className="bg-[#a3806214] rounded-lg border border-solid border-[#00000024] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
            <CardContent className="p-12 flex gap-8">
              <div className="flex-1">
                <img
                  className="w-full h-[577px] object-cover rounded-lg"
                  alt="Dashboard Preview"
                  src="/figmaAssets/image-99.png"
                />
              </div>

              <div className="w-[300px] flex flex-col gap-6">
                {dashboardCards.map((card, index) => (
                  <Card
                    key={index}
                    className={`${card.bgColor} border-[#313d4f] shadow-[0px_4px_6.8px_#00000040] rounded-[14px] border border-solid`}
                  >
                    <CardContent className="p-6">
                      <div
                        className={`${card.labelOpacity} [font-family:'Poppins',Helvetica] font-semibold ${card.valueColor} text-base tracking-[0] leading-[normal] mb-2`}
                      >
                        {card.value}
                      </div>
                      <div
                        className={`[font-family:'Poppins',Helvetica] font-bold ${card.textColor} text-[28px] tracking-[1.00px] leading-[normal] mb-2`}
                      >
                        {card.title}
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingDownIcon className="w-4 h-4 text-[#f93c65]" />
                        <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#f93c65] text-base tracking-[0] leading-[normal]">
                          4.3%
                        </span>
                        <span
                          className={`[font-family:'Poppins',Helvetica] font-semibold ${card.textColor === "text-white" ? "text-[#e6e6e6]" : "text-[#111111]"} text-base tracking-[0] leading-[normal]`}
                        >
                          Down from yesterday
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Button className="h-auto px-8 py-[15px] bg-[#111111] rounded-[200px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal] w-full">
                  See Full Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-[92px] py-16">
        <div className="flex gap-16">
          <div className="flex-1">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] tracking-[0.52px] leading-[72.8px] mb-6">
              Powered by Nirwana.ai
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-base tracking-[0] leading-[22.4px] mb-8">
              Nirwana technology allows realistic, real-world previews of all
              your products without complex setups.
            </p>

            <div className="relative bg-[#f5f2f0] rounded-lg p-7">
              <img
                className="w-full h-[532px] object-cover rounded-lg"
                alt="Room Preview"
                src="/figmaAssets/rectangle-91.png"
              />
              
              <div className="absolute bottom-[28px] right-[28px] flex gap-4">
                <Button
                  variant="outline"
                  className="w-20 h-20 bg-[#ffffffcf] rounded-lg backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] p-0"
                >
                  <ChevronLeftIcon className="w-10 h-10" />
                </Button>
                <Button
                  variant="outline"
                  className="w-20 h-20 bg-[#ffffffcf] rounded-lg backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] p-0"
                >
                  <ChevronRightIcon className="w-10 h-10" />
                </Button>
              </div>
            </div>

            <div className="flex gap-8 items-center mt-12">
              <img
                className="w-[461px] h-[202px] rounded-lg object-cover"
                alt="Kitchen"
                src="/figmaAssets/rectangle-92-3.png"
              />
              <div className="flex items-center gap-8 flex-1">
                <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#4b4b4b] text-2xl tracking-[0.24px] leading-[33.6px] whitespace-nowrap">
                  kitchen
                </h3>
                <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-base tracking-[0] leading-[22.4px] flex-1">
                  The kitchen is the heart of every home — a space where functionality meets style. With Nirwana.ai, you can preview how different materials, colors, and finishes will look in your kitchen before making any decision.
                </p>
                <div className="flex items-center gap-4 whitespace-nowrap">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#4b4b4b] text-[17px] tracking-[0.17px] leading-[23.8px]">
                    Read More
                  </span>
                  <ArrowRightIcon className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[543px] flex flex-col gap-10">
            {roomTypes.map((room, index) => (
              <Card
                key={index}
                className="border-none shadow-none bg-transparent"
              >
                <CardContent className="p-0 flex gap-6">
                  <img
                    className="w-[202px] h-[202px] rounded-lg object-cover"
                    alt={room.title}
                    src={room.image}
                  />
                  <div className="flex-1 flex flex-col">
                    <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#4b4b4b] text-2xl tracking-[0.24px] leading-[33.6px] mb-2">
                      {room.title}
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#4b4b4b] text-base tracking-[0] leading-[22.4px] mb-auto">
                      {room.description}
                    </p>
                    <div className="flex items-center gap-6 mt-4">
                      <span className="[font-family:'Poppins',Helvetica] font-medium text-[#4b4b4b] text-[17px] tracking-[0.17px] leading-[23.8px]">
                        Read More
                      </span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-[92px] py-16">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-5xl text-center tracking-[0] leading-[normal] mb-12">
          Explore the Future of Visualization with Nirwana.ai
        </h2>

        <div className="flex justify-center">
          <img
            className="w-[1145px] h-[472px]"
            alt="Visualization Gallery"
            src="/figmaAssets/group-113.png"
          />
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-[92px] py-16">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-font-color text-[52px] tracking-[0] leading-[normal] text-center mb-16">
          How It Works
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                className="w-[381px] h-[445px] mb-6"
                alt={step.title}
                src={step.image}
              />
              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-font-color text-2xl tracking-[0] leading-[normal] mb-4 text-center">
                {step.title}
              </h3>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-font-color1 text-lg text-center tracking-[0] leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-[92px] py-16">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#111111] text-[78.4px] text-center tracking-[0] leading-[normal] mb-8">
          FAQs
        </h2>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-[#111111] text-[28.2px] text-center tracking-[0] leading-[normal] mb-16 max-w-[560px] mx-auto">
          Explore our FAQs for quick answers to common queries about our
          platform.
        </p>

        <div className="max-w-[982px] mx-auto">
          <Accordion type="single" collapsible className="space-y-8">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#1b1b1b] rounded-2xl border border-solid border-[#4c4c4c] px-12 py-0"
              >
                <AccordionTrigger iconType="arrow" className="[font-family:'Poppins',Helvetica] font-normal text-white text-[28.2px] tracking-[0] leading-[normal] py-7 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                    Answer content goes here
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="max-w-[1440px] mx-auto px-[92px] py-16">
        <div className="grid grid-cols-4 gap-12 mb-12">
          <div>
            <div className="[font-family:'Montserrat',Helvetica] font-bold text-[#111111] text-[31px] tracking-[0] leading-[65px] mb-6">
              ClicProduct
            </div>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#111111] text-[21.6px] tracking-[0] leading-[normal]">
              Our vision is to empower businesses with intuitive and efficient
              software solutions that foster innovation and drive success.
            </p>
          </div>

          <div>
            <h3 className="[font-family:'Poppins',Helvetica] font-normal text-[#111111] text-[28.3px] tracking-[0] leading-[normal] mb-6">
              Quick Menu
            </h3>
            <nav className="flex flex-col gap-4">
              {footerQuickMenu.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="[font-family:'Poppins',Helvetica] font-normal text-[#111111] text-[19px] tracking-[0] leading-[normal]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="[font-family:'Poppins',Helvetica] font-normal text-[#111111] text-[28.3px] tracking-[0] leading-[normal] mb-6">
              Resources
            </h3>
            <nav className="flex flex-col gap-4">
              {footerResources.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="[font-family:'Poppins',Helvetica] font-normal text-[#111111] text-[19px] tracking-[0] leading-[normal]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="[font-family:'Poppins',Helvetica] font-normal text-[#111111] text-[28.3px] tracking-[0] leading-[normal] mb-4">
              Subscribe to our blog
            </h3>
            <p className="[font-family:'Poppins',Helvetica] font-medium text-[#111111] text-base tracking-[0] leading-[normal] mb-6">
              Subscribe now to get the latest insights on product visualization,
              dashboard management, and AI-driven tools.
            </p>
            <div className="relative">
              <Input
                placeholder="Enter your Email"
                className="h-[99px] bg-[#111111] rounded-[50px] border-none [font-family:'Poppins',Helvetica] font-light text-white text-[16.9px] tracking-[0] leading-[normal] pr-[170px]"
              />
              <Button className="absolute right-[13px] top-[18px] h-[63px] w-[150px] bg-white rounded-[50px] [font-family:'Poppins',Helvetica] font-medium text-[#111111] text-[18.6px] text-center tracking-[0] leading-[normal]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#111111] pt-8">
          <div className="flex items-center justify-between">
            <p className="[font-family:'Poppins',Helvetica] font-light text-[#111111] text-[17.9px] tracking-[0] leading-[normal]">
              @ 2024 SaaStream&nbsp;&nbsp;All Rights Reserved
            </p>

            <div className="flex gap-4">
              <div className="w-[45px] h-[45px] rounded-[22.35px] border-[0.96px] border-solid border-[#111111] flex items-center justify-center">
                <img
                  className="w-[27px] h-[27px]"
                  alt="LinkedIn"
                  src="/figmaAssets/vector.svg"
                />
              </div>
              <div className="w-[45px] h-[45px] rounded-[22.35px] border-[0.96px] border-solid border-[#111111] flex items-center justify-center">
                <img
                  className="w-[29px] h-[23px]"
                  alt="Twitter"
                  src="/figmaAssets/vector-1.svg"
                />
              </div>
              <div className="w-[45px] h-[45px] rounded-[22.35px] border-[0.96px] border-solid border-[#111111] flex items-center justify-center">
                <img
                  className="w-0 h-[36px]"
                  alt="Facebook"
                  src="/figmaAssets/vector-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
