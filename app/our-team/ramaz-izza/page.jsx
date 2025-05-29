import React from "react";
import Head from "next/head";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Head>
        <title>Ramaz Issa | UAE Construction General Manager & Projects Manager</title>
        <meta
          name="description"
          content="Ramaz Issa is a UAE-based General Manager and Projects Manager with 15+ years of experience leading AED 3B+ residential towers, hotel, mall and luxury villa projects."
        />
      </Head>

      <div className="flex flex-col items-center justify-center border-b border-b-black pb-20">
        <div className="relative w-full h-[30rem]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/main.jpg"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Content on top of the image */}
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center">
            <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
              RAMAZ ISSA
            </h1>
            <p className="absolute bottom-10 left-10 text-white">
              Home <span className="text-black">/ Our Team / RAMAZ ISSA</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-10 items-center rounded-2xl mt-10">
          <div className="relative xl:ml-10 mt-10 h-[60rem] xl:w-[60rem] px-5 w-full object-center">
            <Image
              src="/team/t4.jpg"
              alt="RAMAZ ISSA"
              layout="fill"
              objectFit="cover"
              className="xl:rounded-xl"
            />
          </div>

          <div className="container mx-auto px-5">
            <h1 className="text-3xl font-bold">Ramaz Issa</h1>
            <p className="mt-2">General Manager & Projects Manager</p>

            <div className="mt-4 space-y-4 text-justify">
              <p>
                Ramaz Issa is a highly experienced Managing Director in the UAE’s construction industry, with over 15 years of expertise in engineering and leading large-scale developments. He has led major residential, commercial, and luxury villa projects, contributing significantly to the region’s built environment through a strategic and results-driven approach.
              </p>

              <p>
                <strong>Academic & Professional Credentials:</strong> Ramaz holds a Bachelor's degree in Civil Engineering and a Master's in Project Management, along with PMP certification. His educational background equips him to bridge strategic planning with on-ground engineering execution — a crucial capability in the fast-paced environment of UAE construction.
              </p>

              <p>
                <strong>Project Experience and Value:</strong> Over the course of his career, Ramaz has overseen a wide variety of developments, including multi-storey residential towers, shopping malls, five-star hotel construction, and ultra-luxurious mansions in Dubai. The total value of the projects under his direction exceeds AED 3 billion, highlighting the scale and impact of his work.
              </p>

              <p>
                <strong>Industry Partnerships:</strong> He has delivered major projects in collaboration with some of the UAE’s leading real estate developers and stakeholders, including Damac, Nakheel, Sobha, Dubai Investments, and Air Arabia. His portfolio spans both private and public-sector initiatives, coordinating multidisciplinary teams, navigating complex technical scopes, and meeting diverse investor requirements.
              </p>

              <p>
                <strong>Team Management & Site Operations:</strong> More than a strategic director, Ramaz remains actively involved in on-site operations. He supervises engineering teams, enforces strict site discipline, and streamlines workflows to ensure consistent progress. His leadership guarantees adherence to timelines, safety protocols, and regulatory standards across every site — regardless of scale or complexity.
              </p>

              <p>
                <strong>Construction Methodology & Execution:</strong> Ramaz is known for his hands-on approach and structured execution methodology. Each project is led with clearly defined milestones, transparent accountability, and a deep commitment to quality. Whether it’s a luxury residential compound or a high-rise commercial structure, his leadership ensures the original vision is built with technical accuracy and operational integrity.
              </p>

              <p>
                His leadership reflects a long-standing dedication to architectural and construction excellence—particularly across high-value, technically demanding projects throughout the UAE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
