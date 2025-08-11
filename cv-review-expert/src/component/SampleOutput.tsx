export default function SampleOutput() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sample <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Output</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what kind of detailed feedback you&apos;ll receive. Here&apos;s a preview of our comprehensive CV analysis report.
          </p>
        </div>

        {/* Demo Report */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Report Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">CV Analysis Report</h3>
                  <p className="text-blue-100">John Smith - Software Engineer</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">87/100</div>
                  <div className="text-blue-100">Overall Score</div>
                </div>
              </div>
            </div>

            {/* Report Content */}
            <div className="p-8">
              {/* Score Breakdown */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">92</div>
                  <div className="text-sm text-gray-600">ATS Score</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">85</div>
                  <div className="text-sm text-gray-600">Keywords</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">90</div>
                  <div className="text-sm text-gray-600">Format</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-1">81</div>
                  <div className="text-sm text-gray-600">Content</div>
                </div>
              </div>

              {/* Strengths and Weaknesses */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Strengths */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    Strengths
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">Strong technical skills section with relevant keywords</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">Clean, ATS-friendly formatting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">Quantified achievements in work experience</span>
                    </li>
                  </ul>
                </div>

                {/* Weaknesses */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </span>
                    Areas for Improvement
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">Missing industry-specific keywords for target role</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">Professional summary could be more compelling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">Add more soft skills relevant to leadership roles</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Example Rewrite Suggestions */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  💡 Example Rewrite Suggestion
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-red-600 mb-2">❌ Current:</div>
                    <div className="bg-red-50 p-3 rounded border-l-4 border-red-400 text-gray-700">
                      &quot;Worked on web applications using JavaScript and React&quot;
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-green-600 mb-2">✅ Improved:</div>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400 text-gray-700">
                      &quot;Developed 5+ responsive web applications using React.js and modern JavaScript (ES6+), improving user engagement by 40% and reducing page load times by 25%&quot;
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Items */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                <h4 className="text-lg font-semibold mb-4">🎯 Recommended Action Items</h4>
                <ol className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <span>Add &quot;cloud computing&quot; and &quot;microservices&quot; keywords to match job requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <span>Rewrite professional summary to highlight leadership experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <span>Quantify more achievements with specific metrics and percentages</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-12 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"/>
                </svg>
                Get Your Detailed Report
              </span>
            </button>
            <p className="text-gray-500 mt-3">Upload your CV to receive a personalized analysis like this</p>
          </div>
        </div>
      </div>
    </section>
  );
}
