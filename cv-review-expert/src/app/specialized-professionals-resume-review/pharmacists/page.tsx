import { Metadata } from 'next';
import Navbar from '../../../component/Navbar';
import Footer from '../../../component/Footer';

export const metadata: Metadata = {
  title: 'CV Review for Pharmacists - Professional Pharmacy Resume Analysis | CVReviewExpert',
  description: 'Get your pharmacy CV professionally reviewed by AI. Optimize your pharmacist resume for hospitals, retail pharmacies, and clinical positions. Expert feedback for PharmD graduates and experienced pharmacists.',
  keywords: [
    'pharmacist CV review',
    'pharmacy resume review',
    'PharmD CV analysis',
    'clinical pharmacist resume',
    'retail pharmacist CV',
    'hospital pharmacist job application',
    'pharmacy career',
    'pharmaceutical CV writing',
    'pharmacist interview preparation',
    'pharmacy technician resume',
    'pharmaceutical industry CV'
  ],
};

export default function PharmacistsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional CV Review for <span className="text-yellow-300">Pharmacists</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Get your pharmacy CV reviewed by AI experts. Stand out in pharmaceutical job applications 
              and secure positions in hospitals, retail pharmacies, and clinical settings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cv-review"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Review My Pharmacy CV Now
              </a>
              <a
                href="#features"
                className="border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pharmacists Need Professional CV Review */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Pharmacy CVs Require Specialized Review
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pharmacy employers seek specific qualifications, licensing, and clinical experience. 
              Your CV must effectively communicate your pharmaceutical expertise and patient care skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Licensing & Certifications</h3>
              <p className="text-gray-600">
                Highlight your PharmD degree, state pharmacy license, and specialized certifications 
                like MTM, immunization, or compounding credentials.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clinical Experience</h3>
              <p className="text-gray-600">
                Showcase your clinical rotations, medication therapy management, and patient 
                counseling experience across different pharmacy settings.
              </p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pharmaceutical Knowledge</h3>
              <p className="text-gray-600">
                Demonstrate your drug interaction expertise, formulary management, and knowledge 
                of pharmacy law and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features for Pharmacists */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized CV Review for Pharmacy Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI understands the unique requirements of pharmacy CVs and provides targeted feedback 
              to help you succeed in pharmaceutical job applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💊 Pharmacy Industry Focus</h3>
              <p className="text-gray-600">
                Tailored feedback for retail, hospital, clinical, and industrial pharmacy positions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎓 Education & Licensing</h3>
              <p className="text-gray-600">
                Optimize how you present your PharmD, residencies, fellowships, and state licensing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏥 Clinical Experience</h3>
              <p className="text-gray-600">
                Highlight your APPE rotations, medication management, and patient care experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 ATS Optimization</h3>
              <p className="text-gray-600">
                Format your CV to pass through pharmacy employer Applicant Tracking Systems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📋 Specialization Highlighting</h3>
              <p className="text-gray-600">
                Emphasize your specialty areas like oncology, cardiology, or infectious diseases pharmacy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚀 Coming Soon: AI Interview Prep</h3>
              <p className="text-gray-600">
                Practice pharmacy interview questions and clinical scenarios with our upcoming AI feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmacy Career Paths */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Help Pharmacists in All Career Paths
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From new PharmD graduates to experienced clinical pharmacists, we provide specialized 
              CV review for all pharmacy career levels and specializations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Retail Pharmacist',
              'Hospital Pharmacist',
              'Clinical Pharmacist',
              'Pharmacy Technician',
              'Compounding Pharmacist',
              'Industrial Pharmacist',
              'Consulting Pharmacist',
              'Nuclear Pharmacist',
              'Oncology Pharmacist',
              'Psychiatric Pharmacist',
              'Ambulatory Care Pharmacist',
              'Pharmacy Manager'
            ].map((career, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-900">{career}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Advance Your Pharmacy Career?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get your pharmacy CV reviewed today and increase your chances of landing your ideal 
            pharmacist position. Our AI provides instant, professional feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/cv-review"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your CV Review
            </a>
            <a
              href="/pricing"
              className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
          <p className="mt-6 text-lg opacity-90">
            🎯 <strong>Coming Soon:</strong> AI-powered pharmacy interview preparation to help you ace your pharmaceutical job interviews!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
