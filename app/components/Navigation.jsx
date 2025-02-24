'use client';

// components/Navigation/Navbar.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavItem from './NavItem';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/influenceai-logo.svg"
                alt="Company Logo"
                width={40}
                height={40}
                className="mr-2"
                priority
              />
              <span className="text-primary font-bold text-xl">InfluenceAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem href="/" label="Home" />
            <NavItem href="/features" label="Features" />
            <NavItem href="/casestudies" label="Case Studies" />
            <NavItem href="/brand" label="Brand" />
            <NavItem href="/influencer" label="Influencer" />
            <NavItem href="/about" label="About" />
            <NavItem href="/contact" label="Contact" />

            <Link href="/signin" className="btn-primary">
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavItem href="/" label="Home" />
            <MobileNavItem href="/features" label="Features" />
            <MobileNavItem href="/casestudies" label="Case Studies" />
            <MobileNavItem href="/brand" label="Brand" />
            <MobileNavItem href="/influencer" label="Influencer" />
            <MobileNavItem href="/about" label="About" />
            <MobileNavItem href="/contact" label="Contact" />

            <Link href="/signin" className="block w-full text-center py-3 my-2 rounded bg-primary text-white font-medium">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Mobile navigation item with active state
const MobileNavItem = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href ||
                  (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`block py-2 px-4 rounded nav-link ${
        isActive
          ? 'bg-blue-50 text-primary active'
          : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
      }`}
    >
      {label}
    </Link>
  );
};



export default Navigation;