import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import NavbarMobile from '../components/NavbarMobile';
import Footer from '../components/Footer';
import Consultation from '../components/Consultation';

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
  title: 'Our Services | Capital Associated Building Contracting',
  description: 'Explore our comprehensive construction services including general contracting, design-build, interior fit-out, renovation, and more in Dubai and UAE.',
  openGraph: {
    title: 'Our Services | Capital Associated Building Contracting',
    description: 'Comprehensive construction and fit-out services in Dubai and UAE.',
    url: 'https://capitalassociated.com/services',
    type: 'website',
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

  return (
    <>
      <Navbar />
      <NavbarMobile />

      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative w-full h-[70vh] min-h-[500px]">
          <div className="absolute inset-0">
            <Image
              src="/main.jpg"
              alt="Services Background"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4">
              Our Services
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-black max-w-2xl">
              Leading Dubai&apos;s Property Evolution
            </p>
            <div className="absolute bottom-10 left-10 text-sm">
              <span className="text-white">Home</span>
              <span className="text-black"> / Services</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="bg-offwhite pb-20">
          {/* Header */}
          <div className="flex flex-col justify-center items-center gap-5 py-20">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
              What We Offer
            </h2>
            <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-2xl text-center px-4">
              Comprehensive construction and fit-out solutions tailored to your needs
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
            </>
          )}
        </section>
      </main>

      <Consultation />
      <Footer />
    </>
  );
}
