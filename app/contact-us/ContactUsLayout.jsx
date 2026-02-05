"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';
import NavbarMobile from '../components/NavbarMobile';
import Footer from '../components/Footer';
import Consultation from '../components/Consultation';

const ContacUsLayout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Send email using EmailJS
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_9dw8n2b", // Replace with your EmailJS service ID
        "template_qi1yiur", // Replace with your EmailJS template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "bz-racFIdw40qpvrn" // Replace with your EmailJS user ID
      );

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });

      setAlertMessage("Your message has been sent successfully!");
      setShowAlert(true);
    } catch (error) {
      setAlertMessage("There was an error sending your message. Please try again.");
      setShowAlert(true);
      console.error("FAILED...", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <NavbarMobile />
      <div className="px-6 pb-12 pt-24 sm:pb-24 sm:pt-40 lg:px-8">
      <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center mt-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-orange">Contact Us!</h1>
        <p className="text-lg text-black mt-10">to discuss your requirements, request a quote, or schedule a consultation.</p>
      </div>
      <form onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20 z-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-orange">First Name</label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="block w-full rounded-md border px-3.5 py-2 text-orange shadow-sm b-orange sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-orange">Last Name</label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="block w-full rounded-md border px-3.5 py-2 text-orange shadow-sm b-orange sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-orange">Email</label>
            <div className="mt-2.5">
              <input
                required
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="block w-full rounded-md border px-3.5 py-2 text-orange shadow-sm b-orange sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-orange">Phone</label>
            <div className="mt-2.5">
              <input
                required
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="block w-full rounded-md border px-3.5 py-2 text-orange shadow-sm b-orange sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-orange">Message</label>
            <div className="mt-2.5">
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                className="block w-full rounded-md border px-3.5 py-2 text-orange shadow-sm b-orange sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button type="submit" disabled={loading} className="w-full rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold leading-6 text-black border border-black shadow-sm hover:bg-black hover:text-white transition-all duration-200 ease-in-out">
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
      {showAlert && (
        <div className='mt-6 p-4 text-white text-center'>
          {alertMessage}
        </div>
      )}
      </div>
      <Consultation />
      <Footer />
    </>
  );
};

export default ContacUsLayout;
