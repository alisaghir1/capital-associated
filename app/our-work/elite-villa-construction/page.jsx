'use client'
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="bg-slate-100">
        <div className="relative h-[30rem] w-full">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/main.jpg"
              alt="Background Image"
              layout="fill" // This will make the image cover the entire screen
              objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
              priority
            />
          </div>

          {/* Content on top of the image */}
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
            <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
              Our Projects
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
            Designing Landmarks. Defining Skylines

            </p>
            <p className="absolute  bottom-10 left-10 text-white">
              Home{" "}
              <span className="text-black">/ Our Work / Elite Villa Construction</span>
            </p>
          </div>
        </div>
        <section className=" container mx-auto flex flex-col gap-5 px-5">
          <div className="relative w-full xl:h-[40rem] h-[25rem] mt-10">
            <div onContextMenu={(e) => e.preventDefault()}>
              <video
                muted
                autoPlay
                loop
                playsInline
                controls
                className="w-full xl:h-[40rem] h-[25rem] object-cover xl:rounded-t-[300px] rounded-t-[100px]"
              >
                <source src="https://res.cloudinary.com/dqxyczrhq/video/upload/v1754036128/dubai-hills_ovollu.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="w-full mb-20 xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-200 xl:px-40 px-5 py-20">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Elite Villa Construction Project in Dubai Hills
            </h1>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Modern residential excellence with precision and high structural standards.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              This elite villa construction in Dubai Hills showcases a modern residential structure built with precision and high structural standards. Located in one of Dubai's most desirable residential zones, the villa integrates durability, solid design, and efficient construction practices.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              The development reflects contemporary lifestyle needs and stands as a model of architectural strength and progress. From groundwork to delivery, every stage is handled with expert supervision and high precision.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              This project represents our standards in elite construction and design service, showcasing modern design and efficient execution in Dubai Hills' prestigious residential community.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-5 flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col xl:w-4/5 w-full text-center xl:text-start justify-center">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Site Preparation
            </h1>
            <h1 className="xl:text-3xl mt-2 text-black md:text-xl text-lg">
              & Groundwork
            </h1>
            <p className="xl:text-lg mt-2 font-bold text-black md:text-md text-sm">
              Dubai Hills, Dubai, UAE
            </p>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              The site was cleared after a topographical study. Soil testing and leveling followed to secure the structural base. Boundary layouts and utility routing were finalized before excavation began. Shoring systems were installed to support excavation, with reinforced concrete footings poured after steel mesh installation to create a strong foundation for the multilevel structure.
            </p>
          </div>
          <div className="relative object-center w-full hidden xl:block xl:h-[30rem] h-[25rem] mt-10 mb-5">
            <Image
              src="/projects/dh1.png"
              alt="Foundation Work"
              layout="fill"
              objectFit="center"
              className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
            />
          </div>
        </section>
        <section className="container mx-auto px-5 pb-20">
          <div className="flex flex-col xl:flex-row gap-5">
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]">
              <Image
                src="/projects/dh2.png"
                alt="Scaffolding and Safety"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:h-[30rem] h-[15rem]">
              <Image
                src="/projects/dh3.png"
                alt="Concrete Work"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]">
              <Image
                src="/projects/dh4.png"
                alt="Staircase Construction"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="container mx-auto px-5 mt-5">
        <div className="w-full xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-100 xl:px-40 px-5 py-20">
          <h1 className="xl:text-3xl text-black md:text-xl text-lg">
            Structural Framework & Quality Control
          </h1>
          <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
            Precision engineering with expert supervision at every stage
          </p>
          <h2 className="xl:text-2xl text-black md:text-lg text-md mt-6 font-semibold">
            Scaffolding and Safety Measures
          </h2>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Heavy-duty scaffolding wrapped the project during structural work. Safe access stairways and platforms were built using timber planks. Safety signage and helmets remained mandatory throughout the site.
          </p>
          <h2 className="xl:text-2xl text-black md:text-lg text-md mt-6 font-semibold">
            Concrete Columns and Slabs
          </h2>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Concrete pouring was executed in layers. Vibrators removed air pockets, ensuring slab integrity. Vertical columns used steel reinforcements per engineering calculations. Reinforcement mesh was secured and concrete was delivered using a pump truck for accurate placement.
          </p>
          <h2 className="xl:text-2xl text-black md:text-lg text-md mt-6 font-semibold">
            Worker Coordination and Timeline
          </h2>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Site supervisors oversaw material placements and steel alignment. Team briefings were held daily to track progress and inspect ongoing work. Each step was reviewed by engineers on-site with concrete curing time, alignment, and material specs logged for quality assurance.
          </p>
          <h2 className="xl:text-2xl text-black md:text-lg text-md mt-6 font-semibold">
            Project Completion
          </h2>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Work progressed as scheduled with the basement and ground level completed within the first quarter. The overall completion date aligns with Dubai Hills development planning, representing our standards in elite construction and design service.
          </p>
          <div className="mt-8 p-6 bg-slate-200 rounded-lg">
            <p className="xl:text-lg text-black md:text-md text-sm font-semibold">
              Looking to build in Dubai Hills? Contact us now to discuss your next villa construction project. Let's create your future home on strong foundations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
