"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { WobbleCard } from "../ui/wobble-card";

interface AnimatedButtonProps {
  text: string;
  hoverText?: string;
  icon?: React.ReactNode;
  className?: string;
  href?: string; 
  onClick?: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  hoverText,
  icon,
  className,
  href,
  onClick
}) => {
  const router = useRouter();
  const secondText = hoverText || text;

  const handleClick = () => {
    if (href) {
      router.push(href); // client-side navigation
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <WobbleCard>
      <button
        onClick={handleClick}
        className={cn(
          "relative overflow-hidden group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 transition-colors duration-300",
          className
        )}
      >
        <span className="relative block h-[1.2em] leading-[1.2em] overflow-hidden">
          <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
            {text}
          </span>
          <span className="absolute left-0 top-full w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
            {secondText}
          </span>
        </span>

        {icon && <span className="flex items-center justify-center">{icon}</span>}
      </button>
    </WobbleCard>
  );
};

export default AnimatedButton;
