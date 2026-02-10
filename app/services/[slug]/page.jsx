import { notFound } from 'next/navigation'
import Script from 'next/script'
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
  const url = `https://capitalassociated.com/services/${slug}`
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
  }
}

// Generate JSON-LD structured data for Service
function generateServiceJsonLd(service, slug) {
  const title = stripHtml(service.title)
  const description = service.short_description || stripHtml(service.description)?.substring(0, 160) || ''
  const image = service.hero_image_url || service.cover_image || 'https://capitalassociated.com/default-og-image.jpg'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: description,
    image: image,
    url: `https://capitalassociated.com/services/${slug}`,
    provider: {
      '@type': 'Organization',
      name: 'Capital Associated Building Contracting',
      url: 'https://capitalassociated.com',
      logo: 'https://capitalassociated.com/logoLight.svg',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    serviceType: title,
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
      <Script
        id="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      <ServiceDetailClient service={service} />
    </>
  )
}
