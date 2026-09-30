"use client";

import React, { useState } from "react";
import Link from "next/link";
import useRecaptcha from "../hooks/useRecaptcha";
import { submitEnquiry, PROJECT_TYPES } from "../utils/enquiry";

const EnquiryForm = () => {
  const { execute, ready } = useRecaptcha();
  const [formData, setFormData] = useState({ name: "", contact: "", projectType: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", message }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const isEmail = formData.contact.includes("@");

    try {
      const token = await execute("homepage_enquiry");
      await submitEnquiry({
        name: formData.name,
        email: isEmail ? formData.contact : "",
        phone: isEmail ? "" : formData.contact,
        projectType: formData.projectType,
        source: "homepage",
        recaptchaToken: token,
        action: "homepage_enquiry",
      });
      setFormData({ name: "", contact: "", projectType: "" });
      setStatus({ type: "success", message: "Thanks — we'll call or email you within one working day." });
    } catch (error) {
      console.error("Enquiry failed:", error);
      setStatus({ type: "error", message: error.message || "Something went wrong. Please try again or contact us on WhatsApp." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto -mt-10 md:-mt-14 relative z-20 px-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-xl border border-gray-100 p-5 md:p-6 flex flex-col md:flex-row md:items-end gap-4"
      >
        <div className="flex-1 min-w-0 text-left">
          <label htmlFor="name" className="block text-xs font-semibold text-black mb-1">
            Name
          </label>
          <input
            required
            type="text"
            id="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="flex-1 min-w-0 text-left">
          <label htmlFor="contact" className="block text-xs font-semibold text-black mb-1">
            Phone or Email
          </label>
          <input
            required
            type="text"
            id="contact"
            autoComplete="tel email"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Phone or email"
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="flex-1 min-w-0 text-left">
          <label htmlFor="projectType" className="block text-xs font-semibold text-black mb-1">
            Project Type <span className="font-normal text-gray-500">(optional)</span>
          </label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black bg-white"
          >
            <option value="">Select…</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={loading || !ready}
          className="shrink-0 bg-black hover:bg-white border border-black hover:text-black text-white transition-all duration-200 ease-in-out px-6 py-2.5 text-sm font-semibold rounded-md whitespace-nowrap disabled:opacity-60"
        >
          {loading ? "Sending..." : "Request a call"}
        </button>
      </form>
      <p className="mt-2 text-center text-xs text-gray-500">
        We only use your details to respond to this enquiry. Protected by reCAPTCHA &mdash;{" "}
        <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Privacy</Link>{" "}
        &amp;{" "}
        <Link href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Terms</Link>.
      </p>
      {status && (
        <p
          role="status"
          className={`mt-3 text-center text-sm font-medium ${status.type === "success" ? "text-green-700" : "text-red-600"}`}
        >
          {status.message}
        </p>
      )}
    </div>
  );
};

export default EnquiryForm;
