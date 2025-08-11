'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is my data safe?",
      answer: "Absolutely! We take your privacy seriously. Your CV and personal information are encrypted and stored securely. We never share your data with third parties, and you can delete your information at any time. Our platform is GDPR compliant and follows industry-standard security practices."
    },
    {
      question: "Can I use this for any job type?",
      answer: "Yes! Our AI is trained on CVs from all industries and job levels - from entry-level positions to executive roles. Whether you're in tech, healthcare, finance, education, or any other field, our analysis adapts to your specific industry requirements and provides relevant feedback."
    },
    {
      question: "What file formats are supported?",
      answer: "We support PDF, DOC, and DOCX formats. For best results, we recommend uploading your CV as a PDF to preserve formatting. Our system can analyze CVs up to 10MB in size and automatically extracts text while maintaining the original layout structure."
    },
    {
      question: "How accurate is the AI analysis?",
      answer: "Our AI has been trained on millions of successful CVs and job postings, achieving a 94% accuracy rate in identifying improvement areas. However, we recommend using our suggestions as guidance alongside your own judgment and industry knowledge."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes! We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact our support team for a full refund. Free users can always upgrade or downgrade their plans as needed."
    },
    {
      question: "How long does the analysis take?",
      answer: "Most analyses complete in under 60 seconds! Our AI processes your CV instantly and provides comprehensive feedback. For Premium users with 1-on-1 consultations, you'll receive additional insights within 24-48 hours."
    },
    {
      question: "Can I analyze multiple versions of my CV?",
      answer: "Absolutely! Pro and Premium users get unlimited analyses, so you can test different versions, track improvements, and optimize your CV for different job applications. Free users get 1 analysis per month."
    },
    {
      question: "Do you provide industry-specific feedback?",
      answer: "Yes! Our AI recognizes different industries and provides tailored feedback based on sector-specific requirements. We cover over 50 industries and understand the unique keywords, skills, and formatting preferences for each field."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We&apos;ve got answers. Find everything you need to know about our CV analysis service.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 transform transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help. Get in touch and we&apos;ll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                Contact Support
              </span>
            </button>
            <button className="relative border-3 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
              <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Schedule a Call
              </span>
            </button>
          </div>
        </div>

        {/* Help Resources */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">User Guide</h4>
            <p className="text-gray-600 text-sm">Step-by-step instructions</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Video Tutorials</h4>
            <p className="text-gray-600 text-sm">Learn with visual guides</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Live Chat</h4>
            <p className="text-gray-600 text-sm">Instant help when you need it</p>
          </div>
        </div>
      </div>
    </section>
  );
}
