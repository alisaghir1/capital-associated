'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { supabase, queryWithRetry } from '../../../lib/supabase';
import { stripHtmlTags } from '../../../utils/richText';

const ProjectPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data, error: queryError } = await queryWithRetry(
          () => supabase
            .from('projects')
            .select('*')
            .eq('slug', slug)
            .eq('published', true)
            .single(),
          { timeoutMs: 15000, retries: 3 }
        );

        if (queryError) {
          console.warn('Project fetch error:', queryError.message);
          if (queryError.code !== 'PGRST116') {
            setError('Unable to load project. Please try again.');
          }
        } else if (data) {
          // Parse sections JSON if it exists
          const parsedProject = {
            ...data,
            sections: data.sections ? 
              (typeof data.sections === 'string' ? JSON.parse(data.sections) : data.sections) : 
              []
          };
          setProject(parsedProject);
        }
      } catch (err) {
        console.error('Error:', err);
        setError('Connection error. Please check your internet.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProject();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-black mx-auto mb-4"></div>
          <p className="text-xl">Loading project...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            {error ? 'Unable to Load Project' : 'Project not found'}
          </h2>
          <p className="text-gray-600 mb-6">
            {error || 'The project you are looking for does not exist.'}
          </p>
          <Link href="/our-work" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
            Back to Our Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={project.hero_image_url || "/main.jpg"}
              alt={stripHtmlTags(project.title)}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Gradient Overlay - Darker at Bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>

          {/* Hero Content - Positioned at Bottom */}
          <div className="relative z-10 flex items-end h-full px-4 sm:px-6 pb-8 sm:pb-12">
            <div className="w-full max-w-4xl mx-auto text-center">
              {project.project_type && (
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-400 text-black font-semibold text-xs sm:text-sm rounded-full mb-4 sm:mb-6">
                  {project.project_type}
                </span>
              )}
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
              >
                {stripHtmlTags(project.title)}
              </h1>
              {project.location && (
                <div className="flex items-center justify-center text-white/90 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {project.location}
                </div>
              )}
              {project.short_description && (
                <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto px-4">
                  {project.short_description}
                </p>
              )}
            </div>
          </div>
        </div>

      {/* Project Content */}
      <div className="bg-white">
        {/* Project Info Section */}
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {project.client_name && (
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Client</h3>
                <p className="text-gray-600">{project.client_name}</p>
              </div>
            )}
            
            {project.completion_date && (
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Completed</h3>
                <p className="text-gray-600">{new Date(project.completion_date).getFullYear()}</p>
              </div>
            )}
            
            {project.project_size && (
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Size</h3>
                <p className="text-gray-600">{project.project_size}</p>
              </div>
            )}
          </div>

          {/* Project Description */}
          {project.description && (
            <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Project Overview</h2>
              <div 
                className="rich-text-content text-gray-600 text-base sm:text-lg leading-relaxed text-left"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Project Media Section */}
      {(project.hero_video_url || project.hero_image_url) && (
        <div className="bg-gray-100 py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] rounded-lg overflow-hidden shadow-lg">
              {project.hero_video_url ? (
                <video
                  className="w-full h-full object-cover"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={project.hero_video_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={project.hero_image_url}
                  alt={stripHtmlTags(project.title)}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Project Sections */}
      {project.sections && project.sections.length > 0 && (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block">
                <span className="block text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  In-Depth Look
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Project Details
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
              </div>
            </div>
            
            <div className="max-w-6xl mx-auto space-y-20">
              {project.sections.map((section, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Section Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    {section.title && (
                      <div>
                        <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 font-semibold text-sm rounded-full mb-4">
                          Section {index + 1}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                          {stripHtmlTags(section.title)}
                        </h2>
                      </div>
                    )}
                    {section.content && (
                      <div 
                        className="rich-text-content prose prose-lg text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
                    )}
                  </div>
                  
                  {/* Section Image */}
                  {section.image && (
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <Image
                          src={section.image}
                          alt={section.title || `${stripHtmlTags(project.title)} - Section ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      {/* Decorative element */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 -z-10"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-black py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in Working With Us?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your next construction project and bring your vision to life.
          </p>
          <div className="space-x-4">
            <Link
              href="/our-work"
              className="inline-block px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-100 transition-colors"
            >
              View All Projects
            </Link>
            <Link
              href="/contact-us"
              className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProjectPage;