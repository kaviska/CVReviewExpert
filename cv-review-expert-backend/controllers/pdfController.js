const pdfparse = require('pdf-parse');
const { fromBuffer } = require('pdf2pic');
const Tesseract = require('tesseract.js');

async function extractTextWithOCR(pdfBuffer) {
  // Convert the first page of PDF buffer to an image (png)
  const convert = fromBuffer(pdfBuffer, {
    density: 300,
    format: "png",
    width: 1200,
    height: 1600,
  });

  const pageToConvertAsImage = 1;
  const image = await convert(pageToConvertAsImage);
  
  // Run OCR on the image base64 data
  const { data: { text } } = await Tesseract.recognize(
    image.base64,
    'eng',
    { logger: m => console.log(m) }
  );

  return text;
}

async function uploadPdf(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

  // Optional job description provided by client for tailoring analysis
  const jobDescription = (req.body && req.body.job_description) ? String(req.body.job_description) : "";
    
    // Try normal pdf-parse text extraction first
    const data = await pdfparse(req.file.buffer);

    let cvText = (data.text || '').trim();
    let ocrUsed = false;

    if (cvText.length < 200) {
      // If text is empty or too short, fallback to OCR
      console.log("Text extraction failed or too short, using OCR fallback...");
      const ocrText = await extractTextWithOCR(req.file.buffer);
      cvText = (ocrText || '').trim();
      ocrUsed = true;
      console.log("OCR Text:", cvText);
    } else {
      console.log("PDF parsed successfully without OCR.");
    }

    // Build the prompt EXACTLY as provided, only injecting CV text and job description/role
    const prompt = ` System Role:
 You are an experienced career development coach and resume reviewer. Your task is to carefully analyze a given CV and job description, then provide structured, professional, and actionable feedback.

Cv text: ${cvText}

Job description/role:${jobDescription}

Instructions:
CV Validation


If the input is not a valid CV (e.g., random text, irrelevant data), respond with false only.


Job Role Validation


If the provided job description or job role is invalid or unclear, respond with false only.


Overall Score & Summary


Provide a score out of 100 (e.g., 82/100).


Write a short summary highlighting strengths and weaknesses.
 Example: “Strong technical skills, but lacks measurable achievements and clear formatting.”


Section-by-Section Feedback


Identify the main sections in the CV (e.g., Summary, Education, Work Experience, Skills, Projects).


Provide a short paragraph of feedback for each section.


ATS Analysis


Extract a list of keywords from the job description.


Check which keywords are present and missing in the CV.


Provide an ATS compatibility score (%) based on keyword match.


Language & Grammar Feedback


Review grammar, sentence structure, and writing style.


Suggest corrections based on professional CV writing rules.


Example: Replace “responsible for” → “led/managed/implemented”.


Impact & Achievements


Highlight areas where quantifiable results (numbers, percentages, KPIs) are missing.


Suggest stronger action verbs to enhance impact.


Tailoring Suggestions


Provide industry-specific recommendations (e.g., Tech, Finance, Healthcare).


Suggest role-specific customizations to align with the target job.


Red Flags Analysis


Identify potential issues that could raise concerns for recruiters or ATS systems.


Examples:


Employment gaps without explanation


Inconsistent formatting or typos


Lack of contact information


Generic or vague job descriptions


Overqualification or underqualification signals


Outdated skills or technologies


Too long or too short CV length


Missing essential sections


Next-Step Recommendations


Give 3–5 clear actionable steps for improvement.


Examples:


“Add a professional summary at the top.”


“Include a link to portfolio/GitHub.”


“Reorder sections to prioritize work experience.”


JSON structured text is preferred. Use arrays where applicable. The examples below are illustrative — feel free to include more items if available, and if no data exists for a field, return an empty array or object as appropriate.
{
  "overall_score": "{number}/100",
  "summary": "{summary}",

  "sections_feedback": {
    "{section01}": {
      "feedback": "{feedback_one}",
      "status": "Good" 
    },
    "{section02}": {
      "feedback": "{feedback_two}",
      "status": "Needs Improvement"
    },
    "{section03}": {
      "feedback": "{feedback_three}",
      "status": "Fast Improvement Needed"
    }
  },

  "ats_analysis": {
    "ats_score": "{score}%",
    "keywords_present": ["{keyword01}", "{keyword02}", "{keyword03}"],
    "keywords_missing": ["{keyword01}", "{keyword02}", "{keyword03}"]
  },

  "language_grammar": [
    "{grammar_error_one - improvement_suggestion}",
    "{grammar_error_two - improvement_suggestion}"
  ],

  "impact_achievements": [
    "{suggestion_one}",
    "{suggestion_two}"
  ],

  "tailoring_suggestions": [
    "{suggestion_one}",
    "{suggestion_two}"
  ],

  "red_flags": [
    {
      "issue": "{red_flag_issue}",
      "description": "{detailed_description}",
      "severity": "high|medium|low",
      "solution": "{suggested_fix}"
    }
  ],

  "next_steps": [
    "{step_one}",
    "{step_two}",
    "{step_three}"
  ]
}
`;

    // Call Gemini API
    const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyDmNNilZI6EsXrd2G7KobszmrzSBiqO5OM';
    let geminiResult = null;
    if (!apiKey) {
      console.warn("Gemini API key not set. Set GEMINI_API_KEY or GOOGLE_API_KEY in environment to enable analysis.");
    } else {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      const body = {
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }]
          }
        ]
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        geminiResult = await response.json();
        console.log('Gemini API response:', JSON.stringify(geminiResult, null, 2));
      } catch (err) {
        console.error('Gemini API error:', err);
      }
    }

    // Respond with parsed data and (optionally) Gemini analysis
    res.json({
      text: cvText,
      info: data.info,
      numpages: data.numpages,
      ocrUsed,
      jobDescription,
      gemini: geminiResult
    });
  } catch (error) {
    console.error("Error parsing PDF:", error);
    res.status(500).json({ error: "Failed to parse PDF" });
  }
}

module.exports = {
  uploadPDF: uploadPdf
};
