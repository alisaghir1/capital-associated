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
              priority
            />
          </div>

          {/* Content on top of the image */}
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
            <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
              Meat Moot – JBR Branch
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
              A Taste of Excellence, Built by Us
            </p>
            <p className="absolute bottom-10 left-10 text-white">
              Home{" "}
              <span className="text-black">
                / Our Projects / Meat Moot JBR Branch
              </span>
            </p>
          </div>
        </div>

        <section className="container mx-auto flex flex-col gap-5 px-5">
          <div className="relative w-full xl:h-[40rem] h-[25rem] mt-10">
          <div onContextMenu={(e) => e.preventDefault()}>
    <Image
      src="/projects/jbrm.jpg"
      alt="Commercial Building"
      className="w-full xl:h-[40rem] h-[25rem] object-cover xl:rounded-t-[300px] rounded-t-[100px]"
      layout="fill"
    />
  </div>
          </div>

          <div className="w-full mb-20 xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-200 xl:px-40 px-5 py-20">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Flavors with a Foundation.
            </h1>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Building Dubai's Meat Moot JBR branch with passion and precision.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Our team proudly delivered the construction of Meat Moot&apos;s JBR branch, one of Dubai&apos;s most exciting beachfront dining spots. This project reflects our commitment to quality craftsmanship and meticulous planning.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              The project involved transforming a shell space into a fully functional restaurant – complete with signature interiors, kitchen fit-outs, and atmospheric lighting tailored to the Meat Moot brand experience.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              Every element was executed to the highest standards, ensuring the branch aligns with the global expectations of Meat Moot. Our ability to adapt design into build, without losing the essence, is showcased here.
            </p>
            <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
              From concept to completion, the JBR branch is a statement of collaboration, dedication, and flawless delivery in one of Dubai&apos;s most prestigious locations.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-5 flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col xl:w-4/5 w-full text-center xl:text-start justify-center">
            <h1 className="xl:text-3xl text-black md:text-xl text-lg">
              Meat Moot
            </h1>
            <h1 className="xl:text-3xl mt-2 text-black md:text-xl text-lg">
              JBR Branch – Dubai
            </h1>
            <p className="xl:text-lg mt-2 font-bold text-black md:text-md text-sm">
              Jumeirah Beach Residence, Dubai, UAE
            </p>
            <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
              Location: A vibrant beachfront destination popular among residents and tourists.  
              Design: Custom Meat Moot interiors, stylish lighting, and branded features.
              Construction: Full interior build, MEP works, and bespoke fit-outs delivered end-to-end.
              Experience: A premium BBQ atmosphere with architectural finesse and operational excellence.
            </p>
          </div>

          <div className="relative object-center w-full hidden xl:block xl:h-[30rem] h-[25rem] mt-10 mb-5">
            <Image
              src="/projects/jbrm.jpg"
              alt="Meat Moot JBR"
              layout="fill"
              objectFit="center"
              className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
            />
          </div>
        </section>

        <section className="container mx-auto px-5 pb-20">
          <div className="flex flex-col xl:flex-row gap-5">
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]">
              <Image
                src="/projects/jbr1.jpg"
                alt="JBR Interior Shot"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:h-[30rem] h-[15rem]">
              <Image
                src="/projects/jbr2.jpg"
                alt="JBR Exterior"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-es-[300px] xl:rounded-se-[300px] rounded-lg xl:rounded-none"
              />
            </div>
            <div className="relative w-full xl:w-2/3 xl:h-[30rem] h-[15rem]">
              <Image
                src="/projects/jbr1.jpg"
                alt="Restaurant Area"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-ss-[300px] xl:rounded-ee-[300px] rounded-lg xl:rounded-none"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="container mx-auto px-5 mt-5">
        <div className="w-full xl:rounded-b-[300px] rounded-b-[100px] flex flex-col items-center text-center bg-slate-100 xl:px-40 px-5 py-20">
          <h1 className="xl:text-3xl text-black md:text-xl text-lg">
            Commitment to Quality & Style
          </h1>
          <p className="xl:text-xl mt-4 text-black md:text-lg text-md">
            Designed to impress. Built to last.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            Situated at JBR&apos;s buzzing waterfront, this branch is more than a dining spot — it&apos;s an architectural showcase. Our construction approach aligned functionality with Meat Moot&apos;s distinct brand flavor.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            The branch combines luxurious finishes, seamless kitchen-to-dining flow, and a bold façade that speaks to Dubai&apos;s fast-paced style. We didn’t just build a restaurant — we built an experience.
          </p>
          <p className="xl:text-lg mt-4 text-black md:text-md text-sm">
            If you’ve enjoyed a meal at Meat Moot JBR, you’ve experienced our work first-hand — precision, quality, and excellence from the ground up.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
