import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="relative h-[30rem] w-full">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/main.jpg"
              alt="Background Image"
              layout="fill" // This will make the image cover the entire screen
              objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
              priority
            />
          </div>

          {/* Content on top of the image */}
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
            <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
              Renovation & Remodeling
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
              Precision Remodeling. Elevated Design
            </p>
            <p className="absolute bottom-10 left-10 text-white">
              Home{" "}
              <span className="text-black">
                / Our Services / Renovation & Remodeling
              </span>
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col gap-5 text-center px-4">
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/renovation-and-remodeling/1.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-b-[300px] rounded-b-[100px]"
            />
          </div>
          <p className="mt-4">
            At Capital Associated Building Contracting, we bring years of
            experience and expertise to every project we undertake. Our team of
            seasoned professionals possesses a wealth of knowledge in
            construction, design, and project management.
          </p>
          <p className="mt-4">
            We have honed our skills through numerous successful renovations and
            remodels, ensuring that we deliver top-notch results tailored to
            your unique requirements. From concept to completion, we handle
            every aspect of your project with professionalism and precision.
          </p>
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/renovation-and-remodeling/2.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-t-[300px] rounded-t-[100px]"
            />
          </div>
          <h1 className="xl:text-3xl text-2xl border-b border-b-black w-full pb-10">
            Comprehensive Renovation Services
          </h1>
          <div className="flex flex-col text-start justify-center mt-10">
            <p className="xl:text-xl text-lg font-bold mb-4">
              1- Restaurant / Clinic / Retail Renovations
            </p>
            <p className="mb-4">
              Transform your restaurant, clinic, or retail space into a
              functional and visually striking environment. We focus on design
              elements that support your business goals while delivering a unique
              experience for your clients or customers.
            </p>
            <div className="flex gap-5">
              <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                <Image
                  src="/services/renovation-and-remodeling/3.jpg"
                  alt="Full Width Image"
                  layout="fill"
                  objectFit="cover"
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
              <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                <Image
                  src="/services/renovation-and-remodeling/4.jpg"
                  alt="Full Width Image"
                  layout="fill"
                  objectFit="cover"
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                2- Villa Renovation
              </p>
              <p className="mb-4">
                Refresh your villa with a luxurious renovation that elevates both
                comfort and style. Our team handles everything from design to
                implementation to ensure your vision becomes a reality.
              </p>
              <div className="flex gap-5">
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  <Image
                    src="/services/renovation-and-remodeling/5.jpg"
                    alt="Full Width Image"
                    layout="fill"
                    objectFit="cover"
                    className="xl:rounded-b-[150px] rounded-b-[50px]"
                  />
                </div>
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  <Image
                    src="/services/renovation-and-remodeling/6.jpg"
                    alt="Full Width Image"
                    layout="fill"
                    objectFit="cover"
                    className="xl:rounded-b-[150px] rounded-b-[50px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                3- Living Space Renovation
              </p>
              <p className="mb-4">
                Maximize the potential of your living areas with our
                comprehensive renovation solutions. Whether it’s a cozy family
                room, an inviting dining area, or a stylish entertainment space,
                we create environments that reflect your lifestyle and foster
                comfort and togetherness.
              </p>
              <div className="flex gap-5">
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  <Image
                    src="/services/renovation-and-remodeling/7.jpg"
                    alt="Full Width Image"
                    layout="fill"
                    objectFit="cover"
                    className="xl:rounded-b-[150px] rounded-b-[50px]"
                  />
                </div>
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  <Image
                    src="/services/renovation-and-remodeling/8.jpg"
                    alt="Full Width Image"
                    layout="fill"
                    objectFit="cover"
                    className="xl:rounded-b-[150px] rounded-b-[50px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                4- Landscaping / Softscaping / Hardscaping
              </p>
              <p className="mb-4">
                Transform your outdoor space with our expert landscaping
                services. Whether it’s softscaping for lush greenery or hardscaping
                for a more structured layout, we design your landscape to complement
                your home’s aesthetic and function.
              </p>
              <div className="relative mt-5 h-64 xl:h-[30rem]">
                <Image
                  src="/services/renovation-and-remodeling/9.jpg"
                  alt="Full Width Image"
                  layout="fill"
                  objectFit="cover"
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                5- Villa Extension
              </p>
              <p className="mb-4">
                Expand your living space with seamless villa extensions that blend
                harmoniously with your existing structure. Whether it’s an extra
                bedroom, a home office, or a dedicated entertainment area, we
                ensure a seamless integration that maintains the architectural
                integrity of your home.
              </p>
              <div className="relative mt-5 h-64 xl:h-[30rem] mb-20">
                <Image
                  src="/services/renovation-and-remodeling/10.jpg"
                  alt="Full Width Image"
                  layout="fill"
                  objectFit="cover"
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <div className="container px-5 mx-auto flex flex-col items-center justify-center text-center gap-5 pt-20 pb-20">
          <h1 className="xl:text-3xl text-2xl text-center border-b border-b-black w-full pb-10">
            Contact Us for Renovation & Remodeling Services in Dubai
          </h1>
          <p className="mb-4">
            Thinking of upgrading your space? Our expert renovation services can
            help transform your vision into reality. Contact us today for a
            consultation and let’s start planning your next project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
