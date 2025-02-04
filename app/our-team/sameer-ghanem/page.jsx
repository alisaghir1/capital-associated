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
            Sameer Ghanem
          </h1>
          <p className="absolute bottom-10 left-10 text-white">
            Home <span className="text-black">/ Our Team / Sameer Ghanem</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-10 items-center rounded-2xl mt-10">
        <div className="relative xl:ml-10 mt-10 h-[30rem] xl:w-[60rem] px-5 w-full">
          <Image
            src="/team/t4.jpg"
            alt="Sameer ghanem"
            layout="fill"
            objectFit="cover"
            className="xl:rounded-xl"
          />
        </div>
        <div className="container mx-auto px-5">
          <h1 className="text-3xl font-bold">Sameer Ghanem</h1>
          <p className="mt-2">Super Junior</p>
          <p className="mt-4">
            Sameer Ghanem is a talented and dedicated Super Junior Engineer,
            known for his problem-solving skills and eagerness to learn. His
            ability to quickly grasp new technologies and adapt to changing
            requirements makes him an invaluable asset to our engineering team.
          </p>
          <p className="mt-4">
            Sameer plays a crucial role in supporting the development of
            innovative solutions. His attention to detail and strong technical
            foundation allow him to contribute effectively to complex projects
            while continuously improving his skills under the guidance of senior
            engineers.
          </p>
          <p className="mt-4">
            Passionate about coding and technology, Sameer is committed to
            growing as a professional. His enthusiasm, teamwork, and dedication
            help drive the success of our engineering initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
