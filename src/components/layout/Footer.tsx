"use client"

import { useState } from 'react'
import { FiDribbble } from 'react-icons/fi';
import { FaBehance, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { submitInquiryEmail } from '@/services/contact'

const navLinks = [
  [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
  ],
  [
    { label: 'Careers', href: '/about/careers' },
    { label: 'Blogs', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
];

const socialLinks = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/secretspirit.solutions', name: 'Facebook' },
  { icon: AiFillInstagram, href: 'https://www.instagram.com/secretspirit.solutions', name: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/secretspirit', name: 'LinkedIn' },
  { icon: FaBehance, href: 'https://www.behance.net/secretspirit', name: 'Behance' },
  { icon: FiDribbble, href: 'https://dribbble.com/secretspirit', name: 'Dribbble' },
];

export default function Footer() {
  return (
    <footer className="w-full border-t-3 border-t-primary bg-heading text-divider pt-15 pb-15 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-0">
        {/* Left: Heading & Description */}
        <div className="flex-1 w-full md:w-[60%]">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-divider font-heading">Curious Minds. Meaningful Outcomes.</h2>
          <p className="text-divider text-sm leading-8.5 md:text-lg  font-normal max-w-sm font-body">
            We are a team of experts who turn ideas into impact. With empathy and insight, we craft meaningful experiences because real solutions begin with the right mindset.
          </p>
        </div>
        {/* Right: Navigation Links */}
        <div className="flex  md:justify-center gap-8 md:gap-16 w-full md:w-[40%]">
          {navLinks.map((col, i) => (
            <ul key={i} className="flex flex-col gap-4 max-md:w-1/2">
              {col.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-divider  font-body hover:text-primary text-lg md:text-[20px] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      {/* Divider */}
      <div className="border-t max-w-7xl mx-auto border-[#FFFFFF29] my-4 md:my-15" />
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row md:items-start gap-10">
        {/* Social Icons */}
        <div className="flex items-center justify-between sm:justify-start max-xs:flex-wrap gap-2 md:gap-6 mb-4 md:mb-0 w-full md:w-[70%]">
          {socialLinks.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              aria-label={s.name}
              className="p-2 sm:p-3 rounded-full border border-white/10 flex items-center justify-center text-divider hover:text-primary hover:border-primary transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              target="_blank"
              data-tooltip-id="dark-tooltip"
              data-tooltip-content={s.name}
              rel="noopener noreferrer"
            >
              <s.icon className="w-4.5 h-4.5 lg:w-6 lg:h-6" aria-hidden="true" />
            </Link>
          ))}
          <Link href="https://clutch.co/profile/secretspirit-solutions#summary" target="_blank" data-tooltip-id="dark-tooltip"
            data-tooltip-content="Clutch" aria-label="Clutch" className="p-2 sm:p-3 rounded-full border border-white/10 flex items-center justify-center text-divider hover:text-primary hover:border-primary transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
            <Image src="/icons/clutch-icon.svg" alt="Clutch" width={18} height={18} className="w-4 h-4 lg:w-6 lg:h-6" style={{ width: 'auto', height: 'auto' }} />
          </Link>
        </div>
        {/* Email Subscribe with Heading */}
        <div className="flex flex-col justify-start w-full md:w-[40%] lg:w-[30%]">
          <span className="text-xl text-start w-full md:text-2xl font-bold mb-2 font-heading text-divider">Let’s Connect!</span>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-start gap-2 bg-[#FFFFFF0F] rounded-xl px-2 py-1 max-w-sm max-md:w-full  md:ml-0">
            <FooterSubscribe />
          </form>
        </div>
      </div>
      {/* Copyright */}
      <div className="max-w-7xl mx-auto font-body text-body text-xs md:text-sm text-center xs:text-left">
        &copy; {new Date().getFullYear()} Secretspirit Solutions Pvt. Ltd.
      </div>
    </footer>
  )
}

function FooterSubscribe() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success'|'error'; text: string } | null>(null)

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!email || !/^[\w-+.]+@[\w-]+\.[a-z]{2,}$/i.test(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' })
      return
    }

    setIsSubmitting(true)
    setMessage(null)
    try {
      const res = await submitInquiryEmail(email)
      if (res?.success) {
        setMessage({ type: 'success', text: 'You’re all set. We’ll be in touch soon.' })
        setEmail('')
      } else {
        setMessage({ type: 'error', text: res?.message || 'Failed to send email' })
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'An error occurred' })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setMessage(null), 5000)
    }
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 w-full">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email address"
          aria-label="Email address"
          className="bg-transparent outline-none w-full border-none text-white placeholder-white px-4 py-2 flex-1 text-base"
        />
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          aria-label="Subscribe"
          className="bg-primary cursor-pointer min-w-10 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl hover:bg-primary/90 transition-colors transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Image src="/icons/send-icon.svg" alt="Send" width={18} height={18} />
        </button>
      </div>
      {message && (
        <div className={`mt-2 max-w-xs p-2 rounded text-sm ${message.type === 'success' ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
          {message.text}
        </div>
      )}
    </div>
  )
}
