import React from "react";
import Image from "next/image";

const SpecialtyConstructionTrends = () => {
  return (
    <div className="container mx-auto px-5 pt-40">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold pb-5">Specialty Construction Trends</h1>
        <p className="text-black text-sm mb-20">September 1, 2025 | Posted by admin</p>
        <div className="relative h-[40rem] w-full">
          <Image
            src="/blogs/Specialty-Construction-Trends/1.jpg"
            alt="Specialty construction trends"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </header>

      <article className="flex flex-col text-start items-start justify-start gap-10">
        <section>
          <p className="text-black">Specialty construction is a dynamic field encompassing unique techniques, materials, and processes tailored to meet specific project needs. As the industry evolves, several emerging trends and innovations are driving the future of specialty construction.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Sustainable and Green Building</h2>
          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/Specialty-Construction-Trends/2.jpg" alt="Sustainable building" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
          <p className="text-black">Sustainability is at the forefront of modern construction practices. Green building techniques are increasingly popular, aiming to reduce environmental impact and enhance energy efficiency. Zero Net Energy Buildings (NZEBs) are gaining traction, producing as much energy as they consume over a year.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Building Information Modeling (BIM)</h2>
          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/Specialty-Construction-Trends/3.jpg" alt="BIM in specialty construction" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
          <p className="text-black">Building Information Modeling (BIM) continues to revolutionize the construction industry. BIM involves creating digital representations of physical and functional characteristics of buildings, enhancing project coordination and reducing errors.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Drones and UAVs</h2>
          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/Specialty-Construction-Trends/4.jpg" alt="Drones and UAVs" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
          <p className="text-black">Drones and Unmanned Aerial Vehicles (UAVs) are becoming integral to construction projects for site surveys, inspections, and creating 3D models, improving safety and project monitoring.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Robotics, 3D Printing & Automation</h2>
          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/Specialty-Construction-Trends/5.jpg" alt="Robotics and 3D printing" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
          <p className="text-black">Robotics and automation handle repetitive tasks, while 3D printing enables rapid creation of complex structures, reducing waste and improving efficiency across specialty construction projects.</p>
        </section>

        <section className="border-b border-b-black pb-20 w-full">
          <h2 className="text-2xl font-semibold mb-3">Digital Technologies and IoT</h2>
          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/Specialty-Construction-Trends/6.jpg" alt="IoT and cloud" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
          <p className="text-black">AI, IoT, cloud collaboration platforms, AR/VR and data analytics are driving improved planning, resource allocation, and real-time monitoring, positioning specialty construction at the cutting edge of innovation.</p>
        </section>
      </article>

      {/* 6-Image Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {["/blogs/Specialty-Construction-Trends/1.jpg","/blogs/Specialty-Construction-Trends/2.jpg","/blogs/Specialty-Construction-Trends/3.jpg","/blogs/Specialty-Construction-Trends/4.jpg","/blogs/Specialty-Construction-Trends/5.jpg","/blogs/Specialty-Construction-Trends/6.jpg"].map((src) => (
          <div key={src} className="w-full overflow-hidden rounded-lg" style={{ position: 'relative', paddingTop: '100%' }}>
            <Image src={src} alt="Specialty gallery" fill style={{ objectFit: 'cover', position: 'absolute', inset: 0 }} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default SpecialtyConstructionTrends;

