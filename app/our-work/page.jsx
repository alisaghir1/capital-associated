import React from 'react'
import OurWorkLayout from './OurWorkLayout'

export async function generateMetadata() {
  return {
    title: "Our Work - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Discover the remarkable projects completed by Capital Associated Building Contracting. From residential buildings to large-scale commercial developments, our work showcases our expertise, attention to detail, and commitment to quality. Explore a diverse range of projects where we have brought innovative construction solutions to life, creating sustainable and functional spaces that meet our clients’ unique needs. With every project, we aim to exceed expectations, delivering superior results on time and within budget.",
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
      title: "Our Work - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
      description:
        "Discover the remarkable projects completed by Capital Associated Building Contracting. From residential buildings to large-scale commercial developments, our work showcases our expertise, attention to detail, and commitment to quality. Explore a diverse range of projects where we have brought innovative construction solutions to life, creating sustainable and functional spaces that meet our clients’ unique needs. With every project, we aim to exceed expectations, delivering superior results on time and within budget.",
      url: "https://capitalassociated.com/our-work",
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

const OurWork = () => {
  return (
    <OurWorkLayout />
  )
}

export default OurWork