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
            Designing Landmarks. Defining Skylines

            </p>
            <p className="absolute  bottom-10 left-10 text-white">
              Home{" "}
              <span className="text-black">
                / Our Services / Commercial Building
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
                <source src="/projects/commercialBuilding.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="w-full mb-20 xl:rounded-b-[300px] rounded-b-[100px]  flex flex-col items-center text-center bg-slate-200 xl:px-40 px-5 py-20">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Where business meets excellence.
            </h1>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Elevate your enterprise in the heart of Sharjah.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              An iconic commercial tower in the heart of Sharjah stands as a hub
              for innovation and business growth. This modern landmark offers
              state-of-the-art office spaces, premium retail outlets, and
              dynamic work environments, catering to the needs of businesses of
              all sizes.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              The building's design features sleek, contemporary architecture
              with innovative use of glass and steel, creating an open and
              professional atmosphere. Its high-rise structure maximizes natural
              light, offering floor-to-ceiling windows in each office space.
              Businesses benefit from panoramic views of the city's dynamic
              commercial district, fostering an inspiring and productive work
              environment.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Inside, the tower offers a range of world-class facilities,
              including cutting-edge office spaces, premium conference rooms,
              and dedicated co-working areas. The commercial units are designed
              for flexibility, featuring modern interiors, smart office
              technology, and high-speed connectivity. Sustainability is at the
              core of the building, incorporating energy-efficient solutions and
              eco-friendly materials to support a greener business ecosystem.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-5 flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col xl:w-4/5 w-full text-center xl:text-start justify-center">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Commercial
            </h1>
            <h1 className="xl:text-3xl mt-2 text-black md:text-xl text-lg">
              Building
            </h1>
            <p className="xl:text-lg mt-2 font-bold text-black md:text-md text-sm">
              Sharjah. United Arab Emirates
            </p>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Prime Location: Situated in the heart of Sharjah’s business
              district with excellent connectivity. Iconic Design: A modern
              high-rise commercial tower designed for corporate excellence.
              Premium Offices: Flexible office spaces with advanced smart
              technology. Top Facilities: Conference rooms, business lounges,
              high-speed connectivity, and retail outlets. Sustainable:
              Energy-efficient design with eco-friendly materials.
            </p>
          </div>
          <div className="relative object-center w-full hidden xl:block xl:h-[30rem] h-[25rem] mt-10 mb-5">
            <Image
              src="/projects/commercialBuilding.JPG"
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
                src="/projects/commercialInt.jpg"
                alt="Background Image"
                layout="fill" // This will make the image cover the entire screen
                objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:h-[30rem] h-[15rem]  ">
              <Image
                src="/projects/commercialInt2.jpg"
                alt="Background Image"
                layout="fill" // This will make the image cover the entire screen
                objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
                className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]  ">
              <Image
                src="/projects/commercialInt.jpg"
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
            Where business meets responsibility. A sustainable future for
            enterprise.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Located in the heart of Sharjah’s commercial district, this iconic
            business tower is surrounded by key financial hubs, retail centers,
            and major transport links. Its strategic location ensures seamless
            access to essential business services and networking opportunities.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Whether you are a startup, a growing enterprise, or an established
            corporation, this commercial building offers a dynamic environment
            tailored for business success.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            This architectural landmark in Sharjah is designed to foster
            productivity and innovation. The tower stands as a symbol of
            business excellence, integrating smart office solutions with
            energy-efficient technologies.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Design & Architecture: The building features a sleek, modern facade
            with glass exteriors that enhance natural lighting while reducing
            energy consumption. Its cutting-edge design ensures a professional
            and welcoming atmosphere, ideal for businesses of all sizes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
