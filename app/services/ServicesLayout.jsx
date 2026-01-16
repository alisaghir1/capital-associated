"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import VidioComponent from "../components/VidioComponent";
import { fetchAllServices } from "../../lib/supabase-optimized";
import { stripHtmlTags } from "../../utils/richText";

// Fallback static data
const staticServices = [
  { id: 1, title: "General Contracting", slug: "general-contracting", hero_image_url: "/services/s1.jpg", published: true, sort_order: 1 },
  { id: 2, title: "Construction Management", slug: "construction-management", hero_image_url: "/services/s2.jpg", published: true, sort_order: 2 },
  { id: 3, title: "Design Build", slug: "design-build", hero_image_url: "/services/s3.jpg", published: true, sort_order: 3 },
  { id: 4, title: "Renovation & Remodeling", slug: "renovation-and-remodeling", hero_image_url: "/services/s4.jpg", published: true, sort_order: 4 },
  { id: 5, title: "Pre-Construction Services", slug: "pre-construction-services", hero_image_url: "/services/s5.jpg", published: true, sort_order: 5 },
  { id: 6, title: "Value Engineering", slug: "value-engineering", hero_image_url: "/services/s6.jpg", published: true, sort_order: 6 },
  { id: 7, title: "Green Building Solutions", slug: "green-building-solutions", hero_image_url: "/services/s7.jpg", published: true, sort_order: 7 },
  { id: 8, title: "Specialty Construction", slug: "specialty-construction", hero_image_url: "/services/s8.jpg", published: true, sort_order: 8 },
  { id: 9, title: "Interior Fit-Out", slug: "interior-fit-out", hero_image_url: "/services/s9.jpg", published: true, sort_order: 9 }
];

const ServicesLayout = () => {
  const [services, setServices] = useState(staticServices); // Start with fallback
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data, error: queryError } = await fetchAllServices();

      if (queryError) {
        console.warn('Error fetching services:', queryError.message);
        setError('Unable to load latest services. Showing cached data.');
      }
      
      if (data && data.length > 0) {
        setServices(data);
      }
    } catch (err) {
      console.error('Services fetch error:', err);
      setError('Connection error. Showing cached data.');
    } finally {
      setLoading(false);
    }
  };

  if (loading && services.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-black mx-auto mb-4"></div>
          <p className="text-xl">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {error && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="text-yellow-700 text-sm">{error}</p>
        </div>
      )}
      {" "}
      <div className="relative z-0 w-full h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/main.jpg"
            alt="Background Image"
            layout="fill" // This will make the image cover the entire screen
            objectFit="cover" // Ensures the image maintains its aspect ratio while filling the screen
            priority
          />
        </div>

        {/* Content on top of the image */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
          <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
            Our Services
          </h1>
          <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
            Strong Foundations, Exceptional Results
          </p>
          <p className="absolute  bottom-10 left-10 text-white">
            Home <span className="text-black">/ Our Services</span>
          </p>
        </div>
      </div>
      <section className="container z-50 mt-20 mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 pb-10 border-b border-b-black">
        {services.map((service, index) => {
          // Helper function to get layout variation based on index
          const getLayoutVariation = (index) => {
            const variations = [
              // First row variations (0-2)
              { titlePosition: 'top-left', roundedCorners: ['bottom-left', 'bottom-right'] },
              { titlePosition: 'top-left', roundedCorners: ['bottom-left', 'bottom-right'] },
              { titlePosition: 'top-left', roundedCorners: ['bottom-left', 'bottom-right'] },
              // Second row variations (3-5)
              { titlePosition: 'bottom-left', roundedCorners: ['top-left', 'top-right'] },
              { titlePosition: 'bottom-left', roundedCorners: ['top-left', 'top-right'] },
              { titlePosition: 'bottom-left', roundedCorners: ['top-left', 'top-right'] },
              // Third row variations (6-8)
              { titlePosition: 'bottom-right', roundedCorners: ['top-left', 'top-right'] },
              { titlePosition: 'bottom-right', roundedCorners: ['top-left', 'top-right'] },
              { titlePosition: 'bottom-right', roundedCorners: ['top-left', 'top-right'] },
            ];
            return variations[index % variations.length];
          };

          const layout = getLayoutVariation(index);
          const serviceImage = service.hero_image_url || `/services/s${index + 1}.jpg`;
          
          return (
            <Link key={service.id} href={`/services/${service.slug}`}>
              <div className="relative z-50 group h-[20rem] w-full gap-1">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
                  {/* Top-left part */}
                  <div
                    className={`${
                      layout.titlePosition === 'top-left'
                        ? 'bg-transparent border border-black group-hover:bg-black group-hover:text-white text-center flex justify-center items-center'
                        : `bg-black transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 ${
                            layout.roundedCorners.includes('top-left') ? 'rounded-ss-full' : ''
                          }`
                    } cursor-pointer transition-all duration-500 ease-in-out`}
                    style={
                      layout.titlePosition === 'top-left'
                        ? {
                            backgroundSize: "200% 200%",
                            backgroundPosition: "0% 0%",
                          }
                        : {
                            backgroundImage: `url('${serviceImage}')`,
                            backgroundSize: "200% 200%",
                            backgroundPosition: "0% 0%",
                            backgroundRepeat: "no-repeat",
                            transition: "all 0.5s ease-in-out",
                          }
                    }
                  >
                    {layout.titlePosition === 'top-left' && (
                      <span className="text-sm font-semibold px-2 text-center">
                        {stripHtmlTags(service.title)}
                      </span>
                    )}
                  </div>

                  {/* Top-right part */}
                  <div
                    className={`${
                      layout.titlePosition === 'top-right'
                        ? 'bg-transparent border border-black group-hover:bg-black group-hover:text-white text-center flex justify-center items-center'
                        : `bg-black transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 ${
                            layout.roundedCorners.includes('top-right') ? 'rounded-se-full' : ''
                          }`
                    } cursor-pointer transition-all duration-500 ease-in-out`}
                    style={
                      layout.titlePosition === 'top-right'
                        ? {
                            backgroundSize: "200% 200%",
                            backgroundPosition: "100% 0%",
                          }
                        : {
                            backgroundImage: `url('${serviceImage}')`,
                            backgroundSize: "200% 200%",
                            backgroundPosition: "100% 0%",
                            backgroundRepeat: "no-repeat",
                            transition: "all 0.5s ease-in-out",
                          }
                    }
                  >
                    {layout.titlePosition === 'top-right' && (
                      <span className="text-sm font-semibold px-2 text-center">
                        {stripHtmlTags(service.title)}
                      </span>
                    )}
                  </div>

                  {/* Bottom-left part */}
                  <div
                    className={`${
                      layout.titlePosition === 'bottom-left'
                        ? 'bg-transparent border border-black group-hover:bg-black group-hover:text-white text-center flex justify-center items-center'
                        : `bg-black transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 ${
                            layout.roundedCorners.includes('bottom-left') ? 'rounded-es-full' : ''
                          }`
                    } cursor-pointer transition-all duration-500 ease-in-out`}
                    style={
                      layout.titlePosition === 'bottom-left'
                        ? {
                            backgroundSize: "200% 200%",
                            backgroundPosition: "0% 100%",
                          }
                        : {
                            backgroundImage: `url('${serviceImage}')`,
                            backgroundSize: "200% 200%",
                            backgroundPosition: "0% 100%",
                            backgroundRepeat: "no-repeat",
                            transition: "all 0.5s ease-in-out",
                          }
                    }
                  >
                    {layout.titlePosition === 'bottom-left' && (
                      <span className="text-sm font-semibold px-2 text-center">
                        {stripHtmlTags(service.title)}
                      </span>
                    )}
                  </div>

                  {/* Bottom-right part */}
                  <div
                    className={`${
                      layout.titlePosition === 'bottom-right'
                        ? 'bg-transparent border border-black group-hover:bg-black group-hover:text-white text-center flex justify-center items-center'
                        : `bg-black transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 ${
                            layout.roundedCorners.includes('bottom-right') ? 'rounded-ee-full' : ''
                          }`
                    } cursor-pointer transition-all duration-500 ease-in-out`}
                    style={
                      layout.titlePosition === 'bottom-right'
                        ? {
                            backgroundSize: "200% 200%",
                            backgroundPosition: "100% 100%",
                          }
                        : {
                            backgroundImage: `url('${serviceImage}')`,
                            backgroundSize: "200% 200%",
                            backgroundPosition: "100% 100%",
                            backgroundRepeat: "no-repeat",
                            transition: "all 0.5s ease-in-out",
                          }
                    }
                  >
                    {layout.titlePosition === 'bottom-right' && (
                      <span className="text-sm font-semibold px-2 text-center">
                        {stripHtmlTags(service.title)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
      <section className="container mx-auto px-10 py-10 text-center">
        <p className="mb-5">
        At Capital Associated Building Contracting, we deliver high-quality construction solutions in Dubai and across the UAE, offering a comprehensive range of services tailored to residential, commercial, and industrial developments. With years of industry expertise, we bring precision, innovation, and professionalism to every project—regardless of scale or complexity
        </p>
        <h3 className="my-5">Our Services Include:</h3>
        <p className="mb-5">
        <strong>Design & Build</strong> We offer end-to-end design-build solutions, managing every stage from concept to completion to provide a seamless, efficient building process.

        </p>
        <p className="mb-5">
          Renovations and Fit-Outs: Our team is skilled in transforming existing
          spaces, adding value and modernizing structures to meet the evolving
          needs of our clients.
        </p>
        <p className="mb-5">
        <strong>Construction Management</strong> Our team oversees every phase—from budgeting and scheduling to quality control—ensuring your project stays on track, on time, and within budget.

        </p>
        <p className="mb-5">
        <strong>Renovation & Fit-Out</strong> We specialize in modernizing existing spaces through expert renovation and interior fit-out services, adding value while enhancing form and function.

        </p>
        <p className="mb-5">
        <strong>Project Consultancy</strong> Our consultants provide strategic guidance on design optimization, material selection, risk management, and timeline planning—ensuring informed decisions at every step.
        </p>
        <p className="mb-5">
       <strong> Sustainability Solutions</strong> We integrate green building practices and energy-efficient technologies to reduce environmental impact while maintaining superior construction quality.
        </p>
      </section>
      <VidioComponent />
    </div>
  );
};

export default ServicesLayout;
