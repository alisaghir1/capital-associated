"use client";
import React from "react";
import Link from "next/link";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="flex overflow-x-hidden bg-slate-100 flex-col xl:flex-row w-full justify-center items-center xl:w-full px-5 xl:px-20 pt-20 relative">
        {/* Left Side */}
        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="xl:w-2/3 xl:p-5 rounded-lg "
        >
          <h1 className="mb-4 lg:text-3xl text-2xl xl:text-4xl font-bold border-b border-b-black pb-10 text-black">
            About Us
          </h1>
          <p className="mb-4 lg:text-3xl text-2xl xl:text-4xl font-bold pt-10 text-black">
            {" "}
            CABC is a prominent construction company based in Dubai, United Arab
            Emirates.
          </p>
          <p className="text-base leading-relaxed mt-20">
            With a rich legacy of excellence in the construction industry, we
            have been at the forefront of shaping Dubai&apos;s skyline and
            contributing to its rapid development.
          </p>
          <p className="text-base leading-relaxed mt-5">
            At CABC, we are driven by a strong commitment to delivering
            exceptional construction solutions that meet the highest standards
            of quality, innovation, and sustainability. With our extensive
            experience and expertise, we undertake a diverse range of projects,
            including commercial complexes, residential towers, industrial
            facilities, and infrastructure developments.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={fadeIn("right", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="xl:w-2/4 w-full grid h-[70rem] xl:h-[36rem] xl:grid-cols-3 gap-5 xl:gap-2 xl:p-5 mt-[-100] xl:mt-0"
        >
          {/* First Row */}
          <div className="xl:col-span-1"></div>
          <div className="col-span-1  border  hidden border-black  xl:flex items-center justify-center xl:rounded-ss-full "></div>
          <div className="col-span-1  border border-black border-dashed hidden xl:flex items-center justify-center"></div>

          {/* Second Row */}
          <div className="col-span-1  border hidden border-black xl:flex items-center justify-center rounded-lg "></div>
          <div className="col-span-1  hover:bg-[url('/about1.JPG')] bg-cover bg-center transition-all duration-300 ease-out text-xl bg-black text-white flex items-center justify-center rounded-lg ">
            {" "}
            VISION
          </div>
          <div className="col-span-1 hover:bg-[url('/about2.jpg')] bg-cover bg-center transition-all duration-300 ease-in-out text-xl bg-black  text-white flex items-center justify-center rounded-lg xl:rounded-se-full ">
            MISSION
          </div>

          {/* Third Row */}
          <div className="col-span-1 hover:bg-[url('/about3.jpg')] bg-cover bg-center transition-all duration-300 ease-in-out text-xl bg-black text-white flex items-center justify-center rounded-lg xl:rounded-es-full ">
            QUALITY
          </div>
          <div className="col-span-1 hover:bg-[url('/about4.jpg')] bg-cover bg-center transition-all duration-300 ease-out text-xl  bg-black  text-white  flex flex-col items-center justify-center rounded-lg xl:rounded-ee-full ">
            <p>Document Control</p>
            <p>MESSAGE</p>
          </div>
          <div className="col-span-1"></div>
        </motion.div>
        {/* Read More Button */}
      </div>
      <div className="flex justify-center align-center mb-20 bg-slate-100">
        <Link
          className="px-4 mb-5 mt-[-50] z-20 xl:mt-0 text-center  py-2 text-3xl transiton-colors duration-300 ease-in-out text-black hover:text-black border-b border-b-black"
          href={"/about-us"}
        >
          Read More...
        </Link>
      </div>
    </>
  );
};

export default About;
