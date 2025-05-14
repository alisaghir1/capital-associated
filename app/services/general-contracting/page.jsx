"use client";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="relative h-[30rem] w-full">
          <div className="absolute inset-0">
            <Image
              src="/main.jpg"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
            <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
              General Contracting
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
              Engineering Quality, From Start to Finish
            </p>
            <p className="absolute bottom-10 left-10 text-white">
              Home{" "}
              <span className="text-black">
                / Our Services / General Contracting
              </span>
            </p>
          </div>
        </div>

        <div className="container mx-auto flex flex-col gap-5 text-center px-4">
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/general-contracting/1.jpg"
              alt="General Contracting"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-b-[300px] rounded-b-[100px]"
            />
          </div>

          <p className="mt-4">
            Capital Associated Building Contracting is a trusted leader in construction services, committed to delivering exceptional projects across residential, commercial, and institutional sectors. With expertise in project management and a passion for excellence, we ensure quality construction from concept to completion.
          </p>

          <p className="mt-4">
            Our comprehensive general contracting services cover every stage of the building process, offering clients a seamless and dependable experience. From early planning and budgeting to final handover, we collaborate with all stakeholders to ensure the project is delivered on time, within budget, and to the highest standards.
          </p>

          <h1 className="xl:text-3xl text-2xl border-b border-b-black w-full pb-10 mt-10">
            Our Construction Process
          </h1>

          {/* Step 1 */}
          <div className="flex flex-col text-start justify-center mt-10">
            <p className="xl:text-xl text-lg font-bold mb-4">
              1. Tendering & Pricing
            </p>
            <p className="mb-4">
              We begin with a transparent and competitive pricing process. Our team prepares detailed tender documents, accurately estimating costs while identifying value engineering opportunities to optimize budgets without compromising quality.
            </p>
            <div className="relative mt-5 h-64 xl:h-[30rem]">
              <Image
                src="/services/general-contracting/1.jpg"
                alt="Tendering and Pricing"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-b-[150px] rounded-b-[50px]"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col text-start justify-center mt-10">
            <p className="xl:text-xl text-lg font-bold mb-4">
              2. Shop Drawing and Master Planning
            </p>
            <p className="mb-4">
              Precision is key in construction. Our engineering and planning teams prepare comprehensive shop drawings and master schedules to align all construction elements, ensuring clarity, coordination, and successful project delivery.
            </p>
            <div className="relative mt-5 h-64 xl:h-[30rem]">
              <Image
                src="/services/general-contracting/2.jpg"
                alt="Shop Drawing and Planning"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-b-[150px] rounded-b-[50px]"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col text-start justify-center mt-10">
            <p className="xl:text-xl text-lg font-bold mb-4">
              3. Civil Work Execution
            </p>
            <p className="mb-4">
              Our civil works team handles all structural and architectural elements with rigorous quality control. From excavation to concrete and masonry, we follow industry-best practices and safety standards at every stage.
            </p>
            <div className="relative mt-5 h-64 xl:h-[30rem]">
              <Image
                src="/services/general-contracting/3.jpg"
                alt="Civil Work Execution"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-b-[150px] rounded-b-[50px]"
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col text-start justify-center mt-10">
            <p className="xl:text-xl text-lg font-bold mb-4">
              4. MEP Installation
            </p>
            <p className="mb-4">
              Our mechanical, electrical, and plumbing (MEP) experts install integrated systems tailored to each project’s design and functionality requirements. We use advanced tools and coordination to ensure system reliability and compliance with UAE regulations.
            </p>
            <div className="relative mt-5 h-64 xl:h-[30rem]">
              <Image
                src="/services/general-contracting/4.jpg"
                alt="MEP Installation"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-b-[150px] rounded-b-[50px]"
              />
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col text-start justify-center mt-10">
            <p className="xl:text-xl text-lg font-bold mb-4">
              5. Final Handover & Quality Assurance
            </p>
            <p className="mb-4">
              Before project completion, our team performs rigorous inspections and testing. We ensure the final product meets all specifications and client expectations. Our commitment to safety, quality, and professionalism is reflected in every handover.
            </p>
            <div className="relative mt-5 h-64 xl:h-[30rem] mb-20">
              <Image
                src="/services/general-contracting/5.jpg"
                alt="Final Handover"
                layout="fill"
                objectFit="cover"
                className="xl:rounded-b-[150px] rounded-b-[50px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-slate-100">
        <div className="container px-5 mx-auto flex flex-col items-center justify-center text-center gap-5 pt-20 pb-20">
          <h1 className="xl:text-3xl text-2xl text-center border-b border-b-black w-full pb-10">
            Contact Us for Expert General Contracting in Dubai, UAE
          </h1>
          <p className="mb-4">
            Looking to build with the most reliable general contractor in Dubai?
            Capital Associated Building Contracting specializes in turning architectural visions into reality with precision and care. From structural execution to MEP systems and final handover, we bring quality, efficiency, and professionalism to every build.
          </p>
          <p className="mb-4">
            Reach out to us today to discuss your next construction project. Let’s build the future—together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
