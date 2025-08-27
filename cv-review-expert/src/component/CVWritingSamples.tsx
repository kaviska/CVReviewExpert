'use client';

import React, { useState } from 'react';

const CVWritingSamples = () => {
  const [activeTab, setActiveTab] = useState(0);

  const samples = [
    {
      title: "Marketing Manager",
      industry: "Digital Marketing",
      experience: "8 years",
      beforeAfter: {
        before: {
          issues: [
            "Generic job descriptions without achievements",
            "No quantified results or metrics",
            "Poor formatting and layout",
            "Missing relevant keywords",
            "Weak professional summary"
          ],
          score: 42
        },
        after: {
          improvements: [
            "Strategic professional summary with key achievements",
            "Quantified results: 'Increased ROI by 150% through data-driven campaigns'",
            "ATS-optimized format and keyword integration",
            "Industry-specific terminology and skills",
            "Clear progression and leadership examples"
          ],
          score: 94,
          results: "Secured 3 interviews within 2 weeks"
        }
      }
    },
    {
      title: "Software Engineer",
      industry: "Technology",
      experience: "5 years",
      beforeAfter: {
        before: {
          issues: [
            "Technical jargon without business context",
            "No mention of project impact or scale",
            "Outdated technology stack",
            "Missing soft skills and leadership",
            "Poor visual hierarchy"
          ],
          score: 38
        },
        after: {
          improvements: [
            "Business-focused technical achievements",
            "Project scale: 'Led development of platform serving 100K+ users'",
            "Modern tech stack with relevant frameworks",
            "Leadership and mentoring experience highlighted",
            "Clean, professional technical resume format"
          ],
          score: 91,
          results: "Landed senior role with 40% salary increase"
        }
      }
    },
    {
      title: "Executive Director",
      industry: "Non-Profit",
      experience: "12 years",
      beforeAfter: {
        before: {
          issues: [
            "Lengthy descriptions without focus",
            "No board-level achievements highlighted",
            "Missing strategic leadership examples",
            "Weak executive presence",
            "Unclear organizational impact"
          ],
          score: 45
        },
        after: {
          improvements: [
            "Executive summary showcasing strategic vision",
            "Board relations: 'Secured $2M funding through board presentations'",
            "Organizational growth: 'Scaled operations from 50 to 200 staff'",
            "Strategic partnerships and stakeholder management",
            "C-suite appropriate formatting and tone"
          ],
          score: 96,
          results: "Appointed to CEO position within 6 months"
        }
      }
    }
  ];

  const currentSample = samples[activeTab];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional CV Writing Service - Before & After Examples
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See real transformations from our <strong>expert CV writers</strong>. These examples showcase 
            how professional resume writing can dramatically improve your career prospects and interview success rate.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {samples.map((sample, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`mx-2 mb-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
              }`}
            >
              {sample.title}
            </button>
          ))}
        </div>

        {/* Sample Display */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          {/* Sample Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {currentSample.title} Resume Transformation
            </h3>
            <div className="flex justify-center space-x-6 text-gray-600">
              <span><strong>Industry:</strong> {currentSample.industry}</span>
              <span><strong>Experience:</strong> {currentSample.experience}</span>
            </div>
          </div>

          {/* Before & After Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="flex items-center mb-4">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                  BEFORE
                </div>
                <div className="text-red-600 font-bold text-lg">
                  ATS Score: {currentSample.beforeAfter.before.score}%
                </div>
              </div>
              <h4 className="text-lg font-semibold text-red-800 mb-4">Common Issues Found:</h4>
              <ul className="space-y-2">
                {currentSample.beforeAfter.before.issues.map((issue, index) => (
                  <li key={index} className="flex items-start text-red-700">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span className="text-sm">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                  AFTER
                </div>
                <div className="text-green-600 font-bold text-lg">
                  ATS Score: {currentSample.beforeAfter.after.score}%
                </div>
              </div>
              <h4 className="text-lg font-semibold text-green-800 mb-4">Professional Improvements:</h4>
              <ul className="space-y-2 mb-4">
                {currentSample.beforeAfter.after.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start text-green-700">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-sm">{improvement}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-green-100 rounded-lg p-3 mt-4">
                <h5 className="font-semibold text-green-800 mb-1">Result:</h5>
                <p className="text-green-700 text-sm">{currentSample.beforeAfter.after.results}</p>
              </div>
            </div>
          </div>

          {/* Improvement Metrics */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Transformation Metrics</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  +{currentSample.beforeAfter.after.score - currentSample.beforeAfter.before.score}%
                </div>
                <div className="text-gray-600">ATS Score Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">48hrs</div>
                <div className="text-gray-600">Delivery Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">2x</div>
                <div className="text-gray-600">Interview Rate Increase</div>
              </div>
            </div>
          </div>
        </div>

        {/* Writer Expertise Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            What Makes Our CV Writers Different?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="font-semibold mb-2">Certified Writers</h4>
              <p className="text-green-100 text-sm">Professional resume writing certifications and HR backgrounds</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏢</div>
              <h4 className="font-semibold mb-2">Industry Experts</h4>
              <p className="text-green-100 text-sm">Real experience in your field and target industry</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-semibold mb-2">Data-Driven</h4>
              <p className="text-green-100 text-sm">ATS optimization based on actual system requirements</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold mb-2">Fast Delivery</h4>
              <p className="text-green-100 text-sm">Professional quality within 48-72 hours guaranteed</p>
            </div>
          </div>
        </div>

        {/* Success Stories Summary */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Real Success Stories from Our CV Writing Service
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">of clients get interviews within 30 days</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">2.5x</div>
              <div className="text-gray-600">average increase in interview callbacks</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">5,000+</div>
              <div className="text-gray-600">professional resumes written</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready for Your Resume Transformation?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Get the same professional results with our expert CV writing service. Start your career transformation today.
          </p>
          <button 
            onClick={() => document.getElementById('cv-writing-service')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get My Professional CV Written →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CVWritingSamples;
