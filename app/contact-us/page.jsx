import ContactUsLayout from "./ContactUsLayout";

export const metadata = {
  title:
    "Contact Us | Capital Associated Building Contracting \u2014 Dubai, UAE",
  description:
    "Get a free consultation for villa construction, commercial builds or general contracting in Dubai. Call +971 528111106 or fill the form.",
  keywords: [
    "contact contractor Dubai",
    "construction company contact Dubai",
    "get quote contractor UAE",
    "free consultation building contractor",
    "Capital Associated contact",
    "construction inquiry Dubai",
    "contractor quote Dubai",
  ],
  alternates: {
    canonical: "https://www.capitalassociated.com/contact-us",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Contact Us | Capital Associated Building Contracting \u2014 Dubai, UAE",
    description:
      "Get a free consultation for villa construction, commercial builds or general contracting in Dubai. Call +971 528111106 or fill the form.",
    url: "https://www.capitalassociated.com/contact-us",
    type: "website",
    images: [
      {
        url: "/about/about4.jpg",
        width: 1200,
        height: 600,
        alt: "Capital Associated Building Contracting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Us | Capital Associated Building Contracting \u2014 Dubai, UAE",
    description:
      "Get a free consultation for villa construction, commercial builds or general contracting in Dubai. Call +971 528111106 or fill the form.",
    images: ["/about/about4.jpg"],
  },
};

export default function ContactUs() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.capitalassociated.com/contact-us#webpage",
        "url": "https://www.capitalassociated.com/contact-us",
        "name": "Contact Us | Capital Associated Building Contracting",
        "isPartOf": {
          "@id": "https://www.capitalassociated.com/#website"
        },
        "breadcrumb": {
          "@id": "https://www.capitalassociated.com/contact-us#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.capitalassociated.com/contact-us#breadcrumb",
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
            "name": "Contact Us",
            "item": "https://www.capitalassociated.com/contact-us"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactUsLayout />
    </>
  );
}
