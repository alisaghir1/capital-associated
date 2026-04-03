"use client";
import React from "react";
import Link from "next/link";
import AnimatedWrapper from "./AnimatedWrapper";
import { stripHtmlTags } from "../utils/richText";

const OurProjects = ({ projects = [] }) => {
  const getBorderRadius = (index) => {
    const patterns = [
      'rounded-tl-full', 'rounded-bl-full', 'rounded-tr-full', 'rounded-tr-full',
      'rounded-tl-full', 'rounded-br-full', 'rounded-tl-full', 'rounded-br-full',
    ];
    return patterns[index % patterns.length];
  };

  const getAlignment = (index) => {
    const alignments = [
      'items-end pb-4', 'items-start pt-4', 'items-end pb-4', 'items-end pb-4',
      'items-end pb-4', 'items-start pt-4', 'items-end pb-4', 'items-start pt-4',
    ];
    return alignments[index % alignments.length];
  };

  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-5 my-20">
        <AnimatedWrapper direction="down" duration={0.8}>
          <h2 className="text-2xl md:text-3xl xl:text-4xl">Our Projects</h2>
        </AnimatedWrapper>
        <AnimatedWrapper direction="up" duration={1}>
          <p className="text-lg md:text-xl xl:text-2xl">
            Designing Landmarks. Defining Skylines
          </p>
        </AnimatedWrapper>
      </section>

      <AnimatedWrapper
        direction="down"
        duration={1}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 px-5 xl:mx-20 mb-20"
      >
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <Link key={project.id} href={`/our-work/${project.slug}`} className="block">
              <div
                className={`relative bg-black flex transition-all duration-300 ease-in-out justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 ${getBorderRadius(index)} ${getAlignment(index)}`}
                style={{ backgroundImage: `url('${project.hero_image_url}')` }}
              >
                <div className="text-white xl:p-3 rounded-lg w-full text-start">
                  <h3 className="xl:text-lg text-md mb-2 font-semibold">
                    {stripHtmlTags(project.title)}
                  </h3>
                  <p className="xl:text-sm text-xs">{project.location}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p>No featured projects available.</p>
          </div>
        )}
      </AnimatedWrapper>

      <div className="flex justify-center align-center mb-20">
        <Link
          className="px-4 mb-5 z-20 xl:mt-0 text-center py-2 text-xl md:text-2xl transition-colors duration-300 ease-in-out text-black hover:text-black border-b border-b-black"
          href="/our-work"
        >
          Visit Projects Page
        </Link>
      </div>
    </div>
  );
};

export default OurProjects;
