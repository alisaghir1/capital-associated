"use client";
import { useRef, useState } from "react";
import Image from "next/image";

const DEFAULT_POSTER = "/projects/main-villa.jpg";

// Falls back to the poster image only when no source is configured or the source fails to load.
export default function VideoSection({ src = "", poster = DEFAULT_POSTER, title = "Capital Associated project showreel" }) {
  const videoRef = useRef(null);
  const [state, setState] = useState(src ? "idle" : "unavailable"); // idle | playing | unavailable

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    setState("playing");
    video.play().catch(() => setState("unavailable"));
  };

  return (
    <div className="mt-10 container mx-auto px-5 xl:px-20">
      <div className="relative w-full aspect-video max-h-[40rem] bg-black rounded-xl overflow-hidden">
        {state === "unavailable" ? (
          <Image src={poster} alt={title} fill className="object-cover" sizes="100vw" />
        ) : (
          <>
            <video
              ref={videoRef}
              poster={poster}
              controls={state === "playing"}
              playsInline
              preload="metadata"
              onError={() => setState("unavailable")}
              className="w-full h-full object-cover"
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={src} type="video/mp4" />
            </video>
            {state === "idle" && (
              <button
                type="button"
                onClick={handlePlay}
                aria-label={`Play ${title}`}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
              >
                <span className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-9 h-9 text-black ml-1" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
