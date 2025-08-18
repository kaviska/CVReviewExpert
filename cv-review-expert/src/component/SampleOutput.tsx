export default function SampleOutput() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sample <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ATS Resume Checker</span> & CV Analysis Report
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preview the exact feedback you&apos;ll get: ATS compatibility score, keyword match, formatting fixes, and action steps—everything you need to pass screening and impress recruiters.
          </p>
        </div>

        {/* Demo Report */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Report Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">CV & Resume Analysis Report</h3>
                  <p className="text-blue-100">John Smith - Software Engineer</p>
                  <p className="text-blue-200 text-sm mt-1">Analysis Date: {new Date().toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold mb-1">87/100</div>
                  <div className="text-blue-100">Overall Score</div>
                  <div className="flex items-center mt-2">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Report Content */}
            <div className="p-8">
              {/* Comprehensive Score Breakdown */}
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">92</div>
                  <div className="text-xs text-gray-600">ATS Compatibility</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">85</div>
                  <div className="text-xs text-gray-600">Keyword Match</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">90</div>
                  <div className="text-xs text-gray-600">Format Quality</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">81</div>
                  <div className="text-xs text-gray-600">Content Score</div>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">88</div>
                  <div className="text-xs text-gray-600">Grammar Check</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg border border-teal-200">
                  <div className="text-2xl font-bold text-teal-600 mb-1">83</div>
                  <div className="text-xs text-gray-600">Personalization</div>
                </div>
              </div>

              {/* 1. Summary Analysis */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">1</span>
                  </span>
                  Summary Analysis
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">✅ Strengths Highlighted</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Strong technical skills presentation</li>
                      <li>• Effective use of action verbs</li>
                      <li>• Quantified achievements included</li>
                      <li>• Professional email format</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-600 mb-2">⚠️ Areas for Improvement</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Missing industry-specific keywords</li>
                      <li>• Lacks quantifiable achievements in some roles</li>
                      <li>• Professional summary needs enhancement</li>
                      <li>• Contact section could be optimized</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">📊 Score Breakdown</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Relevance:</span>
                        <span className="font-semibold">85/100</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Clarity:</span>
                        <span className="font-semibold">90/100</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Formatting:</span>
                        <span className="font-semibold">88/100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Skill & Keyword Match */}
              <div className="mb-8 p-6 bg-blue-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">2</span>
                  </span>
                  Skills & Keyword Analysis
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-green-600 mb-3">✅ Skills Found in Resume</h5>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "React", "Node.js", "Python", "Git", "Agile", "SQL", "AWS"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">8 relevant skills detected</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-600 mb-3">❌ Missing Important Keywords</h5>
                    <div className="flex flex-wrap gap-2">
                      {["Docker", "Kubernetes", "Microservices", "CI/CD", "Machine Learning", "DevOps"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">6 high-priority skills to add</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <h6 className="font-semibold text-gray-700 mb-2">💡 Keyword Optimization Suggestions:</h6>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Add "Cloud Computing" and "Containerization" to match job requirements</li>
                    <li>• Include "Team Leadership" and "Project Management" for senior roles</li>
                    <li>• Emphasize "Problem Solving" and "Innovation" soft skills</li>
                  </ul>
                </div>
              </div>

              {/* 3. Experience & Achievements Feedback */}
              <div className="mb-8 p-6 bg-purple-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">3</span>
                  </span>
                  Experience & Achievements Analysis
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                    <h6 className="font-semibold text-green-600 mb-2">🌟 Most Impressive Experience</h6>
                    <p className="text-sm text-gray-700">
                      "Led development of e-commerce platform handling 10,000+ daily transactions" - 
                      <span className="text-green-600 font-medium"> Excellent quantification and impact</span>
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-orange-400">
                    <h6 className="font-semibold text-orange-600 mb-2">📈 Needs Quantification</h6>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-gray-600">❌ Current: "Improved application performance"</p>
                        <p className="text-sm text-gray-700">✅ Better: "Improved application performance by 45%, reducing load times from 3.2s to 1.8s"</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                    <h6 className="font-semibold text-red-600 mb-2">⚠️ Vague Statements to Rewrite</h6>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• "Responsible for various tasks" → Specify exact responsibilities</li>
                      <li>• "Worked with team" → "Collaborated with 5-person cross-functional team"</li>
                      <li>• "Handled projects" → "Managed 3 concurrent projects worth $2M+"</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. Formatting & Readability */}
              <div className="mb-8 p-6 bg-green-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">4</span>
                  </span>
                  Formatting & Readability Assessment
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h6 className="font-semibold text-green-600 mb-2">✅ Format Strengths</h6>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Consistent section headers</li>
                      <li>• Proper bullet point usage</li>
                      <li>• Clean typography</li>
                      <li>• Good white space balance</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold text-orange-600 mb-2">📝 Suggestions</h6>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Use consistent date formats</li>
                      <li>• Align text consistently</li>
                      <li>• Consider using bold for company names</li>
                      <li>• Add more spacing between sections</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-600 mb-2">📏 Length Analysis</h6>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Current length:</span>
                        <span className="font-semibold text-green-600">2 pages ✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Word count:</span>
                        <span className="font-semibold">485 words</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Recommended:</span>
                        <span className="font-semibold">400-600 words</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Grammar & Language Check */}
              <div className="mb-8 p-6 bg-yellow-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">5</span>
                  </span>
                  Grammar & Language Review
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h6 className="font-semibold text-red-600 mb-3">🔍 Issues Detected</h6>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-3 rounded border-l-4 border-red-400">
                        <p className="text-gray-600">Line 15: "recieved" → <span className="font-semibold text-green-600">"received"</span></p>
                      </div>
                      <div className="bg-white p-3 rounded border-l-4 border-red-400">
                        <p className="text-gray-600">Line 23: Missing comma after "Furthermore"</p>
                      </div>
                      <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                        <p className="text-gray-600">Consider: "utilize" → "use" (simpler language)</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-600 mb-3">💼 Professional Tone Suggestions</h6>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-3 rounded">
                        <p className="text-gray-600">Replace "stuff" with "responsibilities"</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <p className="text-gray-600">Use active voice: "Managed team" vs "Team was managed by me"</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <p className="text-gray-600">Add power words: "Spearheaded", "Orchestrated", "Optimized"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. ATS Compatibility Score */}
              <div className="mb-8 p-6 bg-green-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">6</span>
                  </span>
                  ATS Compatibility Analysis
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="text-3xl font-bold text-green-600 mr-4">92/100</div>
                      <div>
                        <div className="text-lg font-semibold text-green-600">Excellent ATS Score</div>
                        <div className="text-sm text-gray-600">High chance of passing screening</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                      <div className="bg-green-500 h-3 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-700 mb-3">🎯 ATS Optimization Tips</h6>
                    <ul className="text-sm space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Standard section headings used</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Simple, clean formatting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>No complex tables or graphics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">!</span>
                        <span>Add more job-specific keywords in skills section</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 7. Personalization Assessment */}
              <div className="mb-8 p-6 bg-indigo-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">7</span>
                  </span>
                  Personalization & Job Matching
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <h6 className="font-semibold text-gray-700">Job Description Alignment</h6>
                      <p className="text-sm text-gray-600">How well your resume matches the target role</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-indigo-600">83%</div>
                      <div className="text-sm text-gray-500">Match Score</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h6 className="font-semibold text-green-600 mb-2">✅ Well Tailored</h6>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Technical skills match job requirements</li>
                        <li>• Experience level appropriate for role</li>
                        <li>• Industry background aligns well</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h6 className="font-semibold text-orange-600 mb-2">💡 Personalization Tips</h6>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Add a customized professional summary</li>
                        <li>• Highlight specific company technologies</li>
                        <li>• Mention relevant certifications prominently</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8. Downloadable Report Preview */}
              <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">8</span>
                  </span>
                  Downloadable Resources
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-dashed border-green-300">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-green-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <h6 className="font-semibold text-gray-700">Detailed PDF Report</h6>
                      <p className="text-sm text-gray-600 mt-1">Complete analysis with all recommendations</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-dashed border-blue-300">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-blue-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      <h6 className="font-semibold text-gray-700">Optimized CV/Resume</h6>
                      <p className="text-sm text-gray-600 mt-1">Improved version with all suggestions applied</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-dashed border-purple-300">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-purple-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <h6 className="font-semibold text-gray-700">Cover Letter Template</h6>
                      <p className="text-sm text-gray-600 mt-1">Tailored template based on your profile</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Example Rewrite Suggestion */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  💡 Before & After: CV/Resume Enhancement Examples
                </h4>
                <div className="space-y-6">
                  <div>
                    <h6 className="font-semibold text-gray-700 mb-3">Professional Summary Improvement</h6>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium text-red-600 mb-2">❌ Before (Generic):</div>
                        <div className="bg-red-50 p-4 rounded border-l-4 border-red-400 text-gray-700 text-sm">
                          "Experienced software developer looking for new opportunities in technology."
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-green-600 mb-2">✅ After (Targeted):</div>
                        <div className="bg-green-50 p-4 rounded border-l-4 border-green-400 text-gray-700 text-sm">
                          "Full-stack developer with 5+ years building scalable web applications. Expertise in React, Node.js, and cloud architecture. Led teams that delivered 15+ projects, improving user engagement by 40% average."
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-700 mb-3">Work Experience Enhancement</h6>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium text-red-600 mb-2">❌ Before (Vague):</div>
                        <div className="bg-red-50 p-4 rounded border-l-4 border-red-400 text-gray-700 text-sm">
                          "Worked on web applications using JavaScript and React"
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-green-600 mb-2">✅ After (Quantified):</div>
                        <div className="bg-green-50 p-4 rounded border-l-4 border-green-400 text-gray-700 text-sm">
                          "Developed 5+ responsive web applications using React.js and modern JavaScript (ES6+), improving user engagement by 40% and reducing page load times by 25%"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Action Items */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                <h4 className="text-xl font-semibold mb-6 flex items-center">
                  🎯 Priority Action Items for CV/Resume Optimization
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h6 className="font-semibold mb-3 text-blue-100">🔥 High Priority (Do First)</h6>
                    <ol className="space-y-2">
                      <li className="flex items-start">
                        <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                        <span className="text-sm">Add "cloud computing", "microservices", and "DevOps" keywords to match ATS requirements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                        <span className="text-sm">Rewrite professional summary with specific metrics and achievements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                        <span className="text-sm">Fix grammar errors: "received" spelling and add missing comma</span>
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h6 className="font-semibold mb-3 text-blue-100">📈 Medium Priority (Next Steps)</h6>
                    <ol className="space-y-2" start={4}>
                      <li className="flex items-start">
                        <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                        <span className="text-sm">Quantify 3 more achievements with specific percentages or numbers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">5</span>
                        <span className="text-sm">Optimize formatting consistency across all sections</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">6</span>
                        <span className="text-sm">Add a tailored objective statement for target job role</span>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-lg">
                  <p className="text-sm text-blue-100">
                    <strong>Estimated Impact:</strong> Implementing these changes could improve your CV/resume score by 15-20 points and significantly increase your chances of passing ATS screening and landing interviews.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA */}
          <div className="text-center mt-12">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to Transform Your CV or Resume?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get your comprehensive analysis report with ATS optimization, keyword matching, and professional formatting suggestions. Perfect for job seekers, career changers, and professionals looking to advance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"/>
                  </svg>
                  Analyze My CV/Resume Now
                </span>
              </button>
              
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                View Sample Reports
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-sm text-gray-600">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Free CV/Resume Review</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>ATS Optimization Included</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Instant Analysis Results</span>
              </div>
            </div>
            
            <p className="text-gray-500 mt-4 text-sm">
              Join 50,000+ professionals who have improved their job search success with our CV and resume analysis tool. 
              <br />
              <span className="font-medium">Compatible with all resume formats • No signup required • Secure & private</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
