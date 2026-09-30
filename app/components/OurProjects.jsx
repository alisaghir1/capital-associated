"use client";
import React from "react";
import Link from "next/link";
import AnimatedWrapper from "./AnimatedWrapper";
import ProjectCard from "./ProjectCard";

const OurProjects = ({ projects = [] }) => {
  return (
    <div id="our-projects" className="scroll-mt-24">
      <section className="flex flex-col justify-center items-center gap-5 my-20">
        <AnimatedWrapper direction="down" duration={0.8}>
          <h2 className="text-2xl md:text-3xl xl:text-4xl">Our Projects</h2>
        </AnimatedWrapper>
        <AnimatedWrapper direction="up" duration={1}>
          <p className="text-lg md:text-xl xl:text-2xl">
            750,000+ sq ft Built Across Dubai
          </p>
        </AnimatedWrapper>
      </section>

      <AnimatedWrapper
        direction="up"
        duration={1}
        className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-5 xl:px-20 mb-16"
      >
        {projects.length > 0 ? (
          projects.slice(0, 6).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p>No featured projects available.</p>
          </div>
        )}
      </AnimatedWrapper>

      <div className="flex justify-center mb-20">
        <Link
          className="px-4 py-2 text-lg md:text-xl text-black border-b border-b-black hover:text-gray-700 transition-colors duration-200"
          href="/our-work"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default OurProjects;
