"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedWrapper from "./AnimatedWrapper";
import VidioComponent from "./VidioComponent";
import { stripHtmlTags } from "../utils/richText";

const OurTeam = ({ team = [] }) => {
  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-5 py-20">
        <AnimatedWrapper direction="down" duration={0.8}>
          <h2 className="text-2xl md:text-3xl xl:text-4xl">Our Team</h2>
        </AnimatedWrapper>
        <AnimatedWrapper direction="up" duration={1}>
          <p className="text-lg md:text-xl xl:text-2xl">
            Driven by Expertise, United for Excellence
          </p>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-4 mt-10 w-full mx-auto container px-10 xl:px-0">
          {team.length > 0 ? (
            team.map((member) => (
              <Link key={member.id} href={`/our-team/${member.slug}`}>
                <AnimatedWrapper direction="right" duration={1}>
                  <div className="w-full h-[34rem] border border-black mb-4">
                    <Image
                      width={500}
                      height={500}
                      src={member.image_url}
                      alt={stripHtmlTags(member.name)}
                      className="sm:rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">{stripHtmlTags(member.name)}</p>
                    <p className="text-black">{member.position}</p>
                  </div>
                </AnimatedWrapper>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p>No team members available.</p>
            </div>
          )}
        </div>
      </section>
      <AnimatedWrapper
        direction="up"
        duration={1}
        className="container mx-auto flex flex-col justify-center items-center gap-5 py-20 px-5 xl:px-0"
      >
        <p className="text-lg md:text-xl xl:text-2xl text-bold">
          Elite Team of Engineers, Architects &amp; Designers in Dubai
        </p>
        <p className="text-base text-gray-500 mt-10 md:text-lg xl:text-xl">
          At Capital Associated Contracting, we are recognized as an elite construction company in Dubai, with a highly skilled team of engineers, architects, interior designers, and project developers. Our multidisciplinary team brings extensive experience across commercial, residential, and high-end fit-out projects throughout the UAE. Each expert is dedicated to delivering creative, efficient, and unique solutions custom to meet our client&apos;s vision. From architectural design and engineering consultation to project execution and turnkey delivery, we uphold the great standards of quality, precision, and professionalism. As one of the trusted construction companies in Dubai, our team&apos;s collaborative approach provides seamless project delivery with a focus on original, soid, and long-term value for our clients in UAE, Dubai.
        </p>
      </AnimatedWrapper>
      <VidioComponent />
    </div>
  );
};

export default OurTeam;
