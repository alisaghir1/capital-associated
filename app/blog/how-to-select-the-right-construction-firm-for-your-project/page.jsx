import React from "react";
import Image from "next/image";

const SelectConstructionFirm = () => {
  return (
    <div className="container mx-auto px-5 pt-40">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold pb-5">How to Select the Right Construction Firm for Your Project</h1>
        <p className="text-black text-sm mb-20">September 1, 2025 | Posted by admin</p>
        <div className="relative h-[40rem] w-full">
          <Image
            src="/blogs/How-to-Select-the-Right-Construction-Firm-for-Your-Project/1.jpg"
            alt="Select the right construction firm"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </header>

      <article className="flex flex-col text-start items-start justify-start gap-10">
        <section>
          <p className="text-black">Selecting the right construction firm can be challenging. Many factors need consideration. The right choice ensures a smooth and successful project. Follow these steps to make an informed decision.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Define Your Project Scope</h2>
          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/How-to-Select-the-Right-Construction-Firm-for-Your-Project/2.jpg" alt="Define project scope" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
          <p className="text-black">Begin by outlining the project's details. Include size, complexity, and budget. Knowing the scope helps narrow down the list of potential firms. It ensures the firm you choose can handle your specific needs.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Research and Recommendations</h2>
          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/How-to-Select-the-Right-Construction-Firm-for-Your-Project/3.jpg" alt="Research and recommendations" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
          <p className="text-black">Ask friends and family for referrals. Personal experiences provide valuable insights. Online reviews and ratings are also helpful. Look for consistency in positive feedback. Ensure the firm has a good reputation.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Check Credentials and Experience</h2>
          <p className="text-black">Verify the firm's credentials. Ensure they have the necessary licenses and certifications. Experience in similar projects is crucial. It indicates the firm's capability to handle your project. Ask for a portfolio of past projects.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Meet with Potential Firms</h2>
          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/How-to-Select-the-Right-Construction-Firm-for-Your-Project/4.jpg" alt="Meet with firms" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
          <p className="text-black">Schedule meetings with the shortlisted firms. Discuss your project in detail. Evaluate their understanding and approach. Communication is key. A firm that listens and responds well is a good sign.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Assess Project Management Skills</h2>
          <p className="text-black">Effective project management is essential. Ask about their process and team structure. Understand how they handle timelines, budgets, and changes. Good project management ensures smooth execution.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Evaluate Technical Expertise</h2>
          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/How-to-Select-the-Right-Construction-Firm-for-Your-Project/5.jpg" alt="Evaluate technical expertise" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
          <p className="text-black">Technical skills are vital for construction projects. Inquire about the firm's expertise in various construction methods. Their ability to adopt new technologies can be beneficial. It often results in better quality and efficiency.</p>
        </section>

        <section className="border-b border-b-black pb-20 w-full">
          <h2 className="text-2xl font-semibold mb-3">Understand Financial Stability</h2>
          <div className="w-full mt-4 mb-6">
            <Image src="/blogs/How-to-Select-the-Right-Construction-Firm-for-Your-Project/6.jpg" alt="Financial stability" width={1000} height={562} className="w-full h-auto rounded-lg object-contain" />
          </div>
          <p className="text-black">Financial stability is crucial for the continuity of your project. Request financial references or proof of stability. It assures you that the firm can handle financial demands without delays.</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Review Safety Practices</h3>
          <p className="text-black">Safety should be a priority. Inquire about the firm’s safety record and practices. A good safety record reduces risks and ensures a safe working environment. Ask for their safety certifications and protocols.</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Analyze Communication Channels</h3>
          <p className="text-black">Effective communication prevents misunderstandings. Ensure the firm has clear communication channels. Regular updates and transparent reporting are vital. It keeps you informed and involved in the project.</p>
        </section>
      </article>

      {/* 6-Image Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {["/blogs/How-to-Select-the-Right-Construction-Firm-for-Your-Project/1.jpg","/blogs/How-to-Select-the-Right-Construction-Firm-for-Your-Project/2.jpg","/blogs/How-to-Select-the-Right-Construction-Firm-for-Your-Project/3.jpg","/blogs/How-to-Select-the-Right-Construction-Firm-for-Your-Project/4.jpg","/blogs/How-to-Select-the-Right-Construction-Firm-for-Your-Project/5.jpg","/blogs/How-to-Select-the-Right-Construction-Firm-for-Your-Project/6.jpg"].map((src) => (
          <div key={src} className="w-full overflow-hidden rounded-lg" style={{ position: 'relative', paddingTop: '100%' }}>
            <Image src={src} alt="Selection gallery" fill style={{ objectFit: 'cover', position: 'absolute', inset: 0 }} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default SelectConstructionFirm;

