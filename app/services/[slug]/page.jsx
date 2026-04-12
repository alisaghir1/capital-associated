import { notFound } from 'next/navigation'
import ServiceDetailClient from './ServiceDetailClient'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

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
    )
    if (!res.ok) return null
    const data = await res.json()
    return data[0] || null
  } catch (error) {
    console.error('Error fetching service:', error)
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
  const service = await getService(slug)

  if (!service) {
    return {
      title: 'Service Not Found | Capital Associated',
    }
  }

  const title = service.meta_title || `${stripHtml(service.title)} | Capital Associated Services`
  const description = service.meta_description || service.short_description || stripHtml(service.description)?.substring(0, 160) || ''
  const url = `https://www.capitalassociated.com/services/${slug}`
  const image = service.hero_image_url || service.cover_image || '/default-og-image.jpg'

  return {
    title,
    description,
    keywords: service.meta_keywords || `${stripHtml(service.title)}, construction service, Capital Associated, Dubai`,
    alternates: {
      canonical: url,
    },
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
    robots: {
      index: true,
      follow: true,
    },
  }
}

// Generate JSON-LD structured data for Service
function generateServiceJsonLd(service, slug) {
  const title = stripHtml(service.title)
  const description = service.short_description || stripHtml(service.description)?.substring(0, 160) || ''
  const url = `https://www.capitalassociated.com/services/${slug}`
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: title,
        description: description,
        url: url,
        provider: {
          '@id': 'https://www.capitalassociated.com/#organization'
        },
        areaServed: {
          '@type': 'Country',
          name: 'United Arab Emirates',
        },
        serviceType: title,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.capitalassociated.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://www.capitalassociated.com/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: title,
            item: url,
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url: url,
        name: service.meta_title || `${title} | Capital Associated Services`,
        isPartOf: {
          '@id': 'https://www.capitalassociated.com/#website',
        },
        breadcrumb: {
          '@id': `${url}#breadcrumb`,
        },
      },
    ],
  }
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params
  
  // Fetch service data on the server
  const service = await getService(slug)
  
  if (!service) {
    notFound()
  }
  
  const jsonLd = generateServiceJsonLd(service, slug)
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailClient service={service} />
    </>
  )
}
