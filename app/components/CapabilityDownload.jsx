"use client";
import { trackEvent } from "../../lib/analytics";

// Replace the file at public/capital-associated-capability-statement.pdf to update the download.
export default function CapabilityDownload({ className = "" }) {
  return (
    <a
      href="/capital-associated-capability-statement.pdf"
      download
      onClick={() => trackEvent("capability_download")}
      className={className}
    >
      Download Capability Statement (PDF)
    </a>
  );
}
