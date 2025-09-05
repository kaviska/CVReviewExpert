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
            <a href="/jp" className="flex-shrink-0 flex items-center py-3">
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
              <a href="/jp" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                ホーム
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
                  サービス
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
                      href="/jp/cv-review" 
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-200">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">CVレビュー</div>
                        <div className="text-xs text-gray-500">無料履歴書分析</div>
                      </div>
                    </a>

                    {/* ATS Analysis */}
                    <a 
                      href="/jp/ats-analysis" 
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-200">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">ATS分析</div>
                        <div className="text-xs text-gray-500">スキャンとチェック</div>
                      </div>
                    </a>

                    {/* CV Writing */}
                    <a 
                      href="/jp/cv-writing" 
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-200 transition-colors duration-200">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">CV作成</div>
                        <div className="text-xs text-gray-500">プロフェッショナル作成</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <a href="/jp/pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                料金
              </a>
              <a href="/jp/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                概要
              </a>
              <a href="/jp/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                お問い合わせ
              </a>
            </div>
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a href="/" className="text-sm text-gray-500 hover:text-gray-700">EN</a>
              <span className="text-gray-300">|</span>
              <span className="text-sm font-medium text-blue-600">JP</span>
            </div>
            <a
              href="/jp/cv-review"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              無料CV分析
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          <a href="/jp" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-base font-medium transition-colors duration-200">
            ホーム
          </a>
          
          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-base font-medium transition-colors duration-200"
            >
              サービス
              <svg className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`pl-6 space-y-2 transition-all duration-300 ${isMobileServicesOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <a href="/jp/cv-review" className="block px-3 py-2 text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200">
                CVレビュー
              </a>
              <a href="/jp/ats-analysis" className="block px-3 py-2 text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200">
                ATS分析
              </a>
              <a href="/jp/cv-writing" className="block px-3 py-2 text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200">
                CV作成
              </a>
            </div>
          </div>

          <a href="/jp/pricing" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-base font-medium transition-colors duration-200">
            料金
          </a>
          <a href="/jp/about" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-base font-medium transition-colors duration-200">
            概要
          </a>
          <a href="/jp/contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md text-base font-medium transition-colors duration-200">
            お問い合わせ
          </a>
          
          {/* Language switcher for mobile */}
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-gray-600 text-base font-medium">言語:</span>
            <div className="flex items-center space-x-2">
              <a href="/" className="text-sm text-gray-500 hover:text-gray-700">English</a>
              <span className="text-gray-300">|</span>
              <span className="text-sm font-medium text-blue-600">日本語</span>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="/jp/cv-review"
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:shadow-lg transition-all duration-200"
            >
              無料CV分析を開始
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
