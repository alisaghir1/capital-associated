import React from 'react'
import OurTeamLayout from './OurTeamLayout'

export async function generateMetadata() {
  return {
    title: "Our Team - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Meet the team behind Capital Associated Building Contracting—dedicated professionals driving excellence in the construction industry. Our diverse team includes engineers, architects, project managers, and specialists who are passionate about building lasting structures that stand the test of time. Together, we create innovative solutions that reflect our commitment to quality, sustainability, and client satisfaction. Learn more about the people who make our vision a reality and the expertise they bring to every project.",
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
      title: "Our Team - Capital Associated | Elite Construction Company & Fit-Out in Dubai",
      description:
        "Meet the team behind Capital Associated Building Contracting—dedicated professionals driving excellence in the construction industry. Our diverse team includes engineers, architects, project managers, and specialists who are passionate about building lasting structures that stand the test of time. Together, we create innovative solutions that reflect our commitment to quality, sustainability, and client satisfaction. Learn more about the people who make our vision a reality and the expertise they bring to every project.",
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
  };
}

const OurTeam = () => {
  return (
    <OurTeamLayout />
  )
}

export default OurTeam