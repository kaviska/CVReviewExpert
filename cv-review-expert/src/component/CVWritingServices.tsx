'use client';

import React from 'react';

const CVWritingServices = () => {
  const services = [
    {
      title: "Professional Resume Writing",
      price: "$49",
      originalPrice: "$99",
      duration: "48 hours",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: [
        "ATS-optimized resume format",
        "Professional content writing",
        "Industry-specific keywords",
        "2 rounds of revisions",
        "LinkedIn optimization tips",
        "48-hour delivery"
      ],
      popular: true,
      description: "Perfect for job seekers looking to enhance their existing resume with professional writing and ATS optimization."
    },
    {
      title: "Executive CV Writing",
      price: "$149",
      originalPrice: "$299",
      duration: "72 hours",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      features: [
        "Senior-level resume writing",
        "Executive summary creation",
        "Achievement quantification",
        "Leadership story development",
        "Board-ready presentation",
        "Unlimited revisions",
        "72-hour delivery"
      ],
      description: "Designed for C-suite executives, directors, and senior managers seeking top-tier career opportunities."
    },
    {
      title: "Career Change CV",
      price: "$89",
      originalPrice: "$179",
      duration: "48 hours",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      features: [
        "Transferable skills highlighting",
        "Industry transition strategy",
        "Gap explanation handling",
        "Skills-based format",
        "Target role optimization",
        "3 rounds of revisions",
        "Career coaching session"
      ],
      description: "Specialized service for professionals transitioning between industries or making significant career changes."
    }
  ];

  const industries = [
    "Technology & IT", "Healthcare & Medical", "Finance & Banking", "Marketing & Sales",
    "Engineering", "Education", "Legal", "Hospitality", "Manufacturing", "Consulting",
    "Non-Profit", "Government", "Real Estate", "Media & Communications"
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional CV Writing Service Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our <strong>professional resume writing services</strong> designed to showcase your 
            experience and land you more interviews. All packages include ATS optimization and expert writing.
          </p>
        </div>

        {/* Service Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-green-500' : 'border border-gray-200'
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Icon and Title */}
                <div className="text-center mb-6">
                  <div className="text-green-600 mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold text-green-600">
                      {service.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      {service.originalPrice}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">Delivered in {service.duration}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  onClick={() => document.getElementById('cv-writing-service')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular 
                      ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-gray-100 hover:bg-green-50 text-gray-800 hover:text-green-600 border-2 border-transparent hover:border-green-200'
                  }`}
                >
                  Get Started - {service.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Served */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Industries We Serve
          </h3>
          <p className="text-gray-600 text-center mb-6">
            Our <strong>expert CV writers</strong> have experience across all major industries and can 
            create industry-specific resumes that speak the language of your target employers.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-white text-center py-3 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-gray-700 font-medium text-sm">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Professional CV Writing Guarantee</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-green-100">Satisfaction Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">48hrs</div>
              <div className="text-green-100">Fast Delivery Promise</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">ATS</div>
              <div className="text-green-100">Optimized for Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVWritingServices;
