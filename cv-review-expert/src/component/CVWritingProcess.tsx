'use client';

import React from 'react';

const CVWritingProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Submit Your Information",
      description: "Upload your current resume and provide details about your target role, career goals, and specific requirements. Our intake process ensures we understand your unique situation.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      details: [
        "Upload current resume (any format)",
        "Specify target job title/industry",
        "Share career objectives",
        "Provide any special requirements"
      ]
    },
    {
      number: 2,
      title: "Expert Writer Assignment",
      description: "We match you with a specialized resume writer who has experience in your industry. Your assigned writer reviews your background and develops a personalized writing strategy.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      details: [
        "Industry-specific writer selection",
        "Background analysis and review",
        "Writing strategy development",
        "Timeline and milestone setting"
      ]
    },
    {
      number: 3,
      title: "Professional Writing & Optimization",
      description: "Your writer crafts a compelling, ATS-optimized resume that highlights your achievements and aligns with your target role. Every section is strategically written for maximum impact.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      details: [
        "Strategic content development",
        "ATS keyword optimization",
        "Achievement quantification",
        "Professional formatting applied"
      ]
    },
    {
      number: 4,
      title: "Review & Refinement",
      description: "Receive your professionally written resume for review. We include revision rounds to ensure complete satisfaction and make any necessary adjustments based on your feedback.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      details: [
        "First draft delivery",
        "Client feedback incorporation",
        "Professional proofreading",
        "Final version delivery"
      ]
    }
  ];

  const benefits = [
    {
      title: "ATS Optimization Guarantee",
      description: "Every resume is optimized to pass Applicant Tracking Systems used by 98% of Fortune 500 companies.",
      icon: "🎯"
    },
    {
      title: "Industry Expertise",
      description: "Writers with real experience in your field who understand industry-specific requirements and trends.",
      icon: "👥"
    },
    {
      title: "Fast Turnaround",
      description: "Professional resumes delivered within 48-72 hours without compromising on quality.",
      icon: "⚡"
    },
    {
      title: "Unlimited Revisions",
      description: "We work with you until you're completely satisfied with your professional resume.",
      icon: "🔄"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Professional CV Writing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final delivery, our <strong>CV writing service online</strong> follows 
            a proven 4-step process that delivers results. Here's how we create your winning resume.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Step Header */}
                <div className="flex items-start mb-6">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="text-green-600 mb-3">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Step Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Step Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Why Choose Our Resume Writing Service?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Typical Project Timeline
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-200 hidden lg:block"></div>
            
            {/* Timeline Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                { time: "Day 1", task: "Information Submitted", duration: "1 hour" },
                { time: "Day 1-2", task: "Writer Assignment & Analysis", duration: "24 hours" },
                { time: "Day 2-3", task: "Professional Writing", duration: "24 hours" },
                { time: "Day 3-4", task: "Review & Final Delivery", duration: "24 hours" }
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mx-auto mb-4 relative z-10">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.time}</h4>
                  <p className="text-gray-600 text-sm mb-1">{item.task}</p>
                  <p className="text-xs text-gray-500">({item.duration})</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Get Your Professional Resume Written?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of professionals who've advanced their careers with our expert CV writing services.
          </p>
          <button 
            onClick={() => document.getElementById('cv-writing-service')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your Professional CV Today →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CVWritingProcess;
