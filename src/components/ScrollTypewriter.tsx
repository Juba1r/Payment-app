"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollTypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export const ScrollTypewriter = ({
  text,
  delay = 0,
  speed = 8,
  className = "",
  style = {},
  disabled = false,
}: ScrollTypewriterProps) => {
  const [typedText, setTypedText] = useState(disabled ? text : "");
  const [hasStarted, setHasStarted] = useState(disabled);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (disabled) {
      setTypedText(text);
      setHasStarted(true);
      return;
    }

    if (isInView && !hasStarted) {
      setHasStarted(true);
      const timeout = setTimeout(() => {
        let i = 0;
        const typeInterval = setInterval(() => {
          setTypedText(text.slice(0, i));
          i++;
          if (i > text.length) {
            clearInterval(typeInterval);
          }
        }, speed);
      }, delay * 1000);

      return () => clearTimeout(timeout);
    }
  }, [isInView, hasStarted, text, delay, speed, disabled]);

  return (
    <div ref={ref} className={className} style={{ ...style, color: "#fff" }}>
      {typedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{
          display:
            disabled || !hasStarted || typedText.length === text.length
              ? "none"
              : "inline-block",
          width: 2,
          height: "1.2em",
          background: "var(--lime)",
          verticalAlign: "middle",
          marginLeft: 2,
        }}
      />
    </div>
  );
};
