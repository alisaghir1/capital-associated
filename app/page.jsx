import { createServerSupabaseClient } from "@/lib/supabase-server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import HeroAnimation from "./components/HeroAnimation";
import About from "./components/About";
import OurProjects from "./components/OurProjects";
import OurServices from "./components/OurServices";
import OurTeam from "./components/OurTeam";
import Blogs from "./components/Blogs";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";

export const metadata = {
  title: "Capital Associated | Elite Construction Company & Fit-Out in Dubai",
  description:
    "Leading construction company in Dubai offering design-build, interior fit-out, engineering, and project management solutions across residential & commercial sectors.",
  keywords: [
    "Construction Company Dubai",
    "Building Contracting UAE",
    "Interior Fit-Out Dubai",
    "Design Build UAE",
    "General Contractor Dubai",
    "Residential Construction Dubai",
    "Commercial Construction UAE",
  ],
  alternates: {
    canonical: "https://www.capitalassociated.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Leading construction company in Dubai offering design-build, interior fit-out, engineering, and project management solutions.",
    url: "https://www.capitalassociated.com",
    type: "website",
    images: [
      {
        url: "/main.jpg",
        width: 1200,
        height: 600,
        alt: "Capital Associated Building Contracting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Leading construction company in Dubai offering design-build, interior fit-out, engineering, and project management solutions.",
    images: ["/main.jpg"],
  },
};

// Fallback data used if Supabase is unreachable
const fallbackServices = [
  { id: 1, title: "General Contracting", slug: "general-contracting", hero_image_url: "/services/s1.jpg", published: true, sort_order: 1 },
  { id: 2, title: "Construction Management", slug: "construction-management", hero_image_url: "/services/s2.jpg", published: true, sort_order: 2 },
  { id: 3, title: "Design Build", slug: "design-build", hero_image_url: "/services/s3.jpg", published: true, sort_order: 3 },
  { id: 4, title: "Renovation & Remodeling", slug: "renovation-and-remodeling", hero_image_url: "/services/s4.jpg", published: true, sort_order: 4 },
  { id: 5, title: "Pre-Construction Services", slug: "pre-construction-services", hero_image_url: "/services/s5.jpg", published: true, sort_order: 5 },
  { id: 6, title: "Value Engineering", slug: "value-engineering", hero_image_url: "/services/s6.jpg", published: true, sort_order: 6 },
  { id: 7, title: "Green Building Solutions", slug: "green-building-solutions", hero_image_url: "/services/s7.jpg", published: true, sort_order: 7 },
  { id: 8, title: "Specialty Construction", slug: "specialty-construction", hero_image_url: "/services/s8.jpg", published: true, sort_order: 8 },
  { id: 9, title: "Interior Fit-Out", slug: "interior-fit-out", hero_image_url: "/services/s9.jpg", published: true, sort_order: 9 },
];

const fallbackProjects = [
  { id: 1, title: "Meat Moot", slug: "meatmoot", location: "City Walk, United Arab Emirates", hero_image_url: "/projects/meatmoot.jpg", featured: true, published: true, sort_order: 1 },
  { id: 2, title: "Tilal Al Ghaf Interior", slug: "Tilal-Al-Ghaf-Interior", location: "Dubai, United Arab Emirates", hero_image_url: "/services/interiorFit/s8.jpg", featured: true, published: true, sort_order: 2 },
  { id: 3, title: "Meat Moot Khawaneej", slug: "meatmoot-khawaneej", location: "Al Khawaneej, United Arab Emirates", hero_image_url: "/projects/mkhm.jpg", featured: true, published: true, sort_order: 3 },
  { id: 4, title: "Meat Moot JBR", slug: "meatmoot-jbr", location: "Jumeirah Beach Resort, United Arab Emirates", hero_image_url: "/projects/jbrm.jpg", featured: true, published: true, sort_order: 4 },
  { id: 5, title: "Tilal Al Ghaf Landscape", slug: "Tilal-Al-Ghaf-Landscape", location: "Dubai, United Arab Emirates", hero_image_url: "/projects/villa.jpg", featured: true, published: true, sort_order: 5 },
  { id: 6, title: "Elite Villa Construction", slug: "elite-villa-construction", location: "Dubai Hills, United Arab Emirates", hero_image_url: "/projects/dh1.png", featured: true, published: true, sort_order: 6 },
  { id: 7, title: "Jumeirah Villa Construction", slug: "Jumeirah-villa-construction", location: "Jumeirah, United Arab Emirates", hero_image_url: "/projects/jv1.png", featured: true, published: true, sort_order: 7 },
  { id: 8, title: "Landscape and Exterior Construction Dubai", slug: "Landscape-and-Exterior-Construction-Dubai", location: "Dubai, United Arab Emirates", hero_image_url: "/projects/hv1.png", featured: true, published: true, sort_order: 8 },
];

const fallbackTeam = [
  { id: 1, image_url: "/team/t4.jpg", name: "RAMAZ IZZA", position: "Managing Director", slug: "ramaz-izza", published: true, sort_order: 1 },
  { id: 2, image_url: "/team/t1.jpg", name: "MICHAEL REYES", position: "Document Control", slug: "michael-reyes", published: true, sort_order: 2 },
  { id: 3, image_url: "/team/t2.jpg", name: "LAKSHMI MOHAN", position: "Estimation Engineer", slug: "lakshmi-mohan", published: true, sort_order: 3 },
];

async function getHomePageData() {
  try {
    const supabase = createServerSupabaseClient();

    const [servicesRes, projectsRes, teamRes, blogsRes, settingsRes] = await Promise.all([
      supabase.from("services").select("id, title, slug, hero_image_url, published, featured, sort_order").eq("published", true).order("created_at", { ascending: false }).limit(9),
      supabase.from("projects").select("id, title, slug, location, hero_image_url, featured, published, sort_order").eq("published", true).order("created_at", { ascending: false }).limit(8),
      supabase.from("team").select("*").eq("published", true).order("sort_order", { ascending: true }),
      supabase.from("blogs").select("id, title, slug, hero_image_url, excerpt, author, created_at, published, featured").eq("published", true).order("created_at", { ascending: false }).limit(6),
      // Use service-role client so site_metadata is always readable on the
      // server even when RLS is enabled.
      supabaseAdmin.from("site_metadata").select("*"),
    ]);

    const settings = {};
    settingsRes.data?.forEach((item) => {
      settings[item.key] = item.value;
    });

    return {
      services: servicesRes.data?.length > 0 ? servicesRes.data : fallbackServices,
      projects: projectsRes.data?.length > 0 ? projectsRes.data : fallbackProjects,
      team: teamRes.data?.length > 0 ? teamRes.data : fallbackTeam,
      blogs: blogsRes.data || [],
      settings,
    };
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return {
      services: fallbackServices,
      projects: fallbackProjects,
      team: fallbackTeam,
      blogs: [],
      settings: {},
    };
  }
}

export default async function Home() {
  const { services, projects, team, blogs, settings } = await getHomePageData();

  const homepageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.capitalassociated.com/#website",
        "url": "https://www.capitalassociated.com/",
        "name": "Capital Associated Building Contracting",
        "description": "Elite Construction Company & Fit-Out in Dubai",
        "publisher": {
          "@id": "https://www.capitalassociated.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.capitalassociated.com/#organization",
        "name": "Capital Associated Building Contracting",
        "url": "https://www.capitalassociated.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.capitalassociated.com/logoLight.svg"
        },
        "email": "hello@capitalassociated.com",
        "telephone": "+971528111106",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        },
        "sameAs": [
          "https://www.instagram.com/capital.associated/",
          "https://www.facebook.com/"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.capitalassociated.com/#webpage",
        "url": "https://www.capitalassociated.com/",
        "name": "Capital Associated | Elite Construction Company & Fit-Out in Dubai",
        "isPartOf": {
          "@id": "https://www.capitalassociated.com/#website"
        },
        "about": {
          "@id": "https://www.capitalassociated.com/#organization"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      <Navbar settings={settings} />
      <NavbarMobile settings={settings} />
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[85vh] min-h-[500px] max-h-[900px] lg:max-h-[1000px] overflow-x-hidden flex items-center justify-center pt-16">
          <div className="absolute inset-0">
            <img
              src="/main.jpg"
              alt="Capital Associated Building Contracting - Leading Construction Company in Dubai"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
          <div className="relative z-10 px-8 w-full flex justify-center">
            <HeroAnimation className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold">
                Leading Contracting Company in Dubai, UAE
              </h1>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-black mt-3">
                Building Visions, Defining Skylines
              </p>
            </HeroAnimation>
          </div>
        </section>

        {/* Content Sections */}
        <About />
        <OurProjects projects={projects} />
        <OurServices services={services} />
        <OurTeam team={team} />
        <Blogs blogs={blogs} />
        <Consultation />
      </main>
      <Footer settings={settings} />
    </>
  );
}
