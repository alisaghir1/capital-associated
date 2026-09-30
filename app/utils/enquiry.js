import emailjs from "emailjs-com";
import { trackEvent } from "../../lib/analytics";

export const PROJECT_TYPES = [
  "Villa Construction",
  "Commercial Fit-Out",
  "Renovation",
  "General Contracting",
  "Other",
];

/**
 * Verifies the reCAPTCHA token server-side, then sends the enquiry via EmailJS.
 * Throws with a user-safe message on failure.
 */
export async function submitEnquiry({ name, email = "", phone = "", projectType = "", source, recaptchaToken, action }) {
  const verify = await fetch("/api/verify-recaptcha", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: recaptchaToken, action }),
  });
  if (!verify.ok) {
    throw new Error("We couldn't verify your submission. Please try again or contact us on WhatsApp.");
  }

  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    {
      firstName: name,
      lastName: "",
      email,
      phone,
      message: projectType ? `Project type: ${projectType}` : "Project type: not specified",
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  );

  trackEvent("form_submit", { form_source: source, project_type: projectType || "unspecified" });
}
