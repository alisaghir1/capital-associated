import { notFound } from 'next/navigation'
import { getTeamMemberBySlug } from '../../../lib/supabase-ssr'
import TeamMemberDetailClient from './TeamMemberDetailClient'

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
  const { data: member } = await getTeamMemberBySlug(slug)
  
  if (!member) {
    return {
      title: 'Team Member Not Found | Capital Associated Contracting',
    }
  }
  
  const title = member.meta_title || `${stripHtmlTags(member.name)} - ${member.position} | Capital Associated Contracting`
  const description = member.meta_description || `${stripHtmlTags(member.name)} is ${member.position} at Capital Associated Contracting. ${stripHtmlTags(member.bio)?.substring(0, 100) || 'Learn more about our team member.'}`
  const url = `https://www.capitalassociated.com/our-team/${slug}`
  const image = member.image_url || '/default-og-image.jpg'
  
  return {
    title,
    description,
    keywords: member.meta_keywords || `${stripHtmlTags(member.name)}, ${member.position}, Capital Associated team`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'profile',
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

// Generate JSON-LD structured data for Team Member (ProfilePage)
function generatePersonJsonLd(member, slug) {
  const name = stripHtmlTags(member.name)
  const image = member.image_url || 'https://www.capitalassociated.com/default-og-image.jpg'
  const url = `https://www.capitalassociated.com/our-team/${slug}`
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${url}#webpage`,
        url: url,
        name: `${name} - ${member.position} | Capital Associated`,
        isPartOf: {
          '@id': 'https://www.capitalassociated.com/#website',
        },
        mainEntity: {
          '@type': 'Person',
          name: name,
          jobTitle: member.position,
          image: image,
          worksFor: {
            '@id': 'https://www.capitalassociated.com/#organization',
          },
        },
        breadcrumb: {
          '@id': `${url}#breadcrumb`,
        },
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
            name: 'Team',
            item: 'https://www.capitalassociated.com/our-team',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: name,
            item: url,
          },
        ],
      },
    ],
  }
}

export default async function TeamMemberPage({ params }) {
  const { slug } = await params
  
  // Fetch team member data on the server
  const { data: member } = await getTeamMemberBySlug(slug)
  
  if (!member) {
    notFound()
  }
  
  const jsonLd = generatePersonJsonLd(member, slug)
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TeamMemberDetailClient member={member} />
    </>
  )
}
