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