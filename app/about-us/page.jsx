import AboutLayout from "./AboutLayout";

export const metadata = {
  title:
    "About Us - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
  description:
    "Capital Associated Building Contracting LLC is a leading construction company in Dubai, UAE, dedicated to building your vision and crafting tomorrow.",
  keywords: [
    "Construction Company Dubai",
    "Building Contracting UAE",
    "General Contracting",
    "Fit-Out Company Dubai",
    "Infrastructure Development UAE",
    "Residential Construction Dubai",
    "Commercial Construction UAE",
    "Project Management Dubai",
  ],
  alternates: {
    canonical: "https://www.capitalassociated.com/about-us",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "About Us - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Capital Associated Building Contracting LLC is a leading construction company in Dubai, UAE, dedicated to building your vision and crafting tomorrow.",
    url: "https://www.capitalassociated.com/about-us",
    type: "website",
    images: [
      {
        url: "/about/about1.jpg",
        width: 1200,
        height: 600,
        alt: "Capital Associated Building Contracting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Us - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Capital Associated Building Contracting LLC is a leading construction company in Dubai, UAE.",
    images: ["/about/about1.jpg"],
  },
};

export default function AboutUs() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.capitalassociated.com/about-us#webpage",
        "url": "https://www.capitalassociated.com/about-us",
        "name": "About Us | Capital Associated Building Contracting",
        "isPartOf": {
          "@id": "https://www.capitalassociated.com/#website"
        },
        "mainEntity": {
          "@id": "https://www.capitalassociated.com/#organization"
        },
        "breadcrumb": {
          "@id": "https://www.capitalassociated.com/about-us#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.capitalassociated.com/about-us#breadcrumb",
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
            "name": "About Us",
            "item": "https://www.capitalassociated.com/about-us"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <AboutLayout />
    </>
  );
}
