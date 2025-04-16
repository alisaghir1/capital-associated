import React from "react";
import Link from "next/link";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const OurProjects = () => {
  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-5 my-20">
        <motion.h1
          variants={fadeIn("down", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="lg:text-3xl text-2xl xl:text-4xl"
        >
          Our Projects
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="lg:text-2xl text-xl xl:text-3xl"
        >
          Building Dreams, Crafting Futures.
        </motion.p>
      </section>

      <motion.section
        variants={fadeIn("down", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 px-5 xl:mx-20 mb-20"
      >
        {/* Residental Tower */}
        <Link href="/our-work/residentalTowerDubai" className="block">
          <div className="relative hover:bg-[url(/projects/residentalTower.jpg)] bg-black flex transition-all duration-300 ease-in-out pb-4 items-end justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-tl-full">
            <div className="text-white xl:p-3 rounded-lg w-full text-start">
              <h2 className="xl:text-lg text-md mb-2 font-semibold">
                Residental Tower
              </h2>
              <p className="xl:text-sm text-xs">Dubai, United Arab Emirates</p>
            </div>
          </div>
        </Link>

        {/* Villa */}
        <Link href="/our-work/villaDubai" className="block">
          <div className="relative hover:bg-[url(/projects/villa.jpg)] bg-black flex transition-all duration-300 ease-in-out pt-4 items-start justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-bl-full">
            <div className="text-white xl:p-3 rounded-lg w-full text-start">
              <h2 className="xl:text-lg text-md mb-2 font-semibold">Villa</h2>
              <p className="xl:text-sm text-xs">
                Dubai Hills, United Arab Emirates
              </p>
            </div>
          </div>
        </Link>

        {/* Residental Tower - Sharjah */}
        <Link href="/our-work/residentalTowerSharjah" className="block">
          <div className="relative hover:bg-[url(/projects/residentalbuildinggg.jpg)] bg-black flex transition-all duration-300 ease-in-out pb-4 items-end justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-tr-full">
            <div className="text-white xl:p-3 rounded-lg w-full text-start">
              <h2 className="xl:text-lg text-md mb-2 font-semibold">
                Residental Tower
              </h2>
              <p className="xl:text-sm text-xs">
                Sharjah, United Arab Emirates
              </p>
            </div>
          </div>
        </Link>

        {/* Commercial Building */}
        <Link href="/our-work/commercialBuilding" className="block">
          <div className="relative hover:bg-[url(/projects/commercialBuilding.jpg)] bg-black flex transition-all duration-300 ease-in-out pb-4 items-end justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-tr-full">
            <div className="text-white xl:p-3 rounded-lg w-full text-start">
              <h2 className="xl:text-lg text-md mb-2 font-semibold">
                Commercial Building
              </h2>
              <p className="xl:text-sm text-xs">
                Sharjah, United Arab Emirates
              </p>
            </div>
          </div>
        </Link>

        {/* Residental Building */}
        <Link href="/our-work/residentalBuildingSharjah" className="block">
          <div className="relative hover:bg-[url(/projects/residentalBuilding.jpg)] bg-black flex transition-all duration-300 ease-in-out pb-4 items-end justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-tl-full">
            <div className="text-white xl:p-3 rounded-lg w-full text-start">
              <h2 className="xl:text-lg text-md mb-2 font-semibold">
                Residental Building
              </h2>
              <p className="xl:text-sm text-xs">
                Sharjah, United Arab Emirates
              </p>
            </div>
          </div>
        </Link>

        {/* Warehouse */}
        <Link href="/our-work/warehouseAlQouz" className="block">
          <div className="relative hover:bg-[url(/projects/warehouse.jpg)] bg-black flex transition-all duration-300 ease-in-out pt-4 items-start justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-br-full">
            <div className="text-white xl:p-3 rounded-lg w-full text-start">
              <h2 className="xl:text-lg text-md mb-2 font-semibold">
                Warehouse
              </h2>
              <p className="xl:text-sm text-xs">
                Dubai, United Arab Emirates
              </p>
            </div>
          </div>
        </Link>

        {/* Residental Building 2 */}
        <Link href="/our-work/residentalBuildingSharjah2" className="block">
          <div className="relative hover:bg-[url(/projects/residentalbuildingg.jpg)] bg-black flex transition-all duration-300 ease-in-out pb-4 items-end justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-tl-full">
            <div className="text-white xl:p-3 rounded-lg w-full text-start">
              <h2 className="xl:text-lg text-md mb-2 font-semibold">
                Residental Building
              </h2>
              <p className="xl:text-sm text-xs">
                Sharjah, United Arab Emirates
              </p>
            </div>
          </div>
        </Link>

        {/* Meat Moot */}
        <Link href="/our-work/meatmoot" className="block">
          <div className="relative hover:bg-[url(/projects/meatmoot.jpg)] bg-black flex transition-all duration-300 ease-in-out pt-4 items-start justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-br-full">
            <div className="text-white xl:p-3 rounded-lg w-full text-start">
              <h2 className="xl:text-lg text-md mb-2 font-semibold">Meat Moot</h2>
              <p className="xl:text-sm text-xs">
                Dubai, United Arab Emirates
              </p>
            </div>
          </div>
        </Link>
      </motion.section>

      <div className="flex justify-center align-center mb-20">
        <Link
          className="px-4 mb-5 z-20 xl:mt-0 text-center py-2 text-3xl transition-colors duration-300 ease-in-out text-black hover:text-black border-b border-b-black"
          href="/our-work"
        >
          Visit Projects Page
        </Link>
      </div>
    </div>
  );
};

export default OurProjects;
