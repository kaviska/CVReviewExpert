import { Metadata } from 'next';
import Navbar from '../component/Navbar';
import HeroSection from '../component/HeroSection';
import HowItWorks from '../component/HowItWorks';
import KeyFeatures from '../component/KeyFeatures';
import WhyChooseUs from '../component/WhyChooseUs';
import SampleOutput from '../component/SampleOutput';
import ComingSoon from '../component/ComingSoon';
import Testimonials from '../component/Testimonials';
import PricingSection from '../component/PricingSection';
import FAQ from '../component/FAQ';
import CTAFooter from '../component/CTAFooter';

export const metadata: Metadata = {
  title: 'Free ATS Resume Checker & CV Review | Pro Resume Service',
  description:
    'Upload your CV or resume for a free resume scan. Instant ATS compatibility check, keyword optimization, and pro tips from our AI-powered resume review service.',
  keywords: [
    'ATS resume checker',
    'check resume for ATS',
    'applicant tracking system resume',
    'resume review service',
    'resume writing service',
    'pro resume writers',
    'resume scan',
    'CV review',
    'CV template',
    'resume templates',
    'free resume check'
  ],
};


export default function Home() {
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
      <PricingSection />
      <FAQ />
      <CTAFooter />
    </div>
  );
}