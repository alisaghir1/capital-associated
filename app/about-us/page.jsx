import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full h-full mb-10">
      <div className="bg-slate-100">
        {/* Fullscreen Background Section */}
        <div className="relative w-full h-screen ">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/Mainhome.jpg"
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
          {/* Text and Image Side by Side */}
          <div className="flex flex-col lg:flex-row lg:items-start items-center gap-10">
            {/* Left Text Content */}
            <div className="lg:w-1/2 flex flex-col gap-5">
              <p className="text-xl">
                Capital Associated Building Contracting LLC
              </p>
              <h1 className="text-2xl font-bold">
                Capital Associated Building Contracting{" "}
                <span className="font-normal text-xs">
                  is a construction company in Dubai, UAE.
                </span>
              </h1>
              <p className="mt-4">
                Our extensive experience in the construction industry has
                established us as an essential partner in shaping Dubai’s
                spectacular skyline and contributing to its rapid growth.
              </p>
              <p className="mt-4">
                Capital Associated Building Contracting in Dubai focuses on
                providing exceptional construction solutions while maintaining
                the highest levels of customer service and creativity. Our
                diverse portfolio comprises commercial buildings, residential
                towers, industrial facilities, and infrastructure projects. Each
                project demonstrates our knowledge and experience as an elite
                construction company in Dubai.
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
            Our success is built on customer happiness. We value strong and
            long-lasting relationships with our clients, which are built on
            confidence, transparency, and effective communication. Throughout
            the construction process, we try to understand and surpass our
            clients’ individual requirements and objectives.
          </p>
          <p className="mt-4">
            Everyone on our team is a critical component of our success. Our
            team of highly qualified experts, which includes architects,
            engineers, project managers, and skilled workers, provides a diverse
            set of abilities and backgrounds to each project. This diversity
            ensures the success of all projects.
          </p>
          <p className="mt-4">
            Our approach is built around embracing cutting-edge technologies and
            construction processes. Investing in cutting-edge equipment and
            creative procedures improves productivity and safety while
            minimizing environmental effect. Our strategy incorporates
            responsible practices throughout our operations.
          </p>
          <p className="mt-4">
            Quality is important to everything we do. To ensure that projects
            meet the highest standards, we follow stringent control methods and
            extensive inspection procedures. When reliable partners and
            suppliers are associated with, top-tier products and services are
            produced.
          </p>

          <div className="mt-5 flex flex-col xl:flex-row justify-center items-center gap-10 xl:gap-4">
            {/* Left Image */}
            <div className="xl:w-1/4 w-full px-5 xl:px-0 h-[300px] xl:h-[500px]">
              <Image
                src="/about/about3.jpg"
                alt="Left Image"
                width={1000}
                height={500}
                className="h-full w-full object-cover  xl:rounded-se-[300px] xl:rounded-es-[300px]"
              />
            </div>

            {/* Middle Image */}
            <div className="xl:w-1/2 w-full px-5 xl:px-0 h-[300px] xl:h-[500px]">
              <Image
                src="/about/about4.jpg"
                alt="Middle Image"
                width={1200}
                height={500}
                className="h-full w-full object-cover  xl:rounded-ss-[300px] xl:rounded-ee-[300px]"
              />
            </div>

            {/* Right Image */}
            <div className="xl:w-1/4 w-full px-5 xl:px-0 h-[300px] xl:h-[500px]">
              <Image
                src="/about/about5.jpg"
                alt="Right Image"
                width={1200}
                height={500}
                className="h-full w-full object-cover  xl:rounded-se-[300px] xl:rounded-es-[300px]"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 px-4">
            <p className="mt-4">
              Our construction sites all place a strong emphasis on safety. Most
              importantly, we care about the health of our employees and the
              communities in which we operate. To provide a safe workplace, we
              follow both national and international laws. Our employees have
              the necessary knowledge and skills thanks to stringent safety
              requirements and training programs.
            </p>
            <p className="mt-4">
              As a responsible corporate citizen, Capital Associated Building
              Contracting in Dubai actively engages in social initiatives,
              aiming to make a positive impact on the communities we serve. Our
              efforts focus on promoting education, healthcare, and sustainable
              development through partnerships and collaborations.
            </p>
            <p className="mt-4 mb-20">
              If you are looking for developers in Dubai, Abu Dhabi, Sharjah, Al
              Ain or anywhere in UAE or the world, we are here to help as your
              one-stop construction and fit-out company. Investors, or
              individuals seeking a reliable construction and complete fit-out
              company in Dubai, Capital Associated Building Contracting stands
              ready to fulfill your aspirations.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center bg-yellow-950 text-white p-10 xl:rounded-b-[300px] mt-5">
        <p className="mt-4">
          Explore our website to learn more about our projects, services that
          cover general contracting, construction management, design-build,
          renovation & remodeling, pre-construction services, value engineering,
          green building solutions, specialty construction or interior fit-out,
          and values!
        </p>
        <p className="mt-4">
          Let us collaborate for your design-build projects, construction
          management or general contracting needs for a future of excellence and
          enduring success, contributing to the ever-evolving landscape of
          Dubai, Abu Dhabi, Sharjah, Al Ain or wherever you are in UAE or the
          world!
        </p>
        <h1 className="my-10 text-2xl">Quality</h1>
        <p className="mt-4">
          Quality is the cornerstone of our approach at Capital Associated
          Building Contracting (CABC). We are committed to delivering projects
          of the highest standards, ensuring meticulous attention to detail and
          adherence to stringent quality control measures.
        </p>
        <p className="mt-4 mb-20">
          From the selection of top-quality materials to the implementation of
          rigorous inspection processes, we strive for excellence in every
          aspect of our construction projects.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
