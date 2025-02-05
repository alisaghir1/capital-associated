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
            />
          </div>

          {/* Content on top of the image */}
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
            <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
              Our Projects
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
              Building Dreams, Crafting Futures.
            </p>
            <p className="absolute  bottom-10 left-10 text-white">
              Home <span className="text-black">/ Our Services / Factory</span>
            </p>
          </div>
        </div>
        <section className=" container mx-auto flex flex-col gap-5 px-5">
          <div className="relative w-full xl:h-[40rem] h-[25rem] mt-10">
            <Image
              src="/projects/factory.jpg"
              alt="Background Image"
              layout="fill" // This will make the image cover the entire screen
              objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
              className="xl:rounded-t-[300px] rounded-t-[100px]"
            />
          </div>
          <div className="w-full mb-20 xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-200 xl:px-40 px-5 py-20">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Innovation and Efficiency at Its Core
            </h1>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Powering Industries in Al Quoz.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Strategically located in the heart of Al Quoz, this
              state-of-the-art factory stands as a hub of innovation and
              industrial excellence. Designed for efficiency, scalability, and
              sustainability, it serves as a key player in Dubai's ever-growing
              manufacturing sector.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              The facility boasts a modern architectural design, incorporating
              high-quality steel and concrete for durability and resilience.
              With expansive floor space, high ceilings, and advanced
              ventilation systems, the factory provides an optimized environment
              for large-scale production, warehousing, and logistics.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Inside, the factory is equipped with cutting-edge machinery,
              automated production lines, and advanced safety features. From
              precision engineering to large-scale manufacturing, the facility
              is built to support diverse industries, ensuring seamless
              operations and peak performance.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Sustainability is a core focus, with energy-efficient systems,
              water recycling mechanisms, and eco-friendly materials integrated
              into its design. The factory aligns with Dubai's vision for a
              greener future, reducing its environmental footprint while
              maximizing productivity.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-5 flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col xl:w-4/5 w-full text-center xl:text-start justify-center">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Industrial
            </h1>
            <h1 className="xl:text-3xl mt-2 text-black md:text-xl text-lg">
              Factory
            </h1>
            <p className="xl:text-lg mt-2 font-bold text-black md:text-md text-sm">
              Al Quoz, Dubai, United Arab Emirates
            </p>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Prime Location: Situated in the industrial hub of Al Quoz,
              offering excellent connectivity. Advanced Infrastructure:
              State-of-the-art manufacturing facility with cutting-edge
              technology. High Efficiency: Designed for large-scale production,
              warehousing, and logistics. Top Features: Spacious floor plans,
              high ceilings, and optimized ventilation systems. Sustainable:
              Energy-efficient design with eco-friendly materials and waste
              management solutions.
            </p>
          </div>

          <div className="relative object-center w-full hidden xl:block xl:h-[30rem] h-[25rem] mt-10 mb-5">
            <Image
              src="/projects/factory.jpg"
              alt="Background Image"
              layout="fill" // This will make the image cover the entire screen
              objectFit="center" // Ensures the image maintains its aspect ratio while filling the screen
              className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
            />
          </div>
        </section>
        <section className="container mx-auto px-5 pb-20">
          <div className="flex flex-col xl:flex-row gap-5">
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]  ">
              <Image
                src="/services/s3.jpg"
                alt="Background Image"
                layout="fill" // This will make the image cover the entire screen
                objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:h-[30rem] h-[15rem]  ">
              <Image
                src="/services/s2.jpg"
                alt="Background Image"
                layout="fill" // This will make the image cover the entire screen
                objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
                className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]  ">
              <Image
                src="/services/s3.jpg"
                alt="Background Image"
                layout="fill" // This will make the image cover the entire screen
                objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="container mx-auto px-5 mt-5">
        <div className="w-full xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-100 xl:px-40 px-5 py-20">
          <h1 className="xl:text-3xl text-black md:text-xl text-lg">
            Sustainability
          </h1>
          <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
            Where efficiency meets responsibility. Sustainable industrial
            excellence.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Located in the thriving industrial hub of Al Quoz, this modern
            factory is strategically positioned for optimal logistics,
            transport, and supply chain efficiency. Its prime location provides
            seamless access to major highways, ports, and business districts.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Designed for maximum productivity, the facility integrates advanced
            manufacturing technologies, high-capacity storage, and
            state-of-the-art automation to enhance operational efficiency and
            meet global industry standards.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            The factory’s innovative design prioritizes sustainability,
            incorporating energy-efficient systems, renewable energy sources,
            and eco-friendly materials to reduce its environmental footprint
            while maintaining superior production capabilities.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Architecture & Infrastructure: The facility features a modern,
            functional design with high ceilings, optimized ventilation, and an
            adaptable layout to accommodate various industries, from
            manufacturing to warehousing and logistics.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
