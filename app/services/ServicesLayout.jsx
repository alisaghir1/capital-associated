import React from "react";
import Image from "next/image";
import Link from "next/link";
import VidioComponent from "../components/VidioComponent";

const ServicesLayout = () => {
  return (
    <div>
      {" "}
      <div className="relative z-0 w-full h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/main.jpg"
            alt="Background Image"
            layout="fill" // This will make the image cover the entire screen
            objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
          />
        </div>

        {/* Content on top of the image */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
          <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
            Our Services
          </h1>
          <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
            Strong Foundations, Exceptional Results
          </p>
          <p className="absolute  bottom-10 left-10 text-white">
            Home <span className="text-black">/ Our Services</span>
          </p>
        </div>
      </div>
      <section className="container z-50 mt-20 mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 pb-10 border-b border-b-black">
        {/* First Row */}
        <Link href={"/services/general-contracting"}>
          <div className="relative z-50 group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-transparent transition-all duration-300 ease-in-out text-center flex justify-center items-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              >
                General Contracting
              </div>
              {/* Top-right part */}
              <div
                className="bg-black border transition-all duration-300 ease-in-out group-hover:opacity-100 bg-[url('/services/s1.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-black rounded-es-full transition-all duration-300 ease-in-out bg-[url('/services/s1.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-bottom cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              ></div>
              {/* Bottom-right part */}
              <div
                className="bg-black rounded-ee-full transition-all duration-300 ease-in-out bg-[url('/services/s1.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-bottom cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              ></div>
            </div>
          </div>
        </Link>

        {/* Second Row */}
        <Link href={"/services/construction-management"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-transparent transition-all duration-300 ease-in-out flex justify-center text-center items-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              >
                Construction Management
              </div>
              {/* Top-right part */}
              <div
                className="bg-black transition-all duration-300 ease-in-out bg-[url('/services/s2.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-black rounded-es-full transition-all duration-300 ease-in-out bg-[url('/services/s2.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-bottom cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              ></div>
              {/* Bottom-right part */}
              <div
                className="bg-black rounded-ee-full transition-all duration-300 ease-in-out bg-[url('/services/s2.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-bottom cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              ></div>
            </div>
          </div>
        </Link>

        {/* Third Row */}
        <Link href={"/services/design-build"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-transparent transition-all duration-300 ease-in-out flex justify-center items-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              >
                Design Build
              </div>
              {/* Top-right part */}
              <div
                className="bg-black transition-all duration-300 ease-in-out bg-[url('/services/s3.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-black rounded-es-full transition-all duration-300 ease-in-out bg-[url('/services/s3.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-bottom cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              ></div>
              {/* Bottom-right part */}
              <div
                className="bg-black rounded-ee-full transition-all duration-300 ease-in-out bg-[url('/services/s3.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-bottom cursor-pointer"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              ></div>
            </div>
          </div>
        </Link>
      </section>
      <section className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 py-10 border-b border-b-black">
        {/* Second Row */}

        <Link href={"/services/renovation-and-remodeling"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-black rounded-ss-full flex justify-center text-center items-center border bg-[url('/services/s4.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              ></div>
              {/* Top-right part */}
              <div
                className="bg-black rounded-se-full bg-[url('/services/s4.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-transparent border border-black flex justify-center items-center text-center group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              >
                Renovation & Remodeling
              </div>
              {/* Bottom-right part */}
              <div
                className="bg-black bg-[url('/services/s4.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-bottom cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              ></div>
            </div>
          </div>
        </Link>

        <Link href={"/services/pre-construction-services"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-black rounded-ss-full flex justify-center text-center items-center border bg-[url('/services/s5.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              ></div>
              {/* Top-right part */}
              <div
                className="bg-black rounded-se-full bg-[url('/services/s5.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-transparent border border-black flex justify-center items-center text-center group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              >
                Pre-Construction Services
              </div>
              {/* Bottom-right part */}
              <div
                className="bg-black bg-[url('/services/s5.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-bottom cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              ></div>
            </div>
          </div>
        </Link>

        <Link href={"/services/value-engineering"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-black rounded-ss-full flex justify-center text-center items-center border bg-[url('/services/s6.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              ></div>
              {/* Top-right part */}
              <div
                className="bg-black rounded-se-full bg-[url('/services/s6.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-transparent border border-black flex justify-center items-center text-center group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              >
                Value Engineering
              </div>
              {/* Bottom-right part */}
              <div
                className="bg-black bg-[url('/services/s6.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-bottom cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              ></div>
            </div>
          </div>
        </Link>
      </section>
      <section className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 py-10 border-b border-b-black">
        {/* Second Row */}
        <Link href={"/services/green-building-solutions"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-black rounded-ss-full flex justify-center text-center items-center border bg-[url('/services/s7.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              ></div>
              {/* Top-right part */}
              <div
                className="bg-black rounded-se-full bg-[url('/services/s7.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-black bg-[url('/services/s7.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-bottom cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              ></div>
              {/* Bottom-right part */}
              <div
                className="bg-transparent flex justify-center items-center text-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              >
                Green Building Solutions
              </div>
            </div>
          </div>
        </Link>

        <Link href={"/services/specialty-construction"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-black rounded-ss-full flex justify-center text-center items-center border bg-[url('/services/s8.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              ></div>
              {/* Top-right part */}
              <div
                className="bg-black rounded-se-full bg-[url('/services/s8.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-black bg-[url('/services/s8.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-bottom cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              ></div>
              {/* Bottom-right part */}
              <div
                className="bg-transparent flex justify-center items-center text-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              >
                Specialty Construction
              </div>
            </div>
          </div>
        </Link>

        <Link href={"/services/interior-fit-out"}>
          <div className="relative group h-[20rem] w-full gap-1">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              {/* Top-left part */}
              <div
                className="bg-black rounded-ss-full flex justify-center text-center items-center border bg-[url('/services/s9.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                }}
              ></div>
              {/* Top-right part */}
              <div
                className="bg-black rounded-se-full bg-[url('/services/s9.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-right-top cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 0%",
                }}
              ></div>
              {/* Bottom-left part */}
              <div
                className="bg-black bg-[url('/services/s9.jpg')] group-hover:bg-no-repeat group-hover:bg-cover group-hover:bg-left-bottom cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 100%",
                }}
              ></div>
              {/* Bottom-right part */}
              <div
                className="bg-transparent flex justify-center items-center text-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
              >
                Interior Fit-Out
              </div>
            </div>
          </div>
        </Link>
      </section>
      <section className="container mx-auto px-10 py-10 text-center">
        <p className="mb-5">
        At Capital Associated Building Contracting, we deliver high-quality construction solutions in Dubai and across the UAE, offering a comprehensive range of services tailored to residential, commercial, and industrial developments. With years of industry expertise, we bring precision, innovation, and professionalism to every project—regardless of scale or complexity
        </p>
        <h3 className="my-5">Our Services Include:</h3>
        <p className="mb-5">
        <strong>Design & Build</strong> We offer end-to-end design-build solutions, managing every stage from concept to completion to provide a seamless, efficient building process.

        </p>
        <p className="mb-5">
          Renovations and Fit-Outs: Our team is skilled in transforming existing
          spaces, adding value and modernizing structures to meet the evolving
          needs of our clients.
        </p>
        <p className="mb-5">
        <strong>Construction Management</strong> Our team oversees every phase—from budgeting and scheduling to quality control—ensuring your project stays on track, on time, and within budget.

        </p>
        <p className="mb-5">
        <strong>Renovation & Fit-Out</strong> We specialize in modernizing existing spaces through expert renovation and interior fit-out services, adding value while enhancing form and function.

        </p>
        <p className="mb-5">
        <strong>Project Consultancy</strong> Our consultants provide strategic guidance on design optimization, material selection, risk management, and timeline planning—ensuring informed decisions at every step.
        </p>
        <p className="mb-5">
       <strong> Sustainability Solutions</strong> We integrate green building practices and energy-efficient technologies to reduce environmental impact while maintaining superior construction quality.
        </p>
      </section>
      <VidioComponent />
    </div>
  );
};

export default ServicesLayout;
