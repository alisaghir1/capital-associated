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
      <div className="relative w-full h-screen ">
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
            Meet Our Team
          </h1>
          <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
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
          <p className="lg:text-2xl text-bold text-xl xl:text-3xl text-center">
            Professional Project Managers, Engineers, Supervisors and Skilled Personnel and Staffs in Dubai
          </p>
          <p className="lg:text-1xl text-gray-500 mt-10 text-lg xl:text-2xl text-center">
            At Capital Associated Contracting, we are recognized as a professional building and construction company in Dubai. 
            Our dedicated team of project managers, engineers, supervisors, and skilled personnel brings decades of combined experience in executing 
            high-quality construction works. We specialize in residential, commercial, industrial, and fit-out projects across the UAE.
            <br /><br />
            Our team focuses on every aspect of construction — from planning, site execution, and quality control to timely project delivery. 
            We emphasize technical excellence, HSE compliance, and innovative solutions tailored to meet the specific needs of our clients. 
            Whether it's structural construction, civil engineering, or general contracting, we strive for excellence and durability in everything we build.
            <br /><br />
            As a trusted name among building contractors in Dubai, our team-driven approach ensures reliable, cost-effective, and future-ready construction outcomes for every project.
          </p>
        </section>

        <VidioComponent />
      </div>
    </div>
  );
};

export default OurTeamLayout;
