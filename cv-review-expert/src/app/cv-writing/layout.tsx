import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI CV Writing Service | CV Review Expert',
    description: 'Enhance your career prospects with our AI-powered CV writing service. Get a professionally crafted resume tailored to your goals and industry.',
};

export default function CVReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
