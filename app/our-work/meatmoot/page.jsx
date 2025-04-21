"use client";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="bg-slate-100">
        <div className="relative h-[30rem] w-full">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/main.jpg"
              alt="Background Image"
              layout="fill" // This will make the image cover the entire screen
              objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
            />
          </div>

          {/* Content on top of the image */}
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
            <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
              Our Projects
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
            Designing Landmarks. Defining Skylines

            </p>
            <p className="absolute  bottom-10 left-10 text-white">
              Home{" "}
              <span className="text-black">/ Our Services / Meat Moot</span>
            </p>
          </div>
        </div>
        <section className=" container mx-auto flex flex-col gap-5 px-5">
          <div className="relative w-full xl:h-[40rem] h-[25rem] mt-10">
            <div onContextMenu={(e) => e.preventDefault()}>
              <video
                muted
                autoPlay
                loop
                playsInline
                controls
                className="w-full xl:h-[40rem] h-[25rem] object-cover xl:rounded-t-[300px] rounded-t-[100px]"
              >
                <source src="/projects/meatmoot.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="w-full mb-20 xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-200 xl:px-40 px-5 py-20">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Crafting Culinary Excellence
            </h1>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Bringing the Global Meat Moot Experience to Dubai.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              We are proud to have played a key role in the development of the
              iconic Meat Moot restaurant in Dubai — a globally renowned brand
              known for its signature smoked meat dishes and high-end dining
              experience.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Our team handled the complete interior fit-out and construction,
              ensuring every detail aligned with Meat Moot’s international
              standards — from the premium materials to the unique architectural
              elements that define the brand.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              The space was designed with a strong focus on functionality,
              customer flow, and aesthetic appeal. Rich wooden textures, custom
              lighting, and industrial finishes come together to reflect the
              bold, rustic vibe of Meat Moot’s global identity.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              With a focus on precision and quality craftsmanship, we delivered
              a space that not only looks exceptional but also performs
              seamlessly for both staff and diners — a true flagship destination
              for meat lovers in Dubai.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-5 flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col xl:w-4/5 w-full text-center xl:text-start justify-center">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Restaurant
            </h1>
            <h1 className="xl:text-3xl mt-2 text-black md:text-xl text-lg">
              Meat Moot
            </h1>
            <p className="xl:text-lg mt-2 font-bold text-black md:text-md text-sm">
              Dubai, United Arab Emirates
            </p>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Global Brand: Meat Moot is a world-renowned restaurant chain
              celebrated for its rich flavors and smoked meat mastery. Interior
              Excellence: Our construction and fit-out team brought the Dubai
              branch to life with bespoke finishes and high-end materials. Guest
              Experience: Designed with diners in mind — elegant layouts, cozy
              lighting, and a bold atmosphere. Signature Aesthetic: Rustic yet
              modern — reclaimed wood, custom steelwork, and leather accents.
              Fast Turnaround: Delivered on time with strict attention to
              quality, detail, and brand consistency.
            </p>
          </div>

          <div className="relative object-center w-full hidden xl:block xl:h-[30rem] h-[25rem] mt-10 mb-5">
            <Image
              src="/projects/meatmoot.jpg"
              alt="Background Image"
              layout="fill" // This will make the image cover the entire screen
              objectFit="center" // Ensures the image maintains its aspect ratio while filling the screen
              className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
            />
          </div>
        </section>
        <section className="container mx-auto px-5 pb-20">
          <div className="flex flex-col xl:flex-row gap-5">
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]  ">
              <Image
                src="/projects/meatmoot1.jpg"
                alt="Background Image"
                layout="fill" // This will make the image cover the entire screen
                objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:h-[30rem] h-[15rem]  ">
              <Image
                src="/projects/meatmoot2.jpg"
                alt="Background Image"
                layout="fill" // This will make the image cover the entire screen
                objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
                className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]  ">
              <Image
                src="/projects/meatmoot1.jpg"
                alt="Background Image"
                layout="fill" // This will make the image cover the entire screen
                objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="container mx-auto px-5 mt-5">
        <div className="w-full xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-100 xl:px-40 px-5 py-20">
          <h1 className="xl:text-3xl text-black md:text-xl text-lg">
            Sustainability
          </h1>
          <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
            Where design meets responsibility — sustainable hospitality done
            right.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Strategically located in Dubai, the Meat Moot restaurant is designed
            for comfort, style, and efficiency — offering a seamless experience
            for guests while integrating eco-conscious solutions behind the
            scenes.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Our construction included energy-efficient lighting, ventilation
            systems, and sustainable materials that contribute to lower
            operational costs and reduced environmental impact.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            From material selection to layout planning, every decision reflected
            a balance of aesthetic appeal and sustainability — aligning with
            Dubai’s vision for a greener future in hospitality.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Architectural Features: Cozy, welcoming ambiance with functional
            open spaces, textured surfaces, and signature Meat Moot branding.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
