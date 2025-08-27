'use client';

import React from 'react';

const CVWritingHeroSection = () => {
  const scrollToService = () => {
    const serviceElement = document.getElementById('cv-writing-service');
    if (serviceElement) {
      serviceElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">Free AI CV Writing Service</span> - 
            <br className="hidden sm:block" />
            <span className="text-gray-800">Powered by Advanced AI</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Get a professionally written resume from our <strong>advanced AI technology</strong>. 
            Boost your interview chances with industry-specific resumes tailored to your career goals.
            <span className="block mt-2 text-green-600 font-semibold">Completely Free - No Payment Required!</span>
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-white px-4 py-2 rounded-full shadow-md border border-green-200">
              <span className="text-green-600 font-semibold">✓ 100% Free</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-md border border-green-200">
              <span className="text-green-600 font-semibold">✓ AI-Powered</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-md border border-green-200">
              <span className="text-green-600 font-semibold">✓ ATS Optimized</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-md border border-green-200">
              <span className="text-green-600 font-semibold">✓ Instant Results</span>
            </div>
          </div>

          {/* Free Service Highlight */}
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 shadow-lg max-w-2xl mx-auto mb-8 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100% FREE</div>
              <div className="text-lg">AI-Powered CV Writing Service</div>
              <div className="text-sm mt-2 opacity-90">
                No credit card required • Unlimited usage • No hidden fees
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToService}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get My Free AI CV Written →
          </button>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">10,000+ CVs Generated</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">100% Free Service</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">AI-Powered Technology</span>
            </div>
          </div>

          {/* AI Technology Features */}
          <div className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Our AI Technology Features:</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
              <span className="bg-white px-3 py-1 rounded-full">✓ Natural Language Processing</span>
              <span className="bg-white px-3 py-1 rounded-full">✓ Industry Intelligence</span>
              <span className="bg-white px-3 py-1 rounded-full">✓ ATS Optimization</span>
              <span className="bg-white px-3 py-1 rounded-full">✓ Real-time Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVWritingHeroSection;
