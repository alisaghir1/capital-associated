import React from 'react'
import AboutLayout from './AboutLayout';

export async function generateMetadata() {
  return {
    title: "About Us - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Capital Associated Building Contracting LLC is a leading construction company in Dubai, UAE, dedicated to building your vision and crafting tomorrow.",
      icons: {
        icon: "/logoLight.svg", // Adjust if using a different format
      },
      keywords: [
        "Construction Company Dubai",
        "Building Contracting UAE",
        "General Contracting",
        "Fit-Out Company Dubai",
        "Infrastructure Development UAE",
        "Residential Construction Dubai",
        "Commercial Construction UAE",
        "Industrial Contracting Dubai",
        "Turnkey Construction Solutions",
        "Civil Engineering Dubai",
        "MEP Contracting UAE",
        "Renovation Services Dubai",
        "Luxury Villa Construction UAE",
        "Project Management Dubai",
        "Interior Fit-Out Solutions",
        "Structural Engineering UAE",
        "Sustainable Construction Dubai",
        "Road & Infrastructure Contracting",
        "High-Rise Building Contractors UAE",
        "Custom Home Builders Dubai",
        "Building Maintenance Services UAE",
        "Steel Structure Contractors Dubai",
        "Concrete Works UAE",
        "Exterior & Facade Works Dubai",
        "Landscaping & Hardscaping UAE"
      ],
    openGraph: {
      title: "About Us - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
      description:
        "Capital Associated Building Contracting LLC is a leading construction company in Dubai, UAE, dedicated to building your vision and crafting tomorrow.",
      url: "https://capitalassociated.com/about-us",
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
  };
}

const AboutUs = () => {
  return (
    <AboutLayout />
  )
}

export default AboutUs