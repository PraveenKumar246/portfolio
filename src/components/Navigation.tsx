import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-orange-200">
      <div className="container flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="#" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 via-vibrant-pink to-vibrant-blue rounded-lg flex items-center justify-center text-white font-bold text-lg">
            PK
          </div>
          <span className="text-xl font-bold gradient-text hidden sm:inline">Praveen</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:gradient-text font-medium transition relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-vibrant-pink group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-vibrant-pink text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transform hover:scale-105 transition font-semibold"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-primary-500 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-orange-200 py-4 px-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2.5 text-gray-700 hover:text-primary-500 font-medium transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 px-4 py-2.5 bg-gradient-to-r from-primary-500 to-vibrant-pink text-white rounded-lg text-center font-semibold hover:shadow-lg transition"
          >
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
}
