"use client";

import React, { useRef } from "react";
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
  const btnRef = useRef<HTMLButtonElement>(null);
  const secondText = hoverText || text;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = btnRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.style.position = "absolute";
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.top = `${y}px`;
    ripple.style.left = `${x}px`;
    ripple.style.background = "rgba(255, 255, 255, 0.4)";
    ripple.style.borderRadius = "50%";
    ripple.style.transform = "scale(0)";
    ripple.style.pointerEvents = "none";
    ripple.style.animation = "ripple 600ms ease-out";
    ripple.classList.add("ripple");

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });

    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <WobbleCard>
      <button
        ref={btnRef}
        onClick={handleClick}
        className={cn(
          "relative overflow-hidden group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 transition-colors duration-300",
          "ripple-container",
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
