'use client';

import React from 'react';

const CVWritingStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://cvreviewexpert.com/cv-writing#service",
        "name": "Professional CV Writing Service",
        "description": "Expert CV writing service with ATS optimization, professional formatting, and industry-specific customization. Get your resume written by certified professionals with 95% interview success rate.",
        "provider": {
          "@type": "Organization",
          "name": "CV Review Expert",
          "url": "https://cvreviewexpert.com",
          "logo": "https://cvreviewexpert.com/logo.png",
          "sameAs": [
            "https://linkedin.com/company/cvreviewexpert",
            "https://twitter.com/cvreviewexpert"
          ]
        },
        "serviceType": "CV Writing Service",
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "CV Writing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Resume Writing",
                "description": "Professional resume writing service with ATS optimization and expert formatting"
              },
              "price": "49",
              "priceCurrency": "USD",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Career Change CV",
                "description": "Specialized CV writing for career transitions and industry changes"
              },
              "price": "89",
              "priceCurrency": "USD",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Executive Resume Writing",
                "description": "Premium executive resume writing for C-suite and senior leadership positions"
              },
              "price": "149",
              "priceCurrency": "USD",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock"
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "847",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Sarah Johnson"
            },
            "reviewBody": "CV Review Expert transformed my outdated resume into a modern, ATS-optimized masterpiece. I got 3 interview calls within a week of applying with my new CV!"
          },
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Michael Chen"
            },
            "reviewBody": "The executive resume writing service exceeded my expectations. Professional, detailed, and perfectly captured my leadership experience. Highly recommended!"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://cvreviewexpert.com#organization",
        "name": "CV Review Expert",
        "url": "https://cvreviewexpert.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cvreviewexpert.com/logo.png",
          "width": 200,
          "height": 200
        },
        "description": "Professional CV writing service providing expert resume writing, ATS optimization, and career advancement solutions. Trusted by 5,000+ professionals worldwide.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-CV-EXPERT",
          "contactType": "customer service",
          "availableLanguage": ["English"],
          "areaServed": "Worldwide"
        },
        "sameAs": [
          "https://linkedin.com/company/cvreviewexpert",
          "https://twitter.com/cvreviewexpert",
          "https://facebook.com/cvreviewexpert"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://cvreviewexpert.com#website",
        "url": "https://cvreviewexpert.com",
        "name": "CV Review Expert",
        "description": "Professional CV writing service and resume optimization platform",
        "publisher": {
          "@id": "https://cvreviewexpert.com#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://cvreviewexpert.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://cvreviewexpert.com/cv-writing#webpage",
        "url": "https://cvreviewexpert.com/cv-writing",
        "name": "Professional CV Writing Service | Expert Resume Writers | CV Review Expert",
        "description": "Get your CV written by certified professionals. ATS-optimized resumes with 95% interview success rate. Professional CV writing service starting at $49. 48-hour delivery guaranteed.",
        "isPartOf": {
          "@id": "https://cvreviewexpert.com#website"
        },
        "datePublished": "2024-01-01",
        "dateModified": "2024-12-20",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://cvreviewexpert.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "CV Writing Service",
              "item": "https://cvreviewexpert.com/cv-writing"
            }
          ]
        },
        "mainEntity": {
          "@id": "https://cvreviewexpert.com/cv-writing#service"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://cvreviewexpert.com/cv-writing#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does professional CV writing cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our professional CV writing service starts at $49 for a professional resume, $89 for career change CVs, and $149 for executive resumes. All packages include ATS optimization, professional formatting, and unlimited revisions."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to write a professional CV?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We deliver professionally written CVs within 48 hours. Rush delivery options are available for urgent requests, with same-day delivery possible for an additional fee."
            }
          },
          {
            "@type": "Question",
            "name": "Are your CV writers certified professionals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all our CV writers are certified resume writing professionals with industry experience. They hold certifications from recognized organizations and have expertise in various industries and career levels."
            }
          },
          {
            "@type": "Question",
            "name": "Do you optimize CVs for Applicant Tracking Systems (ATS)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! All our CVs are ATS-optimized with proper formatting, relevant keywords, and strategic content placement to ensure they pass through automated screening systems and reach human recruiters."
            }
          },
          {
            "@type": "Question",
            "name": "What industries do you write CVs for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We write professional CVs for all industries including technology, healthcare, finance, engineering, marketing, education, law, and more. Our writers have expertise across various sectors and career levels."
            }
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://cvreviewexpert.com/cv-writing#professional-service",
        "name": "Expert CV Writing Service",
        "description": "Professional resume writing service with certified writers, ATS optimization, and guaranteed results",
        "serviceOutput": {
          "@type": "CreativeWork",
          "name": "Professional Resume/CV",
          "description": "ATS-optimized, professionally formatted resume tailored to your industry and career goals"
        },
        "provider": {
          "@id": "https://cvreviewexpert.com#organization"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default CVWritingStructuredData;
