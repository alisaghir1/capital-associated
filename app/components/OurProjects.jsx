"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { supabase } from "../../lib/supabase";

const OurProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback static data
  const staticProjects = [
    { id: 1, title: "Meat Moot", slug: "meatmoot", location: "City Walk, United Arab Emirates", hero_image_url: "/projects/meatmoot.jpg", featured: true, published: true, sort_order: 1 },
    { id: 2, title: "Tilal Al Ghaf Interior", slug: "Tilal-Al-Ghaf-Interior", location: "Dubai, United Arab Emirates", hero_image_url: "/services/interiorFit/s8.jpg", featured: true, published: true, sort_order: 2 },
    { id: 3, title: "Meat Moot Khawaneej", slug: "meatmoot-khawaneej", location: "Al Khawaneej, United Arab Emirates", hero_image_url: "/projects/mkhm.jpg", featured: true, published: true, sort_order: 3 },
    { id: 4, title: "Meat Moot JBR", slug: "meatmoot-jbr", location: "Jumeirah Beach Resort, United Arab Emirates", hero_image_url: "/projects/jbrm.jpg", featured: true, published: true, sort_order: 4 },
    { id: 5, title: "Tilal Al Ghaf Landscape", slug: "Tilal-Al-Ghaf-Landscape", location: "Dubai, United Arab Emirates", hero_image_url: "/projects/villa.jpg", featured: true, published: true, sort_order: 5 },
    { id: 6, title: "Elite Villa Construction", slug: "elite-villa-construction", location: "Dubai Hills, United Arab Emirates", hero_image_url: "/projects/dh1.png", featured: true, published: true, sort_order: 6 },
    { id: 7, title: "Jumeirah Villa Construction", slug: "Jumeirah-villa-construction", location: "Jumeirah, United Arab Emirates", hero_image_url: "/projects/jv1.png", featured: true, published: true, sort_order: 7 },
    { id: 8, title: "Landscape and Exterior Construction Dubai", slug: "Landscape-and-Exterior-Construction-Dubai", location: "Dubai, United Arab Emirates", hero_image_url: "/projects/hv1.png", featured: true, published: true, sort_order: 8 }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Start with fallback data immediately
        setProjects(staticProjects);
        setLoading(false);
        
        // Then try to fetch from Supabase with longer timeout
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Request timeout')), 15000) // 15 second timeout
        );

        const fetchPromise = supabase
          .from('projects')
          .select('id, title, slug, location, hero_image_url, featured, published, sort_order') // Only select needed fields
          .eq('featured', true)
          .eq('published', true)
          .order('sort_order', { ascending: true })
          .limit(8); // Show only 8 featured projects on home page

        const { data, error } = await Promise.race([fetchPromise, timeoutPromise]);

        if (error) {
          console.warn('Error fetching projects:', error);
          // Keep using static data - no need to update again
        } else if (data && data.length > 0) {
          // Only update if we get actual data from Supabase
          setProjects(data);
        }
        // If no data but no error, keep using static fallback
        
      } catch (error) {
        console.warn('Project fetch error:', error.message);
        // Static data already loaded, no need to handle error
      }
    };

    fetchProjects();
  }, []);

  // Get border radius class based on index
  const getBorderRadius = (index) => {
    const patterns = [
      'rounded-tl-full',
      'rounded-bl-full', 
      'rounded-tr-full',
      'rounded-tr-full',
      'rounded-tl-full',
      'rounded-br-full',
      'rounded-tl-full',
      'rounded-br-full'
    ];
    return patterns[index % patterns.length];
  };

  // Get item alignment based on index
  const getAlignment = (index) => {
    const alignments = [
      'items-end pb-4',
      'items-start pt-4',
      'items-end pb-4', 
      'items-end pb-4',
      'items-end pb-4',
      'items-start pt-4',
      'items-end pb-4',
      'items-start pt-4'
    ];
    return alignments[index % alignments.length];
  };
  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-5 my-20">
        <motion.h1
          variants={fadeIn("down", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="lg:text-3xl text-2xl xl:text-4xl"
        >
          Our Projects
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="lg:text-2xl text-xl xl:text-3xl"
        >
           Designing Landmarks. Defining Skylines

        </motion.p>
      </section>

      <motion.section
        variants={fadeIn("down", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 px-5 xl:mx-20 mb-20"
      >
        {loading ? (
          <div className="col-span-full text-center py-10">
            <p>Loading projects...</p>
          </div>
        ) : projects.length > 0 ? (
          projects.map((project, index) => (
            <Link key={project.id} href={`/our-work/${project.slug}`} className="block">
              <div 
                className={`relative bg-black flex transition-all duration-300 ease-in-out justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 ${getBorderRadius(index)} ${getAlignment(index)}`}
                style={{
                  backgroundImage: `url('${project.hero_image_url}')`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage = `url('${project.hero_image_url}')`;
                }}
              >
                <div className="text-white xl:p-3 rounded-lg w-full text-start">
                  <h2 className="xl:text-lg text-md mb-2 font-semibold">
                    {project.title}
                  </h2>
                  <p className="xl:text-sm text-xs">
                    {project.location}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p>No featured projects available.</p>
          </div>
        )}
      </motion.section>

      <div className="flex justify-center align-center mb-20">
        <Link
          className="px-4 mb-5 z-20 xl:mt-0 text-center py-2 text-3xl transition-colors duration-300 ease-in-out text-black hover:text-black border-b border-b-black"
          href="/our-work"
        >
          Visit Projects Page
        </Link>
      </div>
    </div>
  );
};

export default OurProjects;
