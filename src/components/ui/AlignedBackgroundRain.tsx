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
  const LINE_COUNT = 5;
  const MIN_DROP_HEIGHT = 20;
  const MAX_DROP_HEIGHT = 50;
  const MIN_DURATION = 1.5;
  const MAX_DURATION = 3.5;

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  const positions = Array.from({ length: LINE_COUNT }, (_, i) =>
    ((i + 1) * containerWidth) / (LINE_COUNT + 1)
  );

  // Random helpers
  const randomHeight = () =>
    Math.floor(Math.random() * (MAX_DROP_HEIGHT - MIN_DROP_HEIGHT + 10)) +
    MIN_DROP_HEIGHT;
  const randomDuration = () =>
    Math.random() * (MAX_DURATION - MIN_DURATION) + MIN_DURATION;
  const randomDelay = () => Math.random() * 2; // stagger drop start times

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
          style={{ left: `${left}px` }}
        />
      ))}

      {/* One drop per line with random start, random duration */}
      {positions.map((left, i) => {
        const dropHeight = randomHeight();
        return (
          <motion.div
            key={`drop-${i}`}
            className="absolute bg-[linear-gradient(90deg,rgba(185,185,185,0.2)_30.78%,#535353_100%)] border-b-2 rounded-b-full"
            style={{
              left: `${left}px`,
              width: "2px",
              height: `${dropHeight}px`,
              top: -dropHeight,
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

      {/* Optional overlay */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        {children}
      </div>
    </div>
  );
};
