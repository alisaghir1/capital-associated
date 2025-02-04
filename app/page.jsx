"use client";
import Image from "next/image";
import About from "./components/About";
import OurProjects from "./components/OurProjects";
import OurServices from "./components/OurServices";
import OurTeam from "./components/OurTeam";
import Blogs from "./components/Blogs";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen overflow-x-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/main.jpg"
            alt="Background Image"
            layout="fill" // This will make the image cover the entire screen
            objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
          />
        </div>

        {/* Content on top of the image */}
        <div className="relative z-10  flex flex-col justify-center items-center w-full h-full">
          <motion.h1
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once:true, amount: 0.4 }}
            className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold"
          >
            Building Dubai’s skyline
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once:true, amount: 0.4 }}
            className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5"
          >
            one exceptional project at a time
          </motion.p>
        </div>
      </div>
      <About />
      <OurProjects />
      <OurServices />
      <OurTeam />
      <Blogs />
    </>
  );
}
