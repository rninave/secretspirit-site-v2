import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AnimatedButton from './AnimatedButton'
import { FiArrowUpRight } from 'react-icons/fi'

export default function UnderDevelopment({
    returnUrl = { name: 'Home', href: '/' },
  title = 'Webpage Under Development',
  desc = 'Our team is actively developing this webpage to serve you better. Stay tuned for the updated content and improved experience.',
}: {
  title?: string
  desc?: string,
  returnUrl?: {name: string, href: string} | string
}) {
  return (
       <section className="bg-white py-20 px-4 md:px-8">
   
         <div className="flex flex-col items-center justify-center  text-center px-4">
           <Image width={380} height={260} src="/under-development.png" className="mb-10" alt="under development image" />
           <h3 className="text-xl text-[28px] font-bold text-black mb-6 font-heading">Page Under Construction</h3>
           <p className="text-body max-w-sm font-body font-normal text-sm md:text-lg mb-6">
             Our team is actively building out this page to enhance your experience. Stay tuned — fresh updates and improved functionality are on the way.
           </p>
           <div className="flex justify-center">
             <AnimatedButton
               text={`Back To ${typeof returnUrl === 'string' ? 'Home' : returnUrl.name}`}
               hoverText={`Back To ${typeof returnUrl === 'string' ? 'Home' : returnUrl.name}`}
               href={typeof returnUrl === 'string' ? returnUrl : returnUrl.href}
               icon={<FiArrowUpRight size={16} fontWeight={700} />}
               className="flex items-center justify-center bg-transparent text-primary border border-primary cursor-pointer px-6 py-3 rounded-full font-display font-medium hover:shadow-btn hover:bg-primary hover:text-white transition-colors"
             />
           </div>
         </div>
       </section>
  )
}
