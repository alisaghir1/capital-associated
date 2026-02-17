"use client";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

// Lazy load below-fold components with ssr:false — eliminates preload hints from head
const About = dynamic(() => import("./components/About"), { ssr: false });
const OurProjects = dynamic(() => import("./components/OurProjects"), { ssr: false });
const OurServices = dynamic(() => import("./components/OurServices"), { ssr: false });
const OurTeam = dynamic(() => import("./components/OurTeam"), { ssr: false });
const Blogs = dynamic(() => import("./components/Blogs"), { ssr: false });
const Consultation = dynamic(() => import("./components/Consultation"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });

export default function HomeClient() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <div className="relative w-full h-screen overflow-x-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/main.jpg"
            alt="Capital Associated Building Contracting - Leading Construction Company in Dubai"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Content on top of the image */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
          <motion.h1
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold"
          >
            From Vision to Skyline
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5"
          >
            Leading Developers in Dubai
          </motion.p>
        </div>
      </div>
      <About />
      <OurProjects />
      <OurServices />
      <OurTeam />
      <Blogs />
      <Consultation />
      <Footer />
    </>
  );
}
