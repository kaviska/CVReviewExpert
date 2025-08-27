'use client';

import React, { useState } from 'react';

const ATSFAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is an ATS score?",
      answer: "An ATS (Applicant Tracking System) score measures how well your resume can be read and processed by automated recruitment software. It evaluates factors like formatting, keyword relevance, and structure. A higher ATS score (typically 70+) means your resume is more likely to pass through initial screening and reach human recruiters."
    },
    {
      question: "How to check CV ATS score for free?",
      answer: "You can check your CV's ATS score for free using our online ATS resume checker. Simply upload your resume in PDF or Word format, optionally add a job description for targeted analysis, and get instant results. No registration or payment required - it's completely free and takes less than 30 seconds."
    },
    {
      question: "Is a 70 ATS score good?",
      answer: "Yes, a 70 ATS score is considered good and indicates your resume is well-optimized for most ATS systems. Scores of 70-89 are in the 'Good' range, while 90+ is 'Excellent'. A score of 70 means your resume has a strong chance of passing initial ATS screening and reaching human recruiters for review."
    },
    {
      question: "Is my perfect CV ATS friendly?",
      answer: "Even a 'perfect' CV might not be ATS-friendly if it uses complex formatting, graphics, or non-standard layouts. ATS systems prefer simple, clean formats with standard headings, readable fonts, and text-based content. Use our free ATS checker to verify if your CV is truly optimized for applicant tracking systems."
    },
    {
      question: "How accurate are ATS resume checkers?",
      answer: "Our ATS resume checker is highly accurate, with a 98% accuracy rate. It simulates real ATS systems used by Fortune 500 companies and analyzes the same criteria: keyword matching, formatting, section structure, and readability. The tool is regularly updated to reflect the latest ATS technologies and standards."
    },
    {
      question: "What ATS score do I need to get hired?",
      answer: "While there's no guaranteed score for getting hired, an ATS score of 70+ significantly increases your chances of passing initial screening. Scores of 80-89 are considered very good, and 90+ are excellent. However, remember that ATS is just the first step - your qualifications and experience ultimately determine hiring decisions."
    },
    {
      question: "Can I use this ATS checker for any job industry?",
      answer: "Yes, our ATS checker works for all industries and job types. Whether you're in tech, healthcare, finance, marketing, or any other field, the tool analyzes universal ATS compatibility factors. For industry-specific optimization, include the job description when running your analysis to get targeted keyword recommendations."
    },
    {
      question: "How often should I check my resume's ATS score?",
      answer: "Check your resume's ATS score whenever you apply for different types of jobs, update your resume, or target new industries. Since our tool is free with no usage limits, you can check multiple versions and optimize for different job applications. We recommend checking after any significant resume changes or when targeting specific job postings."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions About ATS Resume Checkers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about ATS scoring, resume optimization, and our 
            <strong> free ATS score checker</strong>. Learn how to improve your resume's ATS compatibility.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Still Have Questions About ATS Optimization?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our ATS experts are here to help. Test your resume now and get personalized recommendations 
            to improve your ATS score and increase your interview chances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('ats-checker')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Test My Resume Now
            </button>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Contact Our Experts
            </a>
          </div>
        </div>

        {/* SEO Content Block */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            About Our Free ATS Resume Checker
          </h3>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p>
              Our <strong>ATS resume checker free</strong> tool is designed to help job seekers optimize their resumes 
              for Applicant Tracking Systems used by employers worldwide. Unlike other tools that require registration 
              or payment, our <strong>ATS score checker free without login</strong> provides instant, accurate analysis 
              of your resume's compatibility with modern ATS systems.
            </p>
            <p>
              The tool analyzes multiple factors including keyword density, formatting structure, section organization, 
              and overall readability. Whether you're a recent graduate or experienced professional, our free ATS analyzer 
              helps ensure your resume passes initial screening and reaches human recruiters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATSFAQSection;
