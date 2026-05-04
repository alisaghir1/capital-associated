import OurTeamLayout from "./OurTeamLayout";

export const metadata = {
  title: "Our Team | Capital Associated Building Contracting LLC",
  description:
    "Meet the engineers, project managers and site teams delivering construction projects across Dubai, Abu Dhabi and Sharjah.",
  keywords: [
    "Capital Associated team",
    "construction team Dubai",
    "project managers Dubai",
    "building contractor team UAE",
    "construction engineers Dubai",
    "site engineers UAE",
    "Capital Associated Building Contracting",
  ],
  alternates: {
    canonical: "https://www.capitalassociated.com/our-team",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Our Team | Capital Associated Building Contracting LLC",
    description:
      "Meet the engineers, project managers and site teams delivering construction projects across Dubai, Abu Dhabi and Sharjah.",
    url: "https://www.capitalassociated.com/our-team",
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
    title: "Our Team | Capital Associated Building Contracting LLC",
    description:
      "Meet the engineers, project managers and site teams delivering construction projects across Dubai, Abu Dhabi and Sharjah.",
    images: ["/main.jpg"],
  },
};

export default function OurTeam() {
  const teamIndexJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.capitalassociated.com/our-team#webpage",
        "url": "https://www.capitalassociated.com/our-team",
        "name": "Our Team | Capital Associated Building Contracting",
        "isPartOf": {
          "@id": "https://www.capitalassociated.com/#website"
        },
        "breadcrumb": {
          "@id": "https://www.capitalassociated.com/our-team#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.capitalassociated.com/our-team#breadcrumb",
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
            "name": "Team",
            "item": "https://www.capitalassociated.com/our-team"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamIndexJsonLd) }}
      />
      <OurTeamLayout />
    </>
  );
}
