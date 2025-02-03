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
              <span className="text-black">
                / Our Services / Commercial Building
              </span>
            </p>
          </div>
        </div>
        <section className=" container mx-auto flex flex-col gap-5 px-5">
          <div className="relative w-full xl:h-[40rem] h-[25rem] mt-10">
            <Image
              src="/about1.jpg"
              alt="Background Image"
              layout="fill" // This will make the image cover the entire screen
              objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
              className="xl:rounded-t-[300px] rounded-t-[100px]"
            />
          </div>
          <div className="w-full mb-20 xl:rounded-b-[300px] rounded-b-[100px]  flex flex-col items-center text-center bg-slate-200 xl:px-40 px-5 py-20">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Where luxury meets the skyline.
            </h1>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Live the Dubai Marina dream.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              An iconic residential tower in the heart of Dubai Marina is a
              stunning landmark, standing proudly at 48 floors. This
              architectural masterpiece is a symbol of modern luxury and urban
              sophistication. It offers breathtaking views of the marina, the
              glistening waters of the Arabian Gulf, and the dynamic skyline of
              Dubai.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              The towes design combines sleek, contemporary lines with
              innovative use of glass and steel, creating a sense of openness
              and light. Its high-rise structure is designed to maximize natural
              light, offering floor-to-ceiling windows in each of its luxurious
              apartments. Residents enjoy unparalleled views of both the
              cityscape and the waterfront, providing a living experience that
              perfectly merges modern convenience with nature:aposs beauty.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Inside, the tower boasts an array of world-class amenities,
              including a state-of-the-art fitness center, a swimming pool, and
              spa facilities. The residential units range from elegant
              one-bedroom apartments to expansive penthouses, all featuring
              high-end finishes, open layouts, and smart home technology. The
              tower is also designed with sustainability in mind, incorporating
              energy-efficient features and environmentally friendly materials.
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
              Dubai Marina. United Arab Emirates
            </p>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Prime Location: Heart of Dubai Marina with stunning waterfront
              views. Iconic Design: 48-story modern luxury tower. Luxurious
              Living: High-end apartments with smart home features. Top
              Amenities: Fitness center, pool, spa, and more. Sustainable:
              Energy-efficient and eco-friendly design.
            </p>
          </div>
          <div className="relative object-center w-full xl:h-[30rem] h-[25rem] mt-10 mb-5">
            <Image
              src="/projects/commercialBuilding.jpg"
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
                src="/projects/p1.jpg"
                alt="Background Image"
                layout="fill" // This will make the image cover the entire screen
                objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:h-[30rem] h-[15rem]  ">
              <Image
                src="/projects/p2.jpg"
                alt="Background Image"
                layout="fill" // This will make the image cover the entire screen
                objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
                className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]  ">
              <Image
                src="/projects/p1.jpg"
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
        <div className="w-full  xl:rounded-b-[300px] rounded-b-[100px]  flex flex-col items-center text-center bg-slate-100 xl:px-40 px-5 py-20">
          <h1 className="xl:text-3xl text-black md:text-xl text-lg">
            Sustainability
          </h1>
          <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
            Where luxury meets responsibility. Living sustainably, with style
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Located in the vibrant Dubai Marina district, the tower is
            surrounded by a plethora of dining, shopping, and entertainment
            options, as well as easy access to major transport links. Its prime
            location means residents can enjoy a lifestyle of convenience, with
            everything from world-class restaurants to luxurious shopping malls
            just moments away.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Whether you're looking for a dynamic urban lifestyle or a tranquil
            retreat by the water, this iconic residential tower offers the best
            of both worlds, making it a sought-after address in one of the most
            prestigious areas of Dubai.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            The tower is an architectural gem nestled in the vibrant Dubai
            Marina, one of the city&apos;s most prestigious and sought-after
            neighborhoods. Standing at 48 stories tall, the tower offers a blend
            of sophisticated design and cutting-edge technology, making it a
            true symbol of modern urban living.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Design & Architecture: The building boasts a sleek and contemporary
            design, characterized by smooth glass facades and sharp, geometric
            lines. Its striking silhouette complements the surrounding skyline,
            while its expansive windows ensure panoramic views of the marina,
            the Arabian Gulf, and the city. The tower&apos;s exterior reflects a
            perfect balance of elegance and innovation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
