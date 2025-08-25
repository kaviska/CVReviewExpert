"use client";

import React from "react";

type ATSAnalysisData = {
  ats_score?: string;
  score_breakdown?: {
    keyword_match?: string;
    formatting?: string;
    structure?: string;
    completeness?: string;
  };
  keyword_analysis?: {
    total_keywords_found?: string | number;
    total_keywords_expected?: string | number;
    match_percentage?: string;
    keywords_present?: Array<{
      keyword?: string;
      priority?: "high" | "medium" | "low";
      frequency?: string | number;
      context?: string;
    }>;
    keywords_missing?: Array<{
      keyword?: string;
      priority?: "high" | "medium" | "low";
      category?: string;
      suggestion?: string;
    }>;
  };
  ats_recommendations?: Array<{
    category?: string;
    issue?: string;
    solution?: string;
    impact?: "high" | "medium" | "low";
  }>;
  section_analysis?: Record<string, {
    ats_friendly?: boolean;
    score?: string;
    issues?: string[];
    recommendations?: string[];
  }>;
  formatting_score?: {
    overall?: string;
    issues?: string[];
    recommendations?: string[];
  };
  next_steps?: string[];
};

interface ATSResultProps {
  data: ATSAnalysisData;
}

const Pill: React.FC<{ label: string; tone?: "green" | "red" | "gray" | "yellow" | "blue" | "purple" }>
  = ({ label, tone = "gray" }) => {
  const palette = {
    green: "bg-green-100 text-green-800 border-green-200",
    red: "bg-red-100 text-red-800 border-red-200",
    gray: "bg-gray-100 text-gray-800 border-gray-200",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    purple: "bg-purple-100 text-purple-800 border-purple-200",
  } as const;
  return (
    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border ${palette[tone]} whitespace-nowrap`}>
      {label}
    </span>
  );
};

const Card: React.FC<{ title?: string; children: React.ReactNode; className?: string }>
  = ({ title, children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 ${className}`}>
    {title && <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{title}</h3>}
    {children}
  </div>
);

const ScoreCircle: React.FC<{ score: number; size?: "sm" | "md" | "lg"; color?: string }> = ({ 
  score, 
  size = "md", 
  color = "purple" 
}) => {
  const sizes = {
    sm: "w-16 h-16 text-sm",
    md: "w-20 h-20 text-lg",
    lg: "w-24 h-24 text-xl"
  };
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className={`${sizes[size]} rounded-full border-4 border-gray-200 flex items-center justify-center bg-gradient-to-r from-${color}-50 to-white`}>
      <span className={`font-bold ${getScoreColor(score)}`}>
        {score}%
      </span>
    </div>
  );
};

const PriorityBadge: React.FC<{ priority: "high" | "medium" | "low" }> = ({ priority }) => {
  const styles = {
    high: "bg-red-100 text-red-800 border-red-200",
    medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
    low: "bg-blue-100 text-blue-800 border-blue-200"
  };
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${styles[priority]} uppercase`}>
      {priority}
    </span>
  );
};

const ATSResult: React.FC<ATSResultProps> = ({ data }) => {
  const atsScore = parseInt(data.ats_score?.replace('%', '') || "0");
  const keywordAnalysis = data.keyword_analysis || {};
  const scoreBreakdown = data.score_breakdown || {};

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Overall ATS Score */}
      <Card>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Overall ATS Score</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Your CV's compatibility with Applicant Tracking Systems
            </p>
            
            {/* Score Breakdown */}
            {Object.keys(scoreBreakdown).length > 0 && (
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {Object.entries(scoreBreakdown).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-purple-600">
                      {value || "N/A"}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 capitalize">
                      {key.replace('_', ' ')}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex justify-center sm:justify-end">
            <ScoreCircle score={atsScore} size="lg" />
          </div>
        </div>
      </Card>

      {/* Keyword Analysis */}
      {keywordAnalysis && (Object.keys(keywordAnalysis).length > 0) && (
        <Card title="Keyword Analysis">
          <div className="space-y-4 sm:space-y-6">
            {/* Keyword Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-xl border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">
                  {keywordAnalysis.total_keywords_found || 0}
                </div>
                <div className="text-sm text-gray-600">Keywords Found</div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-white p-4 rounded-xl border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">
                  {keywordAnalysis.total_keywords_expected || 0}
                </div>
                <div className="text-sm text-gray-600">Keywords Expected</div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-xl border border-green-200">
                <div className="text-2xl font-bold text-green-600">
                  {keywordAnalysis.match_percentage || "0%"}
                </div>
                <div className="text-sm text-gray-600">Match Rate</div>
              </div>
            </div>

            {/* Present Keywords */}
            {keywordAnalysis.keywords_present && keywordAnalysis.keywords_present.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-green-700 mb-3">✅ Keywords Found in Your CV</h4>
                <div className="space-y-2">
                  {keywordAnalysis.keywords_present.map((item, idx) => (
                    <div key={`present-${idx}`} className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 flex-1">
                        <Pill label={item.keyword || "Keyword"} tone="green" />
                        <PriorityBadge priority={item.priority || "medium"} />
                        {item.frequency && (
                          <span className="text-xs text-gray-500">
                            Found {item.frequency} time(s)
                          </span>
                        )}
                      </div>
                      {item.context && (
                        <div className="text-xs text-gray-600 italic">
                          Context: {item.context}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Missing Keywords */}
            {keywordAnalysis.keywords_missing && keywordAnalysis.keywords_missing.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-red-700 mb-3">❌ Missing Keywords</h4>
                <div className="space-y-3">
                  {keywordAnalysis.keywords_missing.map((item, idx) => (
                    <div key={`missing-${idx}`} className="p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <Pill label={item.keyword || "Keyword"} tone="red" />
                          <PriorityBadge priority={item.priority || "medium"} />
                        </div>
                        {item.category && (
                          <Pill label={item.category} tone="gray" />
                        )}
                      </div>
                      {item.suggestion && (
                        <div className="text-sm text-gray-700 bg-white p-2 rounded border">
                          <span className="font-medium">💡 Suggestion: </span>
                          {item.suggestion}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* ATS Recommendations */}
      {data.ats_recommendations && data.ats_recommendations.length > 0 && (
        <Card title="ATS Optimization Recommendations">
          <div className="space-y-3 sm:space-y-4">
            {data.ats_recommendations.map((rec, idx) => {
              const impactColors = {
                high: "bg-red-50 border-red-200",
                medium: "bg-yellow-50 border-yellow-200",
                low: "bg-blue-50 border-blue-200"
              };
              
              const impact = rec.impact || "medium";
              
              return (
                <div key={`rec-${idx}`} className={`p-3 sm:p-4 rounded-xl border ${impactColors[impact]}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-2">
                    <div className="flex items-center gap-2 flex-1">
                      {rec.category && <Pill label={rec.category} tone="purple" />}
                      <PriorityBadge priority={impact} />
                    </div>
                  </div>
                  
                  {rec.issue && (
                    <div className="mb-2">
                      <span className="font-medium text-gray-900 text-sm sm:text-base">Issue: </span>
                      <span className="text-gray-700 text-sm sm:text-base">{rec.issue}</span>
                    </div>
                  )}
                  
                  {rec.solution && (
                    <div className="bg-white p-2 sm:p-3 rounded-lg border">
                      <span className="font-medium text-green-700 text-sm sm:text-base">💡 Solution: </span>
                      <span className="text-gray-700 text-sm sm:text-base">{rec.solution}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {/* Section Analysis */}
      {data.section_analysis && Object.keys(data.section_analysis).length > 0 && (
        <Card title="Section-by-Section ATS Analysis">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            {Object.entries(data.section_analysis).map(([section, analysis]) => (
              <div key={section} className={`p-3 sm:p-4 rounded-xl border ${
                analysis.ats_friendly ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{section}</h4>
                  <div className="flex items-center gap-2">
                    {analysis.score && <span className="text-sm font-medium">{analysis.score}</span>}
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      analysis.ats_friendly ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {analysis.ats_friendly ? 'ATS Friendly' : 'Needs Work'}
                    </span>
                  </div>
                </div>
                
                {analysis.issues && analysis.issues.length > 0 && (
                  <div className="mb-2">
                    <div className="text-xs sm:text-sm font-medium text-red-700 mb-1">Issues:</div>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                      {analysis.issues.map((issue, idx) => (
                        <li key={idx}>{issue}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {analysis.recommendations && analysis.recommendations.length > 0 && (
                  <div>
                    <div className="text-xs sm:text-sm font-medium text-green-700 mb-1">Recommendations:</div>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                      {analysis.recommendations.map((rec, idx) => (
                        <li key={idx}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Formatting Score */}
      {data.formatting_score && (
        <Card title="ATS Formatting Analysis">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <ScoreCircle score={parseInt(data.formatting_score.overall?.replace('%', '') || "0")} />
              <div>
                <h4 className="font-semibold text-gray-900">Formatting Score</h4>
                <p className="text-sm text-gray-600">How ATS-friendly is your CV format</p>
              </div>
            </div>
          </div>
          
          {data.formatting_score.issues && data.formatting_score.issues.length > 0 && (
            <div className="mt-4">
              <h5 className="font-medium text-red-700 mb-2">Formatting Issues:</h5>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {data.formatting_score.issues.map((issue, idx) => (
                  <li key={idx}>{issue}</li>
                ))}
              </ul>
            </div>
          )}
          
          {data.formatting_score.recommendations && data.formatting_score.recommendations.length > 0 && (
            <div className="mt-4">
              <h5 className="font-medium text-green-700 mb-2">Formatting Recommendations:</h5>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {data.formatting_score.recommendations.map((rec, idx) => (
                  <li key={idx}>{rec}</li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      )}

      {/* Next Steps */}
      {data.next_steps && data.next_steps.length > 0 && (
        <Card title="Next Steps to Improve Your ATS Score">
          <ol className="space-y-2 sm:space-y-3 list-decimal list-inside text-gray-700 text-sm sm:text-base">
            {data.next_steps.map((step, idx) => (
              <li key={`step-${idx}`} className="leading-relaxed">{step}</li>
            ))}
          </ol>
        </Card>
      )}
    </div>
  );
};

export default ATSResult;
