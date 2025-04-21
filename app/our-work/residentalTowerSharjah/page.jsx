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
                / Our Services / Residental Tower
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
                <source src="/projects/residentalBuilding.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="w-full mb-20 xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-200 xl:px-40 px-5 py-20">
  <h1 className="xl:text-3xl text-black md:text-xl text-lg">
    Where luxury meets the skyline.
  </h1>
  <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
    Live the Sharjah dream.
  </p>
  <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
    An iconic residential tower in the heart of Sharjah is a stunning landmark, rising gracefully with its contemporary design. This architectural masterpiece combines urban sophistication with modern luxury, offering panoramic views of the city skyline, the nearby parks, and the serene waters of the Arabian Gulf.
  </p>
  <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
    The tower's design merges sleek, modern lines with innovative glass and steel elements, creating a bright and airy atmosphere. Its high-rise structure maximizes natural light, offering expansive floor-to-ceiling windows in each of its luxurious apartments. Residents enjoy unparalleled views of the surrounding cityscape, providing a living experience that blends contemporary comfort with natural beauty.
  </p>
  <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
    Inside, the tower boasts a variety of world-class amenities, including a cutting-edge fitness center, a swimming pool, and spa facilities. The residential units range from stylish one-bedroom apartments to spacious penthouses, all featuring high-end finishes, open-concept layouts, and advanced smart home technology. The tower also prioritizes sustainability, incorporating energy-efficient features and eco-friendly materials throughout.
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
    Prime Location: Centrally located in Sharjah with scenic views of the city and nearby parks. Iconic Design: A modern 30-story luxury tower. Luxurious Living: Elegant apartments with high-end finishes and smart home technology. Top Amenities: State-of-the-art fitness center, swimming pool, spa, and more. Sustainable: Designed with energy-efficient features and eco-friendly materials.
  </p>
</div>

          <div className="relative object-center w-full hidden xl:block xl:h-[30rem] h-[25rem] mt-10 mb-5">
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
  <div className="w-full xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-100 xl:px-40 px-5 py-20">
    <h1 className="xl:text-3xl text-black md:text-xl text-lg">
      Sustainability
    </h1>
    <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
      Where luxury meets responsibility. Living sustainably, with style
    </p>
    <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
      Located in the heart of Sharjah, the tower is surrounded by a mix of cultural landmarks, shopping, dining, and entertainment options, with easy access to major transport links. Its prime location ensures that residents enjoy a lifestyle of convenience, with everything from traditional markets to modern shopping malls just moments away.
    </p>
    <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
      Whether you're looking for an urban lifestyle or a peaceful escape, this iconic residential tower offers the best of both, making it a highly desirable address in one of Sharjah’s most prestigious districts.
    </p>
    <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
      The tower is an architectural masterpiece nestled in one of Sharjah's most sought-after neighborhoods. Standing tall with 30 floors, it combines sophisticated design with cutting-edge technology, symbolizing modern luxury and urban living.
    </p>
    <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
      Design & Architecture: The building showcases a sleek, contemporary design, with elegant glass facades and geometric lines. Its striking silhouette enhances the surrounding skyline, while its expansive windows offer panoramic views of the city, parks, and the Arabian Gulf. The tower’s design perfectly blends elegance with innovation.
    </p>
  </div>
</section>

    </div>
  );
};

export default page;
