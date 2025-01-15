'use client'
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
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
    setIsNavbarOpen(false)
  }

  return (
    <div className="xl:hidden">
      {/* Logo always visible */}
      <div className="fixed bg-amber-900 text-gray-300 flex justify-between items-center px-5 py-2 top-0 left-0 right-0 z-50">
  {/* Email with mailto link */}
  <Link href="mailto:hello@capitalassociation.com" className="text-sm font-medium transition-colors duration-300 ease-in-out hover:text-white">
    hello@capitalassociation.com
  </Link>
  
  {/* Phone number with tel link */}
  <Link href="tel:+971521211520" className="text-sm font-medium transition-colors duration-300 ease-in-out hover:text-white">
    +971 52 121 1520
  </Link>
</div>
      <div className=" fixed top-8 left-4 z-50 p-2">
        <Image width={130} height={100} src='/logoLight.svg' alt="logo"/>
      </div>
      

      {/* Button to open the sidebar */}
      <button
        onClick={toggleNavbar}
        className="fixed text-4xl text-center mt-4 top-8 right-4 z-50 p-2 text-black rounded-full xl:hidden"
      >
        {isNavbarOpen ? <IoIosCloseCircleOutline /> : <RiMenuFoldFill />} {/* Toggle between '☰' and 'Close' */}
      </button>

      {/* Mobile Navbar */}
      <div
        className={`fixed inset-0 bg-white z-40 p-6 shadow-lg flex flex-col items-center transform transition-transform duration-300 ${
          isNavbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Navigation Links */}
        <ul className="flex flex-col gap-8 text-lg text-gray-600 font-medium mt-24">
          <li><Link onClick={handleClick} href="/about-us" className="hover:text-black transition-colors duration-300 ease-in-out">About</Link></li>
          <li><Link onClick={handleClick} href="/team" className="hover:text-black transition-colors duration-300 ease-in-out">Team</Link></li>
          <li><Link onClick={handleClick} href="/our-services" className="hover:text-black transition-colors duration-300 ease-in-out">Services</Link></li>
          <li><Link onClick={handleClick} href="/career" className="hover:text-black transition-colors duration-300 ease-in-out">Career</Link></li>
          <li><Link onClick={handleClick} href="/our-work" className="hover:text-black transition-colors duration-300 ease-in-out">Projects</Link></li>
          <li><Link onClick={handleClick} href="/blogs" className="hover:text-black transition-colors duration-300 ease-in-out">Media</Link></li>
          <li><Link onClick={handleClick} href="/contact" className="hover:text-black transition-colors duration-300 ease-in-out">Contact</Link></li>
        </ul>

        {/* Social Media Links */}
        <div className="flex gap-4 mt-8 text-gray-600">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-black">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-black">
            <FaFacebook />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-black">
            <RiTwitterXLine />
          </a>
        </div>
      </div>
    </div>
  );
}
