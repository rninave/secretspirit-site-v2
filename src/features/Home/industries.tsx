'use client';
import { useState } from 'react';
import { IconType } from 'react-icons';
import {
  FiActivity,
  FiBookOpen,
  FiCloud,
  FiDollarSign,
  FiFilm,
  FiFlag,
  FiGlobe,
  FiHeart,
  FiHome,
  FiLock,
  FiMapPin,
  FiPhoneCall,
  FiShield,
  FiShoppingBag,
  FiShoppingCart,
  FiTool,
  FiTrendingUp,
  FiTruck,
  FiUsers,
  FiZap,
} from 'react-icons/fi';
import {
  MdAgriculture,
  MdConstruction,
  MdDirectionsCar,
  MdFlight,
  MdGavel,
  MdRestaurant,
  MdSportsEsports,
  MdSportsSoccer,
} from 'react-icons/md';
import SectionHeader from '@/components/common/SectionHeader';
import Reveal from '@/components/common/Reveal';

type Industry = {
  name: string;
  icon: IconType;
};

const industries: Industry[] = [
  { name: 'Healthcare', icon: FiHeart },
  { name: 'FinTech & Banking', icon: FiDollarSign },
  { name: 'E-Commerce', icon: FiShoppingCart },
  { name: 'Retail', icon: FiShoppingBag },
  { name: 'Education & EdTech', icon: FiBookOpen },
  { name: 'Real Estate & PropTech', icon: FiHome },
  { name: 'Logistics & Supply Chain', icon: FiTruck },
  { name: 'Media & Entertainment', icon: FiFilm },
  { name: 'Travel & Hospitality', icon: FiMapPin },
  { name: 'SaaS & Cloud', icon: FiCloud },
  { name: 'Manufacturing', icon: FiTool },
  { name: 'Government & Public Sector', icon: FiFlag },
  { name: 'Startups & Venture', icon: FiTrendingUp },
  { name: 'Fitness & Wellness', icon: FiActivity },
  { name: 'Automotive', icon: MdDirectionsCar },
  { name: 'Agriculture & AgriTech', icon: MdAgriculture },
  { name: 'Insurance', icon: FiShield },
  { name: 'Telecom', icon: FiPhoneCall },
  { name: 'HR Tech', icon: FiUsers },
  { name: 'Energy & Utilities', icon: FiZap },
  { name: 'Legal', icon: MdGavel },
  { name: 'Construction', icon: MdConstruction },
  { name: 'Food & Beverage', icon: MdRestaurant },
  { name: 'Cybersecurity', icon: FiLock },
  { name: 'Non-Profit & NGOs', icon: FiGlobe },
  { name: 'Aviation', icon: MdFlight },
  { name: 'Sports', icon: MdSportsSoccer },
  { name: 'Gaming', icon: MdSportsEsports },
];

const half = Math.ceil(industries.length / 2);
const rowA = industries.slice(0, half);
const rowB = industries.slice(half);

function MarqueeRow({
  items,
  reverse = false,
  durationSec,
}: {
  items: Industry[];
  reverse?: boolean;
  durationSec: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const loopItems = [...items, ...items];

  return (
    <div
      className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div
        className={`flex w-max gap-3 md:gap-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{
          animationDuration: `${durationSec}s`,
          animationPlayState: isHovered ? 'paused' : 'running',
        }}
      >
        {loopItems.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <span
              key={`${industry.name}-${index}`}
              className="flex items-center gap-2 shrink-0 text-nowrap text-white/90 border border-white/15 rounded-full px-6 py-3 md:px-7 md:py-3.5 bg-white/5 hover:bg-white/10 hover:border-primary/50 hover:text-white transition-colors duration-300 text-sm md:text-base font-medium"
            >
              <Icon className="text-primary text-base md:text-lg shrink-0" />
              {industry.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function IndustriesSection() {
  return (
    <section className="bg-primary-dark py-12 md:py-15 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <SectionHeader
            subtitle="Domain Expertise"
            title="Industries We Serve"
            align="center"
            className="mb-8 md:mb-10"
            variant="dark"
          />
        </Reveal>
      </div>

      <Reveal delayMs={80}>
        <div className="font-body flex flex-col gap-4 md:gap-5">
          <MarqueeRow items={rowA} durationSec={42} />
          <MarqueeRow items={rowB} reverse durationSec={38} />
        </div>
      </Reveal>
    </section>
  );
}
