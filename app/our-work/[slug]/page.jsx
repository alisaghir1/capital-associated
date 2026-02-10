import { notFound } from 'next/navigation'
import Script from 'next/script'
import { getProjectBySlug } from '../../../lib/supabase-ssr'
import ProjectDetailClient from './ProjectDetailClient'

// Helper to strip HTML tags
function stripHtmlTags(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').trim()
}

// Force dynamic rendering for SSR
export const dynamic = 'force-dynamic'

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params
  const { data } = await getProjectBySlug(slug)
  
  if (!data) {
    return {
      title: 'Project Not Found | Capital Associated Contracting',
    }
  }

  const title = `${stripHtmlTags(data.title)} | Capital Associated Projects`
  const description = stripHtmlTags(data.short_description) || stripHtmlTags(data.description)?.substring(0, 160) || ''
  const url = `https://capitalassociated.com/our-work/${data.slug}`
  const image = data.hero_image_url || data.cover_image || '/default-og-image.jpg'

  return {
    title,
    description,
    keywords: `${stripHtmlTags(data.title)}, ${data.project_type || 'construction'}, Capital Associated, Dubai projects`,
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

// Generate JSON-LD structured data for Project
function generateProjectJsonLd(project, slug) {
  const title = stripHtmlTags(project.title)
  const description = project.short_description || stripHtmlTags(project.description)?.substring(0, 160) || ''
  const image = project.hero_image_url || project.cover_image || 'https://capitalassociated.com/default-og-image.jpg'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description: description,
    image: image,
    url: `https://capitalassociated.com/our-work/${slug}`,
    ...(project.completion_date && { dateCreated: project.completion_date }),
    ...(project.location && {
      locationCreated: {
        '@type': 'Place',
        name: project.location,
      },
    }),
    ...(project.client_name && {
      sponsor: {
        '@type': 'Organization',
        name: project.client_name,
      },
    }),
    creator: {
      '@type': 'Organization',
      name: 'Capital Associated Building Contracting',
      url: 'https://capitalassociated.com',
      logo: 'https://capitalassociated.com/logoLight.svg',
    },
    ...(project.project_type && { genre: project.project_type }),
  }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  
  // Fetch project data on the server
  const { data: project } = await getProjectBySlug(slug)
  
  if (!project) {
    notFound()
  }
  
  const jsonLd = generateProjectJsonLd(project, slug)
  
  return (
    <>
      <Script
        id="project-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      <ProjectDetailClient project={project} />
    </>
  )
}