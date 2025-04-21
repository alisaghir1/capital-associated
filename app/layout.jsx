import "./globals.css";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://capitalassociated.com"),
    title: "Capital Associated | Elite Construction Company & Fit-Out in Dubai",
    description:
      "Leading construction company in Dubai offering design-build, interior fit-out, engineering, and project management solutions across residential & commercial sectors.",
    icons: {
      icon: "/logoLight.svg",
    },
    keywords: [
      "Construction Company Dubai",
      "Building Contracting UAE",
      // ... your other keywords
    ],
    openGraph: {
      title: "Capital Associated | Elite Construction Company & Fit-Out in Dubai",
      description:
        "Leading construction company in Dubai offering design-build, interior fit-out, engineering, and project management solutions across residential & commercial sectors.",
      url: "https://capitalassociated.com",
      type: "website",
      images: [
        {
          url: "/main.jpg", // relative to metadataBase
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
