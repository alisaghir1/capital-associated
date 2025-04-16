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
              Interior Fit-Out
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
              Transforming Spaces, Elevating Experiences
            </p>
            <p className="absolute  bottom-10 left-10 text-white">
              Home{" "}
              <span className="text-black">
                / Our Services / Interior Fit-Out
              </span>
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col gap-5 text-center px-4">
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/s9.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-b-[300px] rounded-b-[100px] "
            />
          </div>
          <p className="mt-4">
            Interior fit-out refers to the process of enhancing the interior
            spaces of a building by optimizing the design, functionality, and
            aesthetics. It involves a comprehensive approach that encompasses
            various elements such as space planning, layout optimization,
            material selection, construction, customization, and finishing
            touches.
          </p>
          <p className="mt-4">
            The goal of an interior fit-out is to create a harmonious and
            captivating environment that reflects the purpose and personality of
            the space while meeting the practical needs of its occupants.
          </p>
          <p className="mt-4">
            At Capital Associated Building Contracting, we specialize in
            providing transformative interior fit-out services that breathe new
            life into your spaces. Whether it’s a commercial establishment,
            residential property, or hospitality venue, our team of experts is
            dedicated to creating remarkable environments that align with your
            unique vision and functional requirements.
          </p>
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/interiorFit/s2.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-t-[300px] rounded-t-[100px]"
            />
          </div>
          <h1 className="xl:text-3xl text-2xl border-b border-b-black w-full pb-10">
            Our Interior Fit-Out Services
          </h1>
          <div className="flex flex-col text-start justify-center mt-10">
            <p className="xl:text-xl text-lg font-bold mb-4">
              1- Concept Development
            </p>
            <p className="mb-4">
              We begin by understanding your requirements, preferences, and
              goals. Our team of experienced professionals works closely with
              you to develop a comprehensive concept that reflects your unique
              style and meets your functional needs. We focus on creating a
              harmonious balance between aesthetics, functionality, and
              sustainability.
            </p>
            <div className="flex gap-5">
              <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/interiorFit/s3.jpg"
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
                2- Space Planning and Design
              </p>
              <p className="mb-4">
                Our talented designers leverage their expertise to optimize your
                space and create efficient layouts. We analyze traffic flow,
                spatial utilization, and ergonomic considerations to maximize
                the potential of your interior environment. With a keen eye for
                detail, we ensure that every aspect of the design contributes to
                a cohesive and inviting atmosphere.
              </p>
              <div className="flex gap-5">
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/interiorFit/s5.jpg"
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
                    src="/services/interiorFit/s6.jpg"
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
                3- Material Selection and Sourcing
              </p>
              <p className="mb-4">
                We believe in using only the highest quality materials for our
                projects. Our team collaborates with trusted suppliers to source
                premium materials, fixtures, and finishes that enhance the
                aesthetic appeal and durability of your space. We provide you
                with a wide range of options and guide you in making informed
                decisions that align with your taste and budget.
              </p>
              <div className="flex gap-5">
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/interiorFit/s7.jpg"
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
                    src="/services/interiorFit/s8.jpg"
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
                4- Construction and Execution
              </p>
              <p className="mb-4">
                Once the design and material selection are finalized, our
                skilled craftsmen and technicians bring the project to life. We
                adhere to strict quality standards and employ efficient project
                management techniques to ensure timely completion within the
                agreed-upon budget. Our team works diligently while minimizing
                disruptions to your daily operations or living arrangements.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem]">
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
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                5- Customization and Installation
              </p>
              <p className="mb-4">
                We understand the importance of personalized touches in creating
                a truly unique space. Our craftsmen specialize in custom
                cabinetry, furniture, and millwork, crafting bespoke elements
                that reflect your individuality. With precise attention to
                detail, we install and integrate these custom features
                seamlessly into your interior environment.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem]">
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
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                6- Finishing Touches
              </p>
              <p className="mb-4">
                The final step of our interior fit-out service involves adding
                the finishing touches that elevate the overall ambiance. We
                carefully select lighting fixtures, window treatments, artwork,
                and accessories that complement the design and enhance the mood
                of the space. Our goal is to create an inviting atmosphere that
                captivates and inspires all who experience it.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem] mb-20">
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
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <div className="container px-5 mx-auto flex flex-col items-center justify-center text-center gap-5 pt-20 pb-20">
          <h1 className="xl:text-3xl text-2xl text-center border-b border-b-black w-full pb-10">
            Contact Us for Your Interior Fit-Out Needs
          </h1>
          <p className="mb-4">
            Ready to transform your space with our exceptional interior fit-out
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
