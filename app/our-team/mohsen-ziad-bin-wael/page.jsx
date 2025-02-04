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
            Mohsen Ziad Bin Wael
          </h1>
          <p className="absolute bottom-10 left-10 text-white">
            Home{" "}
            <span className="text-black">
              / Our Team / Mohsen Ziad Bin Wael
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-10 items-center rounded-2xl mt-10">
        <div className="relative xl:ml-10 mt-10 h-[30rem] xl:w-[60rem] px-5 w-full">
          <Image
            src="/team/t1.jpg"
            alt="Mohsen Ziad Bin Wael"
            layout="fill"
            objectFit="cover"
            className="xl:rounded-xl"
          />
        </div>
        <div className="container mx-auto px-5">
          <h1 className="text-3xl font-bold">Mohsen Ziad Bin Wael</h1>
          <p className="mt-2">CEO & Visionary Leader</p>
          <p className="mt-4">
            Mohsen Ziad Bin Wael is a key member of our team, bringing
            innovation and leadership to drive success. His expertise and vision
            shape the future of our company, guiding the team toward excellence
            and new opportunities.
          </p>
          <p className="mt-4">
            With years of experience in the industry, Mohsen has a proven track
            record of turning ambitious ideas into reality. His strategic
            mindset and dedication to excellence have been instrumental in
            driving the company's growth and establishing it as a leader in the
            field.
          </p>
          <p className="mt-4">
            Beyond his role as a CEO, Mohsen is passionate about fostering a
            culture of innovation, teamwork, and continuous improvement. His
            ability to inspire those around him ensures that every member of the
            team is motivated to reach their highest potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
