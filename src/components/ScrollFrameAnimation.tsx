"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useMotionValueEvent, useSpring } from "framer-motion";

const FRAME_COUNT = 150;
const FRAME_BASE_URL = "/Payside%20bg%20frames/ezgif-frame-";
const FRAME_EXTENSION = ".jpg";

export default function ScrollFrameAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();

  // Smooth the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const lastRenderedFrame = useRef<number>(-1);

  // Pad frame numbers: 1 -> 001, 10 -> 010, 100 -> 100
  const getFrameUrl = (index: number) => {
    const paddedIndex = index.toString().padStart(3, "0");
    return `${FRAME_BASE_URL}${paddedIndex}${FRAME_EXTENSION}`;
  };

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const preloadImages = () => {
      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        img.src = getFrameUrl(i);
        img.onload = () => {
          loadedCount++;
          if (loadedCount === FRAME_COUNT) {
            setIsLoaded(true);
          }
        };
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, []);

  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[frameIndex]) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[frameIndex];

    // Maintain aspect ratio cover
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.width;
    const imgHeight = img.height;

    const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const newWidth = imgWidth * ratio;
    const newHeight = imgHeight * ratio;
    const x = (canvasWidth - newWidth) / 2;
    const y = (canvasHeight - newHeight) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, x, y, newWidth, newHeight);
  };

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render current frame on resize
        if (lastRenderedFrame.current !== -1) {
          renderFrame(lastRenderedFrame.current);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, images]);

  // Map scroll to frame
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (!isLoaded) return;

    // Map 0-1 to 0-(FRAME_COUNT-1)
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT),
    );

    if (frameIndex !== lastRenderedFrame.current) {
      lastRenderedFrame.current = frameIndex;
      requestAnimationFrame(() => renderFrame(frameIndex));
    }
  });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        background: "#000",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#050505",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          {/* Subtle loader */}
          <div
            style={{
              color: "var(--lime)",
              fontSize: "12px",
            }}
          >
            PRELOADING EXPERIENCE...
          </div>
        </div>
      )}
    </div>
  );
}
