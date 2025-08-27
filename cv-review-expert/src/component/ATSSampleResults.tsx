'use client';

import React, { useState } from 'react';

const ATSSampleResults = () => {
  const [activeTab, setActiveTab] = useState(0);

  const sampleResults = [
    {
      title: "Marketing Manager Resume",
      score: 85,
      level: "Good",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      analysis: {
        strengths: [
          "Clear section headings (Experience, Education, Skills)",
          "Relevant marketing keywords present",
          "Clean, ATS-friendly formatting",
          "Quantified achievements with metrics"
        ],
        improvements: [
          "Add more industry-specific keywords like 'SEO', 'PPC', 'ROI'",
          "Include technical skills section",
          "Optimize job titles for better keyword matching"
        ],
        keywordMatching: 78,
        formatScore: 92,
        contentRelevance: 85
      }
    },
    {
      title: "Software Developer Resume",
      score: 92,
      level: "Excellent",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      analysis: {
        strengths: [
          "Comprehensive technical skills section",
          "Programming languages clearly listed",
          "Project descriptions with technologies used",
          "Standard section headings used throughout"
        ],
        improvements: [
          "Add more soft skills keywords",
          "Include industry certifications",
          "Mention specific frameworks and tools"
        ],
        keywordMatching: 94,
        formatScore: 89,
        contentRelevance: 93
      }
    },
    {
      title: "Graphic Designer Resume",
      score: 45,
      level: "Needs Improvement",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      analysis: {
        strengths: [
          "Creative industry keywords present",
          "Portfolio links included",
          "Design software skills listed"
        ],
        improvements: [
          "Remove images and graphics for ATS compatibility",
          "Simplify complex layout and formatting",
          "Use standard fonts instead of decorative ones",
          "Add more text-based descriptions of visual work",
          "Include relevant technical skills as text"
        ],
        keywordMatching: 65,
        formatScore: 25,
        contentRelevance: 70
      }
    }
  ];

  const currentResult = sampleResults[activeTab];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-blue-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const getProgressBarColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 70) return "bg-blue-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sample ATS Analysis Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See real examples of how our <strong>free ATS resume checker</strong> analyzes different types of resumes. 
            Learn from these examples to optimize your own CV.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {sampleResults.map((result, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`mx-2 mb-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {result.title}
            </button>
          ))}
        </div>

        {/* Sample Result Display */}
        <div className={`${currentResult.bgColor} ${currentResult.borderColor} border rounded-2xl p-8 shadow-lg`}>
          {/* Score Overview */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {currentResult.title} - ATS Analysis
            </h3>
            <div className={`text-6xl font-bold ${currentResult.color} mb-2`}>
              {currentResult.score}
            </div>
            <div className={`text-xl font-semibold ${currentResult.color} mb-4`}>
              {currentResult.level}
            </div>
            
            {/* Progress Bar */}
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-full h-4 shadow-inner">
                <div 
                  className={`${getProgressBarColor(currentResult.score)} h-4 rounded-full transition-all duration-500 ease-out`}
                  style={{ width: `${currentResult.score}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Strengths */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Strengths
              </h4>
              <ul className="space-y-2">
                {currentResult.analysis.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            {/* Improvements */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-semibold text-orange-700 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Areas for Improvement
              </h4>
              <ul className="space-y-2">
                {currentResult.analysis.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-orange-500 mr-2 mt-1">⚠</span>
                    {improvement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">Score Breakdown</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className={`text-3xl font-bold ${getScoreColor(currentResult.analysis.keywordMatching)} mb-2`}>
                  {currentResult.analysis.keywordMatching}%
                </div>
                <div className="text-gray-600 font-medium">Keyword Matching</div>
                <div className="bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className={`${getProgressBarColor(currentResult.analysis.keywordMatching)} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${currentResult.analysis.keywordMatching}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-3xl font-bold ${getScoreColor(currentResult.analysis.formatScore)} mb-2`}>
                  {currentResult.analysis.formatScore}%
                </div>
                <div className="text-gray-600 font-medium">Format & Structure</div>
                <div className="bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className={`${getProgressBarColor(currentResult.analysis.formatScore)} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${currentResult.analysis.formatScore}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-3xl font-bold ${getScoreColor(currentResult.analysis.contentRelevance)} mb-2`}>
                  {currentResult.analysis.contentRelevance}%
                </div>
                <div className="text-gray-600 font-medium">Content Relevance</div>
                <div className="bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className={`${getProgressBarColor(currentResult.analysis.contentRelevance)} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${currentResult.analysis.contentRelevance}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Want to See Your Resume's ATS Score?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Get detailed analysis and improvement recommendations for your resume in under 30 seconds.
          </p>
          <button 
            onClick={() => document.getElementById('ats-checker')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Analyze My Resume for Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default ATSSampleResults;
