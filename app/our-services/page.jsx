import React from "react";
import Image from "next/image";
import Link from "next/link";
import VidioComponent from "../components/VidioComponent";

const OurServices = () => {
  return (
    <div>
      {" "}
      <div className="relative z-0 w-full h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Mainhome.jpg"
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

        {/* Second Row */}
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

        {/* Third Row */}
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
      </section>
      <section className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 py-10 border-b border-b-black">
        {/* Second Row */}
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
      </section>
      <section className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 py-10 border-b border-b-black">
        {/* Second Row */}
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
      </section>
      <section className="container mx-auto px-10 py-10 text-center">
        <p className="mb-5">
          Our building contracting company is dedicated to delivering top-tier
          construction services, offering a comprehensive range of solutions to
          meet the diverse needs of our clients. With years of experience in the
          industry, we specialize in residential, commercial, and industrial
          projects, ensuring that every venture is completed with the highest
          standards of quality and professionalism.
        </p>
        <h3 className="my-5">Our Services Include:</h3>
        <p className="mb-5">
          Design and Build: From concept to completion, we handle every aspect
          of the project, ensuring a seamless experience for our clients.
          Construction Management: We oversee every phase of construction, from
          budgeting and scheduling to quality control, ensuring that projects
          are completed on time and within budget.
        </p>
        <p className="mb-5">
          Renovations and Fit-Outs: Our team is skilled in transforming existing
          spaces, adding value and modernizing structures to meet the evolving
          needs of our clients.
        </p>
        <p className="mb-5">
          Project Consultancy: We offer expert advice and solutions to optimize
          design, materials, and timelines, helping clients achieve their goals
          with minimal risk. Sustainability Solutions: We integrate eco-friendly
          and energy-efficient practices into all our projects, ensuring a
          positive environmental impact while maintaining exceptional quality.
        </p>
        <p className="mb-5">
          Why Choose Us: At our core, we are a team of highly skilled
          professionals who are passionate about delivering excellence. Our
          reputation for quality, integrity, and reliability sets us apart in
          the industry. We pride ourselves on clear communication, collaboration
          with clients, and a commitment to exceeding expectations.
        </p>
        <p className="mb-5">
          We understand that each project is unique, and we tailor our approach
          to meet the specific needs and goals of our clients. Our team is
          committed to using the latest construction techniques, materials, and
          technologies, ensuring that every project is executed with precision
          and attention to detail.
        </p>
        <p className="mb-5">
          From initial planning to the final handover, we ensure professionalism
          at every step, making us your trusted partner in building exceptional
          spaces.
        </p>
      </section>
      <VidioComponent />
    </div>
  );
};

export default OurServices;
