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
              <span className="text-black">
                / Our Work / Tilal Al Ghaf Landscape
              </span>
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
                <source src="https://res.cloudinary.com/dqxyczrhq/video/upload/v1754034615/tilal-al-ghaf-landscape_mpzb99.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="w-full mb-20 xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-200 xl:px-40 px-5 py-20">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Landscape Design Project – Tilal Al Ghaf, Dubai, UAE
            </h1>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Where natural elegance meets modern outdoor living.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Located in the prestigious Tilal Al Ghaf development in Dubai, this landscape design project exemplifies the merge of natural elegance with modern outdoor living. Commissioned by a leading contractor in the UAE, the project shows bespoke approach and premium outdoor aesthetics, customized to elevate the residential construction experience through thoughtful design with world-class quality.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              This comprehensive outdoor transformation was envisioned to complement the architectural charm of the villa while embracing the serene lifestyle promised by the Tilal Al Ghaf community. The project scope involved full-surface ground development, luxury hardscape features, integrated lighting, softscape detailing, and a custom-designed swimming pool.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Every element was conceptualized and executed to create a seamless transition between indoor comfort and outdoor vibrancy, demonstrating our excellence in delivering integrated outdoor solutions that enhance lifestyle and property value.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-5 flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col xl:w-4/5 w-full text-center xl:text-start justify-center">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Swimming Pool
            </h1>
            <h1 className="xl:text-3xl mt-2 text-black md:text-xl text-lg">
              Design
            </h1>
            <p className="xl:text-lg mt-2 font-bold text-black md:text-md text-sm">
              Tilal Al Ghaf, Dubai, UAE
            </p>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              In the outdoor space, there is a meticulously constructed private pool — a centerpiece that combines relaxation and luxury. With a contemporary rectangular design, the pool is finished with high-end mosaic tiles and ambient underwater lighting. Its perimeter is defined by elegant non-slip decking that provides safety and enhances the visual appeal. Whether for day lounging or evening gatherings, the pool is both a premium construction for aesthetic highlight of the landscape.
            </p>
          </div>
          <div className="relative object-center w-full hidden xl:block xl:h-[30rem] h-[25rem] mt-10 mb-5">
            <Image
              src="/projects/tl2.png"
              alt="Swimming Pool Design"
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
                src="/projects/tl1.png"
                alt="Ground Development"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:h-[30rem] h-[15rem]">
              <Image
                src="/projects/tl4.png"
                alt="Lighting Design"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]">
              <Image
                src="/projects/tl3.png"
                alt="Landscape Design"
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
            Ground & Surface Development
          </h1>
          <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
            Premium materials and precise engineering for lasting elegance
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            The ground development phase involved precise grading and substructure preparation to ensure long-term durability and optimal water drainage. Premium natural stone and textured tiles were selected for walkways and patio areas, offering both elegance and resilience against the region's climate.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            The flooring layout was strategically designed to connect different outdoor zones — from the entrance pathway to the pool deck and the backyard garden — creating a cohesive and flowing outdoor experience.
          </p>
          <h1 className="xl:text-3xl text-black md:text-xl text-lg mt-8">
            Lighting & Ambience
          </h1>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            A personalized lighting plan enhances both safety and ambiance. Recessed path lights, wall-mounted sconces, and subtle uplighting around key features like trees and architectural walls create a warm and inviting atmosphere. The lighting not only showcases the landscape's beauty after dark but also extends the usability of the outdoor space into the night.
          </p>
          <h1 className="xl:text-3xl text-black md:text-xl text-lg mt-8">
            Outcome & Value
          </h1>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            This Tilal Al Ghaf landscape construction project demonstrates the contractor's excellence in delivering integrated outdoor solutions that enhance lifestyle and property value. From design to material selection and implementation, the project reflects modern luxury, regional adaptability, and precision craftsmanship. It not only provides a private oasis for the residents but also contributes to the visual identity of the broader community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
