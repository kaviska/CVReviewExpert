'use client';

import React from 'react';

const ATSOptimizationTips = () => {
  const tips = [
    {
      category: "Formatting Best Practices",
      icon: "📄",
      tips: [
        {
          title: "Use Standard Fonts",
          description: "Stick to ATS-friendly fonts like Arial, Calibri, or Times New Roman (10-12pt size)"
        },
        {
          title: "Simple Layout Structure",
          description: "Avoid complex layouts, columns, or tables that can confuse ATS parsers"
        },
        {
          title: "Standard Section Headings",
          description: "Use conventional headings like 'Experience', 'Education', 'Skills', 'Summary'"
        },
        {
          title: "Save as PDF or Word",
          description: "Use .pdf or .docx formats for best ATS compatibility"
        }
      ]
    },
    {
      category: "Keyword Optimization",
      icon: "🔑",
      tips: [
        {
          title: "Match Job Description Keywords",
          description: "Include relevant keywords and phrases from the job posting naturally in your resume"
        },
        {
          title: "Use Industry Terms",
          description: "Include industry-specific terminology and technical skills relevant to your field"
        },
        {
          title: "Include Variations",
          description: "Use different forms of keywords (e.g., 'manage', 'management', 'manager')"
        },
        {
          title: "Natural Integration",
          description: "Weave keywords naturally into your experience descriptions and skills sections"
        }
      ]
    },
    {
      category: "Content Structure",
      icon: "📝",
      tips: [
        {
          title: "Clear Contact Information",
          description: "Include phone, email, and LinkedIn in a simple format at the top"
        },
        {
          title: "Quantify Achievements",
          description: "Use numbers and metrics to demonstrate your impact and results"
        },
        {
          title: "Relevant Experience First",
          description: "List most relevant experience and skills prominently"
        },
        {
          title: "Consistent Date Format",
          description: "Use consistent date formatting throughout (MM/YYYY or Month Year)"
        }
      ]
    },
    {
      category: "Common Mistakes to Avoid",
      icon: "⚠️",
      tips: [
        {
          title: "Remove Images and Graphics",
          description: "ATS systems cannot read images, logos, or graphic elements"
        },
        {
          title: "Avoid Fancy Formatting",
          description: "Skip text boxes, borders, shading, and unusual formatting"
        },
        {
          title: "Don't Use Headers/Footers",
          description: "Important information in headers/footers might be ignored by ATS"
        },
        {
          title: "Avoid Abbreviations Only",
          description: "Spell out acronyms at least once (e.g., 'Search Engine Optimization (SEO)')"
        }
      ]
    }
  ];

  const quickWins = [
    {
      icon: "⚡",
      title: "5-Minute Fixes",
      items: [
        "Replace fancy fonts with Arial or Calibri",
        "Remove all images and graphics",
        "Use bullet points instead of paragraphs",
        "Add a 'Skills' section with relevant keywords"
      ]
    },
    {
      icon: "🎯",
      title: "Strategic Improvements",
      items: [
        "Tailor keywords for each job application",
        "Quantify achievements with specific numbers",
        "Optimize your professional summary",
        "Include industry certifications and licenses"
      ]
    },
    {
      icon: "🔍",
      title: "Advanced Optimization",
      items: [
        "Research company-specific keywords",
        "Include relevant project names and technologies",
        "Optimize for long-tail keyword phrases",
        "Test multiple resume versions for different roles"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ATS Resume Optimization Tips & Best Practices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the art of creating ATS-friendly resumes with our comprehensive guide. 
            These proven strategies will help improve your <strong>ATS score</strong> and increase your interview chances.
          </p>
        </div>

        {/* Main Tips Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {tips.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-4">
                {category.tips.map((tip, tipIndex) => (
                  <div key={tipIndex} className="border-l-4 border-blue-400 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {tip.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Wins Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Quick ATS Optimization Wins
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickWins.map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{section.icon}</span>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {section.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-700">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ATS-Friendly Resume Template */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            ATS-Friendly Resume Structure Template
          </h3>
          <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm">
            <div className="space-y-4">
              <div>
                <div className="font-bold text-blue-600">[Your Name]</div>
                <div className="text-gray-600">Phone | Email | LinkedIn | City, State</div>
              </div>
              
              <div>
                <div className="font-bold text-blue-600 border-b border-gray-300 pb-1">PROFESSIONAL SUMMARY</div>
                <div className="text-gray-600 mt-2">2-3 lines highlighting your experience and key skills with relevant keywords</div>
              </div>
              
              <div>
                <div className="font-bold text-blue-600 border-b border-gray-300 pb-1">EXPERIENCE</div>
                <div className="mt-2">
                  <div className="font-semibold">Job Title | Company Name | Dates</div>
                  <div className="text-gray-600 ml-4">
                    • Achievement with quantified results<br/>
                    • Responsibility with relevant keywords<br/>
                    • Impact statement with metrics
                  </div>
                </div>
              </div>
              
              <div>
                <div className="font-bold text-blue-600 border-b border-gray-300 pb-1">SKILLS</div>
                <div className="text-gray-600 mt-2">Technical Skills, Software, Certifications, Languages</div>
              </div>
              
              <div>
                <div className="font-bold text-blue-600 border-b border-gray-300 pb-1">EDUCATION</div>
                <div className="text-gray-600 mt-2">Degree | University | Graduation Year</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry-Specific Tips */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Industry-Specific ATS Keywords to Include
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-purple-200">Technology</h4>
              <ul className="text-sm space-y-1 text-purple-100">
                <li>• Programming languages</li>
                <li>• Frameworks & libraries</li>
                <li>• Cloud platforms (AWS, Azure)</li>
                <li>• Agile/Scrum methodology</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-200">Marketing</h4>
              <ul className="text-sm space-y-1 text-purple-100">
                <li>• SEO/SEM expertise</li>
                <li>• Google Analytics</li>
                <li>• Social media management</li>
                <li>• ROI/KPI optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-200">Finance</h4>
              <ul className="text-sm space-y-1 text-purple-100">
                <li>• Financial modeling</li>
                <li>• Risk management</li>
                <li>• Compliance (SOX, GAAP)</li>
                <li>• Budget forecasting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-200">Healthcare</h4>
              <ul className="text-sm space-y-1 text-purple-100">
                <li>• Patient care</li>
                <li>• HIPAA compliance</li>
                <li>• Electronic health records</li>
                <li>• Quality improvement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Optimize Your Resume for ATS?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Use our free ATS checker to see how well your resume follows these best practices and get personalized improvement suggestions.
          </p>
          <button 
            onClick={() => document.getElementById('ats-checker')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Check My Resume's ATS Score →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ATSOptimizationTips;
