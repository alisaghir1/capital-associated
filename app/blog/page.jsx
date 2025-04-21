import React from 'react'
import BlogLayout from './BlogLayout'

export async function generateMetadata() {
  return {
    title: "Blog - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Welcome to the official blog of Capital Associated Building Contracting LLC, your trusted partner in construction and fit-out solutions in Dubai, UAE. Stay updated with industry insights, project highlights, expert tips, and the latest trends in construction, engineering, and sustainable building practices. Whether you're an investor, developer, or homeowner, our blog provides valuable knowledge to help you make informed decisions and stay ahead in the ever-evolving world of construction.",
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
      title: "Blog - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
      description:
        "Welcome to the official blog of Capital Associated Building Contracting LLC, your trusted partner in construction and fit-out solutions in Dubai, UAE. Stay updated with industry insights, project highlights, expert tips, and the latest trends in construction, engineering, and sustainable building practices. Whether you're an investor, developer, or homeowner, our blog provides valuable knowledge to help you make informed decisions and stay ahead in the ever-evolving world of construction.",
      url: "https://capitalassociated.com/blog",
      type: "website",
      images: [
        {
          url: "/about/about2.jpg",
          width: 1200,
          height: 600,
          alt: "Capital Associated Building Contracting",
        },
      ],
    },
  };
}

const Blog = () => {
  return (
    <BlogLayout />
  )
}

export default Blog