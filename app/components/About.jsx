"use client";
import React from "react";
import Link from "next/link";
import AnimatedWrapper from "./AnimatedWrapper";

const About = () => {
  return (
    <>
      <section className="flex overflow-x-hidden bg-slate-100 flex-col xl:flex-row w-full justify-center items-center xl:w-full px-5 xl:px-20 pt-20 relative">
        {/* Left Side */}
        <AnimatedWrapper
          direction="left"
          duration={0.8}
          className="xl:w-2/3 xl:p-5 rounded-lg"
        >
          <h2 className="mb-4 text-2xl md:text-3xl xl:text-4xl font-bold border-b border-b-black pb-10 text-black">
            About Us
          </h2>
          <p className="mb-4 text-lg md:text-xl xl:text-2xl pt-10 text-black">
            {" "}
            Capital Associated Building Contracting LLC is a licensed Dubai contractor delivering villas, towers, and commercial builds across the UAE since 2021. We've completed 100+ projects covering 750,000+ sq ft of built-up area.
          </p>
          <details className="mt-10 group">
            <summary className="cursor-pointer list-none font-semibold text-black flex items-center gap-2 w-fit">
              <span>Company background</span>
              <span className="transition-transform duration-200 group-open:rotate-180">&#9662;</span>
            </summary>
            <div className="mt-4 flex flex-col gap-4">
              <p className="text-base leading-relaxed">
              Our portfolio includes custom villas in Jumeirah and Dubai Hills, commercial restaurant builds across multiple locations, and luxury residential developments in Tilal Al Ghaf — each delivered on programme, within budget, and to the quality standard agreed at contract.
              </p>
              <p className="text-base leading-relaxed">
              What separates us from other contracting companies in Dubai, UAE is how we manage the details that most clients never see — procurement relationships that reduce material costs by 18 to 25 percent, permit sequencing that eliminates weeks of idle time, and structured quality control from first pour to final handover. We handle the complexity so our clients focus on decisions, not coordination.
              </p>
            </div>
          </details>
        </AnimatedWrapper>

        {/* Right Side */}
        <AnimatedWrapper
          direction="right"
          duration={0.8}
          className="xl:w-2/4 w-full grid h-[70rem] xl:h-[36rem] xl:grid-cols-3 gap-5 xl:gap-2 xl:p-5 mt-[-100] xl:mt-0"
        >
          {/* First Row */}
          <div className="xl:col-span-1"></div>
          <div className="col-span-1 border hidden border-black xl:flex items-center justify-center xl:rounded-ss-full"></div>
          <div className="col-span-1 border border-black border-dashed hidden xl:flex items-center justify-center"></div>

          {/* Second Row */}
          <div className="col-span-1 border hidden border-black xl:flex items-center justify-center rounded-lg"></div>
          <div className="col-span-1 hover:bg-[url('/about1.jpg')] bg-cover bg-center transition-all duration-300 ease-out text-xl bg-black text-white flex items-center justify-center rounded-lg">
            {" "}
            VISION
          </div>
          <div className="col-span-1 hover:bg-[url('/about2.jpg')] bg-cover bg-center transition-all duration-300 ease-in-out text-xl bg-black text-white flex items-center justify-center rounded-lg xl:rounded-se-full">
            MISSION
          </div>

          {/* Third Row */}
          <div className="col-span-1 hover:bg-[url('/about3.jpg')] bg-cover bg-center transition-all duration-300 ease-in-out text-xl bg-black text-white flex items-center justify-center rounded-lg xl:rounded-es-full">
            QUALITY
          </div>
          <div className="col-span-1 hover:bg-[url('/about4.jpg')] bg-cover bg-center transition-all duration-300 ease-out text-xl bg-black text-white flex flex-col items-center justify-center rounded-lg xl:rounded-ee-full text-center px-2">
            <p>DOCUMENT CONTROL</p>
          </div>
          <div className="col-span-1"></div>
        </AnimatedWrapper>
      </section>
      <div className="flex justify-center align-center mb-20 bg-slate-100">
        <Link
          className="px-4 mb-5 mt-[-50] z-20 xl:mt-0 text-center py-2 text-xl md:text-2xl transiton-colors duration-300 ease-in-out text-black hover:text-black border-b border-b-black"
          href={"/about-us"}
        >
          Read More...
        </Link>
      </div>
    </>
  );
};

export default About;
