'use client'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import Typewriter from 'typewriter-effect'


export default function Hero() {
  const words = [
    "User Research",
    "User Experience",
    "User Interface",
    "Development"
  ];
  return (
    <BackgroundBeamsWithCollision className="bg-white h-[85vh] flex items-start">
      <div className="relative z-10 text-center max-w-lg mx-auto px-4 py-8 w-full">
        {/* Top Header Text */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 my-4 sm:my-7">
          <div className="h-px w-4 sm:w-8 bg-primary"></div>
          <span className="text-primary text-[10px] sm:text-[12px] uppercase tracking-wider font-display font-bold">
            Building the future with technology
          </span>
          <div className="h-px w-4 sm:w-8 bg-primary"></div>
        </div>

        {/* Main Headline */}
        <h1 className="font-bold mb-4 sm:mb-6 font-display">
          <span className="text-dark-blue block text-[28px] sm:text-[36px] md:text-[42px] text-nowrap leading-tight">Top-notch digital firm for web & mobile apps in</span>
          <span className="text-primary block text-[32px] sm:text-[48px] md:text-[64px] leading-tight">
            <Typewriter
              options={{
                strings: words,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-display">
          We're a creative digital agency specializing in intuitive and visually compelling user interfaces for web and mobile apps. From concept to execution, we help you stand out, engage users, and leave a lasting impression.
        </p>

        {/* Scroll Indicator (closer to provided HTML structure) */}
        <div className="tp-scroll-down absolute left-1/2 -translate-x-1/2  z-20 flex justify-center w-full">
          <a
            href="#next-section"
            className="scroll-wrap border-1 w-10 sm:w-[40px] gap-2 sm:gap-3 border-dashed border-border-light py-2 sm:py-4 rounded-[50px] flex flex-col items-center group focus:outline-none bg-white/80 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:bg-white/90"
            aria-label="Scroll to next section"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('next-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {/* Circle icon (FontAwesome alternative) */}
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-body animate-bounce transition-all duration-300 group-hover:scale-110 group-hover:text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span className="arrow flex items-center justify-center flex-col">
              <span className="h-px w-4 sm:w-6 border-t-1 border-dashed border-body transition-all duration-300 group-hover:border-primary"></span>
              {/* Down arrow icon (FontAwesome alternative) */}
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-body transition-all duration-300 group-hover:text-primary group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 16V8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 12l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Circular Contact Element - Bottom Right */}
      <div className="absolute bottom-8 right-6 z-20 group cursor-pointer">
        <div className="relative w-20 h-20 md:w-24 md:h-24">
          {/* Rotating Text Circle */}
          <svg className="w-full h-full animate-spin-slow" viewBox="0 0 120 120">
            <defs>
              <path id="circle-path" d="M 60,60 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
            </defs>
            <text className="text-black text-sm tracking-widest font-normal fill-black">
              <textPath href="#circle-path" startOffset="0%" textAnchor="middle">
                Contact Our Contact Our Expert Contact Our Contact Our Expert
              </textPath>
            </text>
          </svg>

          {/* Center Circle with Arrow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-body rounded-full border border-body flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-white transform rotate-45 transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}