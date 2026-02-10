import { notFound } from 'next/navigation'
import Script from 'next/script'
import { getCareerBySlug } from '../../../lib/supabase-ssr'
import CareerDetailClient from './CareerDetailClient'

// Helper to strip HTML tags
function stripHtmlTags(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').trim()
}

// Force dynamic rendering for SSR
export const dynamic = 'force-dynamic'

// Generate dynamic metadata based on career
export async function generateMetadata({ params }) {
  const { slug } = await params
  const { data: career } = await getCareerBySlug(slug)
  
  if (!career) {
    return {
      title: 'Career Not Found | Capital Associated Contracting',
    }
  }
  
  const title = career.meta_title || `${stripHtmlTags(career.job_title)} | Careers at Capital Associated Contracting`
  const description = career.meta_description || stripHtmlTags(career.job_description)?.substring(0, 160) || `Apply for ${stripHtmlTags(career.job_title)} at Capital Associated Contracting.`
  const url = `https://capitalassociated.com/career/${slug}`
  
  return {
    title,
    description,
    keywords: career.meta_keywords || `${stripHtmlTags(career.job_title)}, careers, jobs, Capital Associated, Dubai`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [{ url: '/default-og-image.jpg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/default-og-image.jpg'],
    },
  }
}

// Generate JSON-LD structured data for JobPosting
function generateJobPostingJsonLd(career, slug) {
  const jobTitle = stripHtmlTags(career.job_title)
  const description = stripHtmlTags(career.job_description) || ''
  
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: jobTitle,
    description: description,
    identifier: {
      '@type': 'PropertyValue',
      name: 'Capital Associated Contracting',
      value: slug,
    },
    datePosted: career.created_at,
    validThrough: career.application_deadline || undefined,
    employmentType: career.employment_type || 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Capital Associated Building Contracting',
      sameAs: 'https://capitalassociated.com',
      logo: 'https://capitalassociated.com/logoLight.svg',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: career.location || 'Dubai',
        addressCountry: 'AE',
      },
    },
    ...(career.salary_range && {
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'AED',
        value: {
          '@type': 'QuantitativeValue',
          value: career.salary_range,
        },
      },
    }),
    ...(career.experience_level && {
      experienceRequirements: career.experience_level,
    }),
    ...(career.department && {
      occupationalCategory: career.department,
    }),
  }
}

export default async function CareerDetailPage({ params }) {
  const { slug } = await params
  
  // Fetch career data on the server
  const { data: career } = await getCareerBySlug(slug)
  
  if (!career) {
    notFound()
  }
  
  const jsonLd = generateJobPostingJsonLd(career, slug)
  
  return (
    <>
      <Script
        id="job-posting-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      <CareerDetailClient career={career} />
    </>
  )
}
