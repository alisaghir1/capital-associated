import "./globals.css";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";

export async function generateMetadata() {
  return {
    title: "Capital Accociated Building Contracting",
    description:
      "Capital Associated Building Contracting is a premier construction and contracting company dedicated to delivering high-quality, innovative, and sustainable building solutions. With expertise in residential, commercial, and industrial projects, we provide end-to-end services, from design and planning to execution and completion. Our commitment to excellence, precision, and customer satisfaction sets us apart, ensuring that every project is built to the highest standards of quality, safety, and efficiency. Whether it's new construction, renovations, or fit-outs, we turn visions into reality with professionalism and reliability.",
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
      title: "Capital Accociated Building Contracting",
      description:
        "Capital Associated Building Contracting is a premier construction and contracting company dedicated to delivering high-quality, innovative, and sustainable building solutions. With expertise in residential, commercial, and industrial projects, we provide end-to-end services, from design and planning to execution and completion. Our commitment to excellence, precision, and customer satisfaction sets us apart, ensuring that every project is built to the highest standards of quality, safety, and efficiency. Whether it's new construction, renovations, or fit-outs, we turn visions into reality with professionalism and reliability.",
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
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='antialiased'
      >
        <Navbar />
        <NavbarMobile />
        {children}
        <Consultation />
        <Footer />
      </body>
    </html>
  );
}
