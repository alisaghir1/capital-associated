import Link from 'next/link';
import Image from 'next/image';
import PublicLayout from '../PublicLayout';
import VidioComponent from '../components/VidioComponent';

// Use ISR with 60 second revalidation for optimal performance
export const revalidate = 60;

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function getProjects() {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/projects?select=id,title,slug,location,hero_image_url,featured,published,sort_order&published=eq.true&order=created_at.desc`,
      {
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
        },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

// Fallback static data
const staticProjects = [
  { id: 1, title: "Meat Moot", slug: "meatmoot", location: "City Walk, United Arab Emirates", hero_image_url: "/projects/meatmoot.jpg" },
  { id: 2, title: "Tilal Al Ghaf Interior", slug: "Tilal-Al-Ghaf-Interior", location: "Dubai, United Arab Emirates", hero_image_url: "/services/interiorFit/s8.jpg" },
  { id: 3, title: "Meat Moot Khawaneej", slug: "meatmoot-khawaneej", location: "Al Khawaneej, United Arab Emirates", hero_image_url: "/projects/mkhm.jpg" },
  { id: 4, title: "Meat Moot JBR", slug: "meatmoot-jbr", location: "Jumeirah Beach Resort, United Arab Emirates", hero_image_url: "/projects/jbrm.jpg" },
  { id: 5, title: "Tilal Al Ghaf Landscape", slug: "Tilal-Al-Ghaf-Landscape", location: "Dubai, United Arab Emirates", hero_image_url: "/projects/villa.jpg" },
  { id: 6, title: "Elite Villa Construction", slug: "elite-villa-construction", location: "Dubai Hills, United Arab Emirates", hero_image_url: "/projects/dh1.png" },
  { id: 7, title: "Jumeirah Villa Construction", slug: "Jumeirah-villa-construction", location: "Jumeirah, United Arab Emirates", hero_image_url: "/projects/jv1.png" },
  { id: 8, title: "Landscape and Exterior Construction Dubai", slug: "Landscape-and-Exterior-Construction-Dubai", location: "Dubai, United Arab Emirates", hero_image_url: "/projects/hv1.png" }
];

function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
}

export async function generateMetadata() {
  return {
    title: "Our Work - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description: "Discover the remarkable projects completed by Capital Associated Building Contracting. From residential buildings to large-scale commercial developments, our work showcases our expertise, attention to detail, and commitment to quality.",
    icons: { icon: "/logoLight.svg" },
    keywords: ["Construction Company Dubai", "Building Contracting UAE", "General Contracting", "Fit-Out Company Dubai", "Luxury Villa Construction UAE", "Project Management Dubai", "Interior Fit-Out Solutions"],
    openGraph: {
      title: "Our Work - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
      description: "Discover the remarkable projects completed by Capital Associated Building Contracting.",
      url: "https://capitalassociated.com/our-work",
      type: "website",
      images: [{ url: "/main.jpg", width: 1200, height: 600, alt: "Capital Associated Building Contracting" }],
    },
  };
}

export default async function OurWorkPage() {
  let projects = await getProjects();
  
  // Use fallback if no data from API
  if (!projects || projects.length === 0) {
    projects = staticProjects;
  }

  // Layout variations for project cards
  const getLayoutVariation = (index) => {
    const variations = [
      { alignment: 'items-end pb-4', rounded: 'rounded-tl-full' },
      { alignment: 'items-start pt-4', rounded: 'rounded-bl-full' },
      { alignment: 'items-end pb-4', rounded: 'rounded-tr-full' },
      { alignment: 'items-end pb-4', rounded: 'rounded-tr-full' },
      { alignment: 'items-end pb-4', rounded: 'rounded-tl-full' },
      { alignment: 'items-start pt-4', rounded: 'rounded-br-full' },
      { alignment: 'items-end pb-4', rounded: 'rounded-tl-full' },
      { alignment: 'items-start pt-4', rounded: 'rounded-br-full' },
    ];
    return variations[index % variations.length];
  };

  return (
    <PublicLayout>
      <main className="min-h-screen">
        {/* Hero Section with high priority image */}
        <section className="relative w-full h-screen">
          <div className="absolute inset-0">
            <Image
              src="/main.jpg"
              alt="Capital Associated Construction Projects - Commercial, Residential, Industrial Development in Dubai"
              fill
              style={{ objectFit: 'cover' }}
              priority
              fetchPriority="high"
              sizes="100vw"
            />
          </div>

          {/* Hero Content - Static HTML for SEO */}
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
            <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
              Our Projects
            </h1>
            <p className="xl:text-4xl text-black md:text-2xl lg:text-3xl text-xl mt-5">
              Designing Landmarks. Defining Skylines
            </p>
            <p className="absolute bottom-10 left-10 text-white">
              Home <span className="text-black">/ Our Projects</span>
            </p>
          </div>
        </section>

        {/* Projects Grid - Static HTML */}
        <section className="grid grid-cols-2 mt-20 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 px-5 xl:mx-20 mb-20">
          {projects.map((project, index) => {
            const layout = getLayoutVariation(index);
            const projectImage = project.hero_image_url || `/projects/default-${index + 1}.jpg`;
            
            return (
              <Link key={project.id} href={`/our-work/${project.slug}`} className="block">
                <article
                  className={`relative bg-black flex transition-all duration-300 ease-in-out ${layout.alignment} justify-start h-[25rem] xl:h-[36rem] bg-cover bg-center shadow-lg text-white px-4 ${layout.rounded}`}
                  style={{ backgroundImage: `url('${projectImage}')` }}
                >
                  <div className="text-white xl:p-3 rounded-lg w-full text-start">
                    <h2 className="xl:text-lg text-md mb-2 font-semibold">
                      {stripHtml(project.title)}
                    </h2>
                    <p className="xl:text-sm text-xs">
                      {project.location || 'United Arab Emirates'}
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>

        {/* Video Component */}
        <VidioComponent />
      </main>
    </PublicLayout>
  );
}
