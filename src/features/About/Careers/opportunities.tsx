'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, MapPin, Clock } from 'lucide-react'
import AnimatedButton from '@/components/common/AnimatedButton'

const jobs = [
  {
    title: 'Web Designer',
    type: 'Full-time',
    location: 'On-Site',
    description: `We are seeking a talented and creative Web Designer to join our dynamic team. The ideal candidate should have 1 to 3 years of experience in web design, with a strong portfolio showcasing a variety of projects. As a Web Designer, you will collaborate with cross-functional teams to create visually appealing and user-friendly websites.`,
    responsibilities: [
      'Design and implement engaging and responsive website layouts.',
      'Collaborate with the development team to ensure seamless integration of design and functionality.',
      'Create visually appealing graphics, images, and other elements that enhance the overall look and feel of websites.',
      'Stay updated on industry trends and incorporate best practices into design projects.',
      'Conduct usability testing and gather feedback to make informed design decisions.',
      'Collaborate with clients and internal teams to understand project requirements and goals.',
    ],
    requirements: [
      '1–3 years of professional web design experience.',
      'Knowledge of HTML, CSS/SCSS, Bootstrap (or any other CSS framework), and JavaScript is a plus.',
      'Proficiency in graphic design tools such as Adobe Creative Suite or Figma.',
      'Strong communication and collaboration skills.',
      'Attention to detail and a creative mindset.',
    ],
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'On-Site',
    description:
      'As a UI/UX Designer, you will be responsible for delivering the best online user experience, ensuring customer satisfaction and loyalty. You will work closely with developers and stakeholders to translate user needs into intuitive designs.',
    responsibilities: [
      'Develop user personas, wireframes, and prototypes.',
      'Collaborate with cross-functional teams to define and implement innovative solutions.',
      'Ensure designs are consistent with brand guidelines and usability standards.',
      'Test and iterate designs based on user feedback.',
    ],
    requirements: [
      '1–3 years of UI/UX design experience.',
      'Proficiency in Figma, Adobe XD, or Sketch.',
      'Solid understanding of user-centered design principles.',
      'Excellent communication and collaboration skills.',
    ],
  },
  {
    title: 'Front-end Developer',
    type: 'Full-time',
    location: 'On-Site',
    description:
      'We are looking for a skilled Front-end Developer with experience in React or Angular to build visually appealing and responsive user interfaces.',
    responsibilities: [
      'Develop high-quality, reusable, and scalable front-end components.',
      'Collaborate with designers and back-end developers for seamless integration.',
      'Ensure cross-browser compatibility and responsiveness.',
      'Optimize application performance and maintain code quality.',
    ],
    requirements: [
      '2+ years of experience in React, Next.js, or Angular.',
      'Strong knowledge of HTML, CSS, and JavaScript/TypeScript.',
      'Understanding of REST APIs and version control (Git).',
      'Ability to write clean and maintainable code.',
    ],
  },
  {
    title: 'Business Development Executive',
    type: 'Full-time',
    location: 'On-Site',
    description:
      'You will identify new business opportunities, maintain client relationships, and contribute to the company’s growth strategy.',
    responsibilities: [
      'Develop and execute business development strategies.',
      'Identify potential clients and build long-term relationships.',
      'Collaborate with marketing and sales teams for lead generation.',
      'Prepare and deliver business proposals and presentations.',
    ],
    requirements: [
      'Bachelor’s degree in Business, Marketing, or related field.',
      'Excellent communication and negotiation skills.',
      'Ability to work independently and as part of a team.',
      'Prior experience in B2B sales or IT services is a plus.',
    ],
  },
  {
    title: 'Node.js Developer',
    type: 'Full-time',
    location: 'On-Site',
    description:
      'We need a Node.js Developer who can handle backend services, APIs, and integration with front-end components efficiently.',
    responsibilities: [
      'Develop and maintain RESTful APIs using Node.js and Express.',
      'Integrate data storage solutions such as MongoDB or PostgreSQL.',
      'Collaborate with front-end developers for API integration.',
      'Ensure application security, performance, and scalability.',
    ],
    requirements: [
      '2+ years of backend development experience using Node.js.',
      'Experience with databases (MongoDB, MySQL, or PostgreSQL).',
      'Understanding of authentication, authorization, and security best practices.',
      'Strong debugging and problem-solving skills.',
    ],
  },
]

export default function Opportunities() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-gray-light py-15">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-[32px] leading-[100%] font-bold text-center text-heading font-heading mb-10">
          Explore Opportunities
        </h2>

        <div className="space-y-4">
          {jobs.map((job, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-careers-job-card  border border-gray-100"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex cursor-pointer justify-between hover:bg-primary-hover items-center p-4 md:p-6 text-left gap-2"
                >
                  <div>
                    <h3 className="text-xs xs:text-sm md:text-lg font-bold font-heading text-black">
                      {job.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 md:gap-4 text-body font-body">
                    <div className='flex gap-2 text-nowrap md:gap-4'>
                      <div className="flex items-center gap-1 text-xs md:text-sm">
                        <MapPin size={16} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1 text-xs md:text-sm mr-2 md:mr-4">
                        <Clock size={16} />
                        {job.type}
                      </div>
                    </div>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t-2 font-body border-gray-100"
                    >
                      <div className="p-6  space-y-6">
                        {/* Job Description */}
                        <div className='mb-8'>
                          <h4 className="font-bold text-sm leading-[100%] md:text-lg text-black font-heading mb-2">
                            Job Description
                          </h4>
                          <p className="text-body font-normal text-xs md:text-base leading-[26px]">{job.description}</p>
                        </div>

                        {/* Responsibilities */}
                        {job.responsibilities && (
                          <div className='mb-8'>
                            <h4 className="font-bold text-sm leading-[100%] md:text-lg text-black font-heading mb-2">
                              Responsibilities
                            </h4>
                            <ul className="list-disc list-inside text-body font-normal text-xs md:text-base leading-[26px] space-y-1">
                              {job.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Requirements */}
                        {job.requirements && (
                          <div className='mb-8'>
                            <h4 className="font-bold text-sm leading-[100%] md:text-lg text-black font-heading mb-2">
                              Requirements
                            </h4>
                            <ul className="list-disc list-inside text-body font-normal text-xs md:text-base leading-[26px] space-y-1">
                              {job.requirements.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <p className="text-body text-sm md:text-base mb-4">
                          Please submit your resume and portfolio for
                          consideration.
                        </p>
                        <div className='flex justify-center'>
                          <AnimatedButton href='/contact?form=career' text='Apply Now' hoverText='Apply Now' className='cursor-pointer flex bg-primary text-white px-4 py-3 rounded-full text-sm font-body shadow-btn hover:shadow-btn-reverse font-medium  transition-colors items-center gap-2' />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
