"use client";

import React from "react";

type AnalysisData = {
  overall_score?: string;
  summary?: string;
  sections_feedback?: Record<string, string | { feedback?: string; status?: string }>;
  ats_analysis?: {
    ats_score?: string;
    keywords_present?: string[];
    keywords_missing?: string[];
  };
  language_grammar?: string[];
  impact_achievements?: string[];
  tailoring_suggestions?: string[];
  next_steps?: string[];
};

interface AnalysisResultProps {
  data: AnalysisData;
}

const Pill: React.FC<{ label: string; tone?: "green" | "red" | "gray" | "yellow" }>
  = ({ label, tone = "gray" }) => {
  const palette = {
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    gray: "bg-gray-100 text-gray-800",
    yellow: "bg-yellow-100 text-yellow-800",
  } as const;
  return (
    <span className={`px-3 py-1 rounded-full text-sm ${palette[tone]} whitespace-nowrap`}>{label}</span>
  );
};

const Card: React.FC<{ title?: string; children: React.ReactNode; className?: string }>
  = ({ title, children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-gray-200 p-6 ${className}`}>
    {title && <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>}
    {children}
  </div>
);

const AnalysisResult: React.FC<AnalysisResultProps> = ({ data }) => {
  const overallScore = data.overall_score || "N/A";
  const summary = data.summary || "No summary provided.";
  const sections = data.sections_feedback || {};
  const ats = data.ats_analysis || {};

  // Map status to UI styles
  const normalizeStatus = (s?: string) => {
    const t = (s || "").toLowerCase();
    if (t.includes("fast")) return "fast" as const; // Fast Improvement Needed
    if (t.includes("need")) return "needs" as const; // Needs Improvement
    if (t.includes("good") || t.includes("strong") || t.includes("great")) return "good" as const; // Good
    return "unknown" as const;
  };

  const getStatusUI = (status?: string) => {
    const kind = normalizeStatus(status);
    switch (kind) {
      case "good":
        return {
          container: "bg-gradient-to-r from-green-50 to-white border-green-200",
          accent: "from-green-400 to-green-600",
          pillTone: "green" as const,
          label: status || "Good",
        };
      case "needs":
        return {
          container: "bg-gradient-to-r from-yellow-50 to-white border-yellow-200",
          accent: "from-yellow-400 to-yellow-600",
          pillTone: "yellow" as const,
          label: status || "Needs Improvement",
        };
      case "fast":
        return {
          container: "bg-gradient-to-r from-red-50 to-white border-red-200",
          accent: "from-red-400 to-red-600",
          pillTone: "red" as const,
          label: status || "Fast Improvement Needed",
        };
      default:
        return {
          container: "bg-gradient-to-r from-gray-50 to-white border-gray-200",
          accent: "from-gray-300 to-gray-400",
          pillTone: "gray" as const,
          label: status || "Feedback",
        };
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Overall CV Score</h2>
            <p className="text-gray-600 mt-2 max-w-3xl">{summary}</p>
          </div>
          <div className="text-4xl font-extrabold text-blue-600">{overallScore}</div>
        </div>
      </Card>

      {Object.keys(sections).length > 0 && (
        <Card title="Section-by-Section Feedback">
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(sections).map(([section, value]) => {
              const isObj = typeof value === "object" && value !== null;
              const fbRaw = isObj ? (value as any).feedback ?? "" : value;
              const fb = typeof fbRaw === "string" ? fbRaw : JSON.stringify(fbRaw);
              const status = isObj ? (value as any).status : undefined;
              const ui = getStatusUI(status);
              return (
                <div key={section} className={`relative border rounded-xl p-4 ${ui.container}`}>
                  {/* Accent bar */}
                  <div className={`absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b ${ui.accent}`} />
                  <div className="flex items-center justify-between mb-2 pl-2">
                    <h4 className="font-semibold text-gray-900">{section}</h4>
                    <Pill label={ui.label} tone={ui.pillTone} />
                  </div>
                  <p className="text-gray-700 text-sm leading-6 pl-2">{fb || "No feedback provided."}</p>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {(ats.ats_score || ats.keywords_present?.length || ats.keywords_missing?.length) && (
        <Card title="ATS Analysis">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="min-w-[200px]">
              <div className="text-sm text-gray-500">ATS Score</div>
              <div className="text-2xl font-bold text-purple-600">{ats.ats_score || "N/A"}</div>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-green-700 mb-2">Present Keywords</div>
              <div className="flex flex-wrap gap-2">
                {(ats.keywords_present || []).map((k) => (
                  <Pill key={`present-${k}`} label={k} tone="green" />
                ))}
                {!(ats.keywords_present || []).length && <span className="text-gray-500 text-sm">None</span>}
              </div>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-red-700 mb-2">Missing Keywords</div>
              <div className="flex flex-wrap gap-2">
                {(ats.keywords_missing || []).map((k) => (
                  <Pill key={`missing-${k}`} label={k} tone="red" />
                ))}
                {!(ats.keywords_missing || []).length && <span className="text-gray-500 text-sm">None</span>}
              </div>
            </div>
          </div>
        </Card>
      )}

      {Array.isArray(data.language_grammar) && data.language_grammar.length > 0 && (
        <Card title="Language & Grammar Feedback">
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            {data.language_grammar.map((item, idx) => (
              <li key={`lg-${idx}`}>{item}</li>
            ))}
          </ul>
        </Card>
      )}

      {Array.isArray(data.impact_achievements) && data.impact_achievements.length > 0 && (
        <Card title="Impact & Achievements">
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            {data.impact_achievements.map((item, idx) => (
              <li key={`ia-${idx}`}>{item}</li>
            ))}
          </ul>
        </Card>
      )}

      {Array.isArray(data.tailoring_suggestions) && data.tailoring_suggestions.length > 0 && (
        <Card title="Tailoring Suggestions">
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            {data.tailoring_suggestions.map((item, idx) => (
              <li key={`ts-${idx}`}>{item}</li>
            ))}
          </ul>
        </Card>
      )}

      {Array.isArray(data.next_steps) && data.next_steps.length > 0 && (
        <Card title="Next Steps">
          <ol className="space-y-2 list-decimal list-inside text-gray-700">
            {data.next_steps.map((item, idx) => (
              <li key={`ns-${idx}`}>{item}</li>
            ))}
          </ol>
        </Card>
      )}
    </div>
  );
};

export default AnalysisResult;
