"use client";
import { useState } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { RiTwitterXLine, RiCloseFill, RiMenuFoldFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

export default function NavMobile({ settings = {} }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const getSetting = (key, fallback = "") => settings[key] || fallback;

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleClick = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div className="xl:hidden" role="navigation" aria-label="Mobile navigation">
      {/* Top bar */}
      <div className="absolute bg-amber-900 text-gray-300 flex justify-between items-center px-5 py-2 top-0 left-0 right-0 z-50">
        <Link
          href={`mailto:${getSetting("contact_email", "hello@capitalassociated.com")}`}
          className="text-sm font-medium transition-colors duration-300 ease-in-out hover:text-white"
        >
          {getSetting("contact_email", "hello@capitalassociated.com")}
        </Link>
        {getSetting("contact_phone") && <Link
          href={`tel:${getSetting("contact_phone")}`}
          className="text-sm font-medium transition-colors duration-300 ease-in-out hover:text-white"
        >
          {getSetting("contact_phone")}
        </Link>}
      </div>
      <Link href="/">
        <div className="absolute top-8 left-4 z-50 p-2">
          <Image
            width={130}
            height={100}
            src="/logoLight.svg"
            alt="Capital Associated Building Contracting Logo"
            loading="eager"
            priority
          />
        </div>
      </Link>

      {/* Button to open the sidebar */}
      <button
        onClick={toggleNavbar}
        className="absolute text-4xl text-center mt-4 top-8 right-4 z-50 p-2 hover:scale-110 text-black transition-all duration-300 ease-in-out rounded-full xl:hidden"
        aria-label={isNavbarOpen ? "Close menu" : "Open menu"}
        aria-expanded={isNavbarOpen}
      >
        {isNavbarOpen ? <RiCloseFill /> : <RiMenuFoldFill />}
      </button>

      {/* Mobile Navbar - hidden by default, only shown via JS toggle */}
      <div
        className={`fixed inset-0 bg-white z-40 p-6 shadow-lg flex flex-col items-center transform transition-transform duration-300 ${
          isNavbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isNavbarOpen}
      >
        <ul className="flex flex-col gap-8 text-lg text-black font-medium mt-24">
          <li className="relative group">
            <Link onClick={handleClick} href="/about-us" className="hover:text-black transition-colors duration-300 ease-in-out">About</Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link onClick={handleClick} href="/our-team" className="hover:text-black transition-colors duration-300 ease-in-out">Team</Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link onClick={handleClick} href="/services" className="hover:text-black transition-colors duration-300 ease-in-out">Services</Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link onClick={handleClick} href="/career" className="hover:text-black transition-colors duration-300 ease-in-out">Career</Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link onClick={handleClick} href="/our-work" className="hover:text-black transition-colors duration-300 ease-in-out">Projects</Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link onClick={handleClick} href="/blog" className="hover:text-black transition-colors duration-300 ease-in-out">Blogs</Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link onClick={handleClick} href="/contact-us" className="hover:text-black transition-colors duration-300 ease-in-out">Contact</Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
        </ul>

        {/* Social Media Links */}
        <div className="flex gap-4 mt-8 text-black">
          <a
            href={getSetting("social_instagram", "https://www.instagram.com/capital.associated/")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-black"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href={getSetting("social_facebook", "https://www.facebook.com/capitalassociated")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-black"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href={getSetting("social_twitter", "https://x.com/capitalassociated")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-black"
            aria-label="X (Twitter)"
          >
            <RiTwitterXLine />
          </a>
        </div>
      </div>
    </div>
  );
}
