"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import VidioComponent from "../components/VidioComponent";

const OurWorkLayout = () => {
  return (
    <div className="h-full w-full">
      <div className="relative w-full h-screen">
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
          <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
            Our Projects
          </h1>
          <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
          Designing Landmarks. Defining Skylines
          </p>
          <p className="absolute bottom-10 left-10 text-white">
            Home <span className="text-black">/ Our Projects</span>
          </p>
        </div>
      </div>
      <div>
        <section className="grid grid-cols-2 mt-20 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 px-5 xl:mx-20 mb-20">
         {/* Meat moot City walk */}
         <Link href="/our-work/meatmoot" className="block">
          <div className="relative hover:bg-[url(/projects/meatmoot.jpg)] bg-black flex transition-all duration-300 ease-in-out pb-4 items-end justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-tl-full">
            <div className="text-white xl:p-3 rounded-lg w-full text-start">
              <h2 className="xl:text-lg text-md mb-2 font-semibold">
                Meat Moot
              </h2>
              <p className="xl:text-sm text-xs">City Walk, United Arab Emirates</p>
            </div>
          </div>
        </Link>

        {/* Tilal Al Ghaf Interior */}
        <Link href="/our-work/Tilal-Al-Ghaf-Interior" className="block">
          <div className="relative hover:bg-[url(/projects/villa.jpg)] bg-black flex transition-all duration-300 ease-in-out pt-4 items-start justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-bl-full">
            <div className="text-white xl:p-3 rounded-lg w-full text-start">
              <h2 className="xl:text-lg text-md mb-2 font-semibold">Tilal Al Ghaf Interior</h2>
              <p className="xl:text-sm text-xs">
                Dubai, United Arab Emirates
              </p>
            </div>
          </div>
        </Link>

        {/* Meat moot Al khawaneej */}
        <Link href="/our-work/meatmoot-khawaneej" className="block">
          <div className="relative hover:bg-[url(/projects/mkhm.jpg)] bg-black flex transition-all duration-300 ease-in-out pb-4 items-end justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-tr-full">
            <div className="text-white xl:p-3 rounded-lg w-full text-start">
              <h2 className="xl:text-lg text-md mb-2 font-semibold">
                Meat Moot
              </h2>
              <p className="xl:text-sm text-xs">
                Al Khawaneej, United Arab Emirates
              </p>
            </div>
          </div>
        </Link>

        {/* meat moot jbr*/}
        <Link href="/our-work/meatmoot-jbr" className="block">
          <div className="relative hover:bg-[url(/projects/jbrm.jpg)] bg-black flex transition-all duration-300 ease-in-out pb-4 items-end justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-tr-full">
            <div className="text-white xl:p-3 rounded-lg w-full text-start">
              <h2 className="xl:text-lg text-md mb-2 font-semibold">
                Meat Moot
              </h2>
              <p className="xl:text-sm text-xs">
                Jumeirah Beach Resort, United Arab Emirates
              </p>
            </div>
          </div>
        </Link>

          {/* Tilal-Al-Ghaf-Landscape */}
          <Link href="/our-work/Tilal-Al-Ghaf-Landscape" className="block">
            <div className="relative hover:bg-[url(/projects/residentalBuilding.jpg)] bg-black flex transition-all duration-300 ease-in-out pb-4 items-end justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-tl-full">
              <div className="text-white xl:p-3 rounded-lg w-full text-start">
                <h2 className="xl:text-lg text-md mb-2 font-semibold">
                  Tilal Al Ghaf Landscape
                </h2>
                <p className="xl:text-sm text-xs">
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>
          </Link>

          {/* Warehouse */}
          {/* <Link href="/our-work/warehouseAlQouz" className="block">
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
          </Link> */}

          {/* Residental Building 2 */}
          {/* <Link href="/our-work/residentalBuildingSharjah2" className="block">
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
          </Link> */}

          {/* Meat Moot */}
          {/* <Link href="/our-work/meatmoot" className="block">
            <div className="relative hover:bg-[url(/projects/meatmoot.jpg)] bg-black flex transition-all duration-300 ease-in-out pt-4 items-start justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-br-full">
              <div className="text-white xl:p-3 rounded-lg w-full text-start">
                <h2 className="xl:text-lg text-md mb-2 font-semibold">
                  Meat Moot
                </h2>
                <p className="xl:text-sm text-xs">
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>
          </Link> */}
        </section>
      </div>
      <VidioComponent />
    </div>
  );
};

export default OurWorkLayout;
