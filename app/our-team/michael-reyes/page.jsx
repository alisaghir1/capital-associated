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
            MICHAEL REYES
          </h1>
          <p className="absolute bottom-10 left-10 text-white">
            Home <span className="text-black">/ Our Team / MICHAEL REYES</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-10 items-center rounded-2xl mt-10">
        <div className="relative xl:ml-10 mt-10 h-[60rem] xl:w-[60rem] px-5 w-full">
          <Image
            src="/team/t1.JPG"
            alt="MICHAEL REYES"
            layout="fill"
            objectFit="cover"
            className="xl:rounded-xl"
          />
        </div>
        <div className="container mx-auto px-5">
          <h1 className="text-3xl font-bold">MICHAEL REYES</h1>
          <p className="mt-2">Document Control</p>
          <p className="mt-4">
            MICHAEL REYES is a key member of our team, known for his meticulous
            attention to detail and leadership in document control processes.
            His structured approach ensures that all project documentation is
            managed efficiently and accurately.
          </p>
          <p className="mt-4">
            With years of experience in document management and quality control,
            Michael plays a critical role in maintaining compliance, supporting
            project workflows, and ensuring seamless communication across
            departments.
          </p>
          <p className="mt-4">
            Beyond his expertise in document control, Michael brings a
            forward-thinking mindset that promotes innovation, collaboration,
            and continuous improvement. His ability to lead by example and
            support team growth makes him a respected and valued contributor to
            our organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
