'use client';

import React, { useState } from 'react';

const CVWritingFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is included in your professional CV writing service?",
      answer: "Our professional CV writing service includes a complete resume rewrite by an expert writer in your field, ATS optimization for applicant tracking systems, industry-specific keyword integration, professional formatting, 2-3 rounds of revisions, and delivery within 48-72 hours. We also provide LinkedIn optimization tips and interview guidance."
    },
    {
      question: "How much does a professional CV writing service cost?",
      answer: "Our CV writing service starts at $49 for professional resume writing, $89 for career change resumes, and $149 for executive-level CVs. All packages include expert writing, ATS optimization, professional formatting, and revisions. We offer transparent pricing with no hidden fees and guarantee satisfaction."
    },
    {
      question: "Who are your CV writers and what are their qualifications?",
      answer: "Our team consists of certified professional resume writers, former HR professionals, recruitment specialists, and industry experts. Many hold certifications from PARW (Professional Association of Resume Writers) and have 5-15 years of experience in resume writing and career coaching. Each writer specializes in specific industries."
    },
    {
      question: "How long does the CV writing process take?",
      answer: "Most professional resumes are completed within 48-72 hours from when you submit your information. Executive resumes may take up to 5 business days. Rush services are available for an additional fee if you need your resume sooner. We'll provide a specific timeline when you place your order."
    },
    {
      question: "Do you optimize resumes for ATS (Applicant Tracking Systems)?",
      answer: "Yes, absolutely. All our resumes are optimized for ATS systems used by 98% of Fortune 500 companies. We ensure proper keyword placement, compatible formatting, correct file structure, and industry-specific terminology. Your resume will pass ATS screening and reach human recruiters."
    },
    {
      question: "Can you write CVs for career changers or people with employment gaps?",
      answer: "Yes, we specialize in career transition resumes and have extensive experience helping professionals change industries. Our writers know how to highlight transferable skills, address employment gaps positively, and position your background for new career paths. We offer specialized career change packages."
    },
    {
      question: "What information do I need to provide for the CV writing service?",
      answer: "You'll need to provide your current resume (any format), target job titles/industries, career objectives, specific achievements or projects you want highlighted, and any special requirements. The more detailed information you provide, the better we can tailor your professional resume."
    },
    {
      question: "Do you offer revisions if I'm not satisfied with my resume?",
      answer: "Yes, we offer 2-3 rounds of revisions depending on your package, and we guarantee your satisfaction. If you're not completely happy with your professional resume, we'll work with you to make necessary adjustments. For executive packages, we offer unlimited revisions within 30 days."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions About Our CV Writing Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our <strong>professional CV writing service</strong>. 
            Learn about our process, pricing, writers, and what makes our resume writing service the best choice for your career.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-green-50 transition-colors duration-200"
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

        {/* Additional Trust Elements */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Why 5,000+ Professionals Choose Our CV Writing Service
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Certified Writers</h4>
              <p className="text-gray-600 text-sm">Professional resume writers with industry certifications</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fast Delivery</h4>
              <p className="text-gray-600 text-sm">Professional resumes delivered within 48-72 hours</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">ATS Optimized</h4>
              <p className="text-gray-600 text-sm">100% compatibility with applicant tracking systems</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Satisfaction Guarantee</h4>
              <p className="text-gray-600 text-sm">100% satisfaction guarantee with unlimited revisions</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Still Have Questions About Our CV Writing Service?
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Our professional resume writing experts are here to help. Get in touch with our team to discuss 
            your specific needs and learn how we can help advance your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('cv-writing-service')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </button>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Contact Our Experts
            </a>
          </div>
        </div>

        {/* SEO Content Block */}
        <div className="mt-16 bg-white rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            About Our Professional CV Writing Service
          </h3>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p>
              Our <strong>professional CV writing service</strong> has helped over 5,000 professionals advance their careers 
              through expertly crafted resumes. Unlike generic resume templates, our <strong>CV writing service online</strong> 
              provides personalized, industry-specific resumes written by certified professionals with real-world experience.
            </p>
            <p>
              Every resume we create is optimized for both ATS systems and human recruiters, ensuring your application gets 
              noticed. Our <strong>expert CV writers</strong> understand what employers in your industry are looking for and 
              craft compelling narratives that showcase your unique value proposition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVWritingFAQ;
