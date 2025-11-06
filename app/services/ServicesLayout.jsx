"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import VidioComponent from "../components/VidioComponent";
import { supabase } from "../../lib/supabase";

const ServicesLayout = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      // Add timeout protection
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      );

      // Only select fields needed for the services listing page
      const fetchPromise = supabase
        .from('services')
        .select('id, title, slug, hero_image_url, short_description, published, sort_order')
        .eq('published', true)
        .order('sort_order', { ascending: true }); // Use sort_order for better organization

      const { data, error } = await Promise.race([fetchPromise, timeoutPromise]);

      if (error) {
        console.error('Error fetching services:', error);
      } else {
        setServices(data || []);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      setServices([]); // Clear services on error
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading services...</div>
      </div>
    );
  }

  return (
    <div>
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
                        {service.title}
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
                        {service.title}
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
                        {service.title}
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
                        {service.title}
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
