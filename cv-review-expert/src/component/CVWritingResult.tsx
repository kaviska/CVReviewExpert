"use client";

import React, { useState } from "react";

type CVWritingData = {
  rewritten_cv?: {
    professional_summary?: {
      original?: string;
      rewritten?: string;
      improvements?: string[];
      keywords_added?: string[];
    };
    work_experience?: Array<{
      position?: string;
      company?: string;
      duration?: string;
      original_description?: string;
      rewritten_description?: string;
      improvements?: string[];
      keywords_added?: string[];
      impact_metrics?: string[];
    }>;
    education?: Array<{
      degree?: string;
      institution?: string;
      year?: string;
      original?: string;
      rewritten?: string;
      improvements?: string[];
    }>;
    skills?: {
      technical_skills?: {
        original?: string[];
        rewritten?: string[];
        newly_suggested?: string[];
      };
      soft_skills?: {
        original?: string[];
        rewritten?: string[];
        newly_suggested?: string[];
      };
    };
    additional_sections?: Array<{
      section_name?: string;
      original?: string;
      rewritten?: string;
      justification?: string;
    }>;
  };
  rewriting_summary?: {
    total_improvements?: string;
    keywords_integrated?: string;
    sections_enhanced?: string[];
    ats_score_improvement?: string;
    key_changes?: string[];
  };
  implementation_guide?: {
    formatting_tips?: string[];
    customization_suggestions?: string[];
    next_steps?: string[];
  };
};

interface CVWritingResultProps {
  data: CVWritingData;
}

const Card: React.FC<{ title?: string; children: React.ReactNode; className?: string }>
  = ({ title, children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 ${className}`}>
    {title && <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{title}</h3>}
    {children}
  </div>
);

const Pill: React.FC<{ label: string; tone?: "green" | "blue" | "purple" | "orange" | "gray" }>
  = ({ label, tone = "gray" }) => {
  const palette = {
    green: "bg-green-100 text-green-800 border-green-200",
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    purple: "bg-purple-100 text-purple-800 border-purple-200",
    orange: "bg-orange-100 text-orange-800 border-orange-200",
    gray: "bg-gray-100 text-gray-800 border-gray-200",
  } as const;
  return (
    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border ${palette[tone]} whitespace-nowrap`}>
      {label}
    </span>
  );
};

const ComparisonSection: React.FC<{ 
  title: string; 
  original?: string; 
  rewritten?: string;
  improvements?: string[];
  keywords?: string[];
}> = ({ title, original, rewritten, improvements, keywords }) => {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl p-4 sm:p-6 bg-gradient-to-r from-emerald-50 to-white">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        {original && (
          <button
            onClick={() => setShowOriginal(!showOriginal)}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            {showOriginal ? 'Hide Original' : 'Show Original'}
          </button>
        )}
      </div>

      {showOriginal && original && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <div className="text-sm font-medium text-red-800 mb-2">📝 Original Version:</div>
          <div className="text-sm text-gray-700 whitespace-pre-wrap">{original}</div>
        </div>
      )}

      {rewritten && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="text-sm font-medium text-green-800 mb-2">✨ Rewritten Version:</div>
          <div className="text-sm text-gray-700 whitespace-pre-wrap">{rewritten}</div>
        </div>
      )}

      {improvements && improvements.length > 0 && (
        <div className="mb-3">
          <div className="text-sm font-medium text-blue-700 mb-2">💡 Key Improvements:</div>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {improvements.map((improvement, idx) => (
              <li key={idx}>{improvement}</li>
            ))}
          </ul>
        </div>
      )}

      {keywords && keywords.length > 0 && (
        <div>
          <div className="text-sm font-medium text-purple-700 mb-2">🔑 Keywords Added:</div>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {keywords.map((keyword, idx) => (
              <Pill key={idx} label={keyword} tone="purple" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CVWritingResult: React.FC<CVWritingResultProps> = ({ data }) => {
  const rewrittenCv = data.rewritten_cv || {};
  const summary = data.rewriting_summary || {};
  const guide = data.implementation_guide || {};

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Rewriting Summary */}
      {Object.keys(summary).length > 0 && (
        <Card title="🎯 Rewriting Summary">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {summary.total_improvements && (
              <div className="text-center p-3 bg-gradient-to-r from-green-50 to-white rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-600">{summary.total_improvements}</div>
                <div className="text-sm text-gray-600">Total Improvements</div>
              </div>
            )}
            {summary.keywords_integrated && (
              <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">{summary.keywords_integrated}</div>
                <div className="text-sm text-gray-600">Keywords Integrated</div>
              </div>
            )}
            {summary.ats_score_improvement && (
              <div className="text-center p-3 bg-gradient-to-r from-purple-50 to-white rounded-lg border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">{summary.ats_score_improvement}</div>
                <div className="text-sm text-gray-600">ATS Score Boost</div>
              </div>
            )}
            {summary.sections_enhanced && (
              <div className="text-center p-3 bg-gradient-to-r from-orange-50 to-white rounded-lg border border-orange-200">
                <div className="text-2xl font-bold text-orange-600">{summary.sections_enhanced.length}</div>
                <div className="text-sm text-gray-600">Sections Enhanced</div>
              </div>
            )}
          </div>

          {summary.key_changes && summary.key_changes.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">🔥 Major Changes Made:</h4>
              <ul className="space-y-2">
                {summary.key_changes.map((change, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      )}

      {/* Professional Summary */}
      {rewrittenCv.professional_summary && (
        <Card title="📋 Professional Summary">
          <ComparisonSection
            title="Executive Summary"
            original={rewrittenCv.professional_summary.original}
            rewritten={rewrittenCv.professional_summary.rewritten}
            improvements={rewrittenCv.professional_summary.improvements}
            keywords={rewrittenCv.professional_summary.keywords_added}
          />
        </Card>
      )}

      {/* Work Experience */}
      {rewrittenCv.work_experience && rewrittenCv.work_experience.length > 0 && (
        <Card title="💼 Work Experience">
          <div className="space-y-4 sm:space-y-6">
            {rewrittenCv.work_experience.map((exp, idx) => (
              <div key={idx} className="border-b border-gray-200 last:border-b-0 pb-4 sm:pb-6 last:pb-0">
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {exp.position} {exp.company && `at ${exp.company}`}
                  </h4>
                  {exp.duration && (
                    <p className="text-sm text-gray-600">{exp.duration}</p>
                  )}
                </div>

                <ComparisonSection
                  title="Job Description"
                  original={exp.original_description}
                  rewritten={exp.rewritten_description}
                  improvements={exp.improvements}
                  keywords={exp.keywords_added}
                />

                {exp.impact_metrics && exp.impact_metrics.length > 0 && (
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="text-sm font-medium text-yellow-800 mb-2">📊 Impact Metrics Added:</div>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      {exp.impact_metrics.map((metric, midx) => (
                        <li key={midx}>{metric}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Education */}
      {rewrittenCv.education && rewrittenCv.education.length > 0 && (
        <Card title="🎓 Education">
          <div className="space-y-4">
            {rewrittenCv.education.map((edu, idx) => (
              <div key={idx}>
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {edu.degree} {edu.institution && `- ${edu.institution}`}
                  </h4>
                  {edu.year && (
                    <p className="text-sm text-gray-600">{edu.year}</p>
                  )}
                </div>

                <ComparisonSection
                  title="Education Details"
                  original={edu.original}
                  rewritten={edu.rewritten}
                  improvements={edu.improvements}
                />
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Skills */}
      {rewrittenCv.skills && (
        <Card title="🛠️ Skills">
          <div className="space-y-6">
            {rewrittenCv.skills.technical_skills && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Skills</h4>
                <div className="space-y-4">
                  {rewrittenCv.skills.technical_skills.original && rewrittenCv.skills.technical_skills.original.length > 0 && (
                    <div>
                      <div className="text-sm font-medium text-red-700 mb-2">📝 Original Skills:</div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {rewrittenCv.skills.technical_skills.original.map((skill, idx) => (
                          <Pill key={idx} label={skill} tone="gray" />
                        ))}
                      </div>
                    </div>
                  )}

                  {rewrittenCv.skills.technical_skills.rewritten && rewrittenCv.skills.technical_skills.rewritten.length > 0 && (
                    <div>
                      <div className="text-sm font-medium text-green-700 mb-2">✨ Enhanced Skills:</div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {rewrittenCv.skills.technical_skills.rewritten.map((skill, idx) => (
                          <Pill key={idx} label={skill} tone="green" />
                        ))}
                      </div>
                    </div>
                  )}

                  {rewrittenCv.skills.technical_skills.newly_suggested && rewrittenCv.skills.technical_skills.newly_suggested.length > 0 && (
                    <div>
                      <div className="text-sm font-medium text-blue-700 mb-2">🆕 Newly Suggested:</div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {rewrittenCv.skills.technical_skills.newly_suggested.map((skill, idx) => (
                          <Pill key={idx} label={skill} tone="blue" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {rewrittenCv.skills.soft_skills && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Soft Skills</h4>
                <div className="space-y-4">
                  {rewrittenCv.skills.soft_skills.original && rewrittenCv.skills.soft_skills.original.length > 0 && (
                    <div>
                      <div className="text-sm font-medium text-red-700 mb-2">📝 Original Skills:</div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {rewrittenCv.skills.soft_skills.original.map((skill, idx) => (
                          <Pill key={idx} label={skill} tone="gray" />
                        ))}
                      </div>
                    </div>
                  )}

                  {rewrittenCv.skills.soft_skills.rewritten && rewrittenCv.skills.soft_skills.rewritten.length > 0 && (
                    <div>
                      <div className="text-sm font-medium text-green-700 mb-2">✨ Enhanced Skills:</div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {rewrittenCv.skills.soft_skills.rewritten.map((skill, idx) => (
                          <Pill key={idx} label={skill} tone="green" />
                        ))}
                      </div>
                    </div>
                  )}

                  {rewrittenCv.skills.soft_skills.newly_suggested && rewrittenCv.skills.soft_skills.newly_suggested.length > 0 && (
                    <div>
                      <div className="text-sm font-medium text-blue-700 mb-2">🆕 Newly Suggested:</div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {rewrittenCv.skills.soft_skills.newly_suggested.map((skill, idx) => (
                          <Pill key={idx} label={skill} tone="blue" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Additional Sections */}
      {rewrittenCv.additional_sections && rewrittenCv.additional_sections.length > 0 && (
        <Card title="📝 Additional Sections">
          <div className="space-y-4 sm:space-y-6">
            {rewrittenCv.additional_sections.map((section, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-4 bg-gradient-to-r from-blue-50 to-white">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{section.section_name}</h4>
                
                <ComparisonSection
                  title={section.section_name || "Section Content"}
                  original={section.original}
                  rewritten={section.rewritten}
                />

                {section.justification && (
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="text-sm font-medium text-blue-800 mb-1">💡 Why this section helps:</div>
                    <p className="text-sm text-gray-700">{section.justification}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Implementation Guide */}
      {guide && Object.keys(guide).length > 0 && (
        <Card title="📋 Implementation Guide">
          <div className="space-y-6">
            {guide.formatting_tips && guide.formatting_tips.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">🎨 Formatting Tips</h4>
                <ul className="space-y-2 list-disc list-inside text-gray-700 text-sm sm:text-base">
                  {guide.formatting_tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {guide.customization_suggestions && guide.customization_suggestions.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">⚙️ Customization Suggestions</h4>
                <ul className="space-y-2 list-disc list-inside text-gray-700 text-sm sm:text-base">
                  {guide.customization_suggestions.map((suggestion, idx) => (
                    <li key={idx}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}

            {guide.next_steps && guide.next_steps.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">🚀 Next Steps</h4>
                <ol className="space-y-2 list-decimal list-inside text-gray-700 text-sm sm:text-base">
                  {guide.next_steps.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">{step}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};

export default CVWritingResult;
