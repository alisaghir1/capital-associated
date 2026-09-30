import Link from 'next/link';
import Image from 'next/image';
import ServiceGroups from '../components/ServiceGroups';

// Force SSR
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function getServices() {
  try {
    const url = `${SUPABASE_URL}/rest/v1/services?select=id,title,slug,hero_image_url,short_description,published,featured,sort_order&published=eq.true&order=created_at.desc`;
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

  const servicesIndexJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.capitalassociated.com/services#webpage",
        "url": "https://www.capitalassociated.com/services",
        "name": "Our Services | Capital Associated Building Contracting",
        "isPartOf": { "@id": "https://www.capitalassociated.com/#website" },
        "breadcrumb": { "@id": "https://www.capitalassociated.com/services#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.capitalassociated.com/services#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.capitalassociated.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.capitalassociated.com/services" }
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
            <p className="text-base md:text-lg xl:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              Full-scope construction and fit-out under one contract, across residential, commercial, hospitality and high-rise projects in the UAE. Browse by what you need below.
            </p>
          </div>
        </section>

        {/* Services grouped by need */}
        <section className="bg-offwhite pb-20 pt-16">
          <ServiceGroups services={services} />

          <div className="container mx-auto px-5 xl:px-20 pt-16 text-center">
            <p className="text-base md:text-lg text-gray-700">
              Not sure which service fits?{' '}
              <Link href="/contact-us" className="underline font-semibold text-black hover:text-gray-700">
                Discuss your project
              </Link>{' '}
              and we&apos;ll recommend the right delivery model.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

