'use client';

import React from 'react';

const CVWritingCTAFooter = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-green-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Career with Professional CV Writing
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto">
            Join 5,000+ professionals who've advanced their careers with our 
            <strong className="text-white"> expert CV writing service</strong>. 
            Get a professionally written resume that lands interviews and opens doors!
          </p>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-semibold mb-2">Expert Writers</h3>
              <p className="text-green-100 text-sm">Certified professionals with industry experience</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">48-Hour Delivery</h3>
              <p className="text-green-100 text-sm">Professional quality with fast turnaround</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">💯</div>
              <h3 className="text-lg font-semibold mb-2">Satisfaction Guarantee</h3>
              <p className="text-green-100 text-sm">Unlimited revisions until you're happy</p>
            </div>
          </div>

          {/* Pricing Highlight */}
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto mb-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6">Professional CV Writing - Starting at $49</h3>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">$49</div>
                <div className="text-gray-600 text-sm">Professional Resume</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">$89</div>
                <div className="text-gray-600 text-sm">Career Change CV</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">$149</div>
                <div className="text-gray-600 text-sm">Executive Resume</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm mb-4">All packages include ATS optimization, professional formatting, and revisions</p>
              <div className="flex items-center justify-center text-green-600">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Money-back guarantee</span>
              </div>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="mb-8">
            <button 
              onClick={() => document.getElementById('cv-writing-service')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-green-600 hover:bg-gray-100 font-bold text-xl py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Get My Professional CV Written Today →
            </button>
          </div>

          {/* Urgency Element */}
          <div className="bg-yellow-400 text-yellow-900 rounded-xl p-4 max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">⚡ Limited Time: 50% Off Professional Writing</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8 text-green-200">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5,000+ Resumes Written</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>95% Interview Success Rate</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Certified Resume Writers</span>
            </div>
          </div>

          {/* Service Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <h4 className="font-semibold mb-2">Professional Resume</h4>
              <p className="text-green-100 text-sm mb-3">Perfect for job seekers and career advancement</p>
              <div className="text-2xl font-bold">$49</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 relative">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
              </div>
              <h4 className="font-semibold mb-2">Career Change CV</h4>
              <p className="text-green-100 text-sm mb-3">Specialized for career transitions and pivots</p>
              <div className="text-2xl font-bold">$89</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <h4 className="font-semibold mb-2">Executive Resume</h4>
              <p className="text-green-100 text-sm mb-3">C-suite and senior leadership positions</p>
              <div className="text-2xl font-bold">$149</div>
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/pricing" 
              className="text-white hover:text-green-200 font-medium underline transition-colors duration-200"
            >
              View All CV Writing Packages
            </a>
            <span className="text-green-300 hidden sm:block">|</span>
            <a 
              href="/ats-analysis" 
              className="text-white hover:text-green-200 font-medium underline transition-colors duration-200"
            >
              Try Free ATS Resume Checker
            </a>
          </div>

          {/* Final Encouragement */}
          <div className="mt-10 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">Your Dream Job is Just One Resume Away</h3>
            <p className="text-green-100 leading-relaxed">
              Don't let a poorly written resume hold you back from your career goals. Our professional CV writing service 
              has helped thousands of professionals land interviews at top companies, negotiate better salaries, and 
              advance their careers. Your investment in professional resume writing pays for itself with your first job offer.
            </p>
          </div>

          {/* Keywords for SEO */}
          <div className="mt-8 text-xs text-green-300 opacity-75">
            Professional CV Writing Service | Expert Resume Writers | CV Writing Service Online | Affordable Resume Writing
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVWritingCTAFooter;
