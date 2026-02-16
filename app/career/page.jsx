import CareerLayout from "./CareerLayout";

export const metadata = {
  title:
    "Career - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
  description:
    "Join Capital Associated Building Contracting and explore exciting career opportunities in engineering, project management, site supervision, design, and more in Dubai.",
  keywords: [
    "Construction Careers Dubai",
    "Building Contracting Jobs UAE",
    "Engineering Jobs Dubai",
    "Project Management Careers UAE",
    "Construction Company Dubai",
  ],
  alternates: {
    canonical: "https://www.capitalassociated.com/career",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Career - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Join Capital Associated Building Contracting and explore exciting career opportunities in Dubai.",
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
    title:
      "Career - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Explore exciting career opportunities at Capital Associated Building Contracting.",
    images: ["/about/about3.jpg"],
  },
};

export default function Career() {
  return <CareerLayout />;
}
