'use client';

import React from 'react';

const ATSHeroSection = () => {
  const scrollToChecker = () => {
    const checkerElement = document.getElementById('ats-checker');
    if (checkerElement) {
      checkerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Free ATS Resume Checker</span> - 
            <br className="hidden sm:block" />
            <span className="text-gray-800">No Login Required</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Test your resume's ATS score instantly with our <strong>free ATS score checker</strong>. 
            Optimize your CV for Applicant Tracking Systems and increase your chances of landing interviews.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-white px-4 py-2 rounded-full shadow-md border border-blue-200">
              <span className="text-green-600 font-semibold">✓ 100% Free</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-md border border-blue-200">
              <span className="text-green-600 font-semibold">✓ No Registration</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-md border border-blue-200">
              <span className="text-green-600 font-semibold">✓ Instant Results</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-md border border-blue-200">
              <span className="text-green-600 font-semibold">✓ ATS Optimized</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToChecker}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Check My Resume's ATS Score Now →
          </button>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">50,000+ Resumes Analyzed</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">98% Accuracy Rate</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Used by HR Professionals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATSHeroSection;
