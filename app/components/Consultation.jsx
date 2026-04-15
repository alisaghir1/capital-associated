"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedWrapper from "./AnimatedWrapper";

const Consultation = () => {
  const pathname = usePathname();

  if (pathname === "/contact-us") {
    return null;
  }

  return (
    <AnimatedWrapper
      direction="up"
      duration={1}
      as="section"
      className="bg-white flex flex-col gap-10 py-20 xl:px-20 px-5 text-center w-[100%] justify-center items-center"
    >
      <h2 className="text-xl md:text-2xl xl:text-3xl">
        Have a Vision in Mind?
      </h2>
      <p className="text-lg md:text-xl xl:text-2xl">
        Partner with one of the leading construction and development companies in Dubai. Let&apos;s Build the Future — Together.
      </p>
      <Link href="/contact-us">
        <button className="bg-black hover:bg-white border border-black hover:text-black transition-all duration-200 ease-in-out text-white py-5 px-20 text-center text-lg md:text-xl lg:text-2xl">
          GET FREE CONSULTATION
        </button>
      </Link>
    </AnimatedWrapper>
  );
};

export default Consultation;
