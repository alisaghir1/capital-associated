"use client";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { RiMenuFoldFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

export default function NavMobile() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State to manage navbar visibility

  // Function to toggle the navbar visibility
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleClick = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div className="xl:hidden">
      {/* Logo always visible */}
      <div className="absolute bg-amber-900 text-gray-300 flex justify-between items-center px-5 py-2 top-0 left-0 right-0 z-50">
        {/* Email with mailto link */}
        <Link
          href="mailto:hello@capitalassociated.com"
          className="text-sm font-medium transition-colors duration-300 ease-in-out hover:text-white"
        >
          hello@capitalassociated.com
        </Link>

        {/* Phone number with tel link */}
        <Link
          href="tel:+971521211520"
          className="text-sm font-medium transition-colors duration-300 ease-in-out hover:text-white"
        >
          +971 52 121 1520
        </Link>
      </div>
      <Link href={'/'}>
      <div className=" absolute top-8 left-4 z-50 p-2">
        <Image width={130} height={100} src="/logoLight.svg" alt="logo" />
      </div>
      </Link>

      {/* Button to open the sidebar */}
      <button
        onClick={toggleNavbar}
        className="absolute text-4xl text-center mt-4 top-8 right-4 z-50 p-2 hover:scale-110 text-black transition-all duration-300 ease-in-out rounded-full xl:hidden"
      >
        {isNavbarOpen ? <RiCloseFill /> : <RiMenuFoldFill />}{" "}
        {/* Toggle between '☰' and 'Close' */}
      </button>

      {/* Mobile Navbar */}
      <div
        className={`fixed inset-0 bg-white z-40 p-6 shadow-lg flex flex-col items-center transform transition-transform duration-300 ${
          isNavbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Navigation Links */}
        <ul className="flex flex-col gap-8 text-lg text-black font-medium mt-24">
          <li className="relative group">
            <Link
              onClick={handleClick}
              href="/about-us"
              className="hover:text-black transition-colors duration-300 ease-in-out"
            >
              About
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              onClick={handleClick}
              href="/our-team"
              className="hover:text-black transition-colors duration-300 ease-in-out"
            >
              Team
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              onClick={handleClick}
              href="/services"
              className="hover:text-black transition-colors duration-300 ease-in-out"
            >
              Services
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              onClick={handleClick}
              href="/career"
              className="hover:text-black transition-colors duration-300 ease-in-out"
            >
              Career
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              onClick={handleClick}
              href="/our-work"
              className="hover:text-black transition-colors duration-300 ease-in-out"
            >
              Projects
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              onClick={handleClick}
              href="/blog"
              className="hover:text-black transition-colors duration-300 ease-in-out"
            >
              Blogs
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              onClick={handleClick}
              href="/contact-us"
              className="hover:text-black transition-colors duration-300 ease-in-out"
            >
              Contact
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
        </ul>

        {/* Social Media Links */}
        <div className="flex gap-4 mt-8 text-black">
          <a
            href="https://www.instagram.com/capital.associated/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-black"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-black"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-black"
          >
            <RiTwitterXLine />
          </a>
        </div>
      </div>
    </div>
  );
}
