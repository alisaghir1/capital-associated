
import React from 'react'
import Image from 'next/image'
import VidioComponent from "../components/VidioComponent";
import t1 from "../../public/team/t1.jpg";
import t2 from "../../public/team/t2.jpg";
import t3 from "../../public/team/t3.jpg";
import t4 from "../../public/team/t4.jpg";
import t5 from "../../public/team/t5.jpg";
import t6 from "../../public/team/t6.jpg";

const teamMembers = [
  { image: t1, name: "Mohsen Ziad Bin Wael", position: "CEO" },
  { image: t2, name: "Carlos Smaha", position: "Head of engineers" },
  { image: t3, name: "Loubna Lahoud", position: "Co-Founder" },
  { image: t4, name: "Co-Founder", position: "Super Junior" },
  { image: t5, name: "Shokri Al Saeed", position: "CFO" },
  { image: t6, name: "Sofia Ghazi", position: "Head of Department" },
];

const Team = () => {
  return (
    <div>
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
            <div key={index}>
              <div className=" w-full h-96 border border-black mb-4 ">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="sm:rounded-full object-cover w-full h-full"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold">{member.name}</p>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
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
  )
}

export default Team