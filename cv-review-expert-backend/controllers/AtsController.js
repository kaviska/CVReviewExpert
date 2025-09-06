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

async function analyzeATS(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No CV file uploaded" });
    }

    // Job description is required for ATS analysis
    const jobDescription = (req.body && req.body.job_description) ? String(req.body.job_description).trim() : "";
    
    if (!jobDescription) {
      return res.status(400).json({ error: "Job description is required for ATS analysis" });
    }
    
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

    // Build the ATS-specific prompt
    const prompt = `System Role:
You are an expert ATS (Applicant Tracking System) analyzer. Your task is to analyze a CV against a specific job description and provide detailed ATS compatibility insights.


CV Text: ${cvText}

Job Description: ${jobDescription}

Instructions:
1. CV and Job Description Validation:
   - If the CV is not valid (random text, irrelevant data), respond with false only.
   - If the job description is invalid or unclear, respond with false only.

2. ATS Score Calculation:
   - Calculate an overall ATS compatibility score (0-100%).
   - Base the score on keyword matches, formatting, and ATS-friendly structure.

3. Keyword Analysis:
   - Extract all important keywords and phrases from the job description.
   - Identify which keywords are present in the CV.
   - List missing keywords that should be included.
   - Categorize keywords by importance (high, medium, low priority).

4. ATS Optimization Recommendations:
   - Provide specific suggestions to improve ATS score.
   - Recommend formatting improvements.
   - Suggest keyword placement strategies.

5. Section Analysis:
   - Analyze each CV section for ATS compatibility.
   - Check for proper section headings and structure.

Return the analysis in JSON format:
Language Adaptation Instructions:
- Automatically detect the language of the CV text and job description
- If the CV or job description is in a language other than English, provide your analysis and feedback in that same language
- Always keep JSON keys in English, but provide all values (feedback, suggestions, descriptions) in the detected language of the input
- Maintain professional terminology and industry-specific vocabulary appropriate to the detected language
- Ensure cultural and regional appropriateness in your recommendations for the detected language/region

{
  "ats_score": "{score}%",
  "score_breakdown": {
    "keyword_match": "{score}%",
    "formatting": "{score}%",
    "structure": "{score}%",
    "completeness": "{score}%"
  },
  "keyword_analysis": {
    "total_keywords_found": "{number}",
    "total_keywords_expected": "{number}",
    "match_percentage": "{percentage}%",
    "keywords_present": [
      {
        "keyword": "{keyword}",
        "priority": "high|medium|low",
        "frequency": "{number}",
        "context": "{where_found_in_cv}"
      }
    ],
    "keywords_missing": [
      {
        "keyword": "{keyword}",
        "priority": "high|medium|low",
        "category": "{category}",
        "suggestion": "{how_to_include}"
      }
    ]
  },
  "ats_recommendations": [
    {
      "category": "{category}",
      "issue": "{issue_description}",
      "solution": "{specific_solution}",
      "impact": "high|medium|low"
    }
  ],
  "section_analysis": {
    "{section_name}": {
      "ats_friendly": true/false,
      "score": "{score}%",
      "issues": ["{issue1}", "{issue2}"],
      "recommendations": ["{rec1}", "{rec2}"]
    }
  },
  "formatting_score": {
    "overall": "{score}%",
    "issues": ["{issue1}", "{issue2}"],
    "recommendations": ["{rec1}", "{rec2}"]
  },
  "next_steps": [
    "{step_one}",
    "{step_two}",
    "{step_three}"
  ]
}`;

    // Call Gemini API
    const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyDmNNilZI6EsXrd2G7KobszmrzSBiqO5OM';
    let geminiResult = null;
    
    if (!apiKey) {
      console.warn("Gemini API key not set. Set GEMINI_API_KEY or GOOGLE_API_KEY in environment to enable analysis.");
      return res.status(500).json({ error: "ATS analysis service is currently unavailable" });
    }

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
      console.log('Gemini ATS API response:', JSON.stringify(geminiResult, null, 2));

      // Parse the analysis result
      let analysisResult = null;
      try {
        const candidates = geminiResult?.candidates;
        const textBlock = candidates?.[0]?.content?.parts?.[0]?.text || '';
        
        // Handle different JSON response formats
        const jsonMatch = textBlock.match(/```json\n([\s\S]*?)```/i) || 
                         textBlock.match(/```\n([\s\S]*?)```/i) ||
                         textBlock.match(/\{[\s\S]*\}/);
        
        const jsonString = jsonMatch ? 
          (jsonMatch[1] || jsonMatch[0]) : 
          textBlock;
        
        if (jsonString?.trim()?.startsWith('{')) {
          analysisResult = JSON.parse(jsonString);
        }
      } catch (e) {
        console.warn('Failed to parse Gemini ATS JSON:', e);
      }

      // Respond with ATS analysis
      res.json({
        success: true,
        cvText: cvText.substring(0, 500) + '...', // Truncated for response
        jobDescription,
        ocrUsed,
        analysis: analysisResult,
        rawResponse: geminiResult
      });

    } catch (err) {
      console.error('Gemini ATS API error:', err);
      res.status(500).json({ error: "Failed to analyze ATS compatibility" });
    }

  } catch (error) {
    console.error("Error in ATS analysis:", error);
    res.status(500).json({ error: "Failed to process ATS analysis" });
  }
}

module.exports = {
  analyzeATS
};
