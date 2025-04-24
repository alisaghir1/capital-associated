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
                / Our Services / Residental Building
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
                <source src="/projects/residentalBuilding3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="w-full mb-20 xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-200 xl:px-40 px-5 py-20">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Where Comfort Meets Elegance.
            </h1>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Experience the charm of Sharjah living.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Nestled in the heart of Sharjah, this stunning residential
              building stands as a beacon of modern elegance and comfort.
              Combining contemporary architecture with traditional Arabian
              charm, it offers an exceptional living experience in one of the
              UAE&apos;s most culturally rich cities.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              The building&apos;s design embraces sleek lines and expansive glass
              facades, ensuring an abundance of natural light while offering
              breathtaking views of the city&apos;s skyline and lush landscapes.
              Thoughtfully designed interiors blend functionality with
              sophistication, creating a perfect balance between urban
              convenience and homely warmth.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Inside, residents enjoy a range of premium amenities, including a
              fully equipped fitness center, a temperature-controlled swimming
              pool, and serene communal spaces. Apartments feature spacious
              layouts, high-end finishes, and smart home technology, catering to
              a modern lifestyle with unmatched comfort.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Designed with sustainability in mind, the building incorporates
              energy-efficient solutions and eco-friendly materials, ensuring a
              greener future without compromising luxury. With its prime
              location, residents have easy access to shopping centers, cultural
              landmarks, and key transportation hubs, making it an ideal address
              for families and professionals alike.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-5 flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col xl:w-4/5 w-full text-center xl:text-start justify-center">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Residential
            </h1>
            <h1 className="xl:text-3xl mt-2 text-black md:text-xl text-lg">
              Tower
            </h1>
            <p className="xl:text-lg mt-2 font-bold text-black md:text-md text-sm">
              Sharjah, United Arab Emirates
            </p>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Prime Location: Situated in the heart of Sharjah with beautiful
              city views. Iconic Design: A contemporary 30-story luxury tower.
              Luxurious Living: Spacious apartments with modern amenities. Top
              Amenities: State-of-the-art gym, rooftop pool, spa, and
              recreational areas. Sustainable: Environmentally-conscious design
              with energy-saving features.
            </p>
          </div>
          <div className="relative object-center w-full hidden xl:block xl:h-[30rem] h-[25rem] mt-10 mb-5">
            <Image
              src="/projects/residentalbuildingg.jpg"
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
                src="/services/interiorFit/s3.jpg"
                alt="Background Image"
                layout="fill" // This will make the image cover the entire screen
                objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:h-[30rem] h-[15rem]  ">
              <Image
                src="/services/interiorFit/s7.jpg"
                alt="Background Image"
                layout="fill" // This will make the image cover the entire screen
                objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
                className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]  ">
              <Image
                src="/services/interiorFit/s3.jpg"
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
            Where luxury meets responsibility. Living sustainably, with style
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Located in the vibrant Sharjah city, the tower is surrounded by a
            rich blend of cultural, dining, shopping, and entertainment options,
            with easy access to major transport links. Its central location
            offers residents a convenient lifestyle with everything from local
            markets to upscale shopping centers just minutes away.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Whether you're seeking a dynamic urban lifestyle or a peaceful
            retreat, this iconic residential tower provides the best of both,
            offering a perfect blend of serenity and vibrancy in one of
            Sharjah's most desirable areas.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            The tower stands as a beacon of modern design, rising above the
            Sharjah skyline. This impressive 30-story building brings together
            high-end finishes and the latest technology, symbolizing urban
            sophistication.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Design & Architecture: The tower features a sleek and contemporary
            aesthetic with expansive glass facades and striking geometric lines.
            Its elegant silhouette enhances the cityscape, offering panoramic
            views of the city, nearby parks, and the Arabian Gulf. The design
            marries beauty and innovation, creating a modern living space for
            residents.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
