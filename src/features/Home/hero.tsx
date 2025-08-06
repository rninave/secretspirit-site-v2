import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"

export default function Hero() {
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
          <span className="text-primary block text-[64px]">User Interface</span>
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
    </BackgroundBeamsWithCollision>
  );
}