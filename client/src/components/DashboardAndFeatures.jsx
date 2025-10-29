import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const metricsData = [
  {
    title: "Submissions",
    description: "Receive customer requests instantly.",
    current: 300,
    total: 1000,
    percentage: 30,
  },
  {
    title: "Repair Vehicle",
    description: "Last Paid on August 01, 2022",
    current: 900,
    total: 1000,
    percentage: 90,
  },
  {
    title: "Donation",
    description: "Last Paid on August 20, 2022",
    current: 200,
    total: 1000,
    percentage: 20,
  },
];

const DashboardAndFeatures = () => {
  return (
    <>
      {/* 🟢 Dashboard Preview Section */}
      <section className="w-full max-w-[1440px] mx-auto px-[92px] py-20">
        <div className="bg-[#a3806214] rounded-lg border border-solid border-[#00000024] backdrop-blur-[2px] backdrop-brightness-[100%] p-12 flex flex-col items-center gap-8">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[52px] text-center tracking-[0.52px] leading-[72.8px]">
            Dashboard Preview
          </h2>

          <p className="[font-family:'Poppins',Helvetica] font-medium text-neutral-800 text-xl text-center tracking-[0] leading-[24.8px] max-w-[502px]">
            Your sales. Your data. Organized in one place.
          </p>

          <img
            className="w-full max-w-[1104px] h-auto object-cover rounded-lg"
            alt="Dashboard preview"
            src="/image-99.png"
          />

          <Button className="h-auto px-8 py-[15px] bg-[#111111] rounded-[200px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[22px]">
            See Full Dashboard
          </Button>
        </div>
      </section>

      {/* 🟣 Features Section */}
      <section className="w-full max-w-[1440px] mx-auto px-[92px] py-20">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[33px] text-center tracking-[0.33px] leading-[46.2px] mb-12">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metricsData.map((metric, index) => (
            <Card
              key={index}
              className="bg-basewhite border-slate-200 shadow-shadow-1"
            >
              <CardContent className="p-6 flex flex-col gap-[18px]">
                <div className="flex flex-col gap-2">
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-neutral-90 text-lg tracking-[-0.36px] leading-6">
                    {metric.title}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-neutral-70 text-xs tracking-[0] leading-[18px]">
                    {metric.description}
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-end justify-between">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-lg">
                      <span className="text-[#111111] tracking-[-0.06px] leading-6">
                        ${metric.current}{" "}
                      </span>
                      <span className="text-[#b7b6f6] text-xs tracking-[0]">
                        / ${metric.total}
                      </span>
                    </div>
                    <span className="font-text-sm-regular text-[#5a6776] text-sm">
                      {metric.percentage}%
                    </span>
                  </div>

                  <Progress
                    value={metric.percentage}
                    className="h-2.5 bg-violet-200"
                  >
                    <div
                      className="h-full bg-[#111111] rounded-md transition-all"
                      style={{ width: `${metric.percentage}%` }}
                    />
                  </Progress>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default DashboardAndFeatures;
