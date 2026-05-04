import CareerLayout from "./CareerLayout";

export const metadata = {
  title: "Careers | Capital Associated Building Contracting LLC \u2014 Dubai",
  description:
    "Construction careers at Capital Associated in Dubai. We hire project managers, site engineers and skilled tradespeople across the UAE.",
  keywords: [
    "construction jobs Dubai",
    "careers building contracting Dubai",
    "project manager jobs UAE",
    "site engineer jobs Dubai",
    "construction careers UAE",
    "Capital Associated careers",
    "contractor jobs Dubai",
  ],
  alternates: {
    canonical: "https://www.capitalassociated.com/career",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Careers | Capital Associated Building Contracting LLC \u2014 Dubai",
    description:
      "Construction careers at Capital Associated in Dubai. We hire project managers, site engineers and skilled tradespeople across the UAE.",
    url: "https://www.capitalassociated.com/career",
    type: "website",
    images: [
      {
        url: "/about/about3.jpg",
        width: 1200,
        height: 600,
        alt: "Capital Associated Building Contracting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Capital Associated Building Contracting LLC \u2014 Dubai",
    description:
      "Construction careers at Capital Associated in Dubai. We hire project managers, site engineers and skilled tradespeople across the UAE.",
    images: ["/about/about3.jpg"],
  },
};

export default function Career() {
  const careerIndexJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.capitalassociated.com/career#webpage",
        "url": "https://www.capitalassociated.com/career",
        "name": "Careers | Capital Associated Building Contracting",
        "isPartOf": {
          "@id": "https://www.capitalassociated.com/#website"
        },
        "breadcrumb": {
          "@id": "https://www.capitalassociated.com/career#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.capitalassociated.com/career#breadcrumb",
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
            "name": "Careers",
            "item": "https://www.capitalassociated.com/career"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careerIndexJsonLd) }}
      />
      <CareerLayout />
    </>
  );
}
