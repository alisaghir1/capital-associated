import React from "react";
import Image from "next/image";
import VidioComponent from "../components/VidioComponent";
import Link from "next/link";

const teamMembers = [
  {
    image: "/team/t1.JPG",
    name: "MICHAEL REYES",
    position: "Document Control",
    path: "/our-team/michael-reyes",
  },
  {
    image: "/team/t2.JPG",
    name: "LAKSHMI MOHAN",
    position: "Estimation Engineer",
    path: "/our-team/lakshmi-mohan",
  },
  {
    image: "/team/t3.JPG",
    name: "HUSSAM AL RUSTOM",
    position: "Site Engineer",
    path: "/our-team/hussam-al-rustom",
  },
  {
    image: "/team/t4.JPG",
    name: "RAMAZ IZZA",
    position: "Managing Director",
    path: "/our-team/ramaz-izza",
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
          <p className="lg:text-2xl text-bold text-xl xl:text-3xl">
            WE HAVE GREAT CREATIVE TEAM.
          </p>
          <p className="lg:text-1xl text-gray-500 mt-10 text-lg xl:text-2xl">
            At Capital Associated Contracting, we take pride in having a team of
            highly skilled and experienced professional engineers who are
            dedicated to delivering top-notch contracting and fit-out services.
            Our engineers possess a wealth of knowledge and expertise in their
            respective fields, and are committed to providing innovative and
            practical solutions to meet our clients&apos; needs. From design and
            planning to execution and delivery, our engineers work closely with
            our clients to ensure that every project is completed to the highest
            standards of quality and excellence. With their vast experience and
            unwavering commitment to excellence, our engineers are an integral
            part of our success at Capital Associated Contracting.
          </p>
        </section>
        <VidioComponent />
      </div>
    </div>
  );
};

export default OurTeamLayout;
