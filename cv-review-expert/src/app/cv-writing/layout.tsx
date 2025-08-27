import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free AI CV Writing Service',
    description: 'Get your CV written by advanced AI technology for free. AI-powered resume writing with ATS optimization and instant results. No payment required - completely free AI CV writer.',
    keywords: [
        'free ai cv writing service',
        'ai cv writer free',
        'free ai resume writer',
        'ai powered cv writing',
        'free cv writing service',
        'ai resume generator',
        'free resume writing ai',
        'artificial intelligence cv writer',
        'ai cv writing tool',
        'free automated cv writing',
        'ai resume builder free',
        'machine learning cv writing',
        'free ai resume generator',
        'automated resume writing free',
        'ai cv creator free'
    ],
    authors: [{ name: 'CV Review Expert' }],
    creator: 'CV Review Expert',
    publisher: 'CV Review Expert',
    category: 'Career Services',
    classification: 'Professional Services',
    openGraph: {
        title: 'Free AI CV Writing Service | AI-Powered Resume Writer | CV Review Expert',
        description: 'Get your CV written by advanced AI technology for free. AI-powered resume writing with ATS optimization and instant results. No payment required - completely free AI CV writer.',
        url: 'https://cvreviewexpert.com/cv-writing',
        siteName: 'CV Review Expert',
        type: 'website',
        locale: 'en_US',
        images: [
            {
                url: 'https://cvreviewexpert.com/ai-cv-writing-service-og.jpg',
                width: 1200,
                height: 630,
                alt: 'Free AI CV Writing Service - AI-Powered Resume Writer',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free AI CV Writing Service | AI-Powered Resume Writer',
        description: 'Get your CV written by advanced AI technology for free. AI-powered resume writing with ATS optimization and instant results.',
        site: '@cvreviewexpert',
        creator: '@cvreviewexpert',
        images: ['https://cvreviewexpert.com/ai-cv-writing-service-twitter.jpg'],
    },
    alternates: {
        canonical: 'https://cvreviewexpert.com/cv-writing',
        languages: {
            'en-US': 'https://cvreviewexpert.com/cv-writing',
            'en-GB': 'https://cvreviewexpert.com/en-gb/cv-writing',
            'en-CA': 'https://cvreviewexpert.com/en-ca/cv-writing',
            'en-AU': 'https://cvreviewexpert.com/en-au/cv-writing',
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
        yahoo: 'your-yahoo-verification-code',
    },
    other: {
        'revisit-after': '7 days',
        'distribution': 'global',
        'rating': 'general',
        'referrer': 'origin-when-cross-origin',
    },
};

export default function CVReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
