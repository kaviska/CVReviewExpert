import { Metadata } from 'next';
import Navbar from '../../../component/Navbar';
import Footer from '../../../component/Footer';

export const metadata: Metadata = {
  title: 'CV Review for Auditors - Professional Audit Resume Analysis | CVReviewExpert',
  description: 'Get your auditing CV professionally reviewed by AI. Optimize your auditor resume for accounting firms, corporations, and government agencies. Expert feedback for internal and external auditors.',
  keywords: [
    'auditor CV review',
    'audit resume review',
    'internal auditor CV',
    'external auditor resume',
    'audit manager CV',
    'financial audit resume',
    'auditing career',
    'CPA auditor CV',
    'compliance auditor resume',
    'audit job application',
    'auditing interview preparation',
    'risk management CV'
  ],
};

export default function AuditorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional CV Review for <span className="text-yellow-300">Auditors</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Get your auditing CV reviewed by AI experts. Stand out in audit job applications 
              and secure positions in Big Four firms, corporations, and government agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cv-review"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Review My Auditing CV Now
              </a>
              <a
                href="#features"
                className="border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Auditors Need Professional CV Review */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Audit CVs Require Specialized Review
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Audit employers seek professionals with strong analytical skills, attention to detail, 
              and knowledge of accounting standards. Your CV must effectively demonstrate these critical competencies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Audit Standards Expertise</h3>
              <p className="text-gray-600">
                Highlight your knowledge of GAAP, IFRS, SOX compliance, and other auditing standards 
                essential for professional audit roles.
              </p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytical Skills</h3>
              <p className="text-gray-600">
                Showcase your ability to analyze financial statements, identify risks, and detect 
                irregularities through detailed audit procedures.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Assessment</h3>
              <p className="text-gray-600">
                Demonstrate your experience in risk assessment, internal controls evaluation, 
                and fraud detection methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features for Auditors */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized CV Review for Audit Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI understands the unique requirements of audit CVs and provides targeted feedback 
              to help you succeed in auditing job applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔍 Audit Industry Focus</h3>
              <p className="text-gray-600">
                Tailored feedback for Big Four firms, mid-tier accounting firms, and internal audit positions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📊 Technical Skills</h3>
              <p className="text-gray-600">
                Optimize how you present your knowledge of audit software, data analytics, and testing procedures.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎓 Professional Certifications</h3>
              <p className="text-gray-600">
                Highlight your CPA, CIA, CISA, or other relevant audit and risk management certifications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Audit ATS Optimization</h3>
              <p className="text-gray-600">
                Format your CV to pass through audit firm and corporate Applicant Tracking Systems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏆 Achievement Highlighting</h3>
              <p className="text-gray-600">
                Emphasize audit findings, process improvements, and client satisfaction achievements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚀 Coming Soon: AI Interview Prep</h3>
              <p className="text-gray-600">
                Practice audit interview questions and case studies with our upcoming AI interview feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Specializations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Help Auditors in All Specializations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From junior auditors to audit partners, we provide specialized CV review for all 
              audit roles and specializations across different industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Staff Auditor',
              'Senior Auditor',
              'Audit Manager',
              'Internal Auditor',
              'External Auditor',
              'IT Auditor',
              'Compliance Auditor',
              'Forensic Auditor',
              'Tax Auditor',
              'Government Auditor',
              'Environmental Auditor',
              'Quality Auditor'
            ].map((specialization, index) => (
              <div key={index} className="bg-red-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-900">{specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Advance Your Audit Career?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get your auditing CV reviewed today and increase your chances of landing your ideal 
            audit position. Our AI provides instant, professional feedback.
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
              className="border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
          <p className="mt-6 text-lg opacity-90">
            🎯 <strong>Coming Soon:</strong> AI-powered audit interview preparation to help you ace your auditing job interviews!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
