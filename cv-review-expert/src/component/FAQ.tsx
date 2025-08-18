'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is my CV and personal data safe?",
      answer: "Absolutely. Your CV, resume, and personal info are encrypted in transit and at rest. We never sell or share data, and you can delete uploads anytime. We follow GDPR and industry‑standard security best practices."
    },
    {
      question: "Can I use this AI resume checker for any job type?",
      answer: "Yes. Our AI analyzes CVs and resumes across all industries and job levels—from entry‑level to executive. It adapts to each job description and provides tailored, ATS‑friendly feedback."
    },
    {
      question: "What file formats are supported?",
      answer: "PDF, DOC, and DOCX. For best results, upload as PDF to preserve formatting. Our AI extracts text automatically while maintaining layout and keyword integrity."
    },
    {
      question: "How accurate is the AI analysis?",
      answer: "Our AI is trained on large datasets of CVs and job postings. It flags missing keywords, formatting issues, and skill gaps with high accuracy so you can improve your resume and increase interviews."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes. All paid plans include a 30‑day money‑back guarantee. If you’re not satisfied, contact support for a full refund. Free users can upgrade or downgrade anytime."
    },
    {
      question: "How long does the CV analysis take?",
      answer: "Most CV and resume analyses finish in under 60 seconds. 1‑on‑1 consultations (when available) deliver detailed insights within 24–48 hours."
    },
    {
      question: "Can I analyze multiple versions of my CV or resume?",
      answer: "Yes. Pro and Premium plans include unlimited analyses so you can test versions, track improvements, and tailor for each job."
    },
    {
      question: "Do you provide industry-specific feedback?",
      answer: "Yes. Our AI recognizes many industries and provides feedback based on sector‑specific keywords, skills, and formatting preferences so your resume is ATS‑ready and recruiter‑friendly."
    },
    {
      question: "What is a CV and how is it different from a resume?",
      answer: "A CV (curriculum vitae) is a detailed academic and career history, often longer than one page. A resume is a concise, role‑specific summary (usually 1–2 pages). Use a resume for most jobs; use a CV for academia or certain international roles."
    },
    {
      question: "Why is a resume important?",
      answer: "Your resume is your first impression. A clear, keyword‑optimized, ATS‑friendly resume helps you pass screenings, show impact, and win interviews—faster."
    },
    {
      question : "Is this service free ?",
      answer: "Yes, it’s free to start—no hidden charges. Upload your CV and get professional, AI‑powered feedback with detailed analysis and suggestions to improve your resume."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers about our AI-powered CV and resume analysis tool, ATS optimization, and how to get more interview calls.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <div className={`flex-shrink-0 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Our support team helps with CV, resume, ATS, and AI analysis queries. Expect a response within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                Contact Support
              </span>
            </button>
            <button className="relative border-3 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
              <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                Schedule a Call
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
