import Link from "next/link";
import React from "react";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const OurServices = () => {
  return (
    <div className="bg-offwhite pb-10">
      <section className="flex flex-col justify-center items-center gap-5 py-20">
        <motion.h1
          variants={fadeIn("down", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="lg:text-3xl text-2xl xl:text-4xl"
        >
          Our Services
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="lg:text-2xl text-xl xl:text-3xl"
        >
          Building Dreams, Crafting Futures.
        </motion.p>
      </section>

      <motion.section
        variants={fadeIn("up", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 pb-10 border-b border-b-black"
      >
        {/* First Row */}

        <Link href={"/services/general-contracting"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-transparent transition-all duration-300 ease-in-out text-center flex justify-center items-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              >
                General Contracting
              </div>
              {/* Top-right part */}
              <div
                className="bg-black border transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:bg-[url('/services/s1.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-black rounded-es-full transition-all duration-300 ease-in-out group-hover:bg-[url('/services/s1.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-bottom cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              ></div>
              {/* Bottom-right part */}
              <div
                className="bg-black rounded-ee-full transition-all duration-300 ease-in-out group-hover:bg-[url('/services/s1.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-bottom cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              ></div>
            </div>
          </div>
        </Link>

        {/* Second Row */}
        <Link href={"/services/constructionManagement"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-transparent transition-all duration-300 ease-in-out flex justify-center text-center items-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              >
                Construction Management
              </div>
              {/* Top-right part */}
              <div
                className="bg-black transition-all duration-300 ease-in-out group-hover:bg-[url('/services/s2.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-black rounded-es-full transition-all duration-300 ease-in-out group-hover:bg-[url('/services/s2.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-bottom cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              ></div>
              {/* Bottom-right part */}
              <div
                className="bg-black rounded-ee-full transition-all duration-300 ease-in-out group-hover:bg-[url('/services/s2.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-bottom cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              ></div>
            </div>
          </div>
        </Link>

        {/* Third Row */}
        <Link href={"/services/design-build"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-transparent transition-all duration-300 ease-in-out flex justify-center items-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              >
                Design Build
              </div>
              {/* Top-right part */}
              <div
                className="bg-black transition-all duration-300 ease-in-out group-hover:bg-[url('/services/s3.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-black rounded-es-full transition-all duration-300 ease-in-out group-hover:bg-[url('/services/s3.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-bottom cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              ></div>
              {/* Bottom-right part */}
              <div
                className="bg-black rounded-ee-full transition-all duration-300 ease-in-out group-hover:bg-[url('/services/s3.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-bottom cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              ></div>
            </div>
          </div>
        </Link>
      </motion.section>
      <motion.section
        variants={fadeIn("up", 1.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 py-10 border-b border-b-black"
      >
        {/* Second Row */}
        <Link href={"/services/renovation-and-remodeling"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-black rounded-ss-full flex justify-center text-center items-center border group-hover:bg-[url('/services/s4.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              ></div>
              {/* Top-right part */}
              <div
                className="bg-black rounded-se-full group-hover:bg-[url('/services/s4.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-transparent border border-black flex justify-center items-center text-center group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              >
                Renovation & Remodeling
              </div>
              {/* Bottom-right part */}
              <div
                className="bg-black group-hover:bg-[url('/services/s4.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-bottom cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              ></div>
            </div>
          </div>
        </Link>

        <Link href={"/services/pre-construction-services"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-black rounded-ss-full flex justify-center text-center items-center border group-hover:bg-[url('/services/s5.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              ></div>
              {/* Top-right part */}
              <div
                className="bg-black rounded-se-full group-hover:bg-[url('/services/s5.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-transparent border border-black flex justify-center items-center text-center group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              >
                Pre-Construction Services
              </div>
              {/* Bottom-right part */}
              <div
                className="bg-black group-hover:bg-[url('/services/s5.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-bottom cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              ></div>
            </div>
          </div>
        </Link>

        <Link href={"/services/value Engineering"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-black rounded-ss-full flex justify-center text-center items-center border group-hover:bg-[url('/services/s6.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              ></div>
              {/* Top-right part */}
              <div
                className="bg-black rounded-se-full group-hover:bg-[url('/services/s6.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-transparent border border-black flex justify-center items-center text-center group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              >
                Value Engineering
              </div>
              {/* Bottom-right part */}
              <div
                className="bg-black group-hover:bg-[url('/services/s6.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-bottom cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              ></div>
            </div>
          </div>
        </Link>
      </motion.section>
      <motion.section
        variants={fadeIn("up", 1.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 py-10 border-b border-b-black"
      >
        {/* Second Row */}
        <Link href={"/services/green-building-solutions"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-black rounded-ss-full flex justify-center text-center items-center border group-hover:bg-[url('/services/s7.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              ></div>
              {/* Top-right part */}
              <div
                className="bg-black rounded-se-full group-hover:bg-[url('/services/s7.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-black group-hover:bg-[url('/services/s7.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-bottom cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              ></div>
              {/* Bottom-right part */}
              <div
                className="bg-transparent flex justify-center items-center text-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              >
                Green Building Solutions
              </div>
            </div>
          </div>
        </Link>

        <Link href={"/services/specialty-construction"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-black rounded-ss-full flex justify-center text-center items-center border group-hover:bg-[url('/services/s8.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              ></div>
              {/* Top-right part */}
              <div
                className="bg-black rounded-se-full group-hover:bg-[url('/services/s8.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-black group-hover:bg-[url('/services/s8.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-bottom cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              ></div>
              {/* Bottom-right part */}
              <div
                className="bg-transparent flex justify-center items-center text-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              >
                Specialty Construction
              </div>
            </div>
          </div>
        </Link>

        <Link href={"/services/interior-fit-out"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-black rounded-ss-full flex justify-center text-center items-center border group-hover:bg-[url('/services/s9.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              ></div>
              {/* Top-right part */}
              <div
                className="bg-black rounded-se-full group-hover:bg-[url('/services/s9.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-black group-hover:bg-[url('/services/s9.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-bottom cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              ></div>
              {/* Bottom-right part */}
              <div
                className="bg-transparent flex justify-center items-center text-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              >
                Interior Fit-Out
              </div>
            </div>
          </div>
        </Link>
      </motion.section>
    </div>
  );
};

export default OurServices;
