import Image from "next/image";
import React from "react";
import Link from "next/link";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const Blogs = () => {
  const blogPosts = [
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
      <section className="grid cursor-pointer grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {blogPosts.map((post) => (
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
