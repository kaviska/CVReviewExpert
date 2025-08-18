import { Metadata } from 'next';
import Navbar from '../../../component/Navbar';
import Footer from '../../../component/Footer';

export const metadata: Metadata = {
  title: 'CV Review for Accountants - Professional Accounting Resume Analysis | CVReviewExpert',
  description: 'Get your accounting CV professionally reviewed by AI. Optimize your accountant resume for firms, corporations, and government agencies. Expert feedback for CPAs, bookkeepers, and accounting professionals.',
  keywords: [
    'accountant CV review',
    'accounting resume review',
    'CPA CV analysis',
    'bookkeeper resume review',
    'tax accountant CV',
    'financial accounting resume',
    'accounting job application',
    'accounting career',
    'CPA exam resume',
    'public accounting CV',
    'corporate accounting resume',
    'accounting interview preparation'
  ],
};

export default function AccountantsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional CV Review for <span className="text-yellow-300">Accountants</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Get your accounting CV reviewed by AI experts. Stand out in financial job applications 
              and secure positions in accounting firms, corporations, and government agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cv-review"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Review My Accounting CV Now
              </a>
              <a
                href="#features"
                className="border-2 border-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Accountants Need Professional CV Review */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Accounting CVs Require Specialized Review
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accounting employers seek specific qualifications, certifications, and technical skills. 
              Your CV must effectively demonstrate your financial expertise and attention to detail.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Certifications</h3>
              <p className="text-gray-600">
                Highlight your CPA, CMA, CIA, or other professional accounting certifications and licenses 
                to demonstrate your credibility and expertise.
              </p>
            </div>
            
            <div className="bg-teal-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Skills</h3>
              <p className="text-gray-600">
                Showcase your proficiency in accounting software like QuickBooks, SAP, Excel, and 
                financial analysis tools essential for modern accounting roles.
              </p>
            </div>
            
            <div className="bg-cyan-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Expertise</h3>
              <p className="text-gray-600">
                Demonstrate your experience with financial reporting, tax preparation, auditing, 
                and compliance with accounting standards and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features for Accountants */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized CV Review for Accounting Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI understands the unique requirements of accounting CVs and provides targeted feedback 
              to help you succeed in financial job applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💼 Accounting Industry Focus</h3>
              <p className="text-gray-600">
                Tailored feedback for public accounting firms, corporate finance, and government accounting positions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎓 Certification Highlighting</h3>
              <p className="text-gray-600">
                Optimize how you present your CPA, CMA, CIA, and other professional accounting credentials.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💻 Technical Skills</h3>
              <p className="text-gray-600">
                Highlight your proficiency in accounting software, ERP systems, and financial analysis tools.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Finance ATS Optimization</h3>
              <p className="text-gray-600">
                Format your CV to pass through financial industry Applicant Tracking Systems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📊 Achievement Quantification</h3>
              <p className="text-gray-600">
                Emphasize quantifiable achievements like cost savings, process improvements, and audit results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚀 Coming Soon: AI Interview Prep</h3>
              <p className="text-gray-600">
                Practice accounting interview questions and technical scenarios with our upcoming AI feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accounting Specializations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Help Accountants in All Specializations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From entry-level bookkeepers to senior CPAs, we provide specialized CV review for all 
              accounting roles and career levels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Staff Accountant',
              'Senior Accountant',
              'Tax Accountant',
              'Cost Accountant',
              'Management Accountant',
              'Forensic Accountant',
              'Internal Auditor',
              'External Auditor',
              'Bookkeeper',
              'Payroll Specialist',
              'Financial Analyst',
              'Accounting Clerk'
            ].map((specialization, index) => (
              <div key={index} className="bg-emerald-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-900">{specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Advance Your Accounting Career?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get your accounting CV reviewed today and increase your chances of landing your ideal 
            accounting position. Our AI provides instant, professional feedback.
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
              className="border-2 border-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
          <p className="mt-6 text-lg opacity-90">
            🎯 <strong>Coming Soon:</strong> AI-powered accounting interview preparation to help you ace your financial job interviews!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
