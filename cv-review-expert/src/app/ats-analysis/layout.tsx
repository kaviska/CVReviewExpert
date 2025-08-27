import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free ATS Resume Checker - Check Your ATS Score Without Login | CVReviewExpert',
  description: 'Free ATS resume checker - Test your CV\'s ATS score instantly without registration. Our ATS score checker free tool helps optimize your resume for applicant tracking systems. Get detailed analysis and improve your interview chances.',
  keywords: 'ats resume checker free, ats score checker free without login, free ats resume scanner, ats compatibility checker, applicant tracking system checker, resume ats optimization, ats friendly resume analyzer',
  robots: 'index, follow',
  openGraph: {
    title: 'Free ATS Resume Checker - No Login Required',
    description: 'Test your resume\'s ATS compatibility instantly with our free checker. Get detailed analysis and optimization tips to improve your job application success rate.',
    type: 'website',
    url: 'https://cvreviewexpert.com/ats-analysis',
    siteName: 'CVReviewExpert',
    images: [
      {
        url: 'https://cvreviewexpert.com/og-ats-checker.jpg',
        width: 1200,
        height: 630,
        alt: 'Free ATS Resume Checker - CVReviewExpert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free ATS Resume Checker - Check Your ATS Score',
    description: 'Free ATS score checker - Analyze your resume\'s compatibility with applicant tracking systems. No registration required.',
    images: ['https://cvreviewexpert.com/twitter-ats-checker.jpg'],
  },
  alternates: {
    canonical: 'https://cvreviewexpert.com/ats-analysis',
  },
  other: {
    'article:author': 'CVReviewExpert',
    'article:section': 'Career Tools',
    'article:tag': 'ATS, Resume Checker, Job Search, Career',
  },
  metadataBase: new URL('https://cvreviewexpert.com'),

};


export default function ATSAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
