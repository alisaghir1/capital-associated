"use client";
import { useEffect, useRef } from "react";

export default function HeroAnimation({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = "1";
      ref.current.style.transform = "translateY(0)";
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 -translate-y-5 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
