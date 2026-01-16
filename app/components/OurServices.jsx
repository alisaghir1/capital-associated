"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { supabase, fetchServicesOptimized } from "../../lib/supabase-optimized";
import { stripHtmlTags } from "../utils/richText";

const OurServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Start with fallback data immediately
        setServices(staticServices);
        setLoading(false);
        
        // Then try to fetch from Supabase with optimized query
        const { data, error } = await fetchServicesOptimized();

        if (error) {
          console.warn('Error fetching services:', error);
          // Keep using static data - no need to update again
        } else if (data && data.length > 0) {
          // Only update if we get actual data from Supabase
          setServices(data);
        }
        // If no data but no error, keep using static fallback
        
      } catch (error) {
        console.warn('Services fetch error:', error.message);
        // Static data already loaded, no need to handle error
      }
    };

    fetchServices();
  }, []);

  // ServiceCard component to render dynamic service data
  const ServiceCard = ({ service, index }) => {
    const isFirstRow = index < 3;
    const isSecondRow = index >= 3 && index < 6;
    const isThirdRow = index >= 6 && index < 9;

    // Different layout configurations based on row
    let topLeftClass, topRightClass, bottomLeftClass, bottomRightClass;
    
    if (isFirstRow) {
      topLeftClass = "bg-transparent transition-all duration-500 ease-in-out text-center flex justify-center items-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer";
      topRightClass = "bg-black border transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
      bottomLeftClass = "bg-black rounded-es-full transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
      bottomRightClass = "bg-black rounded-ee-full transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
    } else if (isSecondRow) {
      topLeftClass = "bg-black rounded-ss-full flex justify-center text-center items-center border transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
      topRightClass = "bg-black rounded-se-full transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
      bottomLeftClass = "bg-transparent border border-black flex justify-center items-center text-center group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-500 ease-in-out";
      bottomRightClass = "bg-black transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
    } else {
      topLeftClass = "bg-black rounded-ss-full flex justify-center text-center items-center border transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
      topRightClass = "bg-black rounded-se-full transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
      bottomLeftClass = "bg-black transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
      bottomRightClass = "bg-transparent flex justify-center items-center text-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-500 ease-in-out";
    }

    return (
      <Link href={`/services/${service.slug}`}>
        <div className="relative group h-[20rem] w-full gap-1">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
            {/* Top-left part */}
            <div
              className={topLeftClass}
              style={{
                backgroundImage: !isFirstRow && service.hero_image_url ? `url('${service.hero_image_url}')` : undefined,
                backgroundSize: "200% 200%",
                backgroundPosition: "0% 0%",
                backgroundRepeat: "no-repeat",
                transition: "all 0.5s ease-in-out",
              }}
            >
              {isFirstRow && stripHtmlTags(service.title)}
            </div>
            {/* Top-right part */}
            <div
              className={topRightClass}
              style={{
                backgroundImage: service.hero_image_url ? `url('${service.hero_image_url}')` : undefined,
                backgroundSize: "200% 200%",
                backgroundPosition: "100% 0%",
                backgroundRepeat: "no-repeat",
                transition: "all 0.5s ease-in-out",
              }}
            ></div>
            {/* Bottom-left part */}
            <div
              className={bottomLeftClass}
              style={{
                backgroundImage: !isSecondRow && service.hero_image_url ? `url('${service.hero_image_url}')` : undefined,
                backgroundSize: "200% 200%",
                backgroundPosition: "0% 100%",
                backgroundRepeat: "no-repeat",
                transition: "all 0.5s ease-in-out",
              }}
            >
              {isSecondRow && stripHtmlTags(service.title)}
            </div>
            {/* Bottom-right part */}
            <div
              className={bottomRightClass}
              style={{
                backgroundImage: !isThirdRow && service.hero_image_url ? `url('${service.hero_image_url}')` : undefined,
                backgroundSize: "200% 200%",
                backgroundPosition: "100% 100%",
                backgroundRepeat: "no-repeat",
                transition: "all 0.5s ease-in-out",
              }}
            >
              {isThirdRow && stripHtmlTags(service.title)}
            </div>
          </div>
        </div>
      </Link>
    );
  };
  return (
    <div className="bg-offwhite pb-10">
      <section className="flex flex-col justify-center items-center gap-5 py-20">
        <motion.h1
          variants={fadeIn("down", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="lg:text-3xl text-2xl xl:text-4xl"
        >
          Our Services
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="lg:text-2xl text-xl xl:text-3xl"
        >
          Leading Dubai&apos;s Property Evolution
        </motion.p>
      </section>

      {loading ? (
        <div className="container mx-auto text-center py-20">
          <p>Loading services...</p>
        </div>
      ) : services.length === 0 ? (
        <div className="container mx-auto text-center py-20">
          <p>No services available.</p>
        </div>
      ) : (
        <>
          {/* First Row - services 0-2 */}
          <motion.section
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 pb-10 border-b border-b-black"
          >
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.section>

          {/* Second Row - services 3-5 */}
          {services.length > 3 && (
            <motion.section
              variants={fadeIn("up", 1.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.4 }}
              className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 py-10 border-b border-b-black"
            >
              {services.slice(3, 6).map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index + 3} />
              ))}
            </motion.section>
          )}

          {/* Third Row - services 6-8 */}
          {services.length > 6 && (
            <motion.section
              variants={fadeIn("up", 1.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.4 }}
              className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 py-10 border-b border-b-black"
            >
              {services.slice(6, 9).map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index + 6} />
              ))}
            </motion.section>
          )}
        </>
      )}
    </div>
  );
};

export default OurServices;
