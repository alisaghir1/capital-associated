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
            HUSSAM AL RUSTOM
          </h1>
          <p className="absolute bottom-10 left-10 text-white">
            Home{" "}
            <span className="text-black">/ Our Team / HUSSAM AL RUSTOM</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-10 items-center rounded-2xl mt-10">
        <div className="relative xl:ml-10 mt-10 h-[60rem] xl:w-[60rem] px-5 w-full">
          <Image
            src="/team/t3.jpg"
            alt="HUSSAM AL RUSTOM"
            layout="fill"
            objectFit="cover"
            className="xl:rounded-xl"
          />
        </div>
        <div className="container mx-auto px-5">
          <h1 className="text-3xl font-bold">HUSSAM AL RUSTOM</h1>
          <p className="mt-2">Site Engineer</p>
          <p className="mt-4">
            HUSSAM AL RUSTOM is a skilled and dedicated Site Engineer known for
            his hands-on approach and technical expertise in overseeing
            construction and engineering projects. His attention to detail and
            commitment to quality ensure that every project is delivered to the
            highest standards.
          </p>
          <p className="mt-4">
            With a strong foundation in engineering principles and on-site
            project management, Hussam plays a key role in coordinating with
            contractors, managing resources, and ensuring compliance with safety
            and regulatory standards.
          </p>
          <p className="mt-4">
            Passionate about the field, Hussam thrives in fast-paced
            environments and is committed to driving efficiency and excellence
            on the ground. His collaborative nature and problem-solving skills
            make him an invaluable asset to our engineering operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
