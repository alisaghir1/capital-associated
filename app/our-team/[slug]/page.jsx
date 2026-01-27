import Image from "next/image";
import Link from "next/link";
import { getTeamMemberBySlug } from "../../../lib/supabase-ssr";

// Helper to strip HTML tags
function stripHtmlTags(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
}

// Force SSR
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: member } = await getTeamMemberBySlug(slug);
  
  if (!member) {
    return {
      title: 'Team Member Not Found | Capital Associated Contracting',
      description: 'The team member you are looking for does not exist.'
    };
  }
  
  const title = member.meta_title || `${stripHtmlTags(member.name)} - ${member.position} | Capital Associated Contracting`;
  const description = member.meta_description || `${stripHtmlTags(member.name)} is ${member.position} at Capital Associated Contracting. ${stripHtmlTags(member.bio)?.substring(0, 100) || 'Learn more about our team member.'}`;
  const url = `https://capitalassociated.com/our-team/${slug}`;
  const image = member.image_url || '/default-og-image.jpg';
  
  return {
    title,
    description,
    keywords: member.meta_keywords || '',
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      type: 'profile',
      images: [{ url: image }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
}

export default async function TeamMemberPage({ params }) {
  const { slug } = await params;
  const { data: member } = await getTeamMemberBySlug(slug);
  
  if (!member) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Team Member Not Found</h2>
          <p className="text-gray-600 mb-6">The team member you are looking for does not exist.</p>
          <Link href="/our-team" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
            Back to Our Team
          </Link>
        </div>
      </div>
    );
  }
  
  const sections = member.sections || [];

  return (
    <div className="flex flex-col items-center justify-center border-b border-b-black pb-20">
      {/* Hero Section */}
      <div className="relative w-full h-[30rem]">
        <div className="absolute inset-0">
          <Image
            src="/main.jpg"
            alt="Background Image"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center">
          <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
            {stripHtmlTags(member.name)}
          </h1>
          <p className="xl:text-2xl text-black md:text-xl lg:text-2xl text-lg mt-2">
            {member.position}
          </p>
          <p className="absolute bottom-10 left-10 text-white">
            Home <span className="text-black">/ Our Team / {stripHtmlTags(member.name)}</span>
          </p>
        </div>
      </div>

      {/* Member Details */}
      <div className="flex flex-col xl:flex-row gap-10 items-center rounded-2xl mt-10 px-4">
        {/* Profile Image */}
        <div className="relative xl:ml-10 mt-10 h-[60rem] xl:w-[60rem] px-5 w-full">
          <Image
            src={member.image_url || "/team/default.jpg"}
            alt={stripHtmlTags(member.name)}
            fill
            style={{ objectFit: 'cover' }}
            className="xl:rounded-xl rounded-lg"
          />
        </div>

        {/* Member Information */}
        <div className="flex flex-col gap-5 xl:mr-10 px-5 w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">{stripHtmlTags(member.name)}</h2>
            <p className="text-xl text-gray-600">{member.position}</p>
          </div>

          {/* Bio */}
          {member.bio && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-3">About</h3>
              <div 
                className="rich-text-content text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: member.bio }}
              />
            </div>
          )}

          {/* Dynamic Sections */}
          {sections.length > 0 && (
            <div className="mt-8">
              {sections.map((section, index) => (
                <section key={index} className="mb-8">
                  {section.title && (
                    <h3 className="text-2xl font-semibold mb-4">
                      {stripHtmlTags(section.title)}
                    </h3>
                  )}
                  {section.content && (
                    <div 
                      className="rich-text-content prose prose-lg max-w-none text-gray-700 mb-4"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  )}
                  {section.image && (
                    <div className="relative h-[400px] w-full mb-6">
                      <Image
                        src={section.image}
                        alt={stripHtmlTags(section.title) || "Section image"}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                  )}
                </section>
              ))}
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-8 p-6 bg-gray-100 border border-black rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Work With {stripHtmlTags(member.name)}</h3>
            <p className="text-gray-700 mb-4">
              Interested in working with {stripHtmlTags(member.name)}? Get in touch to discuss your project needs.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
