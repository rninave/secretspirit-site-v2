'use client';

import Image from 'next/image';
import projects from '@/data/projects.json';
import { FiArrowUpRight } from 'react-icons/fi';
import Reveal from '@/components/common/Reveal';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from 'next/link';

const caseStudies = projects;

const industryItems = [
  { name: 'Education', value: 'education' },
  { name: 'Healthcare', value: 'healthcare' },
  { name: 'E-Commerce', value: 'e-commerce' },
  { name: 'Finance', value: 'finance' },
  { name: 'Retail', value: 'retail' },
  { name: 'Real Estate', value: 'real-estate' },
  { name: 'Logistics', value: 'logistics' },
  { name: 'Travel', value: 'travel' },
  { name: 'Media & News', value: 'media&news' },
  { name: 'SaaS Products', value: 'saas-products' },
  { name: 'Manufacturing', value: 'Manufacturing' },
  { name: 'Government', value: 'Government' },
  { name: 'Startups', value: 'Startups' },
  { name: 'Fitness', value: 'Fitness' },
  { name: 'Automotive', value: 'Automotive' },
  { name: 'Agriculture', value: 'Agriculture' },
]

const technologyItems = [
  { name: 'Angular', value: 'angular' },
  { name: 'HTML5', value: 'html5' },
  { name: 'CSS3', value: 'css3' },
  { name: 'Tailwind', value: 'tailwind' },
  { name: 'Ant design', value: 'ant-design' },
  { name: 'Bootstrap', value: 'bootstrap' },
  { name: 'jQuery', value: 'jquery' },
  { name: 'Next JS', value: 'nextjs' },
  { name: 'Ionic', value: 'ionic' },
  { name: 'Flutter', value: 'flutter' },
  { name: 'React Native', value: 'react-native' },
  { name: 'PostgreSQL', value: 'postgresql' },
  { name: 'MySQL', value: 'mysql' },
  { name: 'Typescript', value: 'typescript' },
  { name: 'Sass', value: 'sass' },
  { name: 'NPM', value: 'npm' },
  { name: 'GIT', value: 'git' },
  { name: 'VS Code', value: 'vs-code' },
  { name: 'Node JS', value: 'node-js' },
]

export function WorksFilter() {
  return (
    <section className='bg-gray-light px-4 md:px-8'>
      <div className="max-w-7xl font-body my-4 mx-auto flex gap-4 items-center flex-col xs:flex-row">
        <label className=' text-body text-sm font-normal leading-[100%]' >Filter By</label>
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
        <Select>
          <SelectTrigger className="w-[240px] bg-white border-divider cursor-pointer text-secondry focus-visible:ring-0">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent className='bg-white border-0 max-h-[200px]'>
            {industryItems.map((item, i) => (
              <SelectItem key={i} className='!m-0 hover:bg-primary-hover cursor-pointer font-body' value={item?.value}>{item?.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[240px]  bg-white border-divider cursor-pointer text-secondry focus-visible:ring-0">
            <SelectValue placeholder="Select technology" />
          </SelectTrigger>
          <SelectContent className='bg-white border-0 max-h-[200px]'>
            {technologyItems.map((item, i) => (
              <SelectItem key={i} className='hover:bg-primary-hover cursor-pointer font-body' value={item.value}>{item.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        </div>
      </div>
    </section>
  )
}

export default function WorksSection() {
  return (
    <section className="bg-white py-12 md:py-15 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          {caseStudies.map((item, idx) => (
            <Reveal key={idx} delayMs={idx * 80}>
              <div className="bg-swhite  overflow-hidden  flex flex-col group transition-transform duration-300 hover:-translate-y-1">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={item?.mainImage}
                    alt={item?.title}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={idx < 4}
                  />
                </div>
                <div className="pt-4 gap-4 flex-1 flex flex-col justify-between">
                  {/* Title and Arrow Row */}
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg md:text-2xl font-bold text-heading font-heading transition-colors mb-0">{item?.title || '-'}</h3>
                    <Link href={`/works/${item?.slug}`} aria-label={`View ${item?.title}`} className="w-10 h-10 cursor-pointer hover:rotate-45 flex items-center justify-center rounded-full bg-white border border-divider text-body hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm ml-2 mt-[-6px]">
                      <FiArrowUpRight size={22} aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item?.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`bg-white border border-divider ${i === 0 ? 'text-primary' : 'text-body'} text-[8px] md:text-xs font-heading font-bold px-3 py-2 rounded-full shadow-md`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-body font-body leading-6 font-normal text-xs md:text-sm mb-4 line-clamp-2">{item?.description || '-'}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
