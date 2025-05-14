import React from "react";
import Image from "next/image";

const AboutLayout = () => {
  return (
    <div className="w-full h-full mb-10">
      <div className="bg-slate-100">
        {/* Fullscreen Background Section */}
        <div className="relative w-full h-screen">
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
              About Us
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
              Building Your Vision, Crafting Tomorrow.
            </p>
            <p className="absolute bottom-10 left-10 text-white">
              Home <span className="text-black">/ About Us</span>
            </p>
          </div>
        </div>

        {/* Container Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row lg:items-start items-center gap-10">
            {/* Left Text Content */}
            <div className="lg:w-1/2 flex flex-col gap-5">
              <p className="text-xl">Capital Associated Building Contracting LLC</p>
              <h1 className="text-2xl font-bold">
                Capital Associated Building Contracting{" "}
                <span className="font-normal text-xs">
                  is a premier contractor and builder based in Dubai, UAE.
                </span>
              </h1>
              <p className="mt-4">
                With years of proven experience in the construction industry, we play a vital role in shaping Dubai’s iconic skyline and driving its urban development.
              </p>
              <p className="mt-4">
                We specialize in delivering high-quality construction solutions with a strong focus on client satisfaction, technical excellence, and innovation. Our portfolio includes commercial complexes, residential towers, industrial facilities, and infrastructure developments, each completed to the highest standards of quality and safety.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center items-center">
              <Image
                src="/about/about1.jpg"
                alt="About Us Image"
                width={1200}
                height={600}
                className="lg:rounded-es-[300px] lg:rounded-se-[300px] h-[30rem]"
              />
            </div>
          </div>

          {/* Full-width Bottom Image */}
          <div className="mt-5 hidden xl:flex">
            <Image
              src="/about/about2.jpg"
              alt="Full Width Image"
              layout="responsive"
              width={1920}
              height={1080}
              className="xl:rounded-b-[300px] rounded-b-[100px]"
            />
          </div>
        </div>

        <div className="w-full container mx-auto flex flex-col gap-5 text-center px-4">
          <p className="mt-4">
            At the core of our operations is a deep commitment to client satisfaction. We build lasting relationships grounded in trust, transparency, and clear communication—ensuring every client’s vision is fully understood and delivered.
          </p>
          <p className="mt-4">
            Our success is driven by a dedicated team of architects, engineers, project managers, and skilled workers. Their collective expertise and professionalism guarantee consistent project delivery, no matter the scale or complexity.
          </p>
          <p className="mt-4">
            We embrace advanced technologies and construction methodologies to improve efficiency, safety, and environmental responsibility. Our continuous investment in state-of-the-art equipment and sustainable practices reflects our dedication to future-ready building solutions.
          </p>
          <p className="mt-4">
            Quality is the foundation of every project we undertake. Strict quality control systems and thorough inspection procedures ensure outstanding results. We work only with reputable partners and suppliers to maintain excellence across every phase of construction.
          </p>

          <div className="mt-5 flex flex-col xl:flex-row justify-center items-center gap-10 xl:gap-4">
            <div className="xl:w-1/4 w-full px-5 xl:px-0 h-[300px] xl:h-[500px]">
              <Image
                src="/about/about3.jpg"
                alt="Construction Site"
                width={1000}
                height={500}
                className="h-full w-full object-cover xl:rounded-se-[300px] xl:rounded-es-[300px]"
              />
            </div>

            <div className="xl:w-1/2 w-full px-5 xl:px-0 h-[300px] xl:h-[500px]">
              <Image
                src="/about/about4.jpg"
                alt="Project in Progress"
                width={1200}
                height={500}
                className="h-full w-full object-cover xl:rounded-ss-[300px] xl:rounded-ee-[300px]"
              />
            </div>

            <div className="xl:w-1/4 w-full px-5 xl:px-0 h-[300px] xl:h-[500px]">
              <Image
                src="/about/about5.jpg"
                alt="Project Completion"
                width={1200}
                height={500}
                className="h-full w-full object-cover xl:rounded-se-[300px] xl:rounded-es-[300px]"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 px-4">
            <p className="mt-4">
              Safety is our top priority. Our sites strictly adhere to national and international HSE standards, ensuring safe working environments through compliance with NEBOSH, IOSH, and OSHA guidelines. Comprehensive training programs empower our workforce to operate safely and effectively.
            </p>
            <p className="mt-4">
              As a socially responsible company, we support community growth through initiatives focused on education, health, and sustainable development. We actively contribute to society by forming impactful partnerships and fostering positive change.
            </p>
            <p className="mt-4 mb-20">
              Whether you’re an investor or client seeking a trusted contractor for your construction or fit-out project in Dubai, Abu Dhabi, Sharjah, Al Ain, or beyond—Capital Associated Building Contracting is your partner for excellence in execution and timely delivery.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center bg-yellow-950 text-white p-10 xl:rounded-b-[300px] mt-5">
        <p className="mt-4">
          Explore our website to discover more about our services, including general contracting, construction management, design-build, renovation and remodeling, pre-construction planning, value engineering, sustainable building solutions, specialty construction, and complete interior fit-outs.
        </p>
        <p className="mt-4">
          Let’s work together to build a legacy—whether your project is in Dubai, Abu Dhabi, Sharjah, Al Ain, or anywhere in the UAE or abroad. Capital Associated Building Contracting delivers excellence, every time.
        </p>
        <h1 className="my-10 text-2xl">Quality</h1>
        <p className="mt-4">
          Quality is the foundation of our commitment at Capital Associated Building Contracting (CABC). We ensure every project is delivered with meticulous attention to detail and compliance with the highest quality standards.
        </p>
        <p className="mt-4 mb-20">
          From selecting top-grade materials to implementing thorough inspection protocols, our dedication to excellence is reflected in every phase of construction.
        </p>
      </div>
    </div>
  );
};

export default AboutLayout;
