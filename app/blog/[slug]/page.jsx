import { notFound } from 'next/navigation'
import Script from 'next/script'
import BlogDetailClient from './BlogDetailClient'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

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
    )
    if (!res.ok) return null
    const data = await res.json()
    return data[0] || null
  } catch (error) {
    console.error('Error fetching blog:', error)
    return null
  }
}

// Strip HTML tags
function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').trim()
}

// Force dynamic rendering for SSR
export const dynamic = 'force-dynamic'

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params
  const blog = await getBlog(slug)

  if (!blog) {
    return {
      title: 'Blog Not Found | Capital Associated',
    }
  }

  const title = `${stripHtml(blog.title)} | Capital Associated Blog`
  const description = stripHtml(blog.excerpt) || stripHtml(blog.content)?.substring(0, 160) || ''
  const url = `https://capitalassociated.com/blog/${slug}`
  const image = blog.hero_image_url || '/default-og-image.jpg'

  return {
    title,
    description,
    keywords: `${stripHtml(blog.title)}, Capital Associated, construction blog, Dubai`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [{ url: image }],
      publishedTime: blog.created_at,
      authors: [blog.author || 'Capital Associated'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

// Generate JSON-LD structured data for Article
function generateArticleJsonLd(blog, slug) {
  const title = stripHtml(blog.title)
  const description = stripHtml(blog.excerpt) || stripHtml(blog.content)?.substring(0, 160) || ''
  const image = blog.hero_image_url || 'https://capitalassociated.com/default-og-image.jpg'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    datePublished: blog.created_at,
    dateModified: blog.updated_at || blog.created_at,
    author: {
      '@type': 'Person',
      name: blog.author || 'Capital Associated',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Capital Associated Building Contracting',
      logo: {
        '@type': 'ImageObject',
        url: 'https://capitalassociated.com/logoLight.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://capitalassociated.com/blog/${slug}`,
    },
  }
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params
  
  // Fetch blog post on the server
  const blog = await getBlog(slug)
  
  if (!blog) {
    notFound()
  }
  
  const jsonLd = generateArticleJsonLd(blog, slug)
  
  return (
    <>
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      <BlogDetailClient blog={blog} slug={slug} />
    </>
  )
}
