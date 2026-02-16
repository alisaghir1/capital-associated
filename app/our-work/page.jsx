import OurWorkLayout from "./OurWorkLayout";

export const metadata = {
  title:
    "Our Work - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
  description:
    "Discover the remarkable projects completed by Capital Associated Building Contracting. From residential buildings to large-scale commercial developments in Dubai.",
  keywords: [
    "Construction Projects Dubai",
    "Building Contracting UAE",
    "Commercial Construction UAE",
    "Residential Construction Dubai",
    "Interior Fit-Out Solutions",
    "Infrastructure Development UAE",
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
      "Our Work - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Discover the remarkable projects completed by Capital Associated Building Contracting in Dubai.",
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
      "Our Work - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Discover the remarkable projects completed by Capital Associated Building Contracting.",
    images: ["/main.jpg"],
  },
};

export default function OurWork() {
  return <OurWorkLayout />;
}
