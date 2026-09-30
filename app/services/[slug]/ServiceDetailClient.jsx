'use client'
import Link from 'next/link'
import Image from 'next/image'
import ProjectCard from '../../components/ProjectCard'
import { getServiceMeta, SERVICE_FAQS } from '../../utils/serviceGroups'

function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').trim()
}

export default function ServiceDetailClient({ service, relatedProjects = [] }) {
  const title = stripHtml(service.title)
  const { summary, sectors } = getServiceMeta(service)

  let sections = []
  if (service.sections) {
    try {
      sections = typeof service.sections === 'string' ? JSON.parse(service.sections) : service.sections
    } catch (e) {
      sections = []
    }
  }
  const steps = sections.filter((s) => s.title || s.content)

  const enquiryHref = `/contact-us?project=${encodeURIComponent(title)}`

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <header className="relative w-full min-h-[560px] lg:min-h-[65vh]">
        <div className="absolute inset-0">
          <Image
            src={service.hero_image_url || '/main.jpg'}
            alt={service.hero_image_alt || title}
            fill
            style={{ objectFit: 'cover' }}
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/80" />
        {/* Light band keeps the dark logo/nav legible over dark hero photos */}
        <div className="absolute inset-x-0 top-0 h-44 xl:h-48 bg-gradient-to-b from-white/85 via-white/50 to-transparent" />
        {/* Navbar is absolutely positioned over the hero: ~150px tall on mobile (topbar + logo), ~170px on xl */}
        <div className="relative z-10 flex flex-col justify-end w-full min-h-[560px] lg:min-h-[65vh] max-w-6xl mx-auto px-6 lg:px-8 pt-44 xl:pt-48 pb-12">
          <nav className="mb-4 text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">{title}</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl text-balance">
            {title}
          </h1>
          {summary && (
            <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed mt-3 line-clamp-3">{summary}</p>
          )}
          <Link
            href={enquiryHref}
            className="mt-6 inline-flex w-fit items-center bg-white text-black px-7 py-3 rounded-md font-semibold hover:bg-offwhite transition-colors"
          >
            Send enquiry
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-5 lg:px-8 max-w-6xl py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main column */}
        <div className="lg:col-span-2 flex flex-col gap-14">
          {/* Scope */}
          {service.description && (
            <section aria-labelledby="scope">
              <h2 id="scope" className="text-2xl font-bold text-black mb-4">Scope</h2>
              <div
                className="rich-text-content text-gray-700"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </section>
          )}

          {/* Delivery steps */}
          {steps.length > 0 && (
            <section aria-labelledby="steps">
              <h2 id="steps" className="text-2xl font-bold text-black mb-6">How We Deliver</h2>
              <ol className="flex flex-col gap-6">
                {steps.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      {step.title && (
                        <h3 className="text-lg font-semibold text-black mb-1">{stripHtml(step.title)}</h3>
                      )}
                      {step.content && (
                        <div
                          className="rich-text-content text-gray-700 text-sm md:text-base"
                          dangerouslySetInnerHTML={{ __html: step.content }}
                        />
                      )}
                      {step.image && (
                        <div className="relative aspect-[16/9] w-full mt-4 rounded-lg overflow-hidden">
                          <Image
                            src={step.image}
                            alt={step.image_alt || stripHtml(step.title) || `${title} step ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* FAQs */}
          <section aria-labelledby="faqs">
            <h2 id="faqs" className="text-2xl font-bold text-black mb-4">FAQs</h2>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {SERVICE_FAQS.map((faq) => (
                <details key={faq.q} className="group py-4">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-black">
                    <span>{faq.q}</span>
                    <span className="transition-transform duration-200 group-open:rotate-180">&#9662;</span>
                  </summary>
                  <p className="mt-3 text-gray-700 text-sm md:text-base">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-8 lg:sticky lg:top-24 self-start">
          {sectors.length > 0 && (
            <div className="bg-slate-50 border border-gray-200 rounded-xl p-6">
              <h2 className="text-base font-bold text-black mb-3">Sectors</h2>
              <ul className="flex flex-wrap gap-2">
                {sectors.map((sector) => (
                  <li key={sector} className="text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-full px-3 py-1">
                    {sector}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="bg-black text-white rounded-xl p-6">
            <h2 className="text-lg font-bold mb-2">Discuss your project</h2>
            <p className="text-sm text-gray-300 mb-5">Free initial consultation. We respond within 24–48 hours.</p>
            <Link
              href={enquiryHref}
              className="block text-center bg-white text-black px-5 py-3 rounded-md font-semibold hover:bg-offwhite transition-colors"
            >
              Send enquiry
            </Link>
          </div>
        </aside>
      </div>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="bg-offwhite py-16" aria-labelledby="related">
          <div className="container mx-auto px-5 lg:px-8 max-w-6xl">
            <div className="flex items-end justify-between mb-8">
              <h2 id="related" className="text-2xl font-bold text-black">Related Projects</h2>
              <Link href="/our-work" className="text-sm font-semibold underline hover:text-gray-700">
                View all projects
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-10">
        <div className="container mx-auto px-5 lg:px-8 max-w-6xl">
          <Link href="/services" className="inline-flex items-center font-semibold text-black hover:text-gray-700">
            &larr; Back to all services
          </Link>
        </div>
      </section>
    </main>
  )
}
