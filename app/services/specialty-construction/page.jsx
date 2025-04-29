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
              Specialty Construction
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
              Complex Projects. Expert Execution.
            </p>
            <p className="absolute  bottom-10 left-10 text-white">
              Home{" "}
              <span className="text-black">
                / Our Services / Specialty Construction
              </span>
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col gap-5 text-center px-4">
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/specialty-construction/1.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-b-[300px] rounded-b-[100px] "
            />
          </div>
          <p className="mt-4">
            Specialty construction refers to the niche sector of the
            construction industry that focuses on projects requiring highly
            specialized skills, techniques, and equipment. These projects often
            involve complex and intricate designs, advanced engineering
            solutions, and unique architectural features. Specialty construction
            covers a wide range of sectors, including healthcare, education,
            hospitality, retail, and more.
          </p>
          <p className="mt-4">
            At Capital Associated Building Contracting, we recognize that no two
            construction projects are the same. Each one requires a tailored
            approach and specialized expertise.
          </p>
          <p className="mt-4">
            That is precisely why our team of immensely proficient specialists,
            encompassing architects, engineers, project managers, and craftsmen,
            is fully committed to delivering tailor-made solutions that go above
            and beyond your expectations.
          </p>
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/specialty-construction/2.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-t-[300px] rounded-t-[100px]"
            />
          </div>
          <h1 className="xl:text-3xl text-2xl border-b border-b-black w-full pb-10">
            Our Expertise in Specialty Construction
          </h1>
          <div className="flex flex-col text-start justify-center mt-10">
            <p className="xl:text-xl text-lg font-bold mb-4">
              1- Design-Build Solutions
            </p>
            <p className="mb-4">
              We offer comprehensive design-build solutions, where our team
              works closely with clients from the initial concept phase to
              project completion. Our collaborative approach ensures seamless
              coordination between design, construction, and project management,
              resulting in cost-effective and time-efficient solutions. By
              streamlining the entire process, we minimize potential delays,
              optimize resource allocation, and deliver projects that meet and
              exceed expectations.
            </p>
            <div className="flex gap-5">
              <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/specialty-construction/3.jpg"
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
                  src="/services/specialty-construction/4.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                2- Interior Fit-Out
              </p>
              <p className="mb-4">
                Our interior fit-out services involve creating unique and
                customized spaces that align with our clients’ specific
                requirements. Whether it&apos;s a retail store, office space, or
                hospitality establishment, we possess the expertise to transform
                interiors into functional, aesthetically pleasing, and inviting
                environments. We pay meticulous attention to every detail, from
                spatial planning and material selection to lighting, fixtures,
                and finishes, ensuring that the final result aligns perfectly
                with the client&apos;s vision.
              </p>
              <div className="flex gap-5">
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/specialty-construction/5.jpg"
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
                3- Sustainable Construction
              </p>
              <p className="mb-4">
                At Capital Associated Building Contracting, we are committed to
                sustainable construction practices. We integrate environmentally
                friendly solutions into our specialty construction projects,
                ensuring they contribute to a healthier and more sustainable
                future. Our team is well-versed in green building techniques,
                energy-efficient systems, and eco-friendly materials, allowing
                us to create structures that are not only visually appealing but
                also environmentally responsible.
              </p>
              <div className="flex gap-5">
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/specialty-construction/6.jpg"
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
                    src="/services/specialty-construction/7.jpg"
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
                4- Specialized Equipment and Techniques
              </p>
              <p className="mb-4">
                Specialty construction often necessitates the utilization of
                specialized equipment and techniques. At Capital Associated
                Building Contracting, we stay at the forefront of construction
                technology, continually investing in cutting-edge tools and
                equipment. By leveraging these advancements, we can efficiently
                handle complex challenges and deliver outstanding results. Our
                team is well-trained in the use of specialized equipment,
                ensuring safe and effective execution of every project.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem]">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/specialty-construction/8.jpg"
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
            Contact Us for Specialty Construction Services in Dubai
          </h1>
          <p className="mb-4">
            Ready to transform your space with our exceptional Specialty
            Construction services?
          </p>
          <p className="mb-4">
            Looking for original solutions for complex or custom-built spaces?
            Our specialty construction services in Dubai are designed for
            projects that demand precision, creativity, and technical expertise.
          </p>
          <p className="mb-4">
            At Capital Associated Building Contracting, we specialize in
            delivering high-end, detail-focused construction solutions that go
            beyond conventional building. From architectural features and custom
            interiors to intricate structural work, our team is equipped to
            handle projects that require specialized skills and flawless
            execution.
          </p>
          <p className="mb-4">
            Get in touch today to discuss your unique project requirements.
            We’ll help you turn your vision into a bespoke space that&apos;s
            functional, efficient, and built to impress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
