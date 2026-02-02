"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import VidioComponent from "../components/VidioComponent";
import { fetchAllProjects } from "../../lib/supabase-optimized";
import { stripHtmlTags } from "../utils/richText";

// Fallback static data
const staticProjects = [
  { id: 1, title: "Meat Moot", slug: "meatmoot", location: "City Walk, United Arab Emirates", hero_image_url: "/projects/meatmoot.jpg", published: true, sort_order: 1 },
  { id: 2, title: "Tilal Al Ghaf Interior", slug: "Tilal-Al-Ghaf-Interior", location: "Dubai, United Arab Emirates", hero_image_url: "/services/interiorFit/s8.jpg", published: true, sort_order: 2 },
  { id: 3, title: "Meat Moot Khawaneej", slug: "meatmoot-khawaneej", location: "Al Khawaneej, United Arab Emirates", hero_image_url: "/projects/mkhm.jpg", published: true, sort_order: 3 },
  { id: 4, title: "Meat Moot JBR", slug: "meatmoot-jbr", location: "Jumeirah Beach Resort, United Arab Emirates", hero_image_url: "/projects/jbrm.jpg", published: true, sort_order: 4 },
  { id: 5, title: "Tilal Al Ghaf Landscape", slug: "Tilal-Al-Ghaf-Landscape", location: "Dubai, United Arab Emirates", hero_image_url: "/projects/villa.jpg", published: true, sort_order: 5 },
  { id: 6, title: "Elite Villa Construction", slug: "elite-villa-construction", location: "Dubai Hills, United Arab Emirates", hero_image_url: "/projects/dh1.png", published: true, sort_order: 6 },
  { id: 7, title: "Jumeirah Villa Construction", slug: "Jumeirah-villa-construction", location: "Jumeirah, United Arab Emirates", hero_image_url: "/projects/jv1.png", published: true, sort_order: 7 },
  { id: 8, title: "Landscape and Exterior Construction Dubai", slug: "Landscape-and-Exterior-Construction-Dubai", location: "Dubai, United Arab Emirates", hero_image_url: "/projects/hv1.png", published: true, sort_order: 8 }
];

const OurWorkLayout = () => {
  const [projects, setProjects] = useState(staticProjects); // Start with fallback
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error: queryError } = await fetchAllProjects();

      if (queryError) {
        console.warn('Error fetching projects:', queryError.message);
        setError('Unable to load latest projects. Showing cached data.');
      }
      
      if (data && data.length > 0) {
        setProjects(data);
      }
    } catch (err) {
      console.error('Projects fetch error:', err);
      setError('Connection error. Showing cached data.');
    }
  };

  return (
    <div className="h-full w-full">
      {error && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-700 text-sm">{error}</p>
        </div>
      )}
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
                      {stripHtmlTags(project.title)}
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
