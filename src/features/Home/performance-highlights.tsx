'use client';

import { useEffect, useRef, useState } from 'react';
import SectionHeader from '@/components/common/SectionHeader';

const highlights = [
  { value: 6, label: 'Trusted experience over the years' },
  { value: 20, label: 'Innovative Thinkers & Doers' },
  { value: 80, label: 'Delighted clients worldwide' },
  { value: 10, label: 'Countries we proudly serve' },
];

export default function PerformanceHighlights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Count-up and bounce state for all cards
  const [counts, setCounts] = useState(highlights.map(() => 0));
  const [bounced, setBounced] = useState(highlights.map(() => false));

  // Magnetic effect refs and state for all cards
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef(highlights.map(() => ({ x: 0, y: 0 })));
  const pos = useRef(highlights.map(() => ({ x: 0, y: 0 })));
  const animFrame = useRef<number>(1);

  // Animate all cards' magnetic effect
  useEffect(() => {
    const animate = () => {
      for (let i = 0; i < highlights.length; i++) {
        pos.current[i].x += (mouse.current[i].x - pos.current[i].x) * 2;
        pos.current[i].y += (mouse.current[i].y - pos.current[i].y) * 2;
        if (cardRefs.current[i]) {
          cardRefs.current[i]!.style.transform = `translate3d(${pos.current[i].x}px, ${pos.current[i].y}px, 0)`;
        }
      }
      animFrame.current = requestAnimationFrame(animate);
    };
    animFrame.current = requestAnimationFrame(animate);
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  // Count-up and bounce effect for all cards
  useEffect(() => {
    if (!inView) return;
    let running = true;
    setCounts(highlights.map(() => 0));
    setBounced(highlights.map(() => false));
    const steps = highlights.map(h => Math.ceil(h.value / (1200 / 20)));
    let current = highlights.map(() => 0);
    const interval = setInterval(() => {
      let done = true;
      const newCounts = [...current];
      for (let i = 0; i < highlights.length; i++) {
        if (current[i] < highlights[i].value) {
          current[i] += steps[i];
          if (current[i] >= highlights[i].value) {
            current[i] = highlights[i].value;
            setTimeout(() => setBounced(b => b.map((v, idx) => idx === i ? true : v)), 60);
          } else {
            done = false;
          }
        }
        newCounts[i] = current[i];
      }
      setCounts([...newCounts]);
      if (done) {
        clearInterval(interval);
      }
    }, 16);
    return () => {
      running = false;
      clearInterval(interval);
    };
  }, [inView]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Handlers for magnetic effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    mouse.current[idx].x = (e.clientX - rect.left - rect.width / 2) * 0.60;
    mouse.current[idx].y = (e.clientY - rect.top - rect.height / 2) * 0.60;
  };
  const handleMouseLeave = (idx: number) => {
    mouse.current[idx].x = 0;
    mouse.current[idx].y = 0;
  };

  return (
    <section className="bg-[#0B0A1D] py-20 px-4" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Performance Highlights"
          title=""
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {highlights.map((item, idx) => (
            <div
              key={item.label}
              className="group flex flex-col items-center justify-center text-center"
            >
              <div
                ref={el => { cardRefs.current[idx] = el; }}
                className="w-64 h-64 max-w-full font-display max-h-[320px] rounded-full border border-gray-700 flex flex-col items-center justify-center bg-transparent transition-transform duration-300 shadow-xl cursor-pointer hover:jelly-animate hover:scale-105 hover:shadow-2xl"
                onMouseMove={e => handleMouseMove(e, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
              >
                <span className={`performance-outline text-[48px] md:text-[64px] font-bold tracking-tight flex items-baseline justify-center transition-transform duration-300 ${bounced[idx] ? 'animate-bounce-once' : ''}`}>
                  {counts[idx]}+
                </span>
                <span className="text-divider text-sm font-medium mt-4 max-w-[80%] mx-auto">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes jelly {
          0% { transform: scale(1,1); }
          20% { transform: scale(0.9,1.1); }
          40% { transform: scale(1.1,0.9); }
          60% { transform: scale(0.95,1.05); }
          80% { transform: scale(1.05,0.95); }
          100% { transform: scale(1,1); }
        }
        .jelly-animate:hover {
          animation: jelly 0.7s;
        }
        .performance-outline {
          color: transparent;
          -webkit-text-stroke: 3px #FF4500;
          text-stroke: 3px #FF4500;
          text-shadow: none;
        }
        @keyframes bounce-once {
          0% { transform: scale(1); }
          30% { transform: scale(1.18); }
          60% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        .animate-bounce-once {
          animation: bounce-once 0.5s;
        }
      `}</style>
    </section>
  );
}
