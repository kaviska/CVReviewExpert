import { Metadata } from 'next';
import Navbar from '../../component/fr/Navbar';
import HeroSection from '../../component/fr/HeroSection';
import HowItWorks from '../../component/fr/HowItWorks';
import KeyFeatures from '../../component/fr/KeyFeatures';
import WhyChooseUs from '../../component/fr/WhyChooseUs';
import SampleOutput from '../../component/fr/SampleOutput';
import ComingSoon from '../../component/fr/ComingSoon';
import Testimonials from '../../component/fr/Testimonials';
import PricingSection from '../../component/fr/PricingSection';
import FAQ from '../../component/fr/FAQ';
import CTAFooter from '../../component/fr/CTAFooter';

export const metadata: Metadata = {
  title: 'Vérificateur de CV ATS Gratuit & Révision de CV | Service de CV Professionnel',
  description:
    'Téléchargez votre CV ou curriculum vitae pour un scan gratuit. Vérification instantanée de compatibilité ATS, optimisation des mots-clés, et conseils professionnels de notre service de révision de CV alimenté par IA.',
  keywords: [
    'vérificateur de CV ATS',
    'vérifier CV pour ATS',
    'système de suivi des candidatures CV',
    'service de révision de CV',
    'service de rédaction de CV',
    'rédacteurs de CV professionnels',
    'scan de CV',
    'révision de CV',
    'modèle de CV',
    'modèles de CV',
    'vérification gratuite de CV'
  ],
  alternates: {
    canonical: '/fr',
    languages: {
      'en': '/',
      'fr': '/fr',
      'ja': '/jp'
    }
  },
  openGraph: {
    title: 'Vérificateur de CV ATS Gratuit & Révision de CV | Service de CV Professionnel',
    description: 'Téléchargez votre CV ou curriculum vitae pour un scan gratuit. Vérification instantanée de compatibilité ATS, optimisation des mots-clés, et conseils professionnels de notre service de révision de CV alimenté par IA.',
    locale: 'fr_FR'
  }
};

export default function FrenchPage() {
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
