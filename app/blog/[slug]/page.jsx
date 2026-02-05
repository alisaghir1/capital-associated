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

// Fetch blog from Supabase REST API
async function getBlog(slug) {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/blogs?slug=eq.${encodeURIComponent(slug)}&select=*`,
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
    console.error('Error fetching blog:', error);
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
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | Capital Associated',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  const title = `${stripHtml(blog.title)} | Capital Associated`;
  const description = stripHtml(blog.excerpt) || stripHtml(blog.content)?.substring(0, 160) || '';
  const url = `https://capitalassociated.com/blog/${slug}`;
  const image = blog.hero_image_url || '/default-og-image.jpg';

  return {
    title,
    description,
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
export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  // Not found state
  if (!blog) {
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
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              The article you are looking for doesn&apos;t exist or may have been moved.
            </p>
            <Link href="/blog" className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Parse sections
  let sections = [];
  if (blog.sections) {
    try {
      sections = typeof blog.sections === 'string' ? JSON.parse(blog.sections) : blog.sections;
    } catch (e) {
      sections = [];
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Navbar />
      <NavbarMobile />

      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative w-full min-h-[60vh] lg:min-h-[70vh]">
          <div className="absolute inset-0">
            <Image
              src={blog.hero_image_url || "/main.jpg"}
              alt={stripHtml(blog.title)}
              fill
              style={{ objectFit: 'cover' }}
              priority
              fetchPriority="high"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          
          {/* Hero Content */}
          <div className="relative z-10 flex items-end min-h-[60vh] lg:min-h-[70vh] pt-32 lg:pt-40 pb-12 lg:pb-16">
            <div className="container mx-auto px-4 lg:px-20">
              {/* Breadcrumb */}
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm text-white/80">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                  <span>/</span>
                  <span className="text-amber-400 font-medium truncate max-w-[200px]">{stripHtml(blog.title)}</span>
                </div>
              </nav>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 max-w-4xl leading-loose tracking-wide">
                {stripHtml(blog.title)}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                {blog.author && (
                  <span className="flex items-center">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/60">Written by</p>
                      <p className="font-semibold">{blog.author}</p>
                    </div>
                  </span>
                )}
                {blog.created_at && (
                  <span className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/60">Published</p>
                      <p className="font-semibold">{formatDate(blog.created_at)}</p>
                    </div>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="bg-white">
          <div className="container mx-auto px-4 lg:px-20 py-12 lg:py-20">
            <div className="max-w-4xl mx-auto">
              
              {/* Excerpt */}
              {blog.excerpt && (
                <div className="mb-12 p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-l-4 border-amber-500">
                  <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
                    {stripHtml(blog.excerpt)}
                  </p>
                </div>
              )}

              {/* Main Content */}
              {blog.content && (
                <div 
                  className="rich-text-content prose prose-lg lg:prose-xl max-w-none mb-16"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              )}

              {/* Sections */}
              {sections.length > 0 && (
                <div className="space-y-16 mt-16">
                  {sections.map((section, index) => (
                    <section key={index} className="scroll-mt-20">
                      {/* Section Header */}
                      {section.title && (
                        <div className="flex items-center gap-4 mb-8">
                          <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {index + 1}
                          </span>
                          <h2 className="text-2xl lg:text-3xl font-bold text-black">
                            {stripHtml(section.title)}
                          </h2>
                        </div>
                      )}
                      
                      {/* Section Image */}
                      {section.image && (
                        <div className="relative w-full h-72 md:h-96 lg:h-[500px] mb-8 rounded-2xl overflow-hidden shadow-xl">
                          <Image
                            src={section.image}
                            alt={section.title || `Section ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      
                      {/* Section Content */}
                      {section.content && (
                        <div 
                          className="rich-text-content prose prose-lg max-w-none"
                          dangerouslySetInnerHTML={{ __html: section.content }}
                        />
                      )}
                    </section>
                  ))}
                </div>
              )}
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-black py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-20 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
              Let us bring your construction vision to life with our professional expertise and dedication to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact-us" 
                className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-offwhite transition-colors"
              >
                Get In Touch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* Share & Navigation */}
        <section className="bg-offwhite py-12">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Back Link */}
              <Link 
                href="/blog" 
                className="inline-flex items-center text-black hover:text-amber-700 transition-colors font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Articles
              </Link>

              {/* Share */}
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-medium">Share:</span>
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(stripHtml(blog.title))}&url=${encodeURIComponent(`https://capitalassociated.com/blog/${slug}`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://capitalassociated.com/blog/${slug}`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://capitalassociated.com/blog/${slug}`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Consultation />
      <Footer />
    </>
  );
}
