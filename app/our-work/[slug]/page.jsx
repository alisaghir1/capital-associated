import { notFound } from 'next/navigation'
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
  const url = `https://www.capitalassociated.com/our-work/${data.slug}`
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
    robots: {
      index: true,
      follow: true,
    },
  }
}

// Generate JSON-LD structured data for Project
function generateProjectJsonLd(project, slug) {
  const title = stripHtmlTags(project.title)
  const description = project.short_description || stripHtmlTags(project.description)?.substring(0, 160) || ''
  const url = `https://www.capitalassociated.com/our-work/${slug}`
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${url}#project`,
        name: title,
        description: description,
        url: url,
        author: {
          '@id': 'https://www.capitalassociated.com/#organization'
        },
        ...(project.location && {
          locationCreated: {
            '@type': 'Place',
            name: project.location,
          },
        }),
        ...(project.completion_date && { dateCreated: project.completion_date }),
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
            name: 'Projects',
            item: 'https://www.capitalassociated.com/our-work',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: title,
            item: url,
          },
        ],
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetailClient project={project} />
    </>
  )
}