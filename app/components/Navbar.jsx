"use client";
import { useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ settings = {} }) {
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const getSetting = (key, fallback = "") => settings[key] || fallback;

  const toggleSocialLinks = () => {
    setShowSocialLinks(!showSocialLinks);
  };

  return (
    <nav className="w-[90%] mx-20 hidden absolute xl:flex items-center justify-between py-8 border-b border-black z-50" aria-label="Main navigation">
      {/* Logo */}
      <Link href="/" className="text-xl">
        <Image
          width={150}
          height={100}
          src="/logoLight.svg"
          alt="Capital Associated Building Contracting Logo"
          loading="eager"
          priority
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-6 text-sm font-medium text-black">
          <li className="relative group">
            <Link href="/about-us" className="hover:text-black transition-all duration-200 ease-in-out">About</Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link href="/our-team" className="hover:text-black transition-all duration-200 ease-in-out">Team</Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link href="/career" className="hover:text-black transition-all duration-200 ease-in-out">Career</Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <div className="w-[0.5px] h-10 bg-black"></div>
          <li className="relative group">
            <Link href="/services" className="hover:text-black transition-all duration-200 ease-in-out">Services</Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link href="/our-work" className="hover:text-black transition-all duration-200 ease-in-out">Projects</Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link href="/blog" className="hover:text-black transition-all duration-200 ease-in-out">Blogs</Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link href="/contact-us" className="hover:text-black transition-all duration-200 ease-in-out">Contact</Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 text-amber-900">
        <Link
          href={`mailto:${getSetting("contact_email", "hello@capitalassociated.com")}`}
          className="relative text-sm font-medium hover:text-black transition-all duration-200 ease-in-out group"
        >
          {getSetting("contact_email", "hello@capitalassociated.com")}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <div className="w-[0.5] h-4 bg-black"></div>
        {getSetting("contact_phone") && <Link
          href={`tel:${getSetting("contact_phone")}`}
          className="relative text-sm font-medium hover:text-black transition-all duration-200 ease-in-out group"
        >
          {getSetting("contact_phone")}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>}
        <div className="w-[0.5px] h-10 bg-black"></div>

        {/* Social Section */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Stay Social</span>
          <button
            onClick={toggleSocialLinks}
            className="flex items-center justify-center w-5 h-5 border border-amber-900 rounded-full transition-all duration-200 ease-in-out hover:bg-amber-900 hover:text-white"
            aria-label={showSocialLinks ? "Hide social links" : "Show social links"}
          >
            {showSocialLinks ? "-" : "+"}
          </button>
          <div
            className={`flex gap-4 transition-all duration-300 ease-in-out transform ${
              showSocialLinks ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
            }`}
            aria-hidden={!showSocialLinks}
          >
            <Link
              href={getSetting("social_instagram", "https://www.instagram.com/capital.associated/")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all duration-200 ease-in-out border-l pl-2 border-l-black"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              href={getSetting("social_facebook", "https://www.facebook.com/capitalassociated")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all duration-200 ease-in-out"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            {getSetting("social_linkedin") && (
              <Link
                href={getSetting("social_linkedin")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-all duration-200 ease-in-out"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
