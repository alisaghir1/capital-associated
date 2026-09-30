"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedWrapper from "./AnimatedWrapper";
import VideoSection from "./VideoSection";
import { stripHtmlTags, getFirstSentences } from "../utils/richText";

const OurTeam = ({ team = [], videoUrl = "" }) => {
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

        <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 w-full mx-auto container px-10 xl:px-0">
          {team.length > 0 ? (
            team.map((member) => {
              const points = (member.sections || [])
                .map((section) => stripHtmlTags(section.title))
                .filter(Boolean)
                .slice(0, 3);

              return (
                <Link key={member.id} href={`/our-team/${member.slug}`}>
                  <AnimatedWrapper
                    direction="right"
                    duration={1}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 h-full flex flex-col items-center text-center gap-2"
                  >
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border border-black">
                      <Image
                        fill
                        src={member.image_url}
                        alt={stripHtmlTags(member.name)}
                        className="object-cover"
                      />
                    </div>
                    <p className="font-semibold mt-2">{stripHtmlTags(member.name)}</p>
                    <p className="text-black text-sm">{member.position}</p>
                    {member.bio && (
                      <p className="text-sm text-gray-700 leading-relaxed mt-1">
                        {getFirstSentences(member.bio, 2)}
                      </p>
                    )}
                    {points.length > 0 && (
                      <ul className="w-full text-left text-sm text-gray-700 space-y-1.5 mt-2">
                        {points.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="text-green-600 mt-0.5">&#10003;</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </AnimatedWrapper>
                </Link>
              );
            })
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
      <VideoSection src={videoUrl} />
    </div>
  );
};

export default OurTeam;
