"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import VideoSection from "../components/VideoSection";
import ProjectCard from "../components/ProjectCard";
import { fetchAllProjects } from "../../lib/supabase-optimized";
import { stripHtmlTags } from "../utils/richText";

// Fallback static data
const staticProjects = [
  { id: 1, title: "Meat Moot City Walk", slug: "meatmoot-city-walk-restaurant-construction", project_type: "Commercial", location: "City Walk, Dubai", hero_image_url: "/projects/meatmoot.jpg", featured: true },
  { id: 2, title: "Tilal Al Ghaf Interior Design", slug: "tilal-al-ghaf-interior-luxury-residential-fitout", project_type: "Interior Fit-Out", location: "Tilal Al Ghaf, Dubai", hero_image_url: "/services/interiorFit/s8.jpg", featured: true },
  { id: 3, title: "Meat Moot Al Khawaneej", slug: "meatmoot-al-khawaneej-commercial-restaurant-development", project_type: "Commercial", location: "Al Khawaneej, Dubai", hero_image_url: "/projects/mkhm.jpg", featured: false },
  { id: 4, title: "Meat Moot JBR", slug: "meatmoot-jbr-beachfront-restaurant-construction-excellence", project_type: "Commercial", location: "JBR, Dubai", hero_image_url: "/projects/jbrm.jpg", featured: false },
  { id: 5, title: "Tilal Al Ghaf Landscape", slug: "tilal-al-ghaf-landscape-luxury-outdoor-living-construction", project_type: "Landscape", location: "Tilal Al Ghaf, Dubai", hero_image_url: "/projects/villa.jpg", featured: false },
  { id: 6, title: "Elite Villa Construction", slug: "elite-villa-construction-dubai-hills-luxury-development", project_type: "Residential", location: "Dubai Hills, Dubai", hero_image_url: "/projects/dh1.png", featured: true },
  { id: 7, title: "Jumeirah Villa Construction", slug: "jumeirah-villa-construction-prestigious-residential-development", project_type: "Residential", location: "Jumeirah, Dubai", hero_image_url: "/projects/jv1.png", featured: false },
  { id: 8, title: "Landscape and Exterior Construction Dubai", slug: "landscape-exterior-construction-dubai-premium-outdoor-development", project_type: "Landscape", location: "Various Locations, Dubai", hero_image_url: "/projects/hv1.png", featured: false },
];

const MIN_PROJECTS_FOR_FILTERS = 6;

const OurWorkLayout = ({ videoUrl = "" }) => {
  const [projects, setProjects] = useState(staticProjects);
  const [error, setError] = useState(null);
  const [activeType, setActiveType] = useState("All");
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error: queryError } = await fetchAllProjects();
      if (queryError) {
        console.warn("Error fetching projects:", queryError.message);
        setError("Unable to load latest projects. Showing cached data.");
      }
      if (data && data.length > 0) {
        setProjects(data);
      }
    } catch (err) {
      console.error("Projects fetch error:", err);
      setError("Connection error. Showing cached data.");
    }
  };

  const types = useMemo(() => {
    const set = new Set(projects.map((p) => p.project_type).filter(Boolean));
    return ["All", ...Array.from(set).sort()];
  }, [projects]);

  const showFilters = projects.length >= MIN_PROJECTS_FOR_FILTERS && types.length > 2;

  const filtered = useMemo(
    () => (activeType === "All" ? projects : projects.filter((p) => p.project_type === activeType)),
    [projects, activeType]
  );

  const featured = useMemo(() => projects.filter((p) => p.featured).slice(0, 5), [projects]);
  const current = featured[slide];

  const goTo = (index) => setSlide((index + featured.length) % featured.length);

  return (
    <div className="h-full w-full">
      {error && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-700 text-sm">{error}</p>
        </div>
      )}

      {/* Hero */}
      <div className="relative w-full h-[70vh] min-h-[400px] max-h-[700px] lg:max-h-[800px]">
        <div className="absolute inset-0">
          <Image src="/main.jpg" alt="Background Image" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center px-8 pt-24 xl:pt-28">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
            Our Construction Projects Across the UAE
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black mt-5">
            100+ Projects. 750,000+ sq ft Delivered
          </p>
          <p className="absolute bottom-10 left-10 text-white">
            Home <span className="text-black">/ Our Projects</span>
          </p>
        </div>
      </div>

      <section className="container mx-auto px-5 xl:px-20 pt-16">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Villas, commercial builds, restaurants, fit-outs and landscape works, each managed by our in-house team from mobilisation to handover.
        </p>
      </section>

      {/* Featured carousel — manual controls only */}
      {featured.length >= 3 && current && (
        <section className="container mx-auto px-5 xl:px-20 mt-14" aria-roledescription="carousel" aria-label="Featured projects">
          <div className="relative rounded-xl overflow-hidden bg-black">
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
              <Image
                key={current.id}
                src={current.hero_image_url || "/main.jpg"}
                alt={stripHtmlTags(current.title)}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                {current.project_type && (
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/80 mb-1">{current.project_type}</p>
                )}
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">{stripHtmlTags(current.title)}</h2>
                {current.location && <p className="text-sm md:text-base text-white/90 mt-1">{current.location}</p>}
              </div>
              <Link
                href={`/our-work/${current.slug}`}
                className="inline-flex w-fit items-center bg-white text-black px-5 py-2.5 rounded-md font-semibold hover:bg-offwhite transition-colors"
              >
                View project
              </Link>
            </div>

            <button
              type="button"
              onClick={() => goTo(slide - 1)}
              aria-label="Previous project"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center hover:bg-white"
            >
              &#8249;
            </button>
            <button
              type="button"
              onClick={() => goTo(slide + 1)}
              aria-label="Next project"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center hover:bg-white"
            >
              &#8250;
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {featured.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show project ${i + 1}`}
                aria-current={i === slide}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === slide ? "bg-black" : "bg-gray-300 hover:bg-gray-400"}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* Filters */}
      {showFilters && (
        <div className="container mx-auto px-5 xl:px-20 mt-14 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by type">
          {types.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setActiveType(type)}
              aria-pressed={activeType === type}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeType === type ? "bg-black text-white border-black" : "bg-white text-black border-gray-300 hover:border-black"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      )}

      {/* Full grid */}
      <section className="container mx-auto px-5 xl:px-20 mt-10 mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((project) => <ProjectCard key={project.id} project={project} headingLevel="h2" />)
        ) : (
          <p className="col-span-full text-center text-gray-600 py-10">No projects in this category yet.</p>
        )}
      </section>

      <section className="container mx-auto px-5 xl:px-20 pb-20 text-center">
        <p className="text-base md:text-lg text-gray-700">
          Planning something similar?{" "}
          <Link href="/contact-us" className="underline font-semibold text-black hover:text-gray-700">
            Discuss a project
          </Link>{" "}
          and we can share additional case studies and references.
        </p>
      </section>

      <VideoSection src={videoUrl} />
    </div>
  );
};

export default OurWorkLayout;
