import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col  items-center justify-center border-b border-b-black pb-20">
      <div className="relative w-full h-[30rem] ">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/main.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Content on top of the image */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center">
          <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
            Lobna Lahoud
          </h1>
          <p className="absolute bottom-10 left-10 text-white">
            Home <span className="text-black">/ Our Team / Lobna Lahoud</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-10 items-center rounded-2xl mt-10">
        <div className="relative xl:ml-10 mt-10 h-[30rem] xl:w-[60rem] px-5 w-full">
          <Image
            src="/team/t3.jpg"
            alt="Loubna Lahoud"
            layout="fill"
            objectFit="cover"
            className="xl:rounded-xl"
          />
        </div>
        <div className="container mx-auto px-5">
          <h1 className="text-3xl font-bold">Lobna Lahoud</h1>
          <p className="mt-2">Co-Founder</p>
          <p className="mt-4">
            Lobna Lahoud is the co-founder of our company, playing a pivotal
            role in shaping its vision and growth. With a strong entrepreneurial
            mindset and an eye for innovation, she has been instrumental in
            driving the company's success and ensuring long-term sustainability.
          </p>
          <p className="mt-4">
            With extensive experience in business development and strategic
            planning, Lobna has helped establish key partnerships and expand the
            company's reach. Her leadership and dedication have played a crucial
            role in building a dynamic and forward-thinking team.
          </p>
          <p className="mt-4">
            As a co-founder, Lobna is passionate about fostering a culture of
            creativity and collaboration. Her ability to inspire and empower
            others has been fundamental in creating an environment where
            innovation thrives and ambitious ideas turn into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
