"use client";
import { motion } from "motion/react";
import React, { useRef, useEffect, useState } from "react";

export const HeroSectionBackground = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const MIN_DROP_HEIGHT = 40;
  const MAX_DROP_HEIGHT = 90;
  const MIN_DURATION = 2.5;
  const MAX_DURATION = 5.5;

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [lineCount, setLineCount] = useState(5); // default 5 lines

  // Update container size & adjust line count based on screen width
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContainerHeight(containerRef.current.offsetHeight);
        // Set 3 lines for mobile (<640px), 5 for larger
        setLineCount(window.innerWidth < 640 ? 3 : 5);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Positions in percentage
  const positions = Array.from({ length: lineCount }, (_, i) =>
    ((i + 1) * 100) / (lineCount + 1)
  );

  const randomHeight = () =>
    Math.floor(Math.random() * (MAX_DROP_HEIGHT - MIN_DROP_HEIGHT + 1)) +
    MIN_DROP_HEIGHT;
  const randomDuration = () =>
    Math.random() * (MAX_DURATION - MIN_DURATION) + MIN_DURATION;
  const randomDelay = () => Math.random() * 2;

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden bg-neutral-900 ${className}`}
    >
      {/* Static vertical lines */}
      {positions.map((left, i) => (
        <div
          key={`line-${i}`}
          className="absolute top-0 bottom-0 w-px bg-[#B9B9B999]"
          style={{ left: `${left}%` }}
        />
      ))}

      {/* One drop per line */}
      {positions.map((left, i) => {
        const dropHeight = randomHeight();
        return (
          <motion.div
            key={`drop-${i}`}
            className="absolute border-b-2 rounded-b-full"
            style={{
              left: `${left}%`,
              width: "2px",
              height: `${dropHeight}px`,
              top: -dropHeight,
              background:
                "linear-gradient(90deg, rgba(185,185,185,0.2) 30.78%, #535353 100%)",
            }}
            animate={{ translateY: [0, containerHeight + dropHeight] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: randomDuration(),
              delay: randomDelay(),
              ease: "linear",
            }}
          />
        );
      })}

      {/* Overlay content */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        {children}
      </div>
    </div>
  );
};
