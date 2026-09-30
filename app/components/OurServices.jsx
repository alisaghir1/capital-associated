"use client";
import Link from "next/link";
import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import ServiceGroups from "./ServiceGroups";

const OurServices = ({ services = [] }) => {
  return (
    <div className="bg-offwhite pb-20">
      <section className="flex flex-col justify-center items-center gap-5 py-20">
        <AnimatedWrapper direction="down" duration={0.8}>
          <h2 className="text-2xl md:text-3xl xl:text-4xl">Our Services</h2>
        </AnimatedWrapper>
        <AnimatedWrapper direction="up" duration={1}>
          <p className="text-lg md:text-xl xl:text-2xl text-center px-5">
            General Contracting, Construction Management &amp; Specialist Delivery
          </p>
        </AnimatedWrapper>
      </section>

      <ServiceGroups services={services} />

      <div className="flex justify-center mt-14">
        <Link
          href="/services"
          className="px-4 py-2 text-lg md:text-xl text-black border-b border-b-black hover:text-gray-700 transition-colors duration-200"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
