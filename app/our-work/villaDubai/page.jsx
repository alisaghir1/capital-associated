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
              Home <span className="text-black">/ Our Services / Villa</span>
            </p>
          </div>
        </div>
        <section className=" container mx-auto flex flex-col gap-5 px-5">
          <div className="relative w-full xl:h-[40rem] h-[25rem] mt-10">
            <Image
              src="/projects/villa.jpg"
              alt="Background Image"
              layout="fill" // This will make the image cover the entire screen
              objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
              className="xl:rounded-t-[300px] rounded-t-[100px]"
            />
          </div>
          <div className="w-full mb-20 xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-200 xl:px-40 px-5 py-20">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Where luxury meets tranquility.
            </h1>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Live the Dubai villa dream.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              An exclusive villa nestled in one of Dubai’s most prestigious
              communities, offering a luxurious escape from the hustle and
              bustle of city life. This stunning property features contemporary
              architecture, blending modern elegance with the beauty of nature.
              The villa offers breathtaking views of lush landscapes, private
              pools, and the dynamic Dubai skyline.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              The villa’s design is a seamless fusion of luxury and
              functionality. Expansive floor-to-ceiling windows fill the space
              with natural light, while spacious open-plan living areas offer a
              perfect blend of comfort and style. High-end finishes and
              state-of-the-art smart home technology create an experience of
              unparalleled sophistication.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Inside, the villa offers world-class amenities, including a
              private gym, an infinity-edge swimming pool, and a luxurious spa.
              The property features large bedrooms, elegant living spaces, and
              expansive outdoor terraces, ideal for hosting guests or enjoying
              quiet moments in a serene environment. Sustainability is at the
              core of its design, with energy-efficient systems and eco-friendly
              materials incorporated throughout.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-5 flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col xl:w-4/5 w-full text-center xl:text-start justify-center">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Exclusive
            </h1>
            <h1 className="xl:text-3xl mt-2 text-black md:text-xl text-lg">
              Villa
            </h1>
            <p className="xl:text-lg mt-2 font-bold text-black md:text-md text-sm">
              Dubai, United Arab Emirates
            </p>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Prime Location: Situated in one of Dubai’s most prestigious
              neighborhoods, offering breathtaking views of the city skyline and
              lush landscapes. Iconic Design: A modern villa with cutting-edge
              architecture, blending elegance and functionality. Luxurious
              Living: Spacious interiors with high-end finishes, expansive
              bedrooms, and private outdoor areas. Top Amenities: Private pool,
              gym, spa, and advanced smart home features. Sustainable: Built
              with eco-friendly materials and energy-efficient systems for a
              greener lifestyle.
            </p>
          </div>

          <div className="relative object-center w-full xl:h-[30rem] hidden xl:block h-[25rem] mt-10 mb-5">
            <Image
              src="/projects/villa.jpg"
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
                src="/services/interiorFit/s1.jpg"
                alt="Background Image"
                layout="fill" // This will make the image cover the entire screen
                objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:h-[30rem] h-[15rem]  ">
              <Image
                src="/services/interiorFit/s2.jpg"
                alt="Background Image"
                layout="fill" // This will make the image cover the entire screen
                objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
                className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]  ">
              <Image
                src="/services/interiorFit/s1.jpg"
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
            Where luxury meets responsibility. Living sustainably, with style.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Situated in one of Dubai’s most prestigious and tranquil
            neighborhoods, this villa is designed to offer both luxury and
            environmental responsibility. The expansive property is surrounded
            by lush greenery and scenic landscapes, offering residents a
            peaceful retreat while minimizing its environmental impact.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Whether you’re seeking a serene sanctuary to unwind or a spacious
            home for entertaining, this villa offers an unparalleled lifestyle.
            With a strong emphasis on sustainable living, it features
            energy-efficient systems, eco-friendly building materials, and a
            design that blends seamlessly with nature.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            The villa stands as a testament to modern architecture, with
            open-plan living spaces and floor-to-ceiling windows that flood the
            interiors with natural light. Designed to maximize both comfort and
            functionality, the villa showcases cutting-edge technology while
            maintaining a strong commitment to sustainability.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Design & Architecture: The villa boasts sleek, contemporary design
            with an emphasis on open spaces and natural materials. Expansive
            windows provide breathtaking views of the surrounding landscapes and
            city skyline. The exterior reflects a perfect balance of elegance,
            modernity, and eco-conscious design.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
