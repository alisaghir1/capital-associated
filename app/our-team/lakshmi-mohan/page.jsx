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
            LAKSHMI MOHAN
          </h1>
          <p className="absolute bottom-10 left-10 text-white">
            Home <span className="text-black">/ Our Team / LAKSHMI MOHAN</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-10 items-center rounded-2xl mt-10">
        <div className="relative xl:ml-10 mt-10 h-[60rem] xl:w-[60rem] px-5 w-full">
          <Image
            src="/team/t2.JPG"
            alt="LAKSHMI MOHAN"
            layout="fill"
            objectFit="cover"
            className="xl:rounded-xl"
          />
        </div>
        <div className="container mx-auto px-5">
          <h1 className="text-3xl font-bold">LAKSHMI MOHAN</h1>
          <p className="mt-2">Estimation Engineer</p>
          <p className="mt-4">
            LAKSHMI MOHAN is a detail-oriented and highly skilled Estimation
            Engineer with a strong background in cost analysis and project
            planning. Her expertise ensures accurate and competitive estimates
            that support the successful execution of engineering and
            construction projects.
          </p>
          <p className="mt-4">
            With a deep understanding of industry standards, material
            specifications, and project requirements, Lakshmi plays a crucial
            role in evaluating tender documents, preparing cost breakdowns, and
            coordinating with project managers and stakeholders to deliver
            precise and timely estimates.
          </p>
          <p className="mt-4">
            Lakshmi’s commitment to accuracy, efficiency, and continuous
            improvement helps optimize project budgets and timelines. Her
            collaborative approach and analytical mindset make her an invaluable
            asset to our engineering and project planning teams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
