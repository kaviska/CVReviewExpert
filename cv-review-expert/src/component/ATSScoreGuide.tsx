'use client';

import React from 'react';

const ATSScoreGuide = () => {
  const scoreRanges = [
    {
      range: "90-100",
      level: "Excellent",
      color: "bg-green-500",
      textColor: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      description: "Your resume is highly ATS-optimized and will likely pass most applicant tracking systems.",
      tips: [
        "Maintain current formatting structure",
        "Continue using relevant keywords",
        "Keep sections clearly defined"
      ]
    },
    {
      range: "70-89",
      level: "Good",
      color: "bg-blue-500",
      textColor: "text-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      description: "Your resume is well-optimized for ATS systems with minor improvements needed.",
      tips: [
        "Add more industry-specific keywords",
        "Optimize section headings",
        "Check for formatting consistency"
      ]
    },
    {
      range: "50-69",
      level: "Fair",
      color: "bg-yellow-500",
      textColor: "text-yellow-700",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      description: "Your resume needs moderate optimization to improve ATS compatibility.",
      tips: [
        "Simplify complex formatting",
        "Include more relevant keywords",
        "Use standard section headings",
        "Remove images and graphics"
      ]
    },
    {
      range: "Below 50",
      level: "Needs Improvement",
      color: "bg-red-500",
      textColor: "text-red-700",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      description: "Your resume requires significant optimization to pass ATS systems effectively.",
      tips: [
        "Use a simple, clean format",
        "Replace images with text",
        "Include job-relevant keywords",
        "Use standard fonts and formatting",
        "Avoid complex tables or columns"
      ]
    }
  ];

  const commonIssues = [
    {
      issue: "Complex Formatting",
      solution: "Use simple, clean layouts with standard fonts like Arial or Calibri",
      icon: "📄"
    },
    {
      issue: "Missing Keywords",
      solution: "Include relevant industry keywords and skills mentioned in job descriptions",
      icon: "🔑"
    },
    {
      issue: "Non-Standard Sections",
      solution: "Use conventional headings like 'Experience', 'Education', 'Skills'",
      icon: "📝"
    },
    {
      issue: "Images and Graphics",
      solution: "Replace visual elements with text descriptions",
      icon: "🖼️"
    },
    {
      issue: "Unusual File Formats",
      solution: "Save as PDF or Word document for best compatibility",
      icon: "💾"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Understanding Your ATS Score
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn what your ATS score means and how to improve it. Our scoring system is based on 
            real ATS algorithms used by top companies worldwide.
          </p>
        </div>

        {/* Score Ranges */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            ATS Score Breakdown
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scoreRanges.map((score, index) => (
              <div 
                key={index} 
                className={`${score.bgColor} ${score.borderColor} border rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className={`${score.color} text-white px-3 py-1 rounded-full font-bold text-sm mr-3`}>
                    {score.range}
                  </div>
                  <h4 className={`text-xl font-semibold ${score.textColor}`}>
                    {score.level}
                  </h4>
                </div>
                <p className="text-gray-700 mb-4">
                  {score.description}
                </p>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Recommendations:</h5>
                  <ul className="space-y-1">
                    {score.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-gray-600 text-sm flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Issues */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Common ATS Issues & Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300 border border-gray-200"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.issue}
                </h4>
                <p className="text-gray-600">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ATS Facts */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Did You Know? ATS Facts That Matter
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">75%</div>
              <div className="text-blue-100">of resumes never reach human eyes due to ATS filtering</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">of Fortune 500 companies use ATS systems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">6 sec</div>
              <div className="text-blue-100">average time ATS spends scanning your resume</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Improve Your ATS Score?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Use our free ATS checker to identify areas for improvement and boost your interview chances.
          </p>
          <button 
            onClick={() => document.getElementById('ats-checker')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Check My ATS Score Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ATSScoreGuide;
