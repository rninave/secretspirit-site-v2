"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 5;
    const y = (clientY - (rect.top + rect.height / 2)) / 5;
    setMousePosition({ x, y });
  };
  
  return (
    <div className={cn("relative", containerClassName)}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setMousePosition({ x: 0, y: 0 });
        }}
        animate={{
          x: isHovering ? mousePosition.x : 0,
          y: isHovering ? mousePosition.y : 0,
          scale: isHovering ? 1.05 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
        className="w-full h-full"
      >
        <motion.div
          animate={{
            x: isHovering ? -mousePosition.x * 0.5 : 0,
            y: isHovering ? -mousePosition.y * 0.5 : 0,
            scale: isHovering ? 1.02 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className={cn("w-full h-full", className)}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};
