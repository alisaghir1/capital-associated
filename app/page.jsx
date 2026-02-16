import HomeClient from "./HomeClient";

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
    canonical: "https://capitalassociated.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Leading construction company in Dubai offering design-build, interior fit-out, engineering, and project management solutions.",
    url: "https://capitalassociated.com",
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

export default function Home() {
  return <HomeClient />;
}
