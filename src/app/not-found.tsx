import AnimatedButton from "@/components/common/AnimatedButton";
import Image from "next/image";
import { FiArrowUpRight } from 'react-icons/fi';

export default function NotFound() {
  return (
    <section className="bg-white py-20 px-4 md:px-8">

      <div className="flex flex-col items-center justify-center  text-center px-4">
        <Image width={380} height={260} src="/not-found.svg" className="mb-10" alt="not found svg image" />
        <h3 className="text-xl text-[28px] font-bold text-black mb-6 font-heading">Ops! Page not found</h3>
        <p className="text-body max-w-xxs font-body font-normal text-sm md:text-lg mb-6">
          Actually, we didn’t break it—we just don’t have what you’re looking for.
        </p>
        <div className="flex justify-center">
          <AnimatedButton
            text="Back To Home"
            hoverText="Back To Home"
            href="/"
            icon={<FiArrowUpRight size={16} fontWeight={700} />}
            className="flex items-center justify-center bg-transparent text-primary border border-primary cursor-pointer px-6 py-3 rounded-full font-display font-medium hover:shadow-btn hover:bg-primary hover:text-white transition-colors"
          />
        </div>
      </div>
    </section>
  );
}
