import "./globals.css";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";

export const metadata = {
  title: "Capital Accociated Building Contracting",
  description: "Capital Associated Building Contracting is a trusted name in construction and contracting services, delivering excellence in residential, commercial, and industrial projects. With a commitment to quality, innovation, and precision, we bring your vision to life through expert craftsmanship and sustainable solutions.",
  icons: {
    icon: "/logoLight.svg", // Adjust if using a different format
  },
};

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
