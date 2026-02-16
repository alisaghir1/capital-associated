import OurTeamLayout from "./OurTeamLayout";

export const metadata = {
  title:
    "Our Team - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
  description:
    "Meet the team behind Capital Associated Building Contracting - dedicated professionals driving excellence in the construction industry in Dubai and UAE.",
  keywords: [
    "Construction Team Dubai",
    "Building Contracting Professionals UAE",
    "Project Management Dubai",
    "Civil Engineering Dubai",
    "Construction Company Dubai",
  ],
  alternates: {
    canonical: "https://capitalassociated.com/our-team",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Our Team - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Meet the team behind Capital Associated Building Contracting - dedicated professionals in Dubai.",
    url: "https://capitalassociated.com/our-team",
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
      "Our Team - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Meet the team behind Capital Associated Building Contracting.",
    images: ["/main.jpg"],
  },
};

export default function OurTeam() {
  return <OurTeamLayout />;
}
