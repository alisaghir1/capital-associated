"use client";
import { useCallback, useEffect, useState } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const SCRIPT_ID = "recaptcha-v3";

// Loads reCAPTCHA v3 on demand and returns an `execute(action)` that resolves to a token.
// When no site key is configured it resolves to null so forms still work in development.
export default function useRecaptcha() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!SITE_KEY) return;
    const markReady = () => window.grecaptcha?.ready(() => setReady(true));
    if (window.grecaptcha) {
      markReady();
      return;
    }
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      // Another form instance already injected the script; wait for it to finish loading
      existing.addEventListener("load", markReady);
      return () => existing.removeEventListener("load", markReady);
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.onload = markReady;
    document.head.appendChild(script);
  }, []);

  const execute = useCallback(
    async (action) => {
      if (!SITE_KEY) return null;
      if (!window.grecaptcha) throw new Error("reCAPTCHA not loaded");
      return window.grecaptcha.execute(SITE_KEY, { action });
    },
    []
  );

  return { execute, ready: !SITE_KEY || ready, enabled: Boolean(SITE_KEY) };
}
