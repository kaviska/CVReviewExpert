'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                CVReviewExpert
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#home" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Pricing
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Login/Register Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-3">
              <button className="relative text-gray-700 hover:text-blue-600 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-md overflow-hidden group">
                <span className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                <span className="relative flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Login
                </span>
              </button>
              <button className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-8 py-3 rounded-xl text-sm font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden group">
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
              <a href="#home" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm font-medium">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
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
