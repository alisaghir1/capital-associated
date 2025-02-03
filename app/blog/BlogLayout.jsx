import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogLayout = () => {
  const blogPosts = [
    {
      id: 1,
      title: "HOW TO PLAN FOR FUTURE EXPANSIONS IN BUILDING DESIGN",
      image: "/about1.jpg",
      description:
        "Explore the transformative power of mindfulness in everyday life.",
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
    <div>
      <div className="relative w-full h-screen ">
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
            Insights & Stories
          </h1>
          <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
            Explore expert tips, latest updates, and inspiring stories from our
            journey.
          </p>
          <p className="absolute bottom-10 left-10 text-white">
            Home <span className="text-black">/ Blogs</span>
          </p>
        </div>
      </div>
      <div className="py-20 xl:px-20 px-0 bg-slate-100 pt-10">
        <section className="grid cursor-pointer grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {blogPosts.map((post) => (
            <div
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
                  <p className="text-white text-start text-xl group-hover:text-black font-bold">
                    {post.title}
                  </p>
                  <p className="text-white  text-lg group-hover:text-black text-start py-4 font-bold border-t-2 border-b-2 w-full">
                    Continue reading
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default BlogLayout;
