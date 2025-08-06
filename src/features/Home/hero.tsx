'use client'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import Typewriter from 'typewriter-effect'


export default function Hero() {
  const words = [
    "User Interface",
    "Web Design",
    "Web Development"
  ];
  return (
    <BackgroundBeamsWithCollision className="bg-white h-[84vh]">
      <div className="relative z-10 text-center max-w-lg mx-auto px-4">
        {/* Top Header Text */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-8 bg-primary"></div>
          <span className="text-primary text-[12px] uppercase tracking-wider font-display font-bold">
            Building the future with technology
          </span>
          <div className="h-px w-8 bg-primary"></div>
        </div>

        {/* Main Headline */}
        <h1 className=" font-bold mb-6 font-display">
          <span className="text-dark-blue block text-[42px] text-nowrap">Top-notch digital firm for web & mobile apps in</span>
          <span className="text-primary block text-[64px]">
            <Typewriter
              options={{
                strings: words,
                autoStart: true,
                loop: true,
              }}
            /></span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-display">
          We're a creative digital agency specializing in intuitive and visually compelling user interfaces for web and mobile apps. From concept to execution, we help you stand out, engage users, and leave a lasting impression.
        </p>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
          <div className="w-4 h-4 border border-white rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator (closer to provided HTML structure) */}
      <div className="tp-scroll-down absolute left-1/2 -translate-x-1/2 bottom-8 z-20 flex justify-center w-full">
        <a
          href="#next-section"
          className="scroll-wrap border-1 w-[40px] gap-3 border-dashed border-border-light py-4 rounded-[50px] flex flex-col items-center group focus:outline-none"
          aria-label="Scroll to next section"
          onClick={e => {
            e.preventDefault();
            const el = document.getElementById('next-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {/* Circle icon (FontAwesome alternative) */}
          <svg className="w-3 h-3 text-body animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span className="arrow flex items-center justify-center flex-col">
            <span className="h-px w-6 border-t-1 border-dashed border-body"></span>
            {/* Down arrow icon (FontAwesome alternative) */}
            <svg className="w-6 h-6 text-body " fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 16V8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 12l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </BackgroundBeamsWithCollision>
  );
}