"use client";
import Image from "next/image";
import { FiPhoneCall, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { MenuItem, MenuItemDropdown } from "@/interface/header.interface";

const menuItems: MenuItem[] = [
  {
    label: "About Us",
    dropdown: [
      { label: "About Secretspirit", href: "/about" },
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-[9999] bg-white w-full h-[76px] py-4 px-4 md:px-6 border-b border-gray-200">
      <div className="max-w-lg mx-auto w-full flex items-center justify-between">
        <a href="/">
          <Image
            src="/main-logo.png"
            alt="Secret Spirit"
            width={192}
            height={32}
          />
        </a>
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <div key={item.label} className="relative">
              {item.dropdown ? (
                <div
                  ref={(el) => {
                    dropdownRefs.current[item.label] = el;
                  }}
                >
                  <button
                    className="text-body text-[14px] hover:text-primary hover:cursor-pointer font-display font-medium flex items-center gap-1"
                    onClick={() => handleDropdownClick(item.label)}
                  >
                    {item.label}
                    <FiChevronDown
                      className={`text-xs transition-transform duration-300 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`absolute top-full left-0 bg-white rounded-lg mt-2 shadow-lg border border-gray-100 min-w-[200px] z-50 transition-all duration-300 ease-in-out transform origin-top ${
                      openDropdown === item.label
                        ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
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
        {/* Mobile Burger Icon */}
        <button
          className={`lg:hidden flex items-center justify-center p-2 rounded focus:outline-none transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : "rotate-0"}`}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '' : <img src="/icons/menu-icon.svg" alt="Menu" width={24} height={24} />}
        </button>
        {/* Desktop CTA Button */}
        <button className="hidden lg:flex bg-primary text-white px-4 py-3 rounded-full font-display shadow-btn hover:shadow-btn-reverse font-medium hover:bg-primary/90 transition-colors items-center gap-2">
          <span>Let's Talk</span>
          <FiPhoneCall className="text-white" />
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ transitionProperty: 'opacity' }}
        onClick={() => {
          setIsMobileMenuOpen(false);
          setOpenMobileDropdown(null);
        }}
      >
        {/* Sidebar slides in from the right */}
        <div
          className={`absolute top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg p-6 flex flex-col gap-4 transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={e => e.stopPropagation()}
        >
          {/* Close icon inside sidebar */}
          <button
            className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800 focus:outline-none md:hidden"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setOpenMobileDropdown(null);
            }}
            aria-label="Close menu"
          >
            <FiX />
          </button>
          <nav className="flex flex-col gap-4 mt-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <div>
                    <button
                      className="w-full flex justify-between items-center text-body text-[16px] font-display font-medium gap-1 py-2"
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)}
                    >
                      <span>{item.label}</span>
                      <FiChevronDown
                        className={`text-xs transition-transform duration-300 ${
                          openMobileDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openMobileDropdown === item.label && (
                      <div className="pl-4 flex flex-col gap-1">
                        {item.dropdown.map((dropdownItem: MenuItemDropdown) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-2 py-1 text-body hover:bg-primary-light hover:text-primary font-display text-sm transition-colors duration-200"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setOpenMobileDropdown(null);
                            }}
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block text-body text-[16px] font-display font-medium py-2"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setOpenMobileDropdown(null);
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>
          <button className="bg-primary  text-white px-4 py-3 rounded-full font-display shadow-btn hover:shadow-btn-reverse font-medium hover:bg-primary/90 transition-colors flex flex-row-reverse items-center gap-2 mt-4 w-full justify-between">
            <FiPhoneCall className="text-white ml-2" />
            <span>Let's Talk</span>
          </button>
        </div>
      </div>
    </header>
  );
}
