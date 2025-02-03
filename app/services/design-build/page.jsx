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
            />
          </div>

          {/* Content on top of the image */}
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
            <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
              Desgin Build
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
              Transforming Spaces, Elevating Experiences
            </p>
            <p className="absolute  bottom-10 left-10 text-white">
              Home{" "}
              <span className="text-black">/ Our Services / Desgin Build</span>
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col gap-5 text-center px-4">
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/s2.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-b-[300px] rounded-b-[100px] "
            />
          </div>
          <p className="mt-4">
            Experience the pinnacle of excellence in construction with Capital
            Associated Building Contracting, where we proudly offer top-tier
            Design-Build services. With a steadfast dedication to delivering
            outstanding results, we provide a seamless and comprehensive
            approach to your construction projects.
          </p>
          <p className="mt-4">
            Entrust us with your vision, and let us bring it to life with
            unparalleled professionalism and expertise.
          </p>
          <p className="mt-4">
            Design-Build is a construction delivery method that brings together
            the design and construction phases under one roof. It offers a
            streamlined and integrated process, combining architectural design
            expertise and construction proficiency.
          </p>
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/s3.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-t-[300px] rounded-t-[100px]"
            />
          </div>
          <h1 className="xl:text-3xl text-2xl border-b border-b-black w-full pb-10">
            Understanding Design-Build
          </h1>
          <div className="flex flex-col text-start justify-center mt-10">
            <p className="xl:text-xl text-lg font-bold mb-4">
              1- Our Expert Team
            </p>
            <p className="mb-4">
              Our team consists of highly skilled architects and designers who
              possess a deep understanding of both aesthetics and functionality.
              Working closely with you, we will transform your vision into a
              tangible blueprint, taking into account your specific
              requirements, budget constraints, and project objectives.
            </p>
            <div className="flex gap-5">
              <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/s4.jpg"
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
                  src="/services/interiorFit/s4.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                2- The Benefits of Design-Build
              </p>
              <p className="mb-4">
                Through our Design-Build service, we adopt a holistic approach
                to your project, eliminating the inefficiencies and
                communication gaps that often arise when dealing with multiple
                entities. This collaborative model allows us to optimize
                timelines, control costs, and maintain strict quality standards
                throughout every stage of the process.
              </p>
              <div className="flex gap-5">
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/interiorFit/s11.jpg"
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
                    src="/services/interiorFit/s10.jpg"
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
                3- Meticulous Attention to Detail
              </p>
              <p className="mb-4">
                At Capital Associated Building Contracting, meticulous attention
                to detail is the cornerstone of our work. Our experienced
                construction team works closely with our design professionals to
                ensure a seamless translation of the design concept into the
                physical environment.Throughout the project, we prioritize open
                communication to keep you informed and involved every step of
                the way.
              </p>
              <div className="flex gap-5">
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/interiorFit/s9.jpg"
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
                    src="/services/s3.jpg"
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
                4- Single Point of Contact
              </p>
              <p className="mb-4">
                When you choose us for your Design-Build needs, you benefit from
                a single point of contact and accountability. We take full
                responsibility for coordinating all aspects of the project, from
                initial concept development to final construction, ensuring a
                cohesive and efficient workflow. With our rigorous project
                management, we are dedicated to meeting timelines, adhering to
                budgets, and upholding the highest standards of quality.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem]">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/s4.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                5- Our Track Record and Expertise
              </p>
              <p className="mb-4">
                With a wealth of experience and a proven track record of
                successful projects, Capital Associated Building Contracting
                stands out as a leader in the industry. Our commitment to
                innovation, sustainability, and client satisfaction sets us
                apart from the rest.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem]">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/s5.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                6- Versatile Design-Build Solutions
              </p>
              <p className="mb-4">
                Our Design-Build service caters to a wide range of projects,
                including commercial, residential, and institutional.Whether you
                seek to create functional office spaces, breathtaking
                residential properties, or cutting-edge institutional
                facilities, our expert team is equipped to meet your unique
                needs. We thrive on challenges and embrace the opportunity to
                bring your vision to life.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem] mb-20">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/interiorFit/s6.jpg"
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
            Contact Us for Your Desgin Build Needs
          </h1>
          <p className="mb-4">
            Ready to transform your space with our exceptional Desgin Build
            services?
          </p>
          <p className="mb-4">
            We invite you to get in touch with us today to discuss your project
            requirements and explore how Capital Associated Building Contracting
            can bring your vision to life.
          </p>
          <p className="mb-4">
            Our friendly and knowledgeable team is here to answer any questions
            you may have and provide you with personalized solutions tailored to
            your needs. We are committed to delivering outstanding results,
            exceeding your expectations, and ensuring your complete
            satisfaction.
          </p>
          <p className="mb-4">
            Contact us now to schedule a consultation and let us guide you
            through the journey of creating a remarkable interior space that
            reflects your style, enhances functionality, and leaves a lasting
            impression.
          </p>
          <p className="mb-4">
            Together, we will create an environment that inspires and
            captivates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
