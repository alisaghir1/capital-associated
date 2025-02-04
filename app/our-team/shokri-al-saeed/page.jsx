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
            Shokri Al Saeed
          </h1>
          <p className="absolute bottom-10 left-10 text-white">
            Home{" "}
            <span className="text-black">/ Our Team / Shokri Al Saeed</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-10 items-center rounded-2xl mt-10">
        <div className="relative ml-10 mt-10 h-[30rem] xl:w-[60rem] px-5 w-full">
          <Image
            src="/team/t5.jpg"
            alt="Shokri Al Saeed"
            layout="fill"
            objectFit="cover"
            className="xl:rounded-xl"
          />
        </div>
        <div className="container mx-auto px-5">
          <h1 className="text-3xl font-bold">Shokri Al Saeed</h1>
          <p className="mt-2">Chief Financial Officer (CFO)</p>
          <p className="mt-4">
            Shokri Al Saeed is the Chief Financial Officer of our company,
            overseeing financial strategy, planning, and risk management. His
            expertise in corporate finance and strategic investments ensures the
            long-term financial health of our organization.
          </p>
          <p className="mt-4">
            With a wealth of experience in financial management, Shokri has
            successfully led financial operations, optimizing resources and
            driving sustainable growth. His analytical approach and leadership
            skills play a crucial role in making informed business decisions.
          </p>
          <p className="mt-4">
            Beyond his financial acumen, Shokri is a mentor and advisor, guiding
            teams toward fiscal responsibility and efficiency. His dedication to
            financial excellence ensures the company's continued success in an
            ever-evolving economic landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
