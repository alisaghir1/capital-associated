import OurWorkLayout from "./OurWorkLayout";

export const metadata = {
  title:
    "Our Projects | Capital Associated Building Contracting \u2014 Dubai",
  description:
    "100+ completed construction projects across Dubai, Abu Dhabi and Sharjah. Villas, commercial builds, restaurants and luxury fit-outs.",
  keywords: [
    "construction projects Dubai",
    "completed projects Dubai",
    "villa construction portfolio",
    "commercial construction Dubai",
    "restaurant construction UAE",
    "Capital Associated projects",
    "building contractor portfolio Dubai",
  ],
  alternates: {
    canonical: "https://www.capitalassociated.com/our-work",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Our Projects | Capital Associated Building Contracting \u2014 Dubai",
    description:
      "100+ completed construction projects across Dubai, Abu Dhabi and Sharjah. Villas, commercial builds, restaurants and luxury fit-outs.",
    url: "https://www.capitalassociated.com/our-work",
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
    title:
      "Our Projects | Capital Associated Building Contracting \u2014 Dubai",
    description:
      "100+ completed construction projects across Dubai, Abu Dhabi and Sharjah. Villas, commercial builds, restaurants and luxury fit-outs.",
    images: ["/main.jpg"],
  },
};

export default function OurWork() {
  const ourWorkJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.capitalassociated.com/our-work#webpage",
        "url": "https://www.capitalassociated.com/our-work",
        "name": "Our Projects | Capital Associated Building Contracting",
        "isPartOf": {
          "@id": "https://www.capitalassociated.com/#website"
        },
        "breadcrumb": {
          "@id": "https://www.capitalassociated.com/our-work#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.capitalassociated.com/our-work#breadcrumb",
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
            "name": "Projects",
            "item": "https://www.capitalassociated.com/our-work"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ourWorkJsonLd) }}
      />
      <OurWorkLayout />
    </>
  );
}
