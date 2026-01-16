"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { fetchAllBlogs } from "../../lib/supabase-optimized";
import { stripHtmlTags } from "../../utils/richText";

// Static fallback data
const staticBlogPosts = [
  { id: 40, title: "Top Interior Design Hacks for a Spacious Feel", slug: "top-interior-design-hacks-for-a-spacious-feel", hero_image_url: "/blogs/top-interior-design-hacks-for-a-spacious-feel/1.jpg", excerpt: "Discover design tips to make your space feel larger", created_at: "2024-09-02" },
  { id: 39, title: "Using Decorative Stonework in Villa Gardens", slug: "using-decorative-stonework-in-villa-gardens-for-a-luxurious-touch", hero_image_url: "/blogs/using-decorative-stonework-in-villa-gardens-for-a-luxurious-touch/1.jpg", excerpt: "Add a luxurious touch to your villa garden", created_at: "2024-09-02" },
  { id: 38, title: "Effective Moisture Control in Luxury Villas", slug: "effective-moisture-control-in-the-design-of-luxury-villas-by-the-sea", hero_image_url: "/blogs/effective-moisture-control-in-the-design-of-luxury-villas-by-the-sea/1.jpg", excerpt: "Essential tips for seaside villa construction", created_at: "2024-09-02" },
  { id: 37, title: "Urban Heat Island Effect on Design-Build", slug: "the-role-of-urban-heat-island-effect-on-design-build-practices-in-city-centers", hero_image_url: "/blogs/the-role-of-urban-heat-island-effect-on-design-build-practices-in-city-centers/1.jpg", excerpt: "Understanding urban heat challenges", created_at: "2024-09-02" },
  { id: 36, title: "Noise Pollution Mitigation in Residential Projects", slug: "noise-pollution-mitigation-in-high-density-residential-fit-out-projects", hero_image_url: "/blogs/noise-pollution-mitigation-in-high-density-residential-fit-out-projects/1.jpg", excerpt: "Solutions for quieter living spaces", created_at: "2024-09-02" },
  { id: 35, title: "Advanced Project Management Techniques", slug: "advanced-project-management-techniques-for-high-profile-construction-projects", hero_image_url: "/blogs/advanced-project-management-techniques-for-high-profile-construction-projects/1.jpg", excerpt: "Expert techniques for managing complex projects", created_at: "2024-09-02" },
];

const BlogLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState(staticBlogPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error: queryError } = await fetchAllBlogs();

        if (queryError) {
          console.warn('Error fetching blogs:', queryError.message);
          setError('Unable to load latest blogs. Showing cached data.');
        }
        
        if (data && data.length > 0) {
          setBlogPosts(data);
        }
      } catch (err) {
        console.error('Blogs fetch error:', err);
        setError('Connection error. Showing cached data.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Calculate pagination for dynamic data
  const totalPages = Math.ceil(blogPosts.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogPosts.slice(startIndex, endIndex);

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short' };
    return date.toLocaleDateString('en-GB', options);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading && blogPosts.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-black mx-auto mb-4"></div>
          <p className="text-xl">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {error && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-700 text-sm">{error}</p>
        </div>
      )}
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
          <motion.h1
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold"
          >
            Insights & Stories
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 1.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5"
          >
            Explore expert tips, latest updates, and inspiring stories from our
            journey.
          </motion.p>
          <p className="absolute bottom-10 left-10 text-white">
            Home <span className="text-black">/ Blogs</span>
          </p>
        </div>
      </div>
      <div className="py-20 xl:px-20 px-0 bg-slate-100 pt-10">
        {/* Page indicator */}
        <div className="flex justify-center items-center mb-8">
          <p className="text-lg text-gray-600">
            Page {currentPage} of {totalPages} ({blogPosts.length} total blogs)
          </p>
        </div>

        <section className="grid cursor-pointer grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {currentBlogs.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <motion.div
                variants={fadeIn("left", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.4 }}
                className="group relative bg-gray-200 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={post.hero_image_url || '/main.jpg'}
                  alt={stripHtmlTags(post.title)}
                  className="w-full h-[36rem] object-cover"
                  layout="fill"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50">
                  {/* Date at the top-left corner */}
                  <div className="absolute top-2 left-2 bg-white bg-opacity-80 text-black text-sm px-3 py-1 rounded">
                    {formatDate(post.created_at)}
                  </div>
                  {/* Blog title overlay */}
                  <div className="flex flex-col items-start justify-end transiton-all duration-300 ease-in-out hover:bg-offwhite  hover:bg-opacity-20  gap-5  text-center p-5 h-full">
                    <p className="text-white text-start text-xl  font-bold">
                      {stripHtmlTags(post.title)}
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
      </div>
    </div>
  );
};

export default BlogLayout;
