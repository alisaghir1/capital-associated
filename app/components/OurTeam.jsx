"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import VidioComponent from "./VidioComponent";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback static data in case Supabase is not working
  const staticTeamMembers = [
    {
      id: 1,
      image_url: "/team/t4.jpg",
      name: "RAMAZ IZZA",
      position: "Managing Director",
      slug: "ramaz-izza",
      published: true,
      sort_order: 1
    },
    {
      id: 2,
      image_url: "/team/t1.jpg",
      name: "MICHAEL REYES",
      position: "Document Control",
      slug: "michael-reyes",
      published: true,
      sort_order: 2
    },
    {
      id: 3,
      image_url: "/team/t2.jpg",
      name: "LAKSHMI MOHAN",
      position: "Estimation Engineer",
      slug: "lakshmi-mohan",
      published: true,
      sort_order: 3
    },
  ];

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        console.log('Fetching team members from Supabase...');
        const { data, error } = await supabase
          .from('team')
          .select('*')
          .eq('published', true)
          .order('sort_order', { ascending: true });

        if (error) {
          console.error('Supabase error fetching team members:', error);
          console.error('Error details:', {
            message: error.message,
            details: error.details,
            hint: error.hint,
            code: error.code
          });
          // Use static data as fallback
          console.log('Using static team data as fallback');
          setTeamMembers(staticTeamMembers);
        } else {
          console.log('Team data fetched successfully:', data);
          setTeamMembers(data && data.length > 0 ? data : staticTeamMembers);
        }
      } catch (error) {
        console.error('Catch error:', error);
        // Use static data as fallback
        console.log('Using static team data as fallback due to catch error');
        setTeamMembers(staticTeamMembers);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);
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
          {loading ? (
            <div className="col-span-full text-center py-10">
              <p>Loading team members...</p>
            </div>
          ) : teamMembers.length > 0 ? (
            teamMembers.map((member, index) => (
              <Link key={member.id} href={`/our-team/${member.slug}`}>
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
                      src={member.image_url}
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
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p>No team members available.</p>
            </div>
          )}
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
