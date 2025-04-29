import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="bg-white">
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
              Pre-Construction Services
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
              Smart Preparation for Superior Projects
            </p>
            <p className="absolute  bottom-10 left-10 text-white">
              Home{" "}
              <span className="text-black">
                / Our Services / Pre-Construction Services
              </span>
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col gap-5 text-center px-4">
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/pre-construction-services/1.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-b-[300px] rounded-b-[100px] "
            />
          </div>
          <p className="mt-4">
            At Capital Associated Building Contracting, we understand that a
            successful construction project begins well before the ground is
            broken. Hence, we offer comprehensive pre-construction services to
            ensure that your project gets off to a solid start.
          </p>
          <p className="mt-4">
            With our expertise and years of experience, we lay the groundwork
            for a smooth and efficient construction process.
          </p>
          <p className="mt-4">
            At Capital Associated Building Contracting, we specialize in
            providing transformative Pre-Construction Services services that
            breathe new life into your spaces. Whether it&apos;s a commercial
            establishment, residential property, or hospitality venue, our team
            of experts is dedicated to creating remarkable environments that
            align with your unique vision and functional requirements.
          </p>
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/pre-construction-services/2.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-t-[300px] rounded-t-[100px]"
            />
          </div>
          <h1 className="xl:text-3xl text-2xl border-b border-b-black w-full pb-10">
            Our Pre-Construction Services Services
          </h1>
          <div className="flex flex-col text-start justify-center mt-10">
            <p className="xl:text-xl text-lg font-bold mb-4">
              1- Project Evaluation and Feasibility Study
            </p>
            <p className="mb-4">
              We begin by thoroughly evaluating your project&apos;s scope,
              requirements, and objectives. Our experienced team conducts a
              feasibility study to assess the viability of the project, taking
              into account factors such as site location, regulations, budget,
              and timeline. This evaluation provides valuable insights and helps
              us develop an effective plan tailored to your specific needs.
            </p>
            <div className="flex gap-5">
              <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/pre-construction-services/3.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
              <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/pre-construction-services/4.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                2- Design Development
              </p>
              <p className="mb-4">
                During the design development phase, we collaborate closely with
                architects, engineers, and designers to refine and enhance the
                project plans. Our team provides valuable input, identifies
                potential challenges, and proposes innovative solutions. By
                ensuring that the design aligns with your vision and objectives,
                we set the stage for a successful construction phase.
              </p>
              <div className="flex gap-5">
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/pre-construction-services/2.jpg"
                    alt="Full Width Image"
                    layout="fill" // Ensures the image fills the container
                    objectFit="cover" // Ensures the image scales properly within the container
                    className="xl:rounded-b-[150px] rounded-b-[50px]"
                  />
                </div>
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/pre-construction-services/5.jpg"
                    alt="Full Width Image"
                    layout="fill" // Ensures the image fills the container
                    objectFit="cover" // Ensures the image scales properly within the container
                    className="xl:rounded-b-[150px] rounded-b-[50px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                3- Cost Estimation and Budgeting
              </p>
              <p className="mb-4">
                Accurate cost estimation is crucial for effective project
                planning and budgeting. Our experts utilize industry-leading
                software and extensive market knowledge to provide detailed cost
                estimates for labor, materials, permits, and other
                project-related expenses.We work closely with you to establish a
                realistic budget that aligns with your goals, ensuring
                transparency and cost control throughout the project.
              </p>
              <div className="flex gap-5">
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/pre-construction-services/6.jpg"
                    alt="Full Width Image"
                    layout="fill" // Ensures the image fills the container
                    objectFit="cover" // Ensures the image scales properly within the container
                    className="xl:rounded-b-[150px] rounded-b-[50px]"
                  />
                </div>
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/pre-construction-services/7.jpg"
                    alt="Full Width Image"
                    layout="fill" // Ensures the image fills the container
                    objectFit="cover" // Ensures the image scales properly within the container
                    className="xl:rounded-b-[150px] rounded-b-[50px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                4- Value Engineering
              </p>
              <p className="mb-4">
                Our value engineering process focuses on optimizing project
                costs without compromising quality or functionality. By
                analyzing various design and construction alternatives, we
                identify opportunities for cost savings, efficiency
                improvements, and enhanced value. Our goal is to help you
                achieve the highest possible return on investment while
                maintaining the project&apos;s integrity.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem]">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/pre-construction-services/8.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                5- Construction Scheduling
              </p>
              <p className="mb-4">
                We develop a comprehensive construction schedule that outlines
                the sequence of activities, timelines, and milestones. Our team
                carefully considers various factors such as weather conditions,
                resource availability, and subcontractor coordination to create
                an efficient and realistic schedule. Effective scheduling
                minimizes delays, optimizes resource allocation, and ensures
                timely project completion.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem]">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/pre-construction-services/9.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                6- Permitting and Regulatory Compliance
              </p>
              <p className="mb-4">
                Navigating the complex landscape of permits and regulatory
                compliance can be overwhelming. Our experienced team takes
                charge of this crucial aspect, handling all necessary paperwork,
                permits, and approvals required for the project. We stay updated
                with the latest regulations and ensure that your project meets
                all legal and safety requirements.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem] mb-20">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/pre-construction-services/10.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <div className="container px-5 mx-auto flex flex-col items-center justify-center text-center gap-5 pt-20 pb-20">
          <h1 className="xl:text-3xl text-2xl text-center border-b border-b-black w-full pb-10">
            Contact Us for Pre-Construction Services in Dubai
          </h1>
          <p className="mb-4">
            Strategic planning is the cornerstone of every successful project.
            Our pre-construction services in Dubai are designed to provide
            clarity, control, and confidence before the first brick is laid.
          </p>
          <p className="mb-4">
            At Capital Associated Building Contracting, we collaborate with
            clients during the earliest stages—offering expertise in project
            feasibility, cost estimation, design coordination, and scheduling.
            Our experienced team ensures that every detail fits with your
            vision, budget, and timeline, setting the foundation for seamless
            execution.
          </p>
          <p className="mb-4">
            Connect with us today to schedule a consultation and learn how our
            pre-construction expertise can shape smarter decisions and stronger
            outcomes—before construction even begins.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
