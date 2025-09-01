import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const blogPosts = [
    {
      id: 30,
      title: "Specialty Construction Trends",
      image: "/blogs/Specialty-Construction-Trends/1.jpg",
      path: "/blog/specialty-construction-trends",
      date: "01 Sep",
    },
    {
      id: 29,
      title: "How to Select the Right Construction Firm for Your Project",
      image: "/blogs/How-to-Select-the-Right-Construction-Firm-for-Your-Project/1.jpg",
      path: "/blog/how-to-select-the-right-construction-firm-for-your-project",
      date: "01 Sep",
    },
    {
      id: 28,
      title: "The Role of BIM in Construction",
      image: "/blogs/The-Role-of-BIM-in-Construction/1.jpg",
      path: "/blog/the-role-of-bim-in-construction",
      date: "01 Sep",
    },
    {
      id: 27,
      title: "The Evolution of the Design-Build Approach in Modern Construction",
      image: "/blogs/The-Evolution-of-the-Design-Build-Approach-in-Modern-Construction/1.jpg",
      path: "/blog/the-evolution-of-the-design-build-approach-in-modern-construction",
      date: "01 Sep",
    },
    {
      id: 26,
      title: "Trends in Residential Construction: What Homeowners Want",
      image: "/blogs/Trends-in-Residential-Construction-What-Homeowners-Want/1.jpg",
      path: "/blog/trends-in-residential-construction-what-homeowners-want",
      date: "01 Sep",
    },
    {
      id: 25,
      title: "The Role of Project Management in Construction Success",
      image: "/blogs/The-Role-of-Project-Management-in-Construction-Success/1.jpg",
      path: "/blog/the-role-of-project-management-in-construction-success",
      date: "01 Sep",
    },
    {
      id: 24,
      title: "Key Considerations for Planning a Successful Commercial Development",
  image: "/blogs/Key-Considerations-for-Planning-a-Successful-Commercial-Development/1.jpg",
      path: "/blog/key-considerations-for-planning-a-successful-commercial-development",
  date: "01 Sep",
    },
    {
      id: 23,
      title: "The Benefits of Design-Build Over Traditional Construction Methods",
      image: "/blogs/The-Benefits-of-Design-Build-Over-Traditional-Construction-Methods/1.jpg",
      path: "/blog/the-benefits-of-design-build-over-traditional-construction-methods",
  date: "01 Sep",
    },
    {
      id: 22,
      title: "Top Trends in Commercial Construction for 2024",
      image: "/blogs/Top-Trends-in-Commercial-Construction-for-2024/1.jpg",
      path: "/blog/top-trends-in-commercial-construction-for-2024",
      date: "18 Aug",
    },
    {
      id: 21,
      title: "The Comprehensive Benefits of the Design-Build Approach in Modern Construction",
      image: "/blogs/The-Comprehensive-Benefits-of-the-Design-Build-Approach/1.jpg",
      path: "/blog/the-comprehensive-benefits-of-the-design-build-approach-in-modern-construction",
      date: "18 Aug",
    },
    {
      id: 20,
      title: "Maximizing Natural Light in Interior Design Projects",
      image: "/blogs/Maximizing-Natural-Light-in-Interior-Design-Projects/1.jpg",
      path: "/blog/maximizing-natural-light-in-interior-design-projects",
      date: "18 Aug",
    },
    {
      id: 19,
      title: "Room Design Tips for a Comfortable Hospitality Experience",
      image: "/blogs/Room-Design-Tips-for-a-Comfortable-Hospitality-Experience/1.jpg",
      path: "/blog/room-design-tips-for-a-comfortable-hospitality-experience",
      date: "18 Aug",
    },
    {
      id: 18,
      title: "Construction Trends and Insights in UAE",
      image: "/blogs/Construction-Trends-and-Insights-in-UAE/01.jpg",
      path: "/blog/construction-trends-and-insights-in-uae",
      date: "18 Aug",
    },
    {
      id: 17,
      title: "Essential Tips for Successful Home Renovation and Remodeling",
  image: "/blogs/Essential-Tips-for-Successful-Home-Renovation-and-Remodeling/01.jpg",
      path: "/blog/essential-tips-for-successful-home-renovation-and-remodeling",
      date: "18 Aug",
    },
    {
      id: 16,
      title: "Creating an Inviting Guest Room",
  image: "/blogs/Creating-an-Inviting-Guest-Room/01.jpg",
      path: "/blog/creating-an-inviting-guest-room",
      date: "18 Aug",
    },
    {
      id: 15,
      title: "Cost-Effective Solutions in Construction and Design",
      image: "/blogs/Cost-Effective-Solutions-in-Construction-and-Design/01.jpg",
      path: "/blog/cost-effective-solutions-in-construction-and-design",
      date: "18 Aug",
    },
    {
      id: 14,
      title: "Choosing the Right Materials for Your Commercial Fit-Out Project",
      image: "/blogs/Choosing-the-Right-Materials-for-Your-ommercial-Fit-Out-roject/1.jpg",
      path: "/blog/choosing-the-right-materials-for-your-commercial-fit-out-project",
      date: "18 Aug",
    },
    {
      id: 13,
      title: "Bathroom Renovation Tips for Maximum Impact",
      image: "/blogs/bathroom-renovation/01.jpg",
      path: "/blog/bathroom-renovation-tips-for-maximum-impact",
      date: "18 Aug",
    },
    {
      id: 1,
      title: "The Benefits of Using Reclaimed Wood in Construction",
      image: "/about1.jpg",
      path: "/blog/the-benefits-of-using-reclaimed-wood-in-construction",
      date: "08 Jan",
    },
    {
      id: 2,
      title: "A Guide to Retrofitting Old Buildings",
      image: "/about2.jpg",
      path: "/blog/a-guide-to-retrofitting-old-buildings",
      date: "02 Jan",
    },
    {
      id: 3,
      title: "How to Plan for Future Expansions in Building Design",
      image: "/about3.jpg",
      path: "/blog/how-to-plan-for-future-expansions-in-building-design",
      date: "13 Dec",
    },
    {
      id: 4,
      title: "What is Value Engineering in Construction?",
      image: "/about4.jpg",
      path: "/blog/what-is-value-engineering-in-construction",
      date: "27 Dec",
    },
    {
      id: 5,
      title: "The Role of a General Contractor in Complex Projects",
      image: "/projects/meatmoot.jpg",
      path: "/blog/the-role-of-a-general-contractor-in-complex-projects",
      date: "04 Dec",
    },
    {
      id: 6,
      title: "The Importance of Geotechnical Studies in Construction",
      image: "/projects/villa.jpg",
      path: "/blog/the-importance-of-geotechnical-studies-in-construction",
      date: "09 Dec",
    },
    {
      id: 7,
      title: "Understanding the Lifecycle of a Construction Project",
      image: "/projects/warehouse.jpg",
      path: "/blog/understanding-the-lifecycle-of-a-construction-project",
      date: "20 Nov",
    },
    {
      id: 8,
      title: "The Role of Climate Adaptation in Modern Building Design",
      image: "/projects/residentalTower.jpg",
      path: "/blog/the-role-of-climate-adaptation-in-modern-building-design",
      date: "14 Nov",
    },
    {
      id: 9,
      title: "An Overview of Acoustics in Building Design",
      image: "/projects/residentalBuilding.jpg",
      path: "/blog/an-overview-of-acoustics-in-building-design",
      date: "26 Nov",
    },
    {
      id: 10,
      title: "Top Pre-Construction Services That Guarantee Project Success",
      image: "/projects/residentalbuildingg.jpg",
      path: "/blog/top-pre-construction-services-that-guarantee-project-success",
      date: "21 Nov",
    },
    {
      id: 11,
      title: "The Importance of Community Engagement in Construction Projects",
      image: "/projects/mkhm.jpg",
      path: "/blog/the-importance-of-community-engagement-in-construction-projects",
      date: "06 Oct",
    },
    {
      id: 12,
      title: "How to Design Flexible Workspaces",
      image: "/projects/p1.jpg",
      path: "/blog/how-to-design-flexible-workspaces",
      date: "10 Nov",
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(blogPosts.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogPosts.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-20 xl:px-20 px-0 bg-slate-100 pt-10">
      <section className="flex flex-col justify-center items-center gap-5 my-20 mx-5">
        <motion.h1
          variants={fadeIn("down", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="lg:text-3xl text-2xl xl:text-4xl"
        >
          Blog
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="lg:text-2xl text-xl xl:text-3xl mt-10"
        >
          Industry Insights & Innovations
        </motion.p>
        <motion.p
          variants={fadeIn("up", 1.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="lg:text-xl text-lg xl:text-2xl mt-10"
        >
          The blog explores the latest in construction, architecture, engineering, and interior design in Dubai and across the UAE. As one of the leading construction companies in Dubai, we share expert knowledge from our team of engineers, architects, interior designers, and property developers, offering valuable content that informs, educates, and inspires. Whether you&apos;re a client, investor, or design enthusiast, our blog explores the future of urban development, cutting-edge construction solutions, and the artistry behind building iconic structures. Stay connected with the region&apos;s top voices in elite construction and design — and discover how innovation continues to shape Dubai&apos;s skyline.
        </motion.p>
      </section>
      
      {/* Page indicator */}
      <div className="flex justify-center items-center mb-8">
        <p className="text-lg text-gray-600">
          Page {currentPage} of {totalPages} ({blogPosts.length} total blogs)
        </p>
      </div>

      <section className="grid cursor-pointer grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {currentBlogs.map((post) => (
          <Link key={post.id} href={post.path}>
            <motion.div
              variants={fadeIn("left", 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.4 }}
              className="group relative bg-gray-200 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[36rem] object-cover"
                layout="fill"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50">
                {/* Date at the top-left corner */}
                <div className="absolute top-2 left-2 bg-white bg-opacity-80 text-black text-sm px-3 py-1 rounded">
                  {post.date}
                </div>
                {/* Blog title overlay */}
                <div className="flex flex-col items-start justify-end transiton-all duration-300 ease-in-out hover:bg-offwhite  hover:bg-opacity-20  gap-5  text-center p-5 h-full">
                  <p className="text-white text-start text-xl  font-bold">
                    {post.title}
                  </p>
                  <p className="text-white transiton-all duration-300 ease-in-out  text-lg group-hover:text-black text-start py-4 font-bold border-t-2 border-b-2 w-full">
                    Continue reading
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </section>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 space-x-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
              currentPage === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                currentPage === index + 1
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
              currentPage === totalPages
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            Next
          </button>
        </div>
      )}

      <div className="flex justify-center align-center pt-20">
        <Link
          className="px-4 mb-5 z-20 xl:mt-0 text-center  py-2 text-3xl transiton-colors duration-300 ease-in-out text-black hover:text-black "
          href={"/blog"}
        >
          Visit Blog Page
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
