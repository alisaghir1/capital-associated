"use client";
import React from "react";
import Link from "next/link";
import AnimatedWrapper from "./AnimatedWrapper";
import { stripHtmlTags } from "../utils/richText";

const Blogs = ({ blogs = [] }) => {
  return (
    <div className="py-20 xl:px-20 px-0 bg-slate-100 pt-10">
      <section className="flex flex-col justify-center items-center gap-5 my-20 mx-5">
        <AnimatedWrapper direction="down" duration={0.8}>
          <h2 className="text-2xl md:text-3xl xl:text-4xl">Blog</h2>
        </AnimatedWrapper>
        <AnimatedWrapper direction="up" duration={1}>
          <p className="text-lg md:text-xl xl:text-2xl mt-10">
            Industry Insights &amp; Innovations
          </p>
        </AnimatedWrapper>
        <AnimatedWrapper direction="up" duration={1.2}>
          <p className="text-base md:text-lg xl:text-xl mt-10">
            The blog explores the latest in construction, architecture, engineering, and interior design in Dubai and across the UAE. As one of the leading construction companies in Dubai, we share expert knowledge from our team of engineers, architects, interior designers, and property developers, offering valuable content that informs, educates, and inspires. Whether you&apos;re a client, investor, or design enthusiast, our blog explores the future of urban development, cutting-edge construction solutions, and the artistry behind building iconic structures. Stay connected with the region&apos;s top voices in elite construction and design — and discover how innovation continues to shape Dubai&apos;s skyline.
          </p>
        </AnimatedWrapper>
      </section>

      <section className="grid cursor-pointer grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {blogs.length > 0 ? (
          blogs.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <AnimatedWrapper direction="left" duration={1}>
                <article className="group relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={post.hero_image_url}
                    alt={stripHtmlTags(post.title)}
                    className="w-full h-[36rem] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50">
                    <div className="absolute top-2 left-2 bg-white bg-opacity-80 text-black text-sm px-3 py-1 rounded">
                      {new Date(post.created_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}
                    </div>
                    <div className="flex flex-col items-start justify-end transiton-all duration-300 ease-in-out hover:bg-offwhite hover:bg-opacity-20 gap-5 text-center p-5 h-full">
                      <p className="text-white text-start text-xl font-bold">
                        {stripHtmlTags(post.title)}
                      </p>
                      <p className="text-white transiton-all duration-300 ease-in-out text-lg group-hover:text-black text-start py-4 font-bold border-t-2 border-b-2 w-full">
                        Continue reading
                      </p>
                    </div>
                  </div>
                </article>
              </AnimatedWrapper>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p>No blogs available.</p>
          </div>
        )}
      </section>

      {blogs.length > 0 && (
        <div className="flex justify-center items-center mt-12">
          <Link
            href="/blog"
            className="px-4 mb-5 z-20 text-center py-2 text-xl md:text-2xl transition-colors duration-300 ease-in-out text-black hover:text-black border-b border-b-black"
          >
            View All Blogs
          </Link>
        </div>
      )}
    </div>
  );
};

export default Blogs;
