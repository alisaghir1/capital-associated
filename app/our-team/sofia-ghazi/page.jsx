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
            Sofia Ghazi
          </h1>
          <p className="absolute bottom-10 left-10 text-white">
            Home <span className="text-black">/ Our Team / Sofia Ghazi</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-10 items-center rounded-2xl mt-10">
        <div className="relative xl:ml-10 mt-10 h-[30rem] xl:w-[60rem] px-5 w-full">
          <Image
            src="/team/t5.jpg"
            alt="Sofia Ghazi"
            layout="fill"
            objectFit="cover"
            className="xl:rounded-xl"
          />
        </div>
        <div className="container mx-auto px-5">
          <h1 className="text-3xl font-bold">Sofia Ghazi</h1>
          <p className="mt-2">Head of Department</p>
          <p className="mt-4">
            Sofia Ghazi is a dynamic leader, overseeing department operations
            with strategic vision and efficiency. With years of experience in
            management and coordination, she ensures seamless workflow and
            optimal performance across teams.
          </p>
          <p className="mt-4">
            Sofia is known for her ability to foster collaboration and
            innovation, enabling her team to achieve exceptional results. Her
            leadership style focuses on empowering individuals and cultivating a
            workplace culture of excellence and mutual respect.
          </p>
          <p className="mt-4">
            Passionate about continuous improvement, Sofia drives the department
            forward by implementing best practices, streamlining processes, and
            embracing new challenges with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
