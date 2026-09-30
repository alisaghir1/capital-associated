"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';
import useRecaptcha from '../hooks/useRecaptcha';
import { submitEnquiry, PROJECT_TYPES } from '../utils/enquiry';
import { trackEvent } from '../../lib/analytics';

const PHONE = '+971528111106';
const WHATSAPP_HREF = `https://wa.me/${PHONE.replace(/\D/g, '')}?text=${encodeURIComponent(
  "Hi Capital Associated, I'd like to discuss a construction project."
)}`;

const inputClass =
  'block w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-black shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-black';

const ContactUsLayout = () => {
  const searchParams = useSearchParams();
  const { execute, ready } = useRecaptcha();

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', projectType: '' });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Pre-select project type when arriving from a service/project page (?project=...)
  useEffect(() => {
    const fromQuery = searchParams.get('project');
    if (fromQuery && PROJECT_TYPES.includes(fromQuery)) {
      setFormData((prev) => ({ ...prev, projectType: fromQuery }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const token = await execute('contact_enquiry');
      await submitEnquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        source: 'contact_page',
        recaptchaToken: token,
        action: 'contact_enquiry',
      });
      setFormData({ name: '', email: '', phone: '', projectType: '' });
      setSubmitted(true);
    } catch (error) {
      console.error('Enquiry failed:', error);
      setErrorMessage(error.message || 'There was an error sending your enquiry. Please try again or use WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="px-6 pb-12 pt-32 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center mt-10 sm:mt-20">
          <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center mb-8">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black">Enquiry sent</h1>
          <p className="text-lg text-black mt-6">
            Thanks &mdash; one of our team will call or email you within one working day.
          </p>
          <p className="text-md text-gray-500 mt-3">Need a faster reply? Message us on WhatsApp.</p>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { location: 'contact_success' })}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            <FaWhatsapp className="text-lg" /> WhatsApp us
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-sm font-semibold text-black underline hover:text-gray-700"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 pb-12 pt-32 sm:pb-24 sm:pt-40 lg:px-8">
      <div className="mx-auto max-w-3xl flex flex-col items-center justify-center text-center mt-10 sm:mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black text-balance">
          Get a Free Construction Consultation
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mt-6 leading-relaxed max-w-2xl">
          Villa build, commercial fit-out or renovation in Dubai, Abu Dhabi or Sharjah &mdash; leave your details and we&apos;ll call you back to discuss feasibility, budget and programme.
        </p>
      </div>

      <form onSubmit={sendEmail} className="mx-auto mt-12 max-w-xl sm:mt-16">
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-black">Name</label>
            <input required type="text" id="name" autoComplete="name" value={formData.name} onChange={handleChange} placeholder="Your name" className={`${inputClass} mt-2`} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-black">Email</label>
            <input required type="email" id="email" autoComplete="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className={`${inputClass} mt-2`} />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-black">Phone</label>
            <input required type="tel" id="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} placeholder="+971 5X XXX XXXX" className={`${inputClass} mt-2`} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="projectType" className="block text-sm font-semibold leading-6 text-black">
              Project Type <span className="font-normal text-gray-500">(optional)</span>
            </label>
            <select id="projectType" value={formData.projectType} onChange={handleChange} className={`${inputClass} mt-2 bg-white`}>
              <option value="">Select…</option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={loading || !ready}
            className="w-full rounded-md bg-black px-3.5 py-3 text-sm font-semibold text-white border border-black hover:bg-white hover:text-black transition-all duration-200 ease-in-out disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Send enquiry'}
          </button>
        </div>
        <p className="mt-3 text-center text-xs text-gray-500">
          We only use your details to respond to this enquiry and never share them. Protected by reCAPTCHA &mdash;{' '}
          <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Privacy</Link> &amp;{' '}
          <Link href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Terms</Link>.
        </p>

        {errorMessage && (
          <p role="alert" className="mt-4 p-3 rounded-md bg-red-50 text-red-700 text-sm text-center font-medium">
            {errorMessage}
          </p>
        )}

        <div className="mt-8 flex items-center gap-3 text-xs text-gray-500">
          <span className="flex-1 h-px bg-gray-200" />
          <span>or</span>
          <span className="flex-1 h-px bg-gray-200" />
        </div>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', { location: 'contact_form' })}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-3.5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          <FaWhatsapp className="text-lg" /> Chat on WhatsApp
        </a>
      </form>

      {/* Contact Details */}
      <div className="mx-auto mt-20 max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="text-sm font-semibold text-black uppercase tracking-wide mb-2">Phone</p>
            <a
              href={`tel:${PHONE}`}
              onClick={() => trackEvent('phone_click', { location: 'contact_page' })}
              className="text-base text-black hover:text-gray-700 transition-colors"
            >
              +971 52 811 1106
            </a>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="text-sm font-semibold text-black uppercase tracking-wide mb-2">Email</p>
            <a href="mailto:hello@capitalassociated.com" className="text-base text-black hover:text-gray-700 transition-colors break-all">
              hello@capitalassociated.com
            </a>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="text-sm font-semibold text-black uppercase tracking-wide mb-2">Office</p>
            <p className="text-base text-black">Dubai, UAE</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="text-sm font-semibold text-black uppercase tracking-wide mb-2">Working Hours</p>
            <p className="text-base text-black">Monday &ndash; Friday</p>
            <p className="text-base text-black">8:30 AM &ndash; 7:00 PM</p>
          </div>
        </div>

        <div className="mt-12 rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="Capital Associated Building Contracting Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zRHViYWksIFVBRQ!5e0!3m2!1sen!2sae!4v1700000000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsLayout;
