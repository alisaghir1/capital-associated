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
            Building Dreams, Crafting Futures.
          </p>
          <p className="absolute bottom-10 left-10 text-white">
            Home <span className="text-black">/ Our Projects</span>
          </p>
        </div>
      </div>
      <div>
        <section className="grid grid-cols-2 mt-20 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 px-5 xl:mx-20 mb-20">
          {/* Residental Tower */}
          <Link href="/our-work/residentalTowerDubai" className="block">
            <div className="relative hover:bg-[url(/projects/residentalTower.jpg)] bg-black flex transition-all duration-300 ease-in-out pb-4 items-end justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-tl-full">
              <div className="text-white xl:p-3 rounded-lg w-full text-start">
                <h2 className="xl:text-lg text-md mb-2 font-semibold">
                  Residental Tower
                </h2>
                <p className="xl:text-sm text-xs">
                  Dubai, United Arab Emirates
                </p>
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
                  Al Qouz, United Arab Emirates
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

          {/* Factory */}
          <Link href="/our-work/factoryAlQouz" className="block">
            <div className="relative hover:bg-[url(/projects/factory.jpg)] bg-black flex transition-all duration-300 ease-in-out pt-4 items-start justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-br-full">
              <div className="text-white xl:p-3 rounded-lg w-full text-start">
                <h2 className="xl:text-lg text-md mb-2 font-semibold">
                  Factory
                </h2>
                <p className="xl:text-sm text-xs">
                  Al Qouz, United Arab Emirates
                </p>
              </div>
            </div>
          </Link>
        </section>
      </div>
      <VidioComponent />
    </div>
  );
};

export default OurWorkLayout;
