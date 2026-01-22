
import { supabase } from '../../../lib/supabase.js';
import { stripHtmlTags } from '../../utils/richText.js';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const { data } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();
  if (!data) {
    return {
      title: 'Blog Post Not Found | Capital Associated Contracting',
      description: 'The blog post you are looking for does not exist.'
    };
  }
  const title = `${stripHtmlTags(data.title)} | Capital Associated Contracting`;
  const description = stripHtmlTags(data.excerpt) || stripHtmlTags(data.content)?.substring(0, 160);
  const url = `https://capitalassociated.com/blog/${data.slug}`;
  const image = data.cover_image || '/default-og-image.jpg';
  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [image]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
}

async function getBlog(slug) {
  const { data } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();
  if (!data) return null;
  return {
    ...data,
    sections: data.sections ? (typeof data.sections === 'string' ? JSON.parse(data.sections) : data.sections) : []
  };
}

export default async function BlogPage({ params }) {
  const { slug } = params;
  const blog = await getBlog(slug);
  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you are looking for does not exist.</p>
          <a href="/blog" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">Back to Blog</a>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="min-h-screen bg-white pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="w-full mx-auto">
            {/* Hero Image */}
            {blog.hero_image_url && (
              <div className="mb-12 mt-20"> 
                <img src={blog.hero_image_url} alt={stripHtmlTags(blog.title)} className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" />
              </div>
            )}
            {/* Blog Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">{stripHtmlTags(blog.title)}</h1>
              {blog.excerpt && (<p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">{stripHtmlTags(blog.excerpt)}</p>)}
              {/* Blog Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-b border-gray-200 pb-6">
                {blog.author && (<span className="flex items-center"><svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>By {blog.author}</span>)}
                {blog.created_at && (<span className="flex items-center"><svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>{new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>)}
              </div>
            </header>
            {/* Blog Content */}
            <div className="max-w-none mb-16">
              {blog.content ? (<div className="rich-text-content text-gray-700 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: blog.content }} />) : (<p className="text-gray-500">No content available</p>)}
              {/* Blog Sections */}
              {blog.sections && blog.sections.length > 0 && (
                <div className="mt-12">
                  {blog.sections.map((section, index) => (
                    <div key={index} className="mb-12">
                      {section.title && (<h2 className="text-3xl font-bold text-black mb-6">{stripHtmlTags(section.title)}</h2>)}
                      {/* Section Image */}
                      {section.image && (<div className="mb-8"><img src={section.image} alt={stripHtmlTags(section.title) || `Section ${index + 1} image`} className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" /></div>)}
                      {section.content && (<div className="rich-text-content text-gray-700 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: section.content }} />)}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Call to Action */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-xl text-center mb-16">
              <h3 className="text-3xl font-bold text-black mb-4">Ready to Start Your Construction Project?</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Contact us today to discuss how we can help bring your vision to life with our professional construction services.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact-us" className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg">Get In Touch</a>
                <a href="/services" className="border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-colors font-semibold text-lg">Our Services</a>
              </div>
            </div>
            {/* Navigation and Share */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <a href="/blog" className="flex items-center text-black hover:text-gray-600 transition-colors font-medium"><svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Back to Blog</a>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 mb-3">Share this article</p>
                  <div className="flex space-x-4">
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(`https://capitalassociated.com/blog/${slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors"><span className="sr-only">Share on Twitter</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://capitalassociated.com/blog/${slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors"><span className="sr-only">Share on LinkedIn</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}