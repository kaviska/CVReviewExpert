import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | CV Review Expert Japan',
    default: 'CV Review Expert Japan - 無料ATS履歴書チェッカー'
  },
  description: '日本向け無料ATS履歴書チェッカー&CVレビューサービス。AI搭載の履歴書分析で面接機会を増やしましょう。',
  metadataBase: new URL('https://cvreviewexpert.com'),
  alternates: {
    canonical: '/jp',
    languages: {
      'en': '/',
      'ja': '/jp'
    }
  },
  openGraph: {
    locale: 'ja_JP',
    type: 'website',
    siteName: 'CV Review Expert Japan',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function JapaneseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="ja">
      {children}
    </div>
  )
}
