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
              <span className="text-black">/ Our Work / Hindi Villa</span>
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
                <source src="https://res.cloudinary.com/dqxyczrhq/video/upload/v1754563576/Copy_of_IMG_8871_naijhv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="w-full mb-20 xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-200 xl:px-40 px-5 py-20">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Landscape and Exterior Construction Project in Dubai
            </h1>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Complete transformation through focused exterior and landscape construction works.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              A private residential villa in Dubai is undergoing a complete transformation through focused exterior and landscape construction works. The project, handled by our contracting company based in Dubai, centers around architectural definition, exterior wall treatment, boundary articulation, and strategic landscape preparation.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Every element has been shaped to meet both climatic needs and residential aesthetics in the region. Stone panels in soft beige tones provide thermal benefit in the Dubai climate while maintaining a consistent, clean surface.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              The material also reduces glare under strong sunlight, avoiding high-reflectivity facades that can strain the surrounding environment.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-5 flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col xl:w-4/5 w-full text-center xl:text-start justify-center">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Facade Architecture
            </h1>
            <h1 className="xl:text-3xl mt-2 text-black md:text-xl text-lg">
              & Design Elements
            </h1>
            <p className="xl:text-lg mt-2 font-bold text-black md:text-md text-sm">
              Hindi Villa, Dubai, UAE
            </p>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Stone panels in soft beige tones have been used across the building's main elevation. Arched windows, black-framed, are used in symmetry across the front face allowing internal daylighting and creating exterior rhythm. Vertical pilasters divide the elevation into proportional sections, acting as framing for the windows while helping distribute vertical weight visually, adding balance to the structure's front.
            </p>
          </div>
          <div className="relative object-center w-full hidden xl:block xl:h-[30rem] h-[25rem] mt-10 mb-5">
            <Image
              src="/projects/hv1.png"
              alt="Facade Architecture"
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
                src="/projects/hv2.png"
                alt="Boundary and Gate Systems"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:h-[30rem] h-[15rem]">
              <Image
                src="/projects/hv3.png"
                alt="Landscape Development"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]">
              <Image
                src="/projects/hv4.png"
                alt="Site Development"
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
            Boundary Systems & Site Development
          </h1>
          <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
            Strategic landscape preparation with organized site planning and material control
          </p>
          <h2 className="xl:text-2xl text-black md:text-lg text-md mt-6 font-semibold">
            Boundary and Gate Systems
          </h2>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Perimeter walls have been completed using blockwork, followed by surface render. Reinforcement and corner detailing have been applied to absorb Dubai's dry conditions and high daily temperatures. Entry points have been secured using metallic gates, aligned to structural pillars, with electrical ducting and control units under preparation for future motorized access.
          </p>
          <h2 className="xl:text-2xl text-black md:text-lg text-md mt-6 font-semibold">
            Ground Preparation & Yard Configuration
          </h2>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            The open area around the villa has been cleared and filled to correct elevation. Material grading has begun for proper water runoff and paving application. Layers of sand and gravel have been used to level the yard, helping prevent water pooling and soil sinking once the hardscape is laid.
          </p>
          <h2 className="xl:text-2xl text-black md:text-lg text-md mt-6 font-semibold">
            Landscape Layout & Hardscape Planning
          </h2>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Wide walkways and vehicle access paths are being measured. Curves and boundary junctions are being finalized for tile cutting and alignment. These areas will receive stone or slab finishes that match the villa's exterior texture and tone. Dedicated zones for plant beds, shade structures, and seating have been marked.
          </p>
          <h2 className="xl:text-2xl text-black md:text-lg text-md mt-6 font-semibold">
            Professional Construction Management
          </h2>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Temporary paths made of plywood and steel boards have been placed for crew movement and equipment transit. Cement bags, crates of tiles, and utility boxes are arranged in zones marked for future landscape interventions. Proximity to walls and drainage paths has been considered in setting planting zones to avoid water retention near foundations.
          </p>
          <div className="mt-8 p-6 bg-slate-200 rounded-lg">
            <p className="xl:text-lg text-black md:text-md text-sm font-semibold">
              Interested in Villa Exterior Work in Dubai? Professional results come from organized site planning, material control, and experienced labor. Contact our construction team in Dubai today to schedule a consultation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
