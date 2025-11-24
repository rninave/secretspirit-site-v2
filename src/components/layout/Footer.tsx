import { FiDribbble } from 'react-icons/fi';
import { FaBehance, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/works' },
    { label: 'Services', href: '/services' },
  ],
  [
    { label: 'Careers', href: '/careers' },
    { label: 'Blogs', href: '/blogs' },
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
    <footer className="w-full border-t-3 border-t-primary bg-heading text-divider pt-15 pb-15 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-0">
        {/* Left: Heading & Description */}
        <div className="flex-1 w-full md:w-[60%]">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-divider font-heading">Curious Minds. Meaningful Outcomes.</h2>
          <p className="text-divider text-sm leading-[34px] md:text-lg  font-normal max-w-sm font-body">
            We are a team of experts who turn ideas into impact. With empathy and insight, we craft meaningful experiences because real solutions begin with the right mindset.
          </p>
        </div>
        {/* Right: Navigation Links */}
        <div className="flex md:justify-center gap-8 md:gap-16 w-full md:w-[40%]">
          {navLinks.map((col, i) => (
            <ul key={i} className="flex flex-col gap-4">
              {col.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-divider font-body hover:text-primary text-lg md:text-[20px] transition-colors font-medium">
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
        <div className="flex items-center justify-start max-xs:flex-wrap gap-2 md:gap-6 mb-4 md:mb-0 w-full md:w-[70%]">
          {socialLinks.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              className="p-3 rounded-full border border-white/10 flex items-center justify-center text-divider hover:text-primary hover:border-primary transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              target="_blank"
              data-tooltip-id="dark-tooltip"
              data-tooltip-content={s.name}
              rel="noopener noreferrer"
            >
              <s.icon className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]" />
            </Link>
          ))}
          <Link href="https://clutch.co/profile/secretspirit-solutions#summary" target='_blank' data-tooltip-id="dark-tooltip"
              data-tooltip-content="Clutch" className="p-3 rounded-full border border-white/10 flex items-center justify-center text-divider hover:text-primary hover:border-primary transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
            <Image src="/icons/clutch-icon.svg" alt="Send" width={18} height={18} className="lg:w-[24px] lg:h-[24px] w-[18px] h-[18px]" style={{ width: 'auto', height: 'auto' }} />
          </Link>
        </div>
        {/* Email Subscribe with Heading */}
        <div className="flex flex-col items-start md:items-center w-full md:w-[40%] lg:w-[30%]">
          <span className="text-xl text-start w-full md:text-2xl font-bold mb-2 font-heading text-divider">Let’s Connect!</span>
          <form className="flex items-center gap-2 bg-[#FFFFFF0F] rounded-xl px-2 py-1 max-w-sm w-full ml-auto md:ml-0">
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-transparent outline-none border-none text-gray-200 placeholder-gray-400 px-4 py-2 flex-1 text-base"
            />
            <button type="submit" className="bg-primary cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-white text-xl hover:bg-primary/90 transition-colors transform hover:scale-110">
              <Image src="/icons/send-icon.svg" alt="Send" width={18} height={18} style={{ width: 'auto', height: 'auto' }} />
            </button>
          </form>
        </div>
      </div>
      {/* Copyright */}
      <div className="max-w-7xl mx-auto font-body text-gray-400 text-xs md:text-sm text-left">
        &copy; {new Date().getFullYear()} Secretspirit Solutions Pvt. Ltd.
      </div>
    </footer>
  );
}