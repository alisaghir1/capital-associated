"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import VidioComponent from "../components/VidioComponent";
import { supabase } from "../../lib/supabase";

const OurWorkLayout = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      // Add timeout protection
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      );

      // Only select fields needed for the projects listing page
      const fetchPromise = supabase
        .from('projects')
        .select('id, title, slug, hero_image_url, short_description, location, client_name, published, sort_order')
        .eq('published', true)
        .order('sort_order', { ascending: true }); // Use sort_order for better organization

      const { data, error } = await Promise.race([fetchPromise, timeoutPromise]);

      if (error) {
        console.error('Error fetching projects:', error);
      } else {
        setProjects(data || []);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects([]); // Clear projects on error
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading projects...</div>
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/main.jpg"
            alt="Background Image"
            layout="fill" // This will make the image cover the entire screen
            objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
          />
        </div>

        {/* Content on top of the image */}
        <div className="relative z-10  flex flex-col justify-center items-center w-full h-full">
          <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
            Our Projects
          </h1>
          <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
          Designing Landmarks. Defining Skylines
          </p>
          <p className="absolute bottom-10 left-10 text-white">
            Home <span className="text-black">/ Our Projects</span>
          </p>
        </div>
      </div>
      <div>
        <section className="grid grid-cols-2 mt-20 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 px-5 xl:mx-20 mb-20">
          {projects.map((project, index) => {
            // Helper function to get layout variation based on index
            const getLayoutVariation = (index) => {
              const variations = [
                { position: 'bottom', alignment: 'items-end', rounded: 'rounded-tl-full' },
                { position: 'top', alignment: 'items-start', rounded: 'rounded-bl-full' },
                { position: 'bottom', alignment: 'items-end', rounded: 'rounded-tr-full' },
                { position: 'bottom', alignment: 'items-end', rounded: 'rounded-tr-full' },
                { position: 'bottom', alignment: 'items-end', rounded: 'rounded-tl-full' },
                { position: 'top', alignment: 'items-start', rounded: 'rounded-br-full' },
                { position: 'bottom', alignment: 'items-end', rounded: 'rounded-tl-full' },
                { position: 'top', alignment: 'items-start', rounded: 'rounded-br-full' },
              ];
              return variations[index % variations.length];
            };

            const layout = getLayoutVariation(index);
            const projectImage = project.hero_image_url || `/projects/default-${index + 1}.jpg`;
            
            return (
              <Link key={project.id} href={`/our-work/${project.slug}`} className="block">
                <div 
                  className={`relative bg-black flex transition-all duration-300 ease-in-out ${layout.position === 'top' ? 'pt-4' : 'pb-4'} ${layout.alignment} justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 ${layout.rounded}`}
                  style={{
                    backgroundImage: `url('${projectImage}')`,
                    ':hover': {
                      backgroundImage: `url('${projectImage}')`,
                    }
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundImage = `url('${projectImage}')`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundImage = 'none';
                    e.target.className = e.target.className.replace(' hover:bg-[url(', ' ').replace(')]', '');
                  }}
                >
                  <div className="text-white xl:p-3 rounded-lg w-full text-start">
                    <h2 className="xl:text-lg text-md mb-2 font-semibold">
                      {project.title}
                    </h2>
                    <p className="xl:text-sm text-xs">
                      {project.location || 'United Arab Emirates'}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      </div>
      <VidioComponent />
    </div>
  );
};

export default OurWorkLayout;
