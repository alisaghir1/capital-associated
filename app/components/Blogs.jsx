import Image from "next/image";
import React from "react";
import Link from "next/link";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "HOW TO PLAN FOR FUTURE EXPANSIONS IN BUILDING DESIGN",
      image: "/about1.jpg",
      description: "Explore the transformative power of mindfulness in everyday life.",
      date: "29 Dec",
    },
    {
      id: 2,
      title: "HOW TO PLAN FOR FUTURE EXPANSIONS IN BUILDING DESIGN",
      image: "/about2.jpg",
      description: "How innovation drives change and shapes our future.",
      date: "28 Dec",
    },
    {
      id: 3,
      title: "THE IMPORTANCE OF GEOTECHNICAL STUDIES IN CONSTRUCTION",
      image: "/about3.jpg",
      description: "Creating designs that inspire and make a difference.",
      date: "27 Dec",
    },
    {
      id: 4,
      title: "TOP PRE-CONSTRUCTION SERVICES THAT GUARANTEE PROJECT SUCCESS",
      image: "/about4.jpg",
      description: "A glimpse into the cutting-edge trends shaping tomorrow.",
      date: "26 Dec",
    },
    {
      id: 5,
      title: "HOW TO DESIGN FLEXIBLE WORKSPACES",
      image: "/about1.jpg",
      description: "How community engagement fosters growth and unity.",
      date: "25 Dec",
    },
    {
      id: 6,
      title: "THE ROLE OF CLIMATE ADAPTATION IN MODERN BUILDING DESIGN",
      image: "/about2.jpg",
      description: "How curiosity can lead to unexpected adventures.",
      date: "24 Dec",
    },
  ];

  return (
    <div className="py-20 xl:px-20 px-0 bg-slate-100 pt-10">
      <section className="flex flex-col justify-center items-center gap-5 my-20 mx-5">
        <motion.h1
                  variants={fadeIn("down", 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                   className="lg:text-3xl text-2xl xl:text-4xl">Our Blog</motion.h1>
        <motion.p
                  variants={fadeIn("up", 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
         className="lg:text-2xl text-xl xl:text-3xl mt-10">
          Words have the power to inspire, educate, and transform.
        </motion.p>
        <motion.p
                      variants={fadeIn("up", 1.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.4 }} 
        className="lg:text-xl text-lg xl:text-2xl mt-10">
          Words have the power to inspire, educate, and transform. Our blog page is a space where ideas come to life, where we share our
          passion for creativity, innovation, and growth. We believe that through our words, we can make a positive impact on the world and
          create a better future for generations to come. Join us on this journey of discovery, learning, and inspiration, and let’s explore the
          endless possibilities of the human mind and spirit.
        </motion.p>
      </section>
      <section className="grid cursor-pointer grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {blogPosts.map((post) => (
          <motion.div
          variants={fadeIn("left", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
            key={post.id}
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
              <div className="flex flex-col items-start justify-end transiton-all duration-200 ease-in-out hover:bg-offwhite  hover:text-black hover:bg-opacity-20  gap-5  text-center p-5 h-full">
                <p className="text-white text-start text-xl group-hover:text-black font-bold">{post.title}</p>
                <p className="text-white  text-lg group-hover:text-black text-start py-4 font-bold border-t-2 border-b-2 w-full">
                Continue reading
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
      <div className="flex justify-center align-center pt-20">
        <Link
          className="px-4 mb-5 z-20 xl:mt-0 text-center  py-2 text-3xl transiton-colors duration-300 ease-in-out text-gray-600 hover:text-black "
          href={"/blogs"}
        >
         Visit Blog Page
        </Link>
      </div>

    </div>
  );
};

export default Blogs;
