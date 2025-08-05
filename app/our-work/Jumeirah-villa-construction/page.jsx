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
              <span className="text-black">/ Our Work / Jumeirah Villa Construction</span>
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
                <source src="https://res.cloudinary.com/dqxyczrhq/video/upload/v1754381919/Capital_Landscape_V3_mdl0qs.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="w-full mb-20 xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-200 xl:px-40 px-5 py-20">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Luxury Villa Construction & Landscaping in Jumeirah, Dubai
            </h1>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Modern architectural excellence blended with premium landscape and pool design.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Capital Associated Building Contracting has successfully completed a luxury villa construction project in Jumeirah, Dubai — a prime example of modern architectural excellence blended with premium landscape and pool design. This construction demonstrates the precision and style expected in one of Dubai's most prestigious residential areas.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              The villa features a symmetrical double-height façade finished with clean white cladding and expansive glass panels for natural light. The curved entrance canopy, supported by stylish dual columns, gives a contemporary twist to classical forms.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              This structural elegance is accentuated by black marble steps and subtle lighting elements, balancing luxury and functionality in Dubai's most desirable residential location.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-5 flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col xl:w-4/5 w-full text-center xl:text-start justify-center">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Modern Pool Construction
            </h1>
            <h1 className="xl:text-3xl mt-2 text-black md:text-xl text-lg">
              with Premium Finishes
            </h1>
            <p className="xl:text-lg mt-2 font-bold text-black md:text-md text-sm">
              Jumeirah Villa, Dubai
            </p>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              One of the villa's standout features is its fully tiled custom-designed swimming pool. Built with modern waterproofing techniques and high-performance materials, the pool includes a raised jacuzzi zone, custom inlay tiles in varied shades of turquoise, and an overflow edge that ensures visual appeal and structural efficiency. The finished pool boasts crystal-clear water and a striking stone-clad waterfall feature wall.
            </p>
          </div>
          <div className="relative object-center w-full hidden xl:block xl:h-[30rem] h-[25rem] mt-10 mb-5">
            <Image
              src="/projects/jv1.png"
              alt="Pool Construction"
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
                src="/projects/jv2.png"
                alt="Villa Facade Design"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:h-[30rem] h-[15rem]">
              <Image
                src="/projects/jv3.png"
                alt="Landscape Design"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]">
              <Image
                src="/projects/jv4.png"
                alt="Construction Progress"
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
            Landscape Design & Construction Excellence
          </h1>
          <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
            Seamless outdoor living experience with premium hardscape and softscape zones
          </p>
          <h2 className="xl:text-2xl text-black md:text-lg text-md mt-6 font-semibold">
            Hardscaping Excellence
          </h2>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            The villa's landscaping includes a mix of hardscape and softscape zones, forming a seamless outdoor living experience. The entry pathway features a geometric paver design using light and dark marble stone, contrasted with raised planters filled with vibrant greenery and seasonal flowers.
          </p>
          <h2 className="xl:text-2xl text-black md:text-lg text-md mt-6 font-semibold">
            Pool & Water Features
          </h2>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Capital Associated's pool construction team executed perfect tile alignment, hydraulic planning, and MEP integration. On the poolside, wooden decking frames the pool perimeter, while tropical plants, bamboo privacy hedges, and black marble coping give the area a private resort ambiance. The water feature wall — tiled in natural dark slate — adds vertical dimension and elegance.
          </p>
          <h2 className="xl:text-2xl text-black md:text-lg text-md mt-6 font-semibold">
            Construction Quality & Project Execution
          </h2>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            From formwork and plastering to tiling and final touches, every phase of the project reflects Capital Associated's quality assurance, precision, and timely delivery. Safety protocols are visible in all progress, with workers equipped in high-visibility gear, proper site organization, and professional handling of tools and materials.
          </p>
          <h2 className="xl:text-2xl text-black md:text-lg text-md mt-6 font-semibold">
            Full-Service Excellence
          </h2>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Our full-service offering — including architectural design, villa construction, swimming pool building, and landscape execution — positions us as a top contractor in Dubai for high-end residential projects in prestigious areas like Jumeirah.
          </p>
          <div className="mt-8 p-6 bg-slate-200 rounded-lg">
            <p className="xl:text-lg text-black md:text-md text-sm font-semibold">
              This design not only enhances curb appeal but also reflects Dubai's emphasis on combining sustainable and luxurious living, transforming the backyard into a peaceful sanctuary.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
