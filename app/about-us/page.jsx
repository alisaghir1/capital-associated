import AboutLayout from "./AboutLayout";

export const metadata = {
  title:
    "About Capital Associated Building Contracting LLC | Dubai, Est. 2021",
  description:
    "Capital Associated Building Contracting LLC \u2014 Dubai general contractor est. 2021. Luxury villas, commercial builds & civil works across UAE.",
  keywords: [
    "Capital Associated",
    "building contracting company Dubai",
    "general contractor UAE",
    "construction company Dubai",
    "villa construction Dubai",
    "commercial contractor Dubai",
    "Capital Associated Building Contracting LLC",
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
      "About Capital Associated Building Contracting LLC | Dubai, Est. 2021",
    description:
      "Capital Associated Building Contracting LLC \u2014 Dubai general contractor est. 2021. Luxury villas, commercial builds & civil works across UAE.",
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
      "About Capital Associated Building Contracting LLC | Dubai, Est. 2021",
    description:
      "Capital Associated Building Contracting LLC \u2014 Dubai general contractor est. 2021. Luxury villas, commercial builds & civil works across UAE.",
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
