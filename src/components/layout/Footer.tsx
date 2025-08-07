import { FiFacebook, FiInstagram, FiLinkedin, FiDribbble, FiSend } from 'react-icons/fi';
import { FaBehance } from 'react-icons/fa';

const navLinks = [
  [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
  ],
  [
    { label: 'Careers', href: '/careers' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact', href: '/contact' },
  ],
];

const socialLinks = [
  { icon: FiFacebook, href: '#' },
  { icon: FiInstagram, href: '#' },
  { icon: FiLinkedin, href: '#' },
  { icon: FaBehance, href: '#' },
  { icon: FiDribbble, href: '#' },
  { icon: FiSend, href: '#' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-heading font-display text-divider pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
        {/* Left: Heading & Description */}
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-divider">Curious Minds. Meaningful Outcomes.</h2>
          <p className="text-divider text-lg font-normal max-w-sm">
            We are a team of experts who turn ideas into impact. With empathy and insight, we craft meaningful experiences because real solutions begin with the right mindset.
          </p>
        </div>
        {/* Right: Navigation Links */}
        <div className="flex flex-row gap-12 md:gap-16">
          {navLinks.map((col, i) => (
            <ul key={i} className="flex flex-col gap-4">
              {col.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-divider hover:text-primary text-xl transition-colors font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-[#23235F] my-10" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0">
        {/* Social Icons */}
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          {socialLinks.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-divider hover:text-primary hover:border-primary transition-colors text-lg "
              target="_blank"
              rel="noopener noreferrer"
            >
              <s.icon />
            </a>
          ))}
        </div>
        {/* Email Subscribe with Heading */}
        <div className="flex flex-col items-start md:items-end w-full md:w-auto">
          <span className="text-xl md:text-2xl font-bold mb-2 text-divider">Let’s Connect!</span>
          <form className="flex items-center gap-2 bg-[#23235F] rounded-full px-2 py-1 max-w-xs w-full ml-auto md:ml-0">
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-transparent outline-none border-none text-gray-200 placeholder-gray-400 px-4 py-2 flex-1 text-base"
            />
            <button type="submit" className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white text-xl hover:bg-primary/90 transition-colors">
              <FiSend />
            </button>
          </form>
        </div>
      </div>
      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-8 text-gray-400 text-sm text-center md:text-left">
        &copy; {new Date().getFullYear()} Secretspirit Solutions Pvt. Ltd.
      </div>
    </footer>
  );
}