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
            Senior-Led Project Delivery
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
          Senior-Led Project Delivery Across the UAE
        </p>
        <p className="text-base text-gray-500 mt-10 md:text-lg xl:text-xl">
          Our project teams are led by engineers and construction managers with direct experience across residential, commercial, and high-rise developments in the UAE. Every project is assigned a dedicated project manager who owns the programme, the budget, and the quality control process from mobilisation through handover. Unlike many contractors in Dubai who layer management between clients and site teams, we keep our structure flat &mdash; senior oversight on every project, direct communication at every stage, and accountability across concurrent sites in Dubai, Abu Dhabi, and Sharjah.
        </p>
      </AnimatedWrapper>
      <VidioComponent />
    </div>
  );
};

export default OurTeam;
