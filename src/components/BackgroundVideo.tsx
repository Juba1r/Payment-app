"use client";

import { useEffect, useState, memo } from "react";

const BackgroundVideo = () => {
  const [mounted, setMounted] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) {
    // Return early to prevent hydration mismatch, showing fallback gradient
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
          pointerEvents: "none",
        }}
      />
    );
  }

  return (
    <>
      {/* Fallback pattern / gradient if the video fails */}
      {videoError && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -2,
            background: "linear-gradient(135deg, #0a0a0a, #121212, #000000)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Main Video */}
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          disableRemotePlayback
          preload="auto"
          onError={() => setVideoError(true)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: -1,
            pointerEvents: "none", // Does not affect page layout/interaction
          }}
        >
          <source src="/payside%20background%20video.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
};

export default memo(BackgroundVideo);
