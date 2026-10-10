"use client";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  size: number;
  hue: number;
};

const SPARK_COUNT = 28;
const GRAVITY = 0.12;
const FRICTION = 0.96;

/**
 * Cursor-following glow + click fire sparks.
 * Render inside a positioned container; it listens to events on its parent element.
 */
export default function HeroCursorEffects() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const x = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 });
  const y = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 });
  const glowOpacity = useSpring(0, { stiffness: 120, damping: 20 });

  const background = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(255, 61, 0, 0.14), rgba(255, 140, 33, 0.06) 40%, transparent 70%)`;
  const coreBackground = useMotionTemplate`radial-gradient(120px circle at ${x}px ${y}px, rgba(255, 140, 33, 0.18), transparent 70%)`;

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const host = root?.parentElement;
    if (!root || !canvas || !host) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const sparks: Spark[] = [];
    let rafId = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = host.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const tick = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        const prevX = s.x;
        const prevY = s.y;
        s.vx *= FRICTION;
        s.vy = s.vy * FRICTION + GRAVITY;
        s.x += s.vx;
        s.y += s.vy;
        s.life -= s.decay;

        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        // Streak from previous position for a fiery trail (saturated colors so it reads on a white background)
        ctx.strokeStyle = `hsla(${s.hue}, 100%, 50%, ${s.life})`;
        ctx.lineWidth = Math.max(s.size * s.life, 0.5);
        ctx.lineCap = "round";
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${s.hue}, 100%, 50%, ${s.life * 0.8})`;
        ctx.beginPath();
        ctx.moveTo(prevX - s.vx * 2.5, prevY - s.vy * 2.5);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();
      }

      ctx.shadowBlur = 0;
      rafId = sparks.length ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (e: MouseEvent) => {
      const rect = host.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
      glowOpacity.set(1);
    };

    const onLeave = () => glowOpacity.set(0);

    const onClick = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      for (let i = 0; i < SPARK_COUNT; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 6;
        sparks.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.5,
          life: 1,
          decay: 0.015 + Math.random() * 0.02,
          size: 2 + Math.random() * 2.5,
          hue: 5 + Math.random() * 35, // red → orange → amber
        });
      }
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    host.addEventListener("mousemove", onMove);
    host.addEventListener("mouseleave", onLeave);
    host.addEventListener("pointerdown", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      host.removeEventListener("mousemove", onMove);
      host.removeEventListener("mouseleave", onLeave);
      host.removeEventListener("pointerdown", onClick);
    };
  }, [mouseX, mouseY, glowOpacity]);

  return (
    <div ref={rootRef} aria-hidden className="pointer-events-none absolute inset-0">
      {/* Cursor glow (behind content) */}
      <motion.div className="absolute inset-0 z-0" style={{ background, opacity: glowOpacity }} />
      <motion.div className="absolute inset-0 z-0" style={{ background: coreBackground, opacity: glowOpacity }} />
      {/* Click sparks (above content) */}
      <canvas ref={canvasRef} className="absolute inset-0 z-30" />
    </div>
  );
}
