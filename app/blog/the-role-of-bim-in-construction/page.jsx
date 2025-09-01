import React from "react";
import Image from "next/image";

const BIMPost = () => {
  return (
    <div className="container mx-auto px-5 pt-40">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold pb-5">The Role of BIM in Construction</h1>
        <p className="text-black text-sm mb-20">September 1, 2025 | Posted by admin</p>
        <div className="relative h-[40rem] w-full">
          <Image
            src="/blogs/The-Role-of-BIM-in-Construction/1.jpg"
            alt="BIM in construction"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </header>

      <article className="flex flex-col text-start items-start justify-start gap-10">
        <section>
          <p className="text-black">BIM has transformed the construction industry. This cutting-edge technology provides a collaborative platform for architects, engineers, and construction professionals. BIM improves project performance through better planning, design, and management.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Enhanced Planning and Design</h2>
          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/The-Role-of-BIM-in-Construction/2.jpg" alt="Accurate digital model" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
          <h3 className="text-xl font-semibold mt-4 mb-2">Accurate Digital Model</h3>
          <p className="text-black">BIM generates an accurate digital representation of the structure. This model contains precise representations of the physical and functional properties. This model is open to all stakeholders, allowing for real-time updates and reducing misunderstandings and errors.</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Efficient Project Planning</h3>
          <p className="text-black">BIM enables for precise visualisation of the completed project, which aids in the identification of potential issues before building begins. This results in substantial time and cost savings.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Improved Design Quality</h2>
          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/The-Role-of-BIM-in-Construction/3.jpg" alt="Improved design quality" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
          <h3 className="text-xl font-semibold mt-4 mb-2">Innovation in Architecture</h3>
          <p className="text-black">Architects can experiment with novel solutions without risk of error. Detailed models enable precise calculations and observations, resulting in structures that fulfil high safety and efficiency requirements.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Resource Management</h2>
          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/The-Role-of-BIM-in-Construction/4.jpg" alt="Resource management" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
          <h3 className="text-xl font-semibold mt-4 mb-2">Efficient Tracking</h3>
          <p className="text-black">The digital model is useful for tracking materials and equipment. Accurate estimations decrease waste and expenses while optimising the supply chain and assuring timely delivery of resources.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Enhanced Collaboration</h2>
          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/The-Role-of-BIM-in-Construction/5.jpg" alt="Enhanced collaboration" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
          <p className="text-black">BIM increases team cooperation by allowing designers and builders to operate on the same platform. Communication barriers are reduced, resulting in a smoother project evolution from conception to conclusion.</p>
        </section>

        <section className="border-b border-b-black pb-20 w-full">
          <h2 className="text-2xl font-semibold mb-3">Additional Benefits</h2>
          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/The-Role-of-BIM-in-Construction/6.jpg" alt="Additional benefits" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
          <p className="text-black">BIM supports accurate cost estimation, effective risk management, streamlined construction, enhanced facility management, rigorous quality control, efficient digital documentation, and training for a skilled workforce. Adoption challenges exist but the long-term benefits are significant.</p>
        </section>
      </article>

      {/* 6-Image Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {["/blogs/The-Role-of-BIM-in-Construction/1.jpg","/blogs/The-Role-of-BIM-in-Construction/2.jpg","/blogs/The-Role-of-BIM-in-Construction/3.jpg","/blogs/The-Role-of-BIM-in-Construction/4.jpg","/blogs/The-Role-of-BIM-in-Construction/5.jpg","/blogs/The-Role-of-BIM-in-Construction/6.jpg"].map((src) => (
          <div key={src} className="w-full overflow-hidden rounded-lg" style={{ position: 'relative', paddingTop: '100%' }}>
            <Image src={src} alt="BIM gallery" fill style={{ objectFit: 'cover', position: 'absolute', inset: 0 }} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default BIMPost;

