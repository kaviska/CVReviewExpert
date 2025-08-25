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

async function rewriteCV(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No CV file uploaded" });
    }

    // Job description is required for CV rewriting
    const jobDescription = (req.body && req.body.job_description) ? String(req.body.job_description).trim() : "";
    const targetRole = (req.body && req.body.target_role) ? String(req.body.target_role).trim() : "";
    
    if (!jobDescription) {
      return res.status(400).json({ error: "Job description is required for CV rewriting" });
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

    // Build the CV rewriting prompt
    const prompt = `System Role:
You are an expert CV writer and career consultant with years of experience in crafting compelling, ATS-friendly CVs that get interviews. Your task is to completely rewrite a CV to perfectly match a specific job description while maintaining truthfulness and enhancing the candidate's presentation.

Original CV Text: ${cvText}

Job Description: ${jobDescription}

Target Role: ${targetRole || "As specified in job description"}

Instructions:

1. CV Validation:
   - If the original CV is not valid (random text, irrelevant data), respond with false only.
   - If the job description is invalid or unclear, respond with false only.

2. Professional CV Rewriting:
   - Completely rewrite each section to be more professional, impactful, and tailored to the job
   - Use industry-specific terminology and keywords from the job description
   - Ensure ATS compatibility with proper formatting and keyword optimization
   - Maintain truthfulness while enhancing presentation and impact

3. Section-by-Section Rewriting:
   - Professional Summary: Create a compelling 3-4 line summary tailored to the role
   - Work Experience: Rewrite with strong action verbs, quantifiable achievements, and relevant skills
   - Education: Optimize education section with relevant coursework/projects if applicable
   - Skills: Reorganize and enhance skills to match job requirements
   - Additional Sections: Improve or suggest new sections (Projects, Certifications, etc.)

4. Enhancement Guidelines:
   - Use strong action verbs (Led, Implemented, Achieved, Optimized, etc.)
   - Include metrics and quantifiable results where possible
   - Align language with job description terminology
   - Improve sentence structure and professional tone
   - Ensure consistency in formatting and style

5. Keyword Integration:
   - Naturally integrate job description keywords throughout the CV
   - Maintain readability while optimizing for ATS systems
   - Use synonyms and variations of key terms

Return the rewritten CV in JSON format with clear sections:

{
  "rewritten_cv": {
    "professional_summary": {
      "original": "{original_summary_if_exists}",
      "rewritten": "{new_professional_summary}",
      "improvements": ["{improvement1}", "{improvement2}"],
      "keywords_added": ["{keyword1}", "{keyword2}"]
    },
    "work_experience": [
      {
        "position": "{job_title}",
        "company": "{company_name}",
        "duration": "{time_period}",
        "original_description": "{original_text}",
        "rewritten_description": "{enhanced_description}",
        "improvements": ["{improvement1}", "{improvement2}"],
        "keywords_added": ["{keyword1}", "{keyword2}"],
        "impact_metrics": ["{metric1}", "{metric2}"]
      }
    ],
    "education": [
      {
        "degree": "{degree}",
        "institution": "{school_name}",
        "year": "{graduation_year}",
        "original": "{original_if_exists}",
        "rewritten": "{enhanced_version}",
        "improvements": ["{improvement1}"]
      }
    ],
    "skills": {
      "technical_skills": {
        "original": ["{original_skills}"],
        "rewritten": ["{categorized_enhanced_skills}"],
        "newly_suggested": ["{skills_from_job_desc}"]
      },
      "soft_skills": {
        "original": ["{original_soft_skills}"],
        "rewritten": ["{enhanced_soft_skills}"],
        "newly_suggested": ["{suggested_soft_skills}"]
      }
    },
    "additional_sections": [
      {
        "section_name": "{section_title}",
        "original": "{original_content_if_exists}",
        "rewritten": "{enhanced_content}",
        "justification": "{why_this_section_helps}"
      }
    ]
  },
  "rewriting_summary": {
    "total_improvements": "{number}",
    "keywords_integrated": "{number}",
    "sections_enhanced": ["{section1}", "{section2}"],
    "ats_score_improvement": "{estimated_improvement}",
    "key_changes": [
      "{major_change1}",
      "{major_change2}",
      "{major_change3}"
    ]
  },
  "implementation_guide": {
    "formatting_tips": [
      "{tip1}",
      "{tip2}"
    ],
    "customization_suggestions": [
      "{suggestion1}",
      "{suggestion2}"
    ],
    "next_steps": [
      "{step1}",
      "{step2}",
      "{step3}"
    ]
  }
}`;

    // Call Gemini API
    const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyDmNNilZI6EsXrd2G7KobszmrzSBiqO5OM';
    let geminiResult = null;
    
    if (!apiKey) {
      console.warn("Gemini API key not set. Set GEMINI_API_KEY or GOOGLE_API_KEY in environment to enable analysis.");
      return res.status(500).json({ error: "CV rewriting service is currently unavailable" });
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
      console.log('Gemini CV Writing API response:', JSON.stringify(geminiResult, null, 2));

      // Parse the rewriting result
      let rewritingResult = null;
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
          rewritingResult = JSON.parse(jsonString);
        }
      } catch (e) {
        console.warn('Failed to parse Gemini CV Writing JSON:', e);
      }

      // Respond with CV rewriting results
      res.json({
        success: true,
        originalCvText: cvText.substring(0, 500) + '...', // Truncated for response
        jobDescription,
        targetRole,
        ocrUsed,
        rewrittenCv: rewritingResult,
        rawResponse: geminiResult
      });

    } catch (err) {
      console.error('Gemini CV Writing API error:', err);
      res.status(500).json({ error: "Failed to rewrite CV" });
    }

  } catch (error) {
    console.error("Error in CV rewriting:", error);
    res.status(500).json({ error: "Failed to process CV rewriting request" });
  }
}

module.exports = {
  rewriteCV
};
