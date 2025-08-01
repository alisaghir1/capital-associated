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
              priority
            />
          </div>

          {/* Content on top of the image */}
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
            <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
              Villa Design and Renovation
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
              Tilal Al Ghaf Harmony 1, Dubai
            </p>
            <p className="absolute  bottom-10 left-10 text-white">
              Home <span className="text-black">/ Our Projects / Tilal Al Ghaf Interior</span>
            </p>
          </div>
        </div>
        <section className=" container mx-auto flex flex-col gap-5 px-5">
          <div className="relative w-full xl:h-[40rem] h-[25rem] mt-10 overflow-hidden xl:rounded-t-[300px] rounded-t-[100px]">
            <video
              controls
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src="https://res.cloudinary.com/dqxyczrhq/video/upload/v1754034925/villa1_wcjvme.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full mb-20 xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-200 xl:px-40 px-5 py-20">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg mt-20">
              Modern Villa Interior Design in Prestigious Community
            </h1>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Sophisticated elegance meets contemporary luxury.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              This project is a breathtaking example of modern villa interior design located in the prestigious Tilal Al Ghaf Harmony 1 community, Dubai. The villa's thoughtfully chosen décor and simple yet minimalist design flawlessly capture the spirit of high-end lifestyle for an elite society. This villa's design strategy aims to strike a harmonic balance between warm, inviting areas and sleek, contemporary components, making the property as beautiful as it is sensible.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              This villa renovation in Tilal Al Ghaf showcases how a modern design can be both sophisticated and comfortable, making it an ideal retreat for its residents.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-5 flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col xl:w-4/5 w-full text-center xl:text-start justify-center">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Exterior Design
            </h1>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              The exterior of the villa is a striking display of modern architecture, featuring expansive windows that allow natural light to flood the interior while offering panoramic views of the lush greenery surrounding the property. The façade is adorned with wooden details that add warmth and texture, creating a welcoming atmosphere even before stepping inside.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              The design incorporates recessed lighting, which subtly highlights the villa's architectural lines and enhances its modern aesthetic. The pool, thoughtfully designed as part of the exterior space, provides a serene escape and is surrounded by beautifully landscaped gardens that further emphasize the connection to nature. This meticulousness also reaches the ceiling, where exquisite wood accents give the entire design a more sophisticated touch.
            </p>
          </div>

          <div className="relative object-center w-full xl:h-[30rem] hidden xl:block h-[25rem] mt-10 mb-5">
            <Image
              src="/projects/villa-first.jpg"
              alt="Villa Exterior"
              layout="fill"
              objectFit="center"
              className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
            />
          </div>
        </section>
        <section className="container mx-auto px-5 pb-20">
          <div className="flex flex-col xl:flex-row gap-5">
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem] overflow-hidden xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none">
              <video
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src="https://res.cloudinary.com/dqxyczrhq/video/upload/v1754034973/villa2_obexek.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative w-full xl:h-[30rem] h-[15rem] overflow-hidden xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none">
              <video
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src="https://res.cloudinary.com/dqxyczrhq/video/upload/v1754035006/villa3_exzgxi.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem] overflow-hidden xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none">
              <video
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src="https://res.cloudinary.com/dqxyczrhq/video/upload/v1754034958/villa4_kfxpei.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      </div>
      <section className="container mx-auto px-5 mt-5">
        <div className="w-full xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-100 xl:px-40 px-5 py-20">
          <h1 className="xl:text-3xl text-black md:text-xl text-lg">
            Conclusion
          </h1>
          <p className="xl:text-xl mt-4 text-black  md:text-xl text-lg font-bold"></p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            This villa is being built to last—structurally and visually. Located
            in Dubai, it reflects modern architectural style and strong
            engineering principles. The project shows how smart construction can
            handle the climate, soil, and fast pace of this region
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm mb-4">
            Every stage is supervised by specialists. Capital is an elite
            construction and design company and our teams are involved in making
            sure the project meets both local standards and the personal vision
            of the client.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm mb-4 font-bold">
            Want to Build a Villa in Dubai?
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Whether you have a concept ready or you're just getting started,
            we’re here to make it happen. Our construction design experts handle
            everything—from excavation to delivery. Let&apos;s talk about your Dubai
            villa project today – Reach out to us now!
          </p>
        </div>
      </section>
      
      <section className="pt-20">
        <div className="relative w-full xl:h-[50rem] h-[25rem] overflow-hidden ">
          <video
            muted
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src="https://res.cloudinary.com/dqxyczrhq/video/upload/v1754034744/vidio_njgszg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default page;
