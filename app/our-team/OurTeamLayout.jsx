import React from "react";
import Image from "next/image";
import VidioComponent from "../components/VidioComponent";
import Link from "next/link";

const teamMembers = [
  {
    image: "/team/t4.jpg",
    name: "RAMAZ IZZA",
    position: "Managing Director",
    path: "/our-team/ramaz-izza",
  },
  {
    image: "/team/t1.jpg",
    name: "MICHAEL REYES",
    position: "Document Control",
    path: "/our-team/michael-reyes",
  },
  {
    image: "/team/t2.jpg",
    name: "LAKSHMI MOHAN",
    position: "Estimation Engineer",
    path: "/our-team/lakshmi-mohan",
  },
];

const OurTeamLayout = () => {
  return (
    <div>
      <div className="relative w-full h-[70vh] min-h-[400px] max-h-[700px] lg:max-h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/main.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        {/* Content on top of the image */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center px-8 pt-24 xl:pt-28">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
            Meet Our Team
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black mt-5">
            The passionate minds driving our success.
          </p>
          <p className="absolute bottom-10 left-10 text-white">
            Home <span className="text-black">/ Team</span>
          </p>
        </div>
      </div>
      <div className="">
        <section className="flex flex-col justify-center items-center gap-5 py-20">
          <h1 className="lg:text-3xl text-2xl xl:text-4xl">Our Team</h1>
          <p className="lg:text-2xl text-xl xl:text-3xl">
            Driven by Expertise, United for Excellence
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-4 mt-10 w-full mx-auto container px-10 xl:px-0">
            {teamMembers.map((member, index) => (
              <Link key={index} href={member.path}>
                <div>
                  <div className=" w-full h-[34rem] border border-black mb-4 ">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="sm:rounded-full object-cover w-full h-full"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-black">{member.position}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="container mx-auto flex flex-col justify-center items-center gap-5 py-20 px-5 xl:px-0">
          <h2 className="lg:text-2xl text-bold text-xl xl:text-3xl text-center">
            Senior-Led Project Delivery Across the UAE
          </h2>
          <p className="lg:text-1xl text-gray-500 mt-10 text-lg xl:text-2xl text-center">
            Capital Associated was co-founded by Mohab Ayoub and Ramaz Izza in 2021. Our project teams are led by engineers and construction managers with hands-on experience across residential, commercial, and high-rise developments in Dubai, Abu Dhabi, and Sharjah.
            <br /><br />
            Every project is assigned a dedicated project manager who owns the programme, the budget, and the quality control process from mobilisation through handover. We keep our structure flat &mdash; senior oversight on every project, direct communication at every stage, and accountability that does not get passed down a chain.
            <br /><br />
            Our team includes estimation engineers, document controllers, site supervisors, and HSE officers &mdash; each working on active construction sites across the UAE.
          </p>
        </section>

        <VidioComponent />
      </div>
    </div>
  );
};

export default OurTeamLayout;
