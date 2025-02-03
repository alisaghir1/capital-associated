import React from 'react'
import ServicesLayout from './ServicesLayout'

export async function generateMetadata() {
  return {
    title: "Services - Capital Accociated Building Contracting",
    description:
      "At Capital Associated Building Contracting, we offer a comprehensive range of construction services tailored to meet the unique needs of each project. Our services include residential, commercial, and industrial construction, fit-out solutions, civil engineering, and infrastructure development. We are committed to delivering high-quality, sustainable, and innovative solutions that exceed client expectations. With a focus on precision, efficiency, and safety, our expert team ensures that every project is completed to the highest standards, on time, and within budget. Explore how we can bring your vision to life through our specialized services.",
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
      title: "Services - Capital Accociated Building Contracting",
      description:
        "At Capital Associated Building Contracting, we offer a comprehensive range of construction services tailored to meet the unique needs of each project. Our services include residential, commercial, and industrial construction, fit-out solutions, civil engineering, and infrastructure development. We are committed to delivering high-quality, sustainable, and innovative solutions that exceed client expectations. With a focus on precision, efficiency, and safety, our expert team ensures that every project is completed to the highest standards, on time, and within budget. Explore how we can bring your vision to life through our specialized services.",
      url: "https://capitalassociated.com/Services",
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
  };
}

const page = () => {
  return (
    <ServicesLayout />
  )
}

export default page