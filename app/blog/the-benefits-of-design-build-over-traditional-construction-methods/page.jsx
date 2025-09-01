import React from "react";
import Image from "next/image";

const BlogPostDesignBuildComparison = () => {
  const images = [
    "/blogs/The-Benefits-of-Design-Build-Over-Traditional-Construction-Methods/1.jpg",
    "/blogs/The-Benefits-of-Design-Build-Over-Traditional-Construction-Methods/2.jpg",
    "/blogs/The-Benefits-of-Design-Build-Over-Traditional-Construction-Methods/3.jpg",
    "/blogs/The-Benefits-of-Design-Build-Over-Traditional-Construction-Methods/4.jpg",
    "/blogs/The-Benefits-of-Design-Build-Over-Traditional-Construction-Methods/5.jpg",
    "/blogs/The-Benefits-of-Design-Build-Over-Traditional-Construction-Methods/6.jpg",
  ];

  const sections = [
    {
      title: "1. Streamlined Communication",
      body: `One of the biggest advantages of design-build is streamlined communication. In traditional construction, separate entities handle design and construction, which can lead to miscommunication. With design-build, one team manages everything. This unified approach ensures everyone is on the same page, reduces misunderstandings, and improves collaboration.`,
    },
    {
      title: "2. Faster Project Completion",
      body: `Time is money in construction. Design-build projects often finish faster because the integration of design and construction phases eliminates delays. Teams can work concurrently rather than sequentially, and quicker decision-making processes enhance efficiency.`,
    },
    {
      title: "3. Cost Efficiency",
      body: `Design-build can be more cost-effective by minimizing the risk of unexpected costs. Early contractor involvement helps produce accurate cost estimates and keeps the project within a predetermined budget, reducing the likelihood of overruns.`,
    },
    {
      title: "4. Improved Quality",
      body: `The cohesive team approach in design-build leads to better quality. Continuous collaboration allows for practical design choices and innovative solutions, resulting in a superior final product.`,
    },
    {
      title: "5. Single Point of Responsibility",
      body: `Design-build provides a single point of responsibility, simplifying accountability. Unlike traditional methods where responsibility is split and disputes can arise, design-build assigns one entity to own both design and construction.`,
    },
    {
      title: "6. Enhanced Flexibility",
      body: `Design-build allows for greater adaptability; changes can be made more easily during the project, and the integrated team can quickly respond to new information or client needs, ensuring the project stays aligned with the client’s vision.`,
    },
    {
      title: "7. Better Risk Management",
      body: `The single point of responsibility and proactive coordination in design-build improves risk management, reducing disputes and enabling a more predictable outcome.`,
    },
    {
      title: "8. Stronger Collaboration",
      body: `The integrated team fosters teamwork, open communication, and idea-sharing—often producing more innovative solutions and improved project quality.`,
    },
    {
      title: "9. Simplified Contractual Relationships",
      body: `Design-build consolidates multiple contracts into one, reducing legal complexity and giving clients a single point of contact for all concerns.`,
    },
    {
      title: "10. Early Problem Detection",
      body: `With a unified team, potential issues are identified and resolved early, reducing the risk of costly delays and keeping the project on schedule.`,
    },
    {
      title: "11. Improved Safety",
      body: `Design-build projects can have better safety records because safety is planned from the start, with protocols implemented throughout design and construction.`,
    },
    {
      title: "12. Consistent Workflow",
      body: `The integrated approach avoids the start-stop nature of traditional methods, maintaining steady progress and productivity throughout the project.`,
    },
    {
      title: "13. Reduced Administrative Burden",
      body: `Fewer contracts and simplified paperwork reduce admin overhead, allowing clients to focus on priorities other than contract management.`,
    },
    {
      title: "14. Long-Term Value",
      body: `By focusing on quality and durability, design-build projects often deliver long-term value that stands the test of time.`,
    },
    {
      title: "15. Improved Stakeholder Satisfaction",
      body: `A collaborative design-build process aligns stakeholders and typically leads to higher satisfaction rates as projects meet expectations more consistently.`,
    },
    {
      title: "16. Better Resource Utilization",
      body: `Integrated planning optimizes material and labor usage, reduces waste, and ensures efficient resource allocation.`,
    },
    {
      title: "17. Lower Overall Project Costs",
      body: `Design-build reduces the chance of overruns and helps keep projects within budget through coordinated cost control and efficient resource use.`,
    },
    {
      title: "18. Enhanced Transparency",
      body: `Open communication and a unified team make project status and decisions transparent to clients, building trust and confidence.`,
    },
    {
      title: "19. Efficient Problem Resolution",
      body: `Design-build enables quick identification and resolution of issues, keeping the project on track and within budget.`,
    },
    {
      title: "20. Superior Project Management",
      body: `The integrated team can manage planning, execution, and monitoring more effectively, ensuring projects complete on time and within budget.`,
    },
    {
      title: "Conclusion",
      body: `Design-build is a superior choice for many construction projects. It offers a holistic approach that ensures success from start to finish.`,
    },
    {
      title: "Contact Us",
      body: `If you need a construction company in the UAE, or anywhere in the MENA region, contact us to discuss your project with our experts! Fill out the contact form on our site if you have any inquiries.`,
    },
  ];

  return (
    <div className="container mx-auto px-5 pt-40">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold pb-5">The Benefits of Design-Build Over Traditional Construction Methods</h1>
  <p className="text-black text-sm mb-20">September 1, 2025 | Posted by admin</p>
        <div className="relative h-[40rem] w-full">
          <Image
            src="/blogs/The-Benefits-of-Design-Build-Over-Traditional-Construction-Methods/1.jpg"
            alt="Design-build vs traditional construction"
            layout="fill"
            objectFit="cover"
            className="rounded-xl "
          />
        </div>
      </header>

      <article className="flex flex-col text-start items-start justify-start gap-10">
        <p className="text-black">
          The choice between design-build and traditional methods is crucial in the construction industry. Each approach has its unique advantages. However, design-build stands out for many reasons. This blog explores the benefits of design-build over traditional construction methods.
        </p>

        {/* Render sections with a full-width image under each title */}
        {sections.map((s, idx) => {
          const img = images[idx % images.length];
          const isFinal = s.title === 'Conclusion' || s.title === 'Contact Us';
          return (
            <section key={s.title} className={`${isFinal ? 'border-b border-b-black pb-20 w-full' : ''}`}>
              <h2 className="text-2xl font-semibold mb-3">{s.title}</h2>
              {/* full-width image (show full image, not cropped) */}
              <div className="w-full mb-6">
                <Image
                  src={img}
                  alt={s.title}
                  width={1600}
                  height={900}
                  className="w-[1000px] h-auto rounded-lg object-contain"
                />
              </div>
              <p className="text-black">{s.body}</p>
            </section>
          );
        })}
      </article>

      {/* 6-Image Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {images.map((src, i) => (
          <div key={src} className="w-full overflow-hidden rounded-lg" style={{ position: 'relative', paddingTop: '100%' }}>
            {/* square container: padding-top:100% keeps width==height; Image uses fill to cover */}
            <Image src={src} alt={`Gallery ${i + 1}`} fill style={{ objectFit: 'cover', position: 'absolute', inset: 0 }} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogPostDesignBuildComparison;
