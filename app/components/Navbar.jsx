"use client";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  // State to handle the visibility of social media links and the icon
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  // Function to toggle the visibility and the icon
  const toggleSocialLinks = () => {
    setShowSocialLinks(!showSocialLinks);
  };

  return (
    <nav className="w-[90%] mx-20 hidden absolute xl:flex items-center justify-between py-8 border-b border-black z-50">
      {/* Logo */}
      <Link href={"/"} className="text-xl">
        <Image width={150} height={100} src="/logoLight.svg" alt="logo" />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        {/* Left Section */}
        <ul className="flex items-center gap-6 text-sm font-medium text-black">
          <li className="relative group">
            <Link
              href="/about-us"
              className="hover:text-black transition-all duration-200 ease-in-out"
            >
              About
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="/our-team"
              className="hover:text-black transition-all duration-200 ease-in-out"
            >
              Team
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="/career"
              className="hover:text-black transition-all duration-200 ease-in-out"
            >
              Career
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          {/* Separator Line */}
          <div className="w-[0.5px] h-10 bg-black"></div>
          <li className="relative group">
            <Link
              href="/services"
              className="hover:text-black transition-all duration-200 ease-in-out"
            >
              Services
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="/our-work"
              className="hover:text-black transition-all duration-200 ease-in-out"
            >
              Projects
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="/blog"
              className="hover:text-black transition-all duration-200 ease-in-out"
            >
              Blogs
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="/contact-us"
              className="hover:text-black transition-all duration-200 ease-in-out"
            >
              Contact
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 text-amber-900">
        {/* Email */}
        <Link
          href="mailto:hello@capitalassociation.com"
          className="relative text-sm font-medium hover:text-black transition-all duration-200 ease-in-out group"
        >
          hello@capitalassociation.com
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        {/* Small Border */}
        <div className="w-[0.5] h-4 bg-black"></div>
        {/* Phone Number */}
        <Link
          href="tel:+971521211520"
          className="relative text-sm font-medium hover:text-black transition-all duration-200 ease-in-out group"
        >
          +971 52 121 1520
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        {/* Small Border */}
        <div className="w-[0.5px] h-10 bg-black"></div>

        {/* Social Section */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Stay Social</span>

          {/* Toggle Button (Plus/Minus) */}
          <button
            onClick={toggleSocialLinks}
            className="flex items-center justify-center w-5 h-5 border border-amber-900 rounded-full transition-all duration-200 ease-in-out hover:bg-amber-900 hover:text-white"
          >
            {showSocialLinks ? "-" : "+"}{" "}
            {/* Change from + to - when clicked */}
          </button>

          {/* Social Media Links */}
          <div
            className={`flex gap-4 transition-all duration-300 ease-in-out transform ${
              showSocialLinks
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
          >
            <Link
              href="https://www.instagram.com/capital.associated/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all duration-200 ease-in-out border-l pl-2 border-l-black"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all duration-200 ease-in-out"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-all duration-200 ease-in-out"
            >
              <RiTwitterXLine />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
