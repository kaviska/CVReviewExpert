import { Metadata } from 'next';
import Navbar from '../../component/es/Navbar';
import HeroSection from '../../component/es/HeroSection';
import HowItWorks from '../../component/es/HowItWorks';
import KeyFeatures from '../../component/es/KeyFeatures';
import WhyChooseUs from '../../component/es/WhyChooseUs';
import SampleOutput from '../../component/es/SampleOutput';
import ComingSoon from '../../component/es/ComingSoon';
import Testimonials from '../../component/es/Testimonials';
import PricingSection from '../../component/es/PricingSection';
import FAQ from '../../component/es/FAQ';
import CTAFooter from '../../component/es/CTAFooter';

export const metadata: Metadata = {
  title: 'Verificador de Currículum ATS Gratuito & Revisión de CV | Servicio de Currículum Profesional',
  description:
    'Sube tu CV o currículum para una verificación gratuita. Verificación instantánea de compatibilidad ATS, optimización de palabras clave y consejos profesionales de nuestro servicio de revisión de currículum con IA.',
  keywords: [
    'verificador de currículum ATS',
    'verificar currículum para ATS',
    'sistema de seguimiento de candidatos currículum',
    'servicio de revisión de currículum',
    'servicio de redacción de currículum',
    'redactores de currículum profesionales',
    'verificación de currículum',
    'revisión de CV',
    'plantilla de CV',
    'plantillas de currículum',
    'verificación gratuita de currículum'
  ],
  alternates: {
    canonical: '/es',
    languages: {
      'en': '/',
      'es': '/es'
    }
  },
  openGraph: {
    title: 'Verificador de Currículum ATS Gratuito & Revisión de CV | Servicio de Currículum Profesional',
    description: 'Sube tu CV o currículum para una verificación gratuita. Verificación instantánea de compatibilidad ATS, optimización de palabras clave y consejos profesionales de nuestro servicio de revisión de currículum con IA.',
    locale: 'es_ES'
  }
};

export default function SpanishPage() {
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
