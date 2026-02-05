'use client';

import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";
import { SiteSettingsProvider } from "../hooks/useSiteSettings";

// Shared layout for public pages with Navbar and Footer
export default function PublicLayout({ children }) {
  return (
    <SiteSettingsProvider>
      <Navbar />
      <NavbarMobile />
      {children}
      <Consultation />
      <Footer />
    </SiteSettingsProvider>
  );
}
