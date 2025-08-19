"use client";

import React from "react";

type AnalysisData = {
  overall_score?: string;
  summary?: string;
  sections_feedback?: Record<string, string>;
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

const Pill: React.FC<{ label: string; tone?: "green" | "red" | "gray" }>
  = ({ label, tone = "gray" }) => {
  const palette = {
    green: "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200",
    red: "bg-rose-100 text-rose-800 ring-1 ring-rose-200",
    gray: "bg-gray-100 text-gray-800 ring-1 ring-gray-200",
  } as const;
  return (
    <span className={`px-3 py-1 rounded-full text-sm ${palette[tone]} whitespace-nowrap transition-colors hover:shadow-sm`}>{label}</span>
  );
};

const Card: React.FC<{ title?: string; children: React.ReactNode; className?: string }>
  = ({ title, children, className = "" }) => (
  <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 ${className}`}>
    {title && <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>}
    {children}
  </div>
);

function parsePercent(text?: string): number | null {
  if (!text) return null;
  const m = text.match(/\d+/);
  if (!m) return null;
  const n = parseInt(m[0], 10);
  return isNaN(n) ? null : n;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ data }) => {
  const overallScore = data.overall_score || "N/A";
  const scoreValue = parsePercent(data.overall_score || undefined);
  const summary = data.summary || "No summary provided.";
  const sections = data.sections_feedback || {};
  const ats = data.ats_analysis || {};
  const atsScore = parsePercent(ats.ats_score);

  return (
  <div className="space-y-8 relative">
      {/* Hero Summary */}
      <div className="relative overflow-hidden rounded-2xl border border-indigo-200/40 bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
        <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-purple-200/30 blur-3xl" />
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="min-w-0">
            <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">Overall CV Score</h2>
            <p className="text-gray-700 mt-3 leading-7 max-w-3xl">{summary}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative grid place-items-center h-24 w-24 rounded-2xl bg-white shadow-sm border border-gray-200">
              <div className="text-3xl font-extrabold text-indigo-600">{overallScore}</div>
              {typeof scoreValue === 'number' && (
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-indigo-500/10" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ATS Analysis */}
      {(ats.ats_score || ats.keywords_present?.length || ats.keywords_missing?.length) && (
        <Card title="ATS Analysis">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">ATS Score</span>
                <span className="text-sm font-semibold text-purple-700">{ats.ats_score || 'N/A'}</span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700" style={{ width: `${Math.max(0, Math.min(100, atsScore ?? 0))}%` }} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-emerald-700 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Present Keywords
                </div>
                <div className="flex flex-wrap gap-2">
                  {(ats.keywords_present || []).map((k) => (
                    <Pill key={`present-${k}`} label={k} tone="green" />
                  ))}
                  {!(ats.keywords_present || []).length && <span className="text-gray-500 text-sm">None</span>}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-rose-700 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l6.518 11.59c.75 1.334-.213 2.99-1.743 2.99H3.482c-1.53 0-2.493-1.656-1.743-2.99L8.257 3.1zM11 14a1 1 0 10-2 0 1 1 0 002 0zm-1-2a1 1 0 01-1-1V7a1 1 0 112 0v4a1 1 0 01-1 1z"/></svg>
                  Missing Keywords
                </div>
                <div className="flex flex-wrap gap-2">
                  {(ats.keywords_missing || []).map((k) => (
                    <Pill key={`missing-${k}`} label={k} tone="red" />
                  ))}
                  {!(ats.keywords_missing || []).length && <span className="text-gray-500 text-sm">None</span>}
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Sections */}
      {Object.keys(sections).length > 0 && (
        <Card title="Section-by-Section Feedback">
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(sections).map(([section, feedback]) => (
              <div key={section} className="border border-gray-100 rounded-xl p-5 bg-white/90 hover:shadow-sm transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">{section}</h4>
                <p className="text-gray-700 text-sm leading-6">{feedback}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Lists */}
      {Array.isArray(data.language_grammar) && data.language_grammar.length > 0 && (
        <Card title="Language & Grammar Feedback">
          <ul className="space-y-2">
            {data.language_grammar.map((item, idx) => (
              <li key={`lg-${idx}`} className="flex items-start gap-3 text-gray-700">
                <svg className="w-5 h-5 text-indigo-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.75 4.75a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5zM10 15.75a1 1 0 100-2 1 1 0 000 2z"/></svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {Array.isArray(data.impact_achievements) && data.impact_achievements.length > 0 && (
        <Card title="Impact & Achievements">
          <ul className="space-y-2">
            {data.impact_achievements.map((item, idx) => (
              <li key={`ia-${idx}`} className="flex items-start gap-3 text-gray-700">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {Array.isArray(data.tailoring_suggestions) && data.tailoring_suggestions.length > 0 && (
        <Card title="Tailoring Suggestions">
          <ul className="space-y-2">
            {data.tailoring_suggestions.map((item, idx) => (
              <li key={`ts-${idx}`} className="flex items-start gap-3 text-gray-700">
                <svg className="w-5 h-5 text-purple-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.5 3a.5.5 0 00-1 0v8.19l-2.72-2.72a.75.75 0 10-1.06 1.06l4 4c.3.3.77.3 1.06 0l4-4a.75.75 0 10-1.06-1.06L10.5 11.19V3z"/></svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {Array.isArray(data.next_steps) && data.next_steps.length > 0 && (
        <Card title="Next Steps">
          <ol className="space-y-3">
            {data.next_steps.map((item, idx) => (
              <li key={`ns-${idx}`} className="flex items-start gap-3 text-gray-700">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-bold mt-0.5">{idx + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </Card>
      )}

      {/* Sticky quick actions */}
      <div className="sticky bottom-4 float-right mr-2">
        <div className="inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white/90 backdrop-blur px-3 py-2 shadow-sm">
          {typeof scoreValue === 'number' && (
            <span className="inline-flex items-center justify-center h-7 w-14 rounded-lg bg-indigo-600 text-white text-sm font-bold">{scoreValue}</span>
          )}
          <button
            type="button"
            onClick={() => navigator.clipboard?.writeText(JSON.stringify(data, null, 2))}
            className="px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors text-sm"
          >
            Copy JSON
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;
