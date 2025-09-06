import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV Review - Upload Your Resume | CV Review Expert',
  description: 'Upload your CV and get professional feedback with our AI-powered review service. Get detailed analysis and suggestions to improve your resume.',
};

export default function CVReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
