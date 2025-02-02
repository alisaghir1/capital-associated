import React from "react";
import Image from "next/image";
import t1 from "../../public/team/t1.jpg";
import t2 from "../../public/team/t2.jpg";
import t3 from "../../public/team/t3.jpg";
import t4 from "../../public/team/t4.jpg";
import t5 from "../../public/team/t5.jpg";
import t6 from "../../public/team/t6.jpg";
import VidioComponent from "./VidioComponent";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const teamMembers = [
  { image: t1, name: "Mohsen Ziad Bin Wael", position: "CEO" },
  { image: t2, name: "Carlos Smaha", position: "Head of engineers" },
  { image: t3, name: "Loubna Lahoud", position: "Co-Founder" },
  { image: t4, name: "Co-Founder", position: "Super Junior" },
  { image: t5, name: "Shokri Al Saeed", position: "CFO" },
  { image: t6, name: "Sofia Ghazi", position: "Head of Department" },
];

const OurTeam = () => {
  return (
    <div className="">
      <section className="flex flex-col justify-center items-center gap-5 py-20">
        <motion.h1
          variants={fadeIn("down", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="lg:text-3xl text-2xl xl:text-4xl"
        >
          Our Team
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="lg:text-2xl text-xl xl:text-3xl"
        >
          Driven by Expertise, United for Excellence
        </motion.p>

        <div

          className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-4 mt-10 w-full mx-auto container px-10 xl:px-0"
        >
          {teamMembers.map((member, index) => (
            <motion.div
            variants={fadeIn("right", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
             key={index}>
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
            </motion.div>
          ))}
        </div>
      </section>
      <motion.section
        variants={fadeIn("up", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
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
