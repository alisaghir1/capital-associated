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
            Green Building Solutions
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
            Efficient. Responsible. Future-Ready.
            </p>
            <p className="absolute  bottom-10 left-10 text-white">
              Home{" "}
              <span className="text-black">
                / Our Services / Green Building Solutions
              </span>
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col gap-5 text-center px-4">
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/s7.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-b-[300px] rounded-b-[100px] "
            />
          </div>
          <p className="mt-4">
            Our green building solutions service is meticulously crafted to
            revolutionize the construction industry through the promotion of
            sustainable and environmentally friendly building practices.
          </p>
          <p className="mt-4">
            At Capital Associated, we hold a steadfast belief in the paramount
            importance of responsible building, as it lays the foundation for a
            brighter future for our planet and generations to come.
          </p>
          <p className="mt-4">
            In today’s world, it is imperative to prioritize sustainability and
            reduce our carbon footprint. Green building practices offer a
            plethora of advantages, encompassing energy efficiency, cost
            savings, improved indoor air quality, and enhanced occupant comfort.
            By embracing our green building solutions, you can showcase your
            commitment to environmental stewardship while reaping a multitude of
            benefits.
          </p>
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/interiorFit/s7.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-t-[300px] rounded-t-[100px]"
            />
          </div>
          <h1 className="xl:text-3xl text-2xl border-b border-b-black w-full pb-10">
            Why Choose Green Building Solutions?
          </h1>
          <div className="flex flex-col text-start justify-center mt-10">
            <p className="xl:text-xl text-lg font-bold mb-4">
              1- Environmental Benefits
            </p>
            <p className="mb-4">
              Our green buildings minimize their impact on the environment by
              conserving natural resources, reducing greenhouse gas emissions,
              and promoting biodiversity. We strive to achieve optimal energy
              efficiency, utilize renewable materials, and employ water
              conservation strategies, all with the aim of creating a healthier
              and greener planet.
            </p>
            <div className="flex gap-5">
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
              <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/interiorFit/s2.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                2- Energy Efficiency
              </p>
              <p className="mb-4">
                Recognizing the significance of reducing energy consumption, we
                analyze your project meticulously and implement innovative
                techniques. These include energy-efficient insulation, advanced
                lighting systems, and smart automation, all designed to minimize
                energy wastage and lower utility costs.
              </p>
              <div className="flex gap-5">
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
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
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/s6.jpg"
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
                3- Cost Savings
              </p>
              <p className="mb-4">
                Green building solutions offer long-term financial advantages.
                By incorporating energy-efficient technologies, sustainable
                materials, and optimized designs, our solutions help decrease
                operational costs, resulting in substantial savings throughout
                the building’s lifespan. Additionally, numerous governments and
                organizations provide incentives and tax benefits for green
                building initiatives, further enhancing the financial appeal.
              </p>
              <div className="flex gap-5">
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/s7.jpg"
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
                    src="/services/s1.jpg"
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
                4- Enhanced Indoor Air Quality
              </p>
              <p className="mb-4">
                We understand the critical role of indoor air quality in
                occupant health and well-being. Our green building solutions
                prioritize the use of low-emission materials, efficient
                ventilation systems, and indoor pollutant control measures. By
                improving air quality, we create spaces that promote
                productivity, comfort, and overall well-being.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem]">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/s9.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                5- Sustainable Reputation
              </p>
              <p className="mb-4">
                Adopting green building practices elevates your organization’s
                reputation as an environmentally responsible entity. It
                showcases your commitment to sustainable development and
                positions you as a leader in the industry, attracting
                environmentally conscious clients and partners.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem]">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/s2.jpg"
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
          Contact Us for Green Building Solutions in Dubai
          </h1>
          <p className="mb-4">
          Interested in building smarter, more sustainable spaces? Our expert green building solutions in Dubai are designed to reduce environmental impact, increase energy efficiency, and create healthier living and working environments.

          </p>
          <p className="mb-4">
          At Capital Associated Building Contracting, we integrate eco-conscious materials, sustainable design strategies, and energy-efficient systems into every phase of development. Whether you're seeking LEED-compliant construction, improved insulation, or sustainable interior design, our team delivers solutions that meet with both your values and your vision.

          </p>
          <p className="mb-4">
          Reach out today to schedule a consultation and discover how our sustainable construction practices can add long-term value to your project—while supporting a greener future for the UAE
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
