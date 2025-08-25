import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ATS Analysis - Optimize Your Resume for Applicant Tracking Systems | CV Review Expert',
    description: 'Analyze your CV for ATS compatibility and receive actionable insights to improve your chances of passing applicant tracking systems. Enhance your resume with our AI-powered ATS analysis service.',
};

export default function CVReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
