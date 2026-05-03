"use client";
import Link from "next/link";
import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import ServiceCard from "./ServiceCard";

const OurServices = ({ services = [] }) => {
  return (
    <div className="bg-offwhite pb-10">
      <section className="flex flex-col justify-center items-center gap-5 py-20">
        <AnimatedWrapper direction="down" duration={0.8}>
          <h2 className="text-2xl md:text-3xl xl:text-4xl">Our Services</h2>
        </AnimatedWrapper>
        <AnimatedWrapper direction="up" duration={1}>
          <p className="text-lg md:text-xl xl:text-2xl">
            General Contracting, Construction Management &amp; Specialist Delivery
          </p>
        </AnimatedWrapper>
      </section>

      {services.length === 0 ? (
        <div className="container mx-auto text-center py-20">
          <p>No services available.</p>
        </div>
      ) : (
        <>
          {/* First Row - services 0-2 */}
          <AnimatedWrapper
            direction="up"
            duration={1}
            className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 pb-10 border-b border-b-black"
          >
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </AnimatedWrapper>

          {/* Second Row - services 3-5 */}
          {services.length > 3 && (
            <AnimatedWrapper
              direction="up"
              duration={1.2}
              className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 py-10 border-b border-b-black"
            >
              {services.slice(3, 6).map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index + 3} />
              ))}
            </AnimatedWrapper>
          )}

          {/* Third Row - services 6-8 */}
          {services.length > 6 && (
            <AnimatedWrapper
              direction="up"
              duration={1.4}
              className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 py-10 border-b border-b-black"
            >
              {services.slice(6, 9).map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index + 6} />
              ))}
            </AnimatedWrapper>
          )}
        </>
      )}
    </div>
  );
};

export default OurServices;
