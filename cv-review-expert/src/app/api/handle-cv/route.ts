import { NextRequest, NextResponse } from 'next/server';
import pdf from "pdf-parse";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('cv') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Validate file type
    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Only PDF files are allowed' },
        { status: 400 }
      );
    }

    // Validate file size (10MB max)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File size exceeds 10MB limit' },
        { status: 400 }
      );
    }

    // Convert file to buffer for processing
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Parse PDF to extract text
    let extractedText = '';
    try {
      const pdfData = await pdf(buffer);
      extractedText = pdfData.text;
      console.log('Extracted text length:', extractedText.length);
    } catch (pdfError) {
      console.error('PDF parsing error:', pdfError);
      // Continue with mock analysis if PDF parsing fails
      extractedText = 'Unable to extract text from PDF';
    }

    // Analyze the extracted text (this is where you'd implement actual AI analysis)
    const analysis = analyzeCV(extractedText, file.name, file.size);

    return NextResponse.json(analysis, { status: 200 });

  } catch (error) {
    console.error('Error processing CV:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Function to analyze CV content
function analyzeCV(text: string, filename: string, fileSize: number) {
  // Basic text analysis for demonstration
  const wordCount = text.split(/\s+/).length;
  const hasEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(text);
  const hasPhone = /(\+?1?[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}/.test(text);
  const hasLinkedIn = /linkedin\.com/.test(text.toLowerCase());
  
  // Check for common sections
  const hasExperience = /experience|work|employment|job|position/i.test(text);
  const hasEducation = /education|degree|university|college|school/i.test(text);
  const hasSkills = /skills|competenc|proficient|familiar/i.test(text);
  
  // Check for technical keywords
  const techKeywords = ['javascript', 'python', 'java', 'react', 'node.js', 'sql', 'html', 'css', 'typescript'];
  const presentKeywords = techKeywords.filter(keyword => 
    text.toLowerCase().includes(keyword.toLowerCase())
  );
  const missingKeywords = techKeywords.filter(keyword => 
    !text.toLowerCase().includes(keyword.toLowerCase())
  );

  // Calculate scores based on analysis
  const personalInfoScore = (hasEmail ? 30 : 0) + (hasPhone ? 30 : 0) + (hasLinkedIn ? 25 : 0) + 15;
  const experienceScore = hasExperience ? Math.min(85 + Math.floor(Math.random() * 15), 100) : 40;
  const educationScore = hasEducation ? Math.min(75 + Math.floor(Math.random() * 20), 100) : 30;
  const skillsScore = hasSkills ? Math.min(70 + presentKeywords.length * 5, 100) : 25;
  
  const overallScore = Math.round((personalInfoScore + experienceScore + educationScore + skillsScore) / 4);

  return {
    success: true,
    filename,
    fileSize,
    analysisDate: new Date().toISOString(),
    wordCount,
    extractedTextLength: text.length,
    overallScore,
    sections: {
      personalInfo: {
        score: personalInfoScore,
        feedback: hasEmail && hasPhone ? 
          "Personal information is well-structured and complete." :
          "Personal information section needs improvement.",
        suggestions: [
          !hasEmail ? "Add a professional email address" : "Consider adding a professional LinkedIn profile",
          !hasPhone ? "Include a phone number with country code" : "Ensure phone number format is professional",
          !hasLinkedIn ? "Add LinkedIn profile URL" : "Keep contact information up to date"
        ].filter(Boolean)
      },
      workExperience: {
        score: experienceScore,
        feedback: hasExperience ? 
          "Good work experience section with relevant details." :
          "Work experience section is missing or needs significant improvement.",
        suggestions: [
          "Add more quantifiable achievements",
          "Use stronger action verbs",
          "Include industry-specific keywords",
          hasExperience ? "Provide specific metrics and results" : "Add detailed work history"
        ]
      },
      education: {
        score: educationScore,
        feedback: hasEducation ? 
          "Education section is present and adequately structured." :
          "Education section is missing or incomplete.",
        suggestions: [
          hasEducation ? "Include relevant coursework for recent graduates" : "Add educational background",
          "Add GPA if it's strong (3.5+)",
          "Mention academic achievements or honors"
        ]
      },
      skills: {
        score: skillsScore,
        feedback: hasSkills ? 
          `Skills section identified with ${presentKeywords.length} technical keywords found.` :
          "Skills section needs improvement and better organization.",
        suggestions: [
          "Categorize skills (Technical, Soft, Language)",
          "Rate proficiency levels",
          "Match skills to job requirements",
          presentKeywords.length > 0 ? "Add more trending technologies" : "Include relevant technical skills"
        ]
      }
    },
    keywords: {
      present: presentKeywords,
      missing: missingKeywords.slice(0, 5), // Limit to 5 suggestions
      suggestions: "Consider adding trending technologies in your field"
    },
    formatting: {
      score: wordCount > 200 ? 85 : 60,
      feedback: wordCount > 200 ? 
        "CV has good length and content density." :
        "CV appears to be quite short, consider adding more detail.",
      issues: [
        wordCount < 200 ? "CV content seems insufficient" : "Good content length",
        "Ensure consistent formatting throughout"
      ]
    },
    recommendations: [
      "Strengthen your professional summary with specific achievements",
      !hasEmail ? "Add professional contact information" : "Add more metrics and numbers to demonstrate impact",
      !hasExperience ? "Include detailed work experience" : "Consider restructuring sections for better flow",
      !hasSkills ? "Add a comprehensive skills section" : "Update skills to match current industry trends",
      "Include relevant certifications or training"
    ].slice(0, 5),
    industryComparison: {
      averageScore: 65,
      percentile: Math.max(Math.min(Math.round(overallScore * 1.2), 95), 25),
      feedback: `Your CV performs ${overallScore > 65 ? 'better than' : 'similar to'} average CVs in your industry`
    }
  };
}

export async function GET() {
  return NextResponse.json(
    { message: 'CV upload endpoint. Use POST to upload files.' },
    { status: 200 }
  );
}
