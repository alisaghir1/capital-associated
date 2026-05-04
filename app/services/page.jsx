import Link from 'next/link';
import Image from 'next/image';

// Force SSR
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function getServices() {
  try {
    // Match the query from fetchServicesOptimized - using created_at order
    const url = `${SUPABASE_URL}/rest/v1/services?select=id,title,slug,hero_image_url,published,featured,sort_order&published=eq.true&order=created_at.desc&limit=9`;
    console.log('[SSR] Fetching services from:', url);
    
    const res = await fetch(url, {
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
      },
      cache: 'no-store',
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error('[SSR] Services fetch error:', res.status, errorText);
      return [];
    }
    
    const data = await res.json();
    console.log('[SSR] Fetched services count:', data?.length || 0);
    return data;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
}

export const metadata = {
  title: 'Construction Services in Dubai | Capital Associated Building Contracting',
  description: 'General contracting, interior fit-out, renovation, design-build and construction management services across Dubai, Abu Dhabi and Sharjah.',
  keywords: [
    'construction services Dubai',
    'general contracting Dubai',
    'interior fit-out Dubai',
    'renovation company Dubai',
    'design build UAE',
    'construction management Dubai',
    'building contractor services UAE',
    'Capital Associated services',
  ],
  alternates: {
    canonical: 'https://www.capitalassociated.com/services',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Construction Services in Dubai | Capital Associated Building Contracting',
    description: 'General contracting, interior fit-out, renovation, design-build and construction management services across Dubai, Abu Dhabi and Sharjah.',
    url: 'https://www.capitalassociated.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Services in Dubai | Capital Associated Building Contracting',
    description: 'General contracting, interior fit-out, renovation, design-build and construction management services across Dubai, Abu Dhabi and Sharjah.',
  },
};

export default async function ServicesListPage() {
  const services = await getServices();

  // Service Card Component matching the OurServices style
  const ServiceCard = ({ service, index }) => {
    const isFirstRow = index < 3;
    const isSecondRow = index >= 3 && index < 6;
    const isThirdRow = index >= 6;

    // Different layout configurations based on row
    let topLeftClass, topRightClass, bottomLeftClass, bottomRightClass;
    
    if (isFirstRow) {
      topLeftClass = "bg-transparent transition-all duration-500 ease-in-out text-center flex justify-center items-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer text-sm lg:text-base font-medium px-2";
      topRightClass = "bg-black border transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
      bottomLeftClass = "bg-black rounded-es-full transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
      bottomRightClass = "bg-black rounded-ee-full transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
    } else if (isSecondRow) {
      topLeftClass = "bg-black rounded-ss-full flex justify-center text-center items-center border transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
      topRightClass = "bg-black rounded-se-full transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
      bottomLeftClass = "bg-transparent border border-black flex justify-center items-center text-center group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-500 ease-in-out text-sm lg:text-base font-medium px-2";
      bottomRightClass = "bg-black transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
    } else {
      topLeftClass = "bg-black rounded-ss-full flex justify-center text-center items-center border transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
      topRightClass = "bg-black rounded-se-full transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
      bottomLeftClass = "bg-black transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-40 cursor-pointer";
      bottomRightClass = "bg-transparent flex justify-center items-center text-center border border-black group-hover:bg-black group-hover:text-white cursor-pointer transition-all duration-500 ease-in-out text-sm lg:text-base font-medium px-2";
    }

    const bgImage = service.hero_image_url || '/main.jpg';

    return (
      <Link href={`/services/${service.slug}`}>
        <div className="relative group h-[20rem] w-full gap-1">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
            {/* Top-left part */}
            <div
              className={topLeftClass}
              style={{
                backgroundImage: !isFirstRow ? `url('${bgImage}')` : undefined,
                backgroundSize: "200% 200%",
                backgroundPosition: "0% 0%",
                backgroundRepeat: "no-repeat",
              }}
            >
              {isFirstRow && stripHtml(service.title)}
            </div>
            {/* Top-right part */}
            <div
              className={topRightClass}
              style={{
                backgroundImage: `url('${bgImage}')`,
                backgroundSize: "200% 200%",
                backgroundPosition: "100% 0%",
                backgroundRepeat: "no-repeat",
              }}
            />
            {/* Bottom-left part */}
            <div
              className={bottomLeftClass}
              style={{
                backgroundImage: !isSecondRow ? `url('${bgImage}')` : undefined,
                backgroundSize: "200% 200%",
                backgroundPosition: "0% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              {isSecondRow && stripHtml(service.title)}
            </div>
            {/* Bottom-right part */}
            <div
              className={bottomRightClass}
              style={{
                backgroundImage: !isThirdRow ? `url('${bgImage}')` : undefined,
                backgroundSize: "200% 200%",
                backgroundPosition: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              {isThirdRow && stripHtml(service.title)}
            </div>
          </div>
        </div>
      </Link>
    );
  };

  const servicesIndexJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.capitalassociated.com/services#webpage",
        "url": "https://www.capitalassociated.com/services",
        "name": "Our Services | Capital Associated Building Contracting",
        "isPartOf": {
          "@id": "https://www.capitalassociated.com/#website"
        },
        "breadcrumb": {
          "@id": "https://www.capitalassociated.com/services#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.capitalassociated.com/services#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.capitalassociated.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.capitalassociated.com/services"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesIndexJsonLd) }}
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative w-full h-[70vh] min-h-[400px] max-h-[700px] lg:max-h-[800px]">
          <div className="absolute inset-0">
            <Image
              src="/main.jpg"
              alt="Services Background"
              fill
              style={{ objectFit: 'cover' }}
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center px-8 pt-24 xl:pt-28">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
              Construction Services Across Dubai, Abu Dhabi &amp; Sharjah
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black mt-5">
              General Contracting, Fit-Out &amp; Specialist Delivery
            </p>
            <p className="absolute bottom-10 left-10 text-white">
              Home <span className="text-black">/ Services</span>
            </p>
          </div>
        </div>

        {/* Intro */}
        <section className="bg-offwhite px-5 xl:px-20 pt-20">
          <div className="container mx-auto">
            <p className="text-base md:text-lg xl:text-xl text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
              Capital Associated Building Contracting LLC provides full-scope construction and fit-out services across the UAE. From new-build general contracting and shell-and-core delivery to interior fit-out, renovation, and design-build &mdash; we manage every stage of the construction lifecycle under one contract. Our services cover residential villas, commercial buildings, high-rise towers, restaurants, and mixed-use developments. Over 100 projects completed. More than 750,000 sq ft delivered.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-offwhite pb-20">
          {/* Header */}
          <div className="flex flex-col justify-center items-center gap-5 py-20">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
              What We Offer
            </h2>
            <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl text-center px-4">
              General Contracting, Fit-Out, Renovation &amp; Specialist Delivery Across the UAE
            </p>
          </div>

          {services.length === 0 ? (
            <div className="container mx-auto text-center py-20">
              <p className="text-gray-500 text-xl">No services available at the moment.</p>
            </div>
          ) : (
            <>
              {/* First Row - services 0-2 */}
              <section className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 pb-10 border-b border-b-black">
                {services.slice(0, 3).map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </section>

              {/* Second Row - services 3-5 */}
              {services.length > 3 && (
                <section className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 py-10 border-b border-b-black">
                  {services.slice(3, 6).map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index + 3} />
                  ))}
                </section>
              )}

              {/* Third Row - services 6-8 */}
              {services.length > 6 && (
                <section className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 py-10 border-b border-b-black">
                  {services.slice(6, 9).map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index + 6} />
                  ))}
                </section>
              )}

              {/* Additional rows for services beyond 9 */}
              {services.length > 9 && (
                <section className="container mx-auto gap-20 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 px-10 py-10">
                  {services.slice(9).map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={(index % 3)} />
                  ))}
                </section>
              )}

              {/* Closing summary */}
              <div className="container mx-auto px-10 pt-16 max-w-5xl">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  Our core services include general contracting for villa, commercial, and high-rise construction; construction management for clients who need professional oversight of their build programme; design-build for turnkey delivery from concept to handover; interior fit-out for residential and commercial spaces; renovation and remodeling for property upgrades across the UAE; pre-construction services including feasibility, cost planning, and permit management; value engineering to reduce costs without compromising quality; specialty construction for complex technical builds; and green building solutions for energy-efficient and sustainable construction.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Each service is available independently or as part of an integrated delivery model.{' '}
                  <Link href="/contact-us" className="underline font-semibold text-black hover:text-gray-700">
                    Contact us
                  </Link>{' '}
                  to discuss your project scope.
                </p>
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
}
