import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import NavbarMobile from '../components/NavbarMobile';
import Footer from '../components/Footer';
import Consultation from '../components/Consultation';

// Use ISR with 60 second revalidation for optimal performance
export const revalidate = 60;

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const BLOGS_PER_PAGE = 6;

async function getBlogs() {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/blogs?select=id,title,slug,excerpt,hero_image_url,author,created_at,published&published=eq.true&order=created_at.desc`,
      {
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
        },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
}

export const metadata = {
  title: 'Blog | Capital Associated Building Contracting',
  description: 'Read our latest insights, expert tips, and industry updates on construction, interior fit-out, and building projects in Dubai and UAE.',
  openGraph: {
    title: 'Blog | Capital Associated Building Contracting',
    description: 'Read our latest insights on construction, fit-out, and building projects in Dubai.',
    url: 'https://capitalassociated.com/blog',
    type: 'website',
  },
};

export default async function BlogListPage({ searchParams }) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params?.page) || 1);
  
  const allBlogs = await getBlogs();
  const totalBlogs = allBlogs.length;
  const totalPages = Math.ceil(totalBlogs / BLOGS_PER_PAGE);
  
  // Get blogs for current page
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const endIndex = startIndex + BLOGS_PER_PAGE;
  const blogs = allBlogs.slice(startIndex, endIndex);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <>
      <Navbar />
      <NavbarMobile />

      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative w-full h-[70vh] min-h-[500px]">
          <div className="absolute inset-0">
            <Image
              src="/main.jpg"
              alt="Capital Associated Construction Blog - Expert Tips, Industry Insights, Project Updates"
              fill
              style={{ objectFit: 'cover' }}
              priority
              fetchPriority="high"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4">
              Insights & Stories
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-black max-w-2xl">
              Expert tips, latest updates, and inspiring stories from our construction journey
            </p>
            <div className="absolute bottom-10 left-10 text-sm">
              <span className="text-white">Home</span>
              <span className="text-black"> / Blog</span>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <section className="bg-offwhite py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-20">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 font-semibold text-sm rounded-full mb-4">
                Our Blog
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Latest Articles
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay informed with our expert insights on construction, design, and project management
              </p>
              {/* Page Info */}
              <p className="text-gray-500 mt-4">
                Page {currentPage} of {totalPages} • {totalBlogs} articles
              </p>
            </div>

            {blogs.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-xl">No blog posts available at the moment.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <Link key={blog.id} href={`/blog/${blog.slug}`} className="group">
                    <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        {blog.hero_image_url ? (
                          <Image
                            src={blog.hero_image_url}
                            alt={stripHtml(blog.title)}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                        )}
                        {/* Date Badge */}
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-black text-sm font-medium px-3 py-1.5 rounded-full shadow">
                          {formatDate(blog.created_at)}
                        </div>
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-amber-700 transition-colors">
                          {stripHtml(blog.title)}
                        </h3>
                        {blog.excerpt && (
                          <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                            {stripHtml(blog.excerpt)}
                          </p>
                        )}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          {blog.author && (
                            <span className="text-sm text-gray-500 flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                              </svg>
                              {blog.author}
                            </span>
                          )}
                          <span className="text-black font-semibold text-sm flex items-center group-hover:text-amber-700 transition-colors">
                            Read More
                            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <nav className="flex justify-center items-center mt-16 gap-2" aria-label="Pagination">
                    {/* Previous Button */}
                    {currentPage > 1 ? (
                      <Link
                        href={`/blog?page=${currentPage - 1}`}
                        className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                      >
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous
                      </Link>
                    ) : (
                      <span className="flex items-center px-4 py-2 bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed font-medium">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous
                      </span>
                    )}

                    {/* Page Numbers */}
                    <div className="hidden sm:flex items-center gap-2 mx-4">
                      {getPageNumbers().map((page, index) => (
                        page === '...' ? (
                          <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">
                            ...
                          </span>
                        ) : (
                          <Link
                            key={page}
                            href={`/blog?page=${page}`}
                            className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold transition-colors ${
                              currentPage === page
                                ? 'bg-black text-white'
                                : 'bg-white text-black hover:bg-gray-100 border border-gray-200'
                            }`}
                          >
                            {page}
                          </Link>
                        )
                      ))}
                    </div>

                    {/* Mobile Page Indicator */}
                    <span className="sm:hidden px-4 py-2 bg-white rounded-lg border border-gray-200 font-medium">
                      {currentPage} / {totalPages}
                    </span>

                    {/* Next Button */}
                    {currentPage < totalPages ? (
                      <Link
                        href={`/blog?page=${currentPage + 1}`}
                        className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                      >
                        Next
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ) : (
                      <span className="flex items-center px-4 py-2 bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed font-medium">
                        Next
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    )}
                  </nav>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      <Consultation />
      <Footer />
    </>
  );
}
