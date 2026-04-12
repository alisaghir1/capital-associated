import ContactUsLayout from "./ContactUsLayout";

export const metadata = {
  title:
    "Contact Us - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
  description:
    "Get in touch with Capital Associated Building Contracting. Contact us for construction, fit-out, and building project inquiries in Dubai and the UAE.",
  keywords: [
    "Contact Construction Company Dubai",
    "Construction Inquiry UAE",
    "Building Contracting UAE",
    "Fit-Out Company Dubai",
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
      "Contact Us - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Get in touch with Capital Associated Building Contracting. Contact us for construction, fit-out, and building project inquiries in Dubai and the UAE.",
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
      "Contact Us - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Get in touch with Capital Associated Building Contracting for your construction needs in Dubai.",
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
