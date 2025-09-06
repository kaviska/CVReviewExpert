import { Metadata } from 'next';
import Navbar from '../../component/pt/Navbar';
import HeroSection from '../../component/pt/HeroSection';
import HowItWorks from '../../component/pt/HowItWorks';
import KeyFeatures from '../../component/pt/KeyFeatures';
import WhyChooseUs from '../../component/pt/WhyChooseUs';
import SampleOutput from '../../component/pt/SampleOutput';
import ComingSoon from '../../component/pt/ComingSoon';
import Testimonials from '../../component/pt/Testimonials';
import PricingSection from '../../component/pt/PricingSection';
import FAQ from '../../component/pt/FAQ';
import CTAFooter from '../../component/pt/CTAFooter';

export const metadata: Metadata = {
  title: 'Verificador de Currículo ATS Gratuito & Revisão de CV | Serviço de Currículo Profissional',
  description:
    'Carregue o seu CV ou currículo para uma verificação gratuita. Verificação instantânea de compatibilidade ATS, otimização de palavras-chave e dicas profissionais do nosso serviço de revisão de currículo com IA.',
  keywords: [
    'verificador de currículo ATS',
    'verificar currículo para ATS',
    'sistema de rastreamento de candidatos currículo',
    'serviço de revisão de currículo',
    'serviço de redação de currículo',
    'redatores de currículo profissionais',
    'verificação de currículo',
    'revisão de CV',
    'modelo de CV',
    'modelos de currículo',
    'verificação gratuita de currículo'
  ],
  alternates: {
    canonical: '/pt',
    languages: {
      'en': '/',
      'pt': '/pt'
    }
  },
  openGraph: {
    title: 'Verificador de Currículo ATS Gratuito & Revisão de CV | Serviço de Currículo Profissional',
    description: 'Carregue o seu CV ou currículo para uma verificação gratuita. Verificação instantânea de compatibilidade ATS, otimização de palavras-chave e dicas profissionais do nosso serviço de revisão de currículo com IA.',
    locale: 'pt_PT'
  }
};

export default function PortuguesePage() {
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
