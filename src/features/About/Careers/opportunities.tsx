'use client'

import AnimatedButton from '@/components/common/AnimatedButton'

export default function Opportunities() {
  return (
    <section className="bg-gray-light py-15">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-[32px] leading-[100%] font-bold text-center text-heading font-heading mb-10">
          Explore Opportunities
        </h2>

        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-careers-job-card border border-gray-100 p-6 md:p-10 text-center max-w-3xl mx-auto flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              We're Always Looking for the Right Fit
            </h3>
            <p className="text-body font-normal text-sm md:text-base leading-6.5 mb-8">
              We might not have an open role that matches your exact title right now, but if you're the kind of person who uses "synergy" ironically, thrives on caffeine, and actually enjoys solving complex problems, we want to talk. We are always on the lookout for talented folks who fit our culture perfectly—even if we have to invent a role just for you. Drop your resume, and let's see if we're a match made in corporate heaven.
            </p>
            <AnimatedButton href='/contact?form=career' text='Apply Now' hoverText='Apply Now' className='cursor-pointer flex bg-primary text-white px-6 py-3 rounded-full text-sm font-body shadow-btn hover:shadow-btn-reverse font-medium transition-colors items-center gap-2' />
          </div>
        </div>
      </div>
    </section>
  )
}
