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
              Home{" "}
              <span className="text-black">/ Our Services / Warehouse</span>
            </p>
          </div>
        </div>
        <section className=" container mx-auto flex flex-col gap-5 px-5">
          <div className="relative w-full xl:h-[40rem] h-[25rem] mt-10">
          <div onContextMenu={(e) => e.preventDefault()}>
        <div onContextMenu={(e) => e.preventDefault()}>
          <Image
              src="/projects/wareHouseMain.jpg"
              alt="Background Image"
              layout="fill" // This will make the image cover the entire screen
              objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
              className="w-full mb-20 xl:rounded-t-[300px] rounded-t-[100px] flex flex-col items-center"
            />
            </div>
            </div>
          </div>
          <div className="w-full mb-20 xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-200 xl:px-40 px-5 py-20">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Where functionality meets innovation.
            </h1>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Transform your business in Al Qouz's premier warehouse space.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              This state-of-the-art warehouse facility in Al Qouz is
              strategically located in one of Dubai's most dynamic and
              accessible industrial areas. Offering ample space for a variety of
              business needs, it is designed to cater to logistics, storage, and
              distribution with ease and efficiency.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              The warehouse's design prioritizes practicality, with high
              ceilings, wide loading docks, and easy access for large vehicles.
              The space is optimized for maximum storage capacity, while the
              expansive layout provides flexibility for customization to suit
              different operations, from warehousing to light manufacturing.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Inside, the facility is equipped with top-tier infrastructure,
              including reinforced floors, advanced security systems, and
              climate control options for temperature-sensitive goods. The
              entire complex is designed with modern technology to streamline
              operations and ensure smooth logistics management.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Located in Al Qouz, the warehouse is perfectly positioned to take
              advantage of Dubai’s robust transport network, offering easy
              access to major highways and ports. This prime location provides
              businesses with a competitive edge, ensuring fast distribution to
              clients across the city and beyond.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-5 flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col xl:w-4/5 w-full text-center xl:text-start justify-center">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Industrial
            </h1>
            <h1 className="xl:text-3xl mt-2 text-black md:text-xl text-lg">
              Warehouse
            </h1>
            <p className="xl:text-lg mt-2 font-bold text-black md:text-md text-sm">
              Al Qouz. Dubai, United Arab Emirates
            </p>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Prime Location: Central access point in the heart of Al Qouz,
              Dubai's thriving industrial hub. Strategic Access: Easy
              connections to major highways, ports, and transport networks.
              Versatile Design: Spacious, high-ceiling warehouse suitable for
              logistics, storage, and light manufacturing. Modern
              Infrastructure: Reinforced flooring, advanced security, and
              climate-controlled options. Sustainable: Designed with
              energy-efficient solutions and eco-friendly features.
            </p>
          </div>

          <div className="relative object-center w-full hidden xl:block xl:h-[30rem] h-[25rem] mt-10 mb-5">
            <Image
              src="/projects/warehouse.jpg"
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
                src="/projects/warehouse2.jpg"
                alt="Background Image"
                layout="fill" // This will make the image cover the entire screen
                objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:h-[30rem] h-[15rem]  ">
              <Image
                src="/projects/warehouse3.jpg"
                alt="Background Image"
                layout="fill" // This will make the image cover the entire screen
                objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
                className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]  ">
              <Image
                src="/projects/warehouse2.jpg"
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
            Where efficiency meets innovation. Building a sustainable industrial
            future.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Located in Al Qouz, Dubai's industrial heart, the warehouse offers
            unmatched connectivity to the city's key business hubs and transport
            links. The strategic location provides easy access to major
            highways, ports, and logistics centers, making it an ideal base for
            any growing business.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Whether you need large storage facilities, manufacturing space, or a
            distribution hub, this warehouse offers versatile options for
            various industrial needs. The space is designed to maximize
            operational efficiency while maintaining a sustainable approach to
            business practices.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            The warehouse is an example of modern industrial design, with high
            ceilings, reinforced flooring, and ample space for trucks and
            equipment. The property is equipped with energy-efficient features,
            contributing to a reduced carbon footprint while maintaining optimal
            operational capacity.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Design & Infrastructure: The warehouse boasts robust, high-tech
            facilities built to accommodate various industries. Its streamlined
            design ensures functionality and safety, with ample room for
            storage, logistics, and light manufacturing. The property integrates
            energy-saving technologies, making it a cost-effective and
            eco-friendly choice for businesses.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
