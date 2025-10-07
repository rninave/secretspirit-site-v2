"use client";

import React from "react";
import { cn } from "@/lib/utils"; // optional
import { FiPhoneCall } from "react-icons/fi";
import { WobbleCard } from "../ui/wobble-card";

interface AnimatedButtonWithIconProps {
  text: string;
  hoverText?: string;
  icon?: React.ReactNode;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonWithIconProps> = ({
  text,
  hoverText,
  icon,
  className,
}) => {
  const secondText = hoverText || text;

  return (
    <WobbleCard>
    <button
      className={cn(
        "relative overflow-hidden group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 transition-colors duration-300",
        className
      )}
    >
      {/* Animated Text */}
      <span className="relative block h-[1.2em] leading-[1.2em] overflow-hidden">
        <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
          {text}
        </span>
        <span className="absolute left-0 top-full w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
          {secondText}
        </span>
      </span>

      {/* Icon (Static) */}
      <span className="flex items-center justify-center">
        {icon || <FiPhoneCall className="text-white text-lg" />}
      </span>
    </button>
    </WobbleCard>
  );
};

export default AnimatedButton;
