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
  const [mounted, setMounted] = useState(false);

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

  // mark as mounted so we only render the animated/randomized drops on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Positions in percentage (keep as numbers, but format when used to avoid float formatting differences)
  const positions = Array.from({ length: lineCount }, (_, i) =>
    ((i + 1) * 100) / (lineCount + 1)
  );

  // Deterministic pseudo-random based on index so server and client produce identical values
  const deterministic = (seed: number) => Math.abs(Math.sin(seed) * 10000) % 1;

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[90dvh] overflow-hidden bg-neutral-900 ${className}`}
    >
      {/* Static vertical lines */}
      {positions.map((left, i) => (
        <div
          key={`line-${i}`}
          className="absolute top-0 bottom-0 w-px bg-[#B9B9B999]"
          style={{ left: `${left.toFixed(6)}%` }}
        />
      ))}

      {/* One drop per line (only render animated/randomized drops on the client) */}
      {mounted && positions.map((left, i) => {
        const seedBase = i + 1 + lineCount * 13;
        const hRand = deterministic(seedBase);
        const dRand = deterministic(seedBase + 37);
        const delayRand = deterministic(seedBase + 71);

        const dropHeight = Math.floor(hRand * (MAX_DROP_HEIGHT - MIN_DROP_HEIGHT + 1)) + MIN_DROP_HEIGHT;
        const duration = dRand * (MAX_DURATION - MIN_DURATION) + MIN_DURATION;
        const delay = delayRand * 2;

        return (
          <motion.div
            key={`drop-${i}`}
            className="absolute border-b-2 rounded-b-full"
            style={{
              left: `${left.toFixed(6)}%`,
              width: "2px",
              height: `${dropHeight}px`,
              top: `-${dropHeight}px`,
              background:
                "linear-gradient(90deg, rgba(185,185,185,0.2) 30.78%, #535353 100%)",
            }}
            animate={{ translateY: [0, containerHeight + dropHeight] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration,
              delay,
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
