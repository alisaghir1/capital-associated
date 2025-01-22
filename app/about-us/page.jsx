import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full h-full">
      {" "}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Mainhome.jpg"
            alt="Background Image"
            layout="fill" // This will make the image cover the entire screen
            objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
          />
        </div>

        {/* Content on top of the image */}
        <div className="relative z-10  flex flex-col justify-center items-center w-full h-full">
          <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
          About us
          </h1>
          <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
          Building Your Vision, Crafting Tomorrow.
          </p>
          <p className="absolute bottom-10 left-10 text-white">
            Home <span className="text-black">/ About Us</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
