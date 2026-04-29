import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const internshipLinks = [
  'Digital Marketing',
  'App Development',
  'Web Development',
  '2D/3D Architecture',
  'Graphics Designing',
  'Artificial Intelligence',
  'Front-End Development',
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-lg shadow-blue-100/50 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img
              src="https://ezitech.org/wp-content/uploads/2021/07/blue-official.png"
              alt="Ezitech Logo"
              className="h-10 w-auto"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <span
              className="hidden items-center font-display font-bold text-xl text-primary-700"
              style={{ display: 'none' }}
            >
              EZITECH
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'About', 'Courses', 'Careers', 'Tech Blogs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`nav-link text-sm font-semibold transition-colors duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-300'
                }`}
              >
                {item}
              </a>
            ))}

            {/* Internships Dropdown */}
            <div className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
              <button
                className={`nav-link flex items-center gap-1 text-sm font-semibold transition-colors duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-300'
                }`}
              >
                Internships <ChevronDown size={14} className={`transition-transform ${dropOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl shadow-blue-100 border border-blue-50 py-2 z-50">
                  {internshipLinks.map((link) => (
                    <a
                      key={link}
                      href="#internships"
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary-600 hover:bg-blue-50 transition-all duration-200 font-medium"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#register"
              className="btn-primary text-sm"
            >
              Intern Registration
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white mx-4 mt-2 rounded-2xl shadow-2xl border border-blue-50 py-4">
          {['Home', 'About', 'Courses', 'Careers', 'Tech Blogs'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="block px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-blue-50 font-semibold transition-all"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="px-6 pt-1 pb-2">
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Internships</p>
            {internshipLinks.map((link) => (
              <a
                key={link}
                href="#internships"
                className="block py-2 text-sm text-gray-600 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                — {link}
              </a>
            ))}
          </div>
          <div className="px-6 pt-2">
            <a href="#register" className="btn-primary w-full justify-center text-center block">
              Intern Registration
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
