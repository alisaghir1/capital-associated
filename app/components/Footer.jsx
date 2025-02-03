import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-black">
      <div className="mx-auto">
        {/* Quick Links Section */}
        <div className="container px-5 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-b-black pb-4 w-fit">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-gray-300">About us</Link></li>
              <li><Link href="/services" className="hover:text-gray-300">Our Services</Link></li>
              <li><Link href="/our-work" className="hover:text-gray-300">Our Work</Link></li>
              <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
              <li><Link href="/contact-us" className="hover:text-gray-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-b-black pb-4 w-fit">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/general-contracting" className="hover:text-gray-300">General Contracting</Link></li>
              <li><Link href="/services/construction-management" className="hover:text-gray-300">Construction Management</Link></li>
              <li><Link href="/services/design-build" className="hover:text-gray-300">Design - Build</Link></li>
              <li><Link href="/services/renovation-and-remodeling" className="hover:text-gray-300">Renovation & Remodeling</Link></li>
              <li><Link href="/services/pre-construction-services" className="hover:text-gray-300">Pre-Construction Services</Link></li>
              <li><Link href="/services/value-engineering" className="hover:text-gray-300">Value Engineering</Link></li>
              <li><Link href="/services/green-building-solutions" className="hover:text-gray-300">Green Building Solutions</Link></li>
              <li><Link href="/services/specialty-construction" className="hover:text-gray-300">Specialty Construction</Link></li>
              <li><Link href="/services/interior-fit-out" className="hover:text-gray-300">Interior Fit-Out</Link></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-b-black pb-4 w-fit">Contact Us</h3>
            <address className="space-y-2">
              <p>Dubai. JLT. Cluster Y</p>
              <p>Office 1501</p>
              <p>Mobile: <Link href="tel:+971521211520" className="hover:text-gray-300">+971 52 121 1520</Link></p>
              <p>Email: <Link href="mailto:hello@capitalassociated.com" className="hover:text-gray-300">hello@capitalassociated.com</Link></p>
            </address>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-b-black pb-4 w-fit">Follow Us</h3>
            <ul className="space-y-2">
              <li><Link href="https://www.facebook.com" className="hover:text-gray-300">Facebook</Link></li>
              <li><Link href="https://www.instagram.com/capital.associated/" className="hover:text-gray-300">Instagram</Link></li>
              <li><Link href="https://www.youtube.com" className="hover:text-gray-300">YouTube</Link></li>
              <li><Link href="https://www.twitter.com" className="hover:text-gray-300">X</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-black p-10 bg-white border-gray-700 flex justify-center items-center">
          <p className="text-sm text-center">
            Capital Associated Building Contracting © 2024. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
