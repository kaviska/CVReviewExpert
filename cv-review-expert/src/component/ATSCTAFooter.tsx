'use client';

import React from 'react';

const ATSCTAFooter = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Boost Your Interview Chances Today
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Join over 50,000 job seekers who've improved their resume's ATS score with our 
            <strong className="text-white"> free ATS resume checker</strong>. 
            No registration required - get instant results now!
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Instant Analysis</h3>
              <p className="text-blue-100 text-sm">Get your ATS score in under 30 seconds</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">💯</div>
              <h3 className="text-lg font-semibold mb-2">100% Free</h3>
              <p className="text-blue-100 text-sm">No hidden costs or premium upgrades</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Actionable Tips</h3>
              <p className="text-blue-100 text-sm">Get specific improvement recommendations</p>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="mb-8">
            <button 
              onClick={() => document.getElementById('ats-checker')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-xl py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Check My Resume's ATS Score - FREE →
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8 text-blue-200">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>50,000+ Resumes Analyzed</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>98% Accuracy Rate</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Trusted by HR Professionals</span>
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/cv-review" 
              className="text-white hover:text-blue-200 font-medium underline transition-colors duration-200"
            >
              Need a Complete CV Review?
            </a>
            <span className="text-blue-300 hidden sm:block">|</span>
            <a 
              href="/cv-writing" 
              className="text-white hover:text-blue-200 font-medium underline transition-colors duration-200"
            >
              Professional CV Writing Service
            </a>
          </div>

          {/* Final Encouragement */}
          <div className="mt-10 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">Why ATS Optimization Matters</h3>
            <p className="text-blue-100 leading-relaxed">
              75% of resumes never reach human eyes due to ATS filtering. Don't let a poor ATS score 
              prevent you from landing your dream job. Our free checker helps ensure your resume 
              passes initial screening and gets noticed by recruiters.
            </p>
          </div>

          {/* Keywords for SEO */}
          <div className="mt-8 text-xs text-blue-300 opacity-75">
            Free ATS Resume Checker | ATS Score Checker Free Without Login | Resume ATS Compatibility Test
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATSCTAFooter;
