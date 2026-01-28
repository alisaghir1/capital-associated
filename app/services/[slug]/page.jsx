import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import NavbarMobile from '../../components/NavbarMobile';
import Footer from '../../components/Footer';
import Consultation from '../../components/Consultation';

// Force SSR - content must be in initial HTML for SEO
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Fetch service from Supabase REST API
async function getService(slug) {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/services?slug=eq.${encodeURIComponent(slug)}&select=*`,
      {
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
        },
        cache: 'no-store',
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data[0] || null;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

// Strip HTML tags
function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Capital Associated',
      description: 'The service you are looking for does not exist.',
    };
  }

  const title = service.meta_title || `${stripHtml(service.title)} | Capital Associated`;
  const description = service.meta_description || service.short_description || stripHtml(service.description)?.substring(0, 160) || '';
  const url = `https://capitalassociated.com/services/${slug}`;
  const image = service.hero_image_url || service.cover_image || '/default-og-image.jpg';

  return {
    title,
    description,
    keywords: service.meta_keywords || '',
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

// Main page component - Pure SSR
export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = await getService(slug);

  // Not found state
  if (!service) {
    return (
      <>
        <Navbar />
        <NavbarMobile />
        <main className="min-h-screen flex items-center justify-center bg-offwhite pt-32">
          <div className="text-center px-4">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              The service you are looking for doesn&apos;t exist or may have been moved.
            </p>
            <Link href="/services" className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Services
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Parse sections
  let sections = [];
  if (service.sections) {
    try {
      sections = typeof service.sections === 'string' ? JSON.parse(service.sections) : service.sections;
    } catch (e) {
      sections = [];
    }
  }

  return (
    <>
      <Navbar />
      <NavbarMobile />

      <main className="min-h-screen">
        {/* Hero Section - Full width with gradient overlay */}
        <div className="relative w-full h-[60vh] lg:h-[70vh] min-h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={service.hero_image_url || "/main.jpg"}
              alt={stripHtml(service.title)}
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="brightness-50"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col justify-center items-start w-full h-full max-w-7xl mx-auto px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm">
              <div className="flex items-center space-x-2 text-white/80">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                <span>/</span>
                <span className="text-white font-medium">{stripHtml(service.title)}</span>
              </div>
            </nav>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
              {stripHtml(service.title)}
            </h1>

            {/* Short Description */}
            {service.short_description && (
              <p className="text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed mb-8">
                {stripHtml(service.short_description)}
              </p>
            )}

            {/* CTA Button */}
            <Link 
              href="/contact-us" 
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-offwhite transition-colors"
            >
              Get a Quote
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Service Description */}
        <article className="bg-white">
          <div className="container mx-auto px-4 lg:px-20 py-16 lg:py-24">
            <div className="max-w-4xl mx-auto">
              
              {/* Main Description */}
              {service.description && (
                <div className="mb-16">
                  <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">About This Service</h2>
                  <div 
                    className="rich-text-content prose prose-lg lg:prose-xl max-w-none"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </div>
              )}
            </div>
          </div>
        </article>

        {/* Service Sections - Alternating layout like projects */}
        {sections.length > 0 && (
          <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6">
              {/* Section Header */}
              <div className="text-center mb-16">
                <span className="block text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  Service Details
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  What We Offer
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
              </div>

              <div className="max-w-6xl mx-auto space-y-20">
                {sections.map((section, index) => (
                  <div 
                    key={index} 
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                  >
                    {/* Section Content */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      {section.title && (
                        <div>
                          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 font-semibold text-sm rounded-full mb-4">
                            {index + 1}
                          </span>
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                            {stripHtml(section.title)}
                          </h3>
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
                        <div className="relative h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                          <Image 
                            src={section.image} 
                            alt={section.title || `Section ${index + 1}`} 
                            fill 
                            className="object-cover" 
                          />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 -z-10" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Why Choose Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We deliver excellence in every project with our commitment to quality and client satisfaction
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-8 bg-offwhite rounded-2xl">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Quality Assured</h3>
                <p className="text-gray-600">We maintain the highest standards in materials and workmanship</p>
              </div>
              <div className="text-center p-8 bg-offwhite rounded-2xl">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">On-Time Delivery</h3>
                <p className="text-gray-600">We complete projects within the agreed timeline and budget</p>
              </div>
              <div className="text-center p-8 bg-offwhite rounded-2xl">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Expert Team</h3>
                <p className="text-gray-600">Our experienced professionals bring expertise to every project</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-20 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
              Contact us today to discuss your project requirements and get a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact-us" 
                className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-offwhite transition-colors"
              >
                Get a Free Quote
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Back to Services */}
        <section className="bg-offwhite py-12">
          <div className="container mx-auto px-4 lg:px-20">
            <Link 
              href="/services" 
              className="inline-flex items-center text-black hover:text-amber-700 transition-colors font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Services
            </Link>
          </div>
        </section>
      </main>

      <Consultation />
      <Footer />
    </>
  );
}
