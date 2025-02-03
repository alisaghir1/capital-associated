import React from 'react'
import ContacUsLayout from './ContactUsLayout'

export async function generateMetadata() {
  return {
    title: "Contact Us - Capital Accociated Building Contracting",
    description:
      "Join Capital Associated Building Contracting and be part of a dynamic team shaping the future of construction in Dubai and the UAE. We are committed to excellence, innovation, and sustainability in every project we undertake. Whether you're an experienced professional or a passionate newcomer, we offer exciting career opportunities in engineering, project management, site supervision, design, and more. Explore our job openings, grow your skills, and build a rewarding career with us in the ever-evolving world of construction and contracting.",
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
      title: "Contact Us - Capital Accociated Building Contracting",
      description:
        "Join Capital Associated Building Contracting and be part of a dynamic team shaping the future of construction in Dubai and the UAE. We are committed to excellence, innovation, and sustainability in every project we undertake. Whether you're an experienced professional or a passionate newcomer, we offer exciting career opportunities in engineering, project management, site supervision, design, and more. Explore our job openings, grow your skills, and build a rewarding career with us in the ever-evolving world of construction and contracting.",
      url: "https://capitalassociated.com/contact-us",
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
  };
}

const ContactUs = () => {
  return (
    <ContacUsLayout />
  )
}

export default ContactUs