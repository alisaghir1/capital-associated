"use client";
import { FaWhatsapp } from "react-icons/fa";
import { trackEvent } from "../../lib/analytics";

export default function WhatsAppButton({ settings = {} }) {
  const getSetting = (key, fallback = "") => settings[key] || fallback;

  const rawNumber = getSetting("contact_whatsapp") || getSetting("contact_phone", "+971528111106");
  const number = rawNumber.replace(/[^\d]/g, "");
  const message = "Hi Capital Associated, I'd like to discuss a construction project.";
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location: "floating_button" })}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white text-3xl shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
    >
      <FaWhatsapp />
    </a>
  );
}
