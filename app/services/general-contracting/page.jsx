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
              General Contracting
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
              Transforming Spaces, Elevating Experiences
            </p>
            <p className="absolute  bottom-10 left-10 text-white">
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
              src="/services/s1.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-b-[300px] rounded-b-[100px] "
            />
          </div>
          <p className="mt-4">
            Capital Associated Building Contracting stands as a distinguished
            provider of general contracting services, committed to delivering
            extraordinary construction projects across diverse sectors. Our
            expertise in project management and meticulous attention to detail
            drives us to exceed client expectations, fostering enduring
            relationships founded on trust and excellence.
          </p>
          <p className="mt-4">
            At Capital Associated Building Contracting, we adopt a comprehensive
            approach to general contracting, offering a wide array of services
            tailored to meet the unique demands of each project and client.
            Throughout the entire process, our seasoned team works closely with
            clients, architects, engineers, and subcontractors, ensuring
            seamless coordination and achieving successful project outcomes.
          </p>
          <p className="mt-4">
            Our general contracting services encompass every facet of the
            construction process, including project management, budgeting,
            scheduling, procurement, and quality control. Drawing upon our
            proven track record of delivering projects punctually and within
            budget, we prioritize the utmost standards of craftsmanship and
            safety.
          </p>
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/s2.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-t-[300px] rounded-t-[100px]"
            />
          </div>
          <h1 className="xl:text-3xl text-2xl border-b border-b-black w-full pb-10">
            Our General Contracting Services
          </h1>
          <div className="flex flex-col text-start justify-center mt-10">
            <p className="xl:text-xl text-lg font-bold mb-4">
              1- Concept Development
            </p>
            <p className="mb-4">
              Our team of highly skilled professionals constitutes one of our
              greatest assets. With extensive industry experience, our dedicated
              project managers oversee all aspects of construction, guaranteeing
              efficient task completion to the highest standards. We foster
              close collaboration with clients to fully comprehend their vision,
              goals, and budgetary constraints, maintaining transparent
              communication throughout the entirety of the process.
            </p>
            <div className="flex gap-5">
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
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                2- Space Planning and Design
              </p>
              <p className="mb-4">
                Capital Associated Building Contracting firmly believes that
                prosperous general contracting is built upon robust
                relationships. We cultivate a spirit of teamwork and open
                communication with architects, engineers, and subcontractors.
                Leveraging our extensive network of reliable subcontractors and
                suppliers, we meticulously assemble the optimal team for each
                project, ensuring optimal results.
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
                    src="/services/interiorFit/s1.jpg"
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
                Uncompromising quality remains our paramount focus. We adhere to
                rigorous quality control procedures, encompassing meticulous
                material selection and superior workmanship. Our skilled
                craftsmen take immense pride in their work, consistently
                delivering projects that not only meet but surpass the highest
                industry standards, exceeding client expectations.
              </p>
              <div className="flex gap-5">
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
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                4- Construction and Execution
              </p>
              <p className="mb-4">
                Effective budget and schedule management constitute vital
                considerations in our approach. Through accurate project
                budgeting, accomplished through cost estimation and value
                engineering, we optimize construction costs without sacrificing
                quality. Detailed schedules and ongoing progress monitoring
                guarantee timely project completion.
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
                5- Customization and Installation
              </p>
              <p className="mb-4">
                Safety takes precedence on all our construction sites. We
                strictly adhere to safety protocols and regulations, cultivating
                a secure working environment for our team, subcontractors, and
                visitors. By conducting continuous training programs and regular
                inspections, we minimize risks and foster a culture of safety
                awareness.
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
                6- Finishing Touches
              </p>
              <p className="mb-4">
                Capital Associated Building Contracting stands as your
                trustworthy partner for extraordinary general contracting
                services. Whether your aspirations involve commercial,
                residential, or institutional construction projects, we
                encourage you to contact us today to discuss your requirements
                and allow us to bring your vision to life!
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem] mb-20">
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
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <div className="container px-5 mx-auto flex flex-col items-center justify-center text-center gap-5 pt-20 pb-20">
          <h1 className="xl:text-3xl text-2xl text-center border-b border-b-black w-full pb-10">
            Contact Us for Your General Contracting Needs
          </h1>
          <p className="mb-4">
            Ready to transform your space with our exceptional General
            Contracting services?
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
