import { Metadata } from 'next';
import Navbar from '../../component/ar/Navbar';
import HeroSection from '../../component/ar/HeroSection';
import HowItWorks from '../../component/ar/HowItWorks';
import KeyFeatures from '../../component/ar/KeyFeatures';
import WhyChooseUs from '../../component/ar/WhyChooseUs';
import SampleOutput from '../../component/ar/SampleOutput';
import ComingSoon from '../../component/ar/ComingSoon';
import Testimonials from '../../component/ar/Testimonials';
import PricingSection from '../../component/ar/PricingSection';
import FAQ from '../../component/ar/FAQ';
import CTAFooter from '../../component/ar/CTAFooter';

export const metadata: Metadata = {
  title: 'فاحص السيرة الذاتية ATS المجاني ومراجعة السيرة الذاتية | خدمة السيرة الذاتية المهنية',
  description:
    'ارفع سيرتك الذاتية للحصول على فحص مجاني. فحص فوري للتوافق مع ATS وتحسين الكلمات المفتاحية ونصائح مهنية من خدمة مراجعة السيرة الذاتية المدعومة بالذكاء الاصطناعي.',
  keywords: [
    'فاحص السيرة الذاتية ATS',
    'فحص السيرة الذاتية لـ ATS',
    'نظام تتبع المتقدمين السيرة الذاتية',
    'خدمة مراجعة السيرة الذاتية',
    'خدمة كتابة السيرة الذاتية',
    'كتاب السيرة الذاتية المحترفين',
    'فحص السيرة الذاتية',
    'مراجعة السيرة الذاتية',
    'قالب السيرة الذاتية',
    'قوالب السيرة الذاتية',
    'فحص السيرة الذاتية المجاني'
  ],
  alternates: {
    canonical: '/ar',
    languages: {
      'en': '/',
      'ar': '/ar'
    }
  },
  openGraph: {
    title: 'فاحص السيرة الذاتية ATS المجاني ومراجعة السيرة الذاتية | خدمة السيرة الذاتية المهنية',
    description: 'ارفع سيرتك الذاتية للحصول على فحص مجاني. فحص فوري للتوافق مع ATS وتحسين الكلمات المفتاحية ونصائح مهنية من خدمة مراجعة السيرة الذاتية المدعومة بالذكاء الاصطناعي.',
    locale: 'ar_SA'
  }
};

export default function ArabicPage() {
  return (
    <div className="min-h-screen" dir="rtl">
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
