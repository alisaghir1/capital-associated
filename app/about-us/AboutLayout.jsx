import React from "react";
import Image from "next/image";
import LeaderCard from "../components/LeaderCard";
import CapabilityDownload from "../components/CapabilityDownload";

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
                Capital Associated Building Contracting LLC is a licensed Dubai general contractor, founded in 2021, delivering villas, towers, and commercial builds across the UAE. We carry contractual responsibility end-to-end &mdash; from structural shell through MEP coordination to handover.
              </p>
              <details className="mt-4 group">
                <summary className="cursor-pointer list-none font-semibold text-black flex items-center gap-2 w-fit">
                  <span>Company background</span>
                  <span className="transition-transform duration-200 group-open:rotate-180">&#9662;</span>
                </summary>
                <div className="mt-3 flex flex-col gap-4 text-gray-700">
                  <p>
                    We hold an active Dubai Department of Economy and Tourism trade license for building contracting and operate across Dubai, Abu Dhabi, and Sharjah. Since formation, the company has completed over 100 projects totalling more than 750,000 sq ft of built-up area &mdash; residential villas in Jumeirah and Dubai Hills, commercial builds across multiple Dubai locations, high-rise towers, office buildings, and luxury developments in Tilal Al Ghaf.
                  </p>
                  <p>
                    Our project portfolio spans private residential clients, restaurant groups, commercial operators, and property developers. We manage subcontractors, procure materials, coordinate with consultants and authorities, and hand over completed buildings ready for occupancy and operation.
                  </p>
                </div>
              </details>
              <CapabilityDownload className="mt-2 inline-flex w-fit items-center gap-2 border border-black rounded-md px-5 py-2.5 text-sm font-semibold hover:bg-black hover:text-white transition-all duration-200 ease-in-out" />
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
          <p className="mt-4 text-center max-w-2xl mx-auto">
            Capital Associated was co-founded by Mohab Ayoub and Ramaz Izza in 2021, built on direct senior involvement rather than layered management structures.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mt-6">
            <LeaderCard
              image="/team/t4.jpg"
              name="Ramaz Izza"
              role="Managing Director & Co-Founder"
              bio="Ramaz brings 15+ years of UAE construction experience to every project decision. He stays directly involved from pre-construction planning through final handover."
              points={["15+ years in UAE construction", "Managed AED 3B+ in combined project value", "Delivered towers, hotels, malls & luxury villas"]}
            />
            <LeaderCard
              name="Mohab Ayoub"
              role="Co-Founder"
              bio="Mohab co-founded Capital Associated with 18+ years in the UAE built environment. He also leads Algedra Interior Design, bringing a commercial, brand-focused perspective to construction delivery."
              points={["18+ years in UAE built environment", "CEO, Algedra Interior Design (Luxury Lifestyle Award winner)", "Falcon of the Year \u2014 Best Entrepreneur, 2022"]}
            />
          </div>

          <h2 className="text-2xl font-bold text-center mt-10">What We Deliver</h2>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            General contracting is our core service, backed by a full range of delivery capabilities:
          </p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto w-full">
            <li className="flex items-start gap-2 bg-slate-50 border border-gray-200 rounded-lg p-4"><span className="text-green-600 mt-0.5">&#10003;</span><span><strong>General Contracting</strong> &mdash; structures, masonry, facade, roofing & civil works</span></li>
            <li className="flex items-start gap-2 bg-slate-50 border border-gray-200 rounded-lg p-4"><span className="text-green-600 mt-0.5">&#10003;</span><span><strong>Construction Management</strong> &mdash; programme oversight for owner-led projects</span></li>
            <li className="flex items-start gap-2 bg-slate-50 border border-gray-200 rounded-lg p-4"><span className="text-green-600 mt-0.5">&#10003;</span><span><strong>Design-Build</strong> &mdash; integrated design and construction under one contract</span></li>
            <li className="flex items-start gap-2 bg-slate-50 border border-gray-200 rounded-lg p-4"><span className="text-green-600 mt-0.5">&#10003;</span><span><strong>Interior Fit-Out</strong> &mdash; residential and commercial spaces</span></li>
            <li className="flex items-start gap-2 bg-slate-50 border border-gray-200 rounded-lg p-4"><span className="text-green-600 mt-0.5">&#10003;</span><span><strong>Renovation & Remodeling</strong> &mdash; structural and aesthetic upgrades</span></li>
            <li className="flex items-start gap-2 bg-slate-50 border border-gray-200 rounded-lg p-4"><span className="text-green-600 mt-0.5">&#10003;</span><span><strong>Pre-Construction Services</strong> &mdash; buildability review, cost planning, programme development</span></li>
            <li className="flex items-start gap-2 bg-slate-50 border border-gray-200 rounded-lg p-4"><span className="text-green-600 mt-0.5">&#10003;</span><span><strong>Green Building Solutions</strong> &mdash; thermal performance, energy efficiency, Al Sa&apos;fat compliance</span></li>
          </ul>

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
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto w-full mb-10">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="font-bold mb-1">Procurement</p>
                <p className="text-sm text-gray-700">Pre-qualified suppliers across 14 material categories for tier-one pricing and priority stock.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="font-bold mb-1">Authority Coordination</p>
                <p className="text-sm text-gray-700">Building permits, Civil Defence certification, DEWA connections, and occupancy certificates, sequenced into every programme.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="font-bold mb-1">Quality Control</p>
                <p className="text-sm text-gray-700">7-day and 28-day concrete testing, pre-pour rebar inspection, and flood-tested waterproofing before finishes.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="font-bold mb-1">Safety</p>
                <p className="text-sm text-gray-700">Site operations follow NEBOSH, IOSH, and OSHA guidelines, with daily toolbox talks and PPE enforcement.</p>
              </div>
            </div>
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
