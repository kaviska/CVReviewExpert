'use client';

import React from 'react';

const ATSHowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Upload Your Resume",
      description: "Simply drag and drop your CV or click to upload. We support PDF, DOC, and DOCX formats. No registration required.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Add Job Description (Optional)",
      description: "Paste the job description to get targeted ATS analysis. Our system compares your resume against specific job requirements.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Get Instant ATS Score",
      description: "Receive your ATS compatibility score within seconds. Our advanced algorithm analyzes formatting, keywords, and structure.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      number: 4,
      title: "Review Optimization Tips",
      description: "Get detailed feedback on how to improve your resume's ATS score. Follow our recommendations to pass more ATS systems.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our Free ATS Resume Checker Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our ATS score checker analyzes your resume against the same criteria used by 
            Fortune 500 companies. Get professional insights in just 4 simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300 group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-6">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>

              {/* Icon */}
              <div className="text-blue-600 mb-4 mt-4 group-hover:text-blue-700 transition-colors duration-300">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-300 rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to check if your resume is ATS-friendly? Start your free analysis now!
          </p>
          <button 
            onClick={() => document.getElementById('ats-checker')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Test My Resume for Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default ATSHowItWorks;
