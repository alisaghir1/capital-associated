'use client'
import Link from 'next/link'
import Image from 'next/image'

function stripHtmlTags(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').trim()
}

export default function ProjectDetailClient({ project }) {
  const title = stripHtmlTags(project.title)
  const sections = Array.isArray(project.sections) ? project.sections : []
  const gallery = sections.filter((s) => s.image)

  const status = project.completion_date
    ? `Completed ${new Date(project.completion_date).getFullYear()}`
    : 'In progress'

  const facts = [
    project.client_name && { label: 'Client', value: project.client_name },
    project.project_type && { label: 'Sector', value: project.project_type },
    project.location && { label: 'Location', value: project.location },
    { label: 'Status', value: status },
    project.project_size && { label: 'Size', value: project.project_size },
  ].filter(Boolean)

  const discussHref = `/contact-us?project=${encodeURIComponent(project.project_type || title)}`

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <header className="relative w-full min-h-[520px] lg:min-h-[65vh]">
        <div className="absolute inset-0">
          <Image
            src={project.hero_image_url || '/main.jpg'}
            alt={project.hero_image_alt || title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/80" />
        {/* Light band keeps the dark logo/nav legible over dark hero photos */}
        <div className="absolute inset-x-0 top-0 h-44 xl:h-48 bg-gradient-to-b from-white/85 via-white/50 to-transparent" />
        {/* Navbar is absolutely positioned over the hero: ~150px tall on mobile (topbar + logo), ~170px on xl */}
        <div className="relative z-10 flex flex-col justify-end w-full min-h-[520px] lg:min-h-[65vh] max-w-6xl mx-auto px-6 lg:px-8 pt-44 xl:pt-48 pb-12">
          <div>
            <nav className="mb-4 text-sm text-white/80" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/our-work" className="hover:text-white">Projects</Link>
              <span className="mx-2">/</span>
              <span className="text-white font-medium">{title}</span>
            </nav>
            {project.project_type && (
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80 mb-2">{project.project_type}</p>
            )}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl text-balance">
              {title}
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-5 lg:px-8 max-w-6xl py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main column */}
        <article className="lg:col-span-2 flex flex-col gap-12">
          {/* Scope */}
          <section aria-labelledby="scope">
            <h2 id="scope" className="text-2xl font-bold text-black mb-4">Scope</h2>
            {project.short_description && (
              <p className="text-lg text-gray-800 leading-relaxed mb-4">{stripHtmlTags(project.short_description)}</p>
            )}
            {project.description && (
              <div className="rich-text-content text-gray-700" dangerouslySetInnerHTML={{ __html: project.description }} />
            )}
          </section>

          {/* Detail sections — kept short, text-only */}
          {sections.filter((s) => s.title || s.content).length > 0 && (
            <section aria-labelledby="details" className="flex flex-col gap-8">
              <h2 id="details" className="text-2xl font-bold text-black">Project Details</h2>
              {sections
                .filter((s) => s.title || s.content)
                .map((section, index) => (
                  <div key={index}>
                    {section.title && <h3 className="text-lg font-semibold text-black mb-2">{stripHtmlTags(section.title)}</h3>}
                    {section.content && (
                      <div className="rich-text-content text-gray-700 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: section.content }} />
                    )}
                  </div>
                ))}
            </section>
          )}

          {/* Gallery */}
          {gallery.length > 0 && (
            <section aria-labelledby="gallery">
              <h2 id="gallery" className="text-2xl font-bold text-black mb-4">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gallery.map((section, index) => (
                  <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={section.image}
                      alt={section.image_alt || stripHtmlTags(section.title) || `${title} photo ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.hero_video_url && (
            <section aria-label="Project video">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <video className="w-full h-full object-cover" controls muted playsInline preload="metadata" poster={project.hero_image_url || undefined}>
                  <source src={project.hero_video_url} type="video/mp4" />
                </video>
              </div>
            </section>
          )}
        </article>

        {/* Sidebar facts + CTA */}
        <aside className="flex flex-col gap-6 lg:sticky lg:top-24 self-start">
          <dl className="bg-slate-50 border border-gray-200 rounded-xl p-6 grid grid-cols-1 gap-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{fact.label}</dt>
                <dd className="text-base text-black mt-0.5">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="bg-black text-white rounded-xl p-6">
            <h2 className="text-lg font-bold mb-2">Planning something similar?</h2>
            <p className="text-sm text-gray-300 mb-5">Tell us about your project and we&apos;ll share relevant references.</p>
            <Link
              href={discussHref}
              className="block text-center bg-white text-black px-5 py-3 rounded-md font-semibold hover:bg-offwhite transition-colors"
            >
              Discuss a similar project
            </Link>
          </div>
        </aside>
      </div>

      <section className="py-10 bg-offwhite">
        <div className="container mx-auto px-5 lg:px-8 max-w-6xl">
          <Link href="/our-work" className="inline-flex items-center font-semibold text-black hover:text-gray-700">
            &larr; Back to all projects
          </Link>
        </div>
      </section>
    </main>
  )
}
