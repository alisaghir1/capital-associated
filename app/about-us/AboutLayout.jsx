import React from "react";
import Image from "next/image";

const AboutLayout = () => {
  return (
    <div className="w-full h-full mb-10">
      <div className="bg-slate-100">
        {/* Fullscreen Background Section */}
        <div className="relative w-full h-[70vh] min-h-[400px] max-h-[700px] lg:max-h-[800px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/main.jpg"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
          {/* Content on top of the image */}
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center px-8 pt-24 xl:pt-28">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
              About Capital Associated Building Contracting LLC
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black mt-5">
              Licensed Building Contracting Company in Dubai. Est. 2021.
            </p>
            <p className="absolute bottom-10 left-10 text-white">
              Home <span className="text-black">/ About Us</span>
            </p>
          </div>
        </div>

        {/* Container Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row lg:items-start items-center gap-10">
            {/* Left Text Content */}
            <div className="lg:w-1/2 flex flex-col gap-5">
              <p className="text-xl">Capital Associated Building Contracting LLC</p>
              <h2 className="text-2xl font-bold">
                A Dubai-based general contractor delivering villas, towers, and commercial builds across the UAE since 2021.
              </h2>
              <p className="mt-4">
                Capital Associated Building Contracting LLC is a licensed building contracting company founded in 2021 and headquartered in Dubai, UAE. We hold an active Dubai Department of Economy and Tourism trade license for building contracting and operate across Dubai, Abu Dhabi, and Sharjah.
              </p>
              <p className="mt-4">
                Since formation, the company has completed over 100 projects totalling more than 750,000 sq ft of built-up area &mdash; residential villas in Jumeirah and Dubai Hills, commercial builds across multiple Dubai locations, high-rise towers, office buildings, and luxury developments in Tilal Al Ghaf. Our project portfolio spans private residential clients, restaurant groups, commercial operators, and property developers &mdash; each with different requirements, budgets, and timelines, and each delivered to completion.
              </p>
              <p className="mt-4">
                We are a contracting company. That means we take contractual responsibility for delivering physical construction &mdash; structural shells, high-rise towers, civil works, and MEP coordination. We manage subcontractors, procure materials, coordinate with consultants and authorities, and hand over completed buildings that are ready for occupancy and operation.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center items-center">
              <Image
                src="/about/about1.jpg"
                alt="Capital Associated Building Contracting headquarters in Dubai"
                width={1200}
                height={600}
                className="lg:rounded-es-[300px] lg:rounded-se-[300px] h-[30rem]"
              />
            </div>
          </div>

          {/* Full-width Bottom Image */}
          <div className="mt-5 hidden xl:flex">
            <Image
              src="/about/about2.jpg"
              alt="UAE construction project by Capital Associated"
              layout="responsive"
              width={1920}
              height={1080}
              className="xl:rounded-b-[300px] rounded-b-[100px]"
            />
          </div>
        </div>

        <div className="w-full container mx-auto flex flex-col gap-5 px-4">
          <h2 className="text-2xl font-bold text-center mt-10">Leadership</h2>
          <p className="mt-4">
            Capital Associated was co-founded by Mohab Ayoub and Ramaz Izza in 2021. The company was built on their combined operational experience in UAE construction and a shared focus on delivering projects through direct senior involvement rather than layered management structures.
          </p>
          <p className="mt-4">
            <strong>Ramaz Izza</strong> serves as Managing Director and brings over 15 years of construction industry experience to every project decision. Prior to founding Capital Associated, Ramaz managed a combined project portfolio exceeding AED 3 billion in value &mdash; including residential towers, commercial hotels, shopping malls, and luxury villa developments across the UAE. His direct involvement in project delivery &mdash; from pre-construction planning through final handover &mdash; means that project-critical decisions carry senior-level oversight at every stage.
          </p>
          <p className="mt-4">
            <strong>Mohab Ayoub</strong> co-founded Capital Associated with over 18 years of experience in the UAE built environment industry. He is also the CEO of Algedra Interior Design, a firm recognised with the Luxury Lifestyle Award for Best Interior Design Company and operating across the UAE, GCC, and MENA region. Mohab received the Falcon of the Year award for Best Entrepreneur in 2022. His cross-industry experience in design, hospitality, and construction gives Capital Associated a commercial perspective that pure contracting firms typically lack &mdash; particularly on projects where brand implementation, client experience, and operational readiness matter as much as structural delivery.
          </p>

          <h2 className="text-2xl font-bold text-center mt-10">What We Deliver</h2>
          <p className="mt-4">
            Our general contracting capability covers the full scope of building construction &mdash; reinforced concrete structures, masonry, facade systems, roofing, and all associated civil works. This is our core service and the foundation of every project we undertake.
          </p>
          <p className="mt-4">
            Beyond structural delivery, our service scope includes construction management for clients who need professional programme oversight, design-build delivery for projects that benefit from integrated design and construction under a single contract, interior fit-out for residential and commercial spaces, and renovation and remodeling for existing properties requiring structural or aesthetic upgrades.
          </p>
          <p className="mt-4">
            We also provide pre-construction services &mdash; buildability reviews, cost planning, and construction programme development &mdash; that reduce risk before site work begins. For clients focused on long-term operational efficiency, our green building solutions address thermal performance, energy consumption, and Al Sa&apos;fat compliance within the specific demands of the Gulf climate.
          </p>

          <div className="mt-10 flex flex-col xl:flex-row justify-center items-center gap-10 xl:gap-4">
            <div className="xl:w-1/4 w-full px-5 xl:px-0 h-[300px] xl:h-[500px]">
              <Image
                src="/about/about3.jpg"
                alt="Custom villa construction in Jumeirah"
                width={1000}
                height={500}
                className="h-full w-full object-cover xl:rounded-se-[300px] xl:rounded-es-[300px]"
              />
            </div>

            <div className="xl:w-1/2 w-full px-5 xl:px-0 h-[300px] xl:h-[500px]">
              <Image
                src="/about/about4.jpg"
                alt="Commercial construction site in Dubai"
                width={1200}
                height={500}
                className="h-full w-full object-cover xl:rounded-ss-[300px] xl:rounded-ee-[300px]"
              />
            </div>

            <div className="xl:w-1/4 w-full px-5 xl:px-0 h-[300px] xl:h-[500px]">
              <Image
                src="/about/about5.jpg"
                alt="Completed residential development by Capital Associated"
                width={1200}
                height={500}
                className="h-full w-full object-cover xl:rounded-se-[300px] xl:rounded-es-[300px]"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 px-4">
            <h2 className="text-2xl font-bold text-center mt-5">Completed Projects</h2>
            <p className="mt-4">
              Our work is documented across a portfolio of completed and active projects. These are not renderings or proposals &mdash; they are built, handed-over, operational.
            </p>
            <p className="mt-4">
              Selected completed projects include:
            </p>
            <p className="mt-4">
              <strong>Residential construction:</strong> A 10,800 sq ft custom villa in Jumeirah for a private client, requiring community-sensitive design execution, premium facade specification, and precision interior finishes. An elite villa development in Dubai Hills delivered within one of Dubai&apos;s fastest-growing master-planned communities. A luxury residential interior fit-out in Tilal Al Ghaf combining high-end material selection with family-oriented spatial planning.
            </p>
            <p className="mt-4">
              <strong>Commercial construction:</strong> A turn-key restaurant build-out for Meat Moot in Al Khawaneej &mdash; 2,800 sq ft of specialised commercial kitchen infrastructure, dining area development, and full regulatory coordination. Additional Meat Moot restaurant construction at JBR and City Walk, each with location-specific structural and authority requirements.
            </p>
            <p className="mt-4">
              <strong>Landscape and exterior works:</strong> Exterior construction and landscape development across multiple Dubai locations, including hardscape, softscape, pool construction, and boundary wall systems. A dedicated landscape and outdoor living project in Tilal Al Ghaf integrating swimming pool construction, outdoor kitchen infrastructure, and premium external finishes.
            </p>
            <p className="mt-4">
              The full portfolio is available on our{" "}
              <a href="/our-work" className="underline font-semibold">
                projects page
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-center mt-10">How We Operate</h2>
            <p className="mt-4">
              <strong>Procurement.</strong> We maintain pre-qualified supplier relationships across 14 material categories &mdash; concrete, steel, facade systems, sanitary ware, flooring, lighting, and MEP equipment among them. These relationships provide access to tier-one pricing, priority stock allocation, and product lines not available through retail channels.
            </p>
            <p className="mt-4">
              <strong>Authority coordination.</strong> We manage the full regulatory approval process &mdash; DDA and Dubai Municipality building permits, Civil Defence fire and life safety certification, DEWA service connections, and final occupancy certificates. Permit sequencing is integrated into every construction programme so that authority inspections align with construction milestones rather than creating idle time.
            </p>
            <p className="mt-4">
              <strong>Quality control.</strong> Material testing, workmanship inspections, and milestone sign-offs follow a structured QA/QC programme on every project. Concrete is tested at 7-day and 28-day intervals. Rebar placement is inspected and approved before every pour. Waterproofing installations are flood-tested before finishes are applied. We do not rely on final snagging to catch problems &mdash; quality is controlled at the point of installation.
            </p>
            <p className="mt-4 mb-10">
              <strong>Safety.</strong> Site operations comply with NEBOSH, IOSH, and OSHA guidelines. Daily toolbox talks, PPE enforcement, and incident reporting are standard across all active sites.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center bg-yellow-950 text-white p-10 xl:rounded-b-[300px] mt-5">
        <blockquote className="italic text-lg md:text-xl mt-4">
          &ldquo;Across over AED 3 billion in delivered construction, I have learned that clients remember two things &mdash; whether you finished on time and whether they had to chase you to get answers. Everything else we do on site exists to protect those two outcomes.&rdquo;
        </blockquote>
        <p className="mt-4 font-semibold">&mdash; Ramaz Izza, Managing Director</p>

        <h2 className="my-10 text-2xl">Location and Contact</h2>
        <p className="mt-4">
          Capital Associated Building Contracting LLC is based in Dubai and operates across the UAE. We take on projects in Dubai, Abu Dhabi, Sharjah, and the Northern Emirates &mdash; residential, commercial, and mixed-use developments of varying scale and complexity.
        </p>
        <p className="mt-4 mb-20">
          For project enquiries, consultations, or contractor pre-qualification submissions,{" "}
          <a href="/contact-us" className="underline font-semibold">
            contact our team directly
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutLayout;
