import React from "react";
import Image from "next/image";
import VidioComponent from "./VidioComponent";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
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

const OurTeam = () => {
  return (
    <div className="">
      <section className="flex flex-col justify-center items-center gap-5 py-20">
        <motion.h1
          variants={fadeIn("down", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="lg:text-3xl text-2xl xl:text-4xl"
        >
          Our Team
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="lg:text-2xl text-xl xl:text-3xl"
        >
          Driven by Expertise, United for Excellence
        </motion.p>

        <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-4 mt-10 w-full mx-auto container px-10 xl:px-0">
          {teamMembers.map((member, index) => (
            <Link key={index} href={member.path}>
              <motion.div
                variants={fadeIn("right", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className=" w-full h-[34rem] border border-black mb-4 ">
                  <Image
                    width={500}
                    height={500}
                    src={member.image}
                    alt={member.name}
                    objectFit="cover"
                    className="sm:rounded-full object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-black">{member.position}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
      <motion.section
        variants={fadeIn("up", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="container mx-auto flex flex-col justify-center items-center gap-5 py-20 px-5 xl:px-0"
      >
        <p className="lg:text-2xl text-bold text-xl xl:text-3xl">
        Elite Team of Engineers, Architects & Designers in Dubai
        </p>
        <p className="lg:text-1xl text-gray-500 mt-10 text-lg xl:text-2xl">
        At Capital Associated Contracting, we are recognized as an elite construction company in Dubai, with a highly skilled team of engineers, architects, interior designers, and project developers. Our multidisciplinary team brings extensive experience across commercial, residential, and high-end fit-out projects throughout the UAE. Each expert is dedicated to delivering creative, efficient, and unique solutions custom to meet our client&apos;s vision. From architectural design and engineering consultation to project execution and turnkey delivery, we uphold the great standards of quality, precision, and professionalism. As one of the trusted construction companies in Dubai, our team&apos;s collaborative approach provides seamless project delivery with a focus on original, soid, and long-term value for our clients in UAE, Dubai.
        </p>
      </motion.section>
      <VidioComponent />
    </div>
  );
};

export default OurTeam;
