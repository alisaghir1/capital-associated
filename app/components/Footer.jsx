"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import { supabase } from "../../lib/supabase";
import { stripHtmlTags } from "../utils/richText";

// Cache for footer services
let servicesCache = null;
let servicesCacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const Footer = () => {
  const { getSetting } = useSiteSettings();
  const [services, setServices] = useState(servicesCache || []);

  const fetchServices = useCallback(async () => {
    // Use cache if valid
    const now = Date.now();
    if (servicesCache && (now - servicesCacheTimestamp) < CACHE_DURATION) {
      setServices(servicesCache);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('services')
        .select('title, slug')
        .eq('published', true)
        .order('created_at', { ascending: true })
        .limit(9);

      if (error) {
        console.error('Error fetching services for footer:', error);
      } else {
        servicesCache = data || [];
        servicesCacheTimestamp = Date.now();
        setServices(servicesCache);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

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
                // Dynamic services from database
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
                // Fallback if no services found
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
            <address className="space-y-2">
              {getSetting('contact_address') ? (
                <div dangerouslySetInnerHTML={{ __html: getSetting('contact_address', 'Dubai. JLT. Cluster Y<br/>Office 1501').replace(/\n/g, '<br/>') }} />
              ) : (
                <>
                  <p>Dubai. JLT. Cluster Y</p>
                  <p>Office 1501</p>
                </>
              )}
              <p>Mobile: <Link href={`tel:${getSetting('contact_phone', '+971521211520')}`} className="hover:text-gray-300 transition-all duration-200 ease-in-out">{getSetting('contact_phone', '+971 52 121 1520')}</Link></p>
              <p>Email: <Link href={`mailto:${getSetting('contact_email', 'hello@capitalassociated.com')}`} className="hover:text-gray-300 transition-all duration-200 ease-in-out">{getSetting('contact_email', 'hello@capitalassociated.com')}</Link></p>
            </address>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-b-black pb-4 w-fit">Follow Us</h3>
            <ul className="space-y-2">
              {getSetting('social_facebook') && (
                <li><Link href={getSetting('social_facebook')} className="hover:text-gray-300 transition-all duration-200 ease-in-out">Facebook</Link></li>
              )}
              {getSetting('social_instagram') && (
                <li><Link href={getSetting('social_instagram')} className="hover:text-gray-300 transition-all duration-200 ease-in-out">Instagram</Link></li>
              )}
              {getSetting('social_youtube') && (
                <li><Link href={getSetting('social_youtube')} className="hover:text-gray-300 transition-all duration-200 ease-in-out">YouTube</Link></li>
              )}
              {getSetting('social_twitter') && (
                <li><Link href={getSetting('social_twitter')} className="hover:text-gray-300 transition-all duration-200 ease-in-out">X</Link></li>
              )}
              {getSetting('social_linkedin') && (
                <li><Link href={getSetting('social_linkedin')} className="hover:text-gray-300 transition-all duration-200 ease-in-out">LinkedIn</Link></li>
              )}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-black p-10 bg-white border-gray-700 flex justify-center items-center">
          <p className="text-sm text-center">
            {getSetting('company_name', 'Capital Associated Building Contracting')} © 2025. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
