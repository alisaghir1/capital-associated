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
              Construction Management
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
              Structured Process. Superior Outcomes.
            </p>
            <p className="absolute  bottom-10 left-10 text-white">
              Home{" "}
              <span className="text-black">
                / Our Services / Construction Management
              </span>
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col gap-5 text-center px-4">
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/construction-management/1.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-b-[300px] rounded-b-[100px] "
            />
          </div>
          <p className="mt-4">
            Capital Associated Building Contracting is your premier destination
            to deliver outstanding construction management services to our
            esteemed clients. With a wealth of experience and a team of highly
            skilled professionals, we have solidified our position as a leading
            provider of top-notch construction management solutions within the
            industry in Dubai, UAE.
          </p>
          <p className="mt-4">
            Recognizing that successful construction projects hinge on effective
            planning, coordination, and execution, our approach to construction
            management is founded on meticulous attention to detail, proactive
            communication, and an unwavering commitment to completing projects
            on schedule and within budgetary constraints.
          </p>
          <p className="mt-4">
            At Capital Associated Building Contracting, we specialize in
            providing transformative General Contracting services that breathe
            new life into your spaces. Whether it&apos;s a commercial establishment,
            residential property, or hospitality venue, our team of experts is
            dedicated to creating remarkable environments that align with your
            unique vision and functional requirements.
          </p>
          <div className="relative mt-5 h-[300px] xl:h-[600px]">
            <Image
              src="/services/construction-management/2.jpg"
              alt="Full Width Image"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-t-[300px] rounded-t-[100px]"
            />
          </div>
          <h1 className="xl:text-3xl text-2xl border-b border-b-black w-full pb-10">
            Our Construction Management Services
          </h1>
          <div className="flex flex-col text-start justify-center mt-10">
            <p className="xl:text-xl text-lg font-bold mb-4">
              1- Comprehensive Project Planning
            </p>
            <p className="mb-4">
              Prior to commencing construction, we dedicate substantial time and
              effort to comprehensive project planning. Our seasoned project
              managers work closely alongside clients, architects, and engineers
              to gain a thorough understanding of project objectives, scope, and
              specific requirements. By meticulously analyzing all project
              facets, we develop a detailed plan that ensures flawless execution
              from inception to completion.
            </p>
            <div className="flex gap-5">
              <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/construction-management/3.jpg"
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
                  src="/services/construction-management/4.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                2- Efficient Resource Allocation
              </p>
              <p className="mb-4">
                The efficient allocation of resources stands as a crucial factor
                in project success. Our construction management team excels in
                the identification and acquisition of essential resources, such
                as materials, equipment, and skilled labor, while optimizing
                both cost-effectiveness and quality. Through meticulous planning
                and strategic partnerships with reputable suppliers and
                subcontractors, we guarantee the timely availability of
                resources precisely where they are needed.
              </p>
              <div className="flex gap-5">
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/construction-management/5.jpg"
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
                    src="/services/construction-management/6.jpg"
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
                3- Risk Management and Quality Assurance
              </p>
              <p className="mb-4">
                Capital Associated Building Contracting acknowledges that
                construction projects inherently entail risks. Our construction
                management experts possess the expertise to assess and mitigate
                potential risks, minimizing disruptions and maintaining a safe
                working environment. Emphasizing the utmost commitment to
                quality assurance, we implement rigorous measures to ensure the
                highest standards are upheld throughout the entire construction
                process.
              </p>
              <div className="flex gap-5">
                <div className="relative mt-5 w-1/2 h-56 xl:h-96">
                  {" "}
                  {/* Add 'relative' to the parent */}
                  <Image
                    src="/services/construction-management/7.jpg"
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
                    src="/services/construction-management/8.jpg"
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
                4- Effective Communication and Collaboration
              </p>
              <p className="mb-4">
                Clear and open communication stands as a cornerstone of
                successful construction management. Our team actively cultivates
                strong relationships with all stakeholders, facilitating
                transparent and timely channels of communication. We maintain
                clients fully informed regarding project progress, promptly
                address any concerns that arise, and provide regular updates to
                ensure everyone remains well-informed and aligned.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem]">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/construction-management/9.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                5- Adherence to Deadlines and Budgetary Constraints
              </p>
              <p className="mb-4">
                We recognize the paramount importance of meeting project
                deadlines and adhering to allocated budgets. Our construction
                management professionals employ proven methodologies and project
                management techniques to streamline operations and meticulously
                maintain project schedules. By closely monitoring costs and
                implementing stringent cost-control measures, we ensure projects
                remain well within the agreed-upon budget.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem]">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/construction-management/10.jpg"
                  alt="Full Width Image"
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image scales properly within the container
                  className="xl:rounded-b-[150px] rounded-b-[50px]"
                />
              </div>
            </div>
            <div className="flex flex-col text-start justify-center mt-10">
              <p className="xl:text-xl text-lg font-bold mb-4">
                6- Client Satisfaction and Long-Term Partnerships
              </p>
              <p className="mb-4">
                Client satisfaction lies at the heart of our construction
                management services. Our unwavering dedication to exceeding
                expectations drives us to deliver exceptional results that align
                seamlessly with our clients’ vision and goals. We highly value
                the establishment of long-term partnerships, aiming to become
                the preferred construction management partner for all our
                clients’ future projects.
              </p>
              <div className="relative mt-5  h-64 xl:h-[30rem] mb-20">
                {" "}
                {/* Add 'relative' to the parent */}
                <Image
                  src="/services/construction-management/11.jpg"
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
            Contact Us for Expert Construction Management in Dubai, UAE
          </h1>
          <p className="mb-4">
            Looking for professional construction management services in Dubai
            that make sure your project is delivered on time, within budget, and
            to the highest standards? At Capital Associated Contracting, we
            provide end-to-end construction oversight—from planning and
            procurement to execution and handover.
          </p>
          <p className="mb-4">
            Our team of experienced project managers, engineers, and consultants
            work closely with clients, contractors, and stakeholders to
            streamline workflows, minimize risk, and maintain full transparency
            throughout every phase. Whether you're developing a residential
            tower, commercial space, or mixed-use project, we deliver solutions
            that combine technical precision with real-world efficiency.
          </p>
          <p className="mb-4">
            Get in touch today to discuss your project goals and discover how
            our construction management expertise can provide success from the
            ground up.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
