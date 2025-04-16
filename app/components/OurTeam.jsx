import React from "react";
import Image from "next/image";
import VidioComponent from "./VidioComponent";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
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
      </motion.section>
      <VidioComponent />
    </div>
  );
};

export default OurTeam;
