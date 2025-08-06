'use client'
import Image from "next/image";
import { FiPhoneCall, FiChevronDown } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { MenuItem, MenuItemDropdown } from "@/interface/header.interface";

const menuItems: MenuItem[] = [
  {
    label: "About",
    dropdown: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    label: "Services",
    dropdown: [
      { label: "Research", href: "/services/research" },
      { label: "Design", href: "/services/design" },
      { label: "Development", href: "/services/development" },
    ],
  },
  { label: "Hire Us", href: "/hire-us" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const clickedOutside = Object.values(dropdownRefs.current).every(
        (ref) => !ref?.contains(target)
      );
      
      if (clickedOutside) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="w-full h-[76px] py-4 px-6 border-b border-gray-200">
      <div className="max-w-lg mx-auto w-full flex items-center justify-between">
        <a href="/">
          <Image src="/main-logo.png" alt="Secret Spirit"  width={192} height={32} />
        </a>
        <nav className="flex items-center gap-8">
          {menuItems.map((item) => (
            <div key={item.label} className="relative">
              {item.dropdown ? (
                <div ref={(el) => {
                  dropdownRefs.current[item.label] = el;
                }}>
                  <button 
                    className="text-body text-[14px] hover:text-primary hover:cursor-pointer font-display font-medium flex items-center gap-1"
                    onClick={() => handleDropdownClick(item.label)}
                  >
                    {item.label}
                    <FiChevronDown 
                      className={`text-xs transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div 
                    className={`absolute top-full left-0 bg-white rounded-lg mt-2 shadow-lg border border-gray-100 min-w-[200px] z-50 transition-all duration-300 ease-in-out transform origin-top ${
                      openDropdown === item.label 
                        ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto' 
                        : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    {item.dropdown.map((dropdownItem: MenuItemDropdown) => (
                      <a 
                        key={dropdownItem.label}
                        href={dropdownItem.href} 
                        className="block px-4 py-2 text-body hover:bg-primary-light hover:text-primary font-display text-sm transition-colors duration-200"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a 
                  href={item.href} 
                  className="text-body text-[14px] hover:text-primary font-display font-medium"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>
        <button className="bg-primary text-white px-4 py-3 rounded-full font-display shadow-btn hover:shadow-btn-reverse font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
          <span>Let's Talk</span>
          <FiPhoneCall className="text-white" />
        </button>
      </div>
    </header>
  );
}