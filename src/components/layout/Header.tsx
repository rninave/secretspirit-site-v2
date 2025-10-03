"use client";
import Image from "next/image";
import { FiPhoneCall, FiChevronDown, FiX } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { MenuItem, MenuItemDropdown } from "@/interface/header.interface";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-[9999] bg-white w-full h-[76px] py-4 px-4 md:px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
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
          {menuItems.map((item) => {
            // Determine if this link is active
            const isActive = item.href === pathname || (item.dropdown && item.dropdown.some((d) => d.href === pathname));
            return (
              <div key={item.label} className="relative flex flex-col items-center group">
                {item.dropdown ? (
                  <div
                    ref={(el) => {
                      dropdownRefs.current[item.label] = el;
                    }}
                  >
                    <button
                      className={`text-body text-[14px] hover:text-primary hover:cursor-pointer font-body font-medium flex items-center gap-1 ${isActive ? 'text-primary font-bold' : ''}`}
                      onClick={() => handleDropdownClick(item.label)}
                    >
                      {item.label}
                      <FiChevronDown
                        className={`text-xs transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    <span
                      className={`block w-6 h-[2px] bg-primary absolute -top-2 left-3 -translate-x-1/2 rounded-full transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                    ></span>
                    <div
                      className={`absolute top-full left-0 bg-white rounded-lg mt-2 shadow-lg border border-gray-100 min-w-[200px] z-50 transition-all duration-300 ease-in-out transform origin-top ${openDropdown === item.label
                        ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                        }`}
                    >
                      {item.dropdown.map((dropdownItem: MenuItemDropdown) => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-body hover:bg-primary-light hover:text-primary font-body text-sm transition-colors duration-200"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`text-body text-[14px] hover:text-primary font-body font-medium flex flex-col items-center ${isActive ? 'text-primary font-bold' : ''}`}
                  >
                    {item.label}
                    <span
                      className={`block w-6 h-[2px] bg-primary absolute -top-2 left-3 -translate-x-1/2 rounded-full transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                    ></span>
                  </a>
                )}
              </div>
            );
          })}
        </nav>
        {/* Mobile Burger Icon */}
        <button
          className={`lg:hidden flex cursor-pointer hover:bg-primary/30 items-center justify-center p-2 rounded focus:outline-none transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : "rotate-0"}`}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '' : <img src="/icons/menu-icon.svg" alt="Menu" width={24} height={24} />}
        </button>
        {/* Desktop CTA Button */}
        <button className="hidden cursor-pointer lg:flex bg-primary text-white px-4 py-3 rounded-full font-body shadow-btn hover:shadow-btn-reverse font-medium  transition-colors items-center gap-2">
          <span>Let's Talk</span>
          <FiPhoneCall className="text-white" />
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`mdhidden fixed inset-0 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
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
            className="absolute cursor-pointer top-4 right-4 text-2xl text-gray-500 hover:text-gray-800 focus:outline-none md:hidden"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setOpenMobileDropdown(null);
            }}
            aria-label="Close menu"
          >
            <FiX />
          </button>
          <nav className="flex flex-col gap-2 ">
            {menuItems.map((item) => {
              const isActive = item.href === pathname || (item.dropdown && item.dropdown.some((d) => d.href === pathname));
              return (
                <div key={item.label} className="relative flex flex-col items-start group">
                  {item.dropdown ? (
                    <div className="w-full" >
                      <button
                        className="w-full flex cursor-pointer justify-between items-center text-body text-[16px] font-body font-medium gap-1 py-2 group"
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)}
                      >
                        <span className={`${isActive ? "text-primary" : ""} group-hover:text-primary`}>{item.label}</span>
                        <FiChevronDown
                          className={`text-xs ${isActive ? "text-primary" : ""} group-hover:text-primary transition-transform duration-300 ${openMobileDropdown === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      <span
                        className={`block w-6 h-[2px] bg-primary absolute -top-0 left-3 -translate-x-1/2 rounded-full transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                      ></span>
                      {openMobileDropdown === item.label && (
                        <div className="pl-4 flex flex-col gap-1">
                          {item.dropdown.map((dropdownItem: MenuItemDropdown) => {
                            const isDropdownActive = dropdownItem.href === pathname;
                            return (
                              <div key={dropdownItem.label} className="relative">
                                <a
                                  href={dropdownItem.href}
                                  className={`block px-2 py-1 text-body font-body text-sm transition-colors duration-200 ${isDropdownActive ? "text-primary" : "hover:text-primary hover:bg-primary-light"}`}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setOpenMobileDropdown(null);
                                  }}
                                >
                                  {dropdownItem.label}
                                </a>
                                <span
                                  className={`block w-6 h-[2px] bg-primary absolute -top-0 left-3 -translate-x-1/2 rounded-full transition-opacity duration-200 ${isDropdownActive ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`}
                                ></span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={`block text-body text-[16px] font-body font-medium py-2 group ${isActive ? "text-primary" : ""} group-hover:text-primary`}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setOpenMobileDropdown(null);
                      }}
                    >
                      {item.label}
                      <span
                        className={`block w-6 h-[2px] bg-primary absolute -top-0 left-3 -translate-x-1/2 rounded-full transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                      ></span>
                    </a>
                  )}
                </div>
              );
            })}
          </nav>
          <button className="bg-primary cursor-pointer  text-white px-4 py-3 rounded-full font-body shadow-btn hover:shadow-btn-reverse font-medium hover:bg-primary/90 transition-colors flex flex-row-reverse items-center gap-2 mt-4 w-full justify-between">
            <FiPhoneCall className="text-white ml-2" />
            <span>Let's Talk</span>
          </button>
        </div>
      </div>
    </header>
  );
}
