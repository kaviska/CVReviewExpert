'use client';

import Script from 'next/script';

const ATSStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://cvreviewexpert.com/ats-analysis#webapp",
        "name": "Free ATS Resume Checker",
        "description": "Free ATS resume checker that analyzes your CV's compatibility with applicant tracking systems without requiring registration or login.",
        "url": "https://cvreviewexpert.com/ats-analysis",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "featureList": [
          "Free ATS score analysis",
          "No registration required",
          "Instant results",
          "Keyword optimization suggestions",
          "Resume formatting analysis",
          "Industry-specific recommendations"
        ],
        "screenshot": "https://cvreviewexpert.com/ats-checker-screenshot.jpg"
      },
      {
        "@type": "FAQPage",
        "@id": "https://cvreviewexpert.com/ats-analysis#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is an ATS score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An ATS (Applicant Tracking System) score measures how well your resume can be read and processed by automated recruitment software. It evaluates factors like formatting, keyword relevance, and structure. A higher ATS score (typically 70+) means your resume is more likely to pass through initial screening and reach human recruiters."
            }
          },
          {
            "@type": "Question",
            "name": "How to check CV ATS score for free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can check your CV's ATS score for free using our online ATS resume checker. Simply upload your resume in PDF or Word format, optionally add a job description for targeted analysis, and get instant results. No registration or payment required - it's completely free and takes less than 30 seconds."
            }
          },
          {
            "@type": "Question",
            "name": "Is a 70 ATS score good?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a 70 ATS score is considered good and indicates your resume is well-optimized for most ATS systems. Scores of 70-89 are in the 'Good' range, while 90+ is 'Excellent'. A score of 70 means your resume has a strong chance of passing initial ATS screening and reaching human recruiters for review."
            }
          },
          {
            "@type": "Question",
            "name": "Is my perfect CV ATS friendly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Even a 'perfect' CV might not be ATS-friendly if it uses complex formatting, graphics, or non-standard layouts. ATS systems prefer simple, clean formats with standard headings, readable fonts, and text-based content. Use our free ATS checker to verify if your CV is truly optimized for applicant tracking systems."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://cvreviewexpert.com/ats-analysis#howto",
        "name": "How to Check Your Resume's ATS Score for Free",
        "description": "Step-by-step guide to analyzing your resume's ATS compatibility using our free tool",
        "image": "https://cvreviewexpert.com/how-to-ats-check.jpg",
        "totalTime": "PT2M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Upload Your Resume",
            "text": "Simply drag and drop your CV or click to upload. We support PDF, DOC, and DOCX formats. No registration required.",
            "image": "https://cvreviewexpert.com/step1-upload.jpg"
          },
          {
            "@type": "HowToStep",
            "name": "Add Job Description (Optional)",
            "text": "Paste the job description to get targeted ATS analysis. Our system compares your resume against specific job requirements.",
            "image": "https://cvreviewexpert.com/step2-job-desc.jpg"
          },
          {
            "@type": "HowToStep",
            "name": "Get Instant ATS Score",
            "text": "Receive your ATS compatibility score within seconds. Our advanced algorithm analyzes formatting, keywords, and structure.",
            "image": "https://cvreviewexpert.com/step3-results.jpg"
          },
          {
            "@type": "HowToStep",
            "name": "Review Optimization Tips",
            "text": "Get detailed feedback on how to improve your resume's ATS score. Follow our recommendations to pass more ATS systems.",
            "image": "https://cvreviewexpert.com/step4-tips.jpg"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://cvreviewexpert.com#organization",
        "name": "CVReviewExpert",
        "url": "https://cvreviewexpert.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cvreviewexpert.com/logo.png"
        },
        "sameAs": [
          "https://www.linkedin.com/company/cvreviewexpert",
          "https://twitter.com/cvreviewexpert"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://cvreviewexpert.com/ats-analysis#webpage",
        "url": "https://cvreviewexpert.com/ats-analysis",
        "name": "Free ATS Resume Checker - Check Your ATS Score Without Login",
        "description": "Free ATS resume checker - Test your CV's ATS score instantly without registration. Our ATS score checker free tool helps optimize your resume for applicant tracking systems.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://cvreviewexpert.com#website"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://cvreviewexpert.com/ats-analysis-hero.jpg"
        },
        "datePublished": "2024-01-01",
        "dateModified": "2024-12-01"
      }
    ]
  };

  return (
    <Script
      id="ats-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default ATSStructuredData;
