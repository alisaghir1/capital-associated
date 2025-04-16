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
            RAMAZ IZZA
          </h1>
          <p className="absolute bottom-10 left-10 text-white">
            Home <span className="text-black">/ Our Team / RAMAZ IZZA</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-10 items-center rounded-2xl mt-10">
        <div className="relative xl:ml-10 mt-10 h-[60rem] xl:w-[60rem] px-5 w-full object-center">
          <Image
            src="/team/t4.jpg"
            alt="RAMAZ IZZA"
            layout="fill"
            objectFit="cover"
            className="xl:rounded-xl"
          />
        </div>
        <div className="container mx-auto px-5">
          <h1 className="text-3xl font-bold">RAMAZ IZZA</h1>
          <p className="mt-2">Managing Director</p>
          <p className="mt-4">
            RAMAZ IZZA is a visionary and results-driven Managing Director with
            a strong background in engineering and strategic leadership. His
            exceptional problem-solving abilities and commitment to excellence
            have positioned him as a key driver of innovation and operational
            success.
          </p>
          <p className="mt-4">
            As Managing Director, Ramaz leads with clarity and purpose, guiding
            cross-functional teams toward the execution of high-impact projects.
            His deep technical understanding, combined with a sharp business
            acumen, ensures the organization stays ahead in a competitive
            landscape.
          </p>
          <p className="mt-4">
            Ramaz is passionate about fostering a culture of growth,
            collaboration, and continuous improvement. His leadership style
            empowers teams, encourages innovation, and drives long-term value
            for stakeholders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
