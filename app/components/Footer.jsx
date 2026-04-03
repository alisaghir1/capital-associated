"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabase";
import { stripHtmlTags } from "../utils/richText";

const Footer = ({ settings = {} }) => {
  const [services, setServices] = useState([]);

  const getSetting = (key, fallback = "") => settings[key] || fallback;

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from("services")
        .select("title, slug")
        .eq("published", true)
        .order("created_at", { ascending: true })
        .limit(9);

      if (!error && data) {
        setServices(data);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  return (
    <footer className="bg-slate-100 text-black">
      <div className="mx-auto">
        {/* Quick Links Section */}
        <div className="container px-5 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-b-black pb-4 w-fit">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="hover:text-gray-300 transition-all duration-200 ease-in-out">About us</Link></li>
              <li><Link href="/services" className="hover:text-gray-300 transition-all duration-200 ease-in-out">Our Services</Link></li>
              <li><Link href="/our-work" className="hover:text-gray-300 transition-all duration-200 ease-in-out">Our Work</Link></li>
              <li><Link href="/blog" className="hover:text-gray-300 transition-all duration-200 ease-in-out">Blog</Link></li>
              <li><Link href="/contact-us" className="hover:text-gray-300 transition-all duration-200 ease-in-out">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-b-black pb-4 w-fit">Services</h3>
            <ul className="space-y-2">
              {services.length > 0 ? (
                services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:text-gray-300 transition-all duration-200 ease-in-out"
                    >
                      {stripHtmlTags(service.title)}
                    </Link>
                  </li>
                ))
              ) : (
                <>
                  <li><Link href="/services/general-contracting" className="hover:text-gray-300 transition-all duration-200 ease-in-out">General Contracting</Link></li>
                  <li><Link href="/services/construction-management" className="hover:text-gray-300 transition-all duration-200 ease-in-out">Construction Management</Link></li>
                  <li><Link href="/services/design-build" className="hover:text-gray-300 transition-all duration-200 ease-in-out">Design - Build</Link></li>
                </>
              )}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-b-black pb-4 w-fit">Contact Us</h3>
            <address className="space-y-2 not-italic">
              {getSetting("contact_address") ? (
                <div dangerouslySetInnerHTML={{ __html: getSetting("contact_address", "Dubai. JLT. Cluster Y<br/>Office 1501").replace(/\n/g, "<br/>") }} />
              ) : (
                <>
                  <p>Dubai. JLT. Cluster Y</p>
                  <p>Office 1501</p>
                </>
              )}
              <p>Mobile: <Link href={`tel:${getSetting("contact_phone", "+971521211520")}`} className="hover:text-gray-300 transition-all duration-200 ease-in-out">{getSetting("contact_phone", "+971 52 121 1520")}</Link></p>
              <p>Email: <Link href={`mailto:${getSetting("contact_email", "hello@capitalassociated.com")}`} className="hover:text-gray-300 transition-all duration-200 ease-in-out">{getSetting("contact_email", "hello@capitalassociated.com")}</Link></p>
            </address>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-b-black pb-4 w-fit">Follow Us</h3>
            <ul className="space-y-2">
              {getSetting("social_facebook") && (
                <li><Link href={getSetting("social_facebook")} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all duration-200 ease-in-out">Facebook</Link></li>
              )}
              {getSetting("social_instagram") && (
                <li><Link href={getSetting("social_instagram")} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all duration-200 ease-in-out">Instagram</Link></li>
              )}
              {getSetting("social_youtube") && (
                <li><Link href={getSetting("social_youtube")} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all duration-200 ease-in-out">YouTube</Link></li>
              )}
              {getSetting("social_twitter") && (
                <li><Link href={getSetting("social_twitter")} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all duration-200 ease-in-out">X</Link></li>
              )}
              {getSetting("social_linkedin") && (
                <li><Link href={getSetting("social_linkedin")} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all duration-200 ease-in-out">LinkedIn</Link></li>
              )}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-black p-10 bg-white border-gray-700 flex justify-center items-center">
          <p className="text-sm text-center">
            {getSetting("company_name", "Capital Associated Building Contracting")} &copy; {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
