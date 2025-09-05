'use client';

import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Handle dropdown interactions
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center py-3">
              <img
                src="/logo.png"
                alt="AUCAL Logo"
                className="h-28 w-auto mr-2"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Home
              </a>
              
              {/* Services Dropdown */}
              <div 
                className="relative" 
                ref={servicesRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center group"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ease-out transform origin-top ${
                    isServicesOpen 
                      ? 'opacity-100 scale-100 translate-y-0 visible' 
                      : 'opacity-0 scale-95 -translate-y-2 invisible'
                  }`}
                  style={{ zIndex: 50 }}
                >
                  <div className="py-2">
                    {/* CV Review */}
                    <a 
                      href="/cv-review" 
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">CV Review</div>
                        <div className="text-xs text-gray-500">Professional resume analysis</div>
                      </div>
                    </a>

                    {/* ATS Analysis */}
                    <a 
                      href="/ats-analysis" 
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">ATS Analysis</div>
                        <div className="text-xs text-gray-500">Free ATS score checker</div>
                      </div>
                    </a>

                    {/* CV Writing */}
                    <a 
                      href="/cv-writing" 
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-200 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">CV Writing</div>
                        <div className="text-xs text-gray-500">Free AI-powered CV writing</div>
                      </div>
                    </a>
                  </div>
                  
                  {/* Featured Badge */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-3 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-600">
                      <svg className="w-4 h-4 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-medium">5,000+ professionals served</span>
                    </div>
                  </div>
                </div>
              </div>

              <a href="/all-blog" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Blogs
              </a>
              <a href="/specialized-professionals-resume-review" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Specialized
              </a>
              <a href="/pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Pricing
              </a>
              <a href="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                About
              </a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Language Switcher & Login/Register Buttons */}
            <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-blue-600">EN</span>
                <span className="text-gray-300">|</span>
                <a href="/jp" className="text-sm text-gray-500 hover:text-gray-700">JP</a>
              </div>
              <a
              href="/login"
              className="relative text-gray-700 hover:text-blue-600 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-md overflow-hidden group"
              >
              <span className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
              <span className="relative flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Login
              </span>
              </a>
              <a
              href="/register"
              className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-8 py-3 rounded-xl text-sm font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden group"
              >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                </svg>
                Register
              </span>
              </a>
            </div>
            </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              
              {/* Mobile Services Dropdown */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="text-gray-600 hover:text-blue-600 flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                  <svg 
                    className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mobile Services Submenu */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 space-y-1">
                    <a href="/cv-review" className="flex items-center text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm font-medium">
                      <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      CV Review
                    </a>
                    <a href="/ats-analysis" className="flex items-center text-gray-600 hover:text-green-600 block px-3 py-2 rounded-md text-sm font-medium">
                      <div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      ATS Analysis
                    </a>
                    <a href="/cv-writing" className="flex items-center text-gray-600 hover:text-purple-600 block px-3 py-2 rounded-md text-sm font-medium">
                      <div className="w-6 h-6 bg-purple-500 rounded-md flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </div>
                      CV Writing
                    </a>
                  </div>
                </div>
              </div>

              <a href="/all-blog" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm font-medium">
                Blogs
              </a>
              <a href="/specialized-professionals-resume-review" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm font-medium">
                Specialized
              </a>
              <a href="/pricing" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </a>
              <a href="/about" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
              
              {/* Language switcher for mobile */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-gray-600 text-sm font-medium">Language:</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-blue-600">English</span>
                  <span className="text-gray-300">|</span>
                  <a href="/jp" className="text-sm text-gray-500 hover:text-gray-700">日本語</a>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="space-y-3">
                  <button className="relative text-gray-700 hover:text-blue-600 block px-4 py-3 rounded-xl text-sm font-bold w-full text-left transition-all duration-300 transform hover:scale-105 hover:shadow-md overflow-hidden group">
                    <span className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                    <span className="relative flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Login
                    </span>
                  </button>
                  <button className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white block px-4 py-3 rounded-xl text-sm font-bold w-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                      </svg>
                      Register
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
