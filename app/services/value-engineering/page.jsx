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
              Value Engineering
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
              Maximizing Efficiency Without Compromise
            </p>
            <p className="absolute  bottom-10 left-10 text-white">
              Home{" "}
              <span className="text-black">
                / Our Services / Value Engineering
              </span>
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col gap-5 text-center px-4">
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/s6.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-b-[300px] rounded-b-[100px] "
            />
          </div>
          <p className="mt-4">
            Capital Associated Building Contracting recognizes the significance
            of maximizing the value of your construction endeavors. This is
            precisely why we provide all-encompassing value engineering
            solutions, assisting you in attaining an ideal equilibrium between
            cost, quality, and functionality.
          </p>
          <p className="mt-4">
            Our extensive knowledge and dedication to excellence guarantee that
            your project not only meets your unique needs but also delivers the
            utmost value.
          </p>
          <p className="mt-4">
            Value engineering is a systematic and collaborative approach that
            focuses on optimizing the value of a project by analyzing its
            functions and identifying opportunities to improve performance,
            reduce costs, and enhance quality.
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
            Our Value Engineering Process
          </h1>
          <div className="flex flex-col text-start justify-center mt-10">
            <p className="xl:text-xl text-lg font-bold mb-4">
              1- Evaluation and Analysis
            </p>
            <p className="mb-4">
              Our experienced team of professionals conducts a thorough
              evaluation and analysis of your project to understand its goals,
              objectives, and constraints. We examine the design, materials,
              systems, and processes to identify areas where value can be
              enhanced.
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
                2- Idea Generation
              </p>
              <p className="mb-4">
                Through brainstorming sessions and collaborative workshops, we
                generate a wide range of ideas and alternatives that have the
                potential to improve the project’s value. We encourage input
                from all stakeholders to ensure a holistic approach and diverse
                perspectives.
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
                3- Feasibility Assessment
              </p>
              <p className="mb-4">
                We carefully evaluate the feasibility of each idea generated
                during the brainstorming sessions. Our experts assess the
                technical, operational, and economic viability of the proposed
                alternatives to determine their potential impact on the project.
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
                4- Cost-Benefit Analysis
              </p>
              <p className="mb-4">
                Using advanced cost estimation techniques, we conduct a
                comprehensive cost-benefit analysis for each alternative. This
                analysis helps us understand the potential cost savings and
                benefits that can be achieved without compromising the project’s
                performance or quality.
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
                5- Implementation and Monitoring
              </p>
              <p className="mb-4">
                Once the most viable alternatives are identified, we work
                closely with our clients to implement the approved
                recommendations. We ensure effective project management and
                ongoing monitoring to guarantee that the value enhancements are
                successfully integrated into the construction process.
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
                The final step of our Value Engineering service involves adding
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
            <h1 className="xl:text-3xl text-2xl pb-10">
              Benefits of Value Engineering
            </h1>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                1- Cost Savings
              </p>
              <p className="mb-4">
                By identifying cost-effective alternatives and eliminating
                unnecessary expenses, value engineering helps you achieve
                significant cost savings without sacrificing quality or
                functionality. It allows you to optimize your project’s budget
                and resources effectively.
              </p>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                2- Enhanced Performance
              </p>
              <p className="mb-4">
                Through the systematic evaluation and analysis of your project,
                we identify opportunities to enhance its performance. This
                includes improving efficiency, functionality, durability, and
                sustainability aspects, ensuring that your project performs at
                its best.
              </p>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                3- Innovative Solutions
              </p>
              <p className="mb-4">
                Value engineering encourages out-of-the-box thinking and
                promotes innovative solutions. Our team of experts leverages
                their extensive knowledge and experience to propose creative
                ideas that can transform your project and add value.
              </p>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                4- Risk Mitigation
              </p>
              <p className="mb-4">
                Value engineering helps identify and mitigate potential risks
                early in the project lifecycle. By addressing design flaws,
                constructability issues, and operational challenges, we reduce
                the likelihood of costly delays, rework, and future maintenance
                problems.
              </p>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                5- Stakeholder Collaboration
              </p>
              <p className="mb-4">
                Our value engineering process fosters collaboration and
                engagement among all project stakeholders. We value your input
                and actively involve you in the decision-making process,
                ensuring that your vision and goals are incorporated into the
                final solution.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <div className="container px-5 mx-auto flex flex-col items-center justify-center text-center gap-5 pt-20 pb-20">
          <h1 className="xl:text-3xl text-2xl text-center border-b border-b-black w-full pb-10">
            Contact Us for Value Engineering Services in Dubai
          </h1>
          <p className="mb-4">
            Looking to optimize your project without compromising on quality?
            Our expert value engineering services in Dubai are designed to
            maximize performance, reduce costs, and enhance long-term value at
            every stage of development.
          </p>
          <p className="mb-4">
            At Capital Associated Building Contracting, we collaborate with
            clients, designers, and engineers to identify cost-effective
            alternatives, improve material efficiency, and streamline
            construction methods—without sacrificing aesthetics or
            functionality. Our strategic approach ensures smarter
            decision-making and stronger project outcomes.
          </p>
          <p className="mb-4">
            Get in touch today to schedule a consultation and explore how our
            value-driven solutions can bring efficiency, innovation, and
            sustainability to your next project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
