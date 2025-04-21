'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const Consultation = () => {
  const pathname = usePathname(); // Get the current path using usePathname

  // Check if the current URL is "/contact"
  if (pathname === '/contact-us') {
    return null; // Do not render the component if the user is on the /contact page
  }

  return (
    <motion.section
    variants={fadeIn("up", 1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true, amount: 0.4 }}
     className="bg-white flex flex-col gap-10 py-20 xl:px-20 px-5 text-center w-[100%] justify-center items-center">
      <h1 className="lg:text-3xl text-2xl xl:text-4xl">
      Have a Vision in Mind?
      </h1>
      <p className="lg:text-2xl text-xl xl:text-3xl">
      Partner with one of the leading construction and development companies in Dubai. Let&apos;s Build the Future — Together.
      </p>
      <Link href='/contact-us'>
        <button className="bg-black hover:bg-white border border-black hover:text-black transition-all duration-200 ease-in-out text-white py-5 px-20 text-center lg:text-2xl text-xl xl:text-3xl">
          GET FREE CONSULTATION
        </button>
      </Link>
    </motion.section>
  );
};

export default Consultation;
