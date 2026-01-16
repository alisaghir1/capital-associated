'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { supabase, queryWithRetry } from '../../../lib/supabase';
import { stripHtmlTags } from '../../../utils/richText';

const ServicePage = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        
        const { data, error: queryError } = await queryWithRetry(
          () => supabase
            .from('services')
            .select('*')
            .eq('slug', slug)
            .eq('published', true)
            .single(),
          { timeoutMs: 15000, retries: 3 }
        );

        if (queryError) {
          console.warn('Service fetch error:', queryError.message);
          if (queryError.code !== 'PGRST116') {
            setError('Unable to load service. Please try again.');
          }
        } else if (data) {
          setService(data);
        }
      } catch (err) {
        console.error('Service fetch error:', err);
        setError('Connection error. Please check your internet.');
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-black mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading service...</p>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">
            {error ? 'Unable to Load Service' : 'Service Not Found'}
          </h1>
          <p className="text-gray-600 mb-8">
            {error || 'The service you are looking for does not exist.'}
          </p>
          <Link 
            href="/services" 
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{service.meta_title || `${stripHtmlTags(service.title)} | Capital Associated Contracting`}</title>
        <meta name="description" content={service.meta_description || service.excerpt} />
        {service.meta_keywords && <meta name="keywords" content={service.meta_keywords} />}
      </Head>

      {/* Hero Section - Modern full-width design */}
      <div className="relative w-full h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.hero_image_url || "/main.jpg"}
            alt={stripHtmlTags(service.title)}
            layout="fill"
            objectFit="cover"
            priority
            className="brightness-50"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

        <div className="relative z-10 flex flex-col justify-center items-start w-full h-full max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <div className="flex items-center space-x-2 text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white font-medium">{stripHtmlTags(service.title)}</span>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="max-w-4xl">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {stripHtmlTags(service.title)}
            </h1>
            {service.excerpt && (
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                {service.excerpt}
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Premium layout */}
      <div className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Service Overview */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  Professional {stripHtmlTags(service.title)}
                </h2>
                {service.content && (
                  <div className="prose prose-xl max-w-none">
                    <div 
                      className="rich-text-content text-gray-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: service.content }}
                    />
                  </div>
                )}
              </div>
              
              {service.hero_image_url && (
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src={service.hero_image_url}
                      alt={stripHtmlTags(service.title)}
                      width={800}
                      height={600}
                      className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-black/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-900/10 rounded-full blur-xl"></div>
                </div>
              )}
            </div>
          </div>

          {/* Features Grid */}
          {service.features && service.features.length > 0 && (
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our {stripHtmlTags(service.title)}?
                </h3>
                <div className="w-24 h-1 bg-black mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
                  >
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Service Sections - Enhanced layout */}
      {service.sections && service.sections.length > 0 && (
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Detailed Service Information
              </h3>
              <div className="w-24 h-1 bg-black mx-auto"></div>
            </div>
            
            <div className="space-y-24">
              {service.sections.map((section, index) => (
                <div key={index} className="relative">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                      {section.title && (
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                          {stripHtmlTags(section.title)}
                        </h2>
                      )}
                      
                      {section.content && (
                        <div 
                          className="rich-text-content prose prose-lg max-w-none text-gray-600 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: section.content }}
                        />
                      )}
                    </div>
                    
                    {section.image && (
                      <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} relative`}>
                        <div className="relative overflow-hidden rounded-2xl shadow-xl">
                          <Image
                            src={section.image}
                            alt={stripHtmlTags(section.title) || `Section ${index + 1}`}
                            width={700}
                            height={500}
                            className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-black/10 rounded-full blur-lg"></div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gray-900/10 rounded-full blur-lg"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Section divider */}
                  {index < service.sections.length - 1 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12">
                      <div className="w-px h-24 bg-gradient-to-b from-gray-300 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Section - Premium design */}
      <div className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to Transform Your Vision Into Reality?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
              Contact our expert team today to discuss how our {service.title.toLowerCase()} services can help bring your construction project to life with unmatched quality and precision.
            </p>
            
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Get Free Consultation
                <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/our-work"
                className="group inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                <svg className="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services - Modern grid */}
      <div className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explore Our Complete Service Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the full range of construction and contracting services we offer to meet all your project needs.
            </p>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>
          
          <div className="text-center">
            <Link
              href="/services"
              className="group inline-flex items-center justify-center px-12 py-6 bg-black text-white font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              View All Services
              <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;