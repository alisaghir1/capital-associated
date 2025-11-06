'use client';

import { usePathname } from 'next/navigation';
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {!isAdminRoute && <NavbarMobile />}
      {children}
      {!isAdminRoute && <Consultation />}
      {!isAdminRoute && <Footer />}
    </>
  );
}