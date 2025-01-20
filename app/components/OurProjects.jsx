import React from 'react';
import Link from 'next/link';

const OurProjects = () => {
  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-5 my-20">
        <h1 className="lg:text-3xl text-2xl xl:text-4xl">Our Projects</h1>
        <p className="lg:text-3xl text-2xl xl:text-4xl">
          Building Dreams, Crafting Futures.
        </p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 px-5 xl:mx-20 mb-20">
        {/* Residental Tower */}
        <div
          className="relative hover:bg-[url(/projects/residentalTower.jpg)] bg-black flex transition-all duration-300 ease-in-out pb-4 items-end justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-tl-full"
        >
          <div className="text-white  xl:p-3 rounded-lg w-full text-start">
            <h2 className="xl:text-lg text-md mb-2 font-semibold">Residental Tower</h2>
            <p className="xl:text-sm text-xs">Dubai, United Arab Emirates</p>
          </div>
        </div>

        {/* Villa */}
        <div
          className="relative hover:bg-[url(/projects/villa.jpg)] bg-black flex transition-all duration-300 ease-in-out pt-4 items-start justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-bl-full"
        >
          <div className="text-white  xl:p-3 rounded-lg w-full text-start">
            <h2 className="xl:text-lg text-md mb-2 font-semibold">Villa</h2>
            <p className="xl:text-sm text-xs">Dubai Hills, United Arab Emirates</p>
          </div>
        </div>

        {/* Residental Tower - Sharjah */}
        <div
          className="relative hover:bg-[url(/projects/residentalTower.jpg)] bg-black flex transition-all duration-300 ease-in-out pb-4 items-end justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-tr-full"
        >
          <div className="text-white  xl:p-3 rounded-lg w-full text-start">
            <h2 className="xl:text-lg text-md mb-2 font-semibold">Residental Tower</h2>
            <p className="xl:text-sm text-xs">Sharjah, United Arab Emirates</p>
          </div>
        </div>

        {/* Commercial Building */}
        <div
          className="relative hover:bg-[url(/projects/commercialBuilding.jpg)] bg-black flex transition-all duration-300 ease-in-out pb-4 items-end justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-tr-full"
  
        >
          <div className="text-white  xl:p-3 rounded-lg w-full text-start">
            <h2 className="xl:text-lg text-md mb-2 font-semibold">Commercial Building</h2>
            <p className="xl:text-sm text-xs">Sharjah, United Arab Emirates</p>
          </div>
        </div>

        {/* Residental Building */}
        <div
          className="relative hover:bg-[url(/projects/residentalBuilding.jpg)] bg-black flex transition-all duration-300 ease-in-out pb-4 items-end justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-tl-full"
        >
          <div className="text-white  xl:p-3 rounded-lg w-full text-start">
            <h2 className="xl:text-lg text-md mb-2 font-semibold">Residental Building</h2>
            <p className="xl:text-sm text-xs">Sharjah, United Arab Emirates</p>
          </div>
        </div>

        {/* Warehouse */}
        <div
          className="relative hover:bg-[url(/projects/warehouse.jpg)] bg-black flex transition-all duration-300 ease-in-out pt-4 items-start justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-br-full"
        >
          <div className="text-white xl:p-3 rounded-lg w-full text-start">
            <h2 className="xl:text-lg text-md mb-2 font-semibold">Warehouse</h2>
            <p className="xl:text-sm text-xs">Al Qouz, United Arab Emirates</p>
          </div>
        </div>

        {/* Residental Building 2 */}
        <div
          className="relative hover:bg-[url(/projects/residentalBuilding2.jpg)] bg-black  flex transition-all duration-300 ease-in-out pb-4 items-end justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-tl-full"
        >
          <div className="text-white  xl:p-3 rounded-lg w-full text-start">
            <h2 className="xl:text-lg text-md mb-2 font-semibold">Residental Building</h2>
            <p className="xl:text-sm text-xs">Sharjah, United Arab Emirates</p>
          </div>
        </div>

        {/* Factory */}
        <div
          className="relative hover:bg-[url(/projects/factory.jpg)] bg-black flex transition-all duration-300 ease-in-out pt-4 items-start justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 rounded-br-full"
        >
          <div className="text-white  xl:p-3 rounded-lg w-full text-start">
            <h2 className="xl:text-lg text-md mb-2 font-semibold">Factory</h2>
            <p className="xl:text-sm text-xs">Al Qouz, United Arab Emirates</p>
          </div>
        </div>
      </section>
      <div className="flex justify-center align-center mb-20 ">
        <Link className="px-4 mb-5 z-20 xl:mt-0 text-center  py-2 text-3xl transiton-colors duration-300 ease-in-out text-gray-600 hover:text-black border-b border-b-black" href={"/our-work"}>
            Visit Projects Page
        </Link>
      </div>
    </div>
  );
};

export default OurProjects;
