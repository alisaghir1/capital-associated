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
      image: "/about1.JPG",
      path: "/blog/1stBlog",
      date: "08 Jan",
    },
    {
      id: 2,
      title: "A Guide to Retrofitting Old Buildings",
      image: "/about2.jpg",
      path: "/blog/2ndBlog",
      date: "02 Jan",
    },
    {
      id: 3,
      title: "How to Plan for Future Expansions in Building Design",
      image: "/about3.jpg",
      path: "/blog/3rdBlog",
      date: "13 Dec",
    },
    {
      id: 4,
      title: "What is Value Engineering in Construction?",
      image: "/about4.jpg",
      path: "/blog/4thBlog",
      date: "27 Dec",
    },
    {
      id: 5,
      title: "The Role of a General Contractor in Complex Projects",
      image: "/projects/meatmoot.jpg",
      path: "/blog/5thBlog",
      date: "04 Dec",
    },
    {
      id: 6,
      title: "The Importance of Geotechnical Studies in Construction",
      image: "/projects/villa.jpg",
      path: "/blog/6thBlog",
      date: "09 Dec",
    },
    {
      id: 7,
      title: "Understanding the Lifecycle of a Construction Project",
      image: "/projects/warehouse.jpg",
      path: "/blog/7thBlog",
      date: "20 Nov",
    },
    {
      id: 8,
      title: "The Role of Climate Adaptation in Modern Building Design",
      image: "/projects/residentalTower.jpg",
      path: "/blog/8thBlog",
      date: "14 Nov",
    },
    {
      id: 9,
      title: "An Overview of Acoustics in Building Design",
      image: "/projects/residentalBuilding.jpg",
      path: "/blog/9thBlog",
      date: "26 Nov",
    },
    {
      id: 10,
      title: "Top Pre-Construction Services That Guarantee Project Success",
      image: "/projects/residentalbuildingg.jpg",
      path: "/blog/10thBlog",
      date: "21 Nov",
    },
    {
      id: 11,
      title: "The Importance of Community Engagement in Construction Projects",
      image: "/projects/residentalbuildinggg.jpg",
      path: "/blog/11thBlog",
      date: "06 Oct",
    },
    {
      id: 12,
      title: "How to Design Flexible Workspaces",
      image: "/projects/p1.jpg",
      path: "/blog/12thBlog",
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
          Our Blog
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="lg:text-2xl text-xl xl:text-3xl mt-10"
        >
          Words have the power to inspire, educate, and transform.
        </motion.p>
        <motion.p
          variants={fadeIn("up", 1.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="lg:text-xl text-lg xl:text-2xl mt-10"
        >
          Words have the power to inspire, educate, and transform. Our blog page
          is a space where ideas come to life, where we share our passion for
          creativity, innovation, and growth. We believe that through our words,
          we can make a positive impact on the world and create a better future
          for generations to come. Join us on this journey of discovery,
          learning, and inspiration, and let’s explore the endless possibilities
          of the human mind and spirit.
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
