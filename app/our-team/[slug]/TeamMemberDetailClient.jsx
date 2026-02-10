'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Helper to strip HTML tags
function stripHtmlTags(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').trim()
}

export default function TeamMemberDetailClient({ member }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sections = member.sections || []

  return (
    <main className="min-h-screen border-b border-b-black pb-20">
      {/* Hero Section */}
      <header className="relative w-full h-[30rem]">
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
          <nav className="absolute bottom-10 left-10" aria-label="Breadcrumb">
            <span className="text-white">Home</span>
            <span className="text-black"> / Our Team / {stripHtmlTags(member.name)}</span>
          </nav>
        </div>
      </header>

      {/* Member Details */}
      <article className="flex flex-col xl:flex-row gap-10 items-center rounded-2xl mt-10 px-4">
        {/* Profile Image */}
        <figure className="relative xl:ml-10 mt-10 h-[60rem] xl:w-[60rem] px-5 w-full">
          <Image
            src={member.image_url || "/team/default.jpg"}
            alt={member.image_alt || stripHtmlTags(member.name)}
            fill
            style={{ objectFit: 'cover' }}
            className="xl:rounded-xl rounded-lg"
          />
        </figure>

        {/* Member Information */}
        <div className="flex flex-col gap-5 xl:mr-10 px-5 w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">{stripHtmlTags(member.name)}</h2>
            <p className="text-xl text-gray-600">{member.position}</p>
          </div>

          {/* Bio */}
          {member.bio && (
            <section className="mt-4">
              <h3 className="text-xl font-semibold mb-3">About</h3>
              <div 
                className="rich-text-content text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: member.bio }}
              />
            </section>
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
                    <figure className="relative h-[400px] w-full mb-6">
                      <Image
                        src={section.image}
                        alt={section.image_alt || stripHtmlTags(section.title) || "Section image"}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </figure>
                  )}
                </section>
              ))}
            </div>
          )}

          {/* Contact CTA */}
          <aside className="mt-8 p-6 bg-gray-100 border border-black rounded-lg">
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
          </aside>
        </div>
      </article>
    </main>
  )
}
