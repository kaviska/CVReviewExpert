import { Metadata } from 'next';
import Navbar from '../../component/jp/Navbar';
import HeroSection from '../../component/jp/HeroSection';
import HowItWorks from '../../component/jp/HowItWorks';
import KeyFeatures from '../../component/jp/KeyFeatures';
import WhyChooseUs from '../../component/jp/WhyChooseUs';
import SampleOutput from '../../component/jp/SampleOutput';
import ComingSoon from '../../component/jp/ComingSoon';
import Testimonials from '../../component/jp/Testimonials';
import PricingSection from '../../component/jp/PricingSection';
import FAQ from '../../component/jp/FAQ';
import CTAFooter from '../../component/jp/CTAFooter';

export const metadata: Metadata = {
  title: '無料ATS履歴書チェッカー & CVレビュー | プロ履歴書サービス',
  description:
    'CVや履歴書をアップロードして無料履歴書スキャンを受けましょう。即座のATS互換性チェック、キーワード最適化、AIパワード履歴書レビューサービスからのプロのヒント。',
  keywords: [
    'ATS履歴書チェッカー',
    'ATS履歴書チェック',
    '応募者追跡システム履歴書',
    '履歴書レビューサービス',
    '履歴書作成サービス',
    'プロ履歴書ライター',
    '履歴書スキャン',
    'CVレビュー',
    'CVテンプレート',
    '履歴書テンプレート',
    '無料履歴書チェック'
  ],
  alternates: {
    canonical: '/jp',
    languages: {
      'en': '/',
      'ja': '/jp'
    }
  },
  openGraph: {
    title: '無料ATS履歴書チェッカー & CVレビュー | プロ履歴書サービス',
    description: 'CVや履歴書をアップロードして無料履歴書スキャンを受けましょう。即座のATS互換性チェック、キーワード最適化、AIパワード履歴書レビューサービスからのプロのヒント。',
    locale: 'ja_JP'
  }
};

export default function JapanesePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <KeyFeatures />
      <WhyChooseUs />
      <SampleOutput />
      <ComingSoon />
      <Testimonials />
      {/* <PricingSection /> */}
      <FAQ />
      <CTAFooter />
    </div>
  );
}
