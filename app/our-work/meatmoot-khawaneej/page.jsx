'use client'
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
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Content on top of the image */}
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center">
            <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
              Meat Moot – Al Khawaneej Branch
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
              A Project Built with Pride by Our Construction Team
            </p>
            <p className="absolute bottom-10 left-10 text-white">
              Home{" "}
              <span className="text-black">
                / Our Projects / Meat Moot Al Khawaneej
              </span>
            </p>
          </div>
        </div>

        <section className="container mx-auto flex flex-col gap-5 px-5">
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
                <source src="/projects/mkhv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="w-full mb-20 xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-200 xl:px-40 px-5 py-20">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Precision. Passion. Perfection.
            </h1>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              We proudly delivered the Al Khawaneej branch of Meat Moot with quality and craftsmanship.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Our construction team was trusted to bring the Al Khawaneej branch of the globally renowned Meat Moot brand to life. From groundwork to final finishes, every step was handled with attention to detail and high standards.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              The project included structural works, premium interior finishes, MEP installations, and custom-fit restaurant features — all tailored to reflect the iconic Meat Moot experience in the heart of Dubai.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              We coordinated closely with designers and engineers to meet branding expectations and operational functionality, resulting in a space that is both aesthetically pleasing and highly efficient.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Delivering on time and exceeding client expectations, this branch now serves as a standout destination for food lovers in Al Khawaneej.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-5 flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col xl:w-4/5 w-full text-center xl:text-start justify-center">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Meat Moot
            </h1>
            <h1 className="xl:text-3xl mt-2 text-black md:text-xl text-lg">
              Al Khawaneej Branch
            </h1>
            <p className="xl:text-lg mt-2 font-bold text-black md:text-md text-sm">
              Dubai, United Arab Emirates
            </p>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              A premium BBQ destination built to global standards. Our scope included the full construction, coordination of materials, and quality execution of the space. From concrete to kitchen – we handled it all.
            </p>
          </div>

          <div className="relative object-center w-full hidden xl:block xl:h-[30rem] h-[25rem] mt-10 mb-5">
            <Image
              src="/projects/mkh1.jpg"
              alt="Meat Moot Al Khawaneej"
              layout="fill"
              objectFit="center"
              className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none object-cover"
            />
          </div>
        </section>

        <section className="container mx-auto px-5 pb-20">
          <div className="flex flex-col xl:flex-row gap-5">
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]">
              <Image
                src="/projects/mkh2.jpg"
                alt="Interior Construction"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none object-cover"
              />
            </div>
            <div className="relative w-full xl:h-[30rem] h-[15rem]">
              <Image
                src="/projects/mkh3.jpg"
                alt="Finished Restaurant"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none object-cover"
              />
            </div>
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]">
              <Image
                src="/projects/mkh2.jpg"
                alt="Construction Phase"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="container mx-auto px-5 mt-5">
        <div className="w-full xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-100 xl:px-40 px-5 py-20">
          <h1 className="xl:text-3xl text-black md:text-xl text-lg">
            Built with Purpose
          </h1>
          <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
            Every detail of the Meat Moot Al Khawaneej branch reflects our dedication to excellence.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            From kitchen installations to dining ambiance, we ensured that the construction met the international standards required by the Meat Moot brand.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Our commitment to craftsmanship and functionality shines throughout the branch — a testament to our team's capability and vision.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
